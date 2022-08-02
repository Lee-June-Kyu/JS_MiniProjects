// 문제 배열
var POSSIBLE_WORDS = [
  "obdurate",
  "verisimilitude",
  "defenestrate",
  "obsequious",
  "dissonant",
  "today",
  "idempotent",
];

let resultString;
let count = 10;
let playerString = "";
let answerString = "";
let guessStr = "";

// 게임시작 버튼 클릭시 실행될 함수
function newGame() {
  let startBtn = document.getElementById("startBtn");
  let guessBtn = document.getElementById("guessBtn");
  let answerArea = document.getElementById("clue");
  let guessArea = document.getElementById("guessArea");

  // 게임 시작 버튼은 못 누르고 입력 버튼은 누를수 있게 바꿔준다.
  startBtn.disabled = "disabled";
  guessBtn.disabled = false;

  // 게임 시작
  guessArea.textContent = `게임시작!!!`;
  countArea.textContent = "";

  // 랜덤한 String 받아온다.
  let indexNumber = Math.floor(Math.random() * POSSIBLE_WORDS.length);
  resultString = POSSIBLE_WORDS[indexNumber];

  for (let i = 0; i < resultString.length; i++) {
    playerString += "_";
  }
  console.log(resultString);

  answerString = playerString.split("").join(" ");

  answerArea.textContent = `${answerString}`;
}

// // 철자와 밑줄을 계산하고 게임 결과를 나타낼 함수
// function updatePage() {
//   var guessArea = document.getElementById("guessArea");
// }

// 입력 버튼 클릭시 실행될 함수
function guessLetter() {
  var input = document.getElementById("inputVal");
  // var clue = document.getElementById("clue");
  let answerArea = document.getElementById("clue");
  let guessArea = document.getElementById("guessArea");
  var countArea = document.getElementById("countArea");
  let str = input.value;

  for (let i = 0; i < resultString.length; i++) {
    if (str == resultString[i]) {
      playerString =
        playerString.substring(0, i) + str + playerString.substring(i + 1);
    }
  }
  answerString = playerString.split("").join(" ");
  if (playerString.includes(str)) {
    input.value = null;
  } else {
    count--;
  }

  answerArea.textContent = `${answerString}`;
  if (!playerString.includes(str) || !guessStr.includes(str)) {
    guessStr += str;
  }

  if (playerString == resultString) {
    guessArea.textContent = `성공!`;
    countArea.textContent = ` `;
    startBtn.disabled = false;
    guessBtn.disabled = true;
    count = 10;
    playerString = "";
    answerString = "";
    guessStr = "";
    input.value = null;
  } else {
    if (count > 0) {
      guessArea.textContent = `내가 입력한 값들 : ${guessStr}`;
      countArea.textContent = `남은횟수 : ${count}`;
    } else {
      guessArea.textContent = `실패 ㅜㅜ`;
      countArea.textContent = `정답은 ${resultString}입니다.`;
      startBtn.disabled = false;
      guessBtn.disabled = true;
      count = 10;
      playerString = "";
      answerString = "";
      guessStr = "";
      input.value = null;
    }
  }
}
