import {Sport} from './sport'
import {Specialization} from './specialization'
import {Condition} from './condition'
import {Round} from './round'
import {Users} from './users'

export class SportEvent{

    id:	number
    sport:	Sport
    specialization:	Specialization
    condition:	Condition
    round: Round
    user:	Users
}