import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DummyapiService {
  private readonly url: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
