import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    return this.http.get<any>(apiUrl);
  }
}
