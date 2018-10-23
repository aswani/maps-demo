import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import * as moment from 'moment';
import * as _ from 'underscore';
import { Port, Vessel, VesselMovment } from './models';
import { SampleData } from './data';

declare var google: any;

interface Alert {
  lat: number;
  lng: number;
  id: number;
  score: number;
  desc?: string;
  viewport?: Object;
  zoom?: number;
  address_level_1?: string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  label?: string;
  time?: Date;
}


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  geocoder: any;
  samplaeData = new SampleData();
  color = '#FF0000';
  private serverUrl = 'http://localhost:8080/socket/';
  private stompClient;
  public location: Alert = {
    lat: 24.774265,
    lng: 46.738586,
    desc: 'hello',
    id: 111,
    score: 1.3,
    zoom: 6
  };

  public locations: Array<VesselMovment> = [];
  public IncomingLocations: Array<VesselMovment> = [];
  public pointerDate: number = moment('2018-01-01').valueOf();
  public minDate: number = moment('2018-01-01').valueOf();

  @ViewChild(AgmMap) map: AgmMap;

  constructor(public mapsApiLoader: MapsAPILoader,
    private zone: NgZone,
    private wrapper: GoogleMapsAPIWrapper) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });

  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  ngOnInit() {
    // this.location.marker.draggable = false;
    this.initializeWebSocketConnection();
    this.loadData();
  }

  mapClicked($event: MouseEvent) {
  }
  private loadData() {
    this.locations = this.samplaeData.vessels.get('vessel1').tracks;
    this.IncomingLocations = this.samplaeData.vessels.get('vessel1').tracks;
    console.log(this.samplaeData.vessels.get('vessel1').tracks);
  }
  initializeWebSocketConnection() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.debug = null;
    const that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/hello', (message) => {
        if (message.body) {
          const alert = JSON.parse(message.body);
          // console.log(t)
          // if (moment(alert.time).isBetween(that.pointerDate, that.minDate)) {
          //   console.log(alert);
          //   that.locations.push(alert);
          // }
          // that.IncomingLocations.push(alert);
        }
      });
    });
  }
  mapReady(event: any) {
    const points_map = event;
    points_map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(document.getElementById('time-dim'));
    // const flightPath = new google.maps.Polyline({
    //   path: this.points,
    //   geodesic: true,
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 1.0,
    //   strokeWeight: 2
    // });

    // flightPath.setMap(this.points_map);
  }
  timeChanged(event: any) {
    this.pointerDate = event.value;
    // this.minDate = event.maxValue;
    console.log(event.value);
    this.UpdateLocations();
  }
  UpdateLocations() {
    // this.locations.empty();
    this.locations = _.filter(this.IncomingLocations, function (track) {
      // console.log(track.time, moment(track.time).isBetween(this.pointerDate, this.minDate));
      return moment(track.start_date).isBetween( this.minDate, this.pointerDate);
    }, this);
  }
}
