const menuList = document.querySelector("#navbar-list");

//an array of menu items
const menuItem = ["Home", "About", "Contact", "Blog", "Subscribe"];

const sections = document.querySelectorAll("section");

//a function to create a list with anchor links for menu items, and class name set.
//appended to unordered list
(function createNav(){
    for(let i=0; i<sections.length; i++){
        const menu = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.innerHTML = menuItem[i];
        anchor.setAttribute("href", `#${sections[i].id}`);
        menuList.appendChild(menu);
        menu.className = "nav-item";
        menu.appendChild(anchor);
        anchor.className = "menu-list";
    }
})();


const header = document.querySelector(".page-header");

//setting sticky to the the distance of the outer border of the 
//current element relative to the inner border of the top
const sticky = header.offsetTop;

//helper function to apply sticky header when scrolling
function stickyHeader(){
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
};
window.onscroll = function(){stickyHeader()};


//smooth navigation function to appropriate section
function smoothNavigation(){
    menuList.addEventListener("click", (e)=>{
        console.log("click");
        e.preventDefault();
        const prevent = e.target;
        const smooth = document.querySelector(prevent.getAttribute("href"))
        smooth && smooth.scrollIntoView({behavior: "smooth"})
    })
};
smoothNavigation();


//setting variable to be the interior height of the window in pixels
const viewHeight = window.innerHeight;

const navList = document.querySelector(".menu-list");

//makeActive function to set active on each sections 
//with respect to its corresponding menu list
function makeActive(){
    for(const section of sections){
        const box = section.getBoundingClientRect();
        const id = section.getAttribute("id");
        const sectionHrefId = document.querySelector(`[href="#${id}"]`);
        if(box.top < viewHeight && box.bottom > viewHeight){
            section.classList.add("active");
            sectionHrefId.classList.add("active-link");
        }else{
            section.classList.remove("active");
            sectionHrefId.classList.remove("active-link");
        }
    }
};
//Event listener to call makeActive function
document.addEventListener("scroll", makeActive);


const navbarList = document.querySelectorAll(".menu-list");
navbarList.forEach((link)=>{
    link.addEventListener("click", function(e){
        e.preventDefault();
        if(link.className === "active"){
            link.scrollIntoView({
                behavior: "smooth"
            })
        }
    
    });
});


//submitAlert. To create an alert to inform user when form is submitted successfully
function submitAlert(e){
    alert("Subscribed successfully!")
    e.preventDefault();
};
//Event listener to call submitAlert function
document.addEventListener("submit", submitAlert);


const hamburger = document.querySelector(".hamburger");

//Event listener to add hamburger menu
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    menuList.classList.toggle("active");
});

//Event listener to remove hamburger menu
document.querySelectorAll(".menu-list").forEach(link => link.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        menuList.classList.remove("active");
    }));

