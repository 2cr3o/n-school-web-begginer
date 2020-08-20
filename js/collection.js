//配列をつくる
let classes = ['A組', 'B組', 'C組', 'D組'];
let numbers = [312, 493, 537, 698];

// <p>○年×組</p>という文字列の組み合わせを出力する
for(let grade = 1; grade < 7; grade++){ // ○年
    for(let i = 0; i < classes.length; i++){ // ×組
        document.write(`<p>${grade}年${classes[i]}</p>`); //○年×組
    }
}

//あ行とか行の文字を使って二文字の組を出力する
let ak = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
for(let first = 0; first < ak.length; first++){
    for(let second = 0; second < ak.length; second++){
        document.write(`${ak[first]}${ak[second]}<br>`);
    }
}