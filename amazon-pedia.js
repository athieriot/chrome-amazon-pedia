function nextElementSibling( el ) {
   if(el.nextElementSibling) return el.nextElementSibling;
   do { el = el.nextSibling } while ( el && el.nodeType !== 1 );
   return el;
}

function lang(url) {
   var extension = (url = url.substr(1 + url.lastIndexOf("/")).split('?')[0]).substr(url.lastIndexOf(".") + 1)
   return extension === 'com' ? 'en' : extension;
}

//TODO: Handle querySelectorAll + forEach
var headElement = document.querySelector(".parseasinTitle");

if(headElement) {
   var author = nextElementSibling(headElement);
   if(author.nodeName !== 'A') author = author.firstElementChild;

   var icon = document.createElement("img");
   icon.src = chrome.extension.getURL("wikipedia.png");
   icon.className = "amazon-pedia"

   var link = document.createElement("a");
   link.appendChild(icon);
   link.href = "http://" + lang(window.location.host) + ".wikipedia.org/w/index.php?search=" + author.textContent;

   author.parentNode.insertBefore(link, nextElementSibling(author));
}
