const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
//const canvas = document.querySelector('.canvas-display');
buttons.forEach(function (button) {
   
    button.addEventListener('click', function (e) {
        console.log(e);
            console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
            //canvas.style.display = "none";
        } if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        } if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        } if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
    });
});