// CALCULATOR PROGRAM


const display= document.getElementById('display')


// Append input to display
function appendToDisplay(inoput){


    if (inoput === '1/x'){
        display.value = (1/parseFloat(display.value)).toString()

    }else{
        display.value  += inoput;
    }
}


// clear display
function clearDisplay(){
    display.value = ''
}

// calculate result
function calculate(){
    try{  
        display.value = eval(display.value)
    }catch(err){
        display.value = 'Error'
    }

}

//back spase function
function backspace(){
    display.value = display.value.slice(0,-1)
}

// List for keybord input 
document.addEventListener('keydown', function(event){
    console.log(event.key)
    if((event.key >= '0' && event.key <= '9') ||  ['+', '-', '*', '/', '.', '%'].includes(event.key)){
        appendToDisplay(event.key)
    }else if (event.key == 'Backspace'){
        backspace()
    }else if (event.key === 'Enter'){
        calculate()
    }else if (event.key === 'Escape'){
        clearDisplay()
    }
})