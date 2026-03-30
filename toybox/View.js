/*
  these TOOL constants and methods
  provide a high level way of interacting with the user interface
  This allows the programmer a mental MODEL of the html VIEWing device
*/

// a very explict no anything NOTE nil spaces within the quotes
const BLANK = ''

// often html removes (nornalizes) all but 1 space
// or wraps lines
// use when you REALLY want a space
// Non-Breaking-SPace
// see https://www.w3schools.com/html/html_entities.asp
const SPACE = '&nbsp;'

// keep 4 spaces togther please
const TAB = '&nbsp;&nbsp;&nbsp;&nbsp;'

// BReak this line and go down to the start of the next line
// impacts ANYTHING, not just text
// see https://www.w3schools.com/tags/tag_br.asp
const NEWLINE = '<br>'

// clear off the screen
function clr () {
  /* picking a monospaced font, 
    also called a fixed-pitch, fixed-width, or non-proportional font, 
    is a font whose letters and characters each occupy the same amount of horizontal space 
  */
  document.body.style.fontFamily = 'Courier New'
  document.body.innerHTML = BLANK
}

// append the newText to the end of the OUTput on the current line
function out (newText) {
  document.body.innerHTML += newText
}

// add a new line starting with the newText
function print (newText) {
  document.body.innerHTML += NEWLINE + newText
}
