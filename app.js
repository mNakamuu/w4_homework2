const quiz = [
    {
        question : '【問１】 漫画「北斗の拳」でケンシロウの仲間ではないのは次のうち誰？',
        answers : [
            'バット',
            'ジャギ',
            'トキ',
            'レイ'
        ],
        correct: 'ジャギ',
        correctMessage : `
【答え】ジャギ

「バット」大人になったバットはいい男です。
「ジャギ」クズキャラだが、原作者武論尊の推しキャラ。ケンシロウの兄。
「トキ」 スロットでトキが現れればBonus確定!
「レイ」 特に人気の高い主要キャラ。ケンシロウが「強敵（とも）」と認めた男。
`
    }, {
        question : '【問２】 漫画「北斗の拳」での名言に当てはまらないものはどれ？',
        answers : [
            'てめえらの血は何色だーっ！！',
            'お前はもう死んでいる',
            '怠惰を求めて勤勉に行きつく',
            'わが生涯に一片の悔いなし'
        ],
        correct: '怠惰を求めて勤勉に行きつく',
        correctMessage : `
【答え】怠惰を求めて勤勉に行きつく

「てめえらの血は何色だーっ!!」レイの名言。今も多くのファンの心をとらえている。
「お前はもう死んでいる」もはや説明不要。
「怠惰を求めて勤勉に行きつく」麻雀漫画「哲也」での房州さんのセリフ。
「わが生涯に一片の悔いなし」世のスロッターが沸き立つラオウの名言。
`
    }, {
        question : '【問３】 アニメ「北斗の拳２」のオープニング曲は次のうちどれ？',
        answers : [
            '愛をとりもどせ!! / クリスタルキング',
            'TOUGH BOY / TOM★CAT',
            'SILENT SURVIVOR / KODOMO BAND',
            'ユリア…永遠に / クリスタルキング'
        ],
        correct: 'TOUGH BOY / TOM★CAT',
        correctMessage : `
【答え】TOUGH BOY

「愛をとりもどせ!!」北斗の拳 OP 誰もが知る代表曲ですね。
「TOUGH BOY」北斗の拳2 OP テンション爆上がります。
「SILENT SURVIVOR」北斗の拳 OP
「ユリア…永遠に」北斗の拳 ED
`
    }
]
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 定数の文字列をHTMLに反映させる
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        message = `正解です！
        ${quiz[quizIndex].correctMessage}
        `
        window.alert(message);
        score++;
    } else {
        message = `不正解です！
        ${quiz[quizIndex].correctMessage}
        `
        window.alert(message);
    }

    quizIndex++;

    if(quizIndex <quizLength){

        setupQuiz();
    }else {
        // テンプレートリテラル使用
        const message =`終了！あなたの正解数は${score}/${quizIndex}です！`;
        window.alert(message);
    }
};

// ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handleIndex++;
}
