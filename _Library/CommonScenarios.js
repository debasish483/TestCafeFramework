import {t} from 'testcafe'
import Objrepo from '../_PageObjectRepository/UIMAP'

var repo = new Objrepo();

export var CommonScenarios = {

    Login : async function (t, userName, password) {

        await t

            .maximizeWindow( )
            .typeText(repo.LoginPageUI.UserName,userName)
            .typeText(repo.LoginPageUI.Password,password)
            .click(repo.LoginPageUI.SubmitButton);

            if(await repo.HomePageUI.dashboard.exists) {

                console.log('Login Successfull')
            }
            
    },

    moveToPage : async function (screenName) {

        await t

            switch (screenName) 
            {
                case 'Posts All Posts':

                    await t
                    .hover(repo.PostsPageUI.NavigateTo_Posts)
                    .wait(1000)
                    .click(repo.PostsPageUI.NavigateTo_Posts_AllPosts)
                    .wait(1000);               

                break;

                case 'Pages All Pages':

                    await t
                    .hover(repo.PagesPageUI.Navigate_Pages)
                    .wait(1000)
                    .click(repo.PagesPageUI.Navigate_Pages_AllPages)
                    .wait(1000);               

                break;
            
                default:
                    break;
            }
            
    }
}
