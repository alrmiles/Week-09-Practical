const wrapper = document.querySelector('#wrapper');

const nameInput=document.getElementById("name");
const ageInput=document.getElementById("age");
const replyBox=document.getElementById("reply")
const submitButton=document.getElementById("submit")

submitButton.addEventListener("click", function(){
    const customerName=nameInput.value;
    const age=ageInput.value;

    if(age<=3){
        replyBox.innerHTML=`Howdy ${customerName}! Children aged 3 and younger are free!`
        replyBox.style.color="green";
        console.log(replyBox.textContent)


    }if(age>=4){
        replyBox.innerHTML=`Howdy ${customerName}! Your ticket is a whopping $10!`
        replyBox.style.color="teal";
    }if(age>=13){
        replyBox.innerHTML=`Howdy ${customerName}! Your ticket is $20!`
        replyBox.style.color="teal";
    }if(age>=64){
        replyBox.innerHTML=`Howdy ${customerName}! Your senior discount gets you a $12 ticket!`
        replyBox.style.color="green";
    }
    if(age>=130){
        replyBox.innerHTML=`Hey ${customerName}, did you type that in right? Are you still alive?`
        replyBox.style.color="coral";
    }

})