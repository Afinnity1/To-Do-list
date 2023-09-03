// Here we assigned the input and listcontainer id's to variables
const inputBox = document.getElementById("input-box");        
const listContainer = document.getElementById("list-container"); 
/* Here we created a function for the button element so when clicked it either delivers an alert box if the input field is empty
    or it displays the text written in the input section on the screen. Then a span element was created to create the cancel/remove(x)
    button which will be to the right of each to do list string written. And we set the inputBox value to an empty string so the input
    section will always be empty after each written action
*/
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}       
// Here we created an event listener function so that when the listed item(li) and span elements are clicked their respective actions take place.
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
/* Then here we create a saveData function so that even when the page is closed or reloaded the to do lists you wrote down will still be saved when you come back to it again.
    thats why we added the  saveData() action after each important action statement or function so it'll save such action to the page.
*/
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// This shows our saved to do lists that the user types in on the page
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();