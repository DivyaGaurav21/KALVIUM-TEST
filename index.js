// console.log('js attached');


// Get all the square elements
const allDiv = document.getElementsByClassName('draggable');
const allDiv2 = document.getElementsByClassName('draggable');

// Attach the drag and drop functionality to each square
for (const square of allDiv) {
  divDragDrop(square);
}

// Function for each square div
function divDragDrop(square) {
  // Track the current position of the square
  let currentX = 0;
  let currentY = 0;

  // When the user starts dragging the square
  square.addEventListener('mousedown', dragStart);

  // When the user stops dragging the square
  document.addEventListener('mouseup', dragEnd);

  function dragStart(event) {
    // Set the current position of the square
    currentX = event.clientX - square.offsetLeft;
    currentY = event.clientY - square.offsetTop;

    // Start tracking mouse movement
    document.addEventListener('mousemove', drag);
  }

  function drag(event) {
    // Calculate the new position of the square
    const newX = event.clientX - currentX;
    const newY = event.clientY - currentY;

    // Update the position of the square
    square.style.left = newX + 'px';
    square.style.top = newY + 'px';

    // Detect if the square is being dragged over another square
    const currentSquare = document.elementFromPoint(event.clientX, event.clientY);
    if (currentSquare !== square && currentSquare.classList.contains('draggable')) {
      // alert('Square is being dragged over another square:')
      // Add a class to indicate the square is being dragged over another square
      currentSquare.classList.add('dragover');
    } else {
      // Remove the class if the square is not being dragged over another square
      const allSquares = document.getElementsByClassName('draggable');
      for (s of allSquares) {
        if (s !== square) {
          s.classList.remove('dragover');
        }
      }
    }
  }

  function dragEnd(event) {
    // Stop tracking mouse movement
    document.removeEventListener('mousemove', drag);
    // Remove the class from all squares when dragging is finished
    const allSquares = document.getElementsByClassName('draggable');
    for (s of allSquares) {
      s.classList.remove('dragover');
    }
  }
}
