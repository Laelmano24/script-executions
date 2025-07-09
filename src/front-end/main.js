const mainContainer = document.querySelector(".main-container")
const executionsCount = document.getElementById("executions")

async function showExecutions() {
    try {
        const host = window.location.origin
        const response = await fetch(host + "/show-views")
        const data = await response.json()
        
        if (data.status == 500) {
            console.log("An error occurred on the server")
            return
        }

        executionsCount.textContent = data.views

    } catch (err) {
        console.log("Error retrieving data\n" + err)
    }
}

showExecutions()

VanillaTilt.init(mainContainer, {
    max: 25,
    speed: 100,
    glare: false,
    "max-glare": 0.2
})
