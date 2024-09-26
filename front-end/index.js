function addTodo(){

    const newTodo = document.getElementById("todo-input").value.trim();

    const li = document.createElement('li');
    li.className="border py-2 px-4 basis-1/3 mr-2 rounded";

    const newTodoText = document.createTextNode(newTodo);

    li.appendChild(newTodoText);

    document.getElementById("todo-main-list").appendChild(li);
    
}
function editTodo(){

}
function deleteTodo(){

}