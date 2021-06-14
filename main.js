let square = document.querySelector("div");

let isActive = false;

let squareX;
let squareY;
let offsetSquareX;
let offsetSquareY;

square.addEventListener("mousedown", (e) => {
  square.style.backgroundColor = "gray";
  isActive = true;

  offsetSquareX = e.offsetX;
  offsetSquareY = e.offsetY;
});

square.addEventListener("mousemove", (e) => {
  squareX = e.clientX - offsetSquareX;
  squareY = e.clientY - offsetSquareY;
  if (isActive) {
    square.style.top = `${squareY}px`;
    square.style.left = `${squareX}px`;
  }
});

square.addEventListener("mouseup", () => {
  square.style.backgroundColor = "black";
  isActive = false;
});
