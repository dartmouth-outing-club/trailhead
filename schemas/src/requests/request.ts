import { User, OPO } from 'schemas/src/user'
import Identifiable from 'schemas/src/identifiable'

export enum RequestStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  DENIED = 'Denied',
}
export interface BaseRequest extends Identifiable {
  requester: User
  vetter: OPO
  requestedFromDate: Date
  requestedToDate: Date
}

export interface PendingRequest extends BaseRequest {
  status: RequestStatus.PENDING
}

export interface ApprovedRequest extends BaseRequest {
  status: RequestStatus.APPROVED
  approvedFromDate: Date
  approvedToDate: Date
}

export interface DeniedRequest extends BaseRequest {
  status: RequestStatus.DENIED
}

export type Request = PendingRequest | ApprovedRequest | DeniedRequest
