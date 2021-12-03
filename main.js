var canvas = new fabric.Canvas("mycanvas")
player_x = 10
player_y = 10
block_image_width = 30;
block_image_height = 30;
var player_object = ""
var block_image_object = ""

function playerupdate() {
   fabric.Image.fromURL("player.png", function (img1) {
      player_object = img1
      player_object.scaleToWidth(100)
      player_object.scaleToHeight(90)
      player_object.set({
         top: player_y,
         left: player_x
      });
      canvas.add(player_object)
   });
}


playerupdate()

function new_image(get_image) {
   fabric.Image.fromURL(get_image, function (img2) {
      block_image_object = img2
      block_image_object.scaleToWidth(block_image_width)
      block_image_object.scaleToHeight(block_image_height)
      block_image_object.set({
         top: player_y,
         left: player_x
      });
      canvas.add(block_image_object)
   });

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
   keyPressed = e.keyCode
   console.log(keyPressed)
   if (e.shiftKey == true && keyPressed == '80') {
      block_image_width = block_image_width + 10
      block_image_height = block_image_height + 10


      document.getElementById("cwidth").innerHTML = block_image_width
      document.getElementById("cheight").innerHTML = block_image_height

   }

   if (e.shiftKey == true && keyPressed == '77') {
      block_image_width = block_image_width - 10
      block_image_height = block_image_height - 10
      document.getElementById("cwidth").innerHTML = block_image_width
      document.getElementById("cheight").innerHTML = block_image_height

   }
   if (keyPressed == '37') {
      left();

   }

   if (keyPressed == '38') {
      up();

   }
   if (keyPressed == '39') {
      right();

   }

   if (keyPressed == '40') {
      down();

   }
   if (keyPressed == '67') {
      new_image("cloud.jpg");

   }
   if (keyPressed == '68') {
      new_image("dark_green.png");

   }
   if (keyPressed == '71') {
      new_image("ground.png");

   }
   if (keyPressed == '76') {
      new_image("light_green.png");

   }
   if (keyPressed == '84') {
      new_image("trunk.jpg");

   }
   if (keyPressed == '85') {
      new_image("unique.jpg");

   }
   if (keyPressed == '87') {
      new_image("wall.jpg");

   }
   if (keyPressed == '89') {
      new_image("yellow_wall.png");

   }
   if (keyPressed == '82') {
      new_image("roof.jpg");



   }
}
   function left() {
      if (player_x >= 0) {
         player_x = player_x - block_image_width;
         console.log("block image height =" + block_image_height)
         console.log("When Left arrow key is Pressed, x =" + player_x)
         canvas.remove(player_object)
         playerupdate()
      }
   }

   function right() {
      if (player_x <= 800) {
         player_x = player_x + block_image_width;
         console.log("block image height =" + block_image_height)
         console.log("When Right arrow key is Pressed, x =" + player_x)
         canvas.remove(player_object)
         playerupdate()
      }
   }

   function up() {
      if (player_y >= 0) {
         player_y = player_y - block_image_height;
         console.log("block image height =" + block_image_height)
         console.log("When Up arrow key is Pressed, y =" + player_y)
         canvas.remove(player_object)
         playerupdate()
      }
   }

   function down() {
      if (player_y <= 500) {
         player_y = player_y + block_image_height;
         console.log("block image height =" + block_image_height)
         console.log("When Down arrow key is Pressed, y =" + player_y)
         canvas.remove(player_object)
         playerupdate()
      }
   }