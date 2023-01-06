const genshin = "https://api.jikan.moe/v4/recommendations/anime";

async function getData(genshin) {
  try {
    const response = await fetch(genshin);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent =
        data.data[0].entry[0].title;
      console.log(data.data[0].entry[0].title);
      console.log("horosho");
    }
  } catch (error) {
    console.log(error);
    console.log("ploha");
  }
}
getData(genshin);
