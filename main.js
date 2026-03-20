const myStyles = {
    "m-4": "margin: 4px",
    "bg-red": "background-color: red",
    "pt-8": "padding-top: 32px"
}

const allElements = document.body.querySelectorAll("*")
allElements.forEach(element =>{
    const m = "margin"
    // element.style[m] = "4px"
    element.classList
        .forEach(cls => {
            console.log(myStyles[cls]);
            const property = myStyles[cls].split(":")[0];
            const value = myStyles[cls].split(":")[1];
            element.style[property] = value;
        })
})
