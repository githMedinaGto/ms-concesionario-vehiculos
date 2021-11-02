import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Vehiculo} from './vehiculo.model';

@model({
  settings: {
    foreignKeys: {
      fk_vehiculo_id_vehiculo: {
        name: 'fk_vehiculo_id_vehiculo',
        entity: 'Vehiculo',
        entityKey: 'id',
        foreignKey: 'id_vehiculo',
      }
    }
  }
})
export class Foto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @belongsTo(() => Vehiculo, {name: 'vehiculo'})
  id_vehiculo: number;

  constructor(data?: Partial<Foto>) {
    super(data);
  }
}

export interface FotoRelations {
  // describe navigational properties here
}

export type FotoWithRelations = Foto & FotoRelations;
