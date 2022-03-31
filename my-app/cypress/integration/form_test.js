//write tests here
describe("Form App", () => {
    beforeEach(() => {
        /*
        *Each Test need a fresh state so we must refresh page
        */
       cy.visit("http://localhost:3000/");

})

    //Helper
    const usernameInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const tosInput = () => cy.get("input[type=checkbox]").check();
    const fooBarInput = () => cy.get("input[name=foobar]");
    const submitBtn = () => cy.get("input[id=submitBtn");

    it("Sanity Check to make sure tests work", () => {
        //it is a test
        //expect is an assertion
        //there can and often are multiple assertions
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({}); // === : each object references to a space in memory, but objects save in different spaces in memory
        expect({}).to.eql({}); // == ; same thing but not exactly note syntax
    })

    it("The proper elements are showing", () => {
        usernameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        tosInput().should("exist");
        fooBarInput().should("not.exist");
        submitBtn().should("exist");
    })

    describe("Filling out the inputs and cancelling", () => {
        // You can use (optional) "describe" blocks to organize
        // our tests and group them under a top level heading
        it("can navigate to the site", () => {
          cy.url().should("include", "localhost");
        })

        it("Can type in the username, password and email", () => {
            usernameInput()
              .should("have.value", "")
              .type("laurensruiz")
              .should("have.value", "laurensruiz");
            
            emailInput()
              .should("have.value", "")
              .type("sample_email@gmail.com")
              .should("have.value", "sample_email@gmail.com");
            
            passwordInput()
              .should("have.value", "")
              .type("123456")
              .should("have.value", "123456");
        })

    })

    describe("TOS can be checked", () => {
        it("can be checked", () => {
            tosInput()
            .should('be.visible') 
            .check({ force: true }) // checks the box
            .should('be.checked')
            })
        })






})