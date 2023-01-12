const skins = "https://valorant-api.com/v1/bundles";

async function getData(skins) {
  try {
    const response = await fetch(skins);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      data.data.forEach((bundle) => {
        document.getElementById("display").insertAdjacentHTML(
          "afterbegin",
          `<div class = "card> 
            <h2 class = "bundle">${bundle.displayName}</h2>
            <img class = "bundle-images" src = ${bundle.displayIcon}> 
            </div> `
        );
      });
      console.log("ok");
    }
  } catch (error) {
    console.log(error);
    console.log("error");
  }
}

getData(skins);
