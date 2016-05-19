
import {InMemoryRepository} from '../common/in-memory-repository.ts'
import {Artist} from './artist.model.ts'

export class ArtistRepository extends InMemoryRepository<Artist> { }

export default angular
    .module('artist.repo', [])
    .service('ArtistRepository', ArtistRepository)
    .run(['ArtistRepository', (repo) => {
        repo.create(new Artist("Amy Winehouse", 
            require("../../images/artist/winehouse.jpg")));
        repo.create(new Artist("Portishead", 
            require("../../images/artist/portishead.jpg")));
        repo.create(new Artist("The Velvet Underground", 
            require("../../images/artist/the-velvet-underground.jpg")));
        repo.create(new Artist("Roxy Music", 
            require("../../images/artist/roxy-music.jpg")));
        repo.create(new Artist("The Doors", 
            require("../../images/artist/the-doors.jpg")));
    }]).name;
