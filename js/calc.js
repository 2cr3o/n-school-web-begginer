let x = 10;
console.log(x);
x = 'JavaScriptの変数';
console.log(x);
x = 34;
y = -0.25 * x + 14.1;
console.log(x, y);

//三角形の計算
let w = 3, // 底辺
    h = 10, // 高さ
    triangle = (w * h) / 2; //三角形の面積 = (底辺 × 高さ) / 2
console.log(triangle); //面積を出力する

//練習問題
//半径12cmの円の面積が何立方cmかをコンソールに出力せよ。
//なお、円の面積は 半径r * r * 3.14である。
let r = 12, //半径 r = 12
    circle = r * r * 3.14; //円の面積を求める
console.log(`${circle}cm`); //面積をコンソールに出力する