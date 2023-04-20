document.querySelector(".button").addEventListener("click", getName)

function getName() {
    let userInput = document.querySelector(".userInput").value
    
    const url = `/api/${userInput}`

    fetch(`/api/${userInput}`) //or url//
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            document.querySelector("#name").innerText = data.name
            document.querySelector("#color").innerText = data.color
            document.querySelector("#personality").innerText = data.personality
            
            let img = document.querySelector("img")
            img.classList.remove("hidden")
            
            document.querySelector("img").src = data.image
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    
        document.querySelector(".userInput").value = ""

}
