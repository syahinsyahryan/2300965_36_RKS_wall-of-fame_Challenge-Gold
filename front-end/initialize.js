const wallWrapper = document.querySelector("#wall");
wallWrapper.innerHTML = `<h1>Loading....</h1>`;
const initializeWall = async () => {
  const resp = await fetch("http://localhost:9000/api/v1/home/feed/wall");
  const jsonResp = await resp.json();
  const { feeds } = jsonResp.data;

  wallWrapper.innerHTML = "";
  console.log(feeds);
  feeds.forEach((element) => {
    const scribeInfo = generatorWall(element.username, element.scribe);

    wallWrapper.innerHTML += scribeInfo;
  });
};

const generatorWall = (username, scribe) => `  
<div class="card col p-3 card-section" id="${username}">
  <div class="card-body">            
    <p class="card-text">
      ${scribe}
    </p>

    <p class="card-text">${username} sribe this</p>
  </div>
</div>`;

// interest wrapper start
const fameWrapper = document.querySelector("#fame");
fameWrapper.innerHTML = `<h1>Loading....</h1>`;
const initializeFame = async () => {
  const resp = await fetch("http://localhost:9000/api/v1/home/feed/wall");
  const jsonResp = await resp.json();
  const { feeds } = jsonResp.data;

  fameWrapper.innerHTML = "";
  feeds.forEach((element) => {
    const scribeInfo = generatorFame(element.username, element.scribe);

    fameWrapper.innerHTML += scribeInfo;
  });
};

const generatorFame = (username, scribe) => `  
<div class="card col p-3 card-section" id="sribe_${username}">
  <div class="card-body">
      <p class="card-text">
        ${scribe}
      </p>

      <p class="card-text">${username} scribe this</p>
    </div>
  </div>`;
// interest wrapper end
