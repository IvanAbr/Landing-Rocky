document.querySelector(".i")
  .addEventListener( "click", function() {
    var div = document.querySelector(".search");
    if (div.style.width !== '60%') {
        div.style.width = '60%';
        div.style.border = '1px solid black';    
    }
    else {
        div.style.width = '0px';
        div.style.border = 'none';
    }
  });
  document.querySelector(".btn-menu")
  .addEventListener( "click", function() {
    var div = document.querySelector(".bar");
    if (div.style.width !== '100%') {
        div.style.width = '100%';
    }
    else {
        div.style.width = '0px';
    }
  });