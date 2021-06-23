canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

background_image="mars.jpg";

rover_image="rover.png";
function add(){
    bg_img=new Image();
    bg_img.onload=uploadBackground;
    bg_img.src=background_image;
  
    rover_img=new Image();
    rover_img.onload=uploadRover;
    rover_img.src=rover_image;
}

function uploadBackground(){

    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);

}

function uploadRover(){

    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
    
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){

    keypressed=e.keyCode;

    console.log(keypressed);
    if(keypressed=='37'){
        Left();
        console.log("left");          
    }

    if(keypressed=='38'){
        Up();
        console.log("up");          
    } 
     if(keypressed=='39'){
        Right();
        console.log("right");          
    }
    
    if(keypressed=='40'){
        Down();
        console.log("down");          
    }

}

function Up(){

    if(rover_y>=0){

        rover_y=rover_y-10;
        uploadBackground();
        uploadRover();
    }
}

function Down(){

    if(rover_y<=500){

        rover_y=rover_y+10;
        uploadBackground();
        uploadRover();
    }
}

function Left(){

    if(rover_x>=0){

        rover_x=rover_x-10;
        uploadBackground();
        uploadRover();
    }
}

function Right(){

    if(rover_x<=700){

        rover_x=rover_x+10;
        uploadBackground();
        uploadRover();
    }
}