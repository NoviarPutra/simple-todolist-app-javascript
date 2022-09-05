const resultList = document.getElementById("result");
let todolist = [];
let key;

const handlerForm = (e) => {
  switch (e.target.id) {
    case "do":
      todolist.push(e.target.value);
      break;

    case "edit":
      todolist[key] = e.target.value;
      // console.log(e.target.value, key);
      break;

    default:
      break;
  }
};

const submitForm = () => {
  // console.log(todolist);
  document.getElementById("do").value = "";
  const template = todolist.map((arr, index) => {
    return `
    <li class="list-group-item">
          <div class="row">
            <div class="col-auto me-auto">${arr}</div>
            <div class="col-auto">
              <button type="button" class="btn btn-outline-success btn-sm">
                Done
              </button>
              <button id="${index}" onclick="editData(event)" value="${arr}" type="button" class="btn btn-outline-dark btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                Edit
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm">
                Delete
              </button>
            </div>
          </div>
        </li>`;
  });
  resultList.innerHTML = template;
};

const editData = (e) => {
  document.getElementById("edit").value = e.target.value;
  key = e.target.id;
  // console.log(e.target.value, key);
};

const saveEdit = () => {
  const template = todolist.map((arr, index) => {
    return `
    <li class="list-group-item">
          <div class="row">
            <div class="col-auto me-auto">${arr}</div>
            <div class="col-auto">
              <button type="button" class="btn btn-outline-success btn-sm">
                Done
              </button>
              <button id="${index}" onclick="editData(event)" value="${arr}" type="button" class="btn btn-outline-dark btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                Edit
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm">
                Delete
              </button>
            </div>
          </div>
        </li>`;
  });
  resultList.innerHTML = template;
  // console.log(todolist);
};

const removeData = (index) => {};

const finishedData = (index) => {};
