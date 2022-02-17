"use strict";var _react=_interopRequireDefault(require("react"));var _reactDom=_interopRequireDefault(require("react-dom"));var _isPlainObject=_interopRequireDefault(require("lodash/isPlainObject"));var _isEqual=_interopRequireDefault(require("lodash/isEqual"));var _reactHtmlParser=_interopRequireDefault(require("react-html-parser"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function angularize(Component,componentName,angularApp,bindings){bindings=bindings||{};if(typeof window==="undefined"||typeof angularApp==="undefined")return;angularApp.component(componentName,{bindings:bindings,controller:["$element",function($element){var _this=this;if(window.angular){this.$scope=window.angular.element($element).scope();var previous={};this.$onInit=function(){for(var _i=0,_Object$keys=Object.keys(bindings);_i<_Object$keys.length;_i++){var bindingKey=_Object$keys[_i];if(/^data[A-Z]/.test(bindingKey)){console.warn("'".concat(bindingKey,"' binding for ").concat(componentName," component will be undefined because AngularJS ignores attributes starting with data-"))}if(bindings[bindingKey]==="="){previous[bindingKey]=window.angular.copy(_this[bindingKey])}}};this.$doCheck=function(){for(var _i2=0,_Object$keys2=Object.keys(previous);_i2<_Object$keys2.length;_i2++){var previousKey=_Object$keys2[_i2];if(!equals(_this[previousKey],previous[previousKey])){_this.$onChanges();previous[previousKey]=window.angular.copy(_this[previousKey]);return}}}}this.$onChanges=function(){var children=(0,_reactHtmlParser["default"])($element[0].innerHTML);_reactDom["default"].render(_react["default"].createElement.apply(_react["default"],[Component,_this].concat(_toConsumableArray(children))),$element[0])}}]})}function angularizeDirective(Component,directiveName,angularApp,bindings){bindings=bindings||{};if(typeof window==="undefined"||typeof angularApp==="undefined")return;angularApp.directive(directiveName,function(){return{scope:bindings,replace:true,link:function link(scope,element){scope.$scope=scope;_reactDom["default"].render(_react["default"].createElement(Component,scope),element[0]);var keys=[];for(var _i3=0,_Object$keys3=Object.keys(bindings);_i3<_Object$keys3.length;_i3++){var bindingKey=_Object$keys3[_i3];if(/^data[A-Z]/.test(bindingKey)){console.warn("'".concat(bindingKey,"' binding for ").concat(directiveName," directive will be undefined because AngularJS ignores attributes starting with data-"))}if(bindings[bindingKey]!=="&"){keys.push(bindingKey)}}scope.$watchGroup(keys,function(){_reactDom["default"].render(_react["default"].createElement(Component,scope),element[0])})}}})}function getService(serviceName){if(typeof window==="undefined"||typeof window.angular==="undefined")return{};return window.angular.element(document.body).injector().get(serviceName)}function equals(o1,o2){if((0,_isPlainObject["default"])(o1)&&(0,_isPlainObject["default"])(o2)){return(0,_isEqual["default"])(o1,o2)}return window.angular.equals(o1,o2)}module.exports={getService:getService,angularize:angularize,angularizeDirective:angularizeDirective};