

var para = document.querySelector('#submit');
var message = document.querySelector('#message');
/*new
var message1 = document.getElementById('message'); */

para.addEventListener('click', updateMessage);

function updateMessage() {

  /* var name = prompt('Enter a new name'); */
  
  message.value = 'Thanks for your submission!';

}
/* keeps clearning textarea */
/* Could make a new area
stop the page to get it to save
html refreshes the page*/
