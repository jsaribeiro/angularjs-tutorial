
import {CommonEntity} from '../common/repository.ts'

export class Artist implements CommonEntity {

    constructor(public name: string, public imagePath?: string, public id?: number) { }

}