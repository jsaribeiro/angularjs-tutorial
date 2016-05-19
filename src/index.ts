
require('../css/main.css');
import 'angular';
import 'lodash';

import albumRepo from './album/album.repository.ts'
import artistRepo from './artist/artist.repository.ts';
import albumListDirective from './album/album-list.directive.ts'
import artistListDirective from './artist/artist-list.directive.ts';
import searchCtrl from './search/search.controller.ts';

angular
    .module('econTutorial', [
      albumRepo,
      artistRepo,
      albumListDirective,
      artistListDirective,
      searchCtrl  
    ]);
