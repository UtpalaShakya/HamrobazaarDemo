// /// <reference types="cypress" />

// import LoginPage from "./PageObject/LoginPage";

// //normal code, use command, pageobject, radio, assertions, title, url, alert

// describe("hamrobazaar login", () => {
//   beforeEach(() => {
//     //using command called login
//     //cy.login("9841546562", "UtpalaShakya");

//     //direct login from integration
//     // cy.visit("https://hamrobazaar.com/login");
//     // cy.get(".PhoneInputInput").clear().type("9841546562");
//     // cy.get("input[name=password]").clear().type("UtpalaShakya");
//     // cy.contains("Log In").click();

//     //PageObject for login
//     const lp = new LoginPage();
//     lp.visit();
//     lp.phoneNumber("9841546562");
//     lp.password("UtpalaShakya");
//     lp.logIn();
//   });

//   it("test error message", () => {
//     cy.visit("https://hamrobazaar.com/login");
//     cy.location().should((loc) => {
//       expect(loc.pathname).to.eq("/login");
//     });
//     cy.on("window:alert", (str) => {
//       expect(str).to.equal("Phone number is required");
//     });
//   });

//   it("assertion for url", () => {
//     cy.url().should("include", "hamrobazaa");
//     cy.title().should(
//       "eq",
//       "Hamrobazar - Nepal's Online Classified Marketplace Shopping"
//     );
//     cy.location("protocol").should("eq", "https:");
//   });

//   it("search item", () => {
//     cy.get(".desk > .search-form > form > .form-item > input")
//       .should("be.enabled")
//       .should("be.visible")
//       .type("mobile");
//     cy.get(".desk > .search-form > form > .icon--wrapper > .fal").click();
//     cy.get(".desk > .search-form > form > .form-item > input").should(
//       "have.value",
//       "mobile"
//     );

//     cy.contains("Add Filter").click();

//     //radio button
//     // cy.get(
//     //   ".sticky--part > .filter--box > .filter--form > form > :nth-child(2) > .input"
//     // ).should("have.length", 5);
//     cy.get(
//       ".sticky--part > .filter--box > .filter--form > form > :nth-child(2) > .input"
//     )
//       .should("be.visible")
//       .select("Brand New");
//     cy.get(".form-item--filterBtn > :nth-child(1)").click();
//   });

it("intercept", () => {
  cy.intercept(
    "GET",
    "api/Product?PageNumber=1&PageSize=10&Latitude=0&Longitude=0&CategoryId*",
    () => {
      cy.visit("https://hamrobazaar.com/");
    }
  );
});
//});
