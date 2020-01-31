// PRINT TO DOM
const printToDom = (divId, textToPrint) => {
    const selectedId = document.getElementById(divId);
    selectedId.innerHTML = textToPrint;
};

// FORM BUILDER 
const formBuider = () => {
    let domString = '';
    domString += '<form>';
    domString += '  <div class="form-group">';
    domString += '    <label>Lets find your Hogarts House, enter your name to be sorted!</label>';
    domString += '          <input class="form-control" placeholder="Type your name here">';
    domString += '    <small class="form-text text-muted">We\'ll find the most suitable house for you.</small>';
    domString += '  </div>';
    domString += '  <button type="submit" class="btn btn-primary mb-2">Submit</button>';
    domString += '</form>';

    printToDom('student-form', domString);
};

// FORM DISPLAY FUNCTION
const displayForm = () => {
    alert('Join Howarts, one moment...');
};

// EVENTS
const events = () => {
    document.getElementById('join').addEventListener('click', formBuider );
};

// INITIAL FUNCTION
const init = () => {
    events();
};

init();