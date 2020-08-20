function logDate(){
    console.log(new Date());
}

let square = (n)=>{
    return n * n;
}

let myBirthTime = new Date(1997, 1, 7, 0, 0, 0); //自分が生まれた時刻

let updateParagraph = ()=>{
    let now = new Date(); // 現在時刻を変数nowに代入
    let seconds = (now.getTime()- myBirthTime.getTime()) / 1000; // (現在時刻 - 自分が生まれた時刻) / 1000
    document.getElementById('birth-time').innerHTML = 
    `生まれてから${seconds}秒経過`; //pタグ(birth-time)のテキストを書く
}
setInterval(updateParagraph, 50); // 50ms毎にupdateParagraphを呼び出す

let circle = (r)=>{
    return r * r * 3.14; //なるべく戻り値となる値は変数に代入すると良い
}
console.log(circle(5));
console.log(circle(10));
console.log(circle(15));
