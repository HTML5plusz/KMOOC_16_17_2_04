import {Seria} from './seria'
import {Season} from './season'
import {SportEvent} from './event'
import {Condition} from './condition'

export class Championship{
    name:	string 
    description:	string 
    seria:	Seria
    season:	Season
    event:	Event
    condition:	Condition
    startDate:	string
    endDate:	string
}