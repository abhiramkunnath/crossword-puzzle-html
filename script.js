squares = document.querySelectorAll(".char");

squares.forEach((square, index) => {
  if (square.classList.contains("char")) {
    charInput = document.createElement("input");
    charInput.setAttribute("class", "char-input");
    charInput.setAttribute("id", index);
    charInput.setAttribute("maxLength", 1);
    square.appendChild(charInput);
    charInput.setAttribute("onkeydown", "return /[a-z]/i.test(event.key)");
    charInput.onpaste = (e) => e.preventDefault();
  }
});

let score = 0;
scoreCounter = document.getElementById("score");

const updateScore = (score) => {
  scoreCounter.textContent = score;
};

updateScore(score);

toastNotification = document.getElementById("toast");

const updateToast = (type, message) => {
  if (type == "success") {
    toastNotification.style.backgroundColor = "#22DD55";
  }
  if (type == "warning") {
    toastNotification.style.backgroundColor = "#FF8888";
  }
  toastNotification.textContent = message;
  toastNotification.classList.add("show")
  setTimeout(() => { toastNotification.classList.remove("show"); }, 3000);
};

charInputs = document.querySelectorAll(".char-input");
let inputAnswers = [];
const ANSWERS = [
  "0,K",
  "1,O",
  "2,N",
  "3,T",
  "4,P",
  "5,H",
  "6,I",
  "7,S",
  "8,H",
  "9,I",
  "10,N",
  "11,G",
  "12,F",
  "13,I",
  "14,E",
  "15,L",
  "16,D",
  "17,B",
  "18,N",
  "19,K",
  "20,I",
  "21,B",
  "22,T",
  "23,D",
  "24,E",
  "25,B",
  "26,U",
  "27,G",
  "28,G",
  "29,I",
  "30,N",
  "31,G",
  "32,L",
  "33,E",
  "34,R",
  "35,O",
  "36,E",
  "37,R",
  "38,B",
  "39,A",
  "40,B",
  "41,L",
  "42,O",
  "43,G",
  "44,O",
  "45,P",
  "46,T",
  "47,I",
  "48,C",
  "49,A",
  "50,L",
  "51,G",
  "52,R",
  "53,N",
  "54,A",
  "55,W",
  "56,L",
  "57,R",
  "58,E",
  "59,A",
  "60,L",
  "61,M",
  "62,E",
  "63,A",
  "64,M",
  "65,O",
  "66,D",
  "67,E",
  "68,M",
  "69,T",
  "70,R",
  "71,R",
  "72,O",
  "73,E",
  "74,Y",
  "75,I",
  "76,B",
  "77,M",
  "78,S",
  "79,R",
  "80,U",
  "81,A",
  "82,S",
  "83,I",
  "84,C",
];

const checkAnswer = () => {
  charInputs.forEach((input) => {
    inputAnswers.push(`${input.id},${input.value.toUpperCase()}`);
  });
  const rightAnswers = inputAnswers.filter((element) =>
    ANSWERS.includes(element)
  );
  console.log(inputAnswers, ANSWERS, rightAnswers);
  updateScore(rightAnswers.length);
  if (rightAnswers.length == ANSWERS.length) {
    updateToast("success", "You Solved The Puzzle.");
  } else {
    updateToast("warning", "Keep Trying.");
  }
  inputAnswers = [];
};

const clearPuzzle = () => {
    let text = "Are you sure!.";
    if (confirm(text) == true) {
      charInputs.forEach((input) => {
        input.value = "";
      });
      updateScore(0);
    }
};

// const fillPuzzle = () => {
//   charInputs.forEach((input, index) => {
//     input.value = ANSWERS[index].replace(/[^a-z]/gi, "");
//   });
// };

document.getElementById("clearBtn").addEventListener("click", clearPuzzle);
document.getElementById("checkBtn").addEventListener("click", checkAnswer);
