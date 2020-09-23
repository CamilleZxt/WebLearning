

function animation(obj, target, callback) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var step = (target - obj.offsetLeft) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		if (obj.offsetLeft == target) {
			clearInterval(obj.timer);
			//定时器停止后，在接着执行下面的操作
			//所以回调函数的执行写在定时器停止后
			if (callback) {
				callback();
			}
			// callback&&callback();
		}
		obj.style.left = obj.offsetLeft + step + 'px';
	}, 15);
}