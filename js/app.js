/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// Nav menu global variable
const navMenu = document.querySelector("#navbar__list");

// Sections global variable
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Dynamically build the nav menu when a section is added to the page

// looping over each section that's added to the document
sections.forEach(section => {

    //Declare & create nav menu list item
    const navMenuListItem = document.createElement("li");

    //Add nav meny specific class to list item element
    navMenuListItem.classList.add("menu__link");

    // Ingest text content from section using data-nav attribute
    navMenuListItem.textContent = section.getAttribute("data-nav");

    navMenuListItem.id = section.id + "a";
    
    // Scroll to section after clicking on list item using scrollIntoView event
    navMenuListItem.addEventListener("click", function(event) {
        event.preventDefault();
        section.scrollIntoView({behavior: "smooth"});
    });

    // append all elements to the navigation
    navMenu.appendChild(navMenuListItem);

});


// On window scroll
window.addEventListener('scroll', (event) => {
    event.preventDefault();
  
    // Looping over each section that appreas in the viewport
    sections.forEach( section => {
  
      // Get pixel distance from top of viewport
      const topDistance = section.getBoundingClientRect().top;
      
      // If the distance between the section and the top is between 0-100px,
      if (topDistance >= 0 && topDistance < 100) {
        // add active class to section
        section.classList.add('your-active-class');
        // add active class to nav menu list item
        document.getElementById(section.id + "a").classList.add("navactive"); 
        
      
      } else {
        // Otherwise, remove the class from section
        section.classList.remove('your-active-class');
        // Otherwise, remove the class from nav menu list item
        document.getElementById(section.id + "a").classList.remove("navactive"); 
      }
    });
  });
