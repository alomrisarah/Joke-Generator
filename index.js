document.getElementById("getJoke").addEventListener("click", fetchJoke)

async function fetchJoke() {
 try {
  const resp = await fetch("https://api.sampleapis.com/jokes/goodJokes")
  const data = await resp.json()
  const randomIndex = Math.floor(Math.random() * data.length)
  const joke = data[randomIndex]

  document.getElementById("joke").innerHTML = `
            <strong>${joke.setup}</strong><br>
            <em>${joke.punchline}</em>
        `
 } catch (error) {
  console.error("Error fetching joke:", error)
  document.getElementById("joke").innerHTML = "Oops! Something went wrong. Please try again."
 }
}
