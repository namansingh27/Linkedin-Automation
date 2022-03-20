
const loginLink = "https://www.linkedin.com/checkpoint/lg/sign-in-another-account";
const puppeteer = require("puppeteer");

let email = "automation1313@gmail.com";
let password = "automation@1000";

let page;

let browserWillLaunchPromise = puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: null,
  }); 

  browserWillLaunchPromise
  .then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage();
    return newTabPromise;
   
  })
  .then(function (newTab) {
    page = newTab;
    let websiteWillbeOpenedPromise = newTab.goto(loginLink);
    return websiteWillbeOpenedPromise;
  })
  .then(function () {
    let emailWillbeEnteredPromise = page.type("input[id=username]", email, {
      delay: 100,
    });
    return emailWillbeEnteredPromise;
  })
  .then(function () {
    let passwordWillbeEnteredPromise = page.type(
      "input[id=password]",
      password,
      { delay: 100 }
    );
    return passwordWillbeEnteredPromise;
  }).then(function(){
      let submitBtn= page.waitForSelector('button[type="submit"]')
      return submitBtn;
  })
  .then(function () {
    let loginButtonClickPromise = page.click(
      'button[type="submit"]',
      { delay: 80 }
    );
    return loginButtonClickPromise;
  }).then(function(){
      let myNetworkclick= page.waitForSelector('a[data-test-global-nav-link="mynetwork"]')
      return myNetworkclick;
  })
  .then(function(){
      let myNetworkBtnClickPromise=page.click('a[data-test-global-nav-link="mynetwork"]'
  );
  return myNetworkBtnClickPromise;
  })

    .then(function(){
        let nameofSender=page.waitForSelector(
            '.invitation-card__details')
        return nameofSender
    })
  
  .then(function () {
     
   let nameofSenderClickPromise = page.click(
       '.invitation-card__details'
       );
   return nameofSenderClickPromise;
  })
  
  .then(function(){
    let acceptBtn=page.waitForSelector(
        '.display-flex >.pvs-profile-actions >button[data-control-name="accept"]')
    return acceptBtn
})

.then( async function () {
 
 let acceptBtnPromise =  page.evaluate(
    () => document.querySelectorAll(`.display-flex >.pvs-profile-actions >button[data-control-name="accept"]`)[1].click()
   );
return acceptBtnPromise;
})
  

//document.querySelectorAll(`.display-flex >.pvs-profile-actions >button[data-control-name="accept"]`)[1].click()

//.display-flex >.pvs-profile-actions >button[data-control-name="accept"]
  
  
// const value = await page.evaluate(
//     () => document.querySelectorAll('table tr td')[1].innerHTML
// );
  
  
 



