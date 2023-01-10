const genshin = "https://api.genshin.dev/characters/";

async function getData(genshin) {
  try {
    const response = await fetch(genshin);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      data.forEach((name) => {
        document
          .getElementById("api-response")
          .insertAdjacentHTML(
            "afterbegin",
            `<div class = "card> <h2 class = "name">${name}</h2>`
          );
        console.log(name);
      });
      console.log(data);
      console.log("ok");
    }
  } catch (error) {
    console.log(error);
    console.log("error");
  }
}

getData(genshin);
