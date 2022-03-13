import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param, post, put, requestBody, response} from '@loopback/rest';
import {Title} from '../models';
import {TitleRepository} from '../repositories';
export class TitleController {

  constructor(
    @repository(TitleRepository)
    public titleRepository: TitleRepository,
  ) { }


  @post('/title')
  @response(200, {
    description: 'Title  model instance',
    content: {'application/json': {schema: getModelSchemaRef(Title)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Title, {
            title: 'NewTitle',
            exclude: ['id'],
          }),
        },
      },
    })
    title: Omit<Title, 'id'>,
  ): Promise<Title> {
    return this.titleRepository.create(title);
  }

  @get('/titles')
  @response(200, {
    description: 'Array of Title model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Title, {includeRelations: true}),
        },
      },
    },
  })
  async find(): Promise<Title[]> {
    return this.titleRepository.find();
  }

  @get('/title/{id}')
  @response(200, {
    description: 'Title model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Title, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number): Promise<Title> {
    return this.titleRepository.findById(id);
  }

  @put('/title/{id}')
  @response(204, {
    description: 'Title PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() title: Title,
  ): Promise<void> {
    await this.titleRepository.replaceById(id, title);
  }

}
