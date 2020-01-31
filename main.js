// STUDENT ARRAY
studentArray = [{}];


// HOUSE ARRAY 
houseArray = [{
    name: 'Gryffindor',
    color: 'red',
    song: 'You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve, and chivalry Set Gryffindors apart'
},
{
    name: 'Hufflepuff',
    color: 'yellow',
    song: 'You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, And unafraid of toil.'
},
{    
    name: 'Ravenclaw',
    color: 'blue',
    song: 'Or yet in wise old Ravenclaw, If you\'ve a ready mind, Where those of wit and learning, Will always find their kind.'
},
{    
    name: 'Slytherin',
    color: 'green',
    song: 'Or perhaps in Slytherin, You\'ll make your real friends, Those cunning folk use any means, To achieve their ends.'
}];

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
    document.getElementById('submit-btn').addEventListener('click', studentArrayBuilder );
};

// STUDENT CARD BUILDER 
const studentCardBuider = (student) => {
    let domString = '';
    domString += '<div class="card text-black bg-white mb-3" style="max-width: 18rem;">';
    domString += `  <div class="card-header">${student[0].name}</div>`;
    domString += '  <div class="card-body">';
    domString += `    <h5 class="card-title">${student[0].house}</h5>`;
    domString += '    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>';
    domString += '  </div>';
    domString += '</div>';

    printToDom('student-cards', domString);
};

// STUDENT ARRAY BUILDER
const studentArrayBuilder = () => {
    studentArray[0].name = document.getElementById('student-input').value; // adds input to studentArray by creating an object with name key
    houseSorter();
};

// HOUSE SORTER
const houseSorter = () => {
    let newHouse = '';
    newHouse = houseArray[Math.floor(Math.random() * houseArray.length)].name;
    studentArray[0].house = newHouse;
    studentCardBuider(studentArray);
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