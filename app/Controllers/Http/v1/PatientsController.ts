import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Patient from 'App/Models/Patient'

export default class PatientsController {
  public async index ({}: HttpContextContract) {
    return Patient.query()
  }

  public async show ({}: HttpContextContract) {}
  public async store ({}: HttpContextContract) {}
  public async update ({}: HttpContextContract) {}
  public async destroy ({}: HttpContextContract) {}
}
