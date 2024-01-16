/* Put code for the task below */
/* function that when the button is clicked, opens a new window */
function clearWindow() {
  /* create a new blank window  - create a var and assign it to open a window */
  var windowopen = window.open("");
  
  /* make the new page have text - use the variable to write in the new document the required text */
  windowopen.document.writeln("new page has been created")
}