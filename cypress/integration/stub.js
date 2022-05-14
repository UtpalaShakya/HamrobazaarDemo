/// <reference types="cypress" />

describe("intercept", () => {
  it("intercept get", () => {
    cy.intercept("GET", "https://hamrobazaar.com/").as("selectOption");
    cy.visit("https://hamrobazaar.com/");
    cy.get(
      ".Wcat > .vh--part > :nth-child(2) > .cat__item > .cat__item--main"
    ).click();

    //cy.wait("@selectOption").its("response.statusCode").should("eq", 200);
    cy.wait("@selectOption").then(function (xhr) {
      expect(xhr.response.statusCode).to.eq(200);
      expect(xhr.response.body.content).to.eq(
        "Hamrobazar.com is Nepal's No. 1 Marketplace which enables to list wide variety of new or used product online. We at hamrobazar.com believe that Internet is a great promotional vehicle as well as communication channel for connecting buyers and sellers. Hamrobazar.com is perfect solution which helps to list your products and find great deals."
      );
    });
  });
});
