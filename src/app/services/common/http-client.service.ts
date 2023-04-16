import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(
    private httpClient: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

private url(requestParameters:Partial<RequestParameters>):string{
return "";
}

  get<T>(requestParameters:Partial<RequestParameters>) {
    let url: string = '';

    url = '${this.baseUrl}/${controller}/${action}';
  
    this.httpClient.get()
  }

  post() {}

  put() {}

  delete() {}
}

export class RequestParameters{
  controller?:string;
  action?:string;

  headers?:HttpHeaders;
  baseUrl?:string;
  fullEndPoint?:string
}
