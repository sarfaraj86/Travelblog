function colo()
{
    var col = ["i.jpg","j.jpg","k.jpg","l.jpg","m.jpg","n.jpg","o.jpg","p.jpg",]
    var len=col.length;
    var ran=Math.random()*len;
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../Asset/Images/"+col[rannum]+")"
    var updatethetime=setTimeout(function(){colo()},5000)
}
function imgK(pic,heading,discription)
{
    document.getElementById("bigscreen").removeAttribute("style");
    document.getElementById("imgheading").innerHTML=heading;
    document.getElementById("imgparagraph").innerHTML=discription;
    bigscreen.style.display="flex"
    fullImg.src=pic;
}
function imgV()
{
    document.getElementById("bigscreen").setAttribute("style","display:none")
}