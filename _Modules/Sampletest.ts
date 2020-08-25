import { Selector } from 'testcafe';

fixture `Demo`
    .page `https://s1.demo.opensourcecms.com/wordpress/wp-login.php?loggedout=true`;

test('New Test 1', async t => {
    await t
        .typeText(Selector('#user_login'), 'opensourcecms')
        .typeText(Selector('#user_pass'), 'opensourcecms')
        .click(Selector('#wp-submit'))
        .wait(3000);
});