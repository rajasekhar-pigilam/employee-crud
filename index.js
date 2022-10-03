// Import stylesheets
import './style.css';

// Write Javascript code!

var mode = 'add';
var selectedId = null;
var person = new Array();
person.push(['Dileep', 'Maddela', 'maddeladileep@gmail.com', '7032574975']);
person.push(['Charan', 'Gundala', 'gundalacharan', '7845123698']);
person.push(['KalamHussan', 'Syed', 'syedkalam@gmail.com', '9865320145']);
person.push(['Kishore', 'Pujari', 'pujarikishore@gmail.com', '8645111023']);
var empty = '';

function bcontainer() {
  console.log('BContainer');
  var employ = "<table border='1px'>";
  employ +=
    '<tr><td>Frist Name</td><td>SurName</td><td>Email@.com</td><td>Personal PhNo:</td><td>Edit</td></tr>';
  for (var i = 0; i < person.length; i++) {
    employ += '<tr>';
    employ +=
      '<td>' +
      person[i][0] +
      '</td><td>' +
      person[i][1] +
      '</td><td>' +
      person[i][2] +
      '</td><td>' +
      person[i][3] +
      "</td><td><input type='button' value='Edit' onclick= editbtn(" +
      i +
      ')><button onclick=deleteEmp(' +
      i +
      ')>Delete</button></td>';
    employ += '</tr>';
  }
  employ += '</table>';
  document.getElementById('dynamictbl').innerHTML = employ;
  display();
}

function display() {
  document.getElementById('adddiv').style.display = 'block';
  document.getElementById('tbldiv').style.display = 'none';
}

function addemply() {
  document.getElementById('fname').value = '';
  document.getElementById('sname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phnum').value = '';
  document.getElementById('adddiv').style.display = 'none';
  document.getElementById('tbldiv').style.display = 'block';
  document.getElementById('edit').style.display = 'none';
  mode = 'add';
}

function savebtn() {
  var Fristn = document.getElementById('fname').value;
  var SURn = document.getElementById('sname').value;
  var MAIL = document.getElementById('email').value;
  var Mnum = document.getElementById('phnum').value;

  if (empty == '') {
    if (mode === 'add') person.push([Fristn, SURn, MAIL, Mnum]);
    else {
      person[selectedId] = [Fristn, SURn, MAIL, Mnum];
    }
  }

  bcontainer();
}

function cancelbtn() {
  display();
}

function deleteEmp(empId) {
  person.splice(empId, 1);
  bcontainer();
}



function editbtn(empId) {
  for (i = 0; i < person.length; i++) {
    document.getElementById('fname').value = person[i][0];
    document.getElementById('sname').value = person[i][1];
    document.getElementById('email').value = person[i][2];
    document.getElementById('phnum').value = person[i][3];
  }

  document.getElementById('adddiv').style.display = 'none';
  document.getElementById('tbldiv').style.display = 'block';
  document.getElementById('save').style.display = 'block';
  document.getElementById('cancel').style.display = 'block';
  mode = 'edit';
  selectedId = empId;
  console.log(person);
}
