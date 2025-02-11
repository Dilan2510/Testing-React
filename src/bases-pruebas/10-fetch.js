const apiKey = "RmzZXB2Dh0PM6j1k6d7pRmitXSJYIaIh";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

peticion
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
