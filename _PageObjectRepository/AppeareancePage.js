import {Selector} from 'testcafe';

export default class AppeareancePage {

    constructor() {

        //Appeareance Page
        this.Appeareance_Hover = Selector('.menu-icon-appearance > .wp-menu-name')
        this.Themes = Selector('#menu-appearance .wp-first-item > .wp-first-item')

    }


}