fetch("http://api.icndb.com/jokes/random/5000")
    .then(response =>response.json())
    .then(data => {});

    // Async Await
    async function getJokes(){       //For using async, it behaves as Promises
        let response = await fetch("http://api.icndb.com/jokes/random/5000");
        let data = await response.json();
        return data;
    }
    console.log(getJokes());
