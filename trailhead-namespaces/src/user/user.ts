import Identifiable from 'trailhead-namespaces/src/identifiable'
import { Subclub } from '../subclub'
import { Attendee, Trip, Waitlistee } from '../trip'

export enum UserTypes {
  TRIPPEE = 'Trippee',
  LEADER = 'Leader',
  OPO = 'OPO',
}

enum ClothingSizes {
  MEN_XS = 'Men-XS',
  MEN_S = 'Men-S',
  MEN_M = 'Men-M',
  MEN_L = 'Men-L',
  MEN_XL = 'Men-XL',
  MEN_XXL = 'Men-XXL',
  WOMEN_XS = 'Women-XS',
  WOMEN_S = 'Women-S',
  WOMEN_M = 'Women-M',
  WOMEN_L = 'Women-L',
  WOMEN_XL = 'Women-XL',
  WOMEN_XXL = 'Women-XXL',
}

enum FootwearSizes {
  MEN_5 = 'Men-5',
  MEN_5_5 = 'Men-5.5',
  MEN_6 = 'Men-6',
  MEN_6_5 = 'Men-6.5',
  MEN_7 = 'Men-7',
  MEN_7_5 = 'Men-7.5',
  MEN_8 = 'Men-8',
  MEN_8_5 = 'Men-8.5',
  MEN_9 = 'Men-9',
  MEN_9_5 = 'Men-9.5',
  MEN_10 = 'Men-10',
  MEN_10_5 = 'Men-10.5',
  MEN_11 = 'Men-11',
  MEN_11_5 = 'Men-11.5',
  MEN_12 = 'Men-12',
  MEN_12_5 = 'Men-12.5',
  MEN_13 = 'Men-13',
  MEN_13_5 = 'Men-13.5',
  WOMEN_5 = 'Women-5',
  WOMEN_5_5 = 'Women-5.5',
  WOMEN_6 = 'Women-6',
  WOMEN_6_5 = 'Women-6.5',
  WOMEN_7 = 'Women-7',
  WOMEN_7_5 = 'Women-7.5',
  WOMEN_8 = 'Women-8',
  WOMEN_8_5 = 'Women-8.5',
  WOMEN_9 = 'Women-9',
  WOMEN_9_5 = 'Women-9.5',
  WOMEN_10 = 'Women-10',
  WOMEN_10_5 = 'Women-10.5',
  WOMEN_11 = 'Women-11',
  WOMEN_11_5 = 'Women-11.5',
  WOMEN_12 = 'Women-12',
  WOMEN_12_5 = 'Women-12.5',
  WOMEN_13 = 'Women-13',
  WOMEN_13_5 = 'Women-13.5',
}

enum DriverCerts {
  VAN = 'Van certified',
  MICROBUS = 'Microbus certified',
}

export interface BaseUser extends Identifiable {
  casID: string
  email: string
  passwordHash: string
  profileCompleted: boolean

  profilePhotoUrl: string
  name: {
    first: string
    last: string
  }
  pronouns: string
  bio: string

  dash: string
  allergiesAndDietaryRestrictions: string
  medicalConditions: string

  clothingSize: ClothingSizes
  footwearSize: FootwearSizes
  height: {
    feet: number
    inches: number
  }

  attending: Attendee[]
  waitlistOn: Waitlistee[]

  leaderIn: Subclub[]
  driverCert: DriverCerts[]
  trailCert: boolean

  wantsToBeLeaderIn: Subclub[]
  wantedDriverCerts: DriverCerts[]
  wantsTrailerCert: boolean
}

export interface Trippee extends BaseUser {
  role: UserTypes.TRIPPEE
}

export interface Leader extends BaseUser {
  role: UserTypes.LEADER
}

export interface OPO extends BaseUser {
  role: UserTypes.OPO
}

export type User = Trippee | Leader | OPO
