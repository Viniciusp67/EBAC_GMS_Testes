/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach( () => {
    cy.screenshot()
  });

  it('Cadastro de campos obrigatórios', () => {
    var email = `paulo${Date.now()}@teste.com`
    cy.preencherCadastro('Paulo', 'Melo', email,'12345678998', 'Teste@852')
    cy.get('#signup-response').should("contain", "Cadastro realizado com sucesso!")
  })

  it('Valdiar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Paulo20', 'Melo', "paulo@teste.com", '11985642378','Teste@852')
    cy.get('#signup-response').should('contain', "Nome deve conter apenas caracteres alfabéticos, acentuados e espaços")
});

  it('Validar mensagem de erro com o campo sobrenome inválido', () => {
    cy.preencherCadastro('Paulo', 'Melo123', "paulo@teste.com", '11985642378', 'Teste@852')
    cy.get('#signup-response').should('contain', "Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços")
  })

  it('Validar mensagem de erro com o campo email inválido', () => {
    cy.preencherCadastro('Paulo', 'Melo', "pauloemail.com", '11985642378', 'Teste@852')
    cy.get('#signup-response').should('contain', "Informe um e-mail válido")
  })

  it('Validar mensagem de erro com o campo telefone inválido', () => {
    cy.preencherCadastro('Paulo', 'Melo', "paulo@teste.com", 'telefone', 'Teste@852')
    cy.get('#signup-response').should('contain', "Telefone deve conter apenas números")
  })

  it('Validar mensagem de erro com o campo senha inválido', () => {
    cy.preencherCadastro('Paulo', 'Melo', "paulo@teste.com", '11985642378', '123')
    cy.get('#signup-response').should('contain', "A senha deve conter no mínimo 6 caracteres, letras e números")
  })



})
