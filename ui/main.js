//counter code
var button=document.getElementById('counter');
button.onclick=function(){
    counter=counter+1;
    var span=document.getElementById('counter');
    span.innerHTML=counter.tostring();
}