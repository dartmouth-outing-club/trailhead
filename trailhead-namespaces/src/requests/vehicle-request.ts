import { Vehicle, VehicleTypes } from 'trailhead-namespaces/src/vehicle'
import {
  BaseRequest,
  ApprovedRequest,
  DeniedRequest,
} from 'trailhead-namespaces/src/requests/request'
import { Trip } from 'trailhead-namespaces/src/trip'

export interface BaseVehicleRequest extends BaseRequest {
  linkedTrip?: Trip
  number: number
  vehicleType: VehicleTypes
  explanation: number
  mileage: number
  passengers: number
  needTrailer: boolean
  needWMNFPass: boolean
  assignment?: any
}

interface PendingVehicleRequest extends BaseVehicleRequest, DeniedRequest {
  potentialConflicts: ApprovedVehicleRequest[]
}

interface ApprovedVehicleRequest extends BaseVehicleRequest, ApprovedRequest {
  assignedVehicle: Vehicle
  assignedKey: string
  pickedUp: boolean
  returned: boolean
  conflicts: ApprovedVehicleRequest[]
}

interface DeniedVehicleRequest extends BaseVehicleRequest, DeniedRequest {}

export type VehicleRequest =
  | PendingVehicleRequest
  | ApprovedVehicleRequest
  | DeniedVehicleRequest
