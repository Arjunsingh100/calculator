(function(){
let screen=document.querySelector('.screen');
let buttons=document.querySelectorAll('.btn');
let equal=document.querySelector('.btn-green');
let clear=document.querySelector('.btn-red');
 
buttons.forEach((button)=>{
button.addEventListener('click',function (e){
    let value=e.target.dataset.num;
    screen.value+=value;
})
});
equal.addEventListener('click',(e)=>{
    if(screen.value === ''){
        screen.value = "Please enter any number";
    }
    else{
        let answer = eval(screen.value);
        screen.value = answer;
    }
})
clear.addEventListener('click',()=>{
    screen.value="";
})
})();