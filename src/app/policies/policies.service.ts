import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from './policy.model';

@Injectable({
  providedIn: 'root',
})
export class PoliciesService {
  policiesUrl: string =
    'https://my-json-server.typicode.com/baquelo/seguradora-front/policies';

  constructor(private http: HttpClient) {}

  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(`${this.policiesUrl}`);
  }

  createPolicy(policy: Policy): Observable<Policy> {
    return this.http.post<Policy>(`${this.policiesUrl}`, policy);
  }

  editPolicy(policy: Policy) {
    return this.http.put<Policy>(`${this.policiesUrl}`, policy);
  }

  deletePolicy(policyId: Number) {
    return this.http.delete(`${this.policiesUrl}/${policyId}`);
  }
}
