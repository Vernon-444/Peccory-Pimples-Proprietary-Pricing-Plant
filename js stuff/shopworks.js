// import "bootstrap";
// ^^^ im confused by this?? its just creating an error


console.log(shoppeItems);

$(document).ready(function() {
  console.log('ready');
})


function clearAll() {
  $('input:checked').prop('checked', false);
}
//find a way to automate the clear button to toggle off after click
