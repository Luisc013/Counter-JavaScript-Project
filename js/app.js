const addBtn = document.querySelector(".nextBtn")
const minusBtn = document.querySelector(".prevBtn")
const counterObj = document.getElementById("counter").innerHTML;

var counter = parseInt(counterObj, 10);

addBtn.addEventListener("click", () => {
  counter += 1
  counterObj.innerHTML = counter;
  console.log(counter)
  negativeOrPositive()

})

minusBtn.addEventListener("click", () => {
  counter -= 1
  document.getElementById('counter').innerHTML = counter;
  console.log(counter)
  negativeOrPositive()
})

function negativeOrPositive () {
  if(counter > 0) {
    counterObj.fontcolor("green")
  }
  if(counter = 0) {
    counterObj.fontcolor("grey")  }
  else {
    counterObj.fontcolor("red")
  }
}