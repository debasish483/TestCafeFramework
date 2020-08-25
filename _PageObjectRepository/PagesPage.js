import {Selector} from 'testcafe';

export default class PagesPage {

    constructor() {

        //Pages Page
        this.Navigate_Pages = Selector('.menu-icon-page > .wp-menu-name')
        this.Navigate_Pages_AllPages = Selector('#menu-pages .wp-first-item > .wp-first-item')
        this.SearchBar = Selector('[name=\'s\']')
    }


}

