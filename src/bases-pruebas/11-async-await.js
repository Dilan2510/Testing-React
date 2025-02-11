export const getImage = async () => {
  try {
    const apiKey = "RmzZXB2Dh0PM6j1k6d7pRmitXSJYIaIh";
    const respuesta = await fetch(
      `https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`
    );
    const data = await respuesta.json();
    const { url } = data.data.images.original;
    return url;
  } catch (error) {
    //manejo del error
    console.error(error);
    return "No se encontro la imagen";
  }
};

getImage();
