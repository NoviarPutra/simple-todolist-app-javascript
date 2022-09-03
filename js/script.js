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
    <div class="alert alert-dark" role="alert">
        <div class="row">
          <div class="col-auto me-auto">
            <p class="h6">${arr}</p>
          </div>
          <div class="col-auto">
            <button value"${index}" type="button" class="btn btn-warning btn-sm">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button value="${index}" type="button" class="btn btn-danger btn-sm">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>`;
  });
  resultList.innerHTML = template;
});
