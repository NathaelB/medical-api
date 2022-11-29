import { DateTime } from 'luxon'
import {BaseModel, beforeCreate, beforeSave, column} from '@ioc:Adonis/Lucid/Orm'
import {randomUUID} from 'crypto'
import Hash from '@ioc:Adonis/Core/Hash'

export default class Patient extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public phone: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async generateUUID (model: Patient) {
    model.id = randomUUID()
  }

  @beforeSave()
  public static async hashPassword(model: Patient) {
    if (model.$dirty.password) {
      model.password = await Hash.make(model.password)
    }
  }
}
