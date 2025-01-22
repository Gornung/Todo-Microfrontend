// @ts-nocheck
Cypress.Commands.add('clickOnRightSide', () => {
  cy.window().then((win: Window) => {
    const screenWidth = win.innerWidth;
    const screenHeight = win.innerHeight;

    cy.get('body').click(screenWidth - 10, screenHeight / 2);
  });
});
