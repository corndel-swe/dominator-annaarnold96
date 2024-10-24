// TODO: increment and decrement the count when the buttons are clicked

const count = document.querySelector("#count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener('click',()=>{
    count.innerText++
})
decrementButton.addEventListener('click',()=>{
    count.innerText--
})