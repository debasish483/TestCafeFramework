import { Selector } from 'testcafe';
import config from '../_Config/config';
import { CommonScenarios } from '../_Library/CommonScenarios';
import Objrepo from '../_PageObjectRepository/UIMAP'
import SqlServer from '../_Library/SqlServer'

//var commonMethods = new CommonScenarios();
var repo = new Objrepo();
var sqlDbCon = new SqlServer();
var minimist = require('minimist')

fixture`Demo`
    .beforeEach(async t => {
        console.log('Execution Started');
        const args = minimist(process.argv.slice(2));
        var environment = args.env;
        console.log('Environment is ', environment);

        if (environment == 'Test') {
            console.log('Entered in test condition');
            t.ctx.URL = config.Test.URL;
            t.ctx.UserName = config.Test.UserName;
            t.ctx.Password = config.Test.Password;

            const username = t.ctx.Username;



        }
        else if (environment == 'Stage') {
            console.log('Entered in Stage condition');
            t.ctx.URL = config.Stage.URL;
            t.ctx.Username = config.Stage.UserName;
            t.ctx.Password = config.Stage.Password;
        }
    })

test('First Test ', async t => {

    await t
        .navigateTo(t.ctx.URL)

    await CommonScenarios.Login(t, t.ctx.UserName, t.ctx.Password)

    var tt = await sqlDbCon.pullDataFromDatabase('Select top 2 rep.[optname], rep.[major_version] From master.[dbo].[MSreplication_options] as rep')
    console.log("First Output Obtained is " + tt[0][0].optname);
    console.log("Second Output Obtained is " + tt[0][1].optname);
    console.log("Third Output Obtained is " + tt[0][0].major_version);
    console.log("Fourth Output Obtained is " + tt[0][1].major_version);

    await t
            .wait(2000)
            .typeText(repo.HomePageUI.title, "Title contains " +tt[0][0].optname)
            .wait(3000);

})










    /*var res = JSON.parse(JSON.stringify(tt));
    var len = res.length;
    console.log('The length is ', len);
    //var cpu_busy = res[0][0].cpu_busy;
    console.log('The exact output is  ', res[0][0]);
    for (var i = 0; i < len; i++) {
        t.ctx.cB = tt[i][i].cpu_busy
        console.log('First value is     ', tt[i][i].cpu_busy);
    }
    
    var tt = await sqlDb.pullDataFromDatabase('Select top 2 rep.[optname], rep.[major_version] From master.[dbo].[MSreplication_options] as rep')
    console.log('Output received is ', tt);
    console.log('Input to be entered is ', tt[0][1].major_version);

    await t
        .wait(2000)
        .typeText(repo.HomePageUI.title, "Title to be entered is " + tt[0][1].optname);
    
    
    
    */