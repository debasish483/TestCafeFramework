import {Selector} from 'testcafe';

export default class CommentsPage {

    constructor() {

        //Comments Page
        this.Comments = Selector('.current > .wp-menu-name')

    }


}