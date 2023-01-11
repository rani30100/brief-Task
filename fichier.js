// HELLO RANI
// I WANT TO PLAY A GAME
// https://www.youtube.com/watch?v=vhSHXGM7kgE



function createButton(color, icon, clickFn) {
  const btn = document.createElement("button");
  btn.classList.add("btn", `btn-${color}`, "p-2", "material-symbols-outlined");
  // btn.className = `btn btn-${color} p-2 material-symbols-outlined`;
  btn.textContent = icon;
  btn.onclick = clickFn;
  return btn;
}
// <button class="btn btn-${color} p-2 material-symbols-outline">${icon}</button>



function addTask(content) {
  
  const container = document.createElement("div");
  container.className = "task";
  
  const text = document.createElement("span");
  text.textContent = content;
  const check = document.createElement("input");
  check.type = "checkbox";

  const modifyButton = createButton("primary", "edit", handleModifyButton);
  const deleteButton = createButton("danger", "delete", handleDeleteButton);
  
  // const deleteButton = document.createElement("button");
  // deleteButton.className = "btn btn-danger p-2 material-symbols-outlined";
  // deleteButton.textContent = "delete";
  // deleteButton.onclick = handleDeleteButton;
  
  container.append(check, text, modifyButton, deleteButton);
  taskList.append(container);

  
  // const newInput = document.createElement("input");
  // newInput.value = container.textContent;
}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask(form.task.value);
  
  // reinitialize le formulaire (vide ses champ)
  form.reset();
});

const taskList = document.getElementById("task-list");




function handleModifyButton(event) {
  /** Ceci precise le type de la variable button pour que vscode puisse autocompleter les methodes
   * @type {HTMLElement}
   */
  // event.target represente la cible de l'evenement (l'endroit où on a cliqué, dans notre cas, un boutton)
  const button = event.target;

  // selectionne le parent le plus proche qui corresponds au selecteur ".task"
  const task = button.closest(".task");
  // sélectionne l'enfant span de la tâche.
  const text = task.querySelector("span");
  
  const newInput = document.createElement("input");
  // le contenu de text est le span html
  newInput.value = text.textContent;
  // le background de tous les nouveaux input en cliquant changent en vert 
  newInput.style.backgroundColor = "green";


  function handleSave() {
    const newSpan = document.createElement("span");
    newSpan.textContent = newInput.value;
    const modifyBtn = createButton("primary", "edit", handleModifyButton);
    
    saveBtn.before(newSpan, modifyBtn);
    
    newInput.remove();
    saveBtn.remove();
    if (newSpan.textContent==""){
      // console.log("aucun contenu");
    task.remove();
    }
  }

  const saveBtn = createButton("success","check", handleSave);


  button.before(newInput, saveBtn); // ajoute le champ d'edition et le boutton à la tâche
  text.remove(); // supprime le span
  button.remove() // supprime le boutton


//Nous devons faire valider le contenu du coup  =>>
// je regarde s'il y a une methode pour sauveagrder le contenu

}




function handleDeleteButton(event) {
  /** Ceci precise le type de la variable button pour que vscode puisse autocompleter les methodes
   * @type {HTMLElement}
  */
 const button = event.target;
 
 // selectionne le parent le plus proche qui corresponds au selecteur ".task"
 const task = button.closest(".task");
 task.remove();
}