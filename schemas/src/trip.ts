import { GearRequest, RequestStatus } from "./requests";

interface Trip {
	gearRequestStatus: RequestStatus;
	gearRequests: GearRequest[];
}