const danmuContainer = document.getElementById('danmu-container');
const danmuInput = document.getElementById('danmu-input');
const danmuSend = document.getElementById('danmu-send');

// 给发送按钮添加点击事件监听器
danmuSend.addEventListener('click', () => {
	// 创建一个新的div元素
	const danmu = document.createElement('div');
	// 添加danmu类
	danmu.classList.add('danmu');
	// 设置弹幕文本为输入框中的值
	danmu.innerText = danmuInput.value;
	// 将弹幕添加到弹幕容器中
	danmuContainer.appendChild(danmu);
	// 清空输入框
	danmuInput.value = '';

});