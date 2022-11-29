import {schema, CustomMessages, rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true}),
    email: schema.string({}, [rules.email(), rules.unique({
      table: 'patients',
      column: 'email'
    })]),
    password: schema.string({ trim: true }),
    phone: schema.string({ trim: true })
  })

  public messages: CustomMessages = {}
}

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional({ trim: true }),
    email: schema.string.optional({}, [rules.email(), rules.unique({
      table: 'patients',
      column: 'email'
    })]),
    password: schema.string.optional({ trim: true }),
    phone: schema.string.optional({ trim: true })
  })

}
