function loadArt() {
    new Promise(function (resolve, reject) {


            fetch(`https://api.shutterstock.com/v2/images/search`, {
                    method: 'get',
                    headers: {
                        "Authorization": "Bearer v2/OThsdHdSQ2dLY01iVmhzNndYOHdmUGg5OVJBRXdYdTYvMzQ1NTU2ODk5L2N1c3RvbWVyLzQvN0w2YlZ6SWRuWWdhUDNGdU1Zb3N6dlNaTGp6a1JOdm9ZT3F6ODdNNFhCdHVfMzV0SE9PMzRkeUJhTlFSRW5LSGNVUWxRSmRTZnFWa2lrMC1rcWkzN0tCV2UzTmZzRXdMMVNCb0t1dU5JdVVGTlBGQWZqeGQ1blRpR2hEdHhhNXlZb19fVHA5bGMwVkxzT0VEcm5pd251c2pycnk2OU5EU0drQlNyYzNNZ0pHMExtdVF4NmxHbkdjb0U4UUVHOXFGQVA1MjBJQ1l4a2VtSWF5TFV6RGxLZy9hYWdVd0xINTI5bUMxMjkzNkhUeWZn"
                    },
                })
                .then(function (response) {
                    if (response.status === 404) {
                        reject("User Not Found");
                    } else {
                        return response.json();
                    }
                })
                .then((data) => resolve(data));
        })
        .then((data) => {
            let newDiv = document.createElement("div");
            newDiv.classList.add("new-image")
            let image = document.createElement('img')
            let url = data.data[0].assets.preview.url
            // image.setAttribute('src', `${url}`)
            image.src = url
            newDiv.innerHTML = image
            console.log(image)
            let body = document.getElementsByClassName('main-content')[0]
            body.append(newDiv)

        })
        .catch((error) => {
            console.log(error);
        });
}