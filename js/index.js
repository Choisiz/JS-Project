const title =document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass = title.className;
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
        console.log("1:"+title.className);
    }else{
        title.classList.add(CLICKED_CLASS);
        console.log("2:"+title.className);
    }
}

function init(){
    title.addEventListener("mouseenter",handleClick);
}

init();
