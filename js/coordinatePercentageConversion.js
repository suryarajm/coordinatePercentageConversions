 //return co-ordinate percentage
function coordinateToPercentage(element){
    var position = getPosition(element);
    var screenWidth = document.body.clientWidth; 
    var screenHeight = document.body.clientHeight;
    var widthPercentage = (position.x/screenWidth)*100;
    var heightPercentage = (position.y/screenHeight)*100; 
            
    return { widthPercentage: widthPercentage, heightPercentage: heightPercentage };        
}



// return coordinates and element by recieving percentage of coordinates
function percentageToCoordinate(widthPercentage,heightPercentage){
    var screenWidth = document.body.clientWidth; 
    var screenHeight = document.body.clientHeight;
    
    var newXvalue = (widthPercentage * screenWidth)/100; 
    var newYvalue = (heightPercentage * screenHeight)/100; 
       
    var element = document.elementFromPoint(newXvalue, newYvalue);

    return { xCoordinate: newXvalue, yCoordinate: newYvalue, element: element};      
}


  //return coordinates of an element
function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
            
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;               
    }
    return { x: xPosition, y: yPosition };                      
}
