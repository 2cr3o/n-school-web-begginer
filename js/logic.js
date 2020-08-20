// 年齢が 20 歳以上の時は成年、それ以外は未成年と出力する
let adult = (age)=>{
    if(age < 20){
        console.log('未成年');
    }else{
        console.log('成年');
    }
}
console.log(2 > 1); // true 2は1より大きい
console.log(2 >= 1); //true 2は1以上
console.log(2 < 1); //false 2は1未満
console.log(2 <= 1); //false 2は1以下
console.log(2 == 1); //false 2は1と等しい
console.log(2 != 1); //true 2は1と等しくない
console.log(2 === 1); //false 2は1と同値
console.log(2 !== 1); //true 2は1と同値ではない

let logic = (val)=>{
    if(val){
        console.log('真'); //valの値が真の時に実行する処理
    }else {
        console.log('偽'); //valの値が偽の時に実行する処理
    }
}

let member = (age, isMember, result)=>{
    if(age >= 60 && isMember){
        result = 'シニア会員割引の対象です';
    } else {
        result = 'シニア会員割引の対象ではありません';
    }
    return result;
}

/** 
 *  15 歳以下は 800 円、ポイント会員の場合には 1000 円、 そうではない場合には 1800 円の映画のチケットがあります。
    年齢と会員であるかどうかを変数に代入すると、チケットの値段を教えてくれるプログラムを書いてみましょう。
    なお、15 歳以下かつ会員の場合には、 800 円 になるものとします。
    例として、16 歳の会員のチケットの値段を出して下さい。

    ヒント： 習った else if を使うことができます

    問題文にある条件を整理すると、以下のようになります。
    15 歳以下なら会員であるかどうかを問わず 800 円
    16 歳以上の会員は 1000 円
    それ以外は 1800 円
 */

let pointMember = (age, isMem, price)=>{
    if(age <= 15){
        price = 800;
    }else if(isMem){
        price = 1000;
    }else {
        price = 1800;
    }
    return price;
}
