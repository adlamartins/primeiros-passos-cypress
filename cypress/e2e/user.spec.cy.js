import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MyInfoPage from '../pages/myInfoPage'
import MenuPage from '../pages/menuPage'

const Chance = require('chance')

const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage ()
const myInfoPage = new MyInfoPage ()
const menuPage = new MenuPage ()
const chance = new Chance ()

describe('User Info Update - Orange HRM Tests', () => {

   
  it('User Info Update - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails(chance.integer(), chance.integer(), chance.integer(), chance.date({string: true}), chance.ssn(), chance.integer())
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
         
  })
 
})