function debounce(func, wait) {
    let timeout;
    return function () {
        // console.log(this);//触发响应事件的对象，如div
        let context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            // console.log(this);//定时器中的this指向是window，所以在调用事件响应函数func时需要将func的this指向触发响应事件的对象
            func.apply(context);
        }, wait);
    }
}

