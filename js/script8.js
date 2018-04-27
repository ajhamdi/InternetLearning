var worker ;
// it works only on firefox and not chrome .... 
// chrome soesnt allow local files to run web worker

var socket = new WebSocket('ws://echo.websocket.org');


function startWorker() {
    worker = new Worker("js/worker.js");
    worker.onmessage = function(event) {
        document.getElementById("output").innerHTML += '<li>' + event.data + '</li>';
    };
}
function stopWorker() {
    worker.terminate();
}


socket.onopen = function () {
    console.log('Our socket has been opened!');
}

socket.onmessage = function (event) {
    window.alert(event.data);
}

function testMessage () {
    socket.send("Hello World!");
}
