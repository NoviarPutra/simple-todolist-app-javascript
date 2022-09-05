const resultList = document.getElementById("result");
const doneList = document.getElementById("done-list");
let todolist = [];
let finishedList = [];
let key;

const handlerForm = (e) => {
  switch (e.target.id) {
    case "do":
      todolist.push(e.target.value);
      break;

    case "edit":
      todolist[key] = e.target.value;
      break;

    default:
      break;
  }
};

const listTemplate = (arr) => {
  const temp = arr.map((val, index) => {
    return `
    <li class="list-group-item">
          <div class="row">
            <div class="col-auto me-auto">${val}</div>
            <div class="col-auto">
              <button id="${index}" value="${val}" type="button" onclick="finishedData(event)" class="btn btn-outline-success btn-sm">
                Done
              </button>
              <button id="${index}" onclick="editData(event)" value="${val}" type="button" class="btn btn-outline-dark btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                Edit
              </button>
              <button id="${index}" onclick="removeData(event)" value="${val}" type="button" class="btn btn-outline-danger btn-sm">
                Delete
              </button>
            </div>
          </div>
        </li>`;
  });
  resultList.innerHTML = temp;
};

const doneTemplate = (arr) => {
  const temp = arr.map((val, index) => {
    return `<li class="list-group-item">${index + 1}. ${val}</li>`;
  });
  doneList.innerHTML = temp;
};

const submitForm = () => {
  // console.log(todolist);
  document.getElementById("do").value = "";
  listTemplate(todolist);
};

const editData = (e) => {
  document.getElementById("edit").value = e.target.value;
  key = e.target.id;
  // console.log(e.target.value, key);
};

const saveEdit = () => {
  listTemplate(todolist);
  // console.log(todolist);
};

const removeData = (e) => {
  let valRemove = document.getElementById("confirm");
  valRemove = e.target.value;
  key = e.target.id;
  // console.log(valRemove, key);
  if (confirm(`Confirm Delete ${valRemove}`) == true) {
    todolist.splice(key, 1);
  }
  listTemplate(todolist);
};

const finishedData = (e) => {
  finishedList.push(e.target.value);
  doneTemplate(finishedList);
  todolist.splice(e.target.id, 1);
  listTemplate(todolist);
  // console.log(e.target.value, e.target.id);
  // console.log(finishedList);
};

const clearList = () => {
  for (let i = 0; i < finishedList.length; i++) {
    finishedList.splice(finishedList[i], finishedList.length);
  }
  doneTemplate(finishedList);
};
