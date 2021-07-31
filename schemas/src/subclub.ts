import Identifiable from 'schemas/src/identifiable'
import { Trip } from 'schemas/src/trip'

export interface Subclub extends Identifiable {
  name: string
  active: boolean
  trips: Trip[]
}
