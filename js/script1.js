this.addEventListener("load", loadingColoring, true);


function loadingColoring(e) {
           if($.cookie("widthPercentage") != "" && $.cookie("widthPercentage") != null && $.cookie("widthPercentage") != undefined 
            && $.cookie("widthPercentage") != "null" && $.cookie("widthPercentage") != "undefined" 
            && $.cookie("heightPercentage") != "" && $.cookie("heightPercentage") != null && $.cookie("heightPercentage") != undefined 
            && $.cookie("heightPercentage") != "null" && $.cookie("heightPercentage") != "undefined"){

                  var oldwidthPercentage = $.cookie("widthPercentage");
                  var oldheightPercentage = $.cookie("heightPercentage");

                  alert("oldwidthPercentage: "+oldwidthPercentage+",oldheightPercentage: "+oldheightPercentage);

                  var coordinates = percentageToCoordinate(oldwidthPercentage,oldheightPercentage);

                  alert("xCoordinate: "+coordinates.xCoordinate+",yCoordinate:"+coordinates.yCoordinate+"element: "+coordinates.element);
                  
                   
            
           }
}
    


$(".parts").on('click',function(){
        var percentage = coordinateToPercentage(this);
        alert("widthPercentage: "+percentage.widthPercentage+",heightPercentage: "+percentage.heightPercentage);
        $.cookie("widthPercentage",percentage.widthPercentage);
        $.cookie("heightPercentage",percentage.heightPercentage);
 });
        
