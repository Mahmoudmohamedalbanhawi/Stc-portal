import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../Interface/articles';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  FetchTrend(): Observable<Article[]>{
    const TrendUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e103084dbd684ebda4232c01aa8ac30e`;
    return this.http.get<any>(TrendUrl).pipe(
      map(data => data.articles)
    )
  }
  fetchTopics():Observable<Article[]>{
    const Topics = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e103084dbd684ebda4232c01aa8ac30e`;
    return this.http.get<any>(Topics).pipe(
      map(data => data.articles)
    )
  }
}
