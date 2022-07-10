//Current grid state
data = {
  sixteen: true,
  twenty: false,
  thirtyTwo: false,
  sixtyFour: false
}

//Screen and grid size
const screen = document.getElementById('screen');
const selector = document.getElementById('marker');
let size = '5px';
const sixteen = 256;
const twenty = 400;
const thirtyTwo = 1024;
const sixtyFour = 4096;


//Place default grid size on load
document.addEventListener('DOMContentLoaded', load());


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
let controls = document.getElementById('controls');
let currentColor = '#000' ;

controls.addEventListener('click', function(event){
  if(event.target.className === 'button'){
    if (event.target === one) { currentColor = '#000' };
    if (event.target === two) { currentColor = '#4B5457' };
    if (event.target === three) { currentColor = '#FF4749' };
    if (event.target === four) { currentColor = '#52A5FF' };
    if (event.target === five) { currentColor = '#F7C200' };
    if (event.target === six) { currentColor = '#1EB85E' };
    if (event.target === seven) { currentColor = 'white' };
    if (event.target === eight) { currentColor = 'rgba(0, 0, 0, 0.02)' };
  }
  return currentColor;
})

var mouseIsDown = false
screen.addEventListener('mousedown', function () { mouseIsDown = true })
screen.addEventListener('mouseup', function () { mouseIsDown = false })

screen.addEventListener('mouseover', function(event){
  if(mouseIsDown === true){
    if(event.target.className === 'block'){
      event.target.style.backgroundColor = currentColor;
    }
  }
})
screen.addEventListener('click', function (event) {
    if (event.target.className === 'block') {
      event.target.style.backgroundColor = currentColor;
    }
})
