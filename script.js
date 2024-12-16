const inputBox = document.getElementById("input-box");
const listText = document.getElementById("list-text");
const addBtn = document.getElementById("add-btn");
const listText2 = document.getElementsByClassName("checked");

function addList() {
  if (inputBox.value === "") {
    alert("Anda Harus Menulis Sesuatu!");
  } else {
    const outputList = document.createElement("li");
    outputList.innerHTML = inputBox.value;
    listText.appendChild(outputList);

    var span = document.createElement("img");
    span.src = "trash.png";
    span.innerHTML = span.src;
    outputList.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

addBtn.addEventListener("click", () => {
  addList();
});

inputBox.addEventListener("keyup", (event) => {
  if (event.which === 13) {
    addList();
  }
});

listText.addEventListener(
  "click",
  function (task) {
    if (task.target.tagName === "LI") {
      task.target.classList.toggle("checked");
      saveData();
    } else if (task.target.tagName === "IMG") {
      task.target.parentElement.remove("");
      saveData();
    }
  },
  false
);

function removeAll() {
  while (listText.firstChild) {
    listText.removeChild(listText.firstChild);
  }
  saveData();
}

function clearCompleted() {
  var list = document.getElementById("list-text");
  var items = list.getElementsByClassName("checked");
  for (var i = items.length - 1; i >= 0; i--) {
    list.removeChild(items[i]);
  }
  saveData();
}

function saveData() {
  localStorage.setItem("data", listText.innerHTML);
}

function showTask() {
  listText.innerHTML = localStorage.getItem("data");
}
showTask();
