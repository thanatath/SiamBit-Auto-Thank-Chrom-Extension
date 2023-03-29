/**
 * Get the value of a URL parameter.
 *
 * @param {string} sParam - The name of the parameter to retrieve.
 * @return {string|boolean} The value of the parameter, or false if it is not present in the URL.
 */
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

chrome.storage.sync.get("options", function (items) {
  // Check if there was no runtime error when retrieving the options from the storage
  if (!chrome.runtime.error) {
    // Check if the options were retrieved successfully
    if (items.options) {
      // Log a message indicating that auto-thanks is activated on this page
      console.log("Auto thanks on this page activated!");
      // Call a function to send a 'say_thanks' request with the ID parameter from the URL
      let idNumber = getUrlParameter('id');
      requestSayThanks(idNumber)
       
      // Change the location of the page to 'javascript:void 0' to prevent the page from reloading
      location.href = "javascript:void 0";
    }
  }
});


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
