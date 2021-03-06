//Current grid state
data = {
  sixteen: true,
  twenty: false,
  thirtyTwo: false,
  sixtyFour: false,
  rainbow: false
}

//Screen and grid size
const screen = document.getElementById('screen');
const selector = document.getElementById('marker');
const reset = document.getElementById('reset');
let size = '5px';
const sixteen = 256;
const twenty = 400;
const thirtyTwo = 1024;
const sixtyFour = 4096;


//Place default grid size on load
document.addEventListener('DOMContentLoaded', load());

reset.addEventListener('click', function(){
  while (screen.firstChild) {
    screen.removeChild(screen.firstChild);
  }
  data.sixteen = true;
  data.twenty = false;
  data.thirtyTwo = false;
  data.sixtyFour = false;
  load();
})

//For the grid control bar there are 4 zones. As the user drags the selector past certain points,
// the grid amount increases or decreases.

let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;
// when the user clicks down on the element
selector.addEventListener('mousedown', function (e) {
  e.preventDefault();

  // get the starting position of the cursor
  startPosX = e.clientX;

  document.addEventListener('mousemove', mouseMove);

  document.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', mouseMove);
  });

});


function mouseMove(e) {
  // calculate the new position
  newPosX = startPosX - e.clientX;

  // with each move we also want to update the start X and Y
  startPosX = e.clientX;

  // set the element's new position:
  if (selector.offsetLeft - newPosX > 15 && selector.offsetLeft - newPosX < 140 ){
    if (selector.offsetLeft - newPosX <= 46.25){
      data.sixteen = true;
      data.twenty = false;
      data.thirtyTwo = false;
      data.sixtyFour = false;
      load();
    }
    if (selector.offsetLeft - newPosX >= 46.26 && selector.offsetLeft - newPosX <= 77.5) {
      data.sixteen = false;
      data.twenty = true;
      data.thirtyTwo = false;
      data.sixtyFour = false;
      load();
    }
    if (selector.offsetLeft - newPosX >= 77.6 && selector.offsetLeft - newPosX <= 108.75) {
      data.sixteen = false;
      data.twenty = false;
      data.thirtyTwo = true;
      data.sixtyFour = false;
      load();
    }
    if (selector.offsetLeft - newPosX >= 108.76 && selector.offsetLeft - newPosX <= 140) {
      data.sixteen = false;
      data.twenty = false;
      data.thirtyTwo = false;
      data.sixtyFour = true;
      load();
    }
    selector.style.left = (selector.offsetLeft - newPosX) + "px";
  }
}

//load the grids onto the page. Used on load and when grid selector is moved.
function load(){
  while (screen.firstChild) {
    screen.removeChild(screen.firstChild);
  }
  if(data.sixteen === true){
    for (let i = 0; i < sixteen; i++) {
      let block = document.createElement('div');
      block.className = 'block';
      block.style.setProperty('width', 'calc(100% / 16)');
      block.style.setProperty('height', 'calc(100% / 16)');
      screen.appendChild(block);
    }
  }
  if (data.twenty === true) {
    for (let i = 0; i < twenty; i++) {
      let block = document.createElement('div');
      block.className = 'block';
      block.style.setProperty('width', 'calc(100% / 20)');
      block.style.setProperty('height', 'calc(100% / 20)');
      screen.appendChild(block);
    }
  }
  if(data.thirtyTwo === true){
    for (let i = 0; i < thirtyTwo; i++) {
      let block = document.createElement('div');
      block.className = 'block';
      block.style.setProperty('width', 'calc(100% / 32)');
      block.style.setProperty('height', 'calc(100% / 32)');
      screen.appendChild(block);
    }
  }
  if(data.sixtyFour === true){
    for (let i = 0; i < sixtyFour; i++) {
      let block = document.createElement('div');
      block.className = 'block';
      block.style.setProperty('width', 'calc(100% / 64)');
      block.style.setProperty('height', 'calc(100% / 64)');
      screen.appendChild(block);
    }
  }
}

//coloring the page
let one = document.getElementById('button1');
let two = document.getElementById('button2');
let three = document.getElementById('button3');
let four = document.getElementById('button4');
let five = document.getElementById('button5');
let six = document.getElementById('button6');
let seven = document.getElementById('button7');
let eight = document.getElementById('button8');

//Selection indicators
let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let dot3 = document.getElementById('dot3');
let dot4 = document.getElementById('dot4');
let dot5 = document.getElementById('dot5');
let dot6 = document.getElementById('dot6');
let dot7 = document.getElementById('dot7');

let controls = document.getElementById('controls');
const rainbow = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1"
];
let i = 0;
let currentColor = '#000' ;

controls.addEventListener('click', function(event){
  if(event.target.className === 'button'){
    if (event.target === one) {
      dot1.style.display = "flex";
      dot2.style.display = "none";
      dot3.style.display = "none";
      dot4.style.display = "none";
      dot5.style.display = "none";
      dot6.style.display = "none";
      dot7.style.display = "none";
      eight.style.border = "none";
      currentColor = '#000';
      data.rainbow = false;
     };
    if (event.target === two) {
      dot1.style.display = "none";
      dot2.style.display = "flex";
      dot3.style.display = "none";
      dot4.style.display = "none";
      dot5.style.display = "none";
      dot6.style.display = "none";
      dot7.style.display = "none";
      eight.style.border = "none";
      data.rainbow = true;
     };
    if (event.target === three) {
      dot1.style.display = "none";
      dot2.style.display = "none";
      dot3.style.display = "flex";
      dot4.style.display = "none";
      dot5.style.display = "none";
      dot6.style.display = "none";
      dot7.style.display = "none";
      eight.style.border = "none";
      currentColor = '#FF4749';
      data.rainbow = false;
     };
    if (event.target === four) {
      dot1.style.display = "none";
      dot2.style.display = "none";
      dot3.style.display = "none";
      dot4.style.display = "flex";
      dot5.style.display = "none";
      dot6.style.display = "none";
      dot7.style.display = "none";
      eight.style.border = "none";
      currentColor = '#52A5FF';
      data.rainbow = false;
     };
    if (event.target === five) {
      dot1.style.display = "none";
      dot2.style.display = "none";
      dot3.style.display = "none";
      dot4.style.display = "none";
      dot5.style.display = "flex";
      dot6.style.display = "none";
      dot7.style.display = "none";
      eight.style.border = "none";
      currentColor = '#F7C200';
      data.rainbow = false;
       };
    if (event.target === six) {
      dot1.style.display = "none";
      dot2.style.display = "none";
      dot3.style.display = "none";
      dot4.style.display = "none";
      dot5.style.display = "none";
      dot6.style.display = "flex";
      dot7.style.display = "none";
      eight.style.border = "none";
      currentColor = '#1EB85E';
      data.rainbow = false;
      };
    if (event.target === seven) {
      dot1.style.display = "none";
      dot2.style.display = "none";
      dot3.style.display = "none";
      dot4.style.display = "none";
      dot5.style.display = "none";
      dot6.style.display = "none";
      dot7.style.display = "flex";
      eight.style.border = "none";
      currentColor = 'white';
      data.rainbow = false;
      };
    if (event.target === eight) {
      dot1.style.display = "none";
      dot2.style.display = "none";
      dot3.style.display = "none";
      dot4.style.display = "none";
      dot5.style.display = "none";
      dot6.style.display = "none";
      dot7.style.display = "none";
      eight.style.border = "3px solid orange";
      currentColor = 'rgba(0, 0, 0, 0.02)';
      data.rainbow = false;
      };
  }
  return currentColor;
})

var mouseIsDown = false
screen.addEventListener('mousedown', function () { mouseIsDown = true })
screen.addEventListener('mouseup', function () { mouseIsDown = false })

screen.addEventListener('mouseover', function(event){
  if(mouseIsDown === true){
    if(event.target.className === 'block'){
      if(data.rainbow === true){
        if(!rainbow[i]){
          i = 0;
          event.target.style.backgroundColor = rainbow[i];
          return data;
        }
        event.target.style.backgroundColor = rainbow[i];
        i++;
        return data;
      }
      event.target.style.backgroundColor = currentColor;
    }
  }
})
screen.addEventListener('click', function (event) {
  if (event.target.className === 'block') {
    if (data.rainbow === true) {
      if (!rainbow[i]) {
        i = 0;
        event.target.style.backgroundColor = rainbow[i];
        return data;
      }
      event.target.style.backgroundColor = rainbow[i];
      i++;
      return data;
    }
    event.target.style.backgroundColor = currentColor;
  }
})
