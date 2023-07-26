
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const taskDescription = e.target.querySelector('#new-task-description').value;
    buildToDo(taskDescription);
    e.target.reset(); 
  });
}); 

function buildToDo(toDo) {
  const li = document.createElement('li'); 
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteToDo)
  btn.textContent = ' x ';
  li.textContent = `${toDo} `;
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);
}
function deleteToDo(e) {
  e.target.parentNode.remove()
  

}