const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDos = []; //toDo 리스트 들을 담는 배열

//로컬저장소에 todo리스트 저장
function saveToDos(toDos){
    //toDos는 배열인데 로컬저장소는 문자열 밖에 저장을 못함.
    // 그래서 JSON.stringify() 를 통해 문자열로 변경시킴.
    localStorage.setItem("todos", JSON.stringify(toDos));
}

//x버튼 누르면 리스트 제거
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();

}

// Todo 리스트의 목록 하나 생성 후 출력
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){;
    event.preventDefault(); // submit의 경우 기본적으로 새로고침 기능이있는데 이를 막기위해 preveentDefault() 호출함.;
    const newTodo = toDoInput.value; // Todo value 저장
    toDoInput.value = "";
    toDos.push(newTodo); // toDos 배열에 생성되는 새로운 리스트들 저장.
    saveToDos(toDos); //로컬저장소에 toDos배열 저장
    paintToDo(newTodo); //새로 생성된 newToDo 출력
}

toDoForm.addEventListener("submit",handleToDoSubmit);
