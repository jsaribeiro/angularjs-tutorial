
import {ArtistRepository} from './artist.repository.ts'
import {Artist} from './artist.model.ts'

class ArtistListDirectiveController {

    public searchString: string;

    constructor(private repo: ArtistRepository) { }

    getArtists(): Artist[] {
        return this.repo.getAll();
    }
}

class ArtistListDirective implements ng.IDirective {

    restrict: string = 'E';

    controller: string = 'ArtistListDirectiveController';

    controllerAs: string = 'vm';

    template: string = `FIXME`;
}

export default angular
    .module('artist', ['artist.repo'])
    .controller('ArtistListDirectiveController', ['ArtistRepository', (artistRepo: ArtistRepository) => 
        new ArtistListDirectiveController(artistRepo)])
    .directive('artistList', () => new ArtistListDirective())
    .name;

