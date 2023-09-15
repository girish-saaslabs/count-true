let arr = []
let inp = document.getElementById("input")
let arrayList = document.getElementById("array-list")
let trueCount = document.getElementById("true-count")

inp.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    add();
  }
});

let add = () => {
  if (inp.value == 'true' || inp.value == 'false') {
  arr.push(inp.value)
  inp.value = ""
  arrayList.innerText = arr
  console.log(arr)
  
  let trueArr = arr.filter((a) => a == 'true')
  console.log(trueArr)
  console.log("True length: " + trueArr.length)
  trueCount.innerText = trueArr.length
  } else {
    alert("Enter true or false")
    return true;
  }
}