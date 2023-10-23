/// <reference types="Cypress" />

describe('testes mais avançados, saindo do básico', () => {
    beforeEach(() => cy.visit('./src/index.html'))
    it('cy.clock,cy.tick',() => {
        cy.clock()
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('span[class="success"]')
        .should('be.visible')
        cy.tick(3000)
        cy.get('span[class="success"]')
        .should('not.be.visible')
    })
Cypress._.times(5,() => {
    it('lodash',() => {
        cy.clock()
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('span[class="success"]')
        .should('be.visible')
        cy.tick(3000)
        cy.get('span[class="success"]')
        .should('not.be.visible')
    })
})

it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })
  it('preencha a area de texto usando o comando invoke', () => {
    const longText = Cypress._.repeat('0123456789',20)

    cy.get('#open-text-area')
    .invoke('val', longText)
    .should('have.value', longText)
  
  })
  it('faz uma requisição HTTP', () => {
    cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
    .should((response) =>{
        const {status, statusText, body} = response
        expect(status).to.equal(200)
        expect(statusText).to.equal('OK')
        expect(body).to.include('CAC TAT')
    })
  
  })

  it.only('encontre o gato', () => {
    cy.get('#cat')
    .invoke('show')
    .should('be.visible')
    cy.get('#subtitle')
    .invoke('text', 'Eu não ❤️ gatos, mas também nada contra.')
  })

})