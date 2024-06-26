// DOM Manipulation:
document.body.append("Appended string.");

const pagetitle = document.getElementById("pageTitle");

// 1. element.innerHTML
// Setting HTML markup contained within the element.

// Implement Code here
// Vulnerability (innerHTML): XSS (Cross-site Scripting)
pagetitle.innerHTML = "<a href='https:www.google.com.sg'>Document Object Model</a>";

// 2. element.innerText
// Rendering text content of a node and its descendants.

// Implement Code here
pagetitle.innerHTML = "Document Object Model";

// 3. element.style
// Modifying the style of HTML elements

// Implement Code here
pagetitle.style,height = "2em";
pagetitle.style.color = "#ff0000";

// 4. getElementById
// refer to the example above (line 4)


// 5. getElementsByTagName
// Using getElementsByTagName method, search for elements that match a tag name
const spans = document.getElementsByTagName("span");
// Implement Code here

// Using getElementsByTagName method, search for elements that match a tag's index

// Implement Code here
spans[0].innerText = "Element Updated.";
spans[1].innerText = "Another Element Updated.";

console.log(spans.length);

// 6. createElement
// Adding a new HTML element in JavaScript.

// Implement Code here


// 7. querySelector
// Selecting the fist instance of h2 tag and adding an innerText

// Implement Code here

// Using querySelectorAll method, search for elements that match a tag's class

// Implement Code here


// 8. element.append()
// Adding a new HTML element inside an existing element.

// Implement Code here


// 9. parentNode.appendChild(node)
// Adding a node using appendChild

// Implement Code here


// ----------------------------------------------
// Refer to ./form/form.html and ./form/script.js
// ----------------------------------------------

// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options

// 12. element.addEventListener()
// Adding an event listener to a button
