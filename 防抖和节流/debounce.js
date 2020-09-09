function debounce(func, wait, immediate) {
    let timeout;//声明定时器
    let result;//响应函数执行后的返回值
    let debounced = function () {
        // console.log(this);//触发响应事件的对象，如div
        let context = this;
        // console.log(arguments);//arguments  事件参数
        let args = arguments;

        clearTimeout(timeout);
        if (immediate) {
            // immediate为true，会立即执行，不会等待wait时间间隔 

            //如果已有定时器，则callNow为false，不进行调用时间响应函数func
            //如果没有定时器，则callNow为true,进行调用响应函数func
            let callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait);

            if (callNow) {
                result = func.apply(context, args);
            }

        } else {
            // immediate为true，会立即执行，会等待wait时间间隔 
            timeout = setTimeout(function () {
                // console.log(this);//定时器中的this指向是window，所以在调用事件响应函数func时需要将func的this指向触发响应事件的对象
                result = func.apply(context, args);
            }, wait);
        }

        return result;
    }
    debounced.cancel = function () {
        clearTimeout(timeout);
        //这里是函数套函数，闭包，有内存泄漏，需要自己清除
        timeout = null;

    }
    return debounced;
}

