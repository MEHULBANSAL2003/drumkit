
// function handleclick(){
//     alert("i got clicked");
// }
// var no_of_button=document.querySelectorAll(".drum").length;
// for(var i=0;i<no_of_button;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
// }


// ANOTHER WAY:

var no_of_button=document.querySelectorAll(".drum").length;
console.log(document.querySelector("button"));
console.log(document.querySelector("button").classList);
for(var i=0;i<no_of_button;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

     var buttoninnerhtml=this.innerHTML;

   makesound(buttoninnerhtml);

   buttonanimation(buttoninnerhtml);
   
    });
}

document.addEventListener("keypress",function(event){
 makesound(event.key);
 buttonanimation(event.key);
});

function makesound(key){

    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
                
                
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
                    
                    
        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;        
        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
                
        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
     
        default:
            break;
     }

}

function buttonanimation(currentkey){
var activebutton= document.querySelector("."+ currentkey);
//console.log(activebutton);

activebutton.classList.add("pressed");

setTimeout(function(){
    activebutton.classList.remove("pressed");
},100);
}
