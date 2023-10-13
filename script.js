//offer-bar

var offerbar = document.querySelector(".offer-bar")
var offerclose = document.getElementById("offer-close")

offerclose.addEventListener("click" ,function()
{
offerbar.style.display = "none"
})

//side-navbar

var menubar = document.querySelector(".navbar-menu-toggle")

var sidenavdiv = document.querySelector(".side-navbar")

var closemark = document.getElementById ("side-navbar-close")

menubar.addEventListener("click" , function()
{
    sidenavdiv.style.marginLeft = "0px"
}
)

closemark.addEventListener("click", function()
{
sidenavdiv.style.marginLeft = "-40%"
})

//image-slider

var leftbutton = document.querySelector(".slider-left-button")
var rightbutton = document.querySelector(".slider-right-button")
var image = document.querySelector(".slider-image")
var margin = 0


rightbutton.addEventListener("click" , function()
{
    margin=margin+100
    

if (margin>200)
{
    margin=0
}
image.style.marginLeft="-"+margin+"vw"

})

leftbutton.addEventListener("click" , function()
{
    margin=margin-100

    if (margin<0)
    {
        margin=200
    }
    image.style.marginLeft= "-" + margin +"vw"
})


//like button




var likebuttons = document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=> {
    btn.addEventListener("click" , function(e)
    {
        if(e.target.src.indexOf("blackheart")>0)
{
e.target.src="./img/redheart.png"
}
else
{
    e.target.src="./img/blackheart.png"
}

    })
})
