+(function (window, document) {

  'use strict';

  function createDemoText() {
    if (!document.getElementById("demo-area-01-show"))
    {
        var div = document.createElement('div');
        div.id = "demo-area-01-show";
        div.style.zIndex = 999;   
        div.style.display = 'block';
        div.innerHTML = "123";
        document.body.appendChild(div);
    }
  }
 
  window.createDemoText = createDemoText;

}(window, window.document, window.jQuery));
