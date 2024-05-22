//The JavaScript
//Login Function
function login() {
  const username = document.getElementById('username').value;
  if (username === 'admin') {
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('adminPanel').style.display = "block";
  } else {
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('studentForm').style.display = "block";
  }
}

// Set Exam Function
function setExam() {
  const examName = document.getElementById('examName').value;
  // Code to set exam

}

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
  document.getElementById('studentForm').style.display = "none";
  document.getElementById('hallTicket').style.display = "block";
}

// Download Hall Ticket Function
function downloadHallTicket() {
  // Code to download hall ticket
}
