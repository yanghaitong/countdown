console.log(
    '                   _oo0oo_                     \n' +
    '                  o8888888o										\n' +
    '                  88" . "88										\n' +
    '                  (| -_- |)										\n' +
    '                   O\\ = /O										\n' +
    "               ____/`---'\\____									\n" +
    "             .   ' \\\\| |// `.									\n" +
    '              / \\\\||| : |||// \\								\n' +
    '           / _||||| -卍- |||||- \\								\n' +
    '              | | \\\\\\ - /// | |								\n' +
    "            | \\_| ''\\---/'' | |								\n" +
    '             \\ .-\\__ `-` ___/-. /							\n' +
    "          ___`. .' /--.--\\ `. . __							\n" +
    '       ."" "< `.___\\_<|>_/___. ` >" "".        \n' +
    '      | | : `- \\`.;`\\ _ /`;.`/ - ` : | |       \n' +
    '        \\ \\ `-. \\_ __\\ /__ _/ .-` / /          \n' +
    "======`-.____`-.___\\_____/___.-`____.-'======  \n" +
    "                   `=---='                     \n" +
    '.............................................  \n\t\t' +
    '佛祖镇楼                  BUG辟易                          \n\t' +
    '佛曰:\n\t\t' +
    '写字楼里写字间，写字间里程序员；\n\t\t' +
    '程序人员写程序，又拿程序换酒钱。\n\t\t' +
    '酒醒只在网上坐，酒醉还来网下眠；\n\t\t' +
    '酒醉酒醒日复日，网上网下年复年。\n\t\t' +
    '但愿老死电脑间，不愿鞠躬老板前；\n\t\t' +
    '奔驰宝马贵者趣，公交自行程序员。\n\t\t' +
    '别人笑我忒疯癫，我笑自己命太贱；\n\t\t' +
    '不见满街漂亮妹，哪个归得程序员？'
);

/**
 * 警示框
 *
 * @author HaiTong
 */
const dome = [(
    "hello，大家好。"
)];

// alert(dome);

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
 * 提示是什么倒计时
 * @type {Element}
 */
let prompts = document.querySelector(".prompt");


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


prompts.innerHTML = "2026年元旦";

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

    // 输入倒计时截止的时间
    let last = +new Date("2026-1-1 00:00:00");

    /**
     * 2025年2月19日：2025-1-1 00:00:00 2025年元旦、除夕、春节
     */


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

        // 时间截止的提示
        countdown.innerHTML = '除夕到了！！！'
    }
}
setInterval(countTime, 1000)
