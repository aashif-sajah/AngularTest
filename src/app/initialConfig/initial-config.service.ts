import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InitialConfigModule } from './initial-config/initial-config.module';

@Injectable({
  providedIn: 'root'
})
export class InitialConfigService {

  constructor(private httpClient: HttpClient) { }

  private api: string = "http://localhost:8080/event-pulse"

  startSimulation(systemConfig:InitialConfigModule):Observable<InitialConfigModule>{
    return this.httpClient.post<InitialConfigModule>(`${this.api}/start-simulation`, systemConfig);
  }
}
/* InitialConfigModule */
