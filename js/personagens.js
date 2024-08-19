const url = "https://everybody-hates-chris.p.rapidapi.com/"

async function getAllPosts() {

    const response = await fetch(url)

    console.log(response);

    const data = await response.json();

    console.log(data)
}

getAllPosts()
