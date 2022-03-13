import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Location} from '../models';
export class LocationRepository extends DefaultCrudRepository<
  Location,
  typeof Location.prototype.ID
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Location, dataSource);
  }
}
