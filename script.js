
// LASTEST GS URL HERE
var LATEST_PROJ = "https://script.google.com/macros/s/AKfycby7Fo4KzIW5HcMEoTBoJkA-k1US-ExX30q2NycipVgo5EaxC-leuN4w2gvQCvnJRJ8z/exec"; // <-------

var s = new URLSearchParams(window.location.search).get('s');
var u = s ? LATEST_PROJ + "?s=" + s : LATEST_PROJ ; 
setTimeout(() => { window.location.href = u ; }, 2000); 
