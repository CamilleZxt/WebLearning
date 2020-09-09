//第一次会触发 最后一次不会被调用
//{leading:true;trailing:false}
//时间戳
// function throttle(func, wait) {
//     let context, args;

//     //之前的时间戳
//     let oldTime = 0;

//     return function () {
//         context = this;
//         args = arguments;
//         //获取当前时间戳
//         let nowTime = new Date().valueOf();
//         if (nowTime - oldTime > wait) {

//             //立即执行
//             func.apply(context, args);
//             oldTime = nowTime;
//         }
//     }
// }

//第一次不会触发 最后一次会触发
//{leading:false;trailing:true}
//定时器
// function throttle(func, wait) {
//     let context, args, timeout;
//     return function () {
//         context = this;
//         args = arguments;
//         if (!timeout) {
//             timeout = setTimeout(() => {
//                 timeout = null;
//                 func.apply(context, args);
//             }, wait);
//         }
//     }
// }

//第一次会触发 最后一次会触发
//{leading:true;trailing:true}
// function throttle(func, wait) {
//     let context, args, timeout;
//     let oldTime = 0;
//     return function () {
//         context = this;
//         args = arguments;
//         let nowTime = new Date().valueOf();
//         if (nowTime - oldTime > wait) {
//             if (timeout) {
//                 clearTimeout(timeout);
//                 timeout = null;
//             }
//             func.apply(context, args);
//             oldTime = nowTime;
//         }else if (!timeout) {
//             timeout = setTimeout(() => {
//                 oldTime = new Date().valueOf();
//                 timeout = null;
//                 func.apply(context, args);
//             }, wait);
//         }
//     }
// }

//三种结合
//options={leading:true;training:false}
//options={leading:false;training:true}
//options={leading:true;training:true}
function throttle(func, wait, options) {
    if (!options) {
        options = {};
    }
    let context, args, timeout;
    let oldTime = 0;
    return function () {
        context = this;
        args = arguments;
        let nowTime = new Date().valueOf();
        if (options.leading === false && !oldTime) {
            oldTime = nowTime;
        }
        if (nowTime - oldTime > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            func.apply(context, args);
            oldTime = nowTime;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(() => {
                oldTime = new Date().valueOf();
                timeout = null;
                func.apply(context, args);
            }, wait);
        }
    }
}