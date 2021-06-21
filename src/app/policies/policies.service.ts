import { Injectable } from '@angular/core';
import { Policy } from './policy.model';

@Injectable({
  providedIn: 'root',
})
export class PoliciesService {
  policies: Policy[] = [
    {
      id: 1,
      number: 10001,
      licensePlate: 'XLZ-1100',
      startValidity: '2020-05-01',
      endValidity: '2020-05-01',
      value: 250.0,
    },
    {
      id: 2,
      number: 10001,
      licensePlate: 'XLZ-1100',
      startValidity: '2020-05-01',
      endValidity: '2020-05-01',
      value: 250.0,
    },
    {
      id: 3,
      number: 10001,
      licensePlate: 'XLZ-1100',
      startValidity: '2020-05-01',
      endValidity: '2020-05-01',
      value: 250.0,
    },
    {
      id: 4,
      number: 10001,
      licensePlate: 'XLZ-1100',
      startValidity: '2020-05-01',
      endValidity: '2020-05-01',
      value: 250.0,
    },
    {
      id: 5,
      number: 10001,
      licensePlate: 'XLZ-1100',
      startValidity: '2020-05-01',
      endValidity: '2020-05-01',
      value: 250.0,
    },
    {
      id: 6,
      number: 10001,
      licensePlate: 'XLZ-1100',
      startValidity: '2020-05-01',
      endValidity: '2020-05-01',
      value: 250.0,
    },
    {
      id: 7,
      number: 10001,
      licensePlate: 'XLZ-1100',
      startValidity: '2020-05-01',
      endValidity: '2020-05-01',
      value: 250.0,
    },
  ];

  constructor() {}

  getPolicies(): Policy[] {
    return this.policies;
  }

  createPolicy(policy: Policy): Policy {
    policy.number = this.policies[-1].number + 1;
    policy.id = this.policies[-1].id + 1;

    this.policies.push(policy);
    return policy;
  }

  editPolicy(policy: Policy) {
    //
  }

  deletePolicy(policyId: Number) {
    this.policies = this.policies.filter(p => p.id !== policyId);
  }
}
