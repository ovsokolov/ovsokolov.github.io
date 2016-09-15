var elements = document.getElementsByTagName('script')

Array.prototype.forEach.call(elements, function(element) {
  if (element.type.indexOf('math/tex') != -1) {
     // Extract math markdown
     var textToRender = element.innerText || element.textContent;

     // Create span for KaTeX
     var katexElement = document.createElement('span');

     // Support inline and display math
     if (element.type.indexOf('mode=display') != -1){
       katexElement.className += "math-display";
       textToRender = '\\displaystyle {' + textToRender + '}';
     } else {
       katexElement.className += "math-inline";
     }

     katex.render(textToRender, katexElement);
     element.parentNode.insertBefore(katexElement, element);
  }
});

var imagePosition = 0;

var blocImages = [
         { urlImg: "url('../../img/bloc_jams_bg.png')"},
         { urlImg: "url('../../img/bloc_jams_bg_2.png')" },
         { urlImg: "url('../../img/bloc_jams_bg_3.png')" }
     ];


function previousImage(event){

    imagePosition--;
    if(imagePosition < 0){
        imagePosition = blocImages.length - 1;
    }
    var image = blocImages[imagePosition];
    var parent = document.getElementById("afterContainer");
    parent.style.backgroundImage = image.urlImg;
}

function nextImage(event){
    imagePosition++;
    if(imagePosition > blocImages.length-1){
        imagePosition = 0;
    }
    var image = blocImages[imagePosition];
    var parent = document.getElementById("afterContainer");
    parent.style.backgroundImage = image.urlImg;
}