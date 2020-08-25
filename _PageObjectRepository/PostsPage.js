import {Selector} from 'testcafe';

export default class PostsPage {

    constructor() {

        //Posts Page
        this.NavigateTo_Posts = Selector('.menu-icon-post > .wp-menu-name')
        this.NavigateTo_Posts_AllPosts = Selector('#menu-posts .wp-first-item > .wp-first-item')
    }


}