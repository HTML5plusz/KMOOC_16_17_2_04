import {Sport} from './sport'
import {ConditionType} from './conditionType'

export class Condition{

    id:	number
    name:	string 
    description:	string 
    type:	ConditionType
    sport:	Sport
    minumum:	string
    maximum:	string
    equal:	string
}