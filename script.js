let countValue=document.querySelector('#counter');
function decrement(){
    let value=parseInt(countValue.textContent);
    value-=1;
    countValue.textContent=value;
};
function increment(){
    let value=parseInt(countValue.textContent);
    value+=1;
    countValue.textContent=value;
};
