import {Entity, hasOne, model, property} from '@loopback/repository';

@model({settings: {postgresql: {schema: 'public', table: 'employee'}}})
export class Employee extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'date',
    required: true,
  })
  jopstartdate: Date;

  @property({
    type: 'number',
    required: true,
  })
  salary: number;

  @hasOne(() => Employee)
  manager?: Employee;

  @property({
    type: 'number',
  })
  managerid?: number;


  [prop: string]: any;

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}
