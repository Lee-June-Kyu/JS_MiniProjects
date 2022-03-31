const lottoNumbers = document.querySelector(".lottoNumber");
const selectButton = document.querySelector(".select");
const resetButton = document.querySelector(".reset");
let numberList = [];

function getRandomNumber(){
    let n = Math.floor(Math.random()*44)+1;
    return n;
}

selectButton.addEventListener( 'click' ,function(){
    for(let i = 0 ; i < 6 ; i++){
        numberList.push(getRandomNumber());
    }
    console.log(numberList);
    selectButton.textContent= "재추첨";
    lottoNumbers.textContent= numberList.splice(0,6)+" 입니다!!!";
});

resetButton.addEventListener('click', function(){
    selectButton.textContent= "추첨";
    lottoNumbers.textContent="이번주 추첨 번호는 !";
})