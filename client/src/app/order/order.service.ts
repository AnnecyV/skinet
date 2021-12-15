import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getOrderForUser() {
    return this.http.get(this.baseUrl + 'orders');
  }

  getOrderDetail(id: number) {
    return this.http.get(this.baseUrl + 'orders/' + id);
  }
}
