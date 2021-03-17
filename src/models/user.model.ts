import {Entity, model, property, hasOne, hasMany} from '@loopback/repository';
import {Profile} from './profile.model';
import {Post} from './post.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @hasOne(() => Profile)
  profile: Profile;

  @hasMany(() => Post)
  posts: Post[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
