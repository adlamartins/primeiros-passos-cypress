import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage ()
const myInfoPage = new MyInfoPage ()

describe('Orange HRM Tests', () => {

  const selectorsList = {

    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    
  }

  
  it.only('User Info Update - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()
    
    
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firtNameField).clear().type('FirstName')
    cy.get(selectorsList.middleNameField).clear().type('MiddleName')
    cy.get(selectorsList.lastNameField).clear().type('LastName')
    cy.get(selectorsList.genericField).eq(3).clear().type('TestCY')
    cy.get(selectorsList.genericField).eq(4).clear().type('45454')
    cy.get(selectorsList.genericField).eq(5).clear().type('111.111')
    cy.get(selectorsList.genericField).eq(6).clear().type('12345678')
    cy.get(selectorsList.genericField).eq(7).clear().type('2026-04-19')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCombobox).eq(0).click({force: true})
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.thirdItemCombobox).click({force: true})
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
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