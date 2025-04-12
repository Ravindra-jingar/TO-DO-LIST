const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function showlogin(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobno = document.getElementById("mono").value;
  if(name && email && mobno){
    document.getElementById("namesave").innerText = name;
    document.getElementById("emailsave").innerText = email;
    document.getElementById("mobosave").innerText = mobno;
    document.getElementById("container").style.display = "block";
    document.getElementById("page").style.display = "none"
  }
  else{
    alert("your information are complsory")
  }
}
function AddTask(){
  if(inputBox.value === ''){
alert("you must write something")
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.append(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.append(span)
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
else if(e.target.tagName === "SPAN"){
  e.target.parentElement.remove();
  saveData()
}
  
})
function saveData(){
 localStorage.setItem("data",listContainer.innerHTML);//this save data in browser
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

