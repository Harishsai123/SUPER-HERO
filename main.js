var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

 var player_object = "";

 var block_image_object = "";

 function player_update() {
     fabric.Image.fromURL("player.webp", function(Img){
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y, left:player_x
    });
    canvas.add(player_object);
     });
 }

 function block_update(getImage) {
     fabric.Image.fromURL(getImage, function(Img){
         block_image_object = Img;

         block_image_object.scaleToWidth(block_width);
         block_image_object.scaleToHeight(block_height);
         block_image_object.set({
             top:player_y, left:player_x
         });
         canvas.add(block_image_object);
     });
 }

 window.addEventListener("keydown",my_keydown);

 function my_keydown(e) {
   keypressed = e.keyCode
   console.log(keypressed);

   if(e.shiftKey == true && keypressed == "80") {
    console.log("shift+p");
    block_width = block_width + 10;
    block_height = block_height + 10;
    document.getElementById("current-width").innerHTML = block_width;
    document.getElementById("current-height").innerHTML = block_height;
   }
  
   if(e.shiftKey == true && keypressed == "77"){
   console.log("shift+m");
   block_width = block_width - 10;
   block_height = block_height - 10;
   document.getElementById("current-width").innerHTML = block_width;
    document.getElementById("current-height").innerHTML = block_height;
   }

 if(keypressed == "70"){
    console.log("f");
    block_update("ironman_face.png");
 }

 if(keypressed == "66"){
    console.log("B");
    block_update("spiderman_body.png");
 }

 if(keypressed == "76"){
    console.log("l");
    block_update("hulk_legs.png");
 }

 if(keypressed == "82"){
    console.log("r");
    block_update("thor_right_hand.png");
 }

 if(keypressed == "72"){
    console.log("h");
    block_update("captain_america_left_hand.png");
 }



 if(keypressed == "40"){
     console.log("down");
     DOWN();
 }

 if(keypressed == "37"){
     console.log("left");
     LEFT();
 }



}

 