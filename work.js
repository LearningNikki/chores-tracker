// function setReminder(task, dueDate, callback) 
//   const now = new Date();
//   const timeLeft = dueDate.getTime() - now.getTime();

//   if (timeLeft <= 0) {
//     callback(task, "Task is already overdue!");
//     return;
//   }

//   setTimeout(() => {
//     callback(task, "Time to complete: " + task);
//   }, timeLeft);
// }

// function displayReminder(task, message) {
//   alert(message);
//   // Alternatively, you could update a div on the page:
//   // document.getElementById("reminder").innerText = message;
// }

// // Example usage:
// const chore = "Clean the kitchen";
// const reminderDate = new Date("2025-07-22T10:00:00"); // Tomorrow at 10:00 AM
// setReminder(chore, reminderDate, displayReminder);

// const anotherChore = "Walk the dog";
// const anotherReminderDate = new Date("2025-07-21T18:30:00"); // Today at 6:30 PM
// setReminder(anotherChore, anotherReminderDate, displayReminder);
    // let tasks = [];
    //  // Store tasks as objects: { description, dueDate, completed }

    // function addTask() {
    //     const taskDescription = document.getElementById('new-task').value;
    //     const dueDateString = document.getElementById('due-date').value;

    //     if (taskDescription && dueDateString) {
    //     const dueDate = new Date(dueDateString);

    //     const newTask = {
    //         description: taskDescription,
    //         dueDate: dueDate,
    //         completed: false,
    //     };

    //     tasks.push(newTask);
    //     renderTasks();
    //     document.getElementById('new-task').value = '';
    //     document.getElementById('due-date').value = '';
    //     }
    // }

    // function renderTasks() {
    //     const taskList = document.getElementById('task-list');
    //     taskList.innerHTML = '';

    //     tasks.forEach((task, index) => {
    //     const listItem = document.createElement('li');
    //     listItem.innerHTML = `
    //         <span class="${task.completed ? 'completed' : ''}">${task.description}</span>
    //         <span>Due: ${task.dueDate.toLocaleString()}</span>
    //         <button onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
    //         <button onclick="removeTask(${index})">Remove</button>
    //     `;
    //     taskList.appendChild(listItem);

    //     // Reminder logic
    //     const now = new Date();
    //     const timeDiff = task.dueDate.getTime() - now.getTime();
    //     const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    //     if (daysDiff <= 2 && daysDiff >= 0 && !task.completed) {
    //         listItem.classList.add('reminder');
    //         if(daysDiff === 0) {
    //             alert(`Reminder: Task "${task.description}" is due today!`);
    //         } else {
    //             alert(`Reminder: Task "${task.description}" is due in ${daysDiff} days!`);
    //         }
    //     } else {
    //         listItem.classList.remove('reminder');
    //     }
    //     });
    // }

    // function toggleComplete(index) {
    //     tasks[index].completed = !tasks[index].completed;
    //     renderTasks();
    // }

    // function removeTask(index) {
    //     tasks.splice(index, 1);
    //     renderTasks();
    // }

    // // Initial render (optional, if you have default tasks)
    // // renderTasks();

    // // Check for reminders periodically (e.g., every minute)
    // setInterval(renderTasks, 60000); // Check every minute


    //show today's date
    let todayDate = document.getElementById('today-date');
    let today = new Date();todayDate.textContent = today.toDateString();
    //select form and list
    let choreForm = document.getElementById('chore-form');
    let choreNameInput = document.getElementById("chore-name");
    let choreDurationInput = document.getElementById('chore-duration');
    let choreList =document.getElementById('chore-list');
    //listen for form sumission
    choreForm.addEventListener('submit',function (e){e.preventDefault();
        let name = choreNameInput.value.trim();
        let duration = parseInt(choreDurationInput.value.trim());
        if (name ==="" || isNaN(duration)){
            alert('please eneter a valid chore name and duration');
            return;}
            //create chore item
            let Li = document.createElement('li');
            Li.innerHTML=`<span><strong>${name}</strong>-${duration} mins</span>
            <button class ='done-btn'>Mark Done</button>`;
            //Add to list
            choreList.appendChild(Li);
            //clear inputs 
            choreNameInput.value='';
            choreDurationInput.value='';
            //Handle Mark done
            Li.querySelector('.done-btn').addEventListener('click',function(){
                Li.style.opacity='0.6';
                this.disabled = true;
                this.textContent='Done';
            })
    })