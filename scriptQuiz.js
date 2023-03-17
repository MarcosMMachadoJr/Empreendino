const submitButton = document.getElementById("submit");
const questions = document.getElementsByClassName("question");
const correctAnswers = ["b", "a", "b", "c", "c", "c", "c", "c", "b"];

submitButton.addEventListener("click", function () {
  let numCorrect = 0;

  for (let i = 0; i < questions.length; i++) {
    const radios = questions[i].getElementsByTagName("input");

    let answered = false;

    for (let j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        answered = true;

        if (radios[j].value === correctAnswers[i]) {
          numCorrect++;
          radios[j].parentNode.classList.add("correct");
        } else {
          radios[j].parentNode.classList.add("incorrect");
        }

        break;
      }
    }

    if (!answered) {
      alert("Please answer all questions before submitting.");
      return;
    }
  }

  alert(`You got ${numCorrect} out of ${questions.length} correct!`);
});