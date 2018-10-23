import { Component, ElementRef, QueryList, ViewChild, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Options, ChangeContext, PointerType, LabelType } from 'ng5-slider';
import * as moment from 'moment';
import { extendMoment } from 'moment-range';
import { range } from 'rxjs';
@Component({
  selector: 'app-time-dim',
  templateUrl: './time-dim.component.html',
  styleUrls: ['./time-dim.component.css']
})
export class TimeDimComponent implements OnInit {
  state = 'pause';
  moments = extendMoment(moment);
  public range = Array.from(this.moments.range(moment('2018-10-1'), moment()).by('day'));
  public index = 0;
  @Output() timeChanged = new EventEmitter<any>(true);
  @ViewChild('button_play') play_pause: ElementRef;
  value: number = this.range[this.index].valueOf();

  options: Options = {
    stepsArray: this.range.map((date: moment.Moment) => {
      return { value: date.valueOf() };
    }),
    step: 1,
    showTicks: true,
    translate: (value: number, label: LabelType): string => {
      return new Date(value).toDateString();
    }
  };


constructor() {
}

  ngOnInit() {
  }

  buttonRewindPress() {
    console.log('button rewind invoked.');
    if (this.index === 0) {return; }
    this.index--;
    this.move();
  }

  buttonFastforwardPress() {
    console.log('button fast forward invoked.');
    if (this.index >= this.range.length) {return; }
    this.index++;
    this.move();
    }

  buttonPlayPress() {
    if (this.state === 'pause') {
      this.state = 'play';
      this.ply();
      this.play_pause.nativeElement.setAttribute('class', 'fa fa-pause');
    } else if (this.state === 'play') {
      this.state = 'pause';
      this.play_pause.nativeElement.setAttribute('class', 'fa fa-play');
    }
    console.log('button play pressed, play was ' + this.state);
  }

  buttonStopPress() {
    this.state = 'stop';
    this.play_pause.nativeElement.select('i').setAttribute('class', 'fa fa-play');
    console.log('button stop invoked.');
  }
  onUserChange(changeContext: ChangeContext): void {
    this.timeChanged.emit({
      value: new Date(changeContext.value)
      // highValue: new Date(changeContext.highValue)
    });
  }
  async ply() {
    while (this.state === 'play') {
      if (this.index >= this.range.length) {
        this.state = 'pause';
        this.play_pause.nativeElement.setAttribute('class', 'fa fa-play');
        return; }
    this.index++;
   this.move();
      await this.delay(3000);
      console.log('playing');
    }
}
private delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
private move() {
  this.value = this.range[this.index].valueOf();
  this.timeChanged.emit({
    value: new Date(this.value)
  });
}

}
