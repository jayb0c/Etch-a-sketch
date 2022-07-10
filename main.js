data = {
  sixteen: true,
  thirtyTwo: false,
  sixtyFour: false
}

//block.style.setProperty('width', 'calc(100% / 16)');
//block.style.setProperty('height', 'calc(100% / 16)');

const screen = document.getElementById('screen');
let size = '5px';
const sixteen = 256;
const thirtyTwo = 1024;
const sixtyFour = 4096;

document.addEventListener('DOMContentLoaded', load());

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
      block.style.setProperty('width', 'calc(100% / 16)');
      block.style.setProperty('height', 'calc(100% / 64)');
      screen.appendChild(block);
    }
  }
}
