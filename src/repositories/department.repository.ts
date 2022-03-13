import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Department} from '../models';
export class DepartmentRepository extends DefaultCrudRepository<
  Department,
  typeof Department.prototype.ID
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Department, dataSource);
  }
}
