const screen = document.getElementById('screen');
let size = '5px';

document.addEventListener('DOMContentLoaded', load());

function load(){
  let row = document.createElement('row');
  row.className = 'row';

  for(let i = 0; i < 16; i++){
    let block = document.createElement('div');
    block.className = 'block';
    row.appendChild(block);
  }

  for (let i = 0; i < 16; i++) {
    screen.appendChild(row);
  }

}
