const studentList = 
["Logan****",
"DJ****",
"Steve****",
"Nicolas****",
"James****",
"Momo****",
"Alex****",
"Tom****",
"Kat****",
"Narcis****",
"Mark****"]

const randomStudentList = [];
const secondRandomStudentList = [];
function randomGenerator (alwaysZero, totalNumberOfStudents) {
    
  for ( let i = 0; i <3; i++ ) {
    let randomStudent = randomStudentList.push(Math.floor(Math.random() * totalNumberOfStudents) + alwaysZero);

    let studentAppend = document.getElementById("name").append(studentList[randomStudentList[i]]);
    console.log(studentList[randomStudentList[i]]);
  }

}

randomGenerator(0, 11);

// const randomThree = (Math.floor(Math.random() * studentList.length)) ;
// console.log(studentList[randomThree], studentList[randomThree], studentList[randomThree]);

