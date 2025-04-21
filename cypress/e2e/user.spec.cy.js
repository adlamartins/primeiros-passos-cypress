import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MyInfoPage from '../pages/myInfoPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage ()
const myInfoPage = new MyInfoPage ()
const menuPage = new MenuPage ()

describe('Orange HRM Tests', () => {

  
  
  it.only('User Info Update - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails('First Name', 'Middle Name', 'Last Name', 'Nickname')
    myInfoPage.fillEmployeeDetails('126652', '4164', '56465465', '2026-04-21', '55465', '22454')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
         
  })
  it('Login - Fail', () => {

    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})