let output = document.querySelector("#outputText");
let input = document.querySelector("#textInput");
let submitButton = document.querySelector(".customButton");
submitButton.addEventListener("click", submit);

function submit() {
  let text = input.value;
  if (!text) {
    alert("Enter some text!");
    return;
  } else getTranslation(text);
}
function getTranslation(text) {
  fetch(`https://api.funtranslations.com/translate/minion.json?text=${text}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      output.innerHTML = json?.contents?.translated;
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
      alert("looks like there is some issue with our server");
    });
}
