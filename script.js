
// LASTEST GS URL HERE
var LATEST_PROJ = "https://script.google.com/macros/s/AKfycbzkSWODlhkZiY6SDT457YCULEiMJo9cAqRg0PpjBa-V-KqpUBpWNdVNtSNp3KxkpZ5A/exec"; // <-------

var s = new URLSearchParams(window.location.search).get('s');
var u = s ? LATEST_PROJ + "?s=" + s : LATEST_PROJ ; 
setTimeout(() => { window.location.href = u ; }, 2000); 
