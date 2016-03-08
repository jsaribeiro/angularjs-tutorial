/// <reference path="../_references.ts" />

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
    }

    template: string = `<div ng-repeat="artist in vm.getArtists()">
      <h2>{{artist.name}}</h2>
      <img ng-src="{{artist.imagePath}}" />
      <album-list artist-id="{{artist.id}}"></album-list>
    </div>`;
}

angular.module('econTutorial')
    .controller('ArtistListDirectiveController', ['ArtistRepository', (artistRepo: ArtistRepository) => 
        new ArtistListDirectiveController(artistRepo)])
    .directive('artistList', () => new ArtistListDirective());

