var $text_body = document.getElementById("text_body");
$text_body.innerHTML += 'test' + "<br>";
$text_body.innerHTML += 'test' + 2 +4 + "<br>" ;
$text_body.innerHTML += 'test' + (2+4)+ "<br>" ;
$text_body.innerHTML += 2+4+  'test'+ "<br>" ; 

startLogic() ;
function startLogic(){
    var newhtml = '<em> New Header </em>' ;
    document.getElementById('headerItem').innerHTML = newhtml ;
}
function clickHandler(){
    alert("you clicked me !");
}
d = "modefied : " ;
ff= ["Sat", "Sun", "Tues"] ;
function adds(item,index){d += item ;}
function newclickHandler(){
 ff.forEach(adds); // perform function adds on each element of the list ff
var mycontent = document.getElementById("parent"); 
 mycontent.innerHTML += (d + "<br />"); // print the results in new line
}
