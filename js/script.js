const submit = document.getElementById("submit");
const resultList = document.getElementById("result");
let todolist = [];

const handlerForm = (e) => {
  if (e.target.id == "do") {
    todolist.push(e.target.value);
  }
};

submit.addEventListener("click", (e) => {
  document.getElementById("do").value = "";
  console.log(todolist);
  const template = todolist.map((arr, index) => {
    return `
    <li class="list-group-item">
          <div class="row">
            <div class="col-auto me-auto">${arr}</div>
            <div class="col-auto">
              <button type="button" class="btn btn-outline-success btn-sm">
                Done
              </button>
              <button type="button" class="btn btn-outline-dark btn-sm">
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
});

const editData = (value) => {};

const removeData = (index) => {};

const finishedData = (index) => {};
