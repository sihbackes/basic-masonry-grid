

async function getData() {
  const apiKey = "32769201-9cad72badaaf5bf0c85bbf23e"
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=cat&image_type=all&per_page=47`
    );
    const data = await response.json();
    let results = data.hits
    console.log(results)
    displayImagess(results);

  } catch (err) {
    console.error(err.message);
  }
}

async function displayImagess(results) {
  const container = document.getElementById("masonry-with-columns")
  results.forEach((image) => {
    container.innerHTML += `
    
       <img class="image" src="${image.webformatURL}">
     
    `;
  });
}



console.log(getData())