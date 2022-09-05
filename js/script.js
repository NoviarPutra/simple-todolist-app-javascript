const resultList = document.getElementById("result");
let todolist = [];
let doneList = [];
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

const template = (arr) => {
  const temp = arr.map((val, index) => {
    return `
    <li class="list-group-item">
          <div class="row">
            <div class="col-auto me-auto">${val}</div>
            <div class="col-auto">
              <button type="button" class="btn btn-outline-success btn-sm">
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

const submitForm = () => {
  // console.log(todolist);
  document.getElementById("do").value = "";
  template(todolist);
};

const editData = (e) => {
  document.getElementById("edit").value = e.target.value;
  key = e.target.id;
  // console.log(e.target.value, key);
};

const saveEdit = () => {
  template(todolist);
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
  template(todolist);
};

const finishedData = (index) => {};
