//DECLARATIONS
var form = document.getElementById('add-form');
var items = document.getElementById('items');

// ----------------------------------------------------

// EVENTS

//add item
form.addEventListener('submit', addItem);
//remove item
items.addEventListener('click',deleteItem);

// -----------------------------------------------------------


//FUNCTIONS

//Add Item 
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


//DeleteItem
function deleteItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('Are you Sure??'))
        // console.log(e.target);
        items.removeChild(e.target.parentElement); 
          //we want to delete the whole item list, not just the
          //button, hence targetting the parentelement of button,
          //ie the list 
       }
    }
 }