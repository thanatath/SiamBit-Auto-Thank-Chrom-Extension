// ==UserScript==
// @name         Siambit Auto Thanks
// @namespace    http://tampermonkey.net/
// @version      2023-12-30
// @description  try to take over the world!
// @author       You
// @match        https://bearbit.co/*
// ==/UserScript==

(function() {
    'use strict';

    let idNumber = getUrlParameter('id');
      requestSayThanks(idNumber)
      // Change the location of the page to 'javascript:void 0' to prevent the page from reloading
      location.href = "javascript:void 0";
})();

function getUrlParameter(sParam) {
  // Get the query string from the URL.
  var queryString = window.location.search.substring(1);
  // Split the query string into an array of key-value pairs.
  var queryParams = queryString.split("&");

  // Loop through the key-value pairs to find the requested parameter.
  for (var i = 0; i < queryParams.length; i++) {
    var keyValue = queryParams[i].split("=");
    var paramName = keyValue[0];
    var paramValue =
      keyValue[1] === undefined ? true : decodeURIComponent(keyValue[1]);

    if (paramName === sParam) {
      // Return the value of the requested parameter.
      return paramValue;
    }
  }

  // The requested parameter was not found in the URL.
  return false;
}

function requestSayThanks(idNumber){
const Http = new XMLHttpRequest();
const url='/ajax.php? action=say_thanks&id=' + idNumber;
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
   if(Http.responseText.split("ขอขอบพระคุณที่ กดขอบคุณ").length > 1){

    console.log('Auto thanks Comlete !');

   }
}
}