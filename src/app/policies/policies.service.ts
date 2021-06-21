import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from './policy.model';

@Injectable({
  providedIn: 'root',
})
export class PoliciesService {
  baseUrl: string =
    'https://my-json-server.typicode.com/baquelo/seguradora-front';

  constructor(private http: HttpClient) {}

  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(`${this.baseUrl}/policies`);
  }

  createPolicy(policy: Policy): Observable<Policy> {
    return this.http.post<Policy>(`${this.baseUrl}/policies`, policy);
  }

  editPolicy(policy: Policy) {
    return this.http.put<Policy>(`${this.baseUrl}/policies`, policy);
  }

  deletePolicy(policyId: Number) {
    return this.http.delete(`${this.baseUrl}/policies/${policyId}`);
  }
}
