// Wait until the body is loaded before executing this function
document.body.onload = function() {
    // Retrieve the 'options' value from the Chrome storage area
    chrome.storage.sync.get("options", function(items) {
      // Check if there was no runtime error when retrieving the options from the storage
      if (!chrome.runtime.error) {
        // Set the value of the 'enabledCheckboxSiambitExtension' checkbox to the value of 'options'
        document.getElementById("enabledCheckboxSiambitExtension").checked = items.options;
      }
    });
  }
  
  // This function saves the options to the Chrome storage area
  function saveOptions() {
    // Get the value of the 'enabledCheckboxSiambitExtension' checkbox
    var d = document.getElementById("enabledCheckboxSiambitExtension").checked;
    // Save the value of 'd' as 'options' to the Chrome storage area
    chrome.storage.sync.set({ "options" : d }, function() {
      // Check if there was a runtime error when saving the options to the storage
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      }
    });
    // Close the current window
    window.close();
  }
  
  // Get the 'saveOptionsATHBtn' button element and add a click event listener to it
  const btn = document.getElementById('saveOptionsATHBtn');
  btn.addEventListener('click', () => {
    // Call the 'saveOptions()' function when the button is clicked
    saveOptions();
  });
  