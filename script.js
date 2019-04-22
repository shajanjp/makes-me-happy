let colorList = ["#444f5a", "#3ec1d3", "#ff9a00", "#ff165d", "#3490de", "#6639a6", "#ea5455", "#2d4059", "#355c7d", "#f85f73", "#ff5722", "#00adb5", "#303841", "#07689f", "#00e0ff", "#52616b", "#ff7e67", "#a56cc1", "#b61aae", "#f25d9c", "#0dceda", "#9e579d", "#1fab89", "#d72323", "#3a4750", "#11d3bc", "#27296d", "#fa4659", "#ff6f3c", "#e84a5f", "#253b6e"]
let items = document.getElementById('items');

const screenHeight = window.screen.availHeight;
const screenWidth = window.screen.availWidth;

let angleDirection = '+';
function randomStyle(){
  angleDirection = (angleDirection == '+') ? '-' : '+';
  return { 
    top: (Math.floor(Math.random() * screenHeight) - 50),
    left: (Math.floor(Math.random() * screenWidth) - 50),
    angle: angleDirection + (Math.floor(Math.random() * 60) + 0),
    color: colorList[(Math.floor(Math.random() * (colorList.length-1)) + 0)]
  }
}

let colorIndex = 0;

for (let text of textItems) {
  let rStyle = randomStyle(); 
  let item = document.createElement("div");
  item.classList.add('item');
  item.style.cssText = `
  color: ${rStyle.color}; 
  top: ${rStyle.top}px;
  left: ${rStyle.left}px;
  transform: rotate(${rStyle.angle}deg);
  `;
  item.innerHTML = text;
  item.addEventListener('mouseover', (e) => {
    e.target.classList.add('pop');
  })
  item.addEventListener('mouseout', (e) => {
    e.target.classList.remove('pop');
  })
  item.addEventListener('click', (e) => {
    e.target.parentNode.removeChild(e.target);
  })
  items.appendChild(item);
  console.log('items', items);
}
