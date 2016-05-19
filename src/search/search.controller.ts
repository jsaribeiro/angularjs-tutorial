
class SearchController {
    public searchString: string;
    constructor() {}
}

export default angular
    .module('econTutorial.search', [])
    .controller('SearchController', SearchController)
    .name;
