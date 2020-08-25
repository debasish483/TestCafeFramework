import ApPage from 'C:/Users/Dell/Desktop/FullStackQA_Framework/_PageObjectRepository/AppeareancePage.js'
import CmPage from 'C:/Users/Dell/Desktop/FullStackQA_Framework/_PageObjectRepository/CommentsPage.js'
import HmPage from 'C:/Users/Dell/Desktop/FullStackQA_Framework/_PageObjectRepository/HomePage.js'
import LpPage from 'C:/Users/Dell/Desktop/FullStackQA_Framework/_PageObjectRepository/LoginPage.js'
import PpPage from 'C:/Users/Dell/Desktop/FullStackQA_Framework/_PageObjectRepository/PagesPage.js'
import PoPage from 'C:/Users/Dell/Desktop/FullStackQA_Framework/_PageObjectRepository/PostsPage.js'


export default class fullstack {

    constructor() {

        this.AppPageUI = new ApPage();
        this.ComPageUI = new CmPage();
        this.HomePageUI = new HmPage();
        this.LoginPageUI = new LpPage();
        this.PagesPageUI = new PpPage();
        this.PostsPageUI = new PoPage();
    }
}