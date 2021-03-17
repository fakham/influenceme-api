import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Profile, ProfileRelations} from '../models';

export class ProfileRepository extends DefaultCrudRepository<
  Profile,
  typeof Profile.prototype.username,
  ProfileRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Profile, dataSource);
  }
}
