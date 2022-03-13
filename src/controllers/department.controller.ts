import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param, post, put, requestBody, response} from '@loopback/rest';
import {Department} from '../models';
import {DepartmentRepository} from '../repositories';
export class DepartmentController {

  constructor(
    @repository(DepartmentRepository)
    public departmentRepository: DepartmentRepository,
  ) { }


  @post('/department')
  @response(200, {
    description: 'Department  model instance',
    content: {'application/json': {schema: getModelSchemaRef(Department)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Department, {
            title: 'NewDepartment',
            exclude: ['id'],
          }),
        },
      },
    })
    department: Omit<Department, 'id'>,
  ): Promise<Department> {
    return this.departmentRepository.create(department);
  }

  @get('/departments')
  @response(200, {
    description: 'Array of Department model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Department, {includeRelations: true}),
        },
      },
    },
  })
  async find(): Promise<Department[]> {
    return this.departmentRepository.find();
  }

  @get('/depertment/{id}')
  @response(200, {
    description: 'Department model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Department, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number): Promise<Department> {
    return this.departmentRepository.findById(id);
  }

  @put('/department/{id}')
  @response(204, {
    description: 'Department PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() department: Department,
  ): Promise<void> {
    await this.departmentRepository.replaceById(id, department);
  }

}
