window.addEventListener('load', () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

//Adding a task after clicking on the 'add' button
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;
//Creating a div for task
    const task_el = document.createElement('div');
    task_el.classList.add('task');
//Creating a div to add content(task entered by the user) and displaying it on the task div
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');
    task_content_el.innerText = task;
    task_el.appendChild(task_content_el); //appending the child tag(content div) into the parent tag(task div)

//creating a div for the buttons(done and delete)
    const task_action_el = document.createElement('div');
    task_action_el.classList.add('actions');


    //Creating a button called delete and displaying it next to each entered tasks
    const task_del_el = document.createElement('button');
    task_del_el.classList.add('delete');
    task_del_el.innerHTML = "Remove";

    //Creating a button called done and displaying it next to each entered tasks
        const task_done_el = document.createElement('button');
        task_done_el.classList.add('done');
        task_done_el.innerHTML = "Done";


     //Appending child tags into parent tags
    task_action_el.appendChild(task_done_el);
    task_action_el.appendChild(task_del_el);
    task_el.appendChild(task_action_el);
    list_el.appendChild(task_el);


//Delete button function
    task_del_el.addEventListener('click', () => {
      list_el.removeChild(task_el);
    })

//Done button function
    task_done_el.addEventListener('click', () => {
      task_content_el.style.textDecoration = "line-through";
      task_content_el.style.textDecorationThickness= "0.225rem";
      task_content_el.style.textDecorationColor= "#374151";

    })


  })
})
