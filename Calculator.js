var display = document.querySelector('.display');
var keys = document.querySelectorAll('.row');

keys.forEach(function(key) {
    key.addEventListener('click', handle);
});

function handle(e) {
    var value = e.target.getAttribute('data-value');

    if(value === 'AC'){
        display.value = ''
    }
    else if(value === 'DE'){
        display.value = display.value.slice(0,-1)
    }
    else if(value === '=')
       {
        try{
            display.value = eval(display.value)
        }catch{
            display.value = 'Error'
        }
       }
       else{
        display.value +=value
       }
}