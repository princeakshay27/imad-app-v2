console.log('Loaded!');
//to change the inner text 
var element= document.getElementById('main-text');
element.innerHTML='new value';
//to move the image
var img = document.getElementById('pic');
img.onclick=function()
{
    img.style.marginLeft='100px';
};