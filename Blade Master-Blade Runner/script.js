var slideSource = document.getElementById('slideSource');
var slideSource2 = document.getElementById('slideSource2');
var slideSource3 = document.getElementById('slideSource3');
var slideSource4 = document.getElementById('slideSource4');
var slideSource5 = document.getElementById('slideSource5');


var resetBtn = document.getElementById('resetBtn');

// $(document).ready(function () {
//     $('#handle').click(function () {
//     slideSource.classList.toggle('fade');
// });

// $('resetBtn').click(function () {
//     slideSource.classList.toggle('fadein');
// });

// });

document.getElementById('handle').onclick = function () {
    slideSource.classList.add('fade');
    blade3.classList.add('callthis3');
    blade2.classList.add('callthis');
    blade4.classList.add('callthis4'); 
    // blade5.classList.add('callthis5');
}; 

// GOOD HOVER FUNCTION************************************
// setInterval(function () {
//     var $sample = $("#blade2");
//     if ($sample.is(":hover")) {
//         blade2.classList.add('callthis');
//     }
// });

// THIS ONE
// document.getElementById('clicked').onclick = function () {
//     slideSource.classList.add('fadeIn');
// };












// document.getElementById('blade2').onclick = function () {
//     blade2.classList.add('callthis');
// }; 



// $("blade2").hover(function () {
//     slideSource2.classList.add('callthis');
// });












// $(document).ready(function () {
//     console.log("ready!");
// });


// element = document.getElementById("slideSource");

// element.addEventListener("click", function (e) {
//     e.preventDefault;

//     // -> removing the class
//     element.classList.remove("run-animation");

//     // -> triggering reflow /* The actual magic */
//     // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
//     // Oops! This won't work in strict mode. Thanks Felis Phasma!
//     // element.offsetWidth = element.offsetWidth;
//     // Do this instead:
//     void element.offsetWidth;

//     // -> and re-adding the class
//     element.classList.add("run-animation");
// }, false);

// $(document).mouseleave(function () {
//     $("#slideSource").append("<div>Handler for .mouseleave() called.</div>");
// });


// element =document.getElementById('').mouseleave(function(){
//     $(slideSource.classList.toggle('fadein'))
// });



// var tag = document.getElementsByTagName("A");
// var div = document.getElementsByTagName("myDIV");

// $(document).click(function (event) {
//     $target = $(event.target);
//     if (!$target.closest('#clicked').length &&
//         tag.is(":visible")) {
//         div.hide();
//     }

//     else( )
// });

