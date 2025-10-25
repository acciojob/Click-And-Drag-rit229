const items = document.querySelectorAll('.item');
let selectedItem = null;
let offsetX = 0;
let offsetY = 0;

items.forEach(item => {
    item.addEventListener('mousedown', (e) => {
        selectedItem = item;
        offsetX = e.clientX - item.getBoundingClientRect().left;
        offsetY = e.clientY - item.getBoundingClientRect().top;

        // Add mousemove and mouseup event listeners to the document
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});

function onMouseMove(e) {
    if (selectedItem) {
        const container = document.querySelector('.items');
        const containerRect = container.getBoundingClientRect();

        // Calculate new position
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        // Boundary checks
        if (x < containerRect.left) x = containerRect.left; // left boundary
        if (x + selectedItem.offsetWidth > containerRect.right) x = containerRect.right - selectedItem.offsetWidth; // right boundary
        if (y < containerRect.top) y = containerRect.top; // top boundary
        if (y + selectedItem.offsetHeight > containerRect.bottom) y = containerRect.bottom - selectedItem.offsetHeight; // bottom boundary

        selectedItem.style.position = 'absolute'; // Set position to absolute
        selectedItem.style.left = `${x}px`;
        selectedItem.style.top = `${y}px`;
    }
}

function onMouseUp() {
    selectedItem = null; // Deselect the item
    document.removeEventListener('mousemove', onMouseMove); // Remove event listeners
    document.removeEventListener('mouseup', onMouseUp);
}