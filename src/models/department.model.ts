import {Entity, model, property} from '@loopback/repository';

@model({settings: {postgresql: {schema: 'public', table: 'department'}}})
export class Department extends Entity {

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
  name?: string;

  [prop: string]: any;

  constructor(data?: Partial<Department>) {
    super(data);
  }
}
