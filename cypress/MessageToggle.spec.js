import React from 'react';
import { mount } from '@cypress/react';
import MessageToggle from './MessageToggle';

describe('MessageToggle Component', () => {
  it('should not show message initially', () => {
    mount(<MessageToggle />);
    cy.get('#message').should('not.exist');
  });

  it('should show message when the button is clicked', () => {
    mount(<MessageToggle />);
    cy.get('button').click();
    cy.get('#message').should('exist').and('have.text', 'Hello, World!');
  });

  it('should hide message when the button is clicked again', () => {
    mount(<MessageToggle />);
    cy.get('button').click();
    cy.get('button').click();
    cy.get('#message').should('not.exist');
  });
});
