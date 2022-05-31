import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Repositores } from './model/repositores';
import { Observable, throttleTime } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  apiRequest = 'https://api.github.com/search/repositories?q=';
  
  constructor(private httpClient:HttpClient) { }

  //Headers
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //obter os repositorios
  getListar(search: string, page:number = 1):
  Observable<Repositores> { 
    return this.httpClient.get<Repositores>
    (`${this.apiRequest}${search}&page=${page}`);
  }

 

}
