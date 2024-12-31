import React from 'react';
import { mount } from '@cypress/react';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
  it('should show error when fields are empty', () => {
    mount(<LoginForm />);
    cy.get('button').click();
    cy.get('#error').should('exist').and('have.text', 'Both fields are required');
  });

  it('should submit the form when valid', () => {
    mount(<LoginForm />);
    cy.get('input[placeholder="Email"]').type('test@example.com');
    cy.get('input[placeholder="Password"]').type('password123');
    cy.get('button').click();
    cy.get('#error').should('not.exist');
  });
});
