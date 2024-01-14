'use strict';
{
    const hour = document.getElementById('hour');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');

    const countDown = () => {
        const now = new Date();//現在時刻の取得
        const tommorow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);//明日の日付
        const timeDiff = tommorow.getTime() - now.getTime();//明日までの残り時間をミリ秒単位で取得

        const calsHour = Math.floor(timeDiff / 1000 / 60 / 60);//ミリ秒単位を変換
        const calsMin = Math.floor(timeDiff / 1000 / 60) % 60;
        const calsSec = Math.floor(timeDiff / 1000) % 60;

        hour.innerHTML = String(calsHour).padStart(2, '0');//それぞれの値をHTMLに渡す
        min.innerHTML = String(calsMin).padStart(2, '0');//padStart 指定した桁数で表示する
        sec.innerHTML = String(calsSec).padStart(2, '0');//padStartは文字列にしか使えないのでStringで文字列に変換
    }
    countDown();
    setInterval(countDown, 1000);//countDownという関数を1000ミリ秒間隔で表示する
}