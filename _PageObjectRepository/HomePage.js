import {Selector} from 'testcafe';

export default class HomePage {

    constructor() {

        //Home Page
        this.dashboard = Selector('h2.gs_copied')
        this.title = Selector('#title')
    }


}

