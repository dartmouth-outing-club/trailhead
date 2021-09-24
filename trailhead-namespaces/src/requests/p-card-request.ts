import { PCard } from 'trailhead-namespaces/src/p-card'
import {
  BaseRequest,
  ApprovedRequest,
  DeniedRequest,
} from 'trailhead-namespaces/src/requests/request'
import { Trip } from 'trailhead-namespaces/src/trip'

export interface BasePCardRequest extends BaseRequest {
  linkedTrip: Trip
  people: number
  snacks: number
  breakfasts: number
  lunches: number
  dinners: number
  otherExpenses: {
    id: string
    name: string
    amt: number
  }[]
}

interface PendingPCardRequest extends BasePCardRequest, DeniedRequest {}

interface ApprovedPCardRequest extends BasePCardRequest, ApprovedRequest {
  assignedPCard: PCard
}

interface DeniedPCardRequest extends BasePCardRequest, DeniedRequest {}

export type PCardRequest =
  | PendingPCardRequest
  | ApprovedPCardRequest
  | DeniedPCardRequest
