window.addEventListener('load',function(){

	//1、获取元素
	var arrow_l = document.querySelector('.arrow-l');
	var arrow_r = document.querySelector('.arrow-r');
	var focus = document.querySelector('.focus');

	//2、鼠标经过focus 就显示/隐藏左右按钮
	focus.addEventListener('mouseenter',function(){
		arrow_l.style.display = 'block';
		arrow_r.style.display = 'block';
		//清除自动轮播的定时器
		clearInterval(timer);
		timer = null;
	})

	focus.addEventListener('mouseleave',function(){
		arrow_l.style.display = 'none';
		arrow_r.style.display = 'none';
		//打开自动轮播的定时器
		timer = setInterval(function(){
			//手动调用点击事件
			arrow_r.click();
		},2000);
	})

	//3、动态生成小圆圈   有几张图片就生成几个小圆圈
	var ul = document.querySelector('ul');
	var ol = document.querySelector('ol');
	// console.log(ul.children.length);
	for (var i = 0; i < ul.children.length; i++) {
		var li = document.createElement('li');
		//记录当前小圆圈的索引号 通过自定义属性
		li.setAttribute('index',i);


		ol.appendChild(li);
		//4、小圆圈的排他思想，可以直接在生成小圆圈的同时直接绑定点击事件
		li.addEventListener('click',function(){
			//清除所有li的current类名
			for(var i=0;i<ol.children.length;i++){
				ol.children[i].className = '';
			}
			//保留自己的li类名
			this.className = 'current';
			//5、点击小圆圈，移动图片，当然移动的是ul
			//ul的移动距离就是小圆圈的索引号*图片的宽度 ，注意是负值
			//当我们点击了某个li就拿到li的索引号
			var focusWidth = focus.offsetWidth;
			var index = this.getAttribute('index');
			//当我们点击了li 就要把li的索引号index给num
			num = index;
			//当我们点击了li 就要把li的索引号index给circle
			circle = index;
			animation(ul,-index*focusWidth)
		})
	}

	//把ol里面的第一个li类名设置成current
	ol.children[0].className = 'current';
	//6、克隆第一张图片，添加到ul
	var cloneLi = ul.children[0].cloneNode(true);
	ul.appendChild(cloneLi);
	//7、点击右侧按钮,图片滚动一张
	var num = 0;
	//控制小圆圈的播放
	var circle = 0;
	//flag节流阀，防止点击过快
	//让一张图片出来完才能点击下一张
	var flag = true;
	arrow_r.addEventListener('click',function(){
		if(flag){
			flag = false;//关闭节流阀

			//如果走到了最后的一张，此时，要做无缝滚动，在最后复制第一个li图片，当走完这张li图片，将ul快速复原，left改为0	
			if(num == ul.children.length - 1){
				ul.style.left = 0;
				num = 0;
			}
			num++;
			animation(ul,-num*focus.offsetWidth,function(){
				//利用animation的回调函数，动画播放完，打开节流阀，才能点击下一张
				flag = true;
			});

			//8、点击右侧按钮，小圆圈变化
			circle++;
			// if(circle == ol.children.length){
			// 	circle = 0;
			// }
			circle = circle == ol.children.length ? 0 : circle;
			//先清除所有li的current类名
			for(var i=0;i<ol.children.length;i++){
				ol.children[i].className = '';
			}
			//保留自己的li类名
			// this.className = 'current';
			ol.children[circle].className = 'current';
			}
		
	})


	//9、点击左侧侧按钮,图片滚动一张
	arrow_l.addEventListener('click',function(){
		
		if(flag){

			flag = false;//关闭节流阀
			//如果走到了最后的一张，此时，要做无缝滚动，在最后复制第一个li图片，当走完这张li图片，将ul快速复原，left改为0	

			if(num == 0){
				num = ul.children.length - 1;
				ul.style.left = -num*focus.offsetWidth + 'px';
			}
			num--;
			animation(ul,-num*focus.offsetWidth,function(){
				//利用animation的回调函数，动画播放完，打开节流阀，才能点击下一张
				flag = true;
			});

			//10、点击左侧按钮，小圆圈变化
			circle--;
			//circle< 0,说明走到在第一张图了，在往下应该走到最后一张
			// if(circle < 0){
			// 	circle = ol.children.length - 1;
			// }
			circle = circle < 0 ? (ol.children.length - 1) : circle;

			//先清除所有li的current类名
			for(var i=0;i<ol.children.length;i++){
				ol.children[i].className = '';
			}
			//保留自己的li类名
			// this.className = 'current';
			ol.children[circle].className = 'current';
		}
		
	})


	// 11.自动播放轮播图
	var timer = setInterval(function(){
		//手动调用点击事件
		arrow_r.click();
	},2000);

})