import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor() {}

  getCustomers(): Customer[] {
    return [
      {
        id: 1,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 2,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 3,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 4,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 5,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 6,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 7,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 8,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 9,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 10,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 11,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 12,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 13,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 14,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
      {
        id: 15,
        fullName: 'Marcelo Alves de Almeida',
        cpf: '111.222.333-44',
        city: 'Itabira',
        uf: 'MG',
      },
    ];
  }
}
