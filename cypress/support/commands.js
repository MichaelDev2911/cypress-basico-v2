Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName')
    .type('Michael')
    cy.get('#lastName')
    .type('Vargas da Silveira')
    cy.get('#email')
    .type('michael.silveira@cwi.com.br')
    cy.get('#open-text-area')
    .type('Customizado')
    // 'button[type="submit"]' outra forma de pegar o botão abaixo, segredo é colocar o nome do campo entre conchete
    cy.contains('#white-background > form > button','Enviar') 
    .click()
   
})
