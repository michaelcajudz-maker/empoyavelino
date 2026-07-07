
// LASTEST GS URL HERE
var LATEST_PROJ = "https://script.google.com/macros/s/AKfycbw5fCRzn8_BXC0Yy-GSVeNm4yt1v4E4iS9es9RiBhQTKD-KjGa41oCtKtF4JOWRMNvm/exec"; // <-------

var s = new URLSearchParams(window.location.search).get('s');
var u = s ? LATEST_PROJ + "?s=" + s : LATEST_PROJ ; 
setTimeout(() => { window.location.href = u ; }, 2000); 
