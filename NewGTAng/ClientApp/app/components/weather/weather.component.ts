import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms'

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html'
})
export class WeatherComponent {
    public weather: Weather;

    constructor(private http: Http) {
      
    }

    public getWeather(chosenCity: string) {
        this.http.get('http://localhost:3000/api/weather/city/'+chosenCity).subscribe(result => {
            this.weather = result.json();
        });
    }

    public postWeather(chosenCity: string) {
        this.http.post('http://localhost:3000/api/weather/PostCity', {'city': chosenCity }).subscribe();
    }

   

}

interface Weather {
    temp: string;
    summary: string;
    city: string;
}
    