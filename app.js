let div=document.querySelector(".display");


let datedata=()=>{
    const time=new Date();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    let day=hour>12?"PM":"AM";
    let date=time.toDateString();
    div.innerHTML=`
        <div class="d">${date}</div>
        <div class="h">${hour}</div>:
        <div class="m">${min}</div>:
        <div class="s">${sec}</div> 
        <div class="ap">${day}</div>

    `;
       
    
};
setInterval(datedata,1000);
