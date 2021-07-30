import { Gear } from '../gear';

export interface GearRequest extends Request {
	type: 'GROUP' | 'INDIVIDUAL';
	name: Gear | string; // ambiguous string allows for an evolving gear set
}