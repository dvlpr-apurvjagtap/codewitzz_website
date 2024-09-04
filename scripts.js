document.addEventListener('DOMContentLoaded', function () {
    const hiddenElement = document.createElement('div');
    hiddenElement.innerText = "Hey, no peeking! We're not done yet!";
    hiddenElement.style.display = 'none';
    hiddenElement.style.position = 'absolute';
    hiddenElement.style.backgroundColor = '#333';
    hiddenElement.style.color = 'white';
    hiddenElement.style.padding = '10px';
    hiddenElement.style.borderRadius = '5px';
    hiddenElement.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    document.body.appendChild(hiddenElement);

    document.querySelector('img').addEventListener('click', function (e) {
        hiddenElement.style.display = 'block';
        hiddenElement.style.left = `${e.clientX}px`;
        hiddenElement.style.top = `${e.clientY}px`;

        setTimeout(() => {
            hiddenElement.style.display = 'none';
        }, 2000);
    });
});
