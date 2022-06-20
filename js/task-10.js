function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttons = {
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
};
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
let amount = 0;


input.addEventListener('input', (amount) => {
  amount = Number(input.value)
  console.log(amount)
});

function createBoxes(amount) {  
  // const newBoxes = [];
  let size = 30;

  for (i = 0; i <= amount; i += 1) {
    const newBox = document.createElement('<div>');
    size += 10;
    // newBoxes.push(newBox);
    boxes.append(newBox);
    // console.log(newBoxes)
  }
};
buttons.create.addEventListener('click', createBoxes);
// buttons.destroy.addEventListener('click', destroyBoxes);


// function handelInput() {
//    let amount = Number(input.value);
// }

// function createBoxes(amount) {  
//   const newBoxes = [];
//   let size = 30;

//   for (i = Number(input.min); i <= amount; i += Number(input.step)) {
//     const newBox = `<div style = "width: ${size}px; heigth: ${size}px; background-color: ${getRandomHexColor()}"><div/>`
//     size += 10;
//     newBoxes.push(newBox);
//   }
// };

// function destroyBoxes() {

// };
