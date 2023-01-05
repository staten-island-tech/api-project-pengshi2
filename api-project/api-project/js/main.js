const genshin = "https://api.genshin.dev/";

async function getData(genshin) {
  try {
    const response = await fetch(genshin);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.content;
      console.log("horosho");
    }
  } catch (error) {
    console.log(error);
    console.log("ploha");
  }
}
getData(genshin);
