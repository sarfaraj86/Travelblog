function vis()
{
    document.getElementById("a").removeAttribute("type")
    document.getElementById("b").setAttribute("src","./Asset/Logos/close.png")
}
function hid()
{
    document.getElementById("b").setAttribute("src","./Asset/Logos/open eye.png")
    document.getElementById("a").setAttribute("type","password")
}
function auth()
{
    var password="karishma"
    var email="emamsarfarajabc@gmail.com"
    var userpass=document.getElementById("a").value
    var useremail=document.getElementById("email").value
    if(useremail==email && userpass==password)
    {
        document.getElementById("login").setAttribute("type","submit")
        document.getElementById("good").setAttribute("action","./HTML/Index.html")
        document.getElementById("result").innerHTML=" "
    }
    else if(useremail!=email && userpass==password)
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("result").innerHTML="Wrong Email "
        document.getElementById("body").style.backgroundImage="linear-gradient(90deg,red,purple)"
    }
    else if(useremail==email && userpass!=password)
    {
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Wrong Password"
        document.getElementById("body").style.backgroundImage="linear-gradient(90deg,pink,red)"
        document.getElementById("email").style.borderColor="royalblue"
    }
    else
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("body").style.backgroundImage="linear-gradient(90deg,red,red)"
        document.getElementById("result").innerHTML="Wrong Password and wrong email"
    }
}