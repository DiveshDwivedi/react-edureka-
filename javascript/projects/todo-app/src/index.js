const input_box = document.getElementById('input-box');
const list_container = document.getElementById('list-container');

function add_task() {
    if (input_box.value === '') {
        alert("Please write some stuff !!");
    } else {
        let li = document.createElement('li')
        li.innerHTML = input_box.value;
        list_container.appendChild(li);
    }
}