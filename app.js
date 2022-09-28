function BoredBotApi() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('placeholder').innerHTML = data.activity
        })
}


document.getElementById('btn').addEventListener('click', BoredBotApi)

