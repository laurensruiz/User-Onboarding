//write tests here
beforeEach(() => {
    describe("Form App", () => {
        /*
        *Each Test need a fresh state so we must refresh page
        */
       cy.visit("http://localhost:3000/");

})

    //Helper
    const usernameInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const fooBarInput = () => cy.get("input[name=foobar]");
    const submitBtn = () => cy.get("input[id=submitBtn");

    it("Sanity Check to make sure tests work", () => {
        //it is a test
        //expect is an assertion
        //there can and often are multiple assertions
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({}); // === : each object references to a space in memory, but objects save in different spaces in memory
        expect({}).to.equal({}); // == ; same thing but not exactly
    })

    it("The proper elements are showing", () => {
        usernameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        fooBarInput().should("not.exist");
        submitBtn().should("exist");

    })











})