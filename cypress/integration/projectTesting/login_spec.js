describe('logs in', () => {
    it('using UI', () => {
        cy.visit('http://localhost:3000/login')
        cy.location('pathname').should('equal', '/login')

        // enter valid email and password
        cy.get('[name=email]').type(Cypress.env('email'))
        cy.get('[name=password]').type(Cypress.env('password'))
        cy.contains('button', 'Submit').click()

        // confirm we have logged in successfully
        cy.location('pathname').should('equal', '/')
        cy.contains('Homepage')
            .should('be.visible')
            .then(() => {
                /* global window */
                const customerString = window.localStorage.getItem('customer')
            })

        // now we can log out
        cy.contains('a', 'LOGOUT').click()
        cy.location('pathname').should('equal', '/')
    })

    it('Does not log in without email and password', () => {
        cy.visit('http://localhost:3000/login')
        cy.location('pathname').should('equal', '/login')

        //try loggin in without an email and password
        cy.contains('button', 'Submit').click()

        // still on /login page plus an error is displayed
        cy.location('pathname').should('equal', '/login')
        cy.contains('Invalid username or password').should(
            'be.visible'
        )
    })

    it('Does not log in without email', () => {
        cy.visit('http://localhost:3000/login')
        cy.location('pathname').should('equal', '/login')

        //try loggin in without an email, but with a valid password
        cy.get('[name=password]').type(Cypress.env('password'))
        cy.contains('button', 'Submit').click()

        // still on /login page plus an error is displayed
        cy.location('pathname').should('equal', '/login')
        cy.contains('Invalid username or password').should(
            'be.visible'
        )
    })

    it('Does not log in without a password', () => {
        cy.visit('http://localhost:3000/login')
        cy.location('pathname').should('equal', '/login')

        //try loggin in without a password, but with a valid email
        cy.get('[name=email]').type(Cypress.env('email'))
        cy.contains('button', 'Submit').click()

        // still on /login page plus an error is displayed
        cy.location('pathname').should('equal', '/login')
        cy.contains('Invalid username or password').should(
            'be.visible'
        )
    })

    it('Does not log in with invalid password', () => {
        cy.visit('http://localhost:3000/login')
        cy.location('pathname').should('equal', '/login')

        // try logging in with invalid password
        cy.get('[name=email]').type(Cypress.env('email'))
        cy.get('[name=password]').type(Cypress.env('wrongPassword'))
        cy.contains('button', 'Submit').click()

        // still on /login page plus an error is displayed
        cy.location('pathname').should('equal', '/login')
        cy.contains('Invalid username or password').should(
            'be.visible'
        )
    })

    it('Does not log in with unregistered user', () => {
        cy.visit('http://localhost:3000/login')
        cy.location('pathname').should('equal', '/login')

        // try logging in with invalid user
        cy.get('[name=email]').type(Cypress.env('emailNotInDB'))
        cy.get('[name=password]').type(Cypress.env('passwordNotInDB'))
        cy.contains('button', 'Submit').click()

        // still on /login page plus an error is displayed
        cy.location('pathname').should('equal', '/login')
        cy.contains('Invalid username or password').should(
            'be.visible'
        )
    })

    it('Has registration', () => {
        cy.contains('a', 'Not registered? Create an account here').click()
        cy.location('pathname').should('equal', '/signup')
    })
})