/* Put code for the task below */
/* Create function to display the button */
function imagehover() {
  // make constant linked to the button id
  const button1 = document.getElementById("buttonTask1")
  // make that button display as block instead of not being displayed
  button1.style.display = "block"
}

/* look for button click and make the image disapear */
function buttonclick() {
  // make another constant linked to the image
  const image1 = document.getElementById("imageTask1")
  // make the image invisible
  image1.style.display = "none"
}