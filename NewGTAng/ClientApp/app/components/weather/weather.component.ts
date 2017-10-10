import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'weather',
    templateUrl: './weather.component.html'
})
export class WeatherComponent {

    weather: Weather;
    constructor(private http: Http) {
        this.weather = new Weather();
    }

    public getWeather(chosenCity: string) {
        this.http.get('http://localhost:3000/api/weather/city/'+chosenCity).subscribe(result => {
            this.weather = result.json();
        });
    }

    public postWeather() {
        //var body = { 
        //    "temp":"20",
        //    "summary":"test 123",
        //    "city": "ND"
        //};
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post('http://localhost:3000/api/weather', this.weather, options).subscribe();
    }

  

   

}

export class Weather {
    temp: string;
    summary: string;
    city: string;
    constructor() {
    }
}
    