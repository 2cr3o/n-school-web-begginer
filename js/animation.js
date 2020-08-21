let animation = {
    header : document.getElementById('header'),
    degree : 0
},
    header = animation.header,
    degree = animation.degree,
    rotateHeader = ()=> {
         //animationオブジェクトのdegreeプロパティを +6して再代入
        degree = degree + 6;
        //anmation.degreeを360で割った値をdegreeに再代入
        degree = degree % 360;
        // degreeの値が 0~90未満または 270~360未満であればtrue, 90~270未満はfalse
        if((0 <= degree && degree < 90) || (270 <= degree && degree < 360)){
            header.className = 'face'; //faceセレクタのスタイルシートを適用する 
        } else {
            header.className = 'back'; //backセレクタのスタイルシートを適用する
        }
        //animationオブジェクトのheaderプロパティの値(取得したHTMLElementオブジェクト)の
        //cssのtransformプロパティの値をaniamtion.degreeに更新する
        header.style.transform = 'rotateX(' + degree +'deg)'; 
    }

setInterval(rotateHeader, 10); //10ms毎にrotateHeader関数を呼び出す