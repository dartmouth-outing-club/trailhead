import Identifiable from 'trailhead-namespaces/src/identifiable'
import { Trip } from 'trailhead-namespaces/src/trip'

export interface Subclub extends Identifiable {
  name: string
  active: boolean
  trips: Trip[]
}
