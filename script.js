//Desactivar completa
$(document).ready(function(){

    $("body").bind('cut copy paste', function(e){
        e.preventDefault();
    })

   

    document.oncontextmenu = function(){
        return false;
    }

    
});