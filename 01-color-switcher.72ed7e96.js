!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){o=setInterval(n,1e3),t.disabled=!0,e.disabled=!1,console.log(o)})),e.addEventListener("click",(function(){clearInterval(o),e.disabled=!0,t.disabled=!1,console.log(o)}));var o=null;function n(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.72ed7e96.js.map
