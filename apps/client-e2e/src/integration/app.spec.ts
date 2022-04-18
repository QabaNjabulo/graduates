<<<<<<< HEAD
import { getGreeting } from '../support/app.po';
||||||| 0fcdbe12
// e2e testing to go here please seee below for example

/*import { getGreeting } from '../support/app.po';
=======
// e2e testing to go here please seee below for example

//To run the cypress test suite use the command: "yarn nx run-many --target=e2e --all"
import { getGreeting } from '../support/app.po';
>>>>>>> 47d81b5cd23036d60776e518bea209416d577121

//Example Test
describe('client', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome client');
  });
<<<<<<< HEAD
});
||||||| 0fcdbe12
});*/
=======
});

describe('client notifications testing', () => {
  beforeEach(() => cy.visit('/notifications'));

  //Test if the main notifications component has rendered properly
  it('should contain notification board', () => {
    cy.contains('Notification board');
  });

});
>>>>>>> 47d81b5cd23036d60776e518bea209416d577121
