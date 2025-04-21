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

    

}

export default MyInfoPage