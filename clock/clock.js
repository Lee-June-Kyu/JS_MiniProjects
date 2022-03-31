const now_time = document.querySelector("#timeSpace");


function timeFlow(){
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth()+1;
    const date = now.getDate();
    const hour = now.getHours();
    const minu = now.getMinutes();
    const seco = now.getSeconds();

    const nowTime = `${year}년 ${month}월 ${date}일 ${hour}시 ${minu}분 ${seco}초`;

    now_time.textContent = nowTime;
};

timeFlow();
setInterval(timeFlow,1000);