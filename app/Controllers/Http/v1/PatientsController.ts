import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Patient from 'App/Models/Patient'
import {StoreValidator, UpdateValidator} from 'App/Validators/PatientValidator'

export default class PatientsController {
  public async index ({}: HttpContextContract): Promise<Patient[]> {
    return Patient.query().orderBy('name', 'desc')
  }

  public async show ({ params }: HttpContextContract): Promise<Patient> {
    return await this.getPatient('email', params.id)
  }

  public async store ({ request }: HttpContextContract): Promise<Patient> {
    const data = await request.validate(StoreValidator)

    return await Patient.create(data)
  }

  public async update ({ request, params }: HttpContextContract): Promise<Patient> {
    const data = await request.validate(UpdateValidator)
    const patient = await this.getPatient('email', params.id)

    patient?.merge(data).save()
    return patient
  }

  public async destroy ({ params, response }: HttpContextContract) {
    const patient = await this.getPatient('email', params.id)
    await patient.delete()

    return response.send({
      message: `Le patient ${patient.id} a bien été supprimé`,
      status: 200
    })
  }

  public async getPatient (column: string, id: number | string): Promise<Patient> {
    return await Patient.query().where(column, id).firstOrFail()
  }
}
