// console.log("blah")

var btn = document.getElementById('hamburger')
var mobileNav = document.getElementsByClassName('mobile-nav')[0]
function displayNav(){
    console.log("BTN clicked")

    mobileNav.style.display = "block";

    }
function closeNav() {
    console.log("btn closed")

    mobileNav.style.display = "none";
}


