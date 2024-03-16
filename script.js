let count = 0;

function updateCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.innerText = count;
}

function increment() {
    count++;
    updateCounter();
    checkError();
}

function decrement() {
    if (count > 0) {
        count--;
        updateCounter();
        checkError();
    }
}

function clearCounter() {
    count = 0;
    updateCounter();
    checkError();
}

function checkError() {
    const errorElement = document.getElementById('error');
    if (count === 0) {
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}


updateCounter();