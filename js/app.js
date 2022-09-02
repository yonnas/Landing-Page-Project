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

 * Begin Main Functions
 * 
*/

// Create function to dynamically build the  
// nav menu when a section is added to the page
const navMenuBuilder = () => {

  // looping over each section that's added to the document
  sections.forEach(section => {

    //Declare & create nav menu list item
    const navMenuListItem = document.createElement("li");

    //Add style class and corresponding section ID to list item element
    navMenuListItem.classList.add("menu__link", section.getAttribute("id"));

    // Ingest text content from section using data-nav attribute
    navMenuListItem.textContent = section.getAttribute("data-nav");
    
    // Scroll to section after clicking on list item using scrollIntoView event
    navMenuListItem.addEventListener("click", () => {
      section.scrollIntoView({behavior: "smooth"});
    });

    // append all elements to the navigation
    navMenu.appendChild(navMenuListItem);
    
  });

};

// invoke nav menu builder function
navMenuBuilder();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// On window scroll event, listen/detect for section in viewport
// and apply active classes to matching section and list item
window.addEventListener('scroll', (event) => {
  event.preventDefault();

  // Create variable to retrieve all nav menu list items
  const allNavMenuListItems =  document.querySelectorAll("nav ul li");

  // Create variable for current section ID as empty string
  let currentSectionId = "";

  // Looping over each section that appears in the viewport
  sections.forEach(section => {

    // Get pixel distance from top of viewport
    const topDistance = section.getBoundingClientRect().top;

    // Create variable for top viewport calculation
    const isItInViewport = topDistance >= 0 && topDistance < 100;

    // If the distance between the section and the top is between 0-100px,
    if (isItInViewport) {
      // add active class to section
      section.classList.add('your-active-class');
      // assign section ID from section that's in viewport
      currentSectionId = section.getAttribute("id");

    }  else {
      // Otherwise, remove the active class from section
      section.classList.remove('your-active-class');
    }

    // Looping over each nav menu list item to find matching section in the viewport
    allNavMenuListItems.forEach((li) => {
      // By default remove the active class from nav menu list item
      li.classList.remove("navactive");
      // If list item contains matching section ID to section in viewport
      if (li.classList.contains(currentSectionId)) {
      // add active class to nav menu list item
        li.classList.add("navactive");
      }
    });  
  });
});

