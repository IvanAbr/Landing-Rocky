document.querySelector(".i")
  .addEventListener( "click", function() {
    var div = document.querySelector(".search");
    if (div.style.display !== 'block') {
        div.style.width = '40%';
        div.style.display = 'block';
        
    }
    else {
        div.style.display = 'none';
        div.style.width = '0px';
    }
  });