var slideinterval = 3500 ;
function getFigures(){
return document.getElementById("carousel").getElementsByTagName("figure")
}
function moveForward() {
    var pointer = 0;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideinterval);
}

function startPlayback(){
    // var figures = getFigures();
    // figures[0].className == 'visible'
   setTimeout(moveForward,slideinterval);
}
startPlayback();