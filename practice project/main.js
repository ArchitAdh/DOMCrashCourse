//DECLARATIONS
var form = document.getElementById('add-form');
var items = document.getElementById('items');
var filter = document.getElementById('filter');

// ----------------------------------------------------

// EVENTS

//add item
form.addEventListener('submit', addItem);
//remove item
items.addEventListener('click',deleteItem);
//filter items
filter.addEventListener('keypress',filterItem );
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
    if(confirm('Are you Sure??')){
        // console.log(e.target);
        items.removeChild(e.target.parentElement); 
          //we want to delete the whole item list, not just the
          //button, hence targetting the parentelement of button,
          //ie the list 
       }
    }
 }

 //FilterItem
 function filterItem(e){
     //convert text to lowercase
   var text =  e.target.value.toLowerCase();
   //Get each item
   var item = items.getElementsByTagName('li');
   //Convert to array
   Array.from(item).forEach(function(aItem){
        var itemName = aItem.firstChild.textContent;
        //there are two child element of aItem(li): item name and button name
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){ //indexof returns the position of occurence of specfied value in string
            aItem.style.display = 'block';                    // for example: e in items lie in 3rd positon
        }                                                     //returns -1 if not found, eg index of a in items return -1
        else{
            aItem.style.display = 'none';
        }
   }
   )
 }
