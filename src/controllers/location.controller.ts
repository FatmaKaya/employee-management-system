import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param, post, put, requestBody, response} from '@loopback/rest';
import {Location} from '../models';
import {LocationRepository} from '../repositories';
export class LocationController {

  constructor(
    @repository(LocationRepository)
    public locationRepository: LocationRepository,
  ) { }


  @post('/location')
  @response(200, {
    description: 'Location  model instance',
    content: {'application/json': {schema: getModelSchemaRef(Location)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Location, {
            title: 'NewLocation',
            exclude: ['id'],
          }),
        },
      },
    })
    location: Omit<Location, 'id'>,
  ): Promise<Location> {
    return this.locationRepository.create(location);
  }

  @get('/locations')
  @response(200, {
    description: 'Array of Location model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Location, {includeRelations: true}),
        },
      },
    },
  })
  async find(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  @get('/location/{id}')
  @response(200, {
    description: 'Location model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Location, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number): Promise<Location> {
    return this.locationRepository.findById(id);
  }

  @put('/location/{id}')
  @response(204, {
    description: 'Location PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() location: Location,
  ): Promise<void> {
    await this.locationRepository.replaceById(id, location);
  }

}
