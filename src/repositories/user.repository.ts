import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {User, UserRelations, Profile, Post} from '../models';
import {ProfileRepository} from './profile.repository';
import {PostRepository} from './post.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.email,
  UserRelations
> {

  public readonly profile: HasOneRepositoryFactory<Profile, typeof User.prototype.email>;

  public readonly posts: HasManyRepositoryFactory<Post, typeof User.prototype.email>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ProfileRepository') protected profileRepositoryGetter: Getter<ProfileRepository>, @repository.getter('PostRepository') protected postRepositoryGetter: Getter<PostRepository>,
  ) {
    super(User, dataSource);
    this.posts = this.createHasManyRepositoryFactoryFor('posts', postRepositoryGetter,);
    this.registerInclusionResolver('posts', this.posts.inclusionResolver);
    this.profile = this.createHasOneRepositoryFactoryFor('profile', profileRepositoryGetter);
    this.registerInclusionResolver('profile', this.profile.inclusionResolver);
  }
}
