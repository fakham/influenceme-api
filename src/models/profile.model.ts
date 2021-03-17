import {Entity, model, property} from '@loopback/repository';

@model()
export class Profile extends Entity {
  @property({
    type: 'string',
  })
  fullname?: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  username?: string;

  @property({
    type: 'string',
  })
  biography?: string;

  @property({
    type: 'string',
  })
  instagram?: string;

  @property({
    type: 'string',
  })
  facebook?: string;

  @property({
    type: 'string',
  })
  twitter?: string;

  @property({
    type: 'string',
  })
  userId?: string;

  @property({
    type: 'string',
  })
  avatar?: string;

  constructor(data?: Partial<Profile>) {
    super(data);
  }
}

export interface ProfileRelations {
  // describe navigational properties here
}

export type ProfileWithRelations = Profile & ProfileRelations;
