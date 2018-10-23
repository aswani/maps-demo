import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// add
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './map/map.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { TimeDimComponent } from './time-dim/time-dim.component';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TimeDimComponent,
  ],
  imports: [
    BrowserModule,
    // add
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCG8GShMLqxGTZsGHCG-2fxzKfdTaXyPXQ'}),
    FormsModule,
    NgbModule.forRoot(),
    AgmSnazzyInfoWindowModule,
    Ng5SliderModule,
    AgmJsMarkerClustererModule
  ],
  providers: [
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
