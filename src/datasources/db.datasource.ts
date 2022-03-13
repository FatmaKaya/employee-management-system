import {inject} from '@loopback/core';
import {AnyObject, juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '0',
  database: 'employee',
  min: 5,
  max: 200,
  idleTimeoutMillis: 60000,
  ssl: false
};

export class DbDataSource extends juggler.DataSource {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: AnyObject = config,
  ) {
    super(dsConfig);
  }
}



