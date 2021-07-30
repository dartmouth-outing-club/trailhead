import * as t from 'type-shift';

export type Gear =
	// general
	'HEAD_LAMP' |
	'GPS' |
	// hiking & mountaineering
	'FRAME_PACK' |
	'HIKING_BOOTS' |
	'HIKING_POLES' |
	// camping
	'SLEEPING_BAG' |
	'SLEEPING_PAD' |
	// winter sports
	'SKIS' |
	'SNOW_BOARD';

export const GEAR = new Set([
	// general
	'HEAD_LAMP',
	'GPS',
	// hiking & mountaineering
	'FRAME_PACK',
	'HIKING_BOOTS',
	'HIKING_POLES',
	// camping
	'SLEEPING_BAG',
	'SLEEPING_PAD',
	// winter sports
	'SKIS',
	'SNOW_BOARD',
]);

export const gearConverter = t.oneOf(Array.from(GEAR));