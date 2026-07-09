
// LASTEST GS URL HERE
var LATEST_PROJ = "https://script.google.com/macros/s/AKfycbwA9nlhudxYQfLbuWEKvre8qhZMhpDMdXGHoXsITODRJuhLgtqII_Y_qXLpDxBM8Sv0/exec"; // <-------

var s = new URLSearchParams(window.location.search).get('s');
var u = s ? LATEST_PROJ + "?s=" + s : LATEST_PROJ ; 
setTimeout(() => { window.location.href = u ; }, 2000); 
