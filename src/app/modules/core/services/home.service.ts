import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../Interface/articles';
import {  environment } from '../../../../env/Api';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  FetchTrend(): Observable<Article[]>{
    const TrendUrl = `${environment.ApiUrl}top-headlines?sources=techcrunch&apiKey=${environment.ApiKey}`;
    return this.http.get<any>(TrendUrl).pipe(
      map(data => data.articles)
    )
  }
  fetchTopics():Observable<Article[]>{
    const Topics = `${environment.ApiUrl}top-headlines?country=us&category=business&apiKey=${environment.ApiKey}`;
    return this.http.get<any>(Topics).pipe(
      map(data => data.articles)
    )
  }
}
