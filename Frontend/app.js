fetch("http://localhost:8005/properties")
  .then(response => response.json())
  .then(data => {
    let propertiesDiv = document.getElementById("properties");
    data.forEach(property => {
      let div = document.createElement("div");
      div.innerHTML = `<h2>${property.name}</h2><p>${property.description}</p>`;
      propertiesDiv.appendChild(div);
    });
  })
  .catch(error => console.log(error));
