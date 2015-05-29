/**
 * Set or Get Css of the Row Style
 *
 * @example css('oDiv','width'); css('oDiv','width','200px');
 *
 * @desc set or get Css of the Row Style
 *
 * @param String obj The obj of the object.
 * @param String name The name of the cssName.
 * @param String value The value of the cssValue.
 * @return The name of the cssValue.
 * @type String
 *
 * @name css()
 *
 * @author Iceman / 254784109@qq.com
 */

function css(obj, name, value) {
	if (arguments.length == 2) {
		return obj.style[name];
	} else {
		obj.style[name] = value;
	}
}

/**
 * Get Css of the Style
 *
 * @example getStyle('oDiv','width');
 *
 * @desc Get Css of the Style
 *
 * @param String obj The obj of the object.
 * @param String name The name of the cssName.
 * @return The name of the cssValue.
 * @type String
 *
 * @name getStyle()
 *
 * @author Iceman / 254784109@qq.com
 */

function getStyle(obj, name) {
	if (window.getComputedStyle) { // W3C
		return getComputedStyle(obj, false)[name];
	} else {
		return obj.currentStyle[name]; // IE
	}
}

/**
 * arrayDistinct
 *
 * @example arrayDistinct();
 *
 * @desc arrayDistinct
 *
 * @param Array arr The arr of the array.
 *
 * @return json.
 * @type json.
 *
 * @name arrayDistinct()
 *
 * @author Iceman / 254784109@qq.com
 */

function arrayDistinct(arr) {
	var aResult = [];
	var json = {};
	for (var i = 0; i < arr.length; i++) {
		if (!json[arr[i]]) { // 判断json中是否有该元素，没有就添加到数组中
			aResult.push(arr[i]);
			json[arr[i]] = 1; // 赋值为1表示上面的判断是否添加到新的数组中
		}
	}
	return JSON.stringify(aResult); // JSON.stringify() 把数组转为json
}

/**
 * Get Array of the ClassName
 *
 * @example getByClass('ul','box');
 *
 * @desc Get Array of the ClassName
 *
 * @param String oParent The oParent of the Element Parent.
 * @param String name The name of the ClassName.
 * @return The name of the Element Array.
 * @type array.
 *
 * @name getByClass()
 *
 * @author Iceman / 254784109@qq.com
 */

function getByClass(oParent, name) {
	var aResult = [];
	var aEle = document.getElementsByTagName('*');

	for (var i = 0; i < aEle.length; i++) {
		if (aEle[i].className == name) {
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

/**
 * bind event
 *
 * @example myAddEvent('div','click',function(){
 * 		console.info();
 * });
 *
 * @desc bind event (IE FF Chrome)
 *
 * @param Object The obj of the Object Element.
 * @param String ev The name of event. (click,mouseover..)
 *
 * @name myAddEvent()
 *
 * @author Iceman / 254784109@qq.com
 */

function myAddEvent(obj, ev, fn) {
	if (obj.attachEvent) {
		obj.attachEvent('on' + ev, fn);
	} else {
		obj.addEventListener(ev, fn, false);
	}
}

/**
 * Get Current Mouse Position
 *
 * @example GetCursorPos(oEvent);  var oEvent = ev || event;
 *
 * @desc Get Current Mouse Position (IE FF Chrome)
 *
 * @param Object The ev.
 * @return Json Of the X,Y position .
 * @type Json.
 *
 * @name GetCursorPos()
 *
 * @author Iceman / 254784109@qq.com
 */

function getCursorPos(ev) {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	return {
		x: ev.clientX + scrollLeft,
		y: ev.clientY + scrollTop
	};
}


/**
 *  getUrlParm
 *
 * @example
 *
 * var myurl = getUrlParm('id');
 * if (myurl != null && myurl.toString().length > 1) {
 *	  alert(getUrlParm("id"));
 * }
 *
 * @desc Get Current Url parameter
 *
 * @param String param name
 * @return String Value
 * @type String
 *
 * @name getUrlParm()
 *
 * @author Iceman / 254784109@qq.com
 */

function getUrlParm(param) {
	var sValue = location.search.match(new RegExp("[\?\&]" + param + "=([^\&]*)(\&?)", "i"));
	return sValue ? decodeURI(sValue[1]) : decodeURI(sValue);
}

/**
 *  getUrlParmArgs
 *
 * @example
 *
 * var args = getUrlParmArgs();
 * alert(args['id']);
 *
 * @desc Get Current Url parameter array
 *
 * @return Array Value
 * @type Array
 *
 * @name getUrlParmArgs()
 *
 * @author Iceman / 254784109@qq.com
 */

function getUrlParmArgs() {
	var args = [];
	var param = location.search.length > 0 ? location.search.substring(1) : '';
	var items = param.split('&');
	var item = null;
	for (var i = 0; i < items.length; i++) {
		item = items[i].split('=');
		args[item[0]] = item[1];
	}
	return args;
}

/**
 *  hasPlugin
 *
 * @example hasPlugin('Flash')
 *
 * @desc Not IE has Plugin
 *
 * @param String param name
 * @return Boolean Value
 * @type Boolean
 *
 * @name hasPlugin()
 *
 * @author Iceman / 254784109@qq.com
 */

function hasPlugin(name) {
	var name = name.toLowerCase();
	for (var i = 0; i < navigator.plugins.length; i++) {
		if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
			return true;
		}
	}
	return false;
}

/**
 *  hasIEPlugin
 *
 * @example hasIEPlugin('ShockwaveFlash.ShockwaveFlash')
 *
 * @desc Has IE Plugin Exist
 *
 * @param String param name identification
 * @return Boolean Value
 * @type Boolean
 *
 * @name hasIEPlugin()
 *
 * @author Iceman / 254784109@qq.com
 */

function hasIEPlugin(name) {
	try {
		new ActiveXObject(name)
		return true;
	} catch (e) {
		return false;
	}
}

/**
 *  hasFlash
 *
 * @example hasFlash()
 *
 * @desc Has Browser Flash Exist
 *
 * @return Boolean Value
 * @type Boolean
 *
 * @name hasFlash()
 *
 * @author Iceman / 254784109@qq.com
 */

function hasFlash() {
	var result = hasPlugin('Flash');
	if (!result) {
		result = hasIEPlugin('ShockwaveFlash.ShockwaveFlash');
	}
	return result;
}

/**
 *  hasClass
 *
 * @example hasFlash(oDiv,'aaa')
 *
 * @desc Has hasClass Exist
 *
 * @return Boolean Value
 * @type Boolean
 *
 * @name hasFlash()
 *
 * @author Iceman / 254784109@qq.com
 */


function hasClass(element, cName) {
	return !!element.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'));
}

/**
 *  addClass
 *
 * @example addClass(oDiv,'bbb')
 *
 * @desc Add Class
 *
 * @name addClass()
 *
 * @author Iceman / 254784109@qq.com
 */

function addClass(element, cName) {
	if (!hasClass(element, cName)) {
		element.className += ' ' + cName;
	}
}

/**
 *  removeClass
 *
 * @example addClass(oDiv,'ccc')
 *
 * @desc remove Class
 *
 *
 * @name removeClass()
 *
 * @author Iceman / 254784109@qq.com
 */

function removeClass(element,cName){
	if(hasClass(element,cName)){
		element.className=element.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'),' ');
	}
}
