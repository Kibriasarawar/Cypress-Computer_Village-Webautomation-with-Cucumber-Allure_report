class locatorsPage{
    
    // loginWith email
    // my_acc = "(//a[@class='site-nav__link site-nav__link--icon'])[1]"
    // RegNow = "//a[normalize-space()='Register Now']"
    // loginwithgoogle = "//a[@class='btn btn--full px-4 my-3']"
    // type_email= "//input[@type='email']"

    // Tname = "(//div[@class='b-input-group input-group--style-1'])[1]"
    // Temail = "//input[@placeholder='* Email']"
    // Tpass = "//input[@placeholder='* Password']"
    // Cpass = "//input[@placeholder='* Confirm Password']"
    // Rcb = "//input[@id='checkboxExample_1a']"
    // create_acc = "//button[normalize-space()='Create Account']"

    // login
    my_acc = "(//a[@class='site-nav__link site-nav__link--icon'])[1]"
    Temail = "//input[@id='email']"
    Tpass = "//input[@name='password']"
    Lcb= "//input[@id='demo-form-checkbox']"
    login= "//button[normalize-space()='Login']"
    as= "//h2[@class='heading heading-6 text-capitalize strong-600 mb-2']" //assertion

    home= "(//a[@class='site-nav__link'])[4]"
    Head_Office= "//button[@data-name='HEAD OFFICE']"
    closebtn= "//button[@class='close']"
    as2="(//div[@class='heading'])[4]"  //assertion
//////////////////////////////////////////////////////////
    name='//input[@placeholder="Name"]'
    email="(//input[@placeholder='Email'])[1]"
    pass="//input[@placeholder='Password']"
    Rpass="//input[@placeholder='Confirm Password']"

/////////////////////////////
    BAA= '(//a[@class="site-nav__link"])[5]'
    Name="//input[contains(@placeholder,'Your name')]"
    Phone="//input[@placeholder='Phone Number']"
    Email="//input[@name='element_1']"
    Address="//input[@placeholder='Full Address']"
    how_a='(//input[@type="text"])[6]'
    Save="//button[normalize-space()='Save']"

/////////////
    All_offer= "//a[contains(text(),'All Offers')]"
    Asus_Dec="//a[contains(text(),'আসুস ডিসেম্বর ধামাকা অফার')]"
    model="//a[contains(text(),'Asus VivoBook 15 OLED K513EA Core i5 11th Gen 15.6')]"
    Qty="//button[@aria-label='Increase item quantity by one']"
    Cart='(//div[@class="btn margin-right-10"])[2]'
    S_cart="//a[normalize-space()='Shopping Cart']"

    /////
    network_hover='(//span[@class="fa fa-caret-right click_arrow"])[1]'
    router_name='(//li[@class="site-nav__link"])[14]'
    // router_model="//a[contains(text(),'TP-Link TL-R470T+ 5-Port Load Balance Multi Wan Br')]"
    //////
    S_router="//a[contains(text(),'12.12 Special Router Offer')]"
    R_model="//a[contains(text(),'D-Link DIR-615 Wireless N300 Router')]"
    /////
    Search_box="//input[@id='search']"
    Search_icon="//button[@class=' icon-fallback-text']"
    logout='(//a[@title="Logout"])[1]'

    manage_profile="//span[normalize-space()='Manage Profile']"
    your_phone='//input[@name="phone"]'
    your_pass='(//input[@type="password"])[1]'
    confirm_pass='//input[@name="confirm_password"]'
    your_add="//textarea[@placeholder='Your Address']"
    Country='//span[@class="select2-selection__arrow"]'
    Search_country="//input[@role='textbox']"
    your_city="//input[@placeholder='Your City']"
    postal_code="//input[@placeholder='Your Postal Code']"
    update_pro="//button[normalize-space()='Update Profile']"












}
export default locatorsPage;
