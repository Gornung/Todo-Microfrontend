// @ts-nocheck

describe('e2e test Todo Microfrontend', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(1000);
    cy.clickOnRightSide();
    cy.get('#total-count').should('have.text', '11');
    cy.get('#active-count').should('have.text', '9');
    cy.get('#done-count').should('have.text', '1');
    cy.get('#deleted-count').should('have.text', '1');
    cy.clickOnRightSide();
    cy.get('#check-icon-9').click();
    cy.get('#check-icon-8').click();
    cy.get('#check-icon-7').click();
    cy.get('#trash-icon-6').click();
    cy.get('#trash-icon-5').click();
    cy.get('#trash-icon-4').click();
    cy.get('#list-element-1').click();
    cy.get('#input').clear().type('updated');
    cy.get('#textarea').type('by e2e test');
    cy.get('#save').click();
    cy.get('#list-element-1').should('have.text', 'updated');
    cy.get('#new-todo').click();
    cy.get('#input').click();
    cy.get('#input').type('added');
    cy.get('#textarea').type('e2e');
    cy.get('#save').click();
    cy.get('[id^="list-element-"]').should('have.length', 8);
  });
});
