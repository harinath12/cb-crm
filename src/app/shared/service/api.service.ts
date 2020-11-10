import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class ApiService {

  constructor(private http: HttpClient) { }

  public getLeads(): Observable<any> {
    return this.http.get(environment.apiUrl + 'crm_leads');
  }

  public getLead(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'crm_lead_detail&id=' +id);
  }

  public postLead(data): Observable<any> {
    return this.http.post(environment.apiUrl + 'crm_post_lead',
    data);
  }
}
