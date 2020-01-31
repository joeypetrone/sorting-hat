// STUDENT ARRAY
studentArray = [];

// HOUSE ARRAY 
houseArray = [
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
    'Slytherin'
];

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
    domString += '          <input id="student-input" class="form-control" placeholder="Type your name here">';
    domString += '    <small class="form-text text-muted">We\'ll find the most suitable house for you.</small>';
    domString += '  </div>';
    domString += '  <button id="submit-btn" class="btn btn-primary mb-2">Submit</button>';
    domString += '</form>';

    printToDom('student-form', domString);
    document.getElementById('submit-btn').addEventListener('click', houseSorter );
};

// STUDENT ARRAY BUILDER
const studentArrayBuilder = () => {
    studentArray.push(document.getElementById('student-input').value);
};

// HOUSE SORTER
const houseSorter = () => {
    let newHouse = '';
    newHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
    console.log(newHouse);
};

// EVENTS
const events = () => {
    document.getElementById('join-btn').addEventListener('click', formBuider );
};

// INITIAL FUNCTION
const init = () => {
    events();
};

init();