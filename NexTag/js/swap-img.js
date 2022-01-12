var productImg = document.getElementById("productImg");
var smaillImg = document.getElementsByClassName("small-img");

smaillImg[0].onclick = function ()
{
    productImg.src = smaillImg[0].src;
}

smaillImg[1].onclick = function ()
{
    productImg.src = smaillImg[1].src;
}
smaillImg[2].onclick = function ()
{
    productImg.src = smaillImg[2].src;

}
smaillImg[3].onclick = function ()
{
    productImg.src = smaillImg[3].src;
}

