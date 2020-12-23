const addBtn = document.querySelector(".nextBtn")
const minusBtn = document.querySelector(".prevBtn")
const counterObj = document.getElementById("counter").innerHTML;

addBtn.addEventListener("click", () => {
  var counter = parseInt(counterObj, 10);
  counter += 1
  counterObj.innerHTML = counter;
  console.log(counter)
  negativeOrPositive(counter)

})

minusBtn.addEventListener("click", () => {
  var counter = parseInt(counterObj, 10);
  counter -= 1
  document.getElementById('counter').innerHTML = counter;
  console.log(counter)
  negativeOrPositive(counter)
})

function negativeOrPositive (counter) {
  if(counter > 0) {
    counterObj.fontcolor("green")
  }
  if(counter = 0) {
    counterObj.fontcolor("grey")  }
  else {
    counterObj.fontcolor("red")
  }
}