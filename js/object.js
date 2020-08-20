let student = {
    name: '山田太郎',
    age: '15'
};

console.log(
    student,
    student.name,
    student.age
);

student.age = 18; //studentオブジェクトのageプロパティの値を更新する
console.log(student.age);

let counter = {
    num: 0,
    point: ()=>{
        counter.num++;
        console.log(counter.num)
    }
}

for(let i = 0; i < 100; i++){
    counter.point();   
}

let game = {
    startTime: null,
    displayArea: document.getElementById('display-area'),
    start: ()=> {
        //TODO スタート処理
        game.startTime = Date.now(); //現在のmsを取得し、変数startTimeに代入する
        console.log('スタートしました');
        //TODO ストップ処理
        document.body.onkeydown = game.stop;
    },
    stop: ()=> {
        console.log('ストップしました');
        let currentTime = Date.now(), //ストップした時刻msを取得しcurrentTimeに代入する
            seconds = (currentTime - game.startTime) / 1000; // (ストップ時刻ms - スタート時刻ms) / 1000で差分の時間sを計算しsecondsに代入する
            if(seconds >= 9.5 && seconds <= 10.5){
                game.displayArea.innerText = `${seconds}秒でした。しゅごい。`;
            } else {
                game.displayArea.innerText = `${seconds}秒でした。残念。`;
            }
    }
}

if(confirm('OKを押して10秒だと思ったら何かキーを推してください')){
    game.start();
}