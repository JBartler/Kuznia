// const first = document.getElementsByClassName(colorFirst);
// const secound = document.getElementsByClassName(colorSecound);
// const third = document.getElementsByClassName(colorThird);
let scale = document.getElementsByClassName("color");


scale.addEventListener('mouseenter', function(event){
    event.target.style.scale= " 3 ";
    console.log(mouseenter)
} )

// scale.addEventListener'mouseexit', function(event){
//     event.target.style.scale= " 1.3";
//     console.log(mouseenter)
// } )

console.log(scale);
