const subMenus = [...document.querySelectorAll(".sub-menu")];
const arrowButtons = [...document.querySelectorAll(".dropdown-toggle")];



function handleClick(e){
    
    console.log(e.target.classList[1]);

    subMenus.forEach(subMenu => {
        //console.log(subMenu);
        let secondTargetClass = e.target.classList[1];
        let secondSubMenuClass = subMenu.classList[1];
        if(secondTargetClass === secondSubMenuClass){
            console.log([secondTargetClass, secondSubMenuClass]);
        }
        
        if(subMenu.classList[2] === "toggle-open" && e.target.classList[1] === subMenu.classList[1]){
            subMenu.classList.remove("toggle-open");
        } else if(e.target.classList[1] === subMenu.classList[1]){
            subMenu.classList.add("toggle-open");
        }
        
    })
}

arrowButtons.forEach(arrowButton => arrowButton.addEventListener('click', handleClick));