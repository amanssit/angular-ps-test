import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url: any;
  constructor(private http: HttpClient) {
    this.url = `${environment.newsApi}/search?`;
  }

  getNews(params): Observable<any> {
    let queryStringData = new URLSearchParams(params).toString();
    return this.http.get(`${this.url}${queryStringData}`);
  }
}
