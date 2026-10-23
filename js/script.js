let inputField = document.getElementById("inputField");
let showIcon = document.getElementById("show");
let hideIcon = document.getElementById("hide");

showIcon.addEventListener("click", ()=>{
    inputField.setAttribute("type", "text");

    showIcon.style.display = "none";
    hideIcon.style.display = "inline-block";
});

hideIcon.addEventListener("click", ()=>{
    inputField.setAttribute("type", "password");

    hideIcon.style.display = "none";
    showIcon.style.display = "inline-block";
});