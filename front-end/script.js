const wallWrapper = document.querySelector("#wall");
wallWrapper.innerHTML = `<h1>Loading....</h1>`;
// Function to fetc and display data
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
<div class="card col p-3 card-section position-relative" id="${username}">
  
  <div class="position-absolute top-0 end-0">
  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#edit-modal">
  <i class="bi bi-pencil card-icon-title"></i> 
  </button>    
  <button class="btn" onclick="handleDelete('${username}')">
      <i class="bi bi-trash"></i>
    </button>       
  </div>  
  <p class="card-text">
      ${scribe}
    </p>

    <p class="card-text"><b>${username}</b> scribe this</p>
    
  
</div>`;

// function to submit form
const handleSend = async () => {
  console.log("handle send berhasil");
  const username = document.getElementById("username-input");
  const scribeInput = document.getElementById("scribe-input");
  const reqBody = {
    username: username.value,
    scribe: scribeInput.value,
  };
  console.log({ scribeInput });
  console.log(username);
  const body = JSON.stringify(reqBody);

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers,
    body,
  };

  const resp = await fetch(
    "http://localhost:9000/api/v1/home/feed/add",
    requestOptions
  );
  console.log({ resp });
  const respJson = await resp.json();

  console.log(respJson.data);
  const contentWrapper = document.querySelector("#content");

  contentWrapper.innerHTML += generatorHtml(
    respJson.data.name,
    respJson.data.link
  );
};

// function to delete post
async function handleDelete(username) {
  try {
    const response = await fetch(
      `http://localhost:9000/api/v1/home/feed/delete/${username}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      initializeWall();
    }
  } catch (error) {
    console.error("Error deleting student:", error);
  }
}

// function to edit post
async function handleEdit(username) {
  const newUsernameInput = document.getElementById("edit-username-input");
  const newScribeInput = document.getElementById("edit-scribe-input");

  const newUsername = newUsernameInput.value;
  const newScribe = newScribeInput.value;

  console.log(newUsername);
  if (newUsername && newScribe) {
    try {
      const response = await fetch(
        `http://localhost:9000/api/v1/home/feed/edit/${username}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: newUsername,
            scribe: newScribe,
          }),
        }
      );
      console.log(username.value);
      if (response.ok) {
        initializeWall();
      }
    } catch (error) {
      console.error("Error editing student:", error);
    }
  }
}
