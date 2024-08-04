var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var hr = document.querySelector(".hr");
var container = document.querySelector(".container")
var count = document.querySelector("#count");
var countImg = document.querySelector("#countImg");


menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    //Now hrr is 
    hr.classList.add('hrr');
    container.classList.toggle("large-container");


}

count = 0;

countImg.addEventListener("click",()=>{
    console.log("hi")
})
function handleclick(){
    console.log("hi")
}