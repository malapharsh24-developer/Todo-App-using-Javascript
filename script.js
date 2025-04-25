let inputTask = document.querySelector("#inputTask");
let addBtn = document.querySelector("#add-btn");
let ul = document.querySelector("ul");
let liItemsArray = document.querySelectorAll("li");

// CHECK TASK EXIST OR NOT
if(liItemsArray.length>=0){
  
}

// ADD TASK
addBtn.addEventListener("click", function () {
  if (inputTask.value.trim().length == 0) {
    alert("Task is required");
  } else {
    let htmlString = `<li class="flex align-center container">
        <input type="checkbox" name="checkbox" class="checkbox">
        <h3>${inputTask.value}</h3>
        <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </li>`;

    ul.innerHTML += htmlString;
    
    alert(`${inputTask.value} is created`);
    // Check Empty
    let h2 = document.querySelector("ul h2");
    if(inputTask.value.length > 0){
        h2.style.display = "none";
    }
    console.log(inputTask.value);
    inputTask.value = "";
  }
  
});

// DELETE TASK
ul.addEventListener("click",function(e){
    let delBtn = e.target;
    if(delBtn.parentNode.className == "delete-btn"){
        console.log("delete clicked");
        let Btn = delBtn.parentNode;
        let li = Btn.parentNode;
        li.remove();

        alert(`${li.innerText.trim()} is deleted`);
    }
    
})


// CHECK COMPLETE 

  ul.addEventListener("click",function(e){
  // console.dir(e.target.parentNode.childNodes[3]);
    let h3 = e.target.parentNode.childNodes[3];
    h3.classList.toggle("linethrough");
  });

