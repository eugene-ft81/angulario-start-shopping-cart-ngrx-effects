import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  DELAY = 3000
  API_URL = 'http://localhost:3000/'

  constructor(private http: HttpClient) {}

  get<T>(path: string) {
    return this.http.get<T>(`${this.API_URL}${path}`)
      .pipe(delay(this.DELAY))
  }
}
