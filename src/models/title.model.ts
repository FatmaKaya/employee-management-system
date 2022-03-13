import {Entity, model, property} from '@loopback/repository';

@model({settings: {postgresql: {schema: 'public', table: 'title'}}})
export class Title extends Entity {

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
  title?: string;

  @property({
    type: 'date',
    required: true,
  })
  startdate: Date;

  @property({
    type: 'date',
    required: true,
  })
  enddate: Date;

  [prop: string]: any;

  constructor(data?: Partial<Title>) {
    super(data);
  }
}
