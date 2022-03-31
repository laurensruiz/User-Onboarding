//write tests here
beforeEach(() => {
    describe("Form App", () => {
        /*
        *Each Test need a fresh state so we must refresh page
        */
       cy.visit("http://localhost:3000/");

})

//Helper
    const textInput = () => cy.get("input[]");
    const fooBarInput = () => cy.get("input[name=foobar]");
    const submitBtn = () =>









})