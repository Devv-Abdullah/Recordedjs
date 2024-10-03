// js part2

/*var contactButton = document.getElementById('contactButton')
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
}*/


// event

var selectedOperation = document.getElementById('selectedOperation')
/*function myFunction(){
    console.log("Hello world!")
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = document.getElementById('result');
    var sumation = parseInt(num1) + parseInt(num2);
    alert('sumation :'+ sumation);
    console.log(sumation);
    result.innerHTML = sumation;
}*/

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(selectedOperation.value);
    // myFunction();
    console.log("Hello world!")
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = document.getElementById('result');

    switch(selectedOperation.value){
        case '+':
            var sumation = parseInt(num1) + parseInt(num2);
            break;
        case '-':
            var sumation = parseInt(num1) - parseInt(num2);
            break;
        case '*':
            var sumation = parseInt(num1) * parseInt(num2);
            break;
        case '/':
            var sumation = parseInt(num1) / parseInt(num2);
            break;
        default:
            console.log("wrong")
            break;
    }
    // var sumation = parseInt(num1) + parseInt(num2);
    alert('sumation is :'+ sumation);
    console.log(sumation);
    result.innerHTML = sumation;
})

// var navBarBackground = document.getElementsByClassName('bg-light');
// console.log(navBarBackground);

var navbar = document.getElementById('navbar');
console.log(navbar);
navbar.style.backgroundColor = "red";