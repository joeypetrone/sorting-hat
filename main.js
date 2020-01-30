console.log('Sorting Time!');

// CLICK FUNCTION
const clickedButton = () => {
    alert('CLICK!!!');
};

// EVENTS
const events = () => {
    document.getElementById('click-button').addEventListener('click', clickedButton )
};

// INITIAL FUNCTION
const init = () => {
    events();
};

init();