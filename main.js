data = {
  sixteen: false,
  twenty: true,
  thirtyTwo: false,
  sixtyFour: false
}

const screen = document.getElementById('screen');
const selector = document.getElementById('marker');
let size = '5px';
const sixteen = 256;
const twenty = 400;
const thirtyTwo = 1024;
const sixtyFour = 4096;

document.addEventListener('DOMContentLoaded', load());


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
  console.log(selector.offsetLeft - newPosX);
  if (selector.offsetLeft - newPosX > 15 && selector.offsetLeft - newPosX < 140 ){
  selector.style.left = (selector.offsetLeft - newPosX) + "px";
  }
}

function load(){
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
