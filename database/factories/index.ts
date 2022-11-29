import Factory from '@ioc:Adonis/Lucid/Factory'
import Patient from 'App/Models/Patient'


export const PatientFactory = Factory
  .define(Patient, ({ faker}) => {
    return {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.number('+33 # ## ## ## ##'),
      password: faker.internet.password(12)
    }
  }).build()
