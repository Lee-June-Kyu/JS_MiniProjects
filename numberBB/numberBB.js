// 1. 화면구성
// 게임 이름
let title = document.querySelector("h1");
title.textContent = "숫자 야구 게임⚾";

// 전송 폼
let form = document.querySelector("form");

// 입력창
let input = document.querySelector("input");

// 입력 버튼
let btn = document.querySelector("#inputButton");
btn.textContent = "입력";

// 리셋 버튼
let resetButton = document.querySelector("#resetButton");
resetButton.textContent = "리셋";

// 힌트 버튼
let hintButton = document.querySelector("#hintButton");
hintButton.textContent = "힌트";

// 결과조회
let result = document.querySelector("#result");

// 남은횟수
let times = document.querySelector("#times");

// 2.숫자뽑기 함수 선언부
// 이하 코드 작성
// 정답 숫자를 배열에 넣어주는 함수를 만든다.
function makeResultArray() {
  let resultArray = [];
  let randomNumber;
  // 길이가 4가 될때까지 중복되지 않는 난수를 배열에 넣는다.
  while (true) {
    randomNumber = Math.floor(Math.random() * 10);
    // 중복여부 확인 ( 없으면 넣는다 )
    if (!resultArray.includes(randomNumber)) {
      resultArray.push(randomNumber);
    }
    // 길이가 4일때 탈출조건 실행
    if (resultArray.length === 4) {
      break;
    }
  }
  // 길이가 4고 중복을 허용하지 않는 배열 생성
  return resultArray;
}

// 가점 1 : 제대로된 입력값인지 판별해주는 함수 만들기
function judgeInputValue(playerArray) {
  let playerSet = new Set(playerArray);

  // 4자리수가 아닌 경우
  if (playerArray.length !== 4) {
    return false;
  }
  // 중복이 있는 경우
  if (playerArray.length !== playerSet.size) {
    return false;
  }
  // 모든 요소가 숫자인지 아닌지
  for (let i = 0; i < playerArray.length; i++) {
    if (typeof playerArray[i] !== "number") {
      return false;
    }
  }

  return true;
}

// resultArray와 count는 버튼에 영향을 받지 않게 하기 위해서 밖에서 선언함
let resultArray = makeResultArray();
let count = 0;

// 3.참여자가 입력한 숫자 전송부
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // 이하 코드 작성
  // 참여자가 입력한 4개의 숫자를 배열로 만들고 결과를 출력한다.
  let playerNumber = input.value;
  let playerArray = [];
  let countStrike = 0;
  let countBall = 0;

  // 각 자리수를 배열에 넣어준다.
  for (let i = 0; i < 4; i++) {
    playerArray.push(playerNumber % 10);
    playerNumber = Math.floor(playerNumber / 10);
  }
  // 반대로 넣어줬으니까 reverse를 해준다.
  playerArray.reverse();

  // input값이 제대로 됬는지 아닌지 확인해준다.
  if (judgeInputValue(playerArray) === true) {
    // ball 카운트 구하기
    // 플레이어의 숫자가 정답 배열에 있다면 ballCount를 늘려준다.
    for (let i = 0; i < playerArray.length; i++) {
      if (resultArray.includes(playerArray[i])) {
        countBall++;
      }
    }
    // strike 카운트 구하기 (ball의 갯수랑 strike개수랑 겹쳐서 ball을 1개씩 빼줘야함)
    // 자리수와 숫자가 일치하면 countStrike를 늘려준다.
    for (let i = 0; i < playerArray.length; i++) {
      if (resultArray[i] === playerArray[i]) {
        countBall--;
        countStrike++;
      }
    }
    // 한번 버튼을 누를때 마다 count를 늘려준다.
    count++;

    // 10번째에서 정답이 나올수 있기 때문에 countStrike !== 4 조건을 넣어준다.
    if (count >= 10 && countStrike !== 4) {
      result.textContent = `횟수 초과!! 정답은 ${resultArray.join("")}`;
      times.textContent = "\u00A0";
      // 초기화
      count = 0;
      resultArray = makeResultArray();
    } else {
      if (countStrike === 4) {
        result.textContent = "홈런!!";
        // 초기화
        times.textContent = "\u00A0";
        count = 0;
        resultArray = makeResultArray();
      } else {
        result.textContent = `${countStrike}스트라이크, ${countBall}볼 입니다`;
        times.textContent = `남은횟수는 ${10 - count}입니다.`;
      }
    }
  } else {
    result.textContent = "잘못된 값을 입력하였습니다. 다시 입력해주세요.";
    times.textContent = `남은횟수는 ${10 - count}입니다.`;
  }

  // 간단한 확인
  // console.log("입력 버튼 누를때마다 들어오는 구역");
  // //result.textContent = `${countStrike}스트라이크, ${countBall}볼 입니다`;
  // console.log(input.value); // 입력된 값 출력
  // console.log(playerArray);
  // console.log(resultArray);
  // console.log(count);
});

// 리셋버튼 실행하기
// reset버튼 입력시 초기화 되었다고 나오게 한다.
resetButton.addEventListener("click", function (e) {
  e.preventDefault();
  count = 0;
  resultArray = makeResultArray();
  result.textContent = "게임이 초기화 되었습니다.";
  times.textContent = "\u00A0";
});

// 힌트버튼 실행하기
hintButton.addEventListener("click", function (e) {
  e.preventDefault();
  let randomAddNumber;
  let hintArray;
  while (true) {
    randomAddNumber = Math.floor(Math.random() * 10);
    if (!resultArray.includes(randomAddNumber)) {
      hintArray = [randomAddNumber].concat(resultArray);
      break;
    }
  }

  hintArray.sort((a, b) => b - a);

  console.log(hintArray, resultArray);
  result.textContent = `힌트는 ${hintArray.join("")}입니다.`;
  times.textContent = "\u00A0";
});
