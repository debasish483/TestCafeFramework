import {Selector} from 'testcafe';

export default class LoginPage {

    constructor() {

        //Login Page
        this.UserName = Selector('input#user_login.input')
        this.Password = Selector('#user_pass')
        this.SubmitButton = Selector('#wp-submit')
    }


}