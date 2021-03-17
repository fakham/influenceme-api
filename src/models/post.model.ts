import {Entity, model, property} from '@loopback/repository';

@model()
export class Post extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  content?: string;

  @property({
    type: 'string',
  })
  tag?: string;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'number',
  })
  time?: number;

  @property({
    type: 'number',
  })
  propositions?: number;

  @property({
    type: 'string',
  })
  author?: string;

  @property({
    type: 'string',
  })
  userId?: string;

  constructor(data?: Partial<Post>) {
    super(data);
  }
}

export interface PostRelations {
  // describe navigational properties here
}

export type PostWithRelations = Post & PostRelations;
