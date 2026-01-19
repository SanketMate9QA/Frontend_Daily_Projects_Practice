const btnEl=document.querySelector(".btn")

const inputEl = document.getElementById("input")

const copyIconEl = document.querySelector(".fa-copy")

const alertContainerEl = document.querySelector(".alert-container")

btnEl.addEventListener("click",()=>{
    createPassword()
})

function createPassword() {
    const chars='0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const passwordLenght =12;
    let password =""
    /* FIX: Changed 'passwordLenght.length' to 'passwordLenght' - numbers don't have a length property */
    for (let index = 0; index < passwordLenght; index++) {
        const randomNum = Math.floor(Math.random()*chars.length)
        password += chars.substring(randomNum,randomNum+1);
    }
    inputEl.value=password;
    alertContainerEl.innerText = password + " copied"
}

copyIconEl.addEventListener("click",()=>
{
    if (inputEl.value) {
        copyPassword()
        alertContainerEl.classList.remove("active");
        setTimeout(() => {
            alertContainerEl.classList.add("active");
        }, 2000);
    }
    
})

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0,9999);// for the mobile support 
    navigator.clipboard.writeText(inputEl.value);
    
}


