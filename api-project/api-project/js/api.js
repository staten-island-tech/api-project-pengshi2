const genshin = "https://valorant-api.com/v1/bundles";

async function getData(genshin) {
  try {
    const response = await fetch(genshin);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      data.data.forEach((object) => {
        document
          .getElementById("api-response")
          .insertAdjacentHTML(
            "afterbegin",
            `<div class = "card> <h2 class = "bundle">${data.data.displayName}</h2>`
          );
      });
      console.log("ok");
    }
  } catch (error) {
    console.log(error);
    console.log("error");
  }
}

getData(genshin);
