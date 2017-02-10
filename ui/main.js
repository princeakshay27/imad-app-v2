console.log('Loaded!');
//to change the inner text 
var element= document.getElementById('main-text');
element.innerHTML='new value';
//to move the image
var img = document.getElementById('pic');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';//concanating px with 10
    
}
img.onclick=function()
{
    var interval=setInterval(moveRight,100);
    img.style.marginLeft='100px';
};