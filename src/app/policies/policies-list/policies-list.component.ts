import { Component, OnInit } from '@angular/core';
import { Policy } from '../policy.model';
import { PoliciesService } from '../policies.service';

@Component({
  selector: 'app-policies-list',
  templateUrl: './policies-list.component.html',
  styleUrls: ['./policies-list.component.css'],
})
export class PoliciesListComponent implements OnInit {
  policies: Policy[] = [];

  constructor(private policiesService: PoliciesService) {}

  ngOnInit(): void {
    this.getPolicies();
  }

  deletePolicy(id: number) {
    this.policiesService.deletePolicy(id);
  }

  private getPolicies() {
    this.policiesService
      .getPolicies()
      .subscribe((policies) => (this.policies = policies));
  }
}
