/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Cadastro de campos obrigatórios', () => {
    cy.visit('http://192.168.0.3:8080/')
    cy.get('#signup-firstname').type("Paulo")
    cy.get('#signup-lastname').type("Melo")
    cy.get('#signup-email').type("paulo2@teste.com")
    cy.get('#signup-phone').type("119987654321")
    cy.get('#signup-password').type("Teste@2025")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should("contain", "Cadastro realizado com sucesso!")
  })
})