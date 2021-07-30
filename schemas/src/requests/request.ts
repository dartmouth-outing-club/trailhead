import { User, OPO } from '../user';

export type RequestStatus = 'APPROVED' | 'PENDING' | 'DENIED';

export interface Request {
	status: RequestStatus;
	requester: User;
	vetter: OPO;
	requestDate: Date;
}