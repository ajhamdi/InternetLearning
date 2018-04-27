$(document).ready(function () {
    manipulateDOM();
    makeRequests();
});
// using Jquery for manipuating the DOM 
function manipulateDOM() {
    var h1header = $('h1');
    var h3header = $('h3');
    h1header.text("Hello World");
    h3header.css('background-color' ,'#37887D') ;
    h3header.first().css('text-decoration', 'line-through');
    var lastH3Header = $('h3:last');
    lastH3Header.css('background-color', '#53226A');    
}


// Thre Ways of making requests 


// function makeRequests() {
//     $.ajax({
//         url: 'http://httpbin.org/get',
//         method: 'GET',
//         dataType: 'json'
//     })
//         .done(function(response) {
//             $('body > p').text(
//                 JSON.stringify(response)
//             );
//         })
//         .fail(function() {
//             alert('An error has occured')
//         });
// }

// function makeRequests() {  
//     $.get({
//         url: 'http://httpbin.org/user-agent',
//         dataType: 'json'
//     })
//         .done(function(response) {
//             alert(JSON.stringify(response));
//             $('body > p').text(
//                 response['user-agent']
//             );
//         });
// }

function makeRequests() {
    $.getJSON('http://httpbin.org/ip')
        .done(function(response) {
            alert(JSON.stringify(response));
            $('body > p').text(
                response.origin
            );
        });
}
