import Chance from 'chance'
/// <reference types="cypress" />


describe('Test for reqres', () => {
    before(() => {
      //cy.visit('https://example.cypress.io/commands/actions')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('Positive: Create user', () => {
        cy.fixture('user').then(user => {
            cy.request('POST', '/api/users', user).then(Response => {
                expect(Response.status).to.eq(201)
                expect(Response.body).to.have.property('name', user.name)
                expect(Response.body).to.have.property('job', user.job)
            }) 
        })  
    })

    it('Negative: POST request - login unsuccessful', () => {
        cy.request({method: "POST", url:'api/login', failOnStatusCode: false, body: 
            {
                "email":"peter@klaven"
            }
        }).then(Response => {
            expect(Response.status).to.eq(400)
        })
    })

    let testingData = [
        {
            description: "Max value",
            requestData: {
                name: Chance().string({length: 100}),
                job: Chance().string({length: 100})
            }
        },
        {
            description: "Min value",
            requestData: {
                name: Chance().string({length: 1}),
                job: Chance().string({length: 1})
            }
        }
    ]    



    testingData.forEach(({description, requestData}) => {
        it(`Positive: Create user ${description}`, () => {
            cy.request('POST', 'api/users/', requestData).then(Response =>{
                expect(Response.status).to.eq(201)
                expect(Response.body).to.have.property('name', requestData.name)
                expect(Response.body).to.have.property('job', requestData.job)
                })
            

        })
    })
})