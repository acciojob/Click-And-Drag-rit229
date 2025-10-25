// Your code here.
const items = document.querySelectorAll('.item');
let selectedItem = null;
let offsetX = 0;
let offsetY = 0;

items.forEach(item => {
    item.addEventListener('mousedown', (e) => {
        selectedItem = item;
        offsetX = e.clientX - item.getBoundingClientRect().left;
        offsetY = e.clientY - item.getBoundingClientRect().top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});

function onMouseMove(e) {
    if (selectedItem) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        // Set boundaries here if needed
        selectedItem.style.position = 'absolute'; // You may need to set this in CSS
        selectedItem.style.left = `${x}px`;
        selectedItem.style.top = `${y}px`;
    }
}

function onMouseUp() {
    selectedItem = null;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}