// STUDENT ARRAY
studentArray = [];


// HOUSE ARRAY 
houseArray = [{
    name: 'Gryffindor',
    color: 'danger',
    song: 'You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve, and chivalry Set Gryffindors apart'
},
{
    name: 'Hufflepuff',
    color: 'warning',
    song: 'You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, And unafraid of toil.'
},
{    
    name: 'Ravenclaw',
    color: 'primary',
    song: 'Or yet in wise old Ravenclaw, If you\'ve a ready mind, Where those of wit and learning, Will always find their kind.'
},
{    
    name: 'Slytherin',
    color: 'success',
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
    domString += '<form class="m-5 d-flex justify-content-center flex-wrap">';
    domString += '  <div class="form-group w-35" id="form">';
    domString += '    <label class="font-weight-bold">Find your Hogarts House, enter your name to be sorted!</label>';
    domString += '          <input id="student-input" class="form-control" placeholder="Type your name here">';
    domString += '    <small class="form-text text-muted">We\'ll find the most suitable house for you.</small>';
    domString += '  </div>';
    domString += '  <a href="#form" id="submit-btn" class="btn btn-primary mb-2 h-25 align-self-center" role="button">Submit</a>';
    domString += '</form>';

    printToDom('student-form', domString);
    document.getElementById('submit-btn').addEventListener('click', studentArrayBuilder );
};

// STUDENT CARD BUILDER 
const studentCardBuider = (student) => {
    let domString = '';
    for (let i=0; i < student.length; i++) {
    domString += `<div class="card text-black bg-${student[i].houseColor} text-white mb-3" id=" style="max-width: 18rem;">`;
    domString += `  <div class="card-header font-weight-bold" id="student-name"><h4>${student[i].name}</h4></div>`;
    domString += '  <div class="card-body">';
    domString += `    <h5 class="card-title">${student[i].house}</h5>`;
    domString += `    <p class="card-text">${student[i].houseSong}</p>`;
    domString += '  </div>';
    domString += '  <div class="card-footer">';
    domString += `    <button id="expel-btn" class="btn expel-btn btn-dark mb-2">Expel</button>`;
    domString += '  </div>';
    domString += '</div>';
    }
    printToDom('student-cards', domString);
    classname = document.getElementsByClassName('expel-btn');
    for (var i = 0; i < studentArray.length; i++) {
        classname[i].addEventListener('click', expelStudent);
    }
    formBuider();
};

// STUDENT ARRAY BUILDER
const studentArrayBuilder = () => {
    studentArray.push({name});
    studentNumber = studentArray.length - 1;
    studentArray[studentNumber].name = document.getElementById('student-input').value; // adds input to studentArray by creating an object with name key
    houseSorter(studentNumber);
};

// HOUSE SORTER
const houseSorter = (num) => {
    let newHouse = '';
    const randomNum = Math.floor(Math.random() * houseArray.length)
    newHouse = houseArray[randomNum].name;
    studentArray[num].house = newHouse;
    studentArray[num].houseSong = houseArray[randomNum].song;
    studentArray[num].houseColor = houseArray[randomNum].color;
    studentArray[num].id = num;
    studentCardBuider(studentArray);
};

// EXPEL STUDENT
const expelStudent = () => {
    console.log('in expel');
    for( var i = 0; i < studentArray.length; i++){ 
        if ( studentArray[i].name === 'Jim') {
          studentArray.splice(i, 1); 
        }
     }
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