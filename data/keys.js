
// get key presses 
var keys = { 
up: false, 
down: false, 
left: false, 
right: false 
} 
function keyUpdate(keyEvent, down) { 
// down is a boolean, whether the key event is keydown (true) or keyup (false) 
switch (keyEvent.keyCode) { 
case 38: keys.up = down; 
break; 
case 40: 
keys.down = down; 
break; 
case 37: 
keys.left = down; 
break; 
case 39: 
keys.right = down; 
break; 
} 
} 
document.addEventListener("keydown", function(event) { 
keyUpdate(event, true); 
}); 
document.addEventListener("keyup", function(event) { 
keyUpdate(event, false); 
});
