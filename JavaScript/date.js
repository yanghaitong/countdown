/**
 * new 一个date对象
 * @type {Date}
 */
let date = new Date();

/**
 * 获取本地年份
 * @type {number}
 */
let year = date.getFullYear();

/**
 * 获取本地月份
 * @type {number}
 */
let month = date.getMonth() + 1;

/**
 * 获取本地星期几
 * @type {number}
 */
let day = date.getDate();


/**
 * 获取html 固定时间的元素
 * @type {Element}
 */
let next = document.querySelector(".next");

/**
 * 获取html 今天时间
 * @type {Element}
 */
let current = document.querySelector(".current");

let days = document.querySelector("#sky");
let hours = document.querySelector("#hour");
let minutes = document.querySelector("#divide");
let seconds = document.querySelector("#second");
let countdown = document.querySelector(".countdown")

next.innerHTML = `今天是${year}年${month}月${day}日`;

/**
 * 现在时间的方法
 */
getTime();
setInterval(getTime, 1000)

function getTime() {
    let date = new Date();
    // 获取小时
    let hour = date.getHours();
    // 获取分
    let minute = date.getMinutes()
    // 获取秒
    let second = date.getSeconds();
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    current.innerHTML = `现在的时间是${hour}点${minute}分${second}秒`;
}

/**
 * 倒计时器core
 */
countTime()
function countTime() {
    let now = +new Date();
    //2、得到指定时间的时间戳

    let last = +new Date("2025-1-1 00:00:00");
    // 3、计算剩余的毫秒数/1000 == 剩余的秒数
    let count = (last - now) / 1000;
    // 4、转换为天时分秒
    d = parseInt(count / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    days.innerHTML = d;
    h = parseInt(count / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    hours.innerHTML = h;
    m = parseInt(count / 60 % 60);
    m = m < 10 ? '0' + m : m;
    minutes.innerHTML = m;
    s = parseInt(count % 60);
    s = s < 10 ? '0' + s : s;
    seconds.innerHTML = s;
    if (count <= 0) {
        countdown.innerHTML = '除夕到了！！！'
    }
}
setInterval(countTime, 1000)
