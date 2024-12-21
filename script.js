
let APIKEY = "N1YBVafhldgzMDK1pkQFq4q7ut5BBrEZ";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault(); // to stop the page to reload
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=7&q=`;
        let str = document.getElementById("search").value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then( content => {
            // data, pagination, meta
            console.log(content.data)
            console.log('META', content.meta)
            let fig = document.createElement('figure');
            let img = document.createElement('img');
            let fc = document.createElement('figcaption');
            img.src = content.data[0].images.downsized.url;
            img.alt = content.data[0].title;
            fc.textContent = content.data[0].title;
            fig.appendChild(img);
            fig.appendChild(fc);
            let out = document.querySelector('.gif-container');
            out.insertAdjacentElement('afterbegin', fig);
        })
        .catch(error => console.error("Error:", error));
    });
 }