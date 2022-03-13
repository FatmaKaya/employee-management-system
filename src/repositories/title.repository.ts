import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Title} from '../models';
export class TitleRepository extends DefaultCrudRepository<
  Title,
  typeof Title.prototype.ID
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Title, dataSource);
  }
}
