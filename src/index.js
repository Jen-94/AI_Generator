function generatePoem(event) {
  event.preventDefault();

  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "You are a very poetic AI assistant. You are capable of generate poems about any topic in a poetic, clever, elegant and family friendly manner</p>";
  let prompt =
    "Please generate a beautifil poem the way Pablo Neruda would do it";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  new Typewriter("#poem", {
    strings: "The poem goes here",
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
