
import {AlbumRepository} from './album.repository.ts'
import {Album} from './album.model.ts'

export class AlbumListDirectiveController {
    public artistId: number;
    constructor(private repo: AlbumRepository) {}
    getAlbums(): Album[] {
        return this.repo.getAll().filter(album => album.artistId == this.artistId);
    }
}

export class AlbumListDirective implements ng.IDirective {

    restrict: string = 'E';

    // to reference the controller's properties in the template
    controllerAs: string = 'vm';

    // type refinement, otherwise we'll get an compile error in the constructor while assigning the controller
    controller = 'AlbumListDirectiveController';

    template: string = `<div ng-repeat="album in vm.getAlbums()">
      <h3>{{album.name}}</h3>
      <ol>
        <li ng-repeat="track in album.tracks">
          {{track}}
        </li>
      </ol>
    </div>`;

    bindToController: Object = {
        'artistId': '@'
    };
}

export default angular
    .module('album', ['album.repo'])
    .directive('albumList', ['AlbumRepository', () => new AlbumListDirective()])
    .controller('AlbumListDirectiveController', ['AlbumRepository', (albumRepo: AlbumRepository) =>
        new AlbumListDirectiveController(albumRepo)]
    ).name;
