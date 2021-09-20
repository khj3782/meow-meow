moveElement('meow1');

function moveElement(id){
  var x, y, mouseX, mouseY;
  var cat = document.getElementById(id);
  cat.style.top = "100px";
  cat.style.left = "70px";

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
