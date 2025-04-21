class MyInfoPage {

    selectorsList(){

        const selectors = {

            firtNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericCombobox: ".oxd-select-wrapper",
            secondItemCombobox: '.oxd-select-dropdown > :nth-child(27)',
            thirdItemCombobox: '.oxd-select-dropdown > :nth-child(2)'
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName, nickName){

        cy.get(this.selectorsList().firtNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetails (employeeId, otherId, driversLicenseNumber, expiryDate, ssnNumber, sinNumber){
        
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
        cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumber)
    }

    fillStatus (){

        cy.get(this.selectorsList().genericCombobox).eq(0).click({force: true})
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({force: true})
        cy.get(this.selectorsList().thirdItemCombobox).click()

    }

    saveForm (){

        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

}

export default MyInfoPage