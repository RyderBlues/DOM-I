const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Change Title
const title = document.querySelector('title');
title.textContent = "Great Idea!";
// console.log(title);
const navBar = document.querySelectorAll('nav > a');
navBar[0].textContent = siteContent.nav['nav-item-1'];
navBar[1].textContent = siteContent.nav['nav-item-2'];
navBar[2].textContent = siteContent.nav['nav-item-3'];
navBar[3].textContent = siteContent.nav['nav-item-4'];
navBar[4].textContent = siteContent.nav['nav-item-5'];
navBar[5].textContent = siteContent.nav['nav-item-6'];


//h1 text
const h1Text = document.querySelector('h1');
h1Text.textContent = siteContent['cta']['h1'];
document.querySelector('h1').innerHTML = "DOM<br>IS<br>AWESOME";

// Picture Beside h1
const codePicture = document.querySelector('#cta-img');
codePicture.setAttribute('src', siteContent["cta"]["img-src"]);

//Button Below h1
const buttonText = document.querySelector('.cta-text button');
buttonText.textContent = siteContent['cta']['button'];

//main Content
const featuresH4 = document.querySelector('.text-content h4');
featuresH4.textContent = siteContent['main-content']['features-h4'];

const featuresText = document.querySelector('.text-content p');
featuresText.textContent = siteContent['main-content']["features-content"];

const aboutH4 = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
aboutH4.textContent = siteContent['main-content']['about-h4'];

const aboutText = document.querySelector('.top-content .text-content:nth-of-type(2) p');
aboutText.textContent = siteContent['main-content']['about-content'];

//main Content img
const mainImg = document.querySelector('.middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom-content h4s
const servicesH4 = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
servicesH4.textContent = siteContent['main-content']['services-h4'];

const productH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productH4.textContent = siteContent['main-content']['product-h4'];

const visionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionH4.textContent = siteContent['main-content']['services-h4'];

//bottom-content text
const servicesText = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
servicesText.textContent = siteContent['main-content']['services-content'];

const productText = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productText.textContent = siteContent['main-content']['product-content'];

const visionText = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionText.textContent = siteContent['main-content']['vision-content'];

//contact Section

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contactAddress = document.querySelector('.contact p:nth-of-type(1)');
contactAddress.textContent = siteContent['contact']['address'];

const contactNum = document.querySelector('.contact p:nth-of-type(2)');
contactNum.textContent = siteContent['contact']['phone'];

const contactEmail = document.querySelector('.contact p:nth-of-type(3)');
contactEmail.textContent = siteContent['contact']['email'];

//footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

//change Nav Text Color
for (let i = 0; i < navBar.length; i++) {
  navBar[i].style.color = "green";
}

//new Nav items
const newNav1 = document.createElement('a');
newNav1.textContent = 'Stuff';
newNav1.href = '#';
document.querySelector('nav').appendChild(newNav1);

const newNav2 = document.createElement('a');
newNav2.textContent = 'Etc.';
newNav2.href = '#'
document.querySelector('nav').prepend(newNav2);


