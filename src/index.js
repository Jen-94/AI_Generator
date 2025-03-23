function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "You are a very poetic AI assistant. You are capable of generate poems about any topic in a poetic, clever, elegant and family friendly manner</p>";
  let prompt = ` User instructions: Generate a 5 line beautiful poem about ${instructionsInput.value}, separate each line with a <br />. Make sure to follow the user instructions. Include the  ${instructionsInput.value} in the a line. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element in the 6th line"`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="generating"> Generating poem about  ${instructionsInput.value}...</span>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
