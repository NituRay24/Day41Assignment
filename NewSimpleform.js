const text =document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input',function() {
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
     if(nameRegex.text(text.value))
     textError.textContent="";
     else textError.textContent="name is INcorrect"

});
const salary=document.querySelector('#salary');
const output= document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){output.textContent=salary.value;}
);