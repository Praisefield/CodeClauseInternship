//The JavaScript
//Login Function
function login() {
  const username = document.getElementById('username').value;
  if (username === 'admin', password === 'Ady124') {
  //  document.getElementById('loginForm').style.display = "none";
    document.getElementById('adminPanel').style.display = "block";
  } else {
   // document.getElementById('loginForm').style.display = "none";
    document.getElementById('studentPanel').style.display = "block";
  }
}

let exams = []; // Array to store exam details

// Function to set exam by the admin
function setExam() {
    const examName = document.getElementById('examName').value;
    const examDate = document.getElementById('examDate').value;
    exams.push({ name: examName, date: examDate });
    showExamsToStudents();
}

// Function to display exams in a table on the student panel
function showExamsToStudents() {
    let sortedExams = exams.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    let table = '<h2>Upcoming Examinations</h2><table><tr><th>Exam Name</th><th>Exam Date</th></tr>';
    sortedExams.forEach(exam => {
        table += `<tr><td>${exam.name}</td><td>${exam.date}</td></tr>`;
    });
    table += '</table>';
    document.getElementById('studentPanel').innerHTML = table;
}

// Function to handle student login and display the examination portal after login
function studentLogin() {
    const studentName = document.getElementById('studentName').value;
    const studentID = document.getElementById('studentID').value;
    // Perform login validation, authentication, and redirection to student portal
    showExamsToStudents();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('studentPanel').style.display = 'block';
}

// Display the login form initially
document.getElementById('studentPanel').style.display = 'none';



// Add Student Group Function
function addStudentGroup() {
  const group = document.getElementById('group').value;
  // Code to add student group
}

// Submit Form Function
function submitForm() {
  const studentName = document.getElementById('studentName').value;
  const studentID = document.getElementById('studentID').value;
  // Code to submit form
  document.getElementById('studentPanel').style.display = "none";
  document.getElementById('hallTicket').style.display = "block";
}

// Download Hall Ticket Function
function downloadHallTicket() {
    const hallTicket = document.getElementById('studentexam');
    document.getElementById('studentexam').style.display ="block";
  // Code to download hall ticket
}
