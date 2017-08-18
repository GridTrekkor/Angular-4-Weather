import { Component } from '@angular/core';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor (private _jsonp: Jsonp) {}

  apiKey: string = '';

  apiFeatures: string = '/geolookup/conditions/forecast/astronomy/almanac';

  loading: Boolean = false;

  weatherData: any;

  getWeather (searchTerm?: string) {

    this.loading = true;

    let apiURL: string = 'http://api.wunderground.com/api/' + this.apiKey + this.apiFeatures + '/q/' + (searchTerm || 'KMSP') + '.json?callback=JSONP_CALLBACK';

    // console.log(new Date(), apiURL);

    return this._jsonp.request(apiURL)
      .subscribe(response => {
        this.weatherData = response.json();
        this.loading = false;
        console.log(this.weatherData);
      });

  }

  ngOnInit () {
    this.getWeather();
  }

}
