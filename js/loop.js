/**
 * for文でループ処理を書こう
 * 
 * for(初期化式; 条件式; 変化式){
 *    条件式がtrueの間、繰り返し実行する処理
 * }
 * 
 * 初期化式・・・一番初めに実行される式でループ変数を定義する
 * 条件式・・・繰り返し実行するたびにtrue/falseを評価する
 * 変化式・・・繰り返すたびループ変数を加工する
 * 
*/

// 0 ~ 100000までループする処理
// for(let i = 0; i <= 100000; i++){
//     document.write(i + ' ');
// }

// 0 ~ 100000までのFizzBuzz
for(let i = 0; i <= 100000; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if(i % 5 === 0) {
        console.log('Buzz');
    } else if(i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}