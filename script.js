var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var hr = document.querySelector(".hr");
var container = document.querySelector(".container")



menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    //Now hrr is 
    hr.classList.add('hrr');
    container.classList.toggle("large-container");


}