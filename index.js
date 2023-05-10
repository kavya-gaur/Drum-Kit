var n = document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var inner = this.innerHTML;
        makeSound(inner);
        btnanimation(inner);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    btnanimation(event.key);
});





function makeSound(inner){
    switch(inner){
                    case "w":
                        var a1 = new Audio("sounds/tom1.mp3");
                        a1.play();
                        break;

                    case "a":
                        var a2 = new Audio("sounds/tom2.mp3");
                        a2.play();
                        break;

                    case "s":
                        var a3 = new Audio("sounds/tom3.mp3");
                        a3.play();
                        break;

                    case "d":
                        var a4 = new Audio("sounds/tom4.mp3");
                        a4.play();
                        break;

                    case "j":
                        var a5 = new Audio("sounds/snare.mp3");
                        a5.play();
                        break;

                    case "k":
                        var a6 = new Audio("sounds/crash.mp3");
                        a6.play();
                        break;

                    case "l":
                        var a7 = new Audio("sounds/kick.mp3");
                        a7.play();
                        break;

                    default:
                        console.log("No Sound");                    
        

        
        }    
}

function btnanimation(inner){
    var btn = document.querySelector("."+inner);
    btn.classList.add("pressed");

    setTimeout(function(){
        btn.classList.remove("pressed");
    },100);
}