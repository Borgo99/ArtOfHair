

(function(){

    var img = 2;

    function changeBackground() {

        var el = document.querySelector(".main-container");

        var $element = $('.main-container');
        $element.fadeOut(250, function(){
            el.style.backgroundImage = "linear-gradient(to bottom, transparent, transparent 60%, #000 75%), url(\"../img/sfondo" 
                + img + ".jpg\")"; 
        });
        $element.fadeIn(250);

        img++;
        if(img==6) img = 1;

    }

    setInterval(changeBackground, 4000);

})();





