/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const header = document.querySelector(".header"); //selects the whole div

const createHeader = array => { //Pass the function an array as it's only argument.
  const menu1 = document.createElement("div"); //creates div element
  const ul = document.createElement("ul"); //creates element ul
  menu1.querySelector(".menu"); //selects the menu div

  menu1.appendChild(ul); //adds the ul

  menu1.classList.add("menu"); //adds class list of menu

  const items = array.map(item => {
    const li = document.createElement("li"); //creates the li items
    li.textContent = item;
    return li;// Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
    Add those items to the <ul>
  });

  for (let li of items) {
    //same as foreach
    ul.appendChild(li);
  }

  document.querySelector(".menu-button").addEventListener("click", event => {
    menu1.classList.toggle("menu--open"); //toggles the text tep 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  });

  return menu1; //Step 5: return the menu component.
};
header.appendChild(createHeader(menuItems)); //adds the header Step 6: add the menu component to the DOM.
