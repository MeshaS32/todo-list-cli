const prompt = require('prompt-sync')({sigint: true});

console.log("Welcome to the To-Do List Manager Application!" )

console.log("~ Select an action ~ ")
console.log("[1] Create a to-do item ")
console.log("[2] Complete a to-do item")
console.log("[3] Exit to do list Application")

let option = Number(prompt(`> `));
let toDoList = []
let statusArray = []

while(option !== 3){
if(option === 1){
    console.log(" ~ Create a to-do-item ~ ")
    console.log(" What is the item called? ")  
    

    let addItem = prompt(`> `)

    while(addItem.length === 0){
        console.log("Input cannot be empty")
        addItem = prompt(`> `)
    }
    //reprompt the user
    toDoList.push(addItem)
    statusArray.push(false)

    List()

  select()

} else if(option === 2){
    if(toDoList.lenth !== 0){
    console.log(" ~ Complete a to do item ~ ")
    console.log("Which to-do item would you like to complete? ")
    List()

    let newStatus = Number(prompt(`> `))
    
    while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1){
        console.log("Please imput a number on the list ")
        newStatus = Number(prompt(`< `))
    }

    statusArray[newStatus-1] = true;
    }else {
        console.log("Please add an item to your to do list that you would like to complete")
    }

    List()
    //reprompt the user
    select()
}else if(option === 3){
    console.log(" Exiting to-do list Application ")
    option = Number(prompt("< "))
}else {
    console.log("Invalid operation")
}
}
console.log(" ~ Exiting to-do list Application ")


function select(){

console.log("~ Select an action ~ ")
console.log("[1] Create a to-do item ")
console.log("[2] Complete a to-do item")
console.log("[3] Exit to do list Application")
option = Number(prompt(`> `));
}

function List(){

    if(toDoList.length === 0){
        console.log("Your to-do list in empty ")
    } else {
        console.log(`You have ${toDoList.length} to do items(s)`)
    }
    for(let i = 0; i <toDoList.length; i++){
        let status = ""

        if(statusArray[i] === false){
            status = "[incomplete]"
        } else if(statusArray[i] === true){
            status = "[complete]"
        }

        console.log(`${i+1} . ${status} ${toDoList[i]}`)
    }
}







/*

1. Figure out the UI
    -welcome message
    -different options(tasks, complete task, incomplete tasks, exit program)
    error messsages

-prompt
    numbers to decide options using if statements
    1-adding a task/create item- prompt user for item to create.
    2-mark task as complete
    3-exit

    -while loop
    program has no known ending so we want to be able to prompt them 
    until they exit.

    display to do list to user
    -completion status
    -the name of item
    - the number associated with the item_loop to disply each item

2. Add to do items( choice === 1)
    -prompt for the to-do item
    -save item by storing an array - .push
    -an array to kepp track of to-do items- global variable

    2.5- how do we set items to be incomplete
    any item on the list is incomplete until marked completed
    whenevr an item is added to the to-do list it is incompleter by default

array of booleans

true = [complete]
false = [incomplete]


[true, false, true]                     status array
[`Walk dog`, `get food`, `Run mile`]    todolist array
[   0       ,    1      ,  2]           shared index

let status =[]
by default new item needs to be a false boolean



3. complete T-Do Items
-display items in to-do list with their status
-pick which item to mark as complete-swap its status from false to true
-display updated list after completing to do item


*/
