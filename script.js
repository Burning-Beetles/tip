
let nameInput  = document.querySelector("#name")
let billInput = document.querySelector("#bill")
let btn1 = document.querySelector(".submit1")


let output = document.querySelector(".output")


// events

// we need to identify click event on a button 


// addEventListener()

// document.addEventListener()

btn1.addEventListener("click",  hello)





function hello(eventDetails){
   eventDetails.preventDefault()
   console.log(nameInput.value)
   console.log(billInput.value)
   let tip = billInput.value * 0.05
   output.innerHTML = `<p>Hello ${nameInput.value} your tip is ${tip} </p>`
}




// function addEventListener(hello){


//     hello(eventDetails)
// }


// function hello(a){

// }


// hello(10)