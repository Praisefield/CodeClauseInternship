//The JavaScript
//Login Function
const users ={
   admin: {username:"admin", password:"Ady124", role:"Admin"},
   studentA: {username:"studentA", password:"Stu123A", role:"student"},
   studentB: {username:"studentB", password:"Stu123B", role:"student"},
   studentC: {username:"studentC", password:"Stu123C", role:"student"},
   studentD: {username:"studentD", password:"Stu123D", role:"student"},
   studentE: {username:"studentE", password:"Stu123E", role:"student"},
   studentF: {username:"studentF", password:"Stu123F", role:"student"},
   studentG: {username:"studentG", password:"Stu123G", role:"student"},
   studentH: {username:"studentH", password:"Stu123H", role:"student"},
   studentI: {username:"studentI", password:"Stu123I", role:"student"},
   studentJ: {username:"studentJ", password:"Stu123J", role:"student"},
   studentK: {username:"studentK", password:"Stu123K", role:"student"},
   studentL: {username:"studentL", password:"Stu123L", role:"student"},
   studentM: {username:"studentM", password:"Stu123M", role:"student"},
   studentN: {username:"studentN", password:"Stu123N", role:"student"}
};

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  if (!users[username]) {
    errorMessage.textContent ='Wrong username';
    return;
  }
  
  if (users[username].password !== password) {
    errorMessage.textContent = 'Wrong password';
    return;
}

if (username === 'admin' && password === 'Ady124')  {
    window.location.href = 'adminp.html';
} else {
    window.location.href = `studentp.html?username=${username}`;
}
}

function studentLogout() {
    currentRole = ""; // Clear the current role
    document.getElementById('studentPanel').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// New function for admin logout
function adminLogout() {
    window.location.reload();
  //  currentRole = ""; // Clear the current role
    //document.getElementById('adminPanel').style.display = 'none';
    //document.getElementById('loginForm').style.display = 'block';
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
  document.getElementById('studentGroup').innerHTML = "Group: " + group;
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




// New function to display upcoming exams for students
function showExamsToStudents() {
    // Code to display upcoming exams in the #upcomingExams section (left as an exercise)
  }
  
  // Updated student login function to handle student authentication
  function studentLogin() {
    const studentName = document.getElementById('studentName').value;
    const studentPassword = document.getElementById('studentPassword').value;
    const student = getUser(studentName);
    if (student && student.password === studentPassword) {
      // Correct student login credentials
      document.getElementById('studentPanel').style.display = 'none';
      showExamsToStudents();
      document.getElementById('upcomingExams').style.display = 'block';
    } else {
      alert("Wrong credentials. Please try again");
    }
  }
  
  // New function for handling student logout
  function studentLogout() {
    // Add code to clear the session and navigate back to the login form
    window.location.reload(); // This will refresh the page and display the login form
  }
  
  // New function for handling admin logout
  function adminLogout() {
    // Similar to the student logout function
  }
  
  // New function to download the hall ticket
  function downloadHallTicket() {
    // Code to download hall ticket (left as an exercise)
  }