moveElement('meow1');
moveElement('meow2');

function moveElement(id){
  var x, y, mouseX, mouseY;
  var cat = document.getElementById(id);

  var top, left;
  top = Math.floor(Math.random() * (window.innerHeight - 230));
  left = Math.floor(Math.random() * (window.innerWidth - 230));
  cat.style.top = top + 'px';
  cat.style.left = left + 'px';

  cat.onpointerdown = dragMouseDown;

  function dragMouseDown(e){
    document.body.style.cursor = "grab";
    e = e || window.event;
    e.preventDefault();
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.onpointerup = closeDragElement;
    document.onpointermove = elementDrag;
  }

  function elementDrag(e){
    e = e || window.event;
    e.preventDefault();
    x = mouseX - e.clientX;
    y = mouseY - e.clientY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    cat.style.top = (cat.offsetTop - y) + "px";
    cat.style.left = (cat.offsetLeft - x) + "px";
  }

  function closeDragElement() {
    document.body.style.cursor = "auto";
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
