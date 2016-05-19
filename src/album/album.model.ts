
import {CommonEntity} from '../common/repository.ts'

export class Album implements CommonEntity {

    constructor(
        public artistId: number,
        public name: string,
        public tracks: string[],
        public id?: number,
        public year?: number) {
    }
}