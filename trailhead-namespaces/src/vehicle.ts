export enum VehicleTypes {
  VAN = 'Van',
  MICROBUS = 'Microbus',
  TRUCK = 'Truck',
  ENTERPRISE = 'Enterprise',
  PERSONAL_VEHICLE = 'Personal vehicle',
}

export interface Vehicle {
  type: VehicleTypes
  name: string
  requests: any
  assignments: any
  active: boolean
}
