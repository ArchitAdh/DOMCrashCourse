var form = document.getElementById('add-form');
var items = document.getElementById('items');

// Events 
form.addEventListener('submit', addItem);



//Add Item function
function addItem(e){
    e.preventDefault();

//Get Input Value
var item = document.getElementById('item').value;

// create new list item
var li = document.createElement('li');

// create classes in new li
li.className = 'list-group-item';

// add input value in li 
li.appendChild(document.createTextNode(item));

//add delete button
var deleteBtn = document.createElement('button');
deleteBtn.className = "btn btn-danger btn-sm float-right delete";
deleteBtn.appendChild(document.createTextNode("X"));
li.appendChild(deleteBtn);

// add li to items 
items.appendChild(li)

}
