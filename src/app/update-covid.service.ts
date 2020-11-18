import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CovidID } from './models/covid';

@Injectable({
  providedIn: 'root',
})
export class UpdateCovidService {
  private URL = 'https://universitas-terbuka-bot.herokuapp.com/covid/';

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<CovidID>(this.URL);
  }
}
