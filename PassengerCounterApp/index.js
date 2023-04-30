//document.getElementById("count-el").innerText=5

// let count = 5
// count = count + 1
// console.log(count)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// camelCase 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

// grab the count-el element, store it in a countEl variable

function increment() {
    //     console.log("clicked")
    count += 1
    // set countEl's innerText to the count
    // countEl.innerText = count
    countEl.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    // let countStr = " " + count + " - "
    // saveEl.innerText += countStr
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    //console.log(count)
}

console.log("Let's count people on the subway!")

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")
// let my_name = "Do"
// let greeting = "Welcome back "

// // Render the welcome message using welcomeEl.innerText
welcomeEl.textContent = greeting + my_name

// Add an emoji to the end!
//welcomeEl.textContent += "👋"


