const marvel = {
  render: () => {
    const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8bd4274649a997ad75871afc866acc75&hash=55c4dfe45fa2a68689f4954ad1d3685d';
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="col-md-4" id="marvel">
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title" id="texto">${hero.name}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML;
      })
  }
};
marvel.render();