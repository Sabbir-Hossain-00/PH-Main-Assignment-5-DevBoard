
document.getElementById("discover").addEventListener("click",()=>{
   window.location.href = "blog.html"
});



document.getElementById("color-change-btn").addEventListener("click",()=>{

    const hexColor = "abcdef0123456789";

    let color = "#";

    for(let i = 0 ; i <6 ; i++){
        color = color + hexColor[Math.floor(Math.random ()* 16)];
    }

    document.getElementById("body").style.backgroundColor = `${color}`;
});






const completedBtns = document.querySelectorAll(".completed");
const history = document.getElementById("history");




const showHistory = (cardTitle)=>{
    const div = document.createElement("div");
    div.innerHTML = `
    <p >You have Complete The Task ${cardTitle} at 12:48:15 PM</p>
    `;
    history.append(div);
}




let finalTask = 6 ;
const decrementTaskAssigned = ()=>{
    if(finalTask <= 0){
        return false ;
    }else{
        const taskAssigned = document.getElementById("task-assigned") ;
        finalTask = finalTask - 1;
        taskAssigned.innerText = `0${finalTask}`; 
    } 
}




let checkList = 25 ;
const incrementCheckbox = ()=>{
    if(checkList >= 31){
        return false ;
    }else{
        const checkBox = document.getElementById("check-box");
        checkList = checkList + 1 ;
        checkBox.innerText = checkList ;
    }
   
}



const disableBtn = (thisBtn)=>{
    for(let btn of completedBtns){
        thisBtn.disabled = true ;
        thisBtn.style.backgroundColor = "#3752FD";
        thisBtn.style.opacity = "20%";
    }
}


let count = 0 ;
const allTaskCompletedAlert = ()=>{
    count ++ ;
    if(count === 6){
        alert("all task is completed");
    }
}


for(let btn of completedBtns){

    btn.addEventListener("click",(event)=>{
        alert("this task is completed");
        const cardTitle = event.target.parentElement.previousSibling.parentElement.firstChild.nextSibling.nextSibling.nextSibling.innerText ;

        const thisBtn = event.target ;

        showHistory(cardTitle);
        decrementTaskAssigned();
        incrementCheckbox();
        disableBtn(thisBtn);
        allTaskCompletedAlert();
        
    });
    
}


document.getElementById("history-btn").addEventListener("click",()=>{
    history.innerHTML = "";
});
