(function() {
  function setScreenResolution() {
    const width = screen.width;
    const height = screen.height;

    document.getElementById("screen-width").innerHTML = width;
    document.getElementById("screen-height").innerHTML = height;
  }

  function setUserAgent() {
    document.getElementById("user-agent").innerHTML = navigator.userAgent;
  }  
  // set information
  setScreenResolution();
  setUserAgent();
})();
  
  

  
  