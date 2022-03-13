import {Entity, model, property} from '@loopback/repository';

@model({settings: {postgresql: {schema: 'public', table: 'location'}}})
export class Location extends Entity {

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

  @property({
    type: 'string',
    required: true,
  })
  address?: string;

  @property({
    type: 'string',
    required: true,
  })
  postcode?: string;

  @property({
    type: 'string',
    required: true,
  })
  city?: string;

  @property({
    type: 'string',
    required: true,
  })
  country?: string;

  [prop: string]: any;

  constructor(data?: Partial<Location>) {
    super(data);
  }
}
