import {add,} from './math.js';
console.log(add(1,2));
console.log(subtract(1,2));
console.log("hello word");
document.getElementById("hello").innerHTML = "Hello World";


function renderTodos(todo) {
    document.write("<ul>");
    todo.forEach(function (todo) {
      document.write("<li>" + todo.text + "</li>");
    });
    document.write("</ul>");
}

  alert("Hello");
  document.write("Hello World");

  const todos = [
    {
      id: 1,
      text: "Take out trash",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Meeting with boss",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Dentist appt",
      isCompleted: false,
    },
  ];
