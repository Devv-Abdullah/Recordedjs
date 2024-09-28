var contactButton = document.getElementById('contactButton')
console.log(contactButton)

function contactus(){
    // alert(`you are trying to contact`)
    //change the text of button
    contactButton.innerHTML = "you contacted us"
    contactButton.style.backgroundColor = "red"
    contactButton.style.width = "400px"
}

var numberInput = document.getElementById("numberInput")
var numberInput2 = document.getElementById("numberInput2")
var operation = document.getElementById("operation")
function calculate(){
    // console.log("you pressed")
    // console.log(numberInput.value)
    // console.log(numberInput2.value)
    console.log(operation.value)
    var result = document.getElementById("result")
    if(operation.value === '+'){
    result.innerHTML = parseInt(numberInput.value)+parseInt(numberInput2.value)
    }
    else if(operation.value === '-'){
        result.innerHTML = parseInt(numberInput.value)-parseInt(numberInput2.value)
    }else if(operation.value === '*'){
        result.innerHTML = parseInt(numberInput.value)*parseInt(numberInput2.value)
    }
    else if(operation.value === '/'){
        result.innerHTML = parseInt(numberInput.value)/parseInt(numberInput2.value)
    }
}