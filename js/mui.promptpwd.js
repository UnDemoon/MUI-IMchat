/**
 * Popup(alert,confirm,prompt)  
 * @param {Object} $
 * @param {Object} window
 * @param {Object} document
 */
(function($, window, document) {
	var CLASS_POPUP = 'mui-popup';
	var CLASS_POPUP_BACKDROP = 'mui-popup-backdrop';
	var CLASS_POPUP_IN = 'mui-popup-in';
	var CLASS_POPUP_OUT = 'mui-popup-out';
	var CLASS_POPUP_INNER = 'mui-popup-inner';
	var CLASS_POPUP_TITLE = 'mui-popup-title';
	var CLASS_POPUP_TEXT = 'mui-popup-text';
	var CLASS_POPUP_INPUT = 'mui-popup-input';
	var CLASS_POPUP_INPUT_PWD = 'mui-popup-input-pwd';
	var CLASS_POPUP_BUTTONS = 'mui-popup-buttons';
	var CLASS_POPUP_BUTTON = 'mui-popup-button';
	var CLASS_POPUP_BUTTON_BOLD = 'mui-popup-button-bold';
	var CLASS_POPUP_BACKDROP = 'mui-popup-backdrop';
	var CLASS_ACTIVE = 'mui-active';

	var popupStack = [];
	var backdrop = (function() {
		var element = document.createElement('div');
		element.classList.add(CLASS_POPUP_BACKDROP);
		element.addEventListener('webkitTransitionEnd', function() {
			if (!this.classList.contains(CLASS_ACTIVE)) {
				element.parentNode && element.parentNode.removeChild(element);
			}
		});
		return element;
	}());

	var createInputPwd = function(placeholder, maxlength) {
		var pwds = [];
		for (var i = 0; i < maxlength; i++) {
			pwds.push('<input type="password" style="width:' + 100/ maxlength + '%">');
		}
		var fakeBox = '<div class="fake-box">' + pwds.join('') + '</div>';
		var pwdInput = '<input type="tel" maxlength="' + maxlength + '" class="pwd-input" id="pwd-input">'
		var pwdBox = '<div class="pwd-box">' + pwdInput + fakeBox + '</div>'
		
		return '<div class="' + CLASS_POPUP_INPUT_PWD + '">' + pwdBox + '</div>';
	};
		
	var createInner = function(message, title, extra) {
		return '<div class="' + CLASS_POPUP_INNER + '"><div class="' + CLASS_POPUP_TITLE + '">' + title + '</div><div class="' + CLASS_POPUP_TEXT + '">' + message + '</div>' + (extra || '') + '</div>';
	};
	var createButtons = function(btnArray) {
		var length = btnArray.length;
		var btns = [];
		for (var i = 0; i < length; i++) {
			btns.push('<span class="' + CLASS_POPUP_BUTTON + (i === length - 1 ? (' ' + CLASS_POPUP_BUTTON_BOLD) : '') + '">' + btnArray[i] + '</span>');
		}
		return '<div class="' + CLASS_POPUP_BUTTONS + '">' + btns.join('') + '</div>';
	};

	var createPopup = function(html, callback) {
		var popupElement = document.createElement('div');
		popupElement.className = CLASS_POPUP;
		popupElement.innerHTML = html;
		var removePopupElement = function() {
			popupElement.parentNode && popupElement.parentNode.removeChild(popupElement);
			popupElement = null;
		};

		popupElement.addEventListener('webkitTransitionEnd', function(e) {
			if (popupElement && e.target === popupElement && popupElement.classList.contains(CLASS_POPUP_OUT)) {
				removePopupElement();
			}
		});
		

		
		
		popupElement.style.display = 'block';
		document.body.appendChild(popupElement);
		popupElement.offsetHeight;
		popupElement.classList.add(CLASS_POPUP_IN);

		if (!backdrop.classList.contains(CLASS_ACTIVE)) {
			backdrop.style.display = 'block';
			document.body.appendChild(backdrop);
			backdrop.offsetHeight;
			backdrop.classList.add(CLASS_ACTIVE);
		}
		var btns = $.qsa('.' + CLASS_POPUP_BUTTON, popupElement);
		var input = popupElement.querySelector('.' + CLASS_POPUP_INPUT + ' input');
		//密码框
		if(!input){
			input= popupElement.querySelector('.' + CLASS_POPUP_INPUT_PWD + ' input[type=\'tel\']')
		}
		var popup = {
			element: popupElement,
			close: function(index, animate) {
				if (popupElement) {
					callback && callback({
						index: index || 0,
						value: input && input.value || ''
					});
					if (animate !== false) {
						popupElement.classList.remove(CLASS_POPUP_IN);
						popupElement.classList.add(CLASS_POPUP_OUT);
					} else {
						removePopupElement();
					}
					popupStack.pop();
					//如果还有其他popup，则不remove backdrop
					if (popupStack.length) {
						popupStack[popupStack.length - 1]['show'](animate);
					} else {
						backdrop.classList.remove(CLASS_ACTIVE);
					}
				}
			}
		};
		var handleEvent = function(e) {
			popup.close(btns.indexOf(e.target));
		};
		$(popupElement).on('tap', '.' + CLASS_POPUP_BUTTON, handleEvent);
		if (popupStack.length) {
			popupStack[popupStack.length - 1]['hide']();
		}
		
		//密码框事件
		if( $(".pwd-box").length>0){
			var $input = $(".fake-box input");
			$(popupElement).on("input", "#pwd-input", function() {
				var pwd = this.value.replace(" ");
				for (var i = 0, len = pwd.length; i < len; i++) {
					if($.isArray($input)){
						$input[i].value = pwd[i];
					}
				}
			});
		}
			
					
		
		
		
		popupStack.push({
			close: popup.close,
			show: function(animate) {
				popupElement.style.display = 'block';
				popupElement.offsetHeight;
				popupElement.classList.add(CLASS_POPUP_IN);
			},
			hide: function() {
				popupElement.style.display = 'none';
				popupElement.classList.remove(CLASS_POPUP_IN);
			}
		});
		return popup;
	};
	//创建密码提示框
	/**
	 * 
	 * @param {Object} message
	 * @param {Object} placeholder
	 * @param {Object} title
	 * @param {Object} btnArray
	 * @param {Object} callback
	 * @param {Object} type
	 * @param {Object} maxlength
	 */
	var createPromptPwd = function(message, placeholder, title, btnArray, callback, type,maxlength) {
		if (typeof message === 'undefined') {
			return;
		} else {
			if (typeof placeholder === 'function') {
				callback = placeholder;
				type = title;
				placeholder = null;
				title = null;
				btnArray = null;
			} else if (typeof title === 'function') {
				callback = title;
				type = btnArray;
				title = null;
				btnArray = null;
			} else if (typeof btnArray === 'function') {
				type = callback;
				callback = btnArray;
				btnArray = null;
			}
		}
		if (!$.os.plus || type === 'div') {
			return createPopup(createInner(message, title || '提示', createInputPwd(placeholder,maxlength)) + createButtons(btnArray || ['取消', '确认']), callback);
		}
		return plus.nativeUI.prompt(message, callback, title || '提示', placeholder, btnArray || ['取消', '确认']);
	};
	
	$.promptPwd = createPromptPwd;
})(mui, window, document);