const navItem1 = document.getElementById('section-1');
const navItem2 = document.getElementById('section-2');
const navItem3 = document.getElementById('section-3');
const navItem4 = document.getElementById('section-4');

const home = document.getElementById('home').offsetTop;
const services = document.getElementById('services').offsetTop;
const aboutus = document.getElementById('aboutus').offsetTop;
const contactus = document.getElementById('contactus').offsetTop;

const links = document.querySelectorAll("header ul a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
//  smooth scrolling with method scroll()
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

function currentNavItem (item) {
    if(!item.classList.contains('selected')){
        deleteCurrentNavItem();
        item.classList.add('selected');
    }
}

function deleteCurrentNavItem () {
    navItem1.classList.remove('selected');
    navItem2.classList.remove('selected');
    navItem3.classList.remove('selected');
    navItem4.classList.remove('selected');
}


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // check to see if currently at Y coordinate of specific range of nav item 
    if(scrolled >= contactus)
        currentNavItem(navItem4);
    else if(scrolled >= aboutus)
        currentNavItem(navItem3);
    else if(scrolled >= services)
        currentNavItem(navItem2);
    else 
        currentNavItem(navItem1);
})