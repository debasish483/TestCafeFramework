import { Selector } from 'testcafe';
import config from '../_Config/config';
import { CommonScenarios } from '../_Library/CommonScenarios';
import Objrepo from '../_PageObjectRepository/UIMAP'
import SqlServer from '../_Library/SqlServer'

//var commonMethods = new CommonScenarios();
var repo = new Objrepo();
var sqlDb = new SqlServer();
var minimist = require('minimist')

fixture `Verifying Posts Page Functionality`
    .beforeEach(async t => {
        console.log('Execution Started');
        const args = minimist(process.argv.slice(2));
        var environment = args.env;
        console.log('Environment is ', environment);

        if(environment == 'Test')
        {
            console.log('Entered in test condition');
            t.ctx.URL = config.Test.URL;
            t.ctx.UserName = config.Test.UserName;
            t.ctx.Password = config.Test.Password;         
        }
        else if(environment == 'Stage')
        {
            console.log('Entered in Stage condition');
            t.ctx.URL = config.Stage.URL;
            t.ctx.Username = config.Stage.UserName;
            t.ctx.Password = config.Stage.Password;
        }
    })

test('Navigate to Posts - All Posts screen ', async t => {
    
    await t
            .navigateTo(t.ctx.URL)
        
            await CommonScenarios.Login(t, t.ctx.UserName, t.ctx.Password);

            await CommonScenarios.moveToPage('Posts All Posts');

            await t.wait(2000);
    
    
    
})