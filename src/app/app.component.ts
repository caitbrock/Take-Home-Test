import { Component, OnInit, VERSION } from '@angular/core';
import { DataRetrievalService } from './services/data-retrieval.service';
import { data } from './data/data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataRetrievalService],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  constructor(public services: DataRetrievalService) {}

  public ngOnInit() {
    this.mydata = this.services.retrieveGeoJSON();
  }

  mydata: object = {};

  //Maximum Income Values
  getMax() {
    let max = data.features[0].properties['Total income: Average amount ($)'];
    for (let i = 1; i < data.features.length; ++i) {
      if (
        data.features[i].properties['Total income: Average amount ($)'] > max
      ) {
        max = data.features[i].properties['Total income: Average amount ($)'];
      }
      console.log(data.features.length);
    }
    return max;
  }

  //Minimum Income Values
  getMin() {
    let min = data.features[0].properties['Total income: Average amount ($)'];
    for (let i = 1; i < data.features.length; ++i) {
      if (
        data.features[i].properties['Total income: Average amount ($)'] < min
      ) {
        min = data.features[i].properties['Total income: Average amount ($)'];
      }
    }
    return min;
  }

  //Average Income Value
  getAverage() {
    let sum = data.features[0].properties['Total income: Average amount ($)'];
    for (let i = 1; i < data.features.length; ++i) {
      sum += data.features[i].properties['Total income: Average amount ($)'];
    }
    let average = sum / data.features.length;
    return Math.trunc(average);
  }

  //Coordinate Values
  getCoordinates() {
    let coordinates = data.features[0].geometry.coordinates[0][0];
    for (let i = 1; i < data.features.length; ++i) {
      return coordinates;
    }
  }
}
