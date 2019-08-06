/**
 * Created by lonecloud on 2017/9/10.
 */
(function(window) {
	var custom = custom || {},
		prefixUrl = "http://test.okbaotuan.com",
		auths = {},
		buttons = [{
				title: '我的好友',
				extra: {
					scene: 'WXSceneSession'
				}
			},
			{
				title: '朋友圈',
				extra: {
					scene: 'WXSceneTimeline'
				}
			},
			{
				title: '我的收藏',
				extra: {
					scene: 'WXSceneFavorite'
				}
			}
		];


	/**
	 * 获取用户ID
	 */
	custom.getuser_id = function() {
		var loginStr = plus.storage.getItem("user_id");
		var loginData = eval('(' + loginStr + ')');
		return loginData;
	}

	/**
	 * 退出登录
	 */
	custom.outlogin = function() {
		plus.nativeUI.closeWaiting();
		$$.custom.request('/appiBoom/login/logout', '', function(data) {
			console.log(JSON.stringify(data));
			if (data.message == "ok") {
				plus.storage.clear();
				var num = plus.storage.getLength();
				if (num == 0) {
					custom.againOpen("love_land.html", "", "");
				} else {
					mui.toast("网络异常，请退出重新进入");
				}
			}
		});
	}

	/**
	 * 数据过滤
	 */
	custom.filter = function(data, str) {
		if (data.hasOwnProperty("error")) {
			if (data.error == "quit") {
				mui.toast("请登录后操作");
				custom.againOpen("love_land.html", "", "");
			} else {
				if (data.error == "wechat") {
					mui.toast("请绑定微信");
					custom.selectLogin("wechat");
				} else {
					if (typeof data.error == "string") {
						mui.toast(data.error);
					} else if (data.error instanceof Array) {
						var i = 0;
						for (var key in data.error[0]) {
							if (i == 0) {
								mui.toast(data.error[0][key]);
							}
							i++;
						}
					} else {
						var i = 0;
						for (var key in data.error) {
							if (i == 0) {
								if (data.error[key] instanceof Array) {
									mui.toast(data.error[key][0]);
								} else {
									mui.toast(data.error[key]);
								}
							}
							i++;
						}
					}
				}
			}
		} else {
			return data;
			//callback(data);
		}
	}

	/**
	 * 后台请求接收数据
	 * $$.custom.request(url, info);
	 */
	custom.request = function(url, info, callback) {
		var data = '';
		mui.ajax(prefixUrl + url, {
			data: info,
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 30000, //超时时间设置为10秒；
			success: function(data) {
				// console.log(JSON.stringify(data));
				data = custom.filter(data, "");
				if (data) {
					callback(data);
				}
			},
			error: function(xhr, type, errorThrown) {
				console.log(JSON.stringify(xhr));
				// alert(JSON.stringify(xhr));
			}
		});
	}

	/**
	 * 后台请求接收数据处理逻辑
	 * $$.custom.request(url, info);
	 */
	custom.requestDispose = function(url, info, callback) {
		var data = '';
		mui.ajax(prefixUrl + url, {
			data: info,
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 30000, //超时时间设置为10秒；
			success: function(data) {
				callback(data);
			},
			error: function(xhr, type, errorThrown) {
				console.log(JSON.stringify(xhr));
				// alert(JSON.stringify(xhr));
			}
		});
	}

	/**
	 * 跳转页面
	 * $$.custom.ctmOpen("HG_orderPay.html", dataJosn, "正在获取订单信息...");
	 */
	custom.ctmOpen = function(url, data, flag) {
		var styles = {
			hardwareAccelerated: true
		};
		var urlPag = url;
		var data = data || "";
		plus.nativeUI.showWaiting(flag);
		var w = plus.webview.getWebviewById(urlPag);
		if (w) {
			w.show('pop-in', 300);
			plus.nativeUI.closeWaiting()

		} else {
			w = plus.webview.create(urlPag, urlPag, styles, {
				data: data
			});
			w.addEventListener("loaded", function() {
				w.show('pop-in', 300);
				plus.nativeUI.closeWaiting()
				wt = null;
			}, false);

		}
		//监听w页面是show事件发生，通知w页面show完成，不能放在w页面，因为show在plusready事件之前
		mui.fire(w, 'showed', {
			data: data
		});

		// 如果是IOS系统关闭当前所有页面
		if (mui.os.ios || mui.os.ipad || mui.os.iphone) {
			// 获取所有Webview窗口
			var curr = plus.webview.currentWebview();
			var wvs = plus.webview.all();
			for (var i = 0, len = wvs.length; i < len; i++) {
				//关闭除setting页面外的其他页面
				if (wvs[i].getURL() == curr.getURL()) {
					continue;
				} else {
					plus.webview.close(wvs[i]);
				}
			}
			curr.close();
		}
	}

	/**
	 * 跳转页面
	 * $$.custom.againOpen("HG_orderPay.html", dataJosn, "正在获取订单信息...");
	 */
	custom.againOpen = function(url, data, flag) {
		var styles = {
			hardwareAccelerated: true
		};
		var urlPag = url;
		var data = data || "";
		plus.nativeUI.showWaiting(flag);
		var w = plus.webview.getWebviewById(urlPag);

		w = plus.webview.create(urlPag, urlPag, styles, {
			data: data
		});
		w.addEventListener("loaded", function() {
			w.show('pop-in', 300);
			plus.nativeUI.closeWaiting()
			wt = null;
		}, false);

		//监听w页面是show事件发生，通知w页面show完成，不能放在w页面，因为show在plusready事件之前
		mui.fire(w, 'showed', {
			data: data
		});
	}

	/**
	 * 关闭已打开的窗口
	 */
	custom.close = function() {
		var allWindow = plus.webview.all();
		var current = plus.webview.currentWebview();
		for (var i = 0; i < allWindow.length; i++) {
			if (allWindow[i].getURL() == current.getURL()) {
				//遇到当前页跳过
				continue;
			} else {
				//非当前页执行关闭
				plus.webview.close(allWindow[i]);
				console.log(JSON.stringify(allWindow[i]));
			}
		}
	}

	/**
	 * 获取短信验证
	 * $obj 获取按键本身
	 * time 获取短信多久可以重新获取，按秒计算\
	 */
	custom.getSms = function($obj, time) {
		if (time == 0) {
			$obj.disabled = false;
			$obj.value = "发送验证码";
			return;
		} else {
			$obj.disabled = true;
			$obj.value = "有效期" + time + "秒";
			time--;
		}
		setTimeout(function() {
			custom.getSms($obj, time)
		}, 1000)
	}

	/**
	 * 等比例压缩图片
	 * path 获取mui文件
	 * dom 获取点击时间的本身
	 * callback 回调
	 */
	custom.appendFile = function(path, dom, callback) {
		var img = new Image();
		img.src = path; // 传过来的图片路径在这里用。
		img.onload = function() {
			// 缩放图片需要的canvas
			var canvas = document.createElement('canvas');
			var context = canvas.getContext('2d');

			// 图片原始尺寸
			var originWidth = this.width;
			var originHeight = this.height;
			// 最大尺寸限制
			var maxWidth = 400,
				maxHeight = 400;
			// 目标尺寸
			var targetWidth = originWidth,
				targetHeight = originHeight;
			// 图片尺寸超过400x400的限制
			if (originWidth > maxWidth || originHeight > maxHeight) {
				if (originWidth / originHeight > maxWidth / maxHeight) {
					// 更宽，按照宽度限定尺寸
					targetWidth = maxWidth;
					targetHeight = Math.round(maxWidth * (originHeight / originWidth));
				} else {
					targetHeight = maxHeight;
					targetWidth = Math.round(maxHeight * (originWidth / originHeight));
				}
			}

			// canvas对图片进行缩放
			canvas.width = targetWidth;
			canvas.height = targetHeight;
			// 清除画布
			context.clearRect(0, 0, targetWidth, targetHeight);
			// 图片压缩
			context.drawImage(img, 0, 0, targetWidth, targetHeight);
			var base64 = canvas.toDataURL('image/jpeg', 1 || 0.8); //1最清晰，越低越模糊。有一点不清楚这里明明设置的是jpeg。弹出 base64 开头的一段 data：image/png;却是png。哎开心就好，开心就好
			dom.src = base64;
			callback(base64);
		}
	}

	/**
	 * 获取短信验证
	 * $obj 获取按键本身
	 * time 获取短信多久可以重新获取，按秒计算\
	 */
	custom.getSms = function($obj, time) {
		if (time == 0) {
			$obj.disabled = false;
			$obj.value = "发送验证码";
			return;
		} else {
			$obj.disabled = true;
			$obj.value = "有效期" + time + "秒";
			time--;
		}
		setTimeout(function() {
			custom.getSms($obj, time)
		}, 1000)
	}

	/**
	 * 弹窗显示
	 * through 选择控件
	 * content 内容
	 * title 标题
	 */
	custom.prompt = function(through, content, title, callback) {
		var body = document.querySelector("body"),
			text = '',
			div = document.createElement("div");

		div.id = "prompt";

		if (document.querySelector("body #prompt")) {
			document.querySelector("body #prompt").innerHTML = '';
			document.querySelector("body #prompt").style.display = "block";
		}

		text += '<div class="mui-popup mui-popup-in" style="display: block;">';
		text += '	<div class="mui-popup-inner">';
		text += '		<div class="mui-popup-title">' + title + '</div>';
		text += '		<div class="mui-popup-text">' + content + '</div>';
		text += '	</div>';
		text += '	<div class="mui-popup-buttons">';
		if (through) {
			text += '		<span class="mui-popup-button" data-id="0">' + through[0] + '</span>';
			text += '		<span class="mui-popup-button mui-popup-button-bold" data-id="1">' + through[1] + '</span>';
		} else {
			text += '		<span class="mui-popup-button button_bold" data-id="1">确认</span>';
		}
		text += '	</div>';
		text += '</div>';
		text += '<div class="mui-popup-backdrop mui-active" style="display: block;"></div>';

		if (document.querySelector("body #prompt")) {
			document.querySelector("body #prompt").innerHTML = text;

		} else {
			div.innerHTML = text;
			body.appendChild(div);

		}

		mui("body").on('tap', '#prompt .mui-popup .mui-popup-buttons .mui-popup-button', function() {
			callback(this.getAttribute("data-id"));
			document.querySelector("body #prompt").style.display = "none";
		})
	}

	/**
	 * 更新分享服务
	 */
	custom.updateSerivces = function(callback) {
		plus.share.getServices(function(s) {
			shares = {};
			for (var i in s) {
				var t = s[i];
				shares[t.id] = t;
			}
			callback(shares['weixin']);
		}, function(e) {
			outSet('获取分享服务列表失败：' + e.message);
		});
	}

	/**
	 * 分享到网页
	 */
	custom.shareWeb = function(href, title, content, sweixin, callback) {
		// 分享网页
		var msg = {
			type: 'web',
			thumbs: ['_www/logo.png']
		};
		msg.href = href;
		msg.title = title;
		msg.content = content;

		sweixin ? plus.nativeUI.actionSheet({
			title: '分享网页到微信',
			cancel: '取消',
			buttons: buttons
		}, function(e) {
			(e.index > 0) && callback(sweixin, msg, buttons[e.index - 1]);
		}) : mui.toast("当前环境不支持微信分享操作！");
	}

	/**
	 * 分享服务
	 */
	custom.share = function(srv, msg, button, callback) {
		if (!srv) {
			mui.toast("无效的分享服务");
			// mui.alert('无效的分享服务！');
			return;
		}
		button && (msg.extra = button.extra);
		// 发送分享
		if (srv.authenticated) {
			callback(srv, msg)
		} else {
			srv.authorize(function() {
				callback(srv, msg)
			}, function(e) {
				mui.toast("认证授权失败");
				// mui.alert('认证授权失败：' + JSON.stringify(e));
			});
		}
	}

	/**
	 * 兼容iPhoneX
	 */
	custom.iPhoneX = function(clasName) {
		if (plus.device.model == 'iPhoneX') {
			var minetop = document.querySelector(clasName);
			document.querySelector('.iconset').style.top = '1.2rem'
			document.getElementById("bottomx").style.paddingBottom = '30px';
			minetop.style.paddingTop = '30px';
		}
	}

	/**
	 * 检测内容是否存在，存在就删除，防止重复内容加载
	 */
	custom.Contentcolse = function(Contentid) {
		if (document.getElementById(Contentid)) {
			document.getElementById(Contentid).parentNode.removeChild(document.getElementById(Contentid));
		}
	}

	/**
	 * 登录选择
	 */
	custom.selectLogin = function(type) {

		custom.obtainGet();

		var div = document.createElement("div"),
			text = '';
		div.className = 'loginTemplate_style';
		div.id = 'loginTemplate';
		
		div.setAttribute("onclick","if (document.getElementById(\"loginTemplate\")) {document.getElementById(\"loginTemplate\").style.display = \"none\";}");

		text += '<div class="loginTemplate">';
		if (type == "wechat") {
			text += '	<img src="img/newimg.png">';
			text += '	<h4>请先绑定微信</h4>';
			text += '	<button onclick="$$.custom.authoGet(\'weixin\',1)">绑定微信</button>';
		} else {
			text += '	<img src="img/newimg.png">';
			text += '	<h4>1秒登录i爆团，购买商品</h4>';
			text += '	<button onclick="$$.custom.phoneLogin(\'love_land.html\');">手机账号登录</button>';
			text += '	<button onclick="$$.custom.authoGet(\'weixin\',0)">微信登录</button>';
		}
		text += '</div>';


		if (document.getElementById("loginTemplate")) {
			document.getElementById("loginTemplate").style.display = "block";
			document.getElementById("loginTemplate").innerHTML = text;
		} else {
			div.innerHTML = text;
			document.querySelector("body").appendChild(div);
		}

		setTimeout(function() {
			document.querySelector(".loginTemplate_style").style.opacity = "1";
		}, 5);
	}
	

	/**
	 * 进入登录页面
	 */
	custom.phoneLogin = function(url, data, flag) {
		if (document.getElementById("loginTemplate")) {document.getElementById("loginTemplate").style.display = "none";}
		var styles = {
			hardwareAccelerated: true
		};
		var urlPag = url;
		var data = data || "";
		plus.nativeUI.showWaiting(flag);
		var w = plus.webview.getWebviewById(urlPag);
		w = plus.webview.create(urlPag, urlPag, styles, {
			data: data
		});
		w.addEventListener("loaded", function() {
			w.show('pop-in', 300);
			plus.nativeUI.closeWaiting()
			wt = null;
		}, false);
		//监听w页面是show事件发生，通知w页面show完成，不能放在w页面，因为show在plusready事件之前
		mui.fire(w, 'showed', {
			data: data
		});
	}

	/**
	 * 获取微信凭证
	 */
	custom.obtainGet = function() {
		plus.oauth.getServices(function(services) {
			auths = services;
		}, function(e) {
			mui.toast("获取分享服务列表失败");
			// alert("获取分享服务列表失败：" + e.message + " - " + e.code);
		});
	}

	/**
	 * 获取微信登录
	 * 扩展API加载完毕，现在可以正常调用扩展API
	 */
	custom.authoGet = function(id, type) {
		var auth = false;
		var type = type;

		for (var i in auths) {
			if (auths[i].id == id) {
				auth = auths[i];
			}
		}

		if (auth) {
			var w = null;
			if (plus.os.name == "Android") {
				w = plus.nativeUI.showWaiting();
			}
			document.addEventListener("pause", function() {
				setTimeout(function() {
					w && w.close();
					w = null;
				}, 2000);
			}, false);
			auth.login(function(e) {
				w && w.close();
				w = null;
				/*登录认证成功返回*/
				custom.loginReturn(e, type);
			}, function(e) {
				w && w.close();
				w = null;
				mui.toast("登录失败,退出重试");
				// plus.nativeUI.alert(e, null, "登录失败:");
			});
		} else {
			mui.toast("登录失败,退出重试");
			// plus.nativeUI.alert("无效的登录认证通道！", null, "登录");
		}
	}

	/**
	 * 获取微信登录
	 * 扩展API加载完毕，现在可以正常调用扩展API
	 */
	custom.loginReturn = function(info, type) {
		if (info) {
			if (type == 1) {
				var loginStr = plus.storage.getItem("user_id");
				var loginData = eval('(' + loginStr + ')');
				user_id = loginData;

				var datainfo = {
					"wxAccredit": {
						"userInfo": info.target.userInfo,
						"user_id": user_id
					}
				};

				var urlPay = '/appiBoom/login/binding';
			} else {
				var datainfo = {
					"wxAccredit": {
						"userInfo": info.target.userInfo,
					}
				};
				var urlPay = '/appiBoom/login';
			}

			console.log(JSON.stringify(datainfo))
			$$.custom.request(urlPay, datainfo, function(data) {
				console.log(JSON.stringify(data));
				if (data.message == "ok") {
					mui.toast("登录成功");
					if(document.getElementById("loginTemplate")){
						document.getElementById("loginTemplate").style.display = "none";
					}
					plus.storage.setItem("user_id", JSON.stringify(data.user_id));
					$$.custom.ctmOpen('love_index.html');
				}
			});
		} else {
			mui.alert("获取信息失败！");
		}
	}
	
	window.$$ = {
		custom: custom,
		prefixUrl: prefixUrl,
	}
})(window);

//调用
//$.write("dda")
//$.debug("dsds")
//$.log("dsqwd")
