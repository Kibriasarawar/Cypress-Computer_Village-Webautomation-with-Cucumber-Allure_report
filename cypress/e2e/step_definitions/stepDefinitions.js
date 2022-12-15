import {Given, When, And, Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/Locators";
import Data from "../../TestData/data"; 

const locator= new locatorsPage();
const data= new Data(); 


// <------------------------------------------------------------------->
// <----------------------- lognin Steps ------------------------------->
// <------------------------------------------------------------------->
Given('open computer village website', function(){ 
    cy.visit(data.URL);
    cy.wait(2000)
})

When('Click in My Account', () => { 
    cy.xpath(locator.my_acc).click({force: true});
})

And('Write Your Email', () => {
    cy.xpath(locator.Temail).type(data.USERNAME)
})

And('Write Your Password', () => {
    cy.xpath(locator.Tpass).type(data.PASSWORD)
})

And('Mark Checkbox', () => {
    cy.xpath(locator.Lcb).check().should('be.checked')
    cy.wait(2000)
})

And('Click Login', () => { 
    cy.xpath(locator.login).click({force: true});
    cy.wait(5000)
})

And('Contain to Show', () =>{
    cy.xpath(locator.as).contains('Dashboard');
})
//////////////////////////////////----------------------------///////////////////////////////////
And('Click on Home', () =>{
    cy.xpath(locator.home).click({force: true});
})

And('Scroll Down', () =>{
    cy.xpath(locator.Head_Office).scrollIntoView({ easing: 'linear' });
    cy.wait(2000)
})

And('Click Get Direction', () =>{
    cy.xpath(locator.Head_Office).click({force: true});
    cy.wait(10000)
})

And('Click on Close', () =>{
    cy.xpath(locator.closebtn).click({force: true});
    cy.wait(1000)
})

// Then('Title Subscription', () =>{
//     cy.xpath(locator.as2).and('contain', 'STAY CONNECTED');
// })
/////////////////////////----------------------------------////////////////////////////////////////////
And('Click on Be an Affiliate', function(){
    cy.xpath(locator.BAA).click({force: true});
    cy.wait(3000)
})
And('write name', () =>{
    cy.xpath(locator.name).click({force: true}).type(data.NAME);
})

And('write email', () =>{
    cy.xpath(locator.email).click({force: true}).type(data.USERNAME);
})

And('write pass', () =>{
    cy.xpath(locator.pass).click({force: true}).type(data.PASSWORD);
})

And('write confirm pass', () =>{
    cy.xpath(locator.Rpass).click({force: true}).type(data.PASSWORD);
    cy.wait(5000)
})
//////////////////////----verify----//////////////
And('Type Your Name', () =>{
    cy.xpath(locator.Name).click({force: true}).type(data.NAME);
})

And('Type Your Email', () =>{
    cy.xpath(locator.Email).type(data.USERNAME);
})

And('Type Your Phone Number', () =>{
    cy.xpath(locator.Phone).click({force: true}).type(data.PHONE);
})

And('Type your Adress', () =>{
    cy.xpath(locator.Address).click({force: true}).type(data.ADDRESS);
})
And('Type How Will You Affiliate', () =>{
    cy.xpath(locator.how_a).click({force: true}).type(data.HWYA);
})

And('Click Save', () =>{
    cy.xpath(locator.Save).click({force: true});
})

// ------------offer--------------------//
And('Click All Offers', function(){
    cy.xpath(locator.All_offer).click();
})

And('Click Asus Dec', () =>{
    cy.xpath(locator.Asus_Dec).click({force: true});
})

And('Click Model Number', () =>{
    cy.xpath(locator.model).click({force: true});
    cy.wait(3000)
})

And('Click Increase Qty', () =>{
    cy.xpath(locator.Qty).click({force: true});
})

And('Add To Cart', () =>{
    cy.xpath(locator.Cart).click({force: true});
})

And('Click Shopping Cart', () =>{
    cy.xpath(locator.S_cart).click({force: true});
})

// ---------------network item------------------//
And('Mouse Hover Network', () =>{
    cy.xpath(locator.network_hover).click({force: true});
})

And('Hover and Click Tp-link', () =>{
    cy.xpath(locator.router_name).click({force: true});
})
// ------------router----------------------//
And('Click Offers', () =>{
    cy.xpath(locator.All_offer).click({force: true});
})

And('Click Special Router Offer', () =>{
    cy.xpath(locator.S_router).click({force: true});
})

And('Click Router Model Number', () =>{
    cy.xpath(locator.R_model).click({force: true});
})

And('Increase Qty', () =>{
    cy.xpath(locator.Qty).click({force: true});
})

And('Router Add To Cart', () =>{
    cy.xpath(locator.Cart).click({force: true});
})

And('Click Shopping to Cart', () =>{
    cy.xpath(locator.S_cart).click({force: true});
})
///////////----search-----------------///////
And('Click Search Bar', () =>{
    cy.xpath(locator.Search_box).click().type('Desktop');
})

And('Click Search Icon', () =>{
    cy.xpath(locator.Search_icon).click({force: true});
})
// -----------logout--------------//
And('Click to Logout', () =>{
    cy.xpath(locator.logout).click({force: true});
})

And('click manage profile', () =>{
    cy.xpath(locator.manage_profile).click({force: true});
})

And('write your phone number', () =>{
    cy.xpath(locator.your_phone).click({force: true}).type(data.PHONE)
})

And('enter pass', () =>{
    cy.xpath(locator.your_pass).click({force: true}).type(data.PASSWORD);
})

And('confirm pass', () =>{
    cy.xpath(locator.confirm_pass).click({force: true}).type(data.PASSWORD);
})

And('Click Adress', () =>{
    cy.xpath(locator.your_add).click({force: true}).type(data.ADDRESS);
})

And('Select Country', () =>{
    cy.xpath(locator.Country).click({force:true});
})

And('Search Country', () =>{
    cy.xpath(locator.Search_country).click({force: true}).type('Bangladesh{enter}');
})

And('type city', () =>{
    cy.xpath(locator.your_city).click({force: true}).type('Chittagong');
})

And('type postal code', () =>{
    cy.xpath(locator.postal_code).click({force: true}).type('4000');
})

And('click update profile', () =>{
    cy.xpath(locator.update_pro).click({force: true});
    cy.wait(3000)
})


// And('', () =>{
//     cy.xpath(locator.).();
// })


// And('', () =>{
//     cy.xpath(locator.).();
// })



