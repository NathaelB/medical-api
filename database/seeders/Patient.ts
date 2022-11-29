import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import {PatientFactory} from 'Database/factories'

export default class extends BaseSeeder {
  public async run () {
    await PatientFactory.createMany(100)
  }
}
