/* Put code for the task below */
/* function that when the button is clicked, opens a new window */
function clearWindow() {
  /* create a new blank window  - create a var and assign it to open a window - looked up window.open but didn't copy any code - https://www.w3schools.com/jsref/met_win_open.asp */
  var windowopen = window.open("");
  
  /* make the new page have text - use the variable to write in the new document the required text - also looked up document.write but didn't copy any code - https://www.w3schools.com/jsref/met_doc_write.asp */
  windowopen.document.write("new page has been created")
}