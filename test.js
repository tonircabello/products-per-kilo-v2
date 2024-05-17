
window.onload = function() {
  const divElement = document.querySelector('.bg-empty');
  const redBox = document.createElement('div');
  redBox.style.width = '100px';  
  redBox.style.height = '100px'; 
  redBox.style.backgroundColor = 'red';
  redBox.style.position = 'absolute'; 
  redBox.style.top = '20px';  
  redBox.style.left = '20px'; 
  divElement.appendChild(redBox); 
  counter = 0
  counterSum()
}
function counterSum(){
    setInterval(function() {
   counter ++
    redbox.style.left += `${redbox.style.left + counter}px`;
      }, 200)
    }


