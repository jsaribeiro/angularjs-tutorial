
import {ArtistRepository} from './artist.repository.ts'
import {Artist} from './artist.model.ts'

class ArtistListDirectiveController {

    public searchString: string;

    constructor(private repo: ArtistRepository) { }

    getArtists(): Artist[] {
        return this.repo.findByName(this.searchString);	
    }
}

class ArtistListDirective implements ng.IDirective {

    restrict: string = 'E';

    controller: string = 'ArtistListDirectiveController';

    controllerAs: string = 'vm';
    
    bindToController: Object = {
      searchString: "=filterByName"
    };

    template: string = `<div ng-repeat="artist in vm.getArtists()">
      <h2>{{artist.name}}</h2>
      <img ng-src="{{artist.imagePath}}" width="300px" height="300px"/>
      <album-list artist-id="{{artist.id}}"></album-list>
    </div>`;
}

export default angular
    .module('artist', ['artist.repo'])
    .controller('ArtistListDirectiveController', ['ArtistRepository', (artistRepo: ArtistRepository) => 
        new ArtistListDirectiveController(artistRepo)])
    .directive('artistList', () => new ArtistListDirective())
    .name;
