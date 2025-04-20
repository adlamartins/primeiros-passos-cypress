import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {

    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firtNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"

  }

  
  it.only('User Info Update - Sucess', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firtNameField).clear().type('FirstName')
    cy.get(selectorsList.middleNameField).clear().type('MiddleName')
    cy.get(selectorsList.lastNameField).clear().type('LastName')
    cy.get(selectorsList.genericField).eq(3).clear().type('45454')
    cy.get(selectorsList.genericField).eq(4).clear().type('111.111')
    cy.get(selectorsList.genericField).eq(5).clear().type('12345678')
    cy.get(selectorsList.genericField).eq(6).clear().type('2026-04-19')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

  })
  it('Login - Fail', () => {

    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})