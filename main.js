// STUDENT ARRAYS
studentArray = [];
expelledStudents = [];


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
    domString += '<form class="m-2 p-4 d-flex justify-content-center flex-wrap">';
    domString += '  <div class="form-group w-35" id="form">';
    domString += '    <label class="font-weight-bold" for="student-input">Find your Hogarts House, enter your name to be sorted!</label>';    
    domString += '      <input type="text" id="student-input" class="form-control" placeholder="Type your name here" required>';
    domString += '    <small class="form-text text-muted">We\'ll find the most suitable house for you.</small>';
    domString += '  </div>';
    domString += '  <button type="submit" onClick="jumpToForm(\'form\')" class="btn btn-primary mb-2 h-25 align-self-center" id="submit-btn">Submit</button>';
    domString += '</form>';
  
    printToDom('student-form', domString);
    document.getElementById('submit-btn').addEventListener('click', studentArrayBuilder );
};

// JUMP TO FORM
const jumpToForm = (id) => {
    document.getElementById(id).scrollIntoView();
};

// STUDENT CARD BUILDER 
const studentCardBuider = (student) => {
    let domString = '';
    console.log(student.length);
    if (student.length === 0) {
        domString += '';
        printToDom('student-title', domString);
    } else {
        domString += `<h1 class="display-5 d-flex justify-content-center ml-5 mr-5">Welcome to Hogwarts!</h1>`;
        printToDom('student-title', domString);
    }
    domString = '';

    for (let i=0; i < student.length; i++) {
    domString += `<div class="card text-black bg-${student[i].houseColor} text-white mb-5" id=" style="max-width: 18rem;">`;
    domString += `  <div class="card-header font-weight-bold" id="student-name"><h4>${student[i].name}</h4></div>`;
    domString += '  <div class="card-body">';
    domString += `    <h5 class="card-title">${student[i].house}</h5>`;
    domString += `    <p class="card-text">${student[i].houseSong}</p>`;
    domString += '  </div>';
    domString += '  <div class="card-footer">';
    domString += `    <button id="${student[i].id}" class="btn expel-btn btn-dark mb-2">Expel</button>`;
    domString += '  </div>';
    domString += '</div>';
    }
    printToDom('student-cards', domString);
    classname = document.getElementsByClassName('expel-btn');
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', expelStudent, false);
    }
    formBuider();
};

// EXPELLED CARD BUILDER 
const expelledCardBuider = (student) => {
    let domString = '';
    domString += `<h1 class="display-5 d-flex justify-content-center ml-5 mr-5">Voldermort's Army</h1>`;
    printToDom('expelled-title', domString);
    domString = '';

    for (let i=0; i < student.length; i++) {
    domString += `<div class="card text-black bg-dark text-white mb-3" id=" style="max-width: 18rem;">`;
    domString += `  <div class="card-header font-weight-bold" id="student-name"><h4>${student[i].name}</h4></div>`;
    domString += '  <div class="card-body">';
    domString += `    <h5 class="card-title">${student[i].house}</h5>`;
    domString += `    <p class="card-text">${student[i].houseSong}</p>`;
    domString += '  </div>';
    domString += '  <div class="card-footer">';
    domString += `    <h5>Expelled</h5>`;
    domString += '  </div>';
    domString += '</div>';
    }
    printToDom('expelled-cards', domString);
};

// STUDENT ARRAY BUILDER
const studentArrayBuilder = () => {
    if (document.getElementById('student-input').value === '') {
        // do not print to DOM 
    } else {
        studentArray.push({name});
        studentNumber = studentArray.length - 1;
        studentArray[studentNumber].name = document.getElementById('student-input').value; // adds input to studentArray by creating an object with name key
        houseSorter(studentNumber);
    }
};

// HOUSE SORTER
const houseSorter = (num) => {
    let newHouse = '';
    const randomNum = Math.floor(Math.random() * houseArray.length)
    newHouse = houseArray[randomNum].name;
    studentArray[num].house = newHouse;
    studentArray[num].houseSong = houseArray[randomNum].song;
    studentArray[num].houseColor = houseArray[randomNum].color;
    studentArray[num].id = 'student' + num;
    studentCardBuider(studentArray);
};

// EXPEL STUDENT
const expelStudent = (e) => {
    const studentId = e.target.id;
    for( var i = 0; i < studentArray.length; i++){ 
        if ( studentArray[i].id === studentId ) {
            const expelled = studentArray.splice(i, 1);
            expelledStudents.push(expelled[0]);
        }
     }
     studentCardBuider(studentArray);
     expelledCardBuider(expelledStudents);
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