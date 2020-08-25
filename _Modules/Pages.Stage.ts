import { Selector } from 'testcafe';
import config from '../_Config/config';
import { CommonScenarios } from '../_Library/CommonScenarios';
import Objrepo from '../_PageObjectRepository/UIMAP'
import SqlServer from '../_Library/SqlServer'

//var commonMethods = new CommonScenarios();
var repo = new Objrepo();
var sqlDb = new SqlServer();
var minimist = require('minimist')

fixture `This Module will cover Pages Screen Functionality`
    .beforeEach(async t => {
        console.log('Execution Started');
        const args = minimist(process.argv.slice(2));
        var environment = args.env;
        console.log('Environment is ', environment);

        var tt = await sqlDb.pullDataFromDatabase('Select top 1 mon.[cpu_busy], mon.[io_busy] From master.[dbo].[spt_monitor] as mon')

        var res = JSON.parse(JSON.stringify(tt));
        var cpu_busy = res[0][0].cpu_busy;
        console.log('First value is     ', cpu_busy);
        console.log('test case 1 passed');

        if(environment == 'Test')
        {
            console.log('Entered in test condition');
            t.ctx.URL = config.Test.URL;
            t.ctx.UserName = config.Test.UserName;
            t.ctx.Password = config.Test.Password;

            const username = t.ctx.Username;
        }
        else if(environment == 'Stage')
        {
            console.log('Entered in Stage condition');
            t.ctx.URL = config.Stage.URL;
            t.ctx.UserName = config.Stage.UserName;
            t.ctx.Password = config.Stage.Password;
        }
    })

test('Navigate to Pages - All Pages screen ', async t => {
    
    await t
            .navigateTo(t.ctx.URL)
        
            await CommonScenarios.Login(t, t.ctx.UserName, t.ctx.Password);

            await CommonScenarios.moveToPage('Pages All Pages');

            await t.wait(2000);
    


            await t
                .typeText(repo.PagesPageUI.SearchBar, t.ctx.cpu_busy)
                .wait(3000);
    
    
    
})