console.log('Loaded!');
//to change the inner text 
var element= document.getElementById('main-text');
element.innerHTML='new value';
//to move the image
var img = document.getElementById('pic');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onClick=function()
{
    var interval=setInterval(moveRight,50);
};