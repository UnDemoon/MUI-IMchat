(function() {
				// 处理点击事件
	var _openw = null;
	var as = 'pop-in'; // 默认窗口动画
	/**
	 * 打开新窗口
	 * @param {String} id	加载的页面地址，也用作窗口标识
	 * @param {String} t    页面的标题
	 * @param {String} d	文档页面文件名称（doc目录下），不传入则使用页面的标题
	 */
	function clicked(id, t, d) {
		if (_openw) {
			return;
		}
		// 防止快速点击
		var ws = {
			scrollIndicator: 'none',
			scalable: false,
			popGesture: 'close',
			backButtonAutoControl: 'close',
			titleNView: {
				autoBackButton: true,
				backgroundColor: '#D74B28',
				titleColor: '#CCCCCC'
			}
		};
		t && (ws.titleNView.titleText = t, d || (d = t.toLowerCase()));
		d && (ws.titleNView.buttons = [{
			fontSrc: '_www/helloh5.ttf',
			text: '\ue301',
			fontSize: '22px',
			onclick: 'javascript:openDoc("/doc/' + d + '.html")'
		}]);
		_openw = plus.webview.create(id, id, ws);
		_openw.addEventListener('loaded', function() {
			//页面加载完成后才显示
			_openw && _openw.show(as, null, function()
			{
				_openw = null; //避免快速点击打开多个页面
			});
		}, false);
		_openw.addEventListener('hide', function() {
			_openw = null;
		}, false);
		_openw.addEventListener('close', function() { //页面关闭后可再次打开
			_openw = null;
		}, false);
	}
}());