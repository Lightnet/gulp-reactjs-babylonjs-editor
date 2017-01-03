(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _layouteditor = require('./layouteditor');

var _layouteditor2 = _interopRequireDefault(_layouteditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//require('./babylon.min.js');

//just testing not be place here
document.body.style.overflow = 'hidden';
//import MyFirstGrid from './myfirstgrid';
//import Reactbabylonjs from './react-babylonjs';
//import HelloWorld from './hello-world';

document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.margin = 0;
document.body.style.padding = 0;

_reactDom2.default.render(_react2.default.createElement(_layouteditor2.default, null), document.querySelector('.root'));
/*
ReactDOM.render(
    <MyFirstGrid/>,
    document.querySelector('.root')
);
*/
/*
ReactDOM.render(
    <Reactbabylonjs/>,
    document.querySelector('.root')
);
*/
//ReactDOM.render(
//  <MyEditor />,
//  document.getElementById('container')
//);

},{"./layouteditor":2,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSplitPane = require('react-split-pane');

var _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);

var _reactBabylonjs = require('./react-babylonjs');

var _reactBabylonjs2 = _interopRequireDefault(_reactBabylonjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutEditor = function (_React$Component) {
    _inherits(LayoutEditor, _React$Component);

    function LayoutEditor(props) {
        _classCallCheck(this, LayoutEditor);

        return _possibleConstructorReturn(this, (LayoutEditor.__proto__ || Object.getPrototypeOf(LayoutEditor)).call(this, props));
        //this.state = {editorState: EditorState.createEmpty()};
        //this.onChange = (editorState) => this.setState({editorState});
    }

    _createClass(LayoutEditor, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactSplitPane2.default,
                { split: 'horizontal', defaultSize: '5%' },
                _react2.default.createElement(
                    'div',
                    null,
                    '1'
                ),
                _react2.default.createElement(
                    _reactSplitPane2.default,
                    { split: 'horizontal', defaultSize: '90%' },
                    _react2.default.createElement(
                        _reactSplitPane2.default,
                        { split: 'vertical', defaultSize: '10%' },
                        _react2.default.createElement(
                            'div',
                            null,
                            '3'
                        ),
                        _react2.default.createElement(
                            _reactSplitPane2.default,
                            { split: 'vertical', defaultSize: '85%' },
                            _react2.default.createElement(
                                'div',
                                { style: { width: '100%', height: '100%' } },
                                _react2.default.createElement(_reactBabylonjs2.default, null)
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                '5'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        '6'
                    )
                )
            );
        }
    }]);

    return LayoutEditor;
}(_react2.default.Component);

exports.default = LayoutEditor;

},{"./react-babylonjs":3,"react":"react","react-split-pane":39}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./babylon.min.js');

var Reactbabylonjs = function (_React$Component) {
    _inherits(Reactbabylonjs, _React$Component);

    function Reactbabylonjs(props) {
        _classCallCheck(this, Reactbabylonjs);

        return _possibleConstructorReturn(this, (Reactbabylonjs.__proto__ || Object.getPrototypeOf(Reactbabylonjs)).call(this, props));
    }

    //https://facebook.github.io/react/docs/state-and-lifecycle.html
    //The componentDidMount() hook runs after the component output has been rendered to the DOM.


    _createClass(Reactbabylonjs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.init();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            //clearInterval(this.timerID);
        }
    }, {
        key: 'init',
        value: function init() {
            console.log(this);
            // get the canvas DOM element
            var canvas = document.getElementById('renderCanvas');
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style['touch-action'] = 'none';

            //console.log(BABYLON);
            // load the 3D engine
            var engine = new BABYLON.Engine(canvas, true);

            // createScene function that creates and return the scene
            var createScene = function createScene() {
                // create a basic BJS Scene object
                var scene = new BABYLON.Scene(engine);

                // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
                var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);

                // target the camera to scene origin
                camera.setTarget(BABYLON.Vector3.Zero());

                // attach the camera to the canvas
                camera.attachControl(canvas, false);

                // create a basic light, aiming 0,1,0 - meaning, to the sky
                var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

                // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
                var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);

                // move the sphere upward 1/2 of its height
                sphere.position.y = 1;

                // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
                var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

                // return the created scene
                return scene;
            };

            // call the createScene function
            var scene = createScene();

            // run the render loop
            engine.runRenderLoop(function () {
                scene.render();
            });

            // the canvas/window resize event handler
            window.addEventListener('resize', function () {
                engine.resize();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('canvas', { id: 'renderCanvas' });
        }
    }]);

    return Reactbabylonjs;
}(_react2.default.Component);

exports.default = Reactbabylonjs;

},{"./babylon.min.js":5,"react":"react"}],4:[function(require,module,exports){
/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(name, definition)
  else root[name] = definition()
}(this, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)os/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/chrome.+? edge/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && !result.msedge && (android || result.silk)) {
      result.android = t
    } else if (!result.windowsphone && !result.msedge && iosdevice) {
      result[iosdevice] = t
      result.ios = t
    } else if (mac) {
      result.mac = t
    } else if (xbox) {
      result.xbox = t
    } else if (windows) {
      result.windows = t
    } else if (linux) {
      result.linux = t
    }

    // OS version extraction
    var osVersion = '';
    if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  return bowser
});

},{}],5:[function(require,module,exports){

},{}],6:[function(require,module,exports){
'use strict';

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// special flexbox specifications


var _prefixAll2 = require('./static/prefixAll');

var _prefixAll3 = _interopRequireDefault(_prefixAll2);

var _getBrowserInformation = require('./utils/getBrowserInformation');

var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

var _getPrefixedKeyframes = require('./utils/getPrefixedKeyframes');

var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

var _capitalizeString = require('./utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _sortPrefixedStyle = require('./utils/sortPrefixedStyle');

var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _position = require('./plugins/position');

var _position2 = _interopRequireDefault(_position);

var _calc = require('./plugins/calc');

var _calc2 = _interopRequireDefault(_calc);

var _zoomCursor = require('./plugins/zoomCursor');

var _zoomCursor2 = _interopRequireDefault(_zoomCursor);

var _grabCursor = require('./plugins/grabCursor');

var _grabCursor2 = _interopRequireDefault(_grabCursor);

var _flex = require('./plugins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _sizing = require('./plugins/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _gradient = require('./plugins/gradient');

var _gradient2 = _interopRequireDefault(_gradient);

var _transition = require('./plugins/transition');

var _transition2 = _interopRequireDefault(_transition);

var _flexboxIE = require('./plugins/flexboxIE');

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = require('./plugins/flexboxOld');

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var plugins = [_position2.default, _calc2.default, _zoomCursor2.default, _grabCursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default,
// this must be run AFTER the flexbox specs
_flex2.default];

var Prefixer = function () {
  /**
   * Instantiante a new prefixer
   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
   * @param {string} keepUnprefixed - keeps unprefixed properties and values
   */

  function Prefixer() {
    var _this = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Prefixer);

    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

    this._userAgent = options.userAgent || defaultUserAgent;
    this._keepUnprefixed = options.keepUnprefixed || false;

    this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);

    // Checks if the userAgent was resolved correctly
    if (this._browserInfo && this._browserInfo.prefix) {
      // set additional prefix information
      this.cssPrefix = this._browserInfo.prefix.css;
      this.jsPrefix = this._browserInfo.prefix.inline;
      this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo);
    } else {
      this._usePrefixAllFallback = true;
      return false;
    }

    var data = this._browserInfo.browser && _prefixProps2.default[this._browserInfo.browser];
    if (data) {
      this._requiresPrefix = Object.keys(data).filter(function (key) {
        return data[key] >= _this._browserInfo.version;
      }).reduce(function (result, name) {
        result[name] = true;
        return result;
      }, {});
      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
    } else {
      this._usePrefixAllFallback = true;
    }
  }

  /**
   * Returns a prefixed version of the style object
   * @param {Object} styles - Style object that gets prefixed properties added
   * @returns {Object} - Style object with prefixed properties and values
   */


  _createClass(Prefixer, [{
    key: 'prefix',
    value: function prefix(styles) {
      var _this2 = this;

      // use prefixAll as fallback if userAgent can not be resolved
      if (this._usePrefixAllFallback) {
        return (0, _prefixAll3.default)(styles);
      }

      // only add prefixes if needed
      if (!this._hasPropsRequiringPrefix) {
        return styles;
      }

      Object.keys(styles).forEach(function (property) {
        var value = styles[property];
        if (value instanceof Object && !Array.isArray(value)) {
          // recurse through nested style objects
          styles[property] = _this2.prefix(value);
        } else {
          // add prefixes if needed
          if (_this2._requiresPrefix[property]) {
            styles[_this2.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
            if (!_this2._keepUnprefixed) {
              delete styles[property];
            }
          }
        }
      });

      Object.keys(styles).forEach(function (property) {
        [].concat(styles[property]).forEach(function (value) {
          // resolve plugins
          plugins.forEach(function (plugin) {
            // generates a new plugin interface with current data
            assignStyles(styles, plugin({
              property: property,
              value: value,
              styles: styles,
              browserInfo: _this2._browserInfo,
              prefix: {
                js: _this2.jsPrefix,
                css: _this2.cssPrefix,
                keyframes: _this2.prefixedKeyframes
              },
              keepUnprefixed: _this2._keepUnprefixed,
              requiresPrefix: _this2._requiresPrefix
            }), value, _this2._keepUnprefixed);
          });
        });
      });

      return (0, _sortPrefixedStyle2.default)(styles);
    }

    /**
     * Returns a prefixed version of the style object using all vendor prefixes
     * @param {Object} styles - Style object that gets prefixed properties added
     * @returns {Object} - Style object with prefixed properties and values
     */

  }], [{
    key: 'prefixAll',
    value: function prefixAll(styles) {
      return (0, _prefixAll3.default)(styles);
    }
  }]);

  return Prefixer;
}();

exports.default = Prefixer;


function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var value = arguments[2];
  var keepUnprefixed = arguments[3];

  Object.keys(extend).forEach(function (property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function (val) {
        if (base[property].indexOf(val) === -1) {
          base[property].splice(baseValue.indexOf(value), keepUnprefixed ? 0 : 1, val);
        }
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];
},{"./plugins/calc":8,"./plugins/flex":9,"./plugins/flexboxIE":10,"./plugins/flexboxOld":11,"./plugins/grabCursor":12,"./plugins/gradient":13,"./plugins/position":14,"./plugins/sizing":15,"./plugins/transition":16,"./plugins/zoomCursor":17,"./prefixProps":18,"./static/prefixAll":28,"./utils/capitalizeString":30,"./utils/getBrowserInformation":31,"./utils/getPrefixedKeyframes":32,"./utils/sortPrefixedStyle":37}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function calc(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, css + 'calc('), value, keepUnprefixed));
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":33}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = { flex: true, 'inline-flex': true };

function flex(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'display' && values[value] && (browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
    return {
      display: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
    };
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":33}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  flex: 'flexbox',
  'inline-flex': 'inline-flexbox'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var styles = _ref.styles;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if ((alternativeProps[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
    if (!keepUnprefixed && !Array.isArray(styles[property])) {
      delete styles[property];
    }
    if (property === 'display' && alternativeValues[value]) {
      return {
        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
      };
    }
    if (alternativeProps[property]) {
      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":33}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
var properties = Object.keys(alternativeProps).concat(otherProps);

function flexboxOld(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var styles = _ref.styles;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
    if (!keepUnprefixed && !Array.isArray(styles[property])) {
      delete styles[property];
    }
    if (property === 'flexDirection' && typeof value === 'string') {
      return {
        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
      };
    }
    if (property === 'display' && alternativeValues[value]) {
      return {
        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
      };
    }
    if (alternativeProps[property]) {
      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":33}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = grabCursor;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = { grab: true, grabbing: true };

function grabCursor(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var browser = _ref.browserInfo.browser;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  // adds prefixes for firefox, chrome, safari, and opera regardless of version until a reliable brwoser support info can be found (see: https://github.com/rofrischmann/inline-style-prefixer/issues/79)
  if (property === 'cursor' && values[value] && (browser === 'firefox' || browser === 'chrome' || browser === 'safari' || browser === 'opera')) {
    return {
      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
    };
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":33}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.match(values) !== null && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":33}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function position(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var browser = _ref.browserInfo.browser;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'position' && value === 'sticky' && (browser === 'safari' || browser === 'ios_saf')) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":33}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  // This might change in the future
  // Keep an eye on it
  if (properties[property] && values[value]) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":33}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = transition;

var _hyphenateStyleName = require('hyphenate-style-name');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _unprefixProperty = require('../utils/unprefixProperty');

var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = { transition: true, transitionProperty: true };

function transition(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var css = _ref.prefix.css;
  var requiresPrefix = _ref.requiresPrefix;
  var keepUnprefixed = _ref.keepUnprefixed;

  // also check for already prefixed transitions
  var unprefixedProperty = (0, _unprefixProperty2.default)(property);

  if (typeof value === 'string' && properties[unprefixedProperty]) {
    var _ret = function () {
      // TODO: memoize this array
      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
        return (0, _hyphenateStyleName2.default)(prop);
      });

      // only split multi values, not cubic beziers
      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

      requiresPrefixDashCased.forEach(function (prop) {
        multipleValues.forEach(function (val, index) {
          if (val.indexOf(prop) > -1 && prop !== 'order') {
            multipleValues[index] = val.replace(prop, css + prop) + (keepUnprefixed ? ',' + val : '');
          }
        });
      });

      return {
        v: _defineProperty({}, property, multipleValues.join(','))
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
}
module.exports = exports['default'];
},{"../utils/unprefixProperty":38,"hyphenate-style-name":6}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = zoomCursor;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = { 'zoom-in': true, 'zoom-out': true };

function zoomCursor(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'cursor' && values[value] && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
    return {
      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
    };
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":33}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 55, "userSelect": 55, "fontKerning": 32, "textEmphasisPosition": 55, "textEmphasis": 55, "textEmphasisStyle": 55, "textEmphasisColor": 55, "boxDecorationBreak": 55, "clipPath": 55, "maskImage": 55, "maskMode": 55, "maskRepeat": 55, "maskPosition": 55, "maskClip": 55, "maskOrigin": 55, "maskSize": 55, "maskComposite": 55, "mask": 55, "maskBorderSource": 55, "maskBorderMode": 55, "maskBorderSlice": 55, "maskBorderWidth": 55, "maskBorderOutset": 55, "maskBorderRepeat": 55, "maskBorder": 55, "maskType": 55, "textDecorationStyle": 55, "textDecorationSkip": 55, "textDecorationLine": 55, "textDecorationColor": 55, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 10, "userSelect": 10, "backdropFilter": 10, "fontKerning": 9, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 10, "clipPath": 10, "maskImage": 10, "maskMode": 10, "maskRepeat": 10, "maskPosition": 10, "maskClip": 10, "maskOrigin": 10, "maskSize": 10, "maskComposite": 10, "mask": 10, "maskBorderSource": 10, "maskBorderMode": 10, "maskBorderSlice": 10, "maskBorderWidth": 10, "maskBorderOutset": 10, "maskBorderRepeat": 10, "maskBorder": 10, "maskType": 10, "textDecorationStyle": 10, "textDecorationSkip": 10, "textDecorationLine": 10, "textDecorationColor": 10, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10, "flowInto": 10, "flowFrom": 10, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 10, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 51, "userSelect": 51, "boxSizing": 28, "textAlignLast": 48, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 51, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 41, "userSelect": 41, "fontKerning": 19, "textEmphasisPosition": 41, "textEmphasis": 41, "textEmphasisStyle": 41, "textEmphasisColor": 41, "boxDecorationBreak": 41, "clipPath": 41, "maskImage": 41, "maskMode": 41, "maskRepeat": 41, "maskPosition": 41, "maskClip": 41, "maskOrigin": 41, "maskSize": 41, "maskComposite": 41, "mask": 41, "maskBorderSource": 41, "maskBorderMode": 41, "maskBorderSlice": 41, "maskBorderWidth": 41, "maskBorderOutset": 41, "maskBorderRepeat": 41, "maskBorder": 41, "maskType": 41, "textDecorationStyle": 41, "textDecorationSkip": 41, "textDecorationLine": 41, "textDecorationColor": 41, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36 }, "ie": { "flex": 10, "flexDirection": 10, "flexFlow": 10, "flexWrap": 10, "transform": 9, "transformOrigin": 9, "transformOriginX": 9, "transformOriginY": 9, "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "touchAction": 10, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 14, "wrapFlow": 14, "wrapThrough": 14, "wrapMargin": 14, "scrollSnapType": 14, "scrollSnapPointsX": 14, "scrollSnapPointsY": 14, "scrollSnapDestination": 14, "scrollSnapCoordinate": 14, "hyphens": 14, "flowInto": 14, "flowFrom": 14, "breakBefore": 14, "breakAfter": 14, "breakInside": 14, "regionFragment": 14, "gridTemplateColumns": 14, "gridTemplateRows": 14, "gridTemplateAreas": 14, "gridTemplate": 14, "gridAutoColumns": 14, "gridAutoRows": 14, "gridAutoFlow": 14, "grid": 14, "gridRowStart": 14, "gridColumnStart": 14, "gridRowEnd": 14, "gridRow": 14, "gridColumn": 14, "gridColumnEnd": 14, "gridColumnGap": 14, "gridRowGap": 14, "gridArea": 14, "gridGap": 14 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 9.3, "userSelect": 9.3, "backdropFilter": 9.3, "fontKerning": 9.3, "scrollSnapType": 9.3, "scrollSnapPointsX": 9.3, "scrollSnapPointsY": 9.3, "scrollSnapDestination": 9.3, "scrollSnapCoordinate": 9.3, "boxDecorationBreak": 9.3, "clipPath": 9.3, "maskImage": 9.3, "maskMode": 9.3, "maskRepeat": 9.3, "maskPosition": 9.3, "maskClip": 9.3, "maskOrigin": 9.3, "maskSize": 9.3, "maskComposite": 9.3, "mask": 9.3, "maskBorderSource": 9.3, "maskBorderMode": 9.3, "maskBorderSlice": 9.3, "maskBorderWidth": 9.3, "maskBorderOutset": 9.3, "maskBorderRepeat": 9.3, "maskBorder": 9.3, "maskType": 9.3, "textSizeAdjust": 9.3, "textDecorationStyle": 9.3, "textDecorationSkip": 9.3, "textDecorationLine": 9.3, "textDecorationColor": 9.3, "shapeImageThreshold": 9.3, "shapeImageMargin": 9.3, "shapeImageOutside": 9.3, "filter": 9, "hyphens": 9.3, "flowInto": 9.3, "flowFrom": 9.3, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 9.3, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 51, "userSelect": 51, "fontKerning": 4.4, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "filter": 51, "fontFeatureSettings": 4.4, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "and_chr": { "appearance": 51, "userSelect": 51, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "textDecorationStyle": 51, "textDecorationSkip": 51, "textDecorationLine": 51, "textDecorationColor": 51, "filter": 51 }, "and_uc": { "flex": 9.9, "flexBasis": 9.9, "flexDirection": 9.9, "flexGrow": 9.9, "flexFlow": 9.9, "flexShrink": 9.9, "flexWrap": 9.9, "alignContent": 9.9, "alignItems": 9.9, "alignSelf": 9.9, "justifyContent": 9.9, "order": 9.9, "transition": 9.9, "transitionDelay": 9.9, "transitionDuration": 9.9, "transitionProperty": 9.9, "transitionTimingFunction": 9.9, "transform": 9.9, "transformOrigin": 9.9, "transformOriginX": 9.9, "transformOriginY": 9.9, "backfaceVisibility": 9.9, "perspective": 9.9, "perspectiveOrigin": 9.9, "transformStyle": 9.9, "transformOriginZ": 9.9, "animation": 9.9, "animationDelay": 9.9, "animationDirection": 9.9, "animationFillMode": 9.9, "animationDuration": 9.9, "animationIterationCount": 9.9, "animationName": 9.9, "animationPlayState": 9.9, "animationTimingFunction": 9.9, "appearance": 9.9, "userSelect": 9.9, "fontKerning": 9.9, "textEmphasisPosition": 9.9, "textEmphasis": 9.9, "textEmphasisStyle": 9.9, "textEmphasisColor": 9.9, "maskImage": 9.9, "maskMode": 9.9, "maskRepeat": 9.9, "maskPosition": 9.9, "maskClip": 9.9, "maskOrigin": 9.9, "maskSize": 9.9, "maskComposite": 9.9, "mask": 9.9, "maskBorderSource": 9.9, "maskBorderMode": 9.9, "maskBorderSlice": 9.9, "maskBorderWidth": 9.9, "maskBorderOutset": 9.9, "maskBorderRepeat": 9.9, "maskBorder": 9.9, "maskType": 9.9, "textSizeAdjust": 9.9, "filter": 9.9, "hyphens": 9.9, "flowInto": 9.9, "flowFrom": 9.9, "breakBefore": 9.9, "breakAfter": 9.9, "breakInside": 9.9, "regionFragment": 9.9, "fontFeatureSettings": 9.9, "columnCount": 9.9, "columnFill": 9.9, "columnGap": 9.9, "columnRule": 9.9, "columnRuleColor": 9.9, "columnRuleStyle": 9.9, "columnRuleWidth": 9.9, "columns": 9.9, "columnSpan": 9.9, "columnWidth": 9.9 }, "op_mini": {} };
module.exports = exports["default"];
},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];
},{"../../utils/isPrefixedValue":35,"../../utils/joinPrefixedValue":36}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/joinPrefixedValue":36}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = { flex: true, 'inline-flex': true };

function flex(property, value) {
  if (property === 'display' && values[value]) {
    return {
      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
    };
  }
}
module.exports = exports['default'];
},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(property, value) {
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];
},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value) {
  if (property === 'flexDirection' && typeof value === 'string') {
    return {
      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
    };
  }
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];
},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/isPrefixedValue":35,"../../utils/joinPrefixedValue":36}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return { position: ['-webkit-sticky', 'sticky'] };
  }
}
module.exports = exports['default'];
},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties[property] && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/joinPrefixedValue":36}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateStyleName = require('hyphenate-style-name');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _capitalizeString = require('../../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _prefixProps = require('../prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true
};

function transition(property, value) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties[property]) {
    var _ref2;

    var outputValue = prefixValue(value);
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
      return value.match(/-moz-|-ms-/) === null;
    }).join(',');

    // if the property is already prefixed
    if (property.indexOf('Webkit') > -1) {
      return _defineProperty({}, property, webkitOutput);
    }

    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
  }
}

function prefixValue(value) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  // iterate each single value and check for transitioned properties
  // that need to be prefixed as well
  multipleValues.forEach(function (val, index) {
    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          // join all prefixes and create a new value
          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
        }
      });
      return out;
    }, val);
  });

  return multipleValues.join(',');
}
module.exports = exports['default'];
},{"../../utils/capitalizeString":30,"../../utils/isPrefixedValue":35,"../prefixProps":29,"hyphenate-style-name":6}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixAll;

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _capitalizeString = require('../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _sortPrefixedStyle = require('../utils/sortPrefixedStyle');

var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

var _position = require('./plugins/position');

var _position2 = _interopRequireDefault(_position);

var _calc = require('./plugins/calc');

var _calc2 = _interopRequireDefault(_calc);

var _cursor = require('./plugins/cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _flex = require('./plugins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _sizing = require('./plugins/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _gradient = require('./plugins/gradient');

var _gradient2 = _interopRequireDefault(_gradient);

var _transition = require('./plugins/transition');

var _transition2 = _interopRequireDefault(_transition);

var _flexboxIE = require('./plugins/flexboxIE');

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = require('./plugins/flexboxOld');

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// special flexbox specifications


var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

/**
 * Returns a prefixed version of the style object using all vendor prefixes
 * @param {Object} styles - Style object that gets prefixed properties added
 * @returns {Object} - Style object with prefixed properties and values
 */
function prefixAll(styles) {
  Object.keys(styles).forEach(function (property) {
    var value = styles[property];
    if (value instanceof Object && !Array.isArray(value)) {
      // recurse through nested style objects
      styles[property] = prefixAll(value);
    } else {
      Object.keys(_prefixProps2.default).forEach(function (prefix) {
        var properties = _prefixProps2.default[prefix];
        // add prefixes if needed
        if (properties[property]) {
          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
        }
      });
    }
  });

  Object.keys(styles).forEach(function (property) {
    [].concat(styles[property]).forEach(function (value, index) {
      // resolve every special plugins
      plugins.forEach(function (plugin) {
        return assignStyles(styles, plugin(property, value));
      });
    });
  });

  return (0, _sortPrefixedStyle2.default)(styles);
}

function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  Object.keys(extend).forEach(function (property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function (value) {
        var valueIndex = baseValue.indexOf(value);
        if (valueIndex > -1) {
          base[property].splice(valueIndex, 1);
        }
        base[property].push(value);
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];
},{"../utils/capitalizeString":30,"../utils/sortPrefixedStyle":37,"./plugins/calc":19,"./plugins/cursor":20,"./plugins/flex":21,"./plugins/flexboxIE":22,"./plugins/flexboxOld":23,"./plugins/gradient":24,"./plugins/position":25,"./plugins/sizing":26,"./plugins/transition":27,"./prefixProps":29}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
module.exports = exports["default"];
},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// helper to capitalize strings

exports.default = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = exports["default"];
},{}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bowser = require('bowser');

var _bowser2 = _interopRequireDefault(_bowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendorPrefixes = {
  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen', 'chromium', 'vivaldi'],
  Moz: ['firefox', 'seamonkey', 'sailfish'],
  ms: ['msie', 'msedge']
};
var browsers = {
  chrome: [['chrome'], ['chromium']],
  safari: [['safari']],
  firefox: [['firefox']],
  edge: [['msedge']],
  opera: [['opera'], ['vivaldi']],
  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
  ie: [['msie']],
  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
  and_uc: [['android', 'mobile'], ['android', 'tablet']],
  android: [['android', 'mobile'], ['android', 'tablet']]
};

var browserByInfo = function browserByInfo(info) {
  if (info.firefox) {
    return 'firefox';
  }
  var name = '';

  Object.keys(browsers).forEach(function (browser) {
    browsers[browser].forEach(function (condition) {
      var match = 0;
      condition.forEach(function (single) {
        if (info[single]) {
          match += 1;
        }
      });
      if (condition.length === match) {
        name = browser;
      }
    });
  });

  return name;
};

/**
 * Uses bowser to get default browser information such as version and name
 * Evaluates bowser info and adds vendorPrefix information
 * @param {string} userAgent - userAgent that gets evaluated
 */

exports.default = function (userAgent) {
  if (!userAgent) {
    return false;
  }
  var info = _bowser2.default._detect(userAgent);

  Object.keys(vendorPrefixes).forEach(function (prefix) {
    vendorPrefixes[prefix].forEach(function (browser) {
      if (info[browser]) {
        info.prefix = {
          inline: prefix,
          css: '-' + prefix.toLowerCase() + '-'
        };
      }
    });
  });

  info.browser = browserByInfo(info);

  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);
  info.osversion = parseFloat(info.osversion);

  // iOS forces all browsers to use Safari under the hood
  // as the Safari version seems to match the iOS version
  // we just explicitely use the osversion instead
  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
  if (info.browser === 'ios_saf' && info.version > info.osversion) {
    info.version = info.osversion;
    info.safari = true;
  }

  // seperate native android chrome
  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
  if (info.browser === 'android' && info.chrome && info.version > 37) {
    info.browser = 'and_chr';
  }

  // For android < 4.4 we want to check the osversion
  // not the chrome version, see issue #26
  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
  if (info.browser === 'android' && info.osversion < 5) {
    info.version = info.osversion;
  }

  return info;
};

module.exports = exports['default'];
},{"bowser":4}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var browser = _ref.browser;
  var version = _ref.version;
  var prefix = _ref.prefix;

  var prefixedKeyframes = 'keyframes';

  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
    prefixedKeyframes = prefix.css + prefixedKeyframes;
  }
  return prefixedKeyframes;
};

module.exports = exports['default'];
},{}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (prefixedValue, value, keepUnprefixed) {
  return keepUnprefixed ? [prefixedValue, value] : prefixedValue;
};

module.exports = exports["default"];
},{}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property) {
  return property.match(/^(Webkit|Moz|O|ms)/) !== null;
};

module.exports = exports["default"];
},{}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  if (Array.isArray(value)) value = value.join(',');

  return value.match(/-webkit-|-moz-|-ms-/) !== null;
};

module.exports = exports['default'];
},{}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// returns a style object with a single concated prefixed value string

exports.default = function (property, value) {
  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
    return prefix + value;
  } : arguments[2];
  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
    return replacer(prefix, value);
  }));
};

module.exports = exports['default'];
},{}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortPrefixedStyle;

var _isPrefixedProperty = require('./isPrefixedProperty');

var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sortPrefixedStyle(style) {
  return Object.keys(style).sort(function (left, right) {
    if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
      return -1;
    } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
      return 1;
    }
    return 0;
  }).reduce(function (sortedStyle, prop) {
    sortedStyle[prop] = style[prop];
    return sortedStyle;
  }, {});
}
module.exports = exports['default'];
},{"./isPrefixedProperty":34}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property) {
  var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
  return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
};

module.exports = exports['default'];
},{}],39:[function(require,module,exports){
var SplitPane = require('./lib/SplitPane');

module.exports = SplitPane;

},{"./lib/SplitPane":42}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _reactStyleProptype = require('react-style-proptype');

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';

var Pane = function (_Component) {
    _inherits(Pane, _Component);

    function Pane() {
        var _ref;

        _classCallCheck(this, Pane);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Pane.__proto__ || Object.getPrototypeOf(Pane)).call.apply(_ref, [this].concat(args)));

        _this.state = { size: _this.props.size };
        return _this;
    }

    _createClass(Pane, [{
        key: 'render',
        value: function render() {
            var split = this.props.split;
            var classes = ['Pane', split, this.props.className];

            var style = _extends({}, this.props.style || {}, {
                flex: 1,
                position: 'relative',
                outline: 'none'
            });

            if (this.state.size !== undefined) {
                if (split === 'vertical') {
                    style.width = this.state.size;
                } else {
                    style.height = this.state.size;
                    style.display = 'flex';
                }
                style.flex = 'none';
            }

            return _react2.default.createElement('div', { className: classes.join(' '), style: this.props.prefixer.prefix(style) }, this.props.children);
        }
    }]);

    return Pane;
}(_react.Component);

Pane.propTypes = {
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    className: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.node.isRequired,
    prefixer: _react.PropTypes.instanceOf(_inlineStylePrefixer2.default).isRequired,
    style: _reactStyleProptype2.default,
    size: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
};

Pane.defaultProps = {
    prefixer: new _inlineStylePrefixer2.default({ userAgent: USER_AGENT })
};

exports.default = Pane;
module.exports = exports['default'];

},{"inline-style-prefixer":7,"react":"react","react-style-proptype":44}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _reactStyleProptype = require('react-style-proptype');

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';

var Resizer = function (_Component) {
    _inherits(Resizer, _Component);

    function Resizer() {
        _classCallCheck(this, Resizer);

        return _possibleConstructorReturn(this, (Resizer.__proto__ || Object.getPrototypeOf(Resizer)).apply(this, arguments));
    }

    _createClass(Resizer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                split = _props.split,
                className = _props.className,
                resizerClassName = _props.resizerClassName;

            var classes = [resizerClassName, split, className];
            return _react2.default.createElement('span', {
                className: classes.join(' '),
                style: this.props.prefixer.prefix(this.props.style) || {},
                onMouseDown: function onMouseDown(event) {
                    _this2.props.onMouseDown(event);
                },
                onTouchStart: function onTouchStart(event) {
                    event.preventDefault();
                    _this2.props.onTouchStart(event);
                },
                onTouchEnd: function onTouchEnd(event) {
                    event.preventDefault();
                    _this2.props.onTouchEnd(event);
                }
            });
        }
    }]);

    return Resizer;
}(_react.Component);

Resizer.propTypes = {
    onMouseDown: _react.PropTypes.func.isRequired,
    onTouchStart: _react.PropTypes.func.isRequired,
    onTouchEnd: _react.PropTypes.func.isRequired,
    prefixer: _react.PropTypes.instanceOf(_inlineStylePrefixer2.default).isRequired,
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    className: _react.PropTypes.string.isRequired,
    resizerClassName: _react.PropTypes.string.isRequired,
    style: _reactStyleProptype2.default
};

Resizer.defaultProps = {
    prefixer: new _inlineStylePrefixer2.default({ userAgent: USER_AGENT }),
    resizerClassName: 'Resizer'
};

exports.default = Resizer;
module.exports = exports['default'];

},{"inline-style-prefixer":7,"react":"react","react-style-proptype":44}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _reactStyleProptype = require('react-style-proptype');

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _Pane = require('./Pane');

var _Pane2 = _interopRequireDefault(_Pane);

var _Resizer = require('./Resizer');

var _Resizer2 = _interopRequireDefault(_Resizer);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';

function unFocus(document, window) {
    if (document.selection) {
        document.selection.empty();
    } else {
        try {
            window.getSelection().removeAllRanges();
            // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}

var SplitPane = function (_Component) {
    _inherits(SplitPane, _Component);

    function SplitPane() {
        var _ref;

        _classCallCheck(this, SplitPane);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = SplitPane.__proto__ || Object.getPrototypeOf(SplitPane)).call.apply(_ref, [this].concat(args)));

        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onTouchStart = _this.onTouchStart.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onTouchMove = _this.onTouchMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);

        _this.state = {
            active: false,
            resized: false
        };
        return _this;
    }

    _createClass(SplitPane, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setSize(this.props, this.state);
            document.addEventListener('mouseup', this.onMouseUp);
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('touchmove', this.onTouchMove);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setSize(props, this.state);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mouseup', this.onMouseUp);
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('touchmove', this.onTouchMove);
        }
    }, {
        key: 'onMouseDown',
        value: function onMouseDown(event) {
            var eventWithTouches = _extends({}, event, { touches: [{ clientX: event.clientX, clientY: event.clientY }] });
            this.onTouchStart(eventWithTouches);
        }
    }, {
        key: 'onTouchStart',
        value: function onTouchStart(event) {
            if (this.props.allowResize) {
                unFocus(document, window);
                var position = this.props.split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
                if (typeof this.props.onDragStarted === 'function') {
                    this.props.onDragStarted();
                }
                this.setState({
                    active: true,
                    position: position
                });
            }
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove(event) {
            var eventWithTouches = _extends({}, event, { touches: [{ clientX: event.clientX, clientY: event.clientY }] });
            this.onTouchMove(eventWithTouches);
        }
    }, {
        key: 'onTouchMove',
        value: function onTouchMove(event) {
            if (this.props.allowResize) {
                if (this.state.active) {
                    unFocus(document, window);
                    var isPrimaryFirst = this.props.primary === 'first';
                    var ref = isPrimaryFirst ? this.pane1 : this.pane2;
                    if (ref) {
                        var node = _reactDom2.default.findDOMNode(ref);

                        if (node.getBoundingClientRect) {
                            var width = node.getBoundingClientRect().width;
                            var height = node.getBoundingClientRect().height;
                            var current = this.props.split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
                            var size = this.props.split === 'vertical' ? width : height;
                            var position = this.state.position;
                            var newPosition = isPrimaryFirst ? position - current : current - position;

                            var maxSize = this.props.maxSize;
                            if (this.props.maxSize !== undefined && this.props.maxSize <= 0) {
                                var splPane = this.splitPane;
                                if (this.props.split === 'vertical') {
                                    maxSize = splPane.getBoundingClientRect().width + this.props.maxSize;
                                } else {
                                    maxSize = splPane.getBoundingClientRect().height + this.props.maxSize;
                                }
                            }

                            var newSize = size - newPosition;

                            if (newSize < this.props.minSize) {
                                newSize = this.props.minSize;
                            } else if (this.props.maxSize !== undefined && newSize > maxSize) {
                                newSize = maxSize;
                            } else {
                                this.setState({
                                    position: current,
                                    resized: true
                                });
                            }

                            if (this.props.onChange) {
                                this.props.onChange(newSize);
                            }
                            this.setState({
                                draggedSize: newSize
                            });
                            ref.setState({
                                size: newSize
                            });
                        }
                    }
                }
            }
        }
    }, {
        key: 'onMouseUp',
        value: function onMouseUp() {
            if (this.props.allowResize) {
                if (this.state.active) {
                    if (typeof this.props.onDragFinished === 'function') {
                        this.props.onDragFinished(this.state.draggedSize);
                    }
                    this.setState({
                        active: false
                    });
                }
            }
        }
    }, {
        key: 'setSize',
        value: function setSize(props, state) {
            var ref = this.props.primary === 'first' ? this.pane1 : this.pane2;
            var newSize = void 0;
            if (ref) {
                newSize = props.size || state && state.draggedSize || props.defaultSize || props.minSize;
                ref.setState({
                    size: newSize
                });
                if (props.size !== state.draggedSize) {
                    this.setState({
                        draggedSize: newSize
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                split = _props.split,
                allowResize = _props.allowResize;

            var disabledClass = allowResize ? '' : 'disabled';

            var style = _extends({}, this.props.style || {}, {
                display: 'flex',
                flex: 1,
                position: 'relative',
                outline: 'none',
                overflow: 'hidden',
                MozUserSelect: 'text',
                WebkitUserSelect: 'text',
                msUserSelect: 'text',
                userSelect: 'text'
            });

            if (split === 'vertical') {
                _extends(style, {
                    flexDirection: 'row',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    right: 0
                });
            } else {
                _extends(style, {
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '100%',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    width: '100%'
                });
            }

            var children = this.props.children;
            var classes = ['SplitPane', this.props.className, split, disabledClass];

            var pane1Style = this.props.prefixer.prefix(_extends({}, this.props.paneStyle || {}, this.props.pane1Style || {}));

            var pane2Style = this.props.prefixer.prefix(_extends({}, this.props.paneStyle || {}, this.props.pane2Style || {}));

            return _react2.default.createElement('div', {
                className: classes.join(' '),
                style: this.props.prefixer.prefix(style),
                ref: function ref(node) {
                    _this2.splitPane = node;
                }
            }, _react2.default.createElement(_Pane2.default, {
                ref: function ref(node) {
                    _this2.pane1 = node;
                },
                key: 'pane1', className: 'Pane1',
                style: pane1Style,
                split: split,
                size: this.props.primary === 'first' ? this.props.size || this.props.defaultSize || this.props.minSize : undefined
            }, children[0]), _react2.default.createElement(_Resizer2.default, {
                ref: function ref(node) {
                    _this2.resizer = node;
                },
                key: 'resizer',
                className: disabledClass,
                resizerClassName: this.props.resizerClassName,
                onMouseDown: this.onMouseDown,
                onTouchStart: this.onTouchStart,
                onTouchEnd: this.onMouseUp,
                style: this.props.resizerStyle || {},
                split: split
            }), _react2.default.createElement(_Pane2.default, {
                ref: function ref(node) {
                    _this2.pane2 = node;
                },
                key: 'pane2',
                className: 'Pane2',
                style: pane2Style,
                split: split,
                size: this.props.primary === 'second' ? this.props.size || this.props.defaultSize || this.props.minSize : undefined
            }, children[1]));
        }
    }]);

    return SplitPane;
}(_react.Component);

SplitPane.propTypes = {
    primary: _react.PropTypes.oneOf(['first', 'second']),
    minSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    maxSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    // eslint-disable-next-line react/no-unused-prop-types
    defaultSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    size: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    allowResize: _react.PropTypes.bool,
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    onDragStarted: _react.PropTypes.func,
    onDragFinished: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    prefixer: _react.PropTypes.instanceOf(_inlineStylePrefixer2.default).isRequired,
    style: _reactStyleProptype2.default,
    resizerStyle: _reactStyleProptype2.default,
    paneStyle: _reactStyleProptype2.default,
    pane1Style: _reactStyleProptype2.default,
    pane2Style: _reactStyleProptype2.default,
    className: _react.PropTypes.string,
    resizerClassName: _react.PropTypes.string,
    children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired
};

SplitPane.defaultProps = {
    split: 'vertical',
    minSize: 50,
    allowResize: true,
    prefixer: new _inlineStylePrefixer2.default({ userAgent: USER_AGENT }),
    primary: 'first'
};

exports.default = SplitPane;
module.exports = exports['default'];

},{"./Pane":40,"./Resizer":41,"inline-style-prefixer":7,"react":"react","react-dom":"react-dom","react-style-proptype":44}],43:[function(require,module,exports){
module.exports = [
  "alignContent",
  "MozAlignContent",
  "WebKitAlignContent",
  "MSAlignContent",
  "OAlignContent",
  "alignItems",
  "MozAlignItems",
  "WebKitAlignItems",
  "MSAlignItems",
  "OAlignItems",
  "alignSelf",
  "MozAlignSelf",
  "WebKitAlignSelf",
  "MSAlignSelf",
  "OAlignSelf",
  "all",
  "MozAll",
  "WebKitAll",
  "MSAll",
  "OAll",
  "animation",
  "MozAnimation",
  "WebKitAnimation",
  "MSAnimation",
  "OAnimation",
  "animationDelay",
  "MozAnimationDelay",
  "WebKitAnimationDelay",
  "MSAnimationDelay",
  "OAnimationDelay",
  "animationDirection",
  "MozAnimationDirection",
  "WebKitAnimationDirection",
  "MSAnimationDirection",
  "OAnimationDirection",
  "animationDuration",
  "MozAnimationDuration",
  "WebKitAnimationDuration",
  "MSAnimationDuration",
  "OAnimationDuration",
  "animationFillMode",
  "MozAnimationFillMode",
  "WebKitAnimationFillMode",
  "MSAnimationFillMode",
  "OAnimationFillMode",
  "animationIterationCount",
  "MozAnimationIterationCount",
  "WebKitAnimationIterationCount",
  "MSAnimationIterationCount",
  "OAnimationIterationCount",
  "animationName",
  "MozAnimationName",
  "WebKitAnimationName",
  "MSAnimationName",
  "OAnimationName",
  "animationPlayState",
  "MozAnimationPlayState",
  "WebKitAnimationPlayState",
  "MSAnimationPlayState",
  "OAnimationPlayState",
  "animationTimingFunction",
  "MozAnimationTimingFunction",
  "WebKitAnimationTimingFunction",
  "MSAnimationTimingFunction",
  "OAnimationTimingFunction",
  "backfaceVisibility",
  "MozBackfaceVisibility",
  "WebKitBackfaceVisibility",
  "MSBackfaceVisibility",
  "OBackfaceVisibility",
  "background",
  "MozBackground",
  "WebKitBackground",
  "MSBackground",
  "OBackground",
  "backgroundAttachment",
  "MozBackgroundAttachment",
  "WebKitBackgroundAttachment",
  "MSBackgroundAttachment",
  "OBackgroundAttachment",
  "backgroundBlendMode",
  "MozBackgroundBlendMode",
  "WebKitBackgroundBlendMode",
  "MSBackgroundBlendMode",
  "OBackgroundBlendMode",
  "backgroundClip",
  "MozBackgroundClip",
  "WebKitBackgroundClip",
  "MSBackgroundClip",
  "OBackgroundClip",
  "backgroundColor",
  "MozBackgroundColor",
  "WebKitBackgroundColor",
  "MSBackgroundColor",
  "OBackgroundColor",
  "backgroundImage",
  "MozBackgroundImage",
  "WebKitBackgroundImage",
  "MSBackgroundImage",
  "OBackgroundImage",
  "backgroundOrigin",
  "MozBackgroundOrigin",
  "WebKitBackgroundOrigin",
  "MSBackgroundOrigin",
  "OBackgroundOrigin",
  "backgroundPosition",
  "MozBackgroundPosition",
  "WebKitBackgroundPosition",
  "MSBackgroundPosition",
  "OBackgroundPosition",
  "backgroundRepeat",
  "MozBackgroundRepeat",
  "WebKitBackgroundRepeat",
  "MSBackgroundRepeat",
  "OBackgroundRepeat",
  "backgroundSize",
  "MozBackgroundSize",
  "WebKitBackgroundSize",
  "MSBackgroundSize",
  "OBackgroundSize",
  "blockSize",
  "MozBlockSize",
  "WebKitBlockSize",
  "MSBlockSize",
  "OBlockSize",
  "border",
  "MozBorder",
  "WebKitBorder",
  "MSBorder",
  "OBorder",
  "borderBlockEnd",
  "MozBorderBlockEnd",
  "WebKitBorderBlockEnd",
  "MSBorderBlockEnd",
  "OBorderBlockEnd",
  "borderBlockEndColor",
  "MozBorderBlockEndColor",
  "WebKitBorderBlockEndColor",
  "MSBorderBlockEndColor",
  "OBorderBlockEndColor",
  "borderBlockEndStyle",
  "MozBorderBlockEndStyle",
  "WebKitBorderBlockEndStyle",
  "MSBorderBlockEndStyle",
  "OBorderBlockEndStyle",
  "borderBlockEndWidth",
  "MozBorderBlockEndWidth",
  "WebKitBorderBlockEndWidth",
  "MSBorderBlockEndWidth",
  "OBorderBlockEndWidth",
  "borderBlockStart",
  "MozBorderBlockStart",
  "WebKitBorderBlockStart",
  "MSBorderBlockStart",
  "OBorderBlockStart",
  "borderBlockStartColor",
  "MozBorderBlockStartColor",
  "WebKitBorderBlockStartColor",
  "MSBorderBlockStartColor",
  "OBorderBlockStartColor",
  "borderBlockStartStyle",
  "MozBorderBlockStartStyle",
  "WebKitBorderBlockStartStyle",
  "MSBorderBlockStartStyle",
  "OBorderBlockStartStyle",
  "borderBlockStartWidth",
  "MozBorderBlockStartWidth",
  "WebKitBorderBlockStartWidth",
  "MSBorderBlockStartWidth",
  "OBorderBlockStartWidth",
  "borderBottom",
  "MozBorderBottom",
  "WebKitBorderBottom",
  "MSBorderBottom",
  "OBorderBottom",
  "borderBottomColor",
  "MozBorderBottomColor",
  "WebKitBorderBottomColor",
  "MSBorderBottomColor",
  "OBorderBottomColor",
  "borderBottomLeftRadius",
  "MozBorderBottomLeftRadius",
  "WebKitBorderBottomLeftRadius",
  "MSBorderBottomLeftRadius",
  "OBorderBottomLeftRadius",
  "borderBottomRightRadius",
  "MozBorderBottomRightRadius",
  "WebKitBorderBottomRightRadius",
  "MSBorderBottomRightRadius",
  "OBorderBottomRightRadius",
  "borderBottomStyle",
  "MozBorderBottomStyle",
  "WebKitBorderBottomStyle",
  "MSBorderBottomStyle",
  "OBorderBottomStyle",
  "borderBottomWidth",
  "MozBorderBottomWidth",
  "WebKitBorderBottomWidth",
  "MSBorderBottomWidth",
  "OBorderBottomWidth",
  "borderCollapse",
  "MozBorderCollapse",
  "WebKitBorderCollapse",
  "MSBorderCollapse",
  "OBorderCollapse",
  "borderColor",
  "MozBorderColor",
  "WebKitBorderColor",
  "MSBorderColor",
  "OBorderColor",
  "borderImage",
  "MozBorderImage",
  "WebKitBorderImage",
  "MSBorderImage",
  "OBorderImage",
  "borderImageOutset",
  "MozBorderImageOutset",
  "WebKitBorderImageOutset",
  "MSBorderImageOutset",
  "OBorderImageOutset",
  "borderImageRepeat",
  "MozBorderImageRepeat",
  "WebKitBorderImageRepeat",
  "MSBorderImageRepeat",
  "OBorderImageRepeat",
  "borderImageSlice",
  "MozBorderImageSlice",
  "WebKitBorderImageSlice",
  "MSBorderImageSlice",
  "OBorderImageSlice",
  "borderImageSource",
  "MozBorderImageSource",
  "WebKitBorderImageSource",
  "MSBorderImageSource",
  "OBorderImageSource",
  "borderImageWidth",
  "MozBorderImageWidth",
  "WebKitBorderImageWidth",
  "MSBorderImageWidth",
  "OBorderImageWidth",
  "borderInlineEnd",
  "MozBorderInlineEnd",
  "WebKitBorderInlineEnd",
  "MSBorderInlineEnd",
  "OBorderInlineEnd",
  "borderInlineEndColor",
  "MozBorderInlineEndColor",
  "WebKitBorderInlineEndColor",
  "MSBorderInlineEndColor",
  "OBorderInlineEndColor",
  "borderInlineEndStyle",
  "MozBorderInlineEndStyle",
  "WebKitBorderInlineEndStyle",
  "MSBorderInlineEndStyle",
  "OBorderInlineEndStyle",
  "borderInlineEndWidth",
  "MozBorderInlineEndWidth",
  "WebKitBorderInlineEndWidth",
  "MSBorderInlineEndWidth",
  "OBorderInlineEndWidth",
  "borderInlineStart",
  "MozBorderInlineStart",
  "WebKitBorderInlineStart",
  "MSBorderInlineStart",
  "OBorderInlineStart",
  "borderInlineStartColor",
  "MozBorderInlineStartColor",
  "WebKitBorderInlineStartColor",
  "MSBorderInlineStartColor",
  "OBorderInlineStartColor",
  "borderInlineStartStyle",
  "MozBorderInlineStartStyle",
  "WebKitBorderInlineStartStyle",
  "MSBorderInlineStartStyle",
  "OBorderInlineStartStyle",
  "borderInlineStartWidth",
  "MozBorderInlineStartWidth",
  "WebKitBorderInlineStartWidth",
  "MSBorderInlineStartWidth",
  "OBorderInlineStartWidth",
  "borderLeft",
  "MozBorderLeft",
  "WebKitBorderLeft",
  "MSBorderLeft",
  "OBorderLeft",
  "borderLeftColor",
  "MozBorderLeftColor",
  "WebKitBorderLeftColor",
  "MSBorderLeftColor",
  "OBorderLeftColor",
  "borderLeftStyle",
  "MozBorderLeftStyle",
  "WebKitBorderLeftStyle",
  "MSBorderLeftStyle",
  "OBorderLeftStyle",
  "borderLeftWidth",
  "MozBorderLeftWidth",
  "WebKitBorderLeftWidth",
  "MSBorderLeftWidth",
  "OBorderLeftWidth",
  "borderRadius",
  "MozBorderRadius",
  "WebKitBorderRadius",
  "MSBorderRadius",
  "OBorderRadius",
  "borderRight",
  "MozBorderRight",
  "WebKitBorderRight",
  "MSBorderRight",
  "OBorderRight",
  "borderRightColor",
  "MozBorderRightColor",
  "WebKitBorderRightColor",
  "MSBorderRightColor",
  "OBorderRightColor",
  "borderRightStyle",
  "MozBorderRightStyle",
  "WebKitBorderRightStyle",
  "MSBorderRightStyle",
  "OBorderRightStyle",
  "borderRightWidth",
  "MozBorderRightWidth",
  "WebKitBorderRightWidth",
  "MSBorderRightWidth",
  "OBorderRightWidth",
  "borderSpacing",
  "MozBorderSpacing",
  "WebKitBorderSpacing",
  "MSBorderSpacing",
  "OBorderSpacing",
  "borderStyle",
  "MozBorderStyle",
  "WebKitBorderStyle",
  "MSBorderStyle",
  "OBorderStyle",
  "borderTop",
  "MozBorderTop",
  "WebKitBorderTop",
  "MSBorderTop",
  "OBorderTop",
  "borderTopColor",
  "MozBorderTopColor",
  "WebKitBorderTopColor",
  "MSBorderTopColor",
  "OBorderTopColor",
  "borderTopLeftRadius",
  "MozBorderTopLeftRadius",
  "WebKitBorderTopLeftRadius",
  "MSBorderTopLeftRadius",
  "OBorderTopLeftRadius",
  "borderTopRightRadius",
  "MozBorderTopRightRadius",
  "WebKitBorderTopRightRadius",
  "MSBorderTopRightRadius",
  "OBorderTopRightRadius",
  "borderTopStyle",
  "MozBorderTopStyle",
  "WebKitBorderTopStyle",
  "MSBorderTopStyle",
  "OBorderTopStyle",
  "borderTopWidth",
  "MozBorderTopWidth",
  "WebKitBorderTopWidth",
  "MSBorderTopWidth",
  "OBorderTopWidth",
  "borderWidth",
  "MozBorderWidth",
  "WebKitBorderWidth",
  "MSBorderWidth",
  "OBorderWidth",
  "bottom",
  "MozBottom",
  "WebKitBottom",
  "MSBottom",
  "OBottom",
  "boxDecorationBreak",
  "MozBoxDecorationBreak",
  "WebKitBoxDecorationBreak",
  "MSBoxDecorationBreak",
  "OBoxDecorationBreak",
  "boxShadow",
  "MozBoxShadow",
  "WebKitBoxShadow",
  "MSBoxShadow",
  "OBoxShadow",
  "boxSizing",
  "MozBoxSizing",
  "WebKitBoxSizing",
  "MSBoxSizing",
  "OBoxSizing",
  "breakAfter",
  "MozBreakAfter",
  "WebKitBreakAfter",
  "MSBreakAfter",
  "OBreakAfter",
  "breakBefore",
  "MozBreakBefore",
  "WebKitBreakBefore",
  "MSBreakBefore",
  "OBreakBefore",
  "breakInside",
  "MozBreakInside",
  "WebKitBreakInside",
  "MSBreakInside",
  "OBreakInside",
  "captionSide",
  "MozCaptionSide",
  "WebKitCaptionSide",
  "MSCaptionSide",
  "OCaptionSide",
  "ch",
  "MozCh",
  "WebKitCh",
  "MSCh",
  "OCh",
  "clear",
  "MozClear",
  "WebKitClear",
  "MSClear",
  "OClear",
  "clip",
  "MozClip",
  "WebKitClip",
  "MSClip",
  "OClip",
  "clipPath",
  "MozClipPath",
  "WebKitClipPath",
  "MSClipPath",
  "OClipPath",
  "cm",
  "MozCm",
  "WebKitCm",
  "MSCm",
  "OCm",
  "color",
  "MozColor",
  "WebKitColor",
  "MSColor",
  "OColor",
  "columnCount",
  "MozColumnCount",
  "WebKitColumnCount",
  "MSColumnCount",
  "OColumnCount",
  "columnFill",
  "MozColumnFill",
  "WebKitColumnFill",
  "MSColumnFill",
  "OColumnFill",
  "columnGap",
  "MozColumnGap",
  "WebKitColumnGap",
  "MSColumnGap",
  "OColumnGap",
  "columnRule",
  "MozColumnRule",
  "WebKitColumnRule",
  "MSColumnRule",
  "OColumnRule",
  "columnRuleColor",
  "MozColumnRuleColor",
  "WebKitColumnRuleColor",
  "MSColumnRuleColor",
  "OColumnRuleColor",
  "columnRuleStyle",
  "MozColumnRuleStyle",
  "WebKitColumnRuleStyle",
  "MSColumnRuleStyle",
  "OColumnRuleStyle",
  "columnRuleWidth",
  "MozColumnRuleWidth",
  "WebKitColumnRuleWidth",
  "MSColumnRuleWidth",
  "OColumnRuleWidth",
  "columnSpan",
  "MozColumnSpan",
  "WebKitColumnSpan",
  "MSColumnSpan",
  "OColumnSpan",
  "columnWidth",
  "MozColumnWidth",
  "WebKitColumnWidth",
  "MSColumnWidth",
  "OColumnWidth",
  "columns",
  "MozColumns",
  "WebKitColumns",
  "MSColumns",
  "OColumns",
  "content",
  "MozContent",
  "WebKitContent",
  "MSContent",
  "OContent",
  "counterIncrement",
  "MozCounterIncrement",
  "WebKitCounterIncrement",
  "MSCounterIncrement",
  "OCounterIncrement",
  "counterReset",
  "MozCounterReset",
  "WebKitCounterReset",
  "MSCounterReset",
  "OCounterReset",
  "cursor",
  "MozCursor",
  "WebKitCursor",
  "MSCursor",
  "OCursor",
  "deg",
  "MozDeg",
  "WebKitDeg",
  "MSDeg",
  "ODeg",
  "direction",
  "MozDirection",
  "WebKitDirection",
  "MSDirection",
  "ODirection",
  "display",
  "MozDisplay",
  "WebKitDisplay",
  "MSDisplay",
  "ODisplay",
  "dpcm",
  "MozDpcm",
  "WebKitDpcm",
  "MSDpcm",
  "ODpcm",
  "dpi",
  "MozDpi",
  "WebKitDpi",
  "MSDpi",
  "ODpi",
  "dppx",
  "MozDppx",
  "WebKitDppx",
  "MSDppx",
  "ODppx",
  "em",
  "MozEm",
  "WebKitEm",
  "MSEm",
  "OEm",
  "emptyCells",
  "MozEmptyCells",
  "WebKitEmptyCells",
  "MSEmptyCells",
  "OEmptyCells",
  "ex",
  "MozEx",
  "WebKitEx",
  "MSEx",
  "OEx",
  "filter",
  "MozFilter",
  "WebKitFilter",
  "MSFilter",
  "OFilter",
  "flex",
  "MozFlex",
  "WebKitFlex",
  "MSFlex",
  "OFlex",
  "flexBasis",
  "MozFlexBasis",
  "WebKitFlexBasis",
  "MSFlexBasis",
  "OFlexBasis",
  "flexDirection",
  "MozFlexDirection",
  "WebKitFlexDirection",
  "MSFlexDirection",
  "OFlexDirection",
  "flexFlow",
  "MozFlexFlow",
  "WebKitFlexFlow",
  "MSFlexFlow",
  "OFlexFlow",
  "flexGrow",
  "MozFlexGrow",
  "WebKitFlexGrow",
  "MSFlexGrow",
  "OFlexGrow",
  "flexShrink",
  "MozFlexShrink",
  "WebKitFlexShrink",
  "MSFlexShrink",
  "OFlexShrink",
  "flexWrap",
  "MozFlexWrap",
  "WebKitFlexWrap",
  "MSFlexWrap",
  "OFlexWrap",
  "float",
  "MozFloat",
  "WebKitFloat",
  "MSFloat",
  "OFloat",
  "font",
  "MozFont",
  "WebKitFont",
  "MSFont",
  "OFont",
  "fontFamily",
  "MozFontFamily",
  "WebKitFontFamily",
  "MSFontFamily",
  "OFontFamily",
  "fontFeatureSettings",
  "MozFontFeatureSettings",
  "WebKitFontFeatureSettings",
  "MSFontFeatureSettings",
  "OFontFeatureSettings",
  "fontKerning",
  "MozFontKerning",
  "WebKitFontKerning",
  "MSFontKerning",
  "OFontKerning",
  "fontLanguageOverride",
  "MozFontLanguageOverride",
  "WebKitFontLanguageOverride",
  "MSFontLanguageOverride",
  "OFontLanguageOverride",
  "fontSize",
  "MozFontSize",
  "WebKitFontSize",
  "MSFontSize",
  "OFontSize",
  "fontSizeAdjust",
  "MozFontSizeAdjust",
  "WebKitFontSizeAdjust",
  "MSFontSizeAdjust",
  "OFontSizeAdjust",
  "fontStretch",
  "MozFontStretch",
  "WebKitFontStretch",
  "MSFontStretch",
  "OFontStretch",
  "fontStyle",
  "MozFontStyle",
  "WebKitFontStyle",
  "MSFontStyle",
  "OFontStyle",
  "fontSynthesis",
  "MozFontSynthesis",
  "WebKitFontSynthesis",
  "MSFontSynthesis",
  "OFontSynthesis",
  "fontVariant",
  "MozFontVariant",
  "WebKitFontVariant",
  "MSFontVariant",
  "OFontVariant",
  "fontVariantAlternates",
  "MozFontVariantAlternates",
  "WebKitFontVariantAlternates",
  "MSFontVariantAlternates",
  "OFontVariantAlternates",
  "fontVariantCaps",
  "MozFontVariantCaps",
  "WebKitFontVariantCaps",
  "MSFontVariantCaps",
  "OFontVariantCaps",
  "fontVariantEastAsian",
  "MozFontVariantEastAsian",
  "WebKitFontVariantEastAsian",
  "MSFontVariantEastAsian",
  "OFontVariantEastAsian",
  "fontVariantLigatures",
  "MozFontVariantLigatures",
  "WebKitFontVariantLigatures",
  "MSFontVariantLigatures",
  "OFontVariantLigatures",
  "fontVariantNumeric",
  "MozFontVariantNumeric",
  "WebKitFontVariantNumeric",
  "MSFontVariantNumeric",
  "OFontVariantNumeric",
  "fontVariantPosition",
  "MozFontVariantPosition",
  "WebKitFontVariantPosition",
  "MSFontVariantPosition",
  "OFontVariantPosition",
  "fontWeight",
  "MozFontWeight",
  "WebKitFontWeight",
  "MSFontWeight",
  "OFontWeight",
  "grad",
  "MozGrad",
  "WebKitGrad",
  "MSGrad",
  "OGrad",
  "grid",
  "MozGrid",
  "WebKitGrid",
  "MSGrid",
  "OGrid",
  "gridArea",
  "MozGridArea",
  "WebKitGridArea",
  "MSGridArea",
  "OGridArea",
  "gridAutoColumns",
  "MozGridAutoColumns",
  "WebKitGridAutoColumns",
  "MSGridAutoColumns",
  "OGridAutoColumns",
  "gridAutoFlow",
  "MozGridAutoFlow",
  "WebKitGridAutoFlow",
  "MSGridAutoFlow",
  "OGridAutoFlow",
  "gridAutoRows",
  "MozGridAutoRows",
  "WebKitGridAutoRows",
  "MSGridAutoRows",
  "OGridAutoRows",
  "gridColumn",
  "MozGridColumn",
  "WebKitGridColumn",
  "MSGridColumn",
  "OGridColumn",
  "gridColumnEnd",
  "MozGridColumnEnd",
  "WebKitGridColumnEnd",
  "MSGridColumnEnd",
  "OGridColumnEnd",
  "gridColumnGap",
  "MozGridColumnGap",
  "WebKitGridColumnGap",
  "MSGridColumnGap",
  "OGridColumnGap",
  "gridColumnStart",
  "MozGridColumnStart",
  "WebKitGridColumnStart",
  "MSGridColumnStart",
  "OGridColumnStart",
  "gridGap",
  "MozGridGap",
  "WebKitGridGap",
  "MSGridGap",
  "OGridGap",
  "gridRow",
  "MozGridRow",
  "WebKitGridRow",
  "MSGridRow",
  "OGridRow",
  "gridRowEnd",
  "MozGridRowEnd",
  "WebKitGridRowEnd",
  "MSGridRowEnd",
  "OGridRowEnd",
  "gridRowGap",
  "MozGridRowGap",
  "WebKitGridRowGap",
  "MSGridRowGap",
  "OGridRowGap",
  "gridRowStart",
  "MozGridRowStart",
  "WebKitGridRowStart",
  "MSGridRowStart",
  "OGridRowStart",
  "gridTemplate",
  "MozGridTemplate",
  "WebKitGridTemplate",
  "MSGridTemplate",
  "OGridTemplate",
  "gridTemplateAreas",
  "MozGridTemplateAreas",
  "WebKitGridTemplateAreas",
  "MSGridTemplateAreas",
  "OGridTemplateAreas",
  "gridTemplateColumns",
  "MozGridTemplateColumns",
  "WebKitGridTemplateColumns",
  "MSGridTemplateColumns",
  "OGridTemplateColumns",
  "gridTemplateRows",
  "MozGridTemplateRows",
  "WebKitGridTemplateRows",
  "MSGridTemplateRows",
  "OGridTemplateRows",
  "height",
  "MozHeight",
  "WebKitHeight",
  "MSHeight",
  "OHeight",
  "hyphens",
  "MozHyphens",
  "WebKitHyphens",
  "MSHyphens",
  "OHyphens",
  "hz",
  "MozHz",
  "WebKitHz",
  "MSHz",
  "OHz",
  "imageOrientation",
  "MozImageOrientation",
  "WebKitImageOrientation",
  "MSImageOrientation",
  "OImageOrientation",
  "imageRendering",
  "MozImageRendering",
  "WebKitImageRendering",
  "MSImageRendering",
  "OImageRendering",
  "imageResolution",
  "MozImageResolution",
  "WebKitImageResolution",
  "MSImageResolution",
  "OImageResolution",
  "imeMode",
  "MozImeMode",
  "WebKitImeMode",
  "MSImeMode",
  "OImeMode",
  "in",
  "MozIn",
  "WebKitIn",
  "MSIn",
  "OIn",
  "inherit",
  "MozInherit",
  "WebKitInherit",
  "MSInherit",
  "OInherit",
  "initial",
  "MozInitial",
  "WebKitInitial",
  "MSInitial",
  "OInitial",
  "inlineSize",
  "MozInlineSize",
  "WebKitInlineSize",
  "MSInlineSize",
  "OInlineSize",
  "isolation",
  "MozIsolation",
  "WebKitIsolation",
  "MSIsolation",
  "OIsolation",
  "justifyContent",
  "MozJustifyContent",
  "WebKitJustifyContent",
  "MSJustifyContent",
  "OJustifyContent",
  "khz",
  "MozKhz",
  "WebKitKhz",
  "MSKhz",
  "OKhz",
  "left",
  "MozLeft",
  "WebKitLeft",
  "MSLeft",
  "OLeft",
  "letterSpacing",
  "MozLetterSpacing",
  "WebKitLetterSpacing",
  "MSLetterSpacing",
  "OLetterSpacing",
  "lineBreak",
  "MozLineBreak",
  "WebKitLineBreak",
  "MSLineBreak",
  "OLineBreak",
  "lineHeight",
  "MozLineHeight",
  "WebKitLineHeight",
  "MSLineHeight",
  "OLineHeight",
  "listStyle",
  "MozListStyle",
  "WebKitListStyle",
  "MSListStyle",
  "OListStyle",
  "listStyleImage",
  "MozListStyleImage",
  "WebKitListStyleImage",
  "MSListStyleImage",
  "OListStyleImage",
  "listStylePosition",
  "MozListStylePosition",
  "WebKitListStylePosition",
  "MSListStylePosition",
  "OListStylePosition",
  "listStyleType",
  "MozListStyleType",
  "WebKitListStyleType",
  "MSListStyleType",
  "OListStyleType",
  "margin",
  "MozMargin",
  "WebKitMargin",
  "MSMargin",
  "OMargin",
  "marginBlockEnd",
  "MozMarginBlockEnd",
  "WebKitMarginBlockEnd",
  "MSMarginBlockEnd",
  "OMarginBlockEnd",
  "marginBlockStart",
  "MozMarginBlockStart",
  "WebKitMarginBlockStart",
  "MSMarginBlockStart",
  "OMarginBlockStart",
  "marginBottom",
  "MozMarginBottom",
  "WebKitMarginBottom",
  "MSMarginBottom",
  "OMarginBottom",
  "marginInlineEnd",
  "MozMarginInlineEnd",
  "WebKitMarginInlineEnd",
  "MSMarginInlineEnd",
  "OMarginInlineEnd",
  "marginInlineStart",
  "MozMarginInlineStart",
  "WebKitMarginInlineStart",
  "MSMarginInlineStart",
  "OMarginInlineStart",
  "marginLeft",
  "MozMarginLeft",
  "WebKitMarginLeft",
  "MSMarginLeft",
  "OMarginLeft",
  "marginRight",
  "MozMarginRight",
  "WebKitMarginRight",
  "MSMarginRight",
  "OMarginRight",
  "marginTop",
  "MozMarginTop",
  "WebKitMarginTop",
  "MSMarginTop",
  "OMarginTop",
  "mask",
  "MozMask",
  "WebKitMask",
  "MSMask",
  "OMask",
  "maskClip",
  "MozMaskClip",
  "WebKitMaskClip",
  "MSMaskClip",
  "OMaskClip",
  "maskComposite",
  "MozMaskComposite",
  "WebKitMaskComposite",
  "MSMaskComposite",
  "OMaskComposite",
  "maskImage",
  "MozMaskImage",
  "WebKitMaskImage",
  "MSMaskImage",
  "OMaskImage",
  "maskMode",
  "MozMaskMode",
  "WebKitMaskMode",
  "MSMaskMode",
  "OMaskMode",
  "maskOrigin",
  "MozMaskOrigin",
  "WebKitMaskOrigin",
  "MSMaskOrigin",
  "OMaskOrigin",
  "maskPosition",
  "MozMaskPosition",
  "WebKitMaskPosition",
  "MSMaskPosition",
  "OMaskPosition",
  "maskRepeat",
  "MozMaskRepeat",
  "WebKitMaskRepeat",
  "MSMaskRepeat",
  "OMaskRepeat",
  "maskSize",
  "MozMaskSize",
  "WebKitMaskSize",
  "MSMaskSize",
  "OMaskSize",
  "maskType",
  "MozMaskType",
  "WebKitMaskType",
  "MSMaskType",
  "OMaskType",
  "maxBlockSize",
  "MozMaxBlockSize",
  "WebKitMaxBlockSize",
  "MSMaxBlockSize",
  "OMaxBlockSize",
  "maxHeight",
  "MozMaxHeight",
  "WebKitMaxHeight",
  "MSMaxHeight",
  "OMaxHeight",
  "maxInlineSize",
  "MozMaxInlineSize",
  "WebKitMaxInlineSize",
  "MSMaxInlineSize",
  "OMaxInlineSize",
  "maxWidth",
  "MozMaxWidth",
  "WebKitMaxWidth",
  "MSMaxWidth",
  "OMaxWidth",
  "minBlockSize",
  "MozMinBlockSize",
  "WebKitMinBlockSize",
  "MSMinBlockSize",
  "OMinBlockSize",
  "minHeight",
  "MozMinHeight",
  "WebKitMinHeight",
  "MSMinHeight",
  "OMinHeight",
  "minInlineSize",
  "MozMinInlineSize",
  "WebKitMinInlineSize",
  "MSMinInlineSize",
  "OMinInlineSize",
  "minWidth",
  "MozMinWidth",
  "WebKitMinWidth",
  "MSMinWidth",
  "OMinWidth",
  "mixBlendMode",
  "MozMixBlendMode",
  "WebKitMixBlendMode",
  "MSMixBlendMode",
  "OMixBlendMode",
  "mm",
  "MozMm",
  "WebKitMm",
  "MSMm",
  "OMm",
  "ms",
  "MozMs",
  "WebKitMs",
  "MSMs",
  "OMs",
  "objectFit",
  "MozObjectFit",
  "WebKitObjectFit",
  "MSObjectFit",
  "OObjectFit",
  "objectPosition",
  "MozObjectPosition",
  "WebKitObjectPosition",
  "MSObjectPosition",
  "OObjectPosition",
  "offsetBlockEnd",
  "MozOffsetBlockEnd",
  "WebKitOffsetBlockEnd",
  "MSOffsetBlockEnd",
  "OOffsetBlockEnd",
  "offsetBlockStart",
  "MozOffsetBlockStart",
  "WebKitOffsetBlockStart",
  "MSOffsetBlockStart",
  "OOffsetBlockStart",
  "offsetInlineEnd",
  "MozOffsetInlineEnd",
  "WebKitOffsetInlineEnd",
  "MSOffsetInlineEnd",
  "OOffsetInlineEnd",
  "offsetInlineStart",
  "MozOffsetInlineStart",
  "WebKitOffsetInlineStart",
  "MSOffsetInlineStart",
  "OOffsetInlineStart",
  "opacity",
  "MozOpacity",
  "WebKitOpacity",
  "MSOpacity",
  "OOpacity",
  "order",
  "MozOrder",
  "WebKitOrder",
  "MSOrder",
  "OOrder",
  "orphans",
  "MozOrphans",
  "WebKitOrphans",
  "MSOrphans",
  "OOrphans",
  "outline",
  "MozOutline",
  "WebKitOutline",
  "MSOutline",
  "OOutline",
  "outlineColor",
  "MozOutlineColor",
  "WebKitOutlineColor",
  "MSOutlineColor",
  "OOutlineColor",
  "outlineOffset",
  "MozOutlineOffset",
  "WebKitOutlineOffset",
  "MSOutlineOffset",
  "OOutlineOffset",
  "outlineStyle",
  "MozOutlineStyle",
  "WebKitOutlineStyle",
  "MSOutlineStyle",
  "OOutlineStyle",
  "outlineWidth",
  "MozOutlineWidth",
  "WebKitOutlineWidth",
  "MSOutlineWidth",
  "OOutlineWidth",
  "overflow",
  "MozOverflow",
  "WebKitOverflow",
  "MSOverflow",
  "OOverflow",
  "overflowWrap",
  "MozOverflowWrap",
  "WebKitOverflowWrap",
  "MSOverflowWrap",
  "OOverflowWrap",
  "overflowX",
  "MozOverflowX",
  "WebKitOverflowX",
  "MSOverflowX",
  "OOverflowX",
  "overflowY",
  "MozOverflowY",
  "WebKitOverflowY",
  "MSOverflowY",
  "OOverflowY",
  "padding",
  "MozPadding",
  "WebKitPadding",
  "MSPadding",
  "OPadding",
  "paddingBlockEnd",
  "MozPaddingBlockEnd",
  "WebKitPaddingBlockEnd",
  "MSPaddingBlockEnd",
  "OPaddingBlockEnd",
  "paddingBlockStart",
  "MozPaddingBlockStart",
  "WebKitPaddingBlockStart",
  "MSPaddingBlockStart",
  "OPaddingBlockStart",
  "paddingBottom",
  "MozPaddingBottom",
  "WebKitPaddingBottom",
  "MSPaddingBottom",
  "OPaddingBottom",
  "paddingInlineEnd",
  "MozPaddingInlineEnd",
  "WebKitPaddingInlineEnd",
  "MSPaddingInlineEnd",
  "OPaddingInlineEnd",
  "paddingInlineStart",
  "MozPaddingInlineStart",
  "WebKitPaddingInlineStart",
  "MSPaddingInlineStart",
  "OPaddingInlineStart",
  "paddingLeft",
  "MozPaddingLeft",
  "WebKitPaddingLeft",
  "MSPaddingLeft",
  "OPaddingLeft",
  "paddingRight",
  "MozPaddingRight",
  "WebKitPaddingRight",
  "MSPaddingRight",
  "OPaddingRight",
  "paddingTop",
  "MozPaddingTop",
  "WebKitPaddingTop",
  "MSPaddingTop",
  "OPaddingTop",
  "pageBreakAfter",
  "MozPageBreakAfter",
  "WebKitPageBreakAfter",
  "MSPageBreakAfter",
  "OPageBreakAfter",
  "pageBreakBefore",
  "MozPageBreakBefore",
  "WebKitPageBreakBefore",
  "MSPageBreakBefore",
  "OPageBreakBefore",
  "pageBreakInside",
  "MozPageBreakInside",
  "WebKitPageBreakInside",
  "MSPageBreakInside",
  "OPageBreakInside",
  "pc",
  "MozPc",
  "WebKitPc",
  "MSPc",
  "OPc",
  "perspective",
  "MozPerspective",
  "WebKitPerspective",
  "MSPerspective",
  "OPerspective",
  "perspectiveOrigin",
  "MozPerspectiveOrigin",
  "WebKitPerspectiveOrigin",
  "MSPerspectiveOrigin",
  "OPerspectiveOrigin",
  "pointerEvents",
  "MozPointerEvents",
  "WebKitPointerEvents",
  "MSPointerEvents",
  "OPointerEvents",
  "position",
  "MozPosition",
  "WebKitPosition",
  "MSPosition",
  "OPosition",
  "pt",
  "MozPt",
  "WebKitPt",
  "MSPt",
  "OPt",
  "px",
  "MozPx",
  "WebKitPx",
  "MSPx",
  "OPx",
  "q",
  "MozQ",
  "WebKitQ",
  "MSQ",
  "OQ",
  "quotes",
  "MozQuotes",
  "WebKitQuotes",
  "MSQuotes",
  "OQuotes",
  "rad",
  "MozRad",
  "WebKitRad",
  "MSRad",
  "ORad",
  "rem",
  "MozRem",
  "WebKitRem",
  "MSRem",
  "ORem",
  "resize",
  "MozResize",
  "WebKitResize",
  "MSResize",
  "OResize",
  "revert",
  "MozRevert",
  "WebKitRevert",
  "MSRevert",
  "ORevert",
  "right",
  "MozRight",
  "WebKitRight",
  "MSRight",
  "ORight",
  "rubyAlign",
  "MozRubyAlign",
  "WebKitRubyAlign",
  "MSRubyAlign",
  "ORubyAlign",
  "rubyMerge",
  "MozRubyMerge",
  "WebKitRubyMerge",
  "MSRubyMerge",
  "ORubyMerge",
  "rubyPosition",
  "MozRubyPosition",
  "WebKitRubyPosition",
  "MSRubyPosition",
  "ORubyPosition",
  "s",
  "MozS",
  "WebKitS",
  "MSS",
  "OS",
  "scrollBehavior",
  "MozScrollBehavior",
  "WebKitScrollBehavior",
  "MSScrollBehavior",
  "OScrollBehavior",
  "scrollSnapCoordinate",
  "MozScrollSnapCoordinate",
  "WebKitScrollSnapCoordinate",
  "MSScrollSnapCoordinate",
  "OScrollSnapCoordinate",
  "scrollSnapDestination",
  "MozScrollSnapDestination",
  "WebKitScrollSnapDestination",
  "MSScrollSnapDestination",
  "OScrollSnapDestination",
  "scrollSnapType",
  "MozScrollSnapType",
  "WebKitScrollSnapType",
  "MSScrollSnapType",
  "OScrollSnapType",
  "shapeImageThreshold",
  "MozShapeImageThreshold",
  "WebKitShapeImageThreshold",
  "MSShapeImageThreshold",
  "OShapeImageThreshold",
  "shapeMargin",
  "MozShapeMargin",
  "WebKitShapeMargin",
  "MSShapeMargin",
  "OShapeMargin",
  "shapeOutside",
  "MozShapeOutside",
  "WebKitShapeOutside",
  "MSShapeOutside",
  "OShapeOutside",
  "tabSize",
  "MozTabSize",
  "WebKitTabSize",
  "MSTabSize",
  "OTabSize",
  "tableLayout",
  "MozTableLayout",
  "WebKitTableLayout",
  "MSTableLayout",
  "OTableLayout",
  "textAlign",
  "MozTextAlign",
  "WebKitTextAlign",
  "MSTextAlign",
  "OTextAlign",
  "textAlignLast",
  "MozTextAlignLast",
  "WebKitTextAlignLast",
  "MSTextAlignLast",
  "OTextAlignLast",
  "textCombineUpright",
  "MozTextCombineUpright",
  "WebKitTextCombineUpright",
  "MSTextCombineUpright",
  "OTextCombineUpright",
  "textDecoration",
  "MozTextDecoration",
  "WebKitTextDecoration",
  "MSTextDecoration",
  "OTextDecoration",
  "textDecorationColor",
  "MozTextDecorationColor",
  "WebKitTextDecorationColor",
  "MSTextDecorationColor",
  "OTextDecorationColor",
  "textDecorationLine",
  "MozTextDecorationLine",
  "WebKitTextDecorationLine",
  "MSTextDecorationLine",
  "OTextDecorationLine",
  "textDecorationStyle",
  "MozTextDecorationStyle",
  "WebKitTextDecorationStyle",
  "MSTextDecorationStyle",
  "OTextDecorationStyle",
  "textEmphasis",
  "MozTextEmphasis",
  "WebKitTextEmphasis",
  "MSTextEmphasis",
  "OTextEmphasis",
  "textEmphasisColor",
  "MozTextEmphasisColor",
  "WebKitTextEmphasisColor",
  "MSTextEmphasisColor",
  "OTextEmphasisColor",
  "textEmphasisPosition",
  "MozTextEmphasisPosition",
  "WebKitTextEmphasisPosition",
  "MSTextEmphasisPosition",
  "OTextEmphasisPosition",
  "textEmphasisStyle",
  "MozTextEmphasisStyle",
  "WebKitTextEmphasisStyle",
  "MSTextEmphasisStyle",
  "OTextEmphasisStyle",
  "textIndent",
  "MozTextIndent",
  "WebKitTextIndent",
  "MSTextIndent",
  "OTextIndent",
  "textOrientation",
  "MozTextOrientation",
  "WebKitTextOrientation",
  "MSTextOrientation",
  "OTextOrientation",
  "textOverflow",
  "MozTextOverflow",
  "WebKitTextOverflow",
  "MSTextOverflow",
  "OTextOverflow",
  "textRendering",
  "MozTextRendering",
  "WebKitTextRendering",
  "MSTextRendering",
  "OTextRendering",
  "textShadow",
  "MozTextShadow",
  "WebKitTextShadow",
  "MSTextShadow",
  "OTextShadow",
  "textTransform",
  "MozTextTransform",
  "WebKitTextTransform",
  "MSTextTransform",
  "OTextTransform",
  "textUnderlinePosition",
  "MozTextUnderlinePosition",
  "WebKitTextUnderlinePosition",
  "MSTextUnderlinePosition",
  "OTextUnderlinePosition",
  "top",
  "MozTop",
  "WebKitTop",
  "MSTop",
  "OTop",
  "touchAction",
  "MozTouchAction",
  "WebKitTouchAction",
  "MSTouchAction",
  "OTouchAction",
  "transform",
  "MozTransform",
  "WebKitTransform",
  "MSTransform",
  "OTransform",
  "transformBox",
  "MozTransformBox",
  "WebKitTransformBox",
  "MSTransformBox",
  "OTransformBox",
  "transformOrigin",
  "MozTransformOrigin",
  "WebKitTransformOrigin",
  "MSTransformOrigin",
  "OTransformOrigin",
  "transformStyle",
  "MozTransformStyle",
  "WebKitTransformStyle",
  "MSTransformStyle",
  "OTransformStyle",
  "transition",
  "MozTransition",
  "WebKitTransition",
  "MSTransition",
  "OTransition",
  "transitionDelay",
  "MozTransitionDelay",
  "WebKitTransitionDelay",
  "MSTransitionDelay",
  "OTransitionDelay",
  "transitionDuration",
  "MozTransitionDuration",
  "WebKitTransitionDuration",
  "MSTransitionDuration",
  "OTransitionDuration",
  "transitionProperty",
  "MozTransitionProperty",
  "WebKitTransitionProperty",
  "MSTransitionProperty",
  "OTransitionProperty",
  "transitionTimingFunction",
  "MozTransitionTimingFunction",
  "WebKitTransitionTimingFunction",
  "MSTransitionTimingFunction",
  "OTransitionTimingFunction",
  "turn",
  "MozTurn",
  "WebKitTurn",
  "MSTurn",
  "OTurn",
  "unicodeBidi",
  "MozUnicodeBidi",
  "WebKitUnicodeBidi",
  "MSUnicodeBidi",
  "OUnicodeBidi",
  "unset",
  "MozUnset",
  "WebKitUnset",
  "MSUnset",
  "OUnset",
  "verticalAlign",
  "MozVerticalAlign",
  "WebKitVerticalAlign",
  "MSVerticalAlign",
  "OVerticalAlign",
  "vh",
  "MozVh",
  "WebKitVh",
  "MSVh",
  "OVh",
  "visibility",
  "MozVisibility",
  "WebKitVisibility",
  "MSVisibility",
  "OVisibility",
  "vmax",
  "MozVmax",
  "WebKitVmax",
  "MSVmax",
  "OVmax",
  "vmin",
  "MozVmin",
  "WebKitVmin",
  "MSVmin",
  "OVmin",
  "vw",
  "MozVw",
  "WebKitVw",
  "MSVw",
  "OVw",
  "whiteSpace",
  "MozWhiteSpace",
  "WebKitWhiteSpace",
  "MSWhiteSpace",
  "OWhiteSpace",
  "widows",
  "MozWidows",
  "WebKitWidows",
  "MSWidows",
  "OWidows",
  "width",
  "MozWidth",
  "WebKitWidth",
  "MSWidth",
  "OWidth",
  "willChange",
  "MozWillChange",
  "WebKitWillChange",
  "MSWillChange",
  "OWillChange",
  "wordBreak",
  "MozWordBreak",
  "WebKitWordBreak",
  "MSWordBreak",
  "OWordBreak",
  "wordSpacing",
  "MozWordSpacing",
  "WebKitWordSpacing",
  "MSWordSpacing",
  "OWordSpacing",
  "wordWrap",
  "MozWordWrap",
  "WebKitWordWrap",
  "MSWordWrap",
  "OWordWrap",
  "writingMode",
  "MozWritingMode",
  "WebKitWritingMode",
  "MSWritingMode",
  "OWritingMode",
  "zIndex",
  "MozZIndex",
  "WebKitZIndex",
  "MSZIndex",
  "OZIndex",
  "fontSize",
  "MozFontSize",
  "WebKitFontSize",
  "MSFontSize",
  "OFontSize"
]

},{}],44:[function(require,module,exports){
var properties = require('./css-properties.js');
var React = require('react');

module.exports = function(props, propName, componentName) {
  var styles = props[propName];
  if (!styles) {
    return;
  }

  var failures = [];
  Object.keys(styles).forEach(function(styleKey){
    if (properties.indexOf(styleKey) === -1) {
      failures.push(styleKey);
    }
  });
  if (failures.length) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + '. Has invalid keys ' + failures.join(', '));
  }
};

module.exports.isRequired = function(props, propName, componentName) {
  if (!props[propName]) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + ' is required');
  }
  return module.exports(props, propName, componentName);
};

module.exports.supportingArrays = React.PropTypes.oneOfType([
  React.PropTypes.arrayOf(module.exports),
  module.exports
]);


},{"./css-properties.js":43,"react":"react"}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qc3giLCJhcHBcXGxheW91dGVkaXRvci5qc3giLCJhcHBcXHJlYWN0LWJhYnlsb25qcy5qc3giLCJub2RlX21vZHVsZXMvYm93c2VyL3NyYy9ib3dzZXIuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2h5cGhlbmF0ZS1zdHlsZS1uYW1lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvUHJlZml4ZXIuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2NhbGMuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2ZsZXguanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2ZsZXhib3hJRS5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvZmxleGJveE9sZC5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvZ3JhYkN1cnNvci5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvZ3JhZGllbnQuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL3Bvc2l0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9zaXppbmcuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL3RyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL3pvb21DdXJzb3IuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wcmVmaXhQcm9wcy5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2NhbGMuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9jdXJzb3IuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9mbGV4LmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvZmxleGJveElFLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvZmxleGJveE9sZC5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2dyYWRpZW50LmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvcG9zaXRpb24uanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9zaXppbmcuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy90cmFuc2l0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3ByZWZpeEFsbC5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wcmVmaXhQcm9wcy5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9nZXRCcm93c2VySW5mb3JtYXRpb24uanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9nZXRQcmVmaXhlZEtleWZyYW1lcy5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2dldFByZWZpeGVkVmFsdWUuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9pc1ByZWZpeGVkUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9pc1ByZWZpeGVkVmFsdWUuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9qb2luUHJlZml4ZWRWYWx1ZS5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL3NvcnRQcmVmaXhlZFN0eWxlLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvdW5wcmVmaXhQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlc1xccmVhY3Qtc3BsaXQtcGFuZVxcaW5kZXguanMiLCJub2RlX21vZHVsZXNcXHJlYWN0LXNwbGl0LXBhbmVcXGxpYlxcUGFuZS5qcyIsIm5vZGVfbW9kdWxlc1xccmVhY3Qtc3BsaXQtcGFuZVxcbGliXFxSZXNpemVyLmpzIiwibm9kZV9tb2R1bGVzXFxyZWFjdC1zcGxpdC1wYW5lXFxsaWJcXFNwbGl0UGFuZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZS1wcm9wdHlwZS9zcmMvY3NzLXByb3BlcnRpZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtcHJvcHR5cGUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTs7OztBQUNBOzs7O0FBR0E7Ozs7OztBQUNBOztBQUVBO0FBQ0EsU0FBUyxJQUFULENBQWMs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BrQkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vaW1wb3J0IEhlbGxvV29ybGQgZnJvbSAnLi9oZWxsby13b3JsZCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuLy9pbXBvcnQgTXlGaXJzdEdyaWQgZnJvbSAnLi9teWZpcnN0Z3JpZCc7XHJcbi8vaW1wb3J0IFJlYWN0YmFieWxvbmpzIGZyb20gJy4vcmVhY3QtYmFieWxvbmpzJztcclxuaW1wb3J0IExheW91dEVkaXRvciBmcm9tICcuL2xheW91dGVkaXRvcic7XHJcbi8vcmVxdWlyZSgnLi9iYWJ5bG9uLm1pbi5qcycpO1xyXG5cclxuLy9qdXN0IHRlc3Rpbmcgbm90IGJlIHBsYWNlIGhlcmVcclxuZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5kb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAwO1xyXG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAwO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPExheW91dEVkaXRvci8+LFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb3QnKVxyXG4pO1xyXG4vKlxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8TXlGaXJzdEdyaWQvPixcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb290JylcclxuKTtcclxuKi9cclxuLypcclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPFJlYWN0YmFieWxvbmpzLz4sXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9vdCcpXHJcbik7XHJcbiovXHJcbi8vUmVhY3RET00ucmVuZGVyKFxyXG4vLyAgPE15RWRpdG9yIC8+LFxyXG4vLyAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXHJcbi8vKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XHJcbmltcG9ydCBSZWFjdGJhYnlsb25qcyBmcm9tICcuL3JlYWN0LWJhYnlsb25qcyc7XHJcblxyXG5jbGFzcyBMYXlvdXRFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy90aGlzLnN0YXRlID0ge2VkaXRvclN0YXRlOiBFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpfTtcclxuICAgIC8vdGhpcy5vbkNoYW5nZSA9IChlZGl0b3JTdGF0ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7ZWRpdG9yU3RhdGV9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNpemU9XCI1JVwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+MTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwiaG9yaXpvbnRhbFwiIGRlZmF1bHRTaXplPVwiOTAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwidmVydGljYWxcIiBkZWZhdWx0U2l6ZT1cIjEwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIGRlZmF1bHRTaXplPVwiODUlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJScsaGVpZ2h0OicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0YmFieWxvbmpzLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+NTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BsaXRQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TcGxpdFBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9TcGxpdFBhbmU+XHJcbiAgICAgICAgICA8L1NwbGl0UGFuZT5cclxuICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0RWRpdG9yO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxucmVxdWlyZSgnLi9iYWJ5bG9uLm1pbi5qcycpO1xyXG5cclxuY2xhc3MgUmVhY3RiYWJ5bG9uanMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9zdGF0ZS1hbmQtbGlmZWN5Y2xlLmh0bWxcclxuICAgIC8vVGhlIGNvbXBvbmVudERpZE1vdW50KCkgaG9vayBydW5zIGFmdGVyIHRoZSBjb21wb25lbnQgb3V0cHV0IGhhcyBiZWVuIHJlbmRlcmVkIHRvIHRoZSBET00uXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIC8vY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySUQpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICAvLyBnZXQgdGhlIGNhbnZhcyBET00gZWxlbWVudFxyXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuZGVyQ2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlWyd0b3VjaC1hY3Rpb24nXSA9ICdub25lJztcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhCQUJZTE9OKTtcclxuICAgICAgICAvLyBsb2FkIHRoZSAzRCBlbmdpbmVcclxuICAgICAgICB2YXIgZW5naW5lID0gbmV3IEJBQllMT04uRW5naW5lKGNhbnZhcywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZVNjZW5lIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhbmQgcmV0dXJuIHRoZSBzY2VuZVxyXG4gICAgICAgIHZhciBjcmVhdGVTY2VuZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGJhc2ljIEJKUyBTY2VuZSBvYmplY3RcclxuICAgICAgICAgICAgdmFyIHNjZW5lID0gbmV3IEJBQllMT04uU2NlbmUoZW5naW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIEZyZWVDYW1lcmEsIGFuZCBzZXQgaXRzIHBvc2l0aW9uIHRvICh4OjAsIHk6NSwgejotMTApXHJcbiAgICAgICAgICAgIHZhciBjYW1lcmEgPSBuZXcgQkFCWUxPTi5GcmVlQ2FtZXJhKCdjYW1lcmExJywgbmV3IEJBQllMT04uVmVjdG9yMygwLCA1LC0xMCksIHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRhcmdldCB0aGUgY2FtZXJhIHRvIHNjZW5lIG9yaWdpblxyXG4gICAgICAgICAgICBjYW1lcmEuc2V0VGFyZ2V0KEJBQllMT04uVmVjdG9yMy5aZXJvKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gYXR0YWNoIHRoZSBjYW1lcmEgdG8gdGhlIGNhbnZhc1xyXG4gICAgICAgICAgICBjYW1lcmEuYXR0YWNoQ29udHJvbChjYW52YXMsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGJhc2ljIGxpZ2h0LCBhaW1pbmcgMCwxLDAgLSBtZWFuaW5nLCB0byB0aGUgc2t5XHJcbiAgICAgICAgICAgIHZhciBsaWdodCA9IG5ldyBCQUJZTE9OLkhlbWlzcGhlcmljTGlnaHQoJ2xpZ2h0MScsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwxLDApLCBzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBidWlsdC1pbiBcInNwaGVyZVwiIHNoYXBlOyBpdHMgY29uc3RydWN0b3IgdGFrZXMgNSBwYXJhbXM6IG5hbWUsIHdpZHRoLCBkZXB0aCwgc3ViZGl2aXNpb25zLCBzY2VuZVxyXG4gICAgICAgICAgICB2YXIgc3BoZXJlID0gQkFCWUxPTi5NZXNoLkNyZWF0ZVNwaGVyZSgnc3BoZXJlMScsIDE2LCAyLCBzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIHRoZSBzcGhlcmUgdXB3YXJkIDEvMiBvZiBpdHMgaGVpZ2h0XHJcbiAgICAgICAgICAgIHNwaGVyZS5wb3NpdGlvbi55ID0gMTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGJ1aWx0LWluIFwiZ3JvdW5kXCIgc2hhcGU7IGl0cyBjb25zdHJ1Y3RvciB0YWtlcyB0aGUgc2FtZSA1IHBhcmFtcyBhcyB0aGUgc3BoZXJlJ3Mgb25lXHJcbiAgICAgICAgICAgIHZhciBncm91bmQgPSBCQUJZTE9OLk1lc2guQ3JlYXRlR3JvdW5kKCdncm91bmQxJywgNiwgNiwgMiwgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBjcmVhdGVkIHNjZW5lXHJcbiAgICAgICAgICAgIHJldHVybiBzY2VuZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGNyZWF0ZVNjZW5lIGZ1bmN0aW9uXHJcbiAgICAgICAgdmFyIHNjZW5lID0gY3JlYXRlU2NlbmUoKTtcclxuXHJcbiAgICAgICAgLy8gcnVuIHRoZSByZW5kZXIgbG9vcFxyXG4gICAgICAgIGVuZ2luZS5ydW5SZW5kZXJMb29wKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNjZW5lLnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGUgY2FudmFzL3dpbmRvdyByZXNpemUgZXZlbnQgaGFuZGxlclxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBlbmdpbmUucmVzaXplKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGNhbnZhcyBpZD1cInJlbmRlckNhbnZhc1wiID48L2NhbnZhcz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0YmFieWxvbmpzO1xyXG4iLCIvKiFcbiAqIEJvd3NlciAtIGEgYnJvd3NlciBkZXRlY3RvclxuICogaHR0cHM6Ly9naXRodWIuY29tL2RlZC9ib3dzZXJcbiAqIE1JVCBMaWNlbnNlIHwgKGMpIER1c3RpbiBEaWF6IDIwMTVcbiAqL1xuXG4hZnVuY3Rpb24gKHJvb3QsIG5hbWUsIGRlZmluaXRpb24pIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUobmFtZSwgZGVmaW5pdGlvbilcbiAgZWxzZSByb290W25hbWVdID0gZGVmaW5pdGlvbigpXG59KHRoaXMsICdib3dzZXInLCBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgICogU2VlIHVzZXJhZ2VudHMuanMgZm9yIGV4YW1wbGVzIG9mIG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAqL1xuXG4gIHZhciB0ID0gdHJ1ZVxuXG4gIGZ1bmN0aW9uIGRldGVjdCh1YSkge1xuXG4gICAgZnVuY3Rpb24gZ2V0Rmlyc3RNYXRjaChyZWdleCkge1xuICAgICAgdmFyIG1hdGNoID0gdWEubWF0Y2gocmVnZXgpO1xuICAgICAgcmV0dXJuIChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxICYmIG1hdGNoWzFdKSB8fCAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZWNvbmRNYXRjaChyZWdleCkge1xuICAgICAgdmFyIG1hdGNoID0gdWEubWF0Y2gocmVnZXgpO1xuICAgICAgcmV0dXJuIChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxICYmIG1hdGNoWzJdKSB8fCAnJztcbiAgICB9XG5cbiAgICB2YXIgaW9zZGV2aWNlID0gZ2V0Rmlyc3RNYXRjaCgvKGlwb2R8aXBob25lfGlwYWQpL2kpLnRvTG93ZXJDYXNlKClcbiAgICAgICwgbGlrZUFuZHJvaWQgPSAvbGlrZSBhbmRyb2lkL2kudGVzdCh1YSlcbiAgICAgICwgYW5kcm9pZCA9ICFsaWtlQW5kcm9pZCAmJiAvYW5kcm9pZC9pLnRlc3QodWEpXG4gICAgICAsIG5leHVzTW9iaWxlID0gL25leHVzXFxzKlswLTZdXFxzKi9pLnRlc3QodWEpXG4gICAgICAsIG5leHVzVGFibGV0ID0gIW5leHVzTW9iaWxlICYmIC9uZXh1c1xccypbMC05XSsvaS50ZXN0KHVhKVxuICAgICAgLCBjaHJvbWVvcyA9IC9Dck9TLy50ZXN0KHVhKVxuICAgICAgLCBzaWxrID0gL3NpbGsvaS50ZXN0KHVhKVxuICAgICAgLCBzYWlsZmlzaCA9IC9zYWlsZmlzaC9pLnRlc3QodWEpXG4gICAgICAsIHRpemVuID0gL3RpemVuL2kudGVzdCh1YSlcbiAgICAgICwgd2Vib3MgPSAvKHdlYnxocHcpb3MvaS50ZXN0KHVhKVxuICAgICAgLCB3aW5kb3dzcGhvbmUgPSAvd2luZG93cyBwaG9uZS9pLnRlc3QodWEpXG4gICAgICAsIHNhbXN1bmdCcm93c2VyID0gL1NhbXN1bmdCcm93c2VyL2kudGVzdCh1YSlcbiAgICAgICwgd2luZG93cyA9ICF3aW5kb3dzcGhvbmUgJiYgL3dpbmRvd3MvaS50ZXN0KHVhKVxuICAgICAgLCBtYWMgPSAhaW9zZGV2aWNlICYmICFzaWxrICYmIC9tYWNpbnRvc2gvaS50ZXN0KHVhKVxuICAgICAgLCBsaW51eCA9ICFhbmRyb2lkICYmICFzYWlsZmlzaCAmJiAhdGl6ZW4gJiYgIXdlYm9zICYmIC9saW51eC9pLnRlc3QodWEpXG4gICAgICAsIGVkZ2VWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvZWRnZVxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgICwgdmVyc2lvbklkZW50aWZpZXIgPSBnZXRGaXJzdE1hdGNoKC92ZXJzaW9uXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgLCB0YWJsZXQgPSAvdGFibGV0L2kudGVzdCh1YSlcbiAgICAgICwgbW9iaWxlID0gIXRhYmxldCAmJiAvW14tXW1vYmkvaS50ZXN0KHVhKVxuICAgICAgLCB4Ym94ID0gL3hib3gvaS50ZXN0KHVhKVxuICAgICAgLCByZXN1bHRcblxuICAgIGlmICgvb3BlcmEvaS50ZXN0KHVhKSkge1xuICAgICAgLy8gIGFuIG9sZCBPcGVyYVxuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnT3BlcmEnXG4gICAgICAsIG9wZXJhOiB0XG4gICAgICAsIHZlcnNpb246IHZlcnNpb25JZGVudGlmaWVyIHx8IGdldEZpcnN0TWF0Y2goLyg/Om9wZXJhfG9wcnxvcGlvcylbXFxzXFwvXShcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKC9vcHJ8b3Bpb3MvaS50ZXN0KHVhKSkge1xuICAgICAgLy8gYSBuZXcgT3BlcmFcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ09wZXJhJ1xuICAgICAgICAsIG9wZXJhOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86b3ByfG9waW9zKVtcXHNcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKSB8fCB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvU2Ftc3VuZ0Jyb3dzZXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2Ftc3VuZyBJbnRlcm5ldCBmb3IgQW5kcm9pZCdcbiAgICAgICAgLCBzYW1zdW5nQnJvd3NlcjogdFxuICAgICAgICAsIHZlcnNpb246IHZlcnNpb25JZGVudGlmaWVyIHx8IGdldEZpcnN0TWF0Y2goLyg/OlNhbXN1bmdCcm93c2VyKVtcXHNcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvY29hc3QvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnT3BlcmEgQ29hc3QnXG4gICAgICAgICwgY29hc3Q6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiB2ZXJzaW9uSWRlbnRpZmllciB8fCBnZXRGaXJzdE1hdGNoKC8oPzpjb2FzdClbXFxzXFwvXShcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3lhYnJvd3Nlci9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdZYW5kZXggQnJvd3NlcidcbiAgICAgICwgeWFuZGV4YnJvd3NlcjogdFxuICAgICAgLCB2ZXJzaW9uOiB2ZXJzaW9uSWRlbnRpZmllciB8fCBnZXRGaXJzdE1hdGNoKC8oPzp5YWJyb3dzZXIpW1xcc1xcL10oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC91Y2Jyb3dzZXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6ICdVQyBCcm93c2VyJ1xuICAgICAgICAsIHVjYnJvd3NlcjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OnVjYnJvd3NlcilbXFxzXFwvXShcXGQrKD86XFwuXFxkKykrKS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvbXhpb3MvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnTWF4dGhvbidcbiAgICAgICAgLCBtYXh0aG9uOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86bXhpb3MpW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2VwaXBoYW55L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0VwaXBoYW55J1xuICAgICAgICAsIGVwaXBoYW55OiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86ZXBpcGhhbnkpW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3B1ZmZpbi9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdQdWZmaW4nXG4gICAgICAgICwgcHVmZmluOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86cHVmZmluKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9zbGVpcG5pci9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdTbGVpcG5pcidcbiAgICAgICAgLCBzbGVpcG5pcjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OnNsZWlwbmlyKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9rLW1lbGVvbi9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdLLU1lbGVvbidcbiAgICAgICAgLCBrTWVsZW9uOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86ay1tZWxlb24pW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAod2luZG93c3Bob25lKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdXaW5kb3dzIFBob25lJ1xuICAgICAgLCB3aW5kb3dzcGhvbmU6IHRcbiAgICAgIH1cbiAgICAgIGlmIChlZGdlVmVyc2lvbikge1xuICAgICAgICByZXN1bHQubXNlZGdlID0gdFxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGVkZ2VWZXJzaW9uXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVzdWx0Lm1zaWUgPSB0XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvaWVtb2JpbGVcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9tc2llfHRyaWRlbnQvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnSW50ZXJuZXQgRXhwbG9yZXInXG4gICAgICAsIG1zaWU6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86bXNpZSB8cnY6KShcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNocm9tZW9zKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdDaHJvbWUnXG4gICAgICAsIGNocm9tZW9zOiB0XG4gICAgICAsIGNocm9tZUJvb2s6IHRcbiAgICAgICwgY2hyb21lOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmNocm9tZXxjcmlvc3xjcm1vKVxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKC9jaHJvbWUuKz8gZWRnZS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdNaWNyb3NvZnQgRWRnZSdcbiAgICAgICwgbXNlZGdlOiB0XG4gICAgICAsIHZlcnNpb246IGVkZ2VWZXJzaW9uXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC92aXZhbGRpL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1ZpdmFsZGknXG4gICAgICAgICwgdml2YWxkaTogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goL3ZpdmFsZGlcXC8oXFxkKyhcXC5cXGQrKT8pL2kpIHx8IHZlcnNpb25JZGVudGlmaWVyXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHNhaWxmaXNoKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdTYWlsZmlzaCdcbiAgICAgICwgc2FpbGZpc2g6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvc2FpbGZpc2hcXHM/YnJvd3NlclxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3NlYW1vbmtleVxcLy9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdTZWFNb25rZXknXG4gICAgICAsIHNlYW1vbmtleTogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC9zZWFtb25rZXlcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9maXJlZm94fGljZXdlYXNlbHxmeGlvcy9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdGaXJlZm94J1xuICAgICAgLCBmaXJlZm94OiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmZpcmVmb3h8aWNld2Vhc2VsfGZ4aW9zKVsgXFwvXShcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICAgIGlmICgvXFwoKG1vYmlsZXx0YWJsZXQpO1teXFwpXSpydjpbXFxkXFwuXStcXCkvaS50ZXN0KHVhKSkge1xuICAgICAgICByZXN1bHQuZmlyZWZveG9zID0gdFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzaWxrKSB7XG4gICAgICByZXN1bHQgPSAge1xuICAgICAgICBuYW1lOiAnQW1hem9uIFNpbGsnXG4gICAgICAsIHNpbGs6IHRcbiAgICAgICwgdmVyc2lvbiA6IGdldEZpcnN0TWF0Y2goL3NpbGtcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9waGFudG9tL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1BoYW50b21KUydcbiAgICAgICwgcGhhbnRvbTogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC9waGFudG9tanNcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9zbGltZXJqcy9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdTbGltZXJKUydcbiAgICAgICAgLCBzbGltZXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC9zbGltZXJqc1xcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2JsYWNrYmVycnl8XFxiYmJcXGQrL2kudGVzdCh1YSkgfHwgL3JpbVxcc3RhYmxldC9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdCbGFja0JlcnJ5J1xuICAgICAgLCBibGFja2JlcnJ5OiB0XG4gICAgICAsIHZlcnNpb246IHZlcnNpb25JZGVudGlmaWVyIHx8IGdldEZpcnN0TWF0Y2goL2JsYWNrYmVycnlbXFxkXStcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHdlYm9zKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdXZWJPUydcbiAgICAgICwgd2Vib3M6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvdyg/OmViKT9vc2Jyb3dzZXJcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9O1xuICAgICAgL3RvdWNocGFkXFwvL2kudGVzdCh1YSkgJiYgKHJlc3VsdC50b3VjaHBhZCA9IHQpXG4gICAgfVxuICAgIGVsc2UgaWYgKC9iYWRhL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0JhZGEnXG4gICAgICAsIGJhZGE6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvZG9sZmluXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGl6ZW4pIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1RpemVuJ1xuICAgICAgLCB0aXplbjogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzp0aXplblxccz8pP2Jyb3dzZXJcXC8oXFxkKyhcXC5cXGQrKT8pL2kpIHx8IHZlcnNpb25JZGVudGlmaWVyXG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmICgvcXVwemlsbGEvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnUXVwWmlsbGEnXG4gICAgICAgICwgcXVwemlsbGE6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpxdXB6aWxsYSlbXFxzXFwvXShcXGQrKD86XFwuXFxkKykrKS9pKSB8fCB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvY2hyb21pdW0vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnQ2hyb21pdW0nXG4gICAgICAgICwgY2hyb21pdW06IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpjaHJvbWl1bSlbXFxzXFwvXShcXGQrKD86XFwuXFxkKyk/KS9pKSB8fCB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvY2hyb21lfGNyaW9zfGNybW8vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnQ2hyb21lJ1xuICAgICAgICAsIGNocm9tZTogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmNocm9tZXxjcmlvc3xjcm1vKVxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYW5kcm9pZCkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnQW5kcm9pZCdcbiAgICAgICAgLCB2ZXJzaW9uOiB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvc2FmYXJpfGFwcGxld2Via2l0L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1NhZmFyaSdcbiAgICAgICwgc2FmYXJpOiB0XG4gICAgICB9XG4gICAgICBpZiAodmVyc2lvbklkZW50aWZpZXIpIHtcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpb3NkZXZpY2UpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZSA6IGlvc2RldmljZSA9PSAnaXBob25lJyA/ICdpUGhvbmUnIDogaW9zZGV2aWNlID09ICdpcGFkJyA/ICdpUGFkJyA6ICdpUG9kJ1xuICAgICAgfVxuICAgICAgLy8gV1RGOiB2ZXJzaW9uIGlzIG5vdCBwYXJ0IG9mIHVzZXIgYWdlbnQgaW4gd2ViIGFwcHNcbiAgICAgIGlmICh2ZXJzaW9uSWRlbnRpZmllcikge1xuICAgICAgICByZXN1bHQudmVyc2lvbiA9IHZlcnNpb25JZGVudGlmaWVyXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoL2dvb2dsZWJvdC9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdHb29nbGVib3QnXG4gICAgICAsIGdvb2dsZWJvdDogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC9nb29nbGVib3RcXC8oXFxkKyhcXC5cXGQrKSkvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6IGdldEZpcnN0TWF0Y2goL14oLiopXFwvKC4qKSAvKSxcbiAgICAgICAgdmVyc2lvbjogZ2V0U2Vjb25kTWF0Y2goL14oLiopXFwvKC4qKSAvKVxuICAgICB9O1xuICAgfVxuXG4gICAgLy8gc2V0IHdlYmtpdCBvciBnZWNrbyBmbGFnIGZvciBicm93c2VycyBiYXNlZCBvbiB0aGVzZSBlbmdpbmVzXG4gICAgaWYgKCFyZXN1bHQubXNlZGdlICYmIC8oYXBwbGUpP3dlYmtpdC9pLnRlc3QodWEpKSB7XG4gICAgICBpZiAoLyhhcHBsZSk/d2Via2l0XFwvNTM3XFwuMzYvaS50ZXN0KHVhKSkge1xuICAgICAgICByZXN1bHQubmFtZSA9IHJlc3VsdC5uYW1lIHx8IFwiQmxpbmtcIlxuICAgICAgICByZXN1bHQuYmxpbmsgPSB0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQubmFtZSA9IHJlc3VsdC5uYW1lIHx8IFwiV2Via2l0XCJcbiAgICAgICAgcmVzdWx0LndlYmtpdCA9IHRcbiAgICAgIH1cbiAgICAgIGlmICghcmVzdWx0LnZlcnNpb24gJiYgdmVyc2lvbklkZW50aWZpZXIpIHtcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXJlc3VsdC5vcGVyYSAmJiAvZ2Vja29cXC8vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZSB8fCBcIkdlY2tvXCJcbiAgICAgIHJlc3VsdC5nZWNrbyA9IHRcbiAgICAgIHJlc3VsdC52ZXJzaW9uID0gcmVzdWx0LnZlcnNpb24gfHwgZ2V0Rmlyc3RNYXRjaCgvZ2Vja29cXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgfVxuXG4gICAgLy8gc2V0IE9TIGZsYWdzIGZvciBwbGF0Zm9ybXMgdGhhdCBoYXZlIG11bHRpcGxlIGJyb3dzZXJzXG4gICAgaWYgKCFyZXN1bHQud2luZG93c3Bob25lICYmICFyZXN1bHQubXNlZGdlICYmIChhbmRyb2lkIHx8IHJlc3VsdC5zaWxrKSkge1xuICAgICAgcmVzdWx0LmFuZHJvaWQgPSB0XG4gICAgfSBlbHNlIGlmICghcmVzdWx0LndpbmRvd3NwaG9uZSAmJiAhcmVzdWx0Lm1zZWRnZSAmJiBpb3NkZXZpY2UpIHtcbiAgICAgIHJlc3VsdFtpb3NkZXZpY2VdID0gdFxuICAgICAgcmVzdWx0LmlvcyA9IHRcbiAgICB9IGVsc2UgaWYgKG1hYykge1xuICAgICAgcmVzdWx0Lm1hYyA9IHRcbiAgICB9IGVsc2UgaWYgKHhib3gpIHtcbiAgICAgIHJlc3VsdC54Ym94ID0gdFxuICAgIH0gZWxzZSBpZiAod2luZG93cykge1xuICAgICAgcmVzdWx0LndpbmRvd3MgPSB0XG4gICAgfSBlbHNlIGlmIChsaW51eCkge1xuICAgICAgcmVzdWx0LmxpbnV4ID0gdFxuICAgIH1cblxuICAgIC8vIE9TIHZlcnNpb24gZXh0cmFjdGlvblxuICAgIHZhciBvc1ZlcnNpb24gPSAnJztcbiAgICBpZiAocmVzdWx0LndpbmRvd3NwaG9uZSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvd2luZG93cyBwaG9uZSAoPzpvcyk/XFxzPyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChpb3NkZXZpY2UpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL29zIChcXGQrKFtfXFxzXVxcZCspKikgbGlrZSBtYWMgb3MgeC9pKTtcbiAgICAgIG9zVmVyc2lvbiA9IG9zVmVyc2lvbi5yZXBsYWNlKC9bX1xcc10vZywgJy4nKTtcbiAgICB9IGVsc2UgaWYgKGFuZHJvaWQpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2FuZHJvaWRbIFxcLy1dKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC53ZWJvcykge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvKD86d2VifGhwdylvc1xcLyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuYmxhY2tiZXJyeSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvcmltXFxzdGFibGV0XFxzb3NcXHMoXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmJhZGEpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2JhZGFcXC8oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LnRpemVuKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC90aXplbltcXC9cXHNdKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9XG4gICAgaWYgKG9zVmVyc2lvbikge1xuICAgICAgcmVzdWx0Lm9zdmVyc2lvbiA9IG9zVmVyc2lvbjtcbiAgICB9XG5cbiAgICAvLyBkZXZpY2UgdHlwZSBleHRyYWN0aW9uXG4gICAgdmFyIG9zTWFqb3JWZXJzaW9uID0gb3NWZXJzaW9uLnNwbGl0KCcuJylbMF07XG4gICAgaWYgKFxuICAgICAgICAgdGFibGV0XG4gICAgICB8fCBuZXh1c1RhYmxldFxuICAgICAgfHwgaW9zZGV2aWNlID09ICdpcGFkJ1xuICAgICAgfHwgKGFuZHJvaWQgJiYgKG9zTWFqb3JWZXJzaW9uID09IDMgfHwgKG9zTWFqb3JWZXJzaW9uID49IDQgJiYgIW1vYmlsZSkpKVxuICAgICAgfHwgcmVzdWx0LnNpbGtcbiAgICApIHtcbiAgICAgIHJlc3VsdC50YWJsZXQgPSB0XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgIG1vYmlsZVxuICAgICAgfHwgaW9zZGV2aWNlID09ICdpcGhvbmUnXG4gICAgICB8fCBpb3NkZXZpY2UgPT0gJ2lwb2QnXG4gICAgICB8fCBhbmRyb2lkXG4gICAgICB8fCBuZXh1c01vYmlsZVxuICAgICAgfHwgcmVzdWx0LmJsYWNrYmVycnlcbiAgICAgIHx8IHJlc3VsdC53ZWJvc1xuICAgICAgfHwgcmVzdWx0LmJhZGFcbiAgICApIHtcbiAgICAgIHJlc3VsdC5tb2JpbGUgPSB0XG4gICAgfVxuXG4gICAgLy8gR3JhZGVkIEJyb3dzZXIgU3VwcG9ydFxuICAgIC8vIGh0dHA6Ly9kZXZlbG9wZXIueWFob28uY29tL3l1aS9hcnRpY2xlcy9nYnNcbiAgICBpZiAocmVzdWx0Lm1zZWRnZSB8fFxuICAgICAgICAocmVzdWx0Lm1zaWUgJiYgcmVzdWx0LnZlcnNpb24gPj0gMTApIHx8XG4gICAgICAgIChyZXN1bHQueWFuZGV4YnJvd3NlciAmJiByZXN1bHQudmVyc2lvbiA+PSAxNSkgfHxcblx0XHQgICAgKHJlc3VsdC52aXZhbGRpICYmIHJlc3VsdC52ZXJzaW9uID49IDEuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5jaHJvbWUgJiYgcmVzdWx0LnZlcnNpb24gPj0gMjApIHx8XG4gICAgICAgIChyZXN1bHQuc2Ftc3VuZ0Jyb3dzZXIgJiYgcmVzdWx0LnZlcnNpb24gPj0gNCkgfHxcbiAgICAgICAgKHJlc3VsdC5maXJlZm94ICYmIHJlc3VsdC52ZXJzaW9uID49IDIwLjApIHx8XG4gICAgICAgIChyZXN1bHQuc2FmYXJpICYmIHJlc3VsdC52ZXJzaW9uID49IDYpIHx8XG4gICAgICAgIChyZXN1bHQub3BlcmEgJiYgcmVzdWx0LnZlcnNpb24gPj0gMTAuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5pb3MgJiYgcmVzdWx0Lm9zdmVyc2lvbiAmJiByZXN1bHQub3N2ZXJzaW9uLnNwbGl0KFwiLlwiKVswXSA+PSA2KSB8fFxuICAgICAgICAocmVzdWx0LmJsYWNrYmVycnkgJiYgcmVzdWx0LnZlcnNpb24gPj0gMTAuMSlcbiAgICAgICAgfHwgKHJlc3VsdC5jaHJvbWl1bSAmJiByZXN1bHQudmVyc2lvbiA+PSAyMClcbiAgICAgICAgKSB7XG4gICAgICByZXN1bHQuYSA9IHQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKChyZXN1bHQubXNpZSAmJiByZXN1bHQudmVyc2lvbiA8IDEwKSB8fFxuICAgICAgICAocmVzdWx0LmNocm9tZSAmJiByZXN1bHQudmVyc2lvbiA8IDIwKSB8fFxuICAgICAgICAocmVzdWx0LmZpcmVmb3ggJiYgcmVzdWx0LnZlcnNpb24gPCAyMC4wKSB8fFxuICAgICAgICAocmVzdWx0LnNhZmFyaSAmJiByZXN1bHQudmVyc2lvbiA8IDYpIHx8XG4gICAgICAgIChyZXN1bHQub3BlcmEgJiYgcmVzdWx0LnZlcnNpb24gPCAxMC4wKSB8fFxuICAgICAgICAocmVzdWx0LmlvcyAmJiByZXN1bHQub3N2ZXJzaW9uICYmIHJlc3VsdC5vc3ZlcnNpb24uc3BsaXQoXCIuXCIpWzBdIDwgNilcbiAgICAgICAgfHwgKHJlc3VsdC5jaHJvbWl1bSAmJiByZXN1bHQudmVyc2lvbiA8IDIwKVxuICAgICAgICApIHtcbiAgICAgIHJlc3VsdC5jID0gdFxuICAgIH0gZWxzZSByZXN1bHQueCA9IHRcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHZhciBib3dzZXIgPSBkZXRlY3QodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgPyBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnIDogJycpXG5cbiAgYm93c2VyLnRlc3QgPSBmdW5jdGlvbiAoYnJvd3Nlckxpc3QpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJyb3dzZXJMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgYnJvd3Nlckl0ZW0gPSBicm93c2VyTGlzdFtpXTtcbiAgICAgIGlmICh0eXBlb2YgYnJvd3Nlckl0ZW09PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGJyb3dzZXJJdGVtIGluIGJvd3Nlcikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdmVyc2lvbiBwcmVjaXNpb25zIGNvdW50XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgZ2V0VmVyc2lvblByZWNpc2lvbihcIjEuMTAuM1wiKSAvLyAzXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdmVyc2lvblxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRWZXJzaW9uUHJlY2lzaW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gdmVyc2lvbi5zcGxpdChcIi5cIikubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5OjptYXAgcG9seWZpbGxcbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXl9IGFyclxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaXRlcmF0b3JcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbiBtYXAoYXJyLCBpdGVyYXRvcikge1xuICAgIHZhciByZXN1bHQgPSBbXSwgaTtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLm1hcCkge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChhcnIsIGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goaXRlcmF0b3IoYXJyW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGJyb3dzZXIgdmVyc2lvbiB3ZWlnaHRcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogICBjb21wYXJlVmVyc2lvbnMoWycxLjEwLjIuMScsICAnMS44LjIuMS45MCddKSAgICAvLyAxXG4gICAqICAgY29tcGFyZVZlcnNpb25zKFsnMS4wMTAuMi4xJywgJzEuMDkuMi4xLjkwJ10pOyAgLy8gMVxuICAgKiAgIGNvbXBhcmVWZXJzaW9ucyhbJzEuMTAuMi4xJywgICcxLjEwLjIuMSddKTsgICAgIC8vIDBcbiAgICogICBjb21wYXJlVmVyc2lvbnMoWycxLjEwLjIuMScsICAnMS4wODAwLjInXSk7ICAgICAvLyAtMVxuICAgKlxuICAgKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSB2ZXJzaW9ucyB2ZXJzaW9ucyB0byBjb21wYXJlXG4gICAqIEByZXR1cm4ge051bWJlcn0gY29tcGFyaXNvbiByZXN1bHRcbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9ucyh2ZXJzaW9ucykge1xuICAgIC8vIDEpIGdldCBjb21tb24gcHJlY2lzaW9uIGZvciBib3RoIHZlcnNpb25zLCBmb3IgZXhhbXBsZSBmb3IgXCIxMC4wXCIgYW5kIFwiOVwiIGl0IHNob3VsZCBiZSAyXG4gICAgdmFyIHByZWNpc2lvbiA9IE1hdGgubWF4KGdldFZlcnNpb25QcmVjaXNpb24odmVyc2lvbnNbMF0pLCBnZXRWZXJzaW9uUHJlY2lzaW9uKHZlcnNpb25zWzFdKSk7XG4gICAgdmFyIGNodW5rcyA9IG1hcCh2ZXJzaW9ucywgZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgIHZhciBkZWx0YSA9IHByZWNpc2lvbiAtIGdldFZlcnNpb25QcmVjaXNpb24odmVyc2lvbik7XG5cbiAgICAgIC8vIDIpIFwiOVwiIC0+IFwiOS4wXCIgKGZvciBwcmVjaXNpb24gPSAyKVxuICAgICAgdmVyc2lvbiA9IHZlcnNpb24gKyBuZXcgQXJyYXkoZGVsdGEgKyAxKS5qb2luKFwiLjBcIik7XG5cbiAgICAgIC8vIDMpIFwiOS4wXCIgLT4gW1wiMDAwMDAwMDAwXCJcIiwgXCIwMDAwMDAwMDlcIl1cbiAgICAgIHJldHVybiBtYXAodmVyc2lvbi5zcGxpdChcIi5cIiksIGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5KDIwIC0gY2h1bmsubGVuZ3RoKS5qb2luKFwiMFwiKSArIGNodW5rO1xuICAgICAgfSkucmV2ZXJzZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gaXRlcmF0ZSBpbiByZXZlcnNlIG9yZGVyIGJ5IHJldmVyc2VkIGNodW5rcyBhcnJheVxuICAgIHdoaWxlICgtLXByZWNpc2lvbiA+PSAwKSB7XG4gICAgICAvLyA0KSBjb21wYXJlOiBcIjAwMDAwMDAwOVwiID4gXCIwMDAwMDAwMTBcIiA9IGZhbHNlIChidXQgXCI5XCIgPiBcIjEwXCIgPSB0cnVlKVxuICAgICAgaWYgKGNodW5rc1swXVtwcmVjaXNpb25dID4gY2h1bmtzWzFdW3ByZWNpc2lvbl0pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjaHVua3NbMF1bcHJlY2lzaW9uXSA9PT0gY2h1bmtzWzFdW3ByZWNpc2lvbl0pIHtcbiAgICAgICAgaWYgKHByZWNpc2lvbiA9PT0gMCkge1xuICAgICAgICAgIC8vIGFsbCB2ZXJzaW9uIGNodW5rcyBhcmUgc2FtZVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBicm93c2VyIGlzIHVuc3VwcG9ydGVkXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgYm93c2VyLmlzVW5zdXBwb3J0ZWRCcm93c2VyKHtcbiAgICogICAgIG1zaWU6IFwiMTBcIixcbiAgICogICAgIGZpcmVmb3g6IFwiMjNcIixcbiAgICogICAgIGNocm9tZTogXCIyOVwiLFxuICAgKiAgICAgc2FmYXJpOiBcIjUuMVwiLFxuICAgKiAgICAgb3BlcmE6IFwiMTZcIixcbiAgICogICAgIHBoYW50b206IFwiNTM0XCJcbiAgICogICB9KTtcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgbWluVmVyc2lvbnMgbWFwIG9mIG1pbmltYWwgdmVyc2lvbiB0byBicm93c2VyXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IFtzdHJpY3RNb2RlID0gZmFsc2VdIGZsYWcgdG8gcmV0dXJuIGZhbHNlIGlmIGJyb3dzZXIgd2Fzbid0IGZvdW5kIGluIG1hcFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBbdWFdIHVzZXIgYWdlbnQgc3RyaW5nXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1Vuc3VwcG9ydGVkQnJvd3NlcihtaW5WZXJzaW9ucywgc3RyaWN0TW9kZSwgdWEpIHtcbiAgICB2YXIgX2Jvd3NlciA9IGJvd3NlcjtcblxuICAgIC8vIG1ha2Ugc3RyaWN0TW9kZSBwYXJhbSBvcHRpb25hbCB3aXRoIHVhIHBhcmFtIHVzYWdlXG4gICAgaWYgKHR5cGVvZiBzdHJpY3RNb2RlID09PSAnc3RyaW5nJykge1xuICAgICAgdWEgPSBzdHJpY3RNb2RlO1xuICAgICAgc3RyaWN0TW9kZSA9IHZvaWQoMCk7XG4gICAgfVxuXG4gICAgaWYgKHN0cmljdE1vZGUgPT09IHZvaWQoMCkpIHtcbiAgICAgIHN0cmljdE1vZGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHVhKSB7XG4gICAgICBfYm93c2VyID0gZGV0ZWN0KHVhKTtcbiAgICB9XG5cbiAgICB2YXIgdmVyc2lvbiA9IFwiXCIgKyBfYm93c2VyLnZlcnNpb247XG4gICAgZm9yICh2YXIgYnJvd3NlciBpbiBtaW5WZXJzaW9ucykge1xuICAgICAgaWYgKG1pblZlcnNpb25zLmhhc093blByb3BlcnR5KGJyb3dzZXIpKSB7XG4gICAgICAgIGlmIChfYm93c2VyW2Jyb3dzZXJdKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBtaW5WZXJzaW9uc1ticm93c2VyXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQnJvd3NlciB2ZXJzaW9uIGluIHRoZSBtaW5WZXJzaW9uIG1hcCBzaG91bGQgYmUgYSBzdHJpbmc6ICcgKyBicm93c2VyICsgJzogJyArIFN0cmluZyhtaW5WZXJzaW9ucykpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGJyb3dzZXIgdmVyc2lvbiBhbmQgbWluIHN1cHBvcnRlZCB2ZXJzaW9uLlxuICAgICAgICAgIHJldHVybiBjb21wYXJlVmVyc2lvbnMoW3ZlcnNpb24sIG1pblZlcnNpb25zW2Jyb3dzZXJdXSkgPCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmljdE1vZGU7IC8vIG5vdCBmb3VuZFxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGJyb3dzZXIgaXMgc3VwcG9ydGVkXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gbWluVmVyc2lvbnMgbWFwIG9mIG1pbmltYWwgdmVyc2lvbiB0byBicm93c2VyXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IFtzdHJpY3RNb2RlID0gZmFsc2VdIGZsYWcgdG8gcmV0dXJuIGZhbHNlIGlmIGJyb3dzZXIgd2Fzbid0IGZvdW5kIGluIG1hcFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBbdWFdIHVzZXIgYWdlbnQgc3RyaW5nXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBjaGVjayhtaW5WZXJzaW9ucywgc3RyaWN0TW9kZSwgdWEpIHtcbiAgICByZXR1cm4gIWlzVW5zdXBwb3J0ZWRCcm93c2VyKG1pblZlcnNpb25zLCBzdHJpY3RNb2RlLCB1YSk7XG4gIH1cblxuICBib3dzZXIuaXNVbnN1cHBvcnRlZEJyb3dzZXIgPSBpc1Vuc3VwcG9ydGVkQnJvd3NlcjtcbiAgYm93c2VyLmNvbXBhcmVWZXJzaW9ucyA9IGNvbXBhcmVWZXJzaW9ucztcbiAgYm93c2VyLmNoZWNrID0gY2hlY2s7XG5cbiAgLypcbiAgICogU2V0IG91ciBkZXRlY3QgbWV0aG9kIHRvIHRoZSBtYWluIGJvd3NlciBvYmplY3Qgc28gd2UgY2FuXG4gICAqIHJldXNlIGl0IHRvIHRlc3Qgb3RoZXIgdXNlciBhZ2VudHMuXG4gICAqIFRoaXMgaXMgbmVlZGVkIHRvIGltcGxlbWVudCBmdXR1cmUgdGVzdHMuXG4gICAqL1xuICBib3dzZXIuX2RldGVjdCA9IGRldGVjdDtcblxuICByZXR1cm4gYm93c2VyXG59KTtcbiIsIiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZztcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG52YXIgY2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcgaW4gY2FjaGVcbiAgICA/IGNhY2hlW3N0cmluZ11cbiAgICA6IGNhY2hlW3N0cmluZ10gPSBzdHJpbmdcbiAgICAgIC5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sICctJCYnKVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBoZW5hdGVTdHlsZU5hbWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG4vLyBzcGVjaWFsIGZsZXhib3ggc3BlY2lmaWNhdGlvbnNcblxuXG52YXIgX3ByZWZpeEFsbDIgPSByZXF1aXJlKCcuL3N0YXRpYy9wcmVmaXhBbGwnKTtcblxudmFyIF9wcmVmaXhBbGwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4QWxsMik7XG5cbnZhciBfZ2V0QnJvd3NlckluZm9ybWF0aW9uID0gcmVxdWlyZSgnLi91dGlscy9nZXRCcm93c2VySW5mb3JtYXRpb24nKTtcblxudmFyIF9nZXRCcm93c2VySW5mb3JtYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0QnJvd3NlckluZm9ybWF0aW9uKTtcblxudmFyIF9nZXRQcmVmaXhlZEtleWZyYW1lcyA9IHJlcXVpcmUoJy4vdXRpbHMvZ2V0UHJlZml4ZWRLZXlmcmFtZXMnKTtcblxudmFyIF9nZXRQcmVmaXhlZEtleWZyYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZEtleWZyYW1lcyk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvY2FwaXRhbGl6ZVN0cmluZycpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FwaXRhbGl6ZVN0cmluZyk7XG5cbnZhciBfc29ydFByZWZpeGVkU3R5bGUgPSByZXF1aXJlKCcuL3V0aWxzL3NvcnRQcmVmaXhlZFN0eWxlJyk7XG5cbnZhciBfc29ydFByZWZpeGVkU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc29ydFByZWZpeGVkU3R5bGUpO1xuXG52YXIgX3ByZWZpeFByb3BzID0gcmVxdWlyZSgnLi9wcmVmaXhQcm9wcycpO1xuXG52YXIgX3ByZWZpeFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeFByb3BzKTtcblxudmFyIF9wb3NpdGlvbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy9wb3NpdGlvbicpO1xuXG52YXIgX3Bvc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9uKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9wbHVnaW5zL2NhbGMnKTtcblxudmFyIF9jYWxjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbGMpO1xuXG52YXIgX3pvb21DdXJzb3IgPSByZXF1aXJlKCcuL3BsdWdpbnMvem9vbUN1cnNvcicpO1xuXG52YXIgX3pvb21DdXJzb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfem9vbUN1cnNvcik7XG5cbnZhciBfZ3JhYkN1cnNvciA9IHJlcXVpcmUoJy4vcGx1Z2lucy9ncmFiQ3Vyc29yJyk7XG5cbnZhciBfZ3JhYkN1cnNvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmFiQ3Vyc29yKTtcblxudmFyIF9mbGV4ID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXgnKTtcblxudmFyIF9mbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXgpO1xuXG52YXIgX3NpemluZyA9IHJlcXVpcmUoJy4vcGx1Z2lucy9zaXppbmcnKTtcblxudmFyIF9zaXppbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2l6aW5nKTtcblxudmFyIF9ncmFkaWVudCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9ncmFkaWVudCcpO1xuXG52YXIgX2dyYWRpZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyYWRpZW50KTtcblxudmFyIF90cmFuc2l0aW9uID0gcmVxdWlyZSgnLi9wbHVnaW5zL3RyYW5zaXRpb24nKTtcblxudmFyIF90cmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb24pO1xuXG52YXIgX2ZsZXhib3hJRSA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Ym94SUUnKTtcblxudmFyIF9mbGV4Ym94SUUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxleGJveElFKTtcblxudmFyIF9mbGV4Ym94T2xkID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXhib3hPbGQnKTtcblxudmFyIF9mbGV4Ym94T2xkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXhib3hPbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgcGx1Z2lucyA9IFtfcG9zaXRpb24yLmRlZmF1bHQsIF9jYWxjMi5kZWZhdWx0LCBfem9vbUN1cnNvcjIuZGVmYXVsdCwgX2dyYWJDdXJzb3IyLmRlZmF1bHQsIF9zaXppbmcyLmRlZmF1bHQsIF9ncmFkaWVudDIuZGVmYXVsdCwgX3RyYW5zaXRpb24yLmRlZmF1bHQsIF9mbGV4Ym94SUUyLmRlZmF1bHQsIF9mbGV4Ym94T2xkMi5kZWZhdWx0LFxuLy8gdGhpcyBtdXN0IGJlIHJ1biBBRlRFUiB0aGUgZmxleGJveCBzcGVjc1xuX2ZsZXgyLmRlZmF1bHRdO1xuXG52YXIgUHJlZml4ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBJbnN0YW50aWFudGUgYSBuZXcgcHJlZml4ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJBZ2VudCAtIHVzZXJBZ2VudCB0byBnYXRoZXIgcHJlZml4IGluZm9ybWF0aW9uIGFjY29yZGluZyB0byBjYW5pdXNlLmNvbVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2VlcFVucHJlZml4ZWQgLSBrZWVwcyB1bnByZWZpeGVkIHByb3BlcnRpZXMgYW5kIHZhbHVlc1xuICAgKi9cblxuICBmdW5jdGlvbiBQcmVmaXhlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcmVmaXhlcik7XG5cbiAgICB2YXIgZGVmYXVsdFVzZXJBZ2VudCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gbmF2aWdhdG9yLnVzZXJBZ2VudCA6IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuX3VzZXJBZ2VudCA9IG9wdGlvbnMudXNlckFnZW50IHx8IGRlZmF1bHRVc2VyQWdlbnQ7XG4gICAgdGhpcy5fa2VlcFVucHJlZml4ZWQgPSBvcHRpb25zLmtlZXBVbnByZWZpeGVkIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5fYnJvd3NlckluZm8gPSAoMCwgX2dldEJyb3dzZXJJbmZvcm1hdGlvbjIuZGVmYXVsdCkodGhpcy5fdXNlckFnZW50KTtcblxuICAgIC8vIENoZWNrcyBpZiB0aGUgdXNlckFnZW50IHdhcyByZXNvbHZlZCBjb3JyZWN0bHlcbiAgICBpZiAodGhpcy5fYnJvd3NlckluZm8gJiYgdGhpcy5fYnJvd3NlckluZm8ucHJlZml4KSB7XG4gICAgICAvLyBzZXQgYWRkaXRpb25hbCBwcmVmaXggaW5mb3JtYXRpb25cbiAgICAgIHRoaXMuY3NzUHJlZml4ID0gdGhpcy5fYnJvd3NlckluZm8ucHJlZml4LmNzcztcbiAgICAgIHRoaXMuanNQcmVmaXggPSB0aGlzLl9icm93c2VySW5mby5wcmVmaXguaW5saW5lO1xuICAgICAgdGhpcy5wcmVmaXhlZEtleWZyYW1lcyA9ICgwLCBfZ2V0UHJlZml4ZWRLZXlmcmFtZXMyLmRlZmF1bHQpKHRoaXMuX2Jyb3dzZXJJbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXNlUHJlZml4QWxsRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gdGhpcy5fYnJvd3NlckluZm8uYnJvd3NlciAmJiBfcHJlZml4UHJvcHMyLmRlZmF1bHRbdGhpcy5fYnJvd3NlckluZm8uYnJvd3Nlcl07XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuX3JlcXVpcmVzUHJlZml4ID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFba2V5XSA+PSBfdGhpcy5fYnJvd3NlckluZm8udmVyc2lvbjtcbiAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBuYW1lKSB7XG4gICAgICAgIHJlc3VsdFtuYW1lXSA9IHRydWU7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LCB7fSk7XG4gICAgICB0aGlzLl9oYXNQcm9wc1JlcXVpcmluZ1ByZWZpeCA9IE9iamVjdC5rZXlzKHRoaXMuX3JlcXVpcmVzUHJlZml4KS5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91c2VQcmVmaXhBbGxGYWxsYmFjayA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwcmVmaXhlZCB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFN0eWxlIG9iamVjdCB0aGF0IGdldHMgcHJlZml4ZWQgcHJvcGVydGllcyBhZGRlZFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFN0eWxlIG9iamVjdCB3aXRoIHByZWZpeGVkIHByb3BlcnRpZXMgYW5kIHZhbHVlc1xuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhQcmVmaXhlciwgW3tcbiAgICBrZXk6ICdwcmVmaXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVmaXgoc3R5bGVzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gdXNlIHByZWZpeEFsbCBhcyBmYWxsYmFjayBpZiB1c2VyQWdlbnQgY2FuIG5vdCBiZSByZXNvbHZlZFxuICAgICAgaWYgKHRoaXMuX3VzZVByZWZpeEFsbEZhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3ByZWZpeEFsbDMuZGVmYXVsdCkoc3R5bGVzKTtcbiAgICAgIH1cblxuICAgICAgLy8gb25seSBhZGQgcHJlZml4ZXMgaWYgbmVlZGVkXG4gICAgICBpZiAoIXRoaXMuX2hhc1Byb3BzUmVxdWlyaW5nUHJlZml4KSB7XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzW3Byb3BlcnR5XTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIC8vIHJlY3Vyc2UgdGhyb3VnaCBuZXN0ZWQgc3R5bGUgb2JqZWN0c1xuICAgICAgICAgIHN0eWxlc1twcm9wZXJ0eV0gPSBfdGhpczIucHJlZml4KHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhZGQgcHJlZml4ZXMgaWYgbmVlZGVkXG4gICAgICAgICAgaWYgKF90aGlzMi5fcmVxdWlyZXNQcmVmaXhbcHJvcGVydHldKSB7XG4gICAgICAgICAgICBzdHlsZXNbX3RoaXMyLmpzUHJlZml4ICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAoIV90aGlzMi5fa2VlcFVucHJlZml4ZWQpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIHN0eWxlc1twcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICBbXS5jb25jYXQoc3R5bGVzW3Byb3BlcnR5XSkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAvLyByZXNvbHZlIHBsdWdpbnNcbiAgICAgICAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGVzIGEgbmV3IHBsdWdpbiBpbnRlcmZhY2Ugd2l0aCBjdXJyZW50IGRhdGFcbiAgICAgICAgICAgIGFzc2lnblN0eWxlcyhzdHlsZXMsIHBsdWdpbih7XG4gICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgICAgICAgYnJvd3NlckluZm86IF90aGlzMi5fYnJvd3NlckluZm8sXG4gICAgICAgICAgICAgIHByZWZpeDoge1xuICAgICAgICAgICAgICAgIGpzOiBfdGhpczIuanNQcmVmaXgsXG4gICAgICAgICAgICAgICAgY3NzOiBfdGhpczIuY3NzUHJlZml4LFxuICAgICAgICAgICAgICAgIGtleWZyYW1lczogX3RoaXMyLnByZWZpeGVkS2V5ZnJhbWVzXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGtlZXBVbnByZWZpeGVkOiBfdGhpczIuX2tlZXBVbnByZWZpeGVkLFxuICAgICAgICAgICAgICByZXF1aXJlc1ByZWZpeDogX3RoaXMyLl9yZXF1aXJlc1ByZWZpeFxuICAgICAgICAgICAgfSksIHZhbHVlLCBfdGhpczIuX2tlZXBVbnByZWZpeGVkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuICgwLCBfc29ydFByZWZpeGVkU3R5bGUyLmRlZmF1bHQpKHN0eWxlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByZWZpeGVkIHZlcnNpb24gb2YgdGhlIHN0eWxlIG9iamVjdCB1c2luZyBhbGwgdmVuZG9yIHByZWZpeGVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFN0eWxlIG9iamVjdCB0aGF0IGdldHMgcHJlZml4ZWQgcHJvcGVydGllcyBhZGRlZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IC0gU3R5bGUgb2JqZWN0IHdpdGggcHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAgICovXG5cbiAgfV0sIFt7XG4gICAga2V5OiAncHJlZml4QWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlZml4QWxsKHN0eWxlcykge1xuICAgICAgcmV0dXJuICgwLCBfcHJlZml4QWxsMy5kZWZhdWx0KShzdHlsZXMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcmVmaXhlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUHJlZml4ZXI7XG5cblxuZnVuY3Rpb24gYXNzaWduU3R5bGVzKGJhc2UpIHtcbiAgdmFyIGV4dGVuZCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuICB2YXIgdmFsdWUgPSBhcmd1bWVudHNbMl07XG4gIHZhciBrZWVwVW5wcmVmaXhlZCA9IGFyZ3VtZW50c1szXTtcblxuICBPYmplY3Qua2V5cyhleHRlbmQpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgdmFyIGJhc2VWYWx1ZSA9IGJhc2VbcHJvcGVydHldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGJhc2VWYWx1ZSkpIHtcbiAgICAgIFtdLmNvbmNhdChleHRlbmRbcHJvcGVydHldKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgaWYgKGJhc2VbcHJvcGVydHldLmluZGV4T2YodmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICBiYXNlW3Byb3BlcnR5XS5zcGxpY2UoYmFzZVZhbHVlLmluZGV4T2YodmFsdWUpLCBrZWVwVW5wcmVmaXhlZCA/IDAgOiAxLCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZVtwcm9wZXJ0eV0gPSBleHRlbmRbcHJvcGVydHldO1xuICAgIH1cbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYWxjO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gY2FsYyhfcmVmKSB7XG4gIHZhciBwcm9wZXJ0eSA9IF9yZWYucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG4gIHZhciBfcmVmJGJyb3dzZXJJbmZvID0gX3JlZi5icm93c2VySW5mbztcbiAgdmFyIGJyb3dzZXIgPSBfcmVmJGJyb3dzZXJJbmZvLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gX3JlZiRicm93c2VySW5mby52ZXJzaW9uO1xuICB2YXIgY3NzID0gX3JlZi5wcmVmaXguY3NzO1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2NhbGMoJykgPiAtMSAmJiAoYnJvd3NlciA9PT0gJ2ZpcmVmb3gnICYmIHZlcnNpb24gPCAxNSB8fCBicm93c2VyID09PSAnY2hyb21lJyAmJiB2ZXJzaW9uIDwgMjUgfHwgYnJvd3NlciA9PT0gJ3NhZmFyaScgJiYgdmVyc2lvbiA8IDYuMSB8fCBicm93c2VyID09PSAnaW9zX3NhZicgJiYgdmVyc2lvbiA8IDcpKSB7XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUucmVwbGFjZSgvY2FsY1xcKC9nLCBjc3MgKyAnY2FsYygnKSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZsZXg7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdmFsdWVzID0geyBmbGV4OiB0cnVlLCAnaW5saW5lLWZsZXgnOiB0cnVlIH07XG5cbmZ1bmN0aW9uIGZsZXgoX3JlZikge1xuICB2YXIgcHJvcGVydHkgPSBfcmVmLnByb3BlcnR5O1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICB2YXIgX3JlZiRicm93c2VySW5mbyA9IF9yZWYuYnJvd3NlckluZm87XG4gIHZhciBicm93c2VyID0gX3JlZiRicm93c2VySW5mby5icm93c2VyO1xuICB2YXIgdmVyc2lvbiA9IF9yZWYkYnJvd3NlckluZm8udmVyc2lvbjtcbiAgdmFyIGNzcyA9IF9yZWYucHJlZml4LmNzcztcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiB2YWx1ZXNbdmFsdWVdICYmIChicm93c2VyID09PSAnY2hyb21lJyAmJiB2ZXJzaW9uIDwgMjkgJiYgdmVyc2lvbiA+IDIwIHx8IChicm93c2VyID09PSAnc2FmYXJpJyB8fCBicm93c2VyID09PSAnaW9zX3NhZicpICYmIHZlcnNpb24gPCA5ICYmIHZlcnNpb24gPiA2IHx8IGJyb3dzZXIgPT09ICdvcGVyYScgJiYgKHZlcnNpb24gPT0gMTUgfHwgdmVyc2lvbiA9PSAxNikpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6ICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkoY3NzICsgdmFsdWUsIHZhbHVlLCBrZWVwVW5wcmVmaXhlZClcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94SUU7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnZGlzdHJpYnV0ZScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnLFxuICBmbGV4OiAnZmxleGJveCcsXG4gICdpbmxpbmUtZmxleCc6ICdpbmxpbmUtZmxleGJveCdcbn07XG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25Db250ZW50OiAnbXNGbGV4TGluZVBhY2snLFxuICBhbGlnblNlbGY6ICdtc0ZsZXhJdGVtQWxpZ24nLFxuICBhbGlnbkl0ZW1zOiAnbXNGbGV4QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ21zRmxleFBhY2snLFxuICBvcmRlcjogJ21zRmxleE9yZGVyJyxcbiAgZmxleEdyb3c6ICdtc0ZsZXhQb3NpdGl2ZScsXG4gIGZsZXhTaHJpbms6ICdtc0ZsZXhOZWdhdGl2ZScsXG4gIGZsZXhCYXNpczogJ21zUHJlZmVycmVkU2l6ZSdcbn07XG5cbmZ1bmN0aW9uIGZsZXhib3hJRShfcmVmKSB7XG4gIHZhciBwcm9wZXJ0eSA9IF9yZWYucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG4gIHZhciBzdHlsZXMgPSBfcmVmLnN0eWxlcztcbiAgdmFyIF9yZWYkYnJvd3NlckluZm8gPSBfcmVmLmJyb3dzZXJJbmZvO1xuICB2YXIgYnJvd3NlciA9IF9yZWYkYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBfcmVmJGJyb3dzZXJJbmZvLnZlcnNpb247XG4gIHZhciBjc3MgPSBfcmVmLnByZWZpeC5jc3M7XG4gIHZhciBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgaWYgKChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSB8fCBwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignZmxleCcpID4gLTEpICYmIChicm93c2VyID09PSAnaWVfbW9iJyB8fCBicm93c2VyID09PSAnaWUnKSAmJiB2ZXJzaW9uID09IDEwKSB7XG4gICAgaWYgKCFrZWVwVW5wcmVmaXhlZCAmJiAhQXJyYXkuaXNBcnJheShzdHlsZXNbcHJvcGVydHldKSkge1xuICAgICAgZGVsZXRlIHN0eWxlc1twcm9wZXJ0eV07XG4gICAgfVxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3MgKyBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0sIHZhbHVlLCBrZWVwVW5wcmVmaXhlZClcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0sIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94T2xkO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2p1c3RpZnknLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgJ3dyYXAtcmV2ZXJzZSc6ICdtdWx0aXBsZScsXG4gIHdyYXA6ICdtdWx0aXBsZScsXG4gIGZsZXg6ICdib3gnLFxuICAnaW5saW5lLWZsZXgnOiAnaW5saW5lLWJveCdcbn07XG5cbnZhciBhbHRlcm5hdGl2ZVByb3BzID0ge1xuICBhbGlnbkl0ZW1zOiAnV2Via2l0Qm94QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ1dlYmtpdEJveFBhY2snLFxuICBmbGV4V3JhcDogJ1dlYmtpdEJveExpbmVzJ1xufTtcblxudmFyIG90aGVyUHJvcHMgPSBbJ2FsaWduQ29udGVudCcsICdhbGlnblNlbGYnLCAnb3JkZXInLCAnZmxleEdyb3cnLCAnZmxleFNocmluaycsICdmbGV4QmFzaXMnLCAnZmxleERpcmVjdGlvbiddO1xudmFyIHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhhbHRlcm5hdGl2ZVByb3BzKS5jb25jYXQob3RoZXJQcm9wcyk7XG5cbmZ1bmN0aW9uIGZsZXhib3hPbGQoX3JlZikge1xuICB2YXIgcHJvcGVydHkgPSBfcmVmLnByb3BlcnR5O1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICB2YXIgc3R5bGVzID0gX3JlZi5zdHlsZXM7XG4gIHZhciBfcmVmJGJyb3dzZXJJbmZvID0gX3JlZi5icm93c2VySW5mbztcbiAgdmFyIGJyb3dzZXIgPSBfcmVmJGJyb3dzZXJJbmZvLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gX3JlZiRicm93c2VySW5mby52ZXJzaW9uO1xuICB2YXIgY3NzID0gX3JlZi5wcmVmaXguY3NzO1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmICgocHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5KSA+IC0xIHx8IHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCdmbGV4JykgPiAtMSkgJiYgKGJyb3dzZXIgPT09ICdmaXJlZm94JyAmJiB2ZXJzaW9uIDwgMjIgfHwgYnJvd3NlciA9PT0gJ2Nocm9tZScgJiYgdmVyc2lvbiA8IDIxIHx8IChicm93c2VyID09PSAnc2FmYXJpJyB8fCBicm93c2VyID09PSAnaW9zX3NhZicpICYmIHZlcnNpb24gPD0gNi4xIHx8IGJyb3dzZXIgPT09ICdhbmRyb2lkJyAmJiB2ZXJzaW9uIDwgNC40IHx8IGJyb3dzZXIgPT09ICdhbmRfdWMnKSkge1xuICAgIGlmICgha2VlcFVucHJlZml4ZWQgJiYgIUFycmF5LmlzQXJyYXkoc3R5bGVzW3Byb3BlcnR5XSkpIHtcbiAgICAgIGRlbGV0ZSBzdHlsZXNbcHJvcGVydHldO1xuICAgIH1cbiAgICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBXZWJraXRCb3hPcmllbnQ6IHZhbHVlLmluZGV4T2YoJ2NvbHVtbicpID4gLTEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgICBXZWJraXRCb3hEaXJlY3Rpb246IHZhbHVlLmluZGV4T2YoJ3JldmVyc2UnKSA+IC0xID8gJ3JldmVyc2UnIDogJ25vcm1hbCdcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3MgKyBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0sIHZhbHVlLCBrZWVwVW5wcmVmaXhlZClcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0sIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBncmFiQ3Vyc29yO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZhbHVlcyA9IHsgZ3JhYjogdHJ1ZSwgZ3JhYmJpbmc6IHRydWUgfTtcblxuZnVuY3Rpb24gZ3JhYkN1cnNvcihfcmVmKSB7XG4gIHZhciBwcm9wZXJ0eSA9IF9yZWYucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG4gIHZhciBicm93c2VyID0gX3JlZi5icm93c2VySW5mby5icm93c2VyO1xuICB2YXIgY3NzID0gX3JlZi5wcmVmaXguY3NzO1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIC8vIGFkZHMgcHJlZml4ZXMgZm9yIGZpcmVmb3gsIGNocm9tZSwgc2FmYXJpLCBhbmQgb3BlcmEgcmVnYXJkbGVzcyBvZiB2ZXJzaW9uIHVudGlsIGEgcmVsaWFibGUgYnJ3b3NlciBzdXBwb3J0IGluZm8gY2FuIGJlIGZvdW5kIChzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yb2ZyaXNjaG1hbm4vaW5saW5lLXN0eWxlLXByZWZpeGVyL2lzc3Vlcy83OSlcbiAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiB2YWx1ZXNbdmFsdWVdICYmIChicm93c2VyID09PSAnZmlyZWZveCcgfHwgYnJvd3NlciA9PT0gJ2Nocm9tZScgfHwgYnJvd3NlciA9PT0gJ3NhZmFyaScgfHwgYnJvd3NlciA9PT0gJ29wZXJhJykpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3Vyc29yOiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzcyArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpXG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ3JhZGllbnQ7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgdmFsdWVzID0gL2xpbmVhci1ncmFkaWVudHxyYWRpYWwtZ3JhZGllbnR8cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudHxyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50LztcblxuZnVuY3Rpb24gZ3JhZGllbnQoX3JlZikge1xuICB2YXIgcHJvcGVydHkgPSBfcmVmLnByb3BlcnR5O1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICB2YXIgX3JlZiRicm93c2VySW5mbyA9IF9yZWYuYnJvd3NlckluZm87XG4gIHZhciBicm93c2VyID0gX3JlZiRicm93c2VySW5mby5icm93c2VyO1xuICB2YXIgdmVyc2lvbiA9IF9yZWYkYnJvd3NlckluZm8udmVyc2lvbjtcbiAgdmFyIGNzcyA9IF9yZWYucHJlZml4LmNzcztcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5tYXRjaCh2YWx1ZXMpICE9PSBudWxsICYmIChicm93c2VyID09PSAnZmlyZWZveCcgJiYgdmVyc2lvbiA8IDE2IHx8IGJyb3dzZXIgPT09ICdjaHJvbWUnICYmIHZlcnNpb24gPCAyNiB8fCAoYnJvd3NlciA9PT0gJ3NhZmFyaScgfHwgYnJvd3NlciA9PT0gJ2lvc19zYWYnKSAmJiB2ZXJzaW9uIDwgNyB8fCAoYnJvd3NlciA9PT0gJ29wZXJhJyB8fCBicm93c2VyID09PSAnb3BfbWluaScpICYmIHZlcnNpb24gPCAxMi4xIHx8IGJyb3dzZXIgPT09ICdhbmRyb2lkJyAmJiB2ZXJzaW9uIDwgNC40IHx8IGJyb3dzZXIgPT09ICdhbmRfdWMnKSkge1xuICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzcyArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcG9zaXRpb247XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBwb3NpdGlvbihfcmVmKSB7XG4gIHZhciBwcm9wZXJ0eSA9IF9yZWYucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG4gIHZhciBicm93c2VyID0gX3JlZi5icm93c2VySW5mby5icm93c2VyO1xuICB2YXIgY3NzID0gX3JlZi5wcmVmaXguY3NzO1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmIChwcm9wZXJ0eSA9PT0gJ3Bvc2l0aW9uJyAmJiB2YWx1ZSA9PT0gJ3N0aWNreScgJiYgKGJyb3dzZXIgPT09ICdzYWZhcmknIHx8IGJyb3dzZXIgPT09ICdpb3Nfc2FmJykpIHtcbiAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wZXJ0eSwgKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3MgKyB2YWx1ZSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNpemluZztcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvZ2V0UHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBwcm9wZXJ0aWVzID0ge1xuICBtYXhIZWlnaHQ6IHRydWUsXG4gIG1heFdpZHRoOiB0cnVlLFxuICB3aWR0aDogdHJ1ZSxcbiAgaGVpZ2h0OiB0cnVlLFxuICBjb2x1bW5XaWR0aDogdHJ1ZSxcbiAgbWluV2lkdGg6IHRydWUsXG4gIG1pbkhlaWdodDogdHJ1ZVxufTtcbnZhciB2YWx1ZXMgPSB7XG4gICdtaW4tY29udGVudCc6IHRydWUsXG4gICdtYXgtY29udGVudCc6IHRydWUsXG4gICdmaWxsLWF2YWlsYWJsZSc6IHRydWUsXG4gICdmaXQtY29udGVudCc6IHRydWUsXG4gICdjb250YWluLWZsb2F0cyc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIHNpemluZyhfcmVmKSB7XG4gIHZhciBwcm9wZXJ0eSA9IF9yZWYucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG4gIHZhciBjc3MgPSBfcmVmLnByZWZpeC5jc3M7XG4gIHZhciBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgLy8gVGhpcyBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZVxuICAvLyBLZWVwIGFuIGV5ZSBvbiBpdFxuICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0gJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzcyArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNpdGlvbjtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUgPSByZXF1aXJlKCdoeXBoZW5hdGUtc3R5bGUtbmFtZScpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVTdHlsZU5hbWUpO1xuXG52YXIgX3VucHJlZml4UHJvcGVydHkgPSByZXF1aXJlKCcuLi91dGlscy91bnByZWZpeFByb3BlcnR5Jyk7XG5cbnZhciBfdW5wcmVmaXhQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bnByZWZpeFByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIHByb3BlcnRpZXMgPSB7IHRyYW5zaXRpb246IHRydWUsIHRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZSB9O1xuXG5mdW5jdGlvbiB0cmFuc2l0aW9uKF9yZWYpIHtcbiAgdmFyIHByb3BlcnR5ID0gX3JlZi5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZTtcbiAgdmFyIGNzcyA9IF9yZWYucHJlZml4LmNzcztcbiAgdmFyIHJlcXVpcmVzUHJlZml4ID0gX3JlZi5yZXF1aXJlc1ByZWZpeDtcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICAvLyBhbHNvIGNoZWNrIGZvciBhbHJlYWR5IHByZWZpeGVkIHRyYW5zaXRpb25zXG4gIHZhciB1bnByZWZpeGVkUHJvcGVydHkgPSAoMCwgX3VucHJlZml4UHJvcGVydHkyLmRlZmF1bHQpKHByb3BlcnR5KTtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBwcm9wZXJ0aWVzW3VucHJlZml4ZWRQcm9wZXJ0eV0pIHtcbiAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFRPRE86IG1lbW9pemUgdGhpcyBhcnJheVxuICAgICAgdmFyIHJlcXVpcmVzUHJlZml4RGFzaENhc2VkID0gT2JqZWN0LmtleXMocmVxdWlyZXNQcmVmaXgpLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gKDAsIF9oeXBoZW5hdGVTdHlsZU5hbWUyLmRlZmF1bHQpKHByb3ApO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIG9ubHkgc3BsaXQgbXVsdGkgdmFsdWVzLCBub3QgY3ViaWMgYmV6aWVyc1xuICAgICAgdmFyIG11bHRpcGxlVmFsdWVzID0gdmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZyk7XG5cbiAgICAgIHJlcXVpcmVzUHJlZml4RGFzaENhc2VkLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgbXVsdGlwbGVWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgICAgICAgIGlmICh2YWwuaW5kZXhPZihwcm9wKSA+IC0xICYmIHByb3AgIT09ICdvcmRlcicpIHtcbiAgICAgICAgICAgIG11bHRpcGxlVmFsdWVzW2luZGV4XSA9IHZhbC5yZXBsYWNlKHByb3AsIGNzcyArIHByb3ApICsgKGtlZXBVbnByZWZpeGVkID8gJywnICsgdmFsIDogJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdjogX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wZXJ0eSwgbXVsdGlwbGVWYWx1ZXMuam9pbignLCcpKVxuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICBpZiAoKHR5cGVvZiBfcmV0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihfcmV0KSkgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0LnY7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHpvb21DdXJzb3I7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdmFsdWVzID0geyAnem9vbS1pbic6IHRydWUsICd6b29tLW91dCc6IHRydWUgfTtcblxuZnVuY3Rpb24gem9vbUN1cnNvcihfcmVmKSB7XG4gIHZhciBwcm9wZXJ0eSA9IF9yZWYucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG4gIHZhciBfcmVmJGJyb3dzZXJJbmZvID0gX3JlZi5icm93c2VySW5mbztcbiAgdmFyIGJyb3dzZXIgPSBfcmVmJGJyb3dzZXJJbmZvLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gX3JlZiRicm93c2VySW5mby52ZXJzaW9uO1xuICB2YXIgY3NzID0gX3JlZi5wcmVmaXguY3NzO1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2N1cnNvcicgJiYgdmFsdWVzW3ZhbHVlXSAmJiAoYnJvd3NlciA9PT0gJ2ZpcmVmb3gnICYmIHZlcnNpb24gPCAyNCB8fCBicm93c2VyID09PSAnY2hyb21lJyAmJiB2ZXJzaW9uIDwgMzcgfHwgYnJvd3NlciA9PT0gJ3NhZmFyaScgJiYgdmVyc2lvbiA8IDkgfHwgYnJvd3NlciA9PT0gJ29wZXJhJyAmJiB2ZXJzaW9uIDwgMjQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnNvcjogKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3MgKyB2YWx1ZSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKVxuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0geyBcImNocm9tZVwiOiB7IFwidHJhbnNmb3JtXCI6IDM1LCBcInRyYW5zZm9ybU9yaWdpblwiOiAzNSwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IDM1LCBcInRyYW5zZm9ybU9yaWdpbllcIjogMzUsIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IDM1LCBcInBlcnNwZWN0aXZlXCI6IDM1LCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IDM1LCBcInRyYW5zZm9ybVN0eWxlXCI6IDM1LCBcInRyYW5zZm9ybU9yaWdpblpcIjogMzUsIFwiYW5pbWF0aW9uXCI6IDQyLCBcImFuaW1hdGlvbkRlbGF5XCI6IDQyLCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiA0MiwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiA0MiwgXCJhbmltYXRpb25EdXJhdGlvblwiOiA0MiwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiA0MiwgXCJhbmltYXRpb25OYW1lXCI6IDQyLCBcImFuaW1hdGlvblBsYXlTdGF0ZVwiOiA0MiwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiA0MiwgXCJhcHBlYXJhbmNlXCI6IDU1LCBcInVzZXJTZWxlY3RcIjogNTUsIFwiZm9udEtlcm5pbmdcIjogMzIsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogNTUsIFwidGV4dEVtcGhhc2lzXCI6IDU1LCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IDU1LCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IDU1LCBcImJveERlY29yYXRpb25CcmVha1wiOiA1NSwgXCJjbGlwUGF0aFwiOiA1NSwgXCJtYXNrSW1hZ2VcIjogNTUsIFwibWFza01vZGVcIjogNTUsIFwibWFza1JlcGVhdFwiOiA1NSwgXCJtYXNrUG9zaXRpb25cIjogNTUsIFwibWFza0NsaXBcIjogNTUsIFwibWFza09yaWdpblwiOiA1NSwgXCJtYXNrU2l6ZVwiOiA1NSwgXCJtYXNrQ29tcG9zaXRlXCI6IDU1LCBcIm1hc2tcIjogNTUsIFwibWFza0JvcmRlclNvdXJjZVwiOiA1NSwgXCJtYXNrQm9yZGVyTW9kZVwiOiA1NSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogNTUsIFwibWFza0JvcmRlcldpZHRoXCI6IDU1LCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogNTUsIFwibWFza0JvcmRlclJlcGVhdFwiOiA1NSwgXCJtYXNrQm9yZGVyXCI6IDU1LCBcIm1hc2tUeXBlXCI6IDU1LCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogNTUsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IDU1LCBcInRleHREZWNvcmF0aW9uTGluZVwiOiA1NSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IDU1LCBcImZpbHRlclwiOiA1MiwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IDQ3LCBcImJyZWFrQWZ0ZXJcIjogNDksIFwiYnJlYWtCZWZvcmVcIjogNDksIFwiYnJlYWtJbnNpZGVcIjogNDksIFwiY29sdW1uQ291bnRcIjogNDksIFwiY29sdW1uRmlsbFwiOiA0OSwgXCJjb2x1bW5HYXBcIjogNDksIFwiY29sdW1uUnVsZVwiOiA0OSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogNDksIFwiY29sdW1uUnVsZVN0eWxlXCI6IDQ5LCBcImNvbHVtblJ1bGVXaWR0aFwiOiA0OSwgXCJjb2x1bW5zXCI6IDQ5LCBcImNvbHVtblNwYW5cIjogNDksIFwiY29sdW1uV2lkdGhcIjogNDkgfSwgXCJzYWZhcmlcIjogeyBcImZsZXhcIjogOCwgXCJmbGV4QmFzaXNcIjogOCwgXCJmbGV4RGlyZWN0aW9uXCI6IDgsIFwiZmxleEdyb3dcIjogOCwgXCJmbGV4Rmxvd1wiOiA4LCBcImZsZXhTaHJpbmtcIjogOCwgXCJmbGV4V3JhcFwiOiA4LCBcImFsaWduQ29udGVudFwiOiA4LCBcImFsaWduSXRlbXNcIjogOCwgXCJhbGlnblNlbGZcIjogOCwgXCJqdXN0aWZ5Q29udGVudFwiOiA4LCBcIm9yZGVyXCI6IDgsIFwidHJhbnNpdGlvblwiOiA2LCBcInRyYW5zaXRpb25EZWxheVwiOiA2LCBcInRyYW5zaXRpb25EdXJhdGlvblwiOiA2LCBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiA2LCBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiA2LCBcInRyYW5zZm9ybVwiOiA4LCBcInRyYW5zZm9ybU9yaWdpblwiOiA4LCBcInRyYW5zZm9ybU9yaWdpblhcIjogOCwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IDgsIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IDgsIFwicGVyc3BlY3RpdmVcIjogOCwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiA4LCBcInRyYW5zZm9ybVN0eWxlXCI6IDgsIFwidHJhbnNmb3JtT3JpZ2luWlwiOiA4LCBcImFuaW1hdGlvblwiOiA4LCBcImFuaW1hdGlvbkRlbGF5XCI6IDgsIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IDgsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogOCwgXCJhbmltYXRpb25EdXJhdGlvblwiOiA4LCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IDgsIFwiYW5pbWF0aW9uTmFtZVwiOiA4LCBcImFuaW1hdGlvblBsYXlTdGF0ZVwiOiA4LCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IDgsIFwiYXBwZWFyYW5jZVwiOiAxMCwgXCJ1c2VyU2VsZWN0XCI6IDEwLCBcImJhY2tkcm9wRmlsdGVyXCI6IDEwLCBcImZvbnRLZXJuaW5nXCI6IDksIFwic2Nyb2xsU25hcFR5cGVcIjogMTAsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogMTAsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogMTAsIFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6IDEwLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IDEwLCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IDcsIFwidGV4dEVtcGhhc2lzXCI6IDcsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogNywgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiA3LCBcImJveERlY29yYXRpb25CcmVha1wiOiAxMCwgXCJjbGlwUGF0aFwiOiAxMCwgXCJtYXNrSW1hZ2VcIjogMTAsIFwibWFza01vZGVcIjogMTAsIFwibWFza1JlcGVhdFwiOiAxMCwgXCJtYXNrUG9zaXRpb25cIjogMTAsIFwibWFza0NsaXBcIjogMTAsIFwibWFza09yaWdpblwiOiAxMCwgXCJtYXNrU2l6ZVwiOiAxMCwgXCJtYXNrQ29tcG9zaXRlXCI6IDEwLCBcIm1hc2tcIjogMTAsIFwibWFza0JvcmRlclNvdXJjZVwiOiAxMCwgXCJtYXNrQm9yZGVyTW9kZVwiOiAxMCwgXCJtYXNrQm9yZGVyU2xpY2VcIjogMTAsIFwibWFza0JvcmRlcldpZHRoXCI6IDEwLCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogMTAsIFwibWFza0JvcmRlclJlcGVhdFwiOiAxMCwgXCJtYXNrQm9yZGVyXCI6IDEwLCBcIm1hc2tUeXBlXCI6IDEwLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogMTAsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IDEwLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiAxMCwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IDEwLCBcInNoYXBlSW1hZ2VUaHJlc2hvbGRcIjogMTAsIFwic2hhcGVJbWFnZU1hcmdpblwiOiAxMCwgXCJzaGFwZUltYWdlT3V0c2lkZVwiOiAxMCwgXCJmaWx0ZXJcIjogOSwgXCJoeXBoZW5zXCI6IDEwLCBcImZsb3dJbnRvXCI6IDEwLCBcImZsb3dGcm9tXCI6IDEwLCBcImJyZWFrQmVmb3JlXCI6IDgsIFwiYnJlYWtBZnRlclwiOiA4LCBcImJyZWFrSW5zaWRlXCI6IDgsIFwicmVnaW9uRnJhZ21lbnRcIjogMTAsIFwiY29sdW1uQ291bnRcIjogOCwgXCJjb2x1bW5GaWxsXCI6IDgsIFwiY29sdW1uR2FwXCI6IDgsIFwiY29sdW1uUnVsZVwiOiA4LCBcImNvbHVtblJ1bGVDb2xvclwiOiA4LCBcImNvbHVtblJ1bGVTdHlsZVwiOiA4LCBcImNvbHVtblJ1bGVXaWR0aFwiOiA4LCBcImNvbHVtbnNcIjogOCwgXCJjb2x1bW5TcGFuXCI6IDgsIFwiY29sdW1uV2lkdGhcIjogOCB9LCBcImZpcmVmb3hcIjogeyBcImFwcGVhcmFuY2VcIjogNTEsIFwidXNlclNlbGVjdFwiOiA1MSwgXCJib3hTaXppbmdcIjogMjgsIFwidGV4dEFsaWduTGFzdFwiOiA0OCwgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IDM1LCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiAzNSwgXCJ0ZXh0RGVjb3JhdGlvbkxpbmVcIjogMzUsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiAzNSwgXCJ0YWJTaXplXCI6IDUxLCBcImh5cGhlbnNcIjogNDIsIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiAzMywgXCJicmVha0FmdGVyXCI6IDUxLCBcImJyZWFrQmVmb3JlXCI6IDUxLCBcImJyZWFrSW5zaWRlXCI6IDUxLCBcImNvbHVtbkNvdW50XCI6IDUxLCBcImNvbHVtbkZpbGxcIjogNTEsIFwiY29sdW1uR2FwXCI6IDUxLCBcImNvbHVtblJ1bGVcIjogNTEsIFwiY29sdW1uUnVsZUNvbG9yXCI6IDUxLCBcImNvbHVtblJ1bGVTdHlsZVwiOiA1MSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogNTEsIFwiY29sdW1uc1wiOiA1MSwgXCJjb2x1bW5TcGFuXCI6IDUxLCBcImNvbHVtbldpZHRoXCI6IDUxIH0sIFwib3BlcmFcIjogeyBcImZsZXhcIjogMTYsIFwiZmxleEJhc2lzXCI6IDE2LCBcImZsZXhEaXJlY3Rpb25cIjogMTYsIFwiZmxleEdyb3dcIjogMTYsIFwiZmxleEZsb3dcIjogMTYsIFwiZmxleFNocmlua1wiOiAxNiwgXCJmbGV4V3JhcFwiOiAxNiwgXCJhbGlnbkNvbnRlbnRcIjogMTYsIFwiYWxpZ25JdGVtc1wiOiAxNiwgXCJhbGlnblNlbGZcIjogMTYsIFwianVzdGlmeUNvbnRlbnRcIjogMTYsIFwib3JkZXJcIjogMTYsIFwidHJhbnNmb3JtXCI6IDIyLCBcInRyYW5zZm9ybU9yaWdpblwiOiAyMiwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IDIyLCBcInRyYW5zZm9ybU9yaWdpbllcIjogMjIsIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IDIyLCBcInBlcnNwZWN0aXZlXCI6IDIyLCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IDIyLCBcInRyYW5zZm9ybVN0eWxlXCI6IDIyLCBcInRyYW5zZm9ybU9yaWdpblpcIjogMjIsIFwiYW5pbWF0aW9uXCI6IDI5LCBcImFuaW1hdGlvbkRlbGF5XCI6IDI5LCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiAyOSwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiAyOSwgXCJhbmltYXRpb25EdXJhdGlvblwiOiAyOSwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiAyOSwgXCJhbmltYXRpb25OYW1lXCI6IDI5LCBcImFuaW1hdGlvblBsYXlTdGF0ZVwiOiAyOSwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiAyOSwgXCJhcHBlYXJhbmNlXCI6IDQxLCBcInVzZXJTZWxlY3RcIjogNDEsIFwiZm9udEtlcm5pbmdcIjogMTksIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogNDEsIFwidGV4dEVtcGhhc2lzXCI6IDQxLCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IDQxLCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IDQxLCBcImJveERlY29yYXRpb25CcmVha1wiOiA0MSwgXCJjbGlwUGF0aFwiOiA0MSwgXCJtYXNrSW1hZ2VcIjogNDEsIFwibWFza01vZGVcIjogNDEsIFwibWFza1JlcGVhdFwiOiA0MSwgXCJtYXNrUG9zaXRpb25cIjogNDEsIFwibWFza0NsaXBcIjogNDEsIFwibWFza09yaWdpblwiOiA0MSwgXCJtYXNrU2l6ZVwiOiA0MSwgXCJtYXNrQ29tcG9zaXRlXCI6IDQxLCBcIm1hc2tcIjogNDEsIFwibWFza0JvcmRlclNvdXJjZVwiOiA0MSwgXCJtYXNrQm9yZGVyTW9kZVwiOiA0MSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogNDEsIFwibWFza0JvcmRlcldpZHRoXCI6IDQxLCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogNDEsIFwibWFza0JvcmRlclJlcGVhdFwiOiA0MSwgXCJtYXNrQm9yZGVyXCI6IDQxLCBcIm1hc2tUeXBlXCI6IDQxLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogNDEsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IDQxLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiA0MSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IDQxLCBcImZpbHRlclwiOiAzOSwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IDM0LCBcImJyZWFrQWZ0ZXJcIjogMzYsIFwiYnJlYWtCZWZvcmVcIjogMzYsIFwiYnJlYWtJbnNpZGVcIjogMzYsIFwiY29sdW1uQ291bnRcIjogMzYsIFwiY29sdW1uRmlsbFwiOiAzNiwgXCJjb2x1bW5HYXBcIjogMzYsIFwiY29sdW1uUnVsZVwiOiAzNiwgXCJjb2x1bW5SdWxlQ29sb3JcIjogMzYsIFwiY29sdW1uUnVsZVN0eWxlXCI6IDM2LCBcImNvbHVtblJ1bGVXaWR0aFwiOiAzNiwgXCJjb2x1bW5zXCI6IDM2LCBcImNvbHVtblNwYW5cIjogMzYsIFwiY29sdW1uV2lkdGhcIjogMzYgfSwgXCJpZVwiOiB7IFwiZmxleFwiOiAxMCwgXCJmbGV4RGlyZWN0aW9uXCI6IDEwLCBcImZsZXhGbG93XCI6IDEwLCBcImZsZXhXcmFwXCI6IDEwLCBcInRyYW5zZm9ybVwiOiA5LCBcInRyYW5zZm9ybU9yaWdpblwiOiA5LCBcInRyYW5zZm9ybU9yaWdpblhcIjogOSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IDksIFwidXNlclNlbGVjdFwiOiAxMSwgXCJ3cmFwRmxvd1wiOiAxMSwgXCJ3cmFwVGhyb3VnaFwiOiAxMSwgXCJ3cmFwTWFyZ2luXCI6IDExLCBcInNjcm9sbFNuYXBUeXBlXCI6IDExLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IDExLCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IDExLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiAxMSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiAxMSwgXCJ0b3VjaEFjdGlvblwiOiAxMCwgXCJoeXBoZW5zXCI6IDExLCBcImZsb3dJbnRvXCI6IDExLCBcImZsb3dGcm9tXCI6IDExLCBcImJyZWFrQmVmb3JlXCI6IDExLCBcImJyZWFrQWZ0ZXJcIjogMTEsIFwiYnJlYWtJbnNpZGVcIjogMTEsIFwicmVnaW9uRnJhZ21lbnRcIjogMTEsIFwiZ3JpZFRlbXBsYXRlQ29sdW1uc1wiOiAxMSwgXCJncmlkVGVtcGxhdGVSb3dzXCI6IDExLCBcImdyaWRUZW1wbGF0ZUFyZWFzXCI6IDExLCBcImdyaWRUZW1wbGF0ZVwiOiAxMSwgXCJncmlkQXV0b0NvbHVtbnNcIjogMTEsIFwiZ3JpZEF1dG9Sb3dzXCI6IDExLCBcImdyaWRBdXRvRmxvd1wiOiAxMSwgXCJncmlkXCI6IDExLCBcImdyaWRSb3dTdGFydFwiOiAxMSwgXCJncmlkQ29sdW1uU3RhcnRcIjogMTEsIFwiZ3JpZFJvd0VuZFwiOiAxMSwgXCJncmlkUm93XCI6IDExLCBcImdyaWRDb2x1bW5cIjogMTEsIFwiZ3JpZENvbHVtbkVuZFwiOiAxMSwgXCJncmlkQ29sdW1uR2FwXCI6IDExLCBcImdyaWRSb3dHYXBcIjogMTEsIFwiZ3JpZEFyZWFcIjogMTEsIFwiZ3JpZEdhcFwiOiAxMSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiAxMSB9LCBcImVkZ2VcIjogeyBcInVzZXJTZWxlY3RcIjogMTQsIFwid3JhcEZsb3dcIjogMTQsIFwid3JhcFRocm91Z2hcIjogMTQsIFwid3JhcE1hcmdpblwiOiAxNCwgXCJzY3JvbGxTbmFwVHlwZVwiOiAxNCwgXCJzY3JvbGxTbmFwUG9pbnRzWFwiOiAxNCwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiAxNCwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogMTQsIFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIjogMTQsIFwiaHlwaGVuc1wiOiAxNCwgXCJmbG93SW50b1wiOiAxNCwgXCJmbG93RnJvbVwiOiAxNCwgXCJicmVha0JlZm9yZVwiOiAxNCwgXCJicmVha0FmdGVyXCI6IDE0LCBcImJyZWFrSW5zaWRlXCI6IDE0LCBcInJlZ2lvbkZyYWdtZW50XCI6IDE0LCBcImdyaWRUZW1wbGF0ZUNvbHVtbnNcIjogMTQsIFwiZ3JpZFRlbXBsYXRlUm93c1wiOiAxNCwgXCJncmlkVGVtcGxhdGVBcmVhc1wiOiAxNCwgXCJncmlkVGVtcGxhdGVcIjogMTQsIFwiZ3JpZEF1dG9Db2x1bW5zXCI6IDE0LCBcImdyaWRBdXRvUm93c1wiOiAxNCwgXCJncmlkQXV0b0Zsb3dcIjogMTQsIFwiZ3JpZFwiOiAxNCwgXCJncmlkUm93U3RhcnRcIjogMTQsIFwiZ3JpZENvbHVtblN0YXJ0XCI6IDE0LCBcImdyaWRSb3dFbmRcIjogMTQsIFwiZ3JpZFJvd1wiOiAxNCwgXCJncmlkQ29sdW1uXCI6IDE0LCBcImdyaWRDb2x1bW5FbmRcIjogMTQsIFwiZ3JpZENvbHVtbkdhcFwiOiAxNCwgXCJncmlkUm93R2FwXCI6IDE0LCBcImdyaWRBcmVhXCI6IDE0LCBcImdyaWRHYXBcIjogMTQgfSwgXCJpb3Nfc2FmXCI6IHsgXCJmbGV4XCI6IDguMSwgXCJmbGV4QmFzaXNcIjogOC4xLCBcImZsZXhEaXJlY3Rpb25cIjogOC4xLCBcImZsZXhHcm93XCI6IDguMSwgXCJmbGV4Rmxvd1wiOiA4LjEsIFwiZmxleFNocmlua1wiOiA4LjEsIFwiZmxleFdyYXBcIjogOC4xLCBcImFsaWduQ29udGVudFwiOiA4LjEsIFwiYWxpZ25JdGVtc1wiOiA4LjEsIFwiYWxpZ25TZWxmXCI6IDguMSwgXCJqdXN0aWZ5Q29udGVudFwiOiA4LjEsIFwib3JkZXJcIjogOC4xLCBcInRyYW5zaXRpb25cIjogNiwgXCJ0cmFuc2l0aW9uRGVsYXlcIjogNiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogNiwgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogNiwgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogNiwgXCJ0cmFuc2Zvcm1cIjogOC4xLCBcInRyYW5zZm9ybU9yaWdpblwiOiA4LjEsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiA4LjEsIFwidHJhbnNmb3JtT3JpZ2luWVwiOiA4LjEsIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IDguMSwgXCJwZXJzcGVjdGl2ZVwiOiA4LjEsIFwicGVyc3BlY3RpdmVPcmlnaW5cIjogOC4xLCBcInRyYW5zZm9ybVN0eWxlXCI6IDguMSwgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IDguMSwgXCJhbmltYXRpb25cIjogOC4xLCBcImFuaW1hdGlvbkRlbGF5XCI6IDguMSwgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogOC4xLCBcImFuaW1hdGlvbkZpbGxNb2RlXCI6IDguMSwgXCJhbmltYXRpb25EdXJhdGlvblwiOiA4LjEsIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogOC4xLCBcImFuaW1hdGlvbk5hbWVcIjogOC4xLCBcImFuaW1hdGlvblBsYXlTdGF0ZVwiOiA4LjEsIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogOC4xLCBcImFwcGVhcmFuY2VcIjogOS4zLCBcInVzZXJTZWxlY3RcIjogOS4zLCBcImJhY2tkcm9wRmlsdGVyXCI6IDkuMywgXCJmb250S2VybmluZ1wiOiA5LjMsIFwic2Nyb2xsU25hcFR5cGVcIjogOS4zLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IDkuMywgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiA5LjMsIFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6IDkuMywgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiA5LjMsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IDkuMywgXCJjbGlwUGF0aFwiOiA5LjMsIFwibWFza0ltYWdlXCI6IDkuMywgXCJtYXNrTW9kZVwiOiA5LjMsIFwibWFza1JlcGVhdFwiOiA5LjMsIFwibWFza1Bvc2l0aW9uXCI6IDkuMywgXCJtYXNrQ2xpcFwiOiA5LjMsIFwibWFza09yaWdpblwiOiA5LjMsIFwibWFza1NpemVcIjogOS4zLCBcIm1hc2tDb21wb3NpdGVcIjogOS4zLCBcIm1hc2tcIjogOS4zLCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogOS4zLCBcIm1hc2tCb3JkZXJNb2RlXCI6IDkuMywgXCJtYXNrQm9yZGVyU2xpY2VcIjogOS4zLCBcIm1hc2tCb3JkZXJXaWR0aFwiOiA5LjMsIFwibWFza0JvcmRlck91dHNldFwiOiA5LjMsIFwibWFza0JvcmRlclJlcGVhdFwiOiA5LjMsIFwibWFza0JvcmRlclwiOiA5LjMsIFwibWFza1R5cGVcIjogOS4zLCBcInRleHRTaXplQWRqdXN0XCI6IDkuMywgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IDkuMywgXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjogOS4zLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiA5LjMsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiA5LjMsIFwic2hhcGVJbWFnZVRocmVzaG9sZFwiOiA5LjMsIFwic2hhcGVJbWFnZU1hcmdpblwiOiA5LjMsIFwic2hhcGVJbWFnZU91dHNpZGVcIjogOS4zLCBcImZpbHRlclwiOiA5LCBcImh5cGhlbnNcIjogOS4zLCBcImZsb3dJbnRvXCI6IDkuMywgXCJmbG93RnJvbVwiOiA5LjMsIFwiYnJlYWtCZWZvcmVcIjogOC4xLCBcImJyZWFrQWZ0ZXJcIjogOC4xLCBcImJyZWFrSW5zaWRlXCI6IDguMSwgXCJyZWdpb25GcmFnbWVudFwiOiA5LjMsIFwiY29sdW1uQ291bnRcIjogOC4xLCBcImNvbHVtbkZpbGxcIjogOC4xLCBcImNvbHVtbkdhcFwiOiA4LjEsIFwiY29sdW1uUnVsZVwiOiA4LjEsIFwiY29sdW1uUnVsZUNvbG9yXCI6IDguMSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogOC4xLCBcImNvbHVtblJ1bGVXaWR0aFwiOiA4LjEsIFwiY29sdW1uc1wiOiA4LjEsIFwiY29sdW1uU3BhblwiOiA4LjEsIFwiY29sdW1uV2lkdGhcIjogOC4xIH0sIFwiYW5kcm9pZFwiOiB7IFwiZmxleFwiOiA0LjIsIFwiZmxleEJhc2lzXCI6IDQuMiwgXCJmbGV4RGlyZWN0aW9uXCI6IDQuMiwgXCJmbGV4R3Jvd1wiOiA0LjIsIFwiZmxleEZsb3dcIjogNC4yLCBcImZsZXhTaHJpbmtcIjogNC4yLCBcImZsZXhXcmFwXCI6IDQuMiwgXCJhbGlnbkNvbnRlbnRcIjogNC4yLCBcImFsaWduSXRlbXNcIjogNC4yLCBcImFsaWduU2VsZlwiOiA0LjIsIFwianVzdGlmeUNvbnRlbnRcIjogNC4yLCBcIm9yZGVyXCI6IDQuMiwgXCJ0cmFuc2l0aW9uXCI6IDQuMiwgXCJ0cmFuc2l0aW9uRGVsYXlcIjogNC4yLCBcInRyYW5zaXRpb25EdXJhdGlvblwiOiA0LjIsIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IDQuMiwgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogNC4yLCBcInRyYW5zZm9ybVwiOiA0LjQsIFwidHJhbnNmb3JtT3JpZ2luXCI6IDQuNCwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IDQuNCwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IDQuNCwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogNC40LCBcInBlcnNwZWN0aXZlXCI6IDQuNCwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiA0LjQsIFwidHJhbnNmb3JtU3R5bGVcIjogNC40LCBcInRyYW5zZm9ybU9yaWdpblpcIjogNC40LCBcImFuaW1hdGlvblwiOiA0LjQsIFwiYW5pbWF0aW9uRGVsYXlcIjogNC40LCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiA0LjQsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogNC40LCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDQuNCwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiA0LjQsIFwiYW5pbWF0aW9uTmFtZVwiOiA0LjQsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IDQuNCwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiA0LjQsIFwiYXBwZWFyYW5jZVwiOiA1MSwgXCJ1c2VyU2VsZWN0XCI6IDUxLCBcImZvbnRLZXJuaW5nXCI6IDQuNCwgXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOiA1MSwgXCJ0ZXh0RW1waGFzaXNcIjogNTEsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogNTEsIFwidGV4dEVtcGhhc2lzQ29sb3JcIjogNTEsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IDUxLCBcImNsaXBQYXRoXCI6IDUxLCBcIm1hc2tJbWFnZVwiOiA1MSwgXCJtYXNrTW9kZVwiOiA1MSwgXCJtYXNrUmVwZWF0XCI6IDUxLCBcIm1hc2tQb3NpdGlvblwiOiA1MSwgXCJtYXNrQ2xpcFwiOiA1MSwgXCJtYXNrT3JpZ2luXCI6IDUxLCBcIm1hc2tTaXplXCI6IDUxLCBcIm1hc2tDb21wb3NpdGVcIjogNTEsIFwibWFza1wiOiA1MSwgXCJtYXNrQm9yZGVyU291cmNlXCI6IDUxLCBcIm1hc2tCb3JkZXJNb2RlXCI6IDUxLCBcIm1hc2tCb3JkZXJTbGljZVwiOiA1MSwgXCJtYXNrQm9yZGVyV2lkdGhcIjogNTEsIFwibWFza0JvcmRlck91dHNldFwiOiA1MSwgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IDUxLCBcIm1hc2tCb3JkZXJcIjogNTEsIFwibWFza1R5cGVcIjogNTEsIFwiZmlsdGVyXCI6IDUxLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogNC40LCBcImJyZWFrQWZ0ZXJcIjogNTEsIFwiYnJlYWtCZWZvcmVcIjogNTEsIFwiYnJlYWtJbnNpZGVcIjogNTEsIFwiY29sdW1uQ291bnRcIjogNTEsIFwiY29sdW1uRmlsbFwiOiA1MSwgXCJjb2x1bW5HYXBcIjogNTEsIFwiY29sdW1uUnVsZVwiOiA1MSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogNTEsIFwiY29sdW1uUnVsZVN0eWxlXCI6IDUxLCBcImNvbHVtblJ1bGVXaWR0aFwiOiA1MSwgXCJjb2x1bW5zXCI6IDUxLCBcImNvbHVtblNwYW5cIjogNTEsIFwiY29sdW1uV2lkdGhcIjogNTEgfSwgXCJhbmRfY2hyXCI6IHsgXCJhcHBlYXJhbmNlXCI6IDUxLCBcInVzZXJTZWxlY3RcIjogNTEsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogNTEsIFwidGV4dEVtcGhhc2lzXCI6IDUxLCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IDUxLCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IDUxLCBcImJveERlY29yYXRpb25CcmVha1wiOiA1MSwgXCJjbGlwUGF0aFwiOiA1MSwgXCJtYXNrSW1hZ2VcIjogNTEsIFwibWFza01vZGVcIjogNTEsIFwibWFza1JlcGVhdFwiOiA1MSwgXCJtYXNrUG9zaXRpb25cIjogNTEsIFwibWFza0NsaXBcIjogNTEsIFwibWFza09yaWdpblwiOiA1MSwgXCJtYXNrU2l6ZVwiOiA1MSwgXCJtYXNrQ29tcG9zaXRlXCI6IDUxLCBcIm1hc2tcIjogNTEsIFwibWFza0JvcmRlclNvdXJjZVwiOiA1MSwgXCJtYXNrQm9yZGVyTW9kZVwiOiA1MSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogNTEsIFwibWFza0JvcmRlcldpZHRoXCI6IDUxLCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogNTEsIFwibWFza0JvcmRlclJlcGVhdFwiOiA1MSwgXCJtYXNrQm9yZGVyXCI6IDUxLCBcIm1hc2tUeXBlXCI6IDUxLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogNTEsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IDUxLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiA1MSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IDUxLCBcImZpbHRlclwiOiA1MSB9LCBcImFuZF91Y1wiOiB7IFwiZmxleFwiOiA5LjksIFwiZmxleEJhc2lzXCI6IDkuOSwgXCJmbGV4RGlyZWN0aW9uXCI6IDkuOSwgXCJmbGV4R3Jvd1wiOiA5LjksIFwiZmxleEZsb3dcIjogOS45LCBcImZsZXhTaHJpbmtcIjogOS45LCBcImZsZXhXcmFwXCI6IDkuOSwgXCJhbGlnbkNvbnRlbnRcIjogOS45LCBcImFsaWduSXRlbXNcIjogOS45LCBcImFsaWduU2VsZlwiOiA5LjksIFwianVzdGlmeUNvbnRlbnRcIjogOS45LCBcIm9yZGVyXCI6IDkuOSwgXCJ0cmFuc2l0aW9uXCI6IDkuOSwgXCJ0cmFuc2l0aW9uRGVsYXlcIjogOS45LCBcInRyYW5zaXRpb25EdXJhdGlvblwiOiA5LjksIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IDkuOSwgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogOS45LCBcInRyYW5zZm9ybVwiOiA5LjksIFwidHJhbnNmb3JtT3JpZ2luXCI6IDkuOSwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IDkuOSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IDkuOSwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogOS45LCBcInBlcnNwZWN0aXZlXCI6IDkuOSwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiA5LjksIFwidHJhbnNmb3JtU3R5bGVcIjogOS45LCBcInRyYW5zZm9ybU9yaWdpblpcIjogOS45LCBcImFuaW1hdGlvblwiOiA5LjksIFwiYW5pbWF0aW9uRGVsYXlcIjogOS45LCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiA5LjksIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogOS45LCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDkuOSwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiA5LjksIFwiYW5pbWF0aW9uTmFtZVwiOiA5LjksIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IDkuOSwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiA5LjksIFwiYXBwZWFyYW5jZVwiOiA5LjksIFwidXNlclNlbGVjdFwiOiA5LjksIFwiZm9udEtlcm5pbmdcIjogOS45LCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IDkuOSwgXCJ0ZXh0RW1waGFzaXNcIjogOS45LCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IDkuOSwgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiA5LjksIFwibWFza0ltYWdlXCI6IDkuOSwgXCJtYXNrTW9kZVwiOiA5LjksIFwibWFza1JlcGVhdFwiOiA5LjksIFwibWFza1Bvc2l0aW9uXCI6IDkuOSwgXCJtYXNrQ2xpcFwiOiA5LjksIFwibWFza09yaWdpblwiOiA5LjksIFwibWFza1NpemVcIjogOS45LCBcIm1hc2tDb21wb3NpdGVcIjogOS45LCBcIm1hc2tcIjogOS45LCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogOS45LCBcIm1hc2tCb3JkZXJNb2RlXCI6IDkuOSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogOS45LCBcIm1hc2tCb3JkZXJXaWR0aFwiOiA5LjksIFwibWFza0JvcmRlck91dHNldFwiOiA5LjksIFwibWFza0JvcmRlclJlcGVhdFwiOiA5LjksIFwibWFza0JvcmRlclwiOiA5LjksIFwibWFza1R5cGVcIjogOS45LCBcInRleHRTaXplQWRqdXN0XCI6IDkuOSwgXCJmaWx0ZXJcIjogOS45LCBcImh5cGhlbnNcIjogOS45LCBcImZsb3dJbnRvXCI6IDkuOSwgXCJmbG93RnJvbVwiOiA5LjksIFwiYnJlYWtCZWZvcmVcIjogOS45LCBcImJyZWFrQWZ0ZXJcIjogOS45LCBcImJyZWFrSW5zaWRlXCI6IDkuOSwgXCJyZWdpb25GcmFnbWVudFwiOiA5LjksIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiA5LjksIFwiY29sdW1uQ291bnRcIjogOS45LCBcImNvbHVtbkZpbGxcIjogOS45LCBcImNvbHVtbkdhcFwiOiA5LjksIFwiY29sdW1uUnVsZVwiOiA5LjksIFwiY29sdW1uUnVsZUNvbG9yXCI6IDkuOSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogOS45LCBcImNvbHVtblJ1bGVXaWR0aFwiOiA5LjksIFwiY29sdW1uc1wiOiA5LjksIFwiY29sdW1uU3BhblwiOiA5LjksIFwiY29sdW1uV2lkdGhcIjogOS45IH0sIFwib3BfbWluaVwiOiB7fSB9O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYWxjO1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvam9pblByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9qb2luUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qb2luUHJlZml4ZWRWYWx1ZSk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNhbGMocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlLmluZGV4T2YoJ2NhbGMoJykgPiAtMSkge1xuICAgIHJldHVybiAoMCwgX2pvaW5QcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShwcm9wZXJ0eSwgdmFsdWUsIGZ1bmN0aW9uIChwcmVmaXgsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvY2FsY1xcKC9nLCBwcmVmaXggKyAnY2FsYygnKTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3Vyc29yO1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvam9pblByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9qb2luUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qb2luUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2YWx1ZXMgPSB7XG4gICd6b29tLWluJzogdHJ1ZSxcbiAgJ3pvb20tb3V0JzogdHJ1ZSxcbiAgZ3JhYjogdHJ1ZSxcbiAgZ3JhYmJpbmc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGN1cnNvcihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiB2YWx1ZXNbdmFsdWVdKSB7XG4gICAgcmV0dXJuICgwLCBfam9pblByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHByb3BlcnR5LCB2YWx1ZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZsZXg7XG52YXIgdmFsdWVzID0geyBmbGV4OiB0cnVlLCAnaW5saW5lLWZsZXgnOiB0cnVlIH07XG5cbmZ1bmN0aW9uIGZsZXgocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHZhbHVlc1t2YWx1ZV0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzcGxheTogWyctd2Via2l0LWJveCcsICctbW96LWJveCcsICctbXMtJyArIHZhbHVlICsgJ2JveCcsICctd2Via2l0LScgKyB2YWx1ZSwgdmFsdWVdXG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleGJveElFO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnZGlzdHJpYnV0ZScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnXG59O1xudmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gIGFsaWduQ29udGVudDogJ21zRmxleExpbmVQYWNrJyxcbiAgYWxpZ25TZWxmOiAnbXNGbGV4SXRlbUFsaWduJyxcbiAgYWxpZ25JdGVtczogJ21zRmxleEFsaWduJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdtc0ZsZXhQYWNrJyxcbiAgb3JkZXI6ICdtc0ZsZXhPcmRlcicsXG4gIGZsZXhHcm93OiAnbXNGbGV4UG9zaXRpdmUnLFxuICBmbGV4U2hyaW5rOiAnbXNGbGV4TmVnYXRpdmUnLFxuICBmbGV4QmFzaXM6ICdtc1ByZWZlcnJlZFNpemUnXG59O1xuXG5mdW5jdGlvbiBmbGV4Ym94SUUocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSkge1xuICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWUpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94T2xkO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnanVzdGlmeScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnLFxuICAnd3JhcC1yZXZlcnNlJzogJ211bHRpcGxlJyxcbiAgd3JhcDogJ211bHRpcGxlJ1xufTtcblxudmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gIGFsaWduSXRlbXM6ICdXZWJraXRCb3hBbGlnbicsXG4gIGp1c3RpZnlDb250ZW50OiAnV2Via2l0Qm94UGFjaycsXG4gIGZsZXhXcmFwOiAnV2Via2l0Qm94TGluZXMnXG59O1xuXG5mdW5jdGlvbiBmbGV4Ym94T2xkKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFdlYmtpdEJveE9yaWVudDogdmFsdWUuaW5kZXhPZignY29sdW1uJykgPiAtMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcsXG4gICAgICBXZWJraXRCb3hEaXJlY3Rpb246IHZhbHVlLmluZGV4T2YoJ3JldmVyc2UnKSA+IC0xID8gJ3JldmVyc2UnIDogJ25vcm1hbCdcbiAgICB9O1xuICB9XG4gIGlmIChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSkge1xuICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWUpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBncmFkaWVudDtcblxudmFyIF9qb2luUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2pvaW5QcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfam9pblByZWZpeGVkVmFsdWUpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdmFsdWVzID0gL2xpbmVhci1ncmFkaWVudHxyYWRpYWwtZ3JhZGllbnR8cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudHxyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50LztcblxuZnVuY3Rpb24gZ3JhZGllbnQocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlLm1hdGNoKHZhbHVlcykgIT09IG51bGwpIHtcbiAgICByZXR1cm4gKDAsIF9qb2luUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkocHJvcGVydHksIHZhbHVlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcG9zaXRpb247XG5mdW5jdGlvbiBwb3NpdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAncG9zaXRpb24nICYmIHZhbHVlID09PSAnc3RpY2t5Jykge1xuICAgIHJldHVybiB7IHBvc2l0aW9uOiBbJy13ZWJraXQtc3RpY2t5JywgJ3N0aWNreSddIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNpemluZztcblxudmFyIF9qb2luUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2pvaW5QcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfam9pblByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcGVydGllcyA9IHtcbiAgbWF4SGVpZ2h0OiB0cnVlLFxuICBtYXhXaWR0aDogdHJ1ZSxcbiAgd2lkdGg6IHRydWUsXG4gIGhlaWdodDogdHJ1ZSxcbiAgY29sdW1uV2lkdGg6IHRydWUsXG4gIG1pbldpZHRoOiB0cnVlLFxuICBtaW5IZWlnaHQ6IHRydWVcbn07XG52YXIgdmFsdWVzID0ge1xuICAnbWluLWNvbnRlbnQnOiB0cnVlLFxuICAnbWF4LWNvbnRlbnQnOiB0cnVlLFxuICAnZmlsbC1hdmFpbGFibGUnOiB0cnVlLFxuICAnZml0LWNvbnRlbnQnOiB0cnVlLFxuICAnY29udGFpbi1mbG9hdHMnOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBzaXppbmcocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0aWVzW3Byb3BlcnR5XSAmJiB2YWx1ZXNbdmFsdWVdKSB7XG4gICAgcmV0dXJuICgwLCBfam9pblByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHByb3BlcnR5LCB2YWx1ZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zaXRpb247XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lID0gcmVxdWlyZSgnaHlwaGVuYXRlLXN0eWxlLW5hbWUnKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHlwaGVuYXRlU3R5bGVOYW1lKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvY2FwaXRhbGl6ZVN0cmluZycpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FwaXRhbGl6ZVN0cmluZyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbnZhciBfcHJlZml4UHJvcHMgPSByZXF1aXJlKCcuLi9wcmVmaXhQcm9wcycpO1xuXG52YXIgX3ByZWZpeFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIHRyYW5zaXRpb246IHRydWUsXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZSxcbiAgV2Via2l0VHJhbnNpdGlvbjogdHJ1ZSxcbiAgV2Via2l0VHJhbnNpdGlvblByb3BlcnR5OiB0cnVlXG59O1xuXG5mdW5jdGlvbiB0cmFuc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSkge1xuICAvLyBhbHNvIGNoZWNrIGZvciBhbHJlYWR5IHByZWZpeGVkIHRyYW5zaXRpb25zXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHByb3BlcnRpZXNbcHJvcGVydHldKSB7XG4gICAgdmFyIF9yZWYyO1xuXG4gICAgdmFyIG91dHB1dFZhbHVlID0gcHJlZml4VmFsdWUodmFsdWUpO1xuICAgIHZhciB3ZWJraXRPdXRwdXQgPSBvdXRwdXRWYWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKS5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUubWF0Y2goLy1tb3otfC1tcy0vKSA9PT0gbnVsbDtcbiAgICB9KS5qb2luKCcsJyk7XG5cbiAgICAvLyBpZiB0aGUgcHJvcGVydHkgaXMgYWxyZWFkeSBwcmVmaXhlZFxuICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdXZWJraXQnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wZXJ0eSwgd2Via2l0T3V0cHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlZjIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCAnV2Via2l0JyArICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpLCB3ZWJraXRPdXRwdXQpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIHByb3BlcnR5LCBvdXRwdXRWYWx1ZSksIF9yZWYyO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZpeFZhbHVlKHZhbHVlKSB7XG4gIGlmICgoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLy8gb25seSBzcGxpdCBtdWx0aSB2YWx1ZXMsIG5vdCBjdWJpYyBiZXppZXJzXG4gIHZhciBtdWx0aXBsZVZhbHVlcyA9IHZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpO1xuXG4gIC8vIGl0ZXJhdGUgZWFjaCBzaW5nbGUgdmFsdWUgYW5kIGNoZWNrIGZvciB0cmFuc2l0aW9uZWQgcHJvcGVydGllc1xuICAvLyB0aGF0IG5lZWQgdG8gYmUgcHJlZml4ZWQgYXMgd2VsbFxuICBtdWx0aXBsZVZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgbXVsdGlwbGVWYWx1ZXNbaW5kZXhdID0gT2JqZWN0LmtleXMoX3ByZWZpeFByb3BzMi5kZWZhdWx0KS5yZWR1Y2UoZnVuY3Rpb24gKG91dCwgcHJlZml4KSB7XG4gICAgICB2YXIgZGFzaENhc2VQcmVmaXggPSAnLScgKyBwcmVmaXgudG9Mb3dlckNhc2UoKSArICctJztcblxuICAgICAgT2JqZWN0LmtleXMoX3ByZWZpeFByb3BzMi5kZWZhdWx0W3ByZWZpeF0pLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgdmFyIGRhc2hDYXNlUHJvcGVydHkgPSAoMCwgX2h5cGhlbmF0ZVN0eWxlTmFtZTIuZGVmYXVsdCkocHJvcCk7XG5cbiAgICAgICAgaWYgKHZhbC5pbmRleE9mKGRhc2hDYXNlUHJvcGVydHkpID4gLTEgJiYgZGFzaENhc2VQcm9wZXJ0eSAhPT0gJ29yZGVyJykge1xuICAgICAgICAgIC8vIGpvaW4gYWxsIHByZWZpeGVzIGFuZCBjcmVhdGUgYSBuZXcgdmFsdWVcbiAgICAgICAgICBvdXQgPSB2YWwucmVwbGFjZShkYXNoQ2FzZVByb3BlcnR5LCBkYXNoQ2FzZVByZWZpeCArIGRhc2hDYXNlUHJvcGVydHkpICsgJywnICsgb3V0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfSwgdmFsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG11bHRpcGxlVmFsdWVzLmpvaW4oJywnKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByZWZpeEFsbDtcblxudmFyIF9wcmVmaXhQcm9wcyA9IHJlcXVpcmUoJy4vcHJlZml4UHJvcHMnKTtcblxudmFyIF9wcmVmaXhQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhQcm9wcyk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG52YXIgX3NvcnRQcmVmaXhlZFN0eWxlID0gcmVxdWlyZSgnLi4vdXRpbHMvc29ydFByZWZpeGVkU3R5bGUnKTtcblxudmFyIF9zb3J0UHJlZml4ZWRTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zb3J0UHJlZml4ZWRTdHlsZSk7XG5cbnZhciBfcG9zaXRpb24gPSByZXF1aXJlKCcuL3BsdWdpbnMvcG9zaXRpb24nKTtcblxudmFyIF9wb3NpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NpdGlvbik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vcGx1Z2lucy9jYWxjJyk7XG5cbnZhciBfY2FsYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYWxjKTtcblxudmFyIF9jdXJzb3IgPSByZXF1aXJlKCcuL3BsdWdpbnMvY3Vyc29yJyk7XG5cbnZhciBfY3Vyc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N1cnNvcik7XG5cbnZhciBfZmxleCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Jyk7XG5cbnZhciBfZmxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGV4KTtcblxudmFyIF9zaXppbmcgPSByZXF1aXJlKCcuL3BsdWdpbnMvc2l6aW5nJyk7XG5cbnZhciBfc2l6aW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpemluZyk7XG5cbnZhciBfZ3JhZGllbnQgPSByZXF1aXJlKCcuL3BsdWdpbnMvZ3JhZGllbnQnKTtcblxudmFyIF9ncmFkaWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmFkaWVudCk7XG5cbnZhciBfdHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy90cmFuc2l0aW9uJyk7XG5cbnZhciBfdHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uKTtcblxudmFyIF9mbGV4Ym94SUUgPSByZXF1aXJlKCcuL3BsdWdpbnMvZmxleGJveElFJyk7XG5cbnZhciBfZmxleGJveElFMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXhib3hJRSk7XG5cbnZhciBfZmxleGJveE9sZCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Ym94T2xkJyk7XG5cbnZhciBfZmxleGJveE9sZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGV4Ym94T2xkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gc3BlY2lhbCBmbGV4Ym94IHNwZWNpZmljYXRpb25zXG5cblxudmFyIHBsdWdpbnMgPSBbX3Bvc2l0aW9uMi5kZWZhdWx0LCBfY2FsYzIuZGVmYXVsdCwgX2N1cnNvcjIuZGVmYXVsdCwgX3NpemluZzIuZGVmYXVsdCwgX2dyYWRpZW50Mi5kZWZhdWx0LCBfdHJhbnNpdGlvbjIuZGVmYXVsdCwgX2ZsZXhib3hJRTIuZGVmYXVsdCwgX2ZsZXhib3hPbGQyLmRlZmF1bHQsIF9mbGV4Mi5kZWZhdWx0XTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgcHJlZml4ZWQgdmVyc2lvbiBvZiB0aGUgc3R5bGUgb2JqZWN0IHVzaW5nIGFsbCB2ZW5kb3IgcHJlZml4ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBTdHlsZSBvYmplY3QgdGhhdCBnZXRzIHByZWZpeGVkIHByb3BlcnRpZXMgYWRkZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gU3R5bGUgb2JqZWN0IHdpdGggcHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIHByZWZpeEFsbChzdHlsZXMpIHtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlc1twcm9wZXJ0eV07XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgLy8gcmVjdXJzZSB0aHJvdWdoIG5lc3RlZCBzdHlsZSBvYmplY3RzXG4gICAgICBzdHlsZXNbcHJvcGVydHldID0gcHJlZml4QWxsKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXMoX3ByZWZpeFByb3BzMi5kZWZhdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBfcHJlZml4UHJvcHMyLmRlZmF1bHRbcHJlZml4XTtcbiAgICAgICAgLy8gYWRkIHByZWZpeGVzIGlmIG5lZWRlZFxuICAgICAgICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0pIHtcbiAgICAgICAgICBzdHlsZXNbcHJlZml4ICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgIFtdLmNvbmNhdChzdHlsZXNbcHJvcGVydHldKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIC8vIHJlc29sdmUgZXZlcnkgc3BlY2lhbCBwbHVnaW5zXG4gICAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gYXNzaWduU3R5bGVzKHN0eWxlcywgcGx1Z2luKHByb3BlcnR5LCB2YWx1ZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiAoMCwgX3NvcnRQcmVmaXhlZFN0eWxlMi5kZWZhdWx0KShzdHlsZXMpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25TdHlsZXMoYmFzZSkge1xuICB2YXIgZXh0ZW5kID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgT2JqZWN0LmtleXMoZXh0ZW5kKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgIHZhciBiYXNlVmFsdWUgPSBiYXNlW3Byb3BlcnR5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiYXNlVmFsdWUpKSB7XG4gICAgICBbXS5jb25jYXQoZXh0ZW5kW3Byb3BlcnR5XSkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlSW5kZXggPSBiYXNlVmFsdWUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICBiYXNlW3Byb3BlcnR5XS5zcGxpY2UodmFsdWVJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgYmFzZVtwcm9wZXJ0eV0ucHVzaCh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZVtwcm9wZXJ0eV0gPSBleHRlbmRbcHJvcGVydHldO1xuICAgIH1cbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHsgXCJXZWJraXRcIjogeyBcInRyYW5zZm9ybVwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblhcIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IHRydWUsIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IHRydWUsIFwicGVyc3BlY3RpdmVcIjogdHJ1ZSwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiB0cnVlLCBcInRyYW5zZm9ybVN0eWxlXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWlwiOiB0cnVlLCBcImFuaW1hdGlvblwiOiB0cnVlLCBcImFuaW1hdGlvbkRlbGF5XCI6IHRydWUsIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogdHJ1ZSwgXCJhbmltYXRpb25EdXJhdGlvblwiOiB0cnVlLCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IHRydWUsIFwiYW5pbWF0aW9uTmFtZVwiOiB0cnVlLCBcImFuaW1hdGlvblBsYXlTdGF0ZVwiOiB0cnVlLCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IHRydWUsIFwiYXBwZWFyYW5jZVwiOiB0cnVlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJmb250S2VybmluZ1wiOiB0cnVlLCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiB0cnVlLCBcImJveERlY29yYXRpb25CcmVha1wiOiB0cnVlLCBcImNsaXBQYXRoXCI6IHRydWUsIFwibWFza0ltYWdlXCI6IHRydWUsIFwibWFza01vZGVcIjogdHJ1ZSwgXCJtYXNrUmVwZWF0XCI6IHRydWUsIFwibWFza1Bvc2l0aW9uXCI6IHRydWUsIFwibWFza0NsaXBcIjogdHJ1ZSwgXCJtYXNrT3JpZ2luXCI6IHRydWUsIFwibWFza1NpemVcIjogdHJ1ZSwgXCJtYXNrQ29tcG9zaXRlXCI6IHRydWUsIFwibWFza1wiOiB0cnVlLCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyTW9kZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJTbGljZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJXaWR0aFwiOiB0cnVlLCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IHRydWUsIFwibWFza0JvcmRlclwiOiB0cnVlLCBcIm1hc2tUeXBlXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogdHJ1ZSwgXCJmaWx0ZXJcIjogdHJ1ZSwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IHRydWUsIFwiYnJlYWtBZnRlclwiOiB0cnVlLCBcImJyZWFrQmVmb3JlXCI6IHRydWUsIFwiYnJlYWtJbnNpZGVcIjogdHJ1ZSwgXCJjb2x1bW5Db3VudFwiOiB0cnVlLCBcImNvbHVtbkZpbGxcIjogdHJ1ZSwgXCJjb2x1bW5HYXBcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZUNvbG9yXCI6IHRydWUsIFwiY29sdW1uUnVsZVN0eWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZVdpZHRoXCI6IHRydWUsIFwiY29sdW1uc1wiOiB0cnVlLCBcImNvbHVtblNwYW5cIjogdHJ1ZSwgXCJjb2x1bW5XaWR0aFwiOiB0cnVlLCBcImZsZXhcIjogdHJ1ZSwgXCJmbGV4QmFzaXNcIjogdHJ1ZSwgXCJmbGV4RGlyZWN0aW9uXCI6IHRydWUsIFwiZmxleEdyb3dcIjogdHJ1ZSwgXCJmbGV4Rmxvd1wiOiB0cnVlLCBcImZsZXhTaHJpbmtcIjogdHJ1ZSwgXCJmbGV4V3JhcFwiOiB0cnVlLCBcImFsaWduQ29udGVudFwiOiB0cnVlLCBcImFsaWduSXRlbXNcIjogdHJ1ZSwgXCJhbGlnblNlbGZcIjogdHJ1ZSwgXCJqdXN0aWZ5Q29udGVudFwiOiB0cnVlLCBcIm9yZGVyXCI6IHRydWUsIFwidHJhbnNpdGlvblwiOiB0cnVlLCBcInRyYW5zaXRpb25EZWxheVwiOiB0cnVlLCBcInRyYW5zaXRpb25EdXJhdGlvblwiOiB0cnVlLCBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiB0cnVlLCBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiB0cnVlLCBcImJhY2tkcm9wRmlsdGVyXCI6IHRydWUsIFwic2Nyb2xsU25hcFR5cGVcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWFwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IHRydWUsIFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6IHRydWUsIFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIjogdHJ1ZSwgXCJzaGFwZUltYWdlVGhyZXNob2xkXCI6IHRydWUsIFwic2hhcGVJbWFnZU1hcmdpblwiOiB0cnVlLCBcInNoYXBlSW1hZ2VPdXRzaWRlXCI6IHRydWUsIFwiaHlwaGVuc1wiOiB0cnVlLCBcImZsb3dJbnRvXCI6IHRydWUsIFwiZmxvd0Zyb21cIjogdHJ1ZSwgXCJyZWdpb25GcmFnbWVudFwiOiB0cnVlLCBcInRleHRTaXplQWRqdXN0XCI6IHRydWUgfSwgXCJNb3pcIjogeyBcImFwcGVhcmFuY2VcIjogdHJ1ZSwgXCJ1c2VyU2VsZWN0XCI6IHRydWUsIFwiYm94U2l6aW5nXCI6IHRydWUsIFwidGV4dEFsaWduTGFzdFwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvbkxpbmVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IHRydWUsIFwidGFiU2l6ZVwiOiB0cnVlLCBcImh5cGhlbnNcIjogdHJ1ZSwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IHRydWUsIFwiYnJlYWtBZnRlclwiOiB0cnVlLCBcImJyZWFrQmVmb3JlXCI6IHRydWUsIFwiYnJlYWtJbnNpZGVcIjogdHJ1ZSwgXCJjb2x1bW5Db3VudFwiOiB0cnVlLCBcImNvbHVtbkZpbGxcIjogdHJ1ZSwgXCJjb2x1bW5HYXBcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZUNvbG9yXCI6IHRydWUsIFwiY29sdW1uUnVsZVN0eWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZVdpZHRoXCI6IHRydWUsIFwiY29sdW1uc1wiOiB0cnVlLCBcImNvbHVtblNwYW5cIjogdHJ1ZSwgXCJjb2x1bW5XaWR0aFwiOiB0cnVlIH0sIFwibXNcIjogeyBcImZsZXhcIjogdHJ1ZSwgXCJmbGV4QmFzaXNcIjogZmFsc2UsIFwiZmxleERpcmVjdGlvblwiOiB0cnVlLCBcImZsZXhHcm93XCI6IGZhbHNlLCBcImZsZXhGbG93XCI6IHRydWUsIFwiZmxleFNocmlua1wiOiBmYWxzZSwgXCJmbGV4V3JhcFwiOiB0cnVlLCBcImFsaWduQ29udGVudFwiOiBmYWxzZSwgXCJhbGlnbkl0ZW1zXCI6IGZhbHNlLCBcImFsaWduU2VsZlwiOiBmYWxzZSwgXCJqdXN0aWZ5Q29udGVudFwiOiBmYWxzZSwgXCJvcmRlclwiOiBmYWxzZSwgXCJ0cmFuc2Zvcm1cIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5cIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWVwiOiB0cnVlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJ3cmFwRmxvd1wiOiB0cnVlLCBcIndyYXBUaHJvdWdoXCI6IHRydWUsIFwid3JhcE1hcmdpblwiOiB0cnVlLCBcInNjcm9sbFNuYXBUeXBlXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiB0cnVlLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiB0cnVlLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IHRydWUsIFwidG91Y2hBY3Rpb25cIjogdHJ1ZSwgXCJoeXBoZW5zXCI6IHRydWUsIFwiZmxvd0ludG9cIjogdHJ1ZSwgXCJmbG93RnJvbVwiOiB0cnVlLCBcImJyZWFrQmVmb3JlXCI6IHRydWUsIFwiYnJlYWtBZnRlclwiOiB0cnVlLCBcImJyZWFrSW5zaWRlXCI6IHRydWUsIFwicmVnaW9uRnJhZ21lbnRcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVDb2x1bW5zXCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlUm93c1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZUFyZWFzXCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlXCI6IHRydWUsIFwiZ3JpZEF1dG9Db2x1bW5zXCI6IHRydWUsIFwiZ3JpZEF1dG9Sb3dzXCI6IHRydWUsIFwiZ3JpZEF1dG9GbG93XCI6IHRydWUsIFwiZ3JpZFwiOiB0cnVlLCBcImdyaWRSb3dTdGFydFwiOiB0cnVlLCBcImdyaWRDb2x1bW5TdGFydFwiOiB0cnVlLCBcImdyaWRSb3dFbmRcIjogdHJ1ZSwgXCJncmlkUm93XCI6IHRydWUsIFwiZ3JpZENvbHVtblwiOiB0cnVlLCBcImdyaWRDb2x1bW5FbmRcIjogdHJ1ZSwgXCJncmlkQ29sdW1uR2FwXCI6IHRydWUsIFwiZ3JpZFJvd0dhcFwiOiB0cnVlLCBcImdyaWRBcmVhXCI6IHRydWUsIFwiZ3JpZEdhcFwiOiB0cnVlLCBcInRleHRTaXplQWRqdXN0XCI6IHRydWUgfSB9O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIGhlbHBlciB0byBjYXBpdGFsaXplIHN0cmluZ3NcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYm93c2VyID0gcmVxdWlyZSgnYm93c2VyJyk7XG5cbnZhciBfYm93c2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jvd3Nlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2ZW5kb3JQcmVmaXhlcyA9IHtcbiAgV2Via2l0OiBbJ2Nocm9tZScsICdzYWZhcmknLCAnaW9zJywgJ2FuZHJvaWQnLCAncGhhbnRvbScsICdvcGVyYScsICd3ZWJvcycsICdibGFja2JlcnJ5JywgJ2JhZGEnLCAndGl6ZW4nLCAnY2hyb21pdW0nLCAndml2YWxkaSddLFxuICBNb3o6IFsnZmlyZWZveCcsICdzZWFtb25rZXknLCAnc2FpbGZpc2gnXSxcbiAgbXM6IFsnbXNpZScsICdtc2VkZ2UnXVxufTtcbnZhciBicm93c2VycyA9IHtcbiAgY2hyb21lOiBbWydjaHJvbWUnXSwgWydjaHJvbWl1bSddXSxcbiAgc2FmYXJpOiBbWydzYWZhcmknXV0sXG4gIGZpcmVmb3g6IFtbJ2ZpcmVmb3gnXV0sXG4gIGVkZ2U6IFtbJ21zZWRnZSddXSxcbiAgb3BlcmE6IFtbJ29wZXJhJ10sIFsndml2YWxkaSddXSxcbiAgaW9zX3NhZjogW1snaW9zJywgJ21vYmlsZSddLCBbJ2lvcycsICd0YWJsZXQnXV0sXG4gIGllOiBbWydtc2llJ11dLFxuICBvcF9taW5pOiBbWydvcGVyYScsICdtb2JpbGUnXSwgWydvcGVyYScsICd0YWJsZXQnXV0sXG4gIGFuZF91YzogW1snYW5kcm9pZCcsICdtb2JpbGUnXSwgWydhbmRyb2lkJywgJ3RhYmxldCddXSxcbiAgYW5kcm9pZDogW1snYW5kcm9pZCcsICdtb2JpbGUnXSwgWydhbmRyb2lkJywgJ3RhYmxldCddXVxufTtcblxudmFyIGJyb3dzZXJCeUluZm8gPSBmdW5jdGlvbiBicm93c2VyQnlJbmZvKGluZm8pIHtcbiAgaWYgKGluZm8uZmlyZWZveCkge1xuICAgIHJldHVybiAnZmlyZWZveCc7XG4gIH1cbiAgdmFyIG5hbWUgPSAnJztcblxuICBPYmplY3Qua2V5cyhicm93c2VycykuZm9yRWFjaChmdW5jdGlvbiAoYnJvd3Nlcikge1xuICAgIGJyb3dzZXJzW2Jyb3dzZXJdLmZvckVhY2goZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgICAgdmFyIG1hdGNoID0gMDtcbiAgICAgIGNvbmRpdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChzaW5nbGUpIHtcbiAgICAgICAgaWYgKGluZm9bc2luZ2xlXSkge1xuICAgICAgICAgIG1hdGNoICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGNvbmRpdGlvbi5sZW5ndGggPT09IG1hdGNoKSB7XG4gICAgICAgIG5hbWUgPSBicm93c2VyO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gbmFtZTtcbn07XG5cbi8qKlxuICogVXNlcyBib3dzZXIgdG8gZ2V0IGRlZmF1bHQgYnJvd3NlciBpbmZvcm1hdGlvbiBzdWNoIGFzIHZlcnNpb24gYW5kIG5hbWVcbiAqIEV2YWx1YXRlcyBib3dzZXIgaW5mbyBhbmQgYWRkcyB2ZW5kb3JQcmVmaXggaW5mb3JtYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWdlbnQgLSB1c2VyQWdlbnQgdGhhdCBnZXRzIGV2YWx1YXRlZFxuICovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh1c2VyQWdlbnQpIHtcbiAgaWYgKCF1c2VyQWdlbnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZm8gPSBfYm93c2VyMi5kZWZhdWx0Ll9kZXRlY3QodXNlckFnZW50KTtcblxuICBPYmplY3Qua2V5cyh2ZW5kb3JQcmVmaXhlcykuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgdmVuZG9yUHJlZml4ZXNbcHJlZml4XS5mb3JFYWNoKGZ1bmN0aW9uIChicm93c2VyKSB7XG4gICAgICBpZiAoaW5mb1ticm93c2VyXSkge1xuICAgICAgICBpbmZvLnByZWZpeCA9IHtcbiAgICAgICAgICBpbmxpbmU6IHByZWZpeCxcbiAgICAgICAgICBjc3M6ICctJyArIHByZWZpeC50b0xvd2VyQ2FzZSgpICsgJy0nXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGluZm8uYnJvd3NlciA9IGJyb3dzZXJCeUluZm8oaW5mbyk7XG5cbiAgLy8gRm9yIGNvcmRvdmEgSU9TIDggdGhlIHZlcnNpb24gaXMgbWlzc2luZywgc2V0IHRydW5jYXRlZCBvc3ZlcnNpb24gdG8gcHJldmVudCBOYU5cbiAgaW5mby52ZXJzaW9uID0gaW5mby52ZXJzaW9uID8gcGFyc2VGbG9hdChpbmZvLnZlcnNpb24pIDogcGFyc2VJbnQocGFyc2VGbG9hdChpbmZvLm9zdmVyc2lvbiksIDEwKTtcbiAgaW5mby5vc3ZlcnNpb24gPSBwYXJzZUZsb2F0KGluZm8ub3N2ZXJzaW9uKTtcblxuICAvLyBpT1MgZm9yY2VzIGFsbCBicm93c2VycyB0byB1c2UgU2FmYXJpIHVuZGVyIHRoZSBob29kXG4gIC8vIGFzIHRoZSBTYWZhcmkgdmVyc2lvbiBzZWVtcyB0byBtYXRjaCB0aGUgaU9TIHZlcnNpb25cbiAgLy8gd2UganVzdCBleHBsaWNpdGVseSB1c2UgdGhlIG9zdmVyc2lvbiBpbnN0ZWFkXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2ZyaXNjaG1hbm4vaW5saW5lLXN0eWxlLXByZWZpeGVyL2lzc3Vlcy83MlxuICBpZiAoaW5mby5icm93c2VyID09PSAnaW9zX3NhZicgJiYgaW5mby52ZXJzaW9uID4gaW5mby5vc3ZlcnNpb24pIHtcbiAgICBpbmZvLnZlcnNpb24gPSBpbmZvLm9zdmVyc2lvbjtcbiAgICBpbmZvLnNhZmFyaSA9IHRydWU7XG4gIH1cblxuICAvLyBzZXBlcmF0ZSBuYXRpdmUgYW5kcm9pZCBjaHJvbWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvZnJpc2NobWFubi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvaXNzdWVzLzQ1XG4gIGlmIChpbmZvLmJyb3dzZXIgPT09ICdhbmRyb2lkJyAmJiBpbmZvLmNocm9tZSAmJiBpbmZvLnZlcnNpb24gPiAzNykge1xuICAgIGluZm8uYnJvd3NlciA9ICdhbmRfY2hyJztcbiAgfVxuXG4gIC8vIEZvciBhbmRyb2lkIDwgNC40IHdlIHdhbnQgdG8gY2hlY2sgdGhlIG9zdmVyc2lvblxuICAvLyBub3QgdGhlIGNocm9tZSB2ZXJzaW9uLCBzZWUgaXNzdWUgIzI2XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2ZyaXNjaG1hbm4vaW5saW5lLXN0eWxlLXByZWZpeGVyL2lzc3Vlcy8yNlxuICBpZiAoaW5mby5icm93c2VyID09PSAnYW5kcm9pZCcgJiYgaW5mby5vc3ZlcnNpb24gPCA1KSB7XG4gICAgaW5mby52ZXJzaW9uID0gaW5mby5vc3ZlcnNpb247XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGJyb3dzZXIgPSBfcmVmLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gX3JlZi52ZXJzaW9uO1xuICB2YXIgcHJlZml4ID0gX3JlZi5wcmVmaXg7XG5cbiAgdmFyIHByZWZpeGVkS2V5ZnJhbWVzID0gJ2tleWZyYW1lcyc7XG5cbiAgaWYgKGJyb3dzZXIgPT09ICdjaHJvbWUnICYmIHZlcnNpb24gPCA0MyB8fCAoYnJvd3NlciA9PT0gJ3NhZmFyaScgfHwgYnJvd3NlciA9PT0gJ2lvc19zYWYnKSAmJiB2ZXJzaW9uIDwgOSB8fCBicm93c2VyID09PSAnb3BlcmEnICYmIHZlcnNpb24gPCAzMCB8fCBicm93c2VyID09PSAnYW5kcm9pZCcgJiYgdmVyc2lvbiA8PSA0LjQgfHwgYnJvd3NlciA9PT0gJ2FuZF91YycpIHtcbiAgICBwcmVmaXhlZEtleWZyYW1lcyA9IHByZWZpeC5jc3MgKyBwcmVmaXhlZEtleWZyYW1lcztcbiAgfVxuICByZXR1cm4gcHJlZml4ZWRLZXlmcmFtZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByZWZpeGVkVmFsdWUsIHZhbHVlLCBrZWVwVW5wcmVmaXhlZCkge1xuICByZXR1cm4ga2VlcFVucHJlZml4ZWQgPyBbcHJlZml4ZWRWYWx1ZSwgdmFsdWVdIDogcHJlZml4ZWRWYWx1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICByZXR1cm4gcHJvcGVydHkubWF0Y2goL14oV2Via2l0fE1venxPfG1zKS8pICE9PSBudWxsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gdmFsdWUuam9pbignLCcpO1xuXG4gIHJldHVybiB2YWx1ZS5tYXRjaCgvLXdlYmtpdC18LW1vei18LW1zLS8pICE9PSBudWxsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyByZXR1cm5zIGEgc3R5bGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgY29uY2F0ZWQgcHJlZml4ZWQgdmFsdWUgc3RyaW5nXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgdmFyIHJlcGxhY2VyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKHByZWZpeCwgdmFsdWUpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gIH0gOiBhcmd1bWVudHNbMl07XG4gIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBbJy13ZWJraXQtJywgJy1tb3otJywgJyddLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgcmV0dXJuIHJlcGxhY2VyKHByZWZpeCwgdmFsdWUpO1xuICB9KSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzb3J0UHJlZml4ZWRTdHlsZTtcblxudmFyIF9pc1ByZWZpeGVkUHJvcGVydHkgPSByZXF1aXJlKCcuL2lzUHJlZml4ZWRQcm9wZXJ0eScpO1xuXG52YXIgX2lzUHJlZml4ZWRQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzb3J0UHJlZml4ZWRTdHlsZShzdHlsZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGUpLnNvcnQoZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKCgwLCBfaXNQcmVmaXhlZFByb3BlcnR5Mi5kZWZhdWx0KShsZWZ0KSAmJiAhKDAsIF9pc1ByZWZpeGVkUHJvcGVydHkyLmRlZmF1bHQpKHJpZ2h0KSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZiAoISgwLCBfaXNQcmVmaXhlZFByb3BlcnR5Mi5kZWZhdWx0KShsZWZ0KSAmJiAoMCwgX2lzUHJlZml4ZWRQcm9wZXJ0eTIuZGVmYXVsdCkocmlnaHQpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAoc29ydGVkU3R5bGUsIHByb3ApIHtcbiAgICBzb3J0ZWRTdHlsZVtwcm9wXSA9IHN0eWxlW3Byb3BdO1xuICAgIHJldHVybiBzb3J0ZWRTdHlsZTtcbiAgfSwge30pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgdmFyIHVucHJlZml4ZWQgPSBwcm9wZXJ0eS5yZXBsYWNlKC9eKG1zfFdlYmtpdHxNb3p8TykvLCAnJyk7XG4gIHJldHVybiB1bnByZWZpeGVkLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgdW5wcmVmaXhlZC5zbGljZSgxKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsInZhciBTcGxpdFBhbmUgPSByZXF1aXJlKCcuL2xpYi9TcGxpdFBhbmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcGxpdFBhbmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9pbmxpbmVTdHlsZVByZWZpeGVyID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXByZWZpeGVyJyk7XG5cbnZhciBfaW5saW5lU3R5bGVQcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmxpbmVTdHlsZVByZWZpeGVyKTtcblxudmFyIF9yZWFjdFN0eWxlUHJvcHR5cGUgPSByZXF1aXJlKCdyZWFjdC1zdHlsZS1wcm9wdHlwZScpO1xuXG52YXIgX3JlYWN0U3R5bGVQcm9wdHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFN0eWxlUHJvcHR5cGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBVU0VSX0FHRU5UID0gJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDYuMSkgQXBwbGVXZWJLaXQvNTM3LjIgKEtIVE1MLCBsaWtlIEdlY2tvKSBTYWZhcmkvNTM3LjInO1xuXG52YXIgUGFuZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFBhbmUsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUGFuZSgpIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhbmUpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBQYW5lLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUGFuZSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0geyBzaXplOiBfdGhpcy5wcm9wcy5zaXplIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUGFuZSwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBzcGxpdCA9IHRoaXMucHJvcHMuc3BsaXQ7XG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IFsnUGFuZScsIHNwbGl0LCB0aGlzLnByb3BzLmNsYXNzTmFtZV07XG5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLnN0eWxlIHx8IHt9LCB7XG4gICAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUud2lkdGggPSB0aGlzLnN0YXRlLnNpemU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gdGhpcy5zdGF0ZS5zaXplO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZS5mbGV4ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzZXMuam9pbignICcpLCBzdHlsZTogdGhpcy5wcm9wcy5wcmVmaXhlci5wcmVmaXgoc3R5bGUpIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQYW5lO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuUGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgc3BsaXQ6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxuICAgIGNsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogX3JlYWN0LlByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgcHJlZml4ZXI6IF9yZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihfaW5saW5lU3R5bGVQcmVmaXhlcjIuZGVmYXVsdCkuaXNSZXF1aXJlZCxcbiAgICBzdHlsZTogX3JlYWN0U3R5bGVQcm9wdHlwZTIuZGVmYXVsdCxcbiAgICBzaXplOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMubnVtYmVyXSlcbn07XG5cblBhbmUuZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeGVyOiBuZXcgX2lubGluZVN0eWxlUHJlZml4ZXIyLmRlZmF1bHQoeyB1c2VyQWdlbnQ6IFVTRVJfQUdFTlQgfSlcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBhbmU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2lubGluZVN0eWxlUHJlZml4ZXIgPSByZXF1aXJlKCdpbmxpbmUtc3R5bGUtcHJlZml4ZXInKTtcblxudmFyIF9pbmxpbmVTdHlsZVByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lubGluZVN0eWxlUHJlZml4ZXIpO1xuXG52YXIgX3JlYWN0U3R5bGVQcm9wdHlwZSA9IHJlcXVpcmUoJ3JlYWN0LXN0eWxlLXByb3B0eXBlJyk7XG5cbnZhciBfcmVhY3RTdHlsZVByb3B0eXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0U3R5bGVQcm9wdHlwZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFVTRVJfQUdFTlQgPSAnTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgNi4xKSBBcHBsZVdlYktpdC81MzcuMiAoS0hUTUwsIGxpa2UgR2Vja28pIFNhZmFyaS81MzcuMic7XG5cbnZhciBSZXNpemVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUmVzaXplciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSZXNpemVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzaXplcik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSZXNpemVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVzaXplcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZXNpemVyLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHNwbGl0ID0gX3Byb3BzLnNwbGl0LFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcmVzaXplckNsYXNzTmFtZSA9IF9wcm9wcy5yZXNpemVyQ2xhc3NOYW1lO1xuXG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IFtyZXNpemVyQ2xhc3NOYW1lLCBzcGxpdCwgY2xhc3NOYW1lXTtcbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMuam9pbignICcpLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnByZWZpeGVyLnByZWZpeCh0aGlzLnByb3BzLnN0eWxlKSB8fCB7fSxcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnByb3BzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5wcm9wcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Ub3VjaEVuZDogZnVuY3Rpb24gb25Ub3VjaEVuZChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIucHJvcHMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVzaXplcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblJlc2l6ZXIucHJvcFR5cGVzID0ge1xuICAgIG9uTW91c2VEb3duOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblRvdWNoU3RhcnQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uVG91Y2hFbmQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHByZWZpeGVyOiBfcmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoX2lubGluZVN0eWxlUHJlZml4ZXIyLmRlZmF1bHQpLmlzUmVxdWlyZWQsXG4gICAgc3BsaXQ6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxuICAgIGNsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByZXNpemVyQ2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHN0eWxlOiBfcmVhY3RTdHlsZVByb3B0eXBlMi5kZWZhdWx0XG59O1xuXG5SZXNpemVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhlcjogbmV3IF9pbmxpbmVTdHlsZVByZWZpeGVyMi5kZWZhdWx0KHsgdXNlckFnZW50OiBVU0VSX0FHRU5UIH0pLFxuICAgIHJlc2l6ZXJDbGFzc05hbWU6ICdSZXNpemVyJ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzaXplcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfaW5saW5lU3R5bGVQcmVmaXhlciA9IHJlcXVpcmUoJ2lubGluZS1zdHlsZS1wcmVmaXhlcicpO1xuXG52YXIgX2lubGluZVN0eWxlUHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5saW5lU3R5bGVQcmVmaXhlcik7XG5cbnZhciBfcmVhY3RTdHlsZVByb3B0eXBlID0gcmVxdWlyZSgncmVhY3Qtc3R5bGUtcHJvcHR5cGUnKTtcblxudmFyIF9yZWFjdFN0eWxlUHJvcHR5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RTdHlsZVByb3B0eXBlKTtcblxudmFyIF9QYW5lID0gcmVxdWlyZSgnLi9QYW5lJyk7XG5cbnZhciBfUGFuZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYW5lKTtcblxudmFyIF9SZXNpemVyID0gcmVxdWlyZSgnLi9SZXNpemVyJyk7XG5cbnZhciBfUmVzaXplcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZXNpemVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVVNFUl9BR0VOVCA9ICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCA2LjEpIEFwcGxlV2ViS2l0LzUzNy4yIChLSFRNTCwgbGlrZSBHZWNrbykgU2FmYXJpLzUzNy4yJztcblxuZnVuY3Rpb24gdW5Gb2N1cyhkb2N1bWVudCwgd2luZG93KSB7XG4gICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgICAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxufVxuXG52YXIgU3BsaXRQYW5lID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU3BsaXRQYW5lLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFNwbGl0UGFuZSgpIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNwbGl0UGFuZSk7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IFNwbGl0UGFuZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNwbGl0UGFuZSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLm9uTW91c2VEb3duID0gX3RoaXMub25Nb3VzZURvd24uYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uVG91Y2hTdGFydCA9IF90aGlzLm9uVG91Y2hTdGFydC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25Nb3VzZU1vdmUgPSBfdGhpcy5vbk1vdXNlTW92ZS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25Ub3VjaE1vdmUgPSBfdGhpcy5vblRvdWNoTW92ZS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25Nb3VzZVVwID0gX3RoaXMub25Nb3VzZVVwLmJpbmQoX3RoaXMpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc2l6ZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3BsaXRQYW5lLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2l6ZSh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2l6ZShwcm9wcywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uTW91c2VEb3duJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRXaXRoVG91Y2hlcyA9IF9leHRlbmRzKHt9LCBldmVudCwgeyB0b3VjaGVzOiBbeyBjbGllbnRYOiBldmVudC5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jbGllbnRZIH1dIH0pO1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoU3RhcnQoZXZlbnRXaXRoVG91Y2hlcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uVG91Y2hTdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmFsbG93UmVzaXplKSB7XG4gICAgICAgICAgICAgICAgdW5Gb2N1cyhkb2N1bWVudCwgd2luZG93KTtcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLnByb3BzLnNwbGl0ID09PSAndmVydGljYWwnID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkRyYWdTdGFydGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25EcmFnU3RhcnRlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25Nb3VzZU1vdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBldmVudFdpdGhUb3VjaGVzID0gX2V4dGVuZHMoe30sIGV2ZW50LCB7IHRvdWNoZXM6IFt7IGNsaWVudFg6IGV2ZW50LmNsaWVudFgsIGNsaWVudFk6IGV2ZW50LmNsaWVudFkgfV0gfSk7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hNb3ZlKGV2ZW50V2l0aFRvdWNoZXMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblRvdWNoTW92ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblRvdWNoTW92ZShldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYWxsb3dSZXNpemUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5Gb2N1cyhkb2N1bWVudCwgd2luZG93KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzUHJpbWFyeUZpcnN0ID0gdGhpcy5wcm9wcy5wcmltYXJ5ID09PSAnZmlyc3QnO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmID0gaXNQcmltYXJ5Rmlyc3QgPyB0aGlzLnBhbmUxIDogdGhpcy5wYW5lMjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUocmVmKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnByb3BzLnNwbGl0ID09PSAndmVydGljYWwnID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5wcm9wcy5zcGxpdCA9PT0gJ3ZlcnRpY2FsJyA/IHdpZHRoIDogaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuc3RhdGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gaXNQcmltYXJ5Rmlyc3QgPyBwb3NpdGlvbiAtIGN1cnJlbnQgOiBjdXJyZW50IC0gcG9zaXRpb247XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4U2l6ZSA9IHRoaXMucHJvcHMubWF4U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXhTaXplICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy5tYXhTaXplIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwbFBhbmUgPSB0aGlzLnNwbGl0UGFuZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFNpemUgPSBzcGxQYW5lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgdGhpcy5wcm9wcy5tYXhTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4U2l6ZSA9IHNwbFBhbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgdGhpcy5wcm9wcy5tYXhTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1NpemUgPSBzaXplIC0gbmV3UG9zaXRpb247XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U2l6ZSA8IHRoaXMucHJvcHMubWluU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTaXplID0gdGhpcy5wcm9wcy5taW5TaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tYXhTaXplICE9PSB1bmRlZmluZWQgJiYgbmV3U2l6ZSA+IG1heFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2l6ZSA9IG1heFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnZWRTaXplOiBuZXdTaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogbmV3U2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1vdXNlVXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYWxsb3dSZXNpemUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uRHJhZ0ZpbmlzaGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ0ZpbmlzaGVkKHRoaXMuc3RhdGUuZHJhZ2dlZFNpemUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFNpemUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2l6ZShwcm9wcywgc3RhdGUpIHtcbiAgICAgICAgICAgIHZhciByZWYgPSB0aGlzLnByb3BzLnByaW1hcnkgPT09ICdmaXJzdCcgPyB0aGlzLnBhbmUxIDogdGhpcy5wYW5lMjtcbiAgICAgICAgICAgIHZhciBuZXdTaXplID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgICAgIG5ld1NpemUgPSBwcm9wcy5zaXplIHx8IHN0YXRlICYmIHN0YXRlLmRyYWdnZWRTaXplIHx8IHByb3BzLmRlZmF1bHRTaXplIHx8IHByb3BzLm1pblNpemU7XG4gICAgICAgICAgICAgICAgcmVmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogbmV3U2l6ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5zaXplICE9PSBzdGF0ZS5kcmFnZ2VkU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnZWRTaXplOiBuZXdTaXplXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBzcGxpdCA9IF9wcm9wcy5zcGxpdCxcbiAgICAgICAgICAgICAgICBhbGxvd1Jlc2l6ZSA9IF9wcm9wcy5hbGxvd1Jlc2l6ZTtcblxuICAgICAgICAgICAgdmFyIGRpc2FibGVkQ2xhc3MgPSBhbGxvd1Jlc2l6ZSA/ICcnIDogJ2Rpc2FibGVkJztcblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMuc3R5bGUgfHwge30sIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIE1velVzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBXZWJraXRVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbXNVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdDogJ3RleHQnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHNwbGl0ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IFsnU3BsaXRQYW5lJywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHNwbGl0LCBkaXNhYmxlZENsYXNzXTtcblxuICAgICAgICAgICAgdmFyIHBhbmUxU3R5bGUgPSB0aGlzLnByb3BzLnByZWZpeGVyLnByZWZpeChfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5wYW5lU3R5bGUgfHwge30sIHRoaXMucHJvcHMucGFuZTFTdHlsZSB8fCB7fSkpO1xuXG4gICAgICAgICAgICB2YXIgcGFuZTJTdHlsZSA9IHRoaXMucHJvcHMucHJlZml4ZXIucHJlZml4KF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLnBhbmVTdHlsZSB8fCB7fSwgdGhpcy5wcm9wcy5wYW5lMlN0eWxlIHx8IHt9KSk7XG5cbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnByZWZpeGVyLnByZWZpeChzdHlsZSksXG4gICAgICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5zcGxpdFBhbmUgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgX1BhbmUyLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucGFuZTEgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3BhbmUxJywgY2xhc3NOYW1lOiAnUGFuZTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHBhbmUxU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdDogc3BsaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiB0aGlzLnByb3BzLnByaW1hcnkgPT09ICdmaXJzdCcgPyB0aGlzLnByb3BzLnNpemUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZSB8fCB0aGlzLnByb3BzLm1pblNpemUgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bMF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9SZXNpemVyMi5kZWZhdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5yZXNpemVyID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAncmVzaXplcicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogZGlzYWJsZWRDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplckNsYXNzTmFtZTogdGhpcy5wcm9wcy5yZXNpemVyQ2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5vbk1vdXNlRG93bixcbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbk1vdXNlVXAsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnJlc2l6ZXJTdHlsZSB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgc3BsaXQ6IHNwbGl0XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIF9QYW5lMi5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnBhbmUyID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdwYW5lMicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQYW5lMicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogcGFuZTJTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0OiBzcGxpdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHRoaXMucHJvcHMucHJpbWFyeSA9PT0gJ3NlY29uZCcgPyB0aGlzLnByb3BzLnNpemUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZSB8fCB0aGlzLnByb3BzLm1pblNpemUgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bMV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNwbGl0UGFuZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblNwbGl0UGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgcHJpbWFyeTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2ZpcnN0JywgJ3NlY29uZCddKSxcbiAgICBtaW5TaXplOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMubnVtYmVyXSksXG4gICAgbWF4U2l6ZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLCBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlc1xuICAgIGRlZmF1bHRTaXplOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMubnVtYmVyXSksXG4gICAgc2l6ZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLCBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGFsbG93UmVzaXplOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc3BsaXQ6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxuICAgIG9uRHJhZ1N0YXJ0ZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRyYWdGaW5pc2hlZDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgcHJlZml4ZXI6IF9yZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihfaW5saW5lU3R5bGVQcmVmaXhlcjIuZGVmYXVsdCkuaXNSZXF1aXJlZCxcbiAgICBzdHlsZTogX3JlYWN0U3R5bGVQcm9wdHlwZTIuZGVmYXVsdCxcbiAgICByZXNpemVyU3R5bGU6IF9yZWFjdFN0eWxlUHJvcHR5cGUyLmRlZmF1bHQsXG4gICAgcGFuZVN0eWxlOiBfcmVhY3RTdHlsZVByb3B0eXBlMi5kZWZhdWx0LFxuICAgIHBhbmUxU3R5bGU6IF9yZWFjdFN0eWxlUHJvcHR5cGUyLmRlZmF1bHQsXG4gICAgcGFuZTJTdHlsZTogX3JlYWN0U3R5bGVQcm9wdHlwZTIuZGVmYXVsdCxcbiAgICBjbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlc2l6ZXJDbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBfcmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoX3JlYWN0LlByb3BUeXBlcy5ub2RlKS5pc1JlcXVpcmVkXG59O1xuXG5TcGxpdFBhbmUuZGVmYXVsdFByb3BzID0ge1xuICAgIHNwbGl0OiAndmVydGljYWwnLFxuICAgIG1pblNpemU6IDUwLFxuICAgIGFsbG93UmVzaXplOiB0cnVlLFxuICAgIHByZWZpeGVyOiBuZXcgX2lubGluZVN0eWxlUHJlZml4ZXIyLmRlZmF1bHQoeyB1c2VyQWdlbnQ6IFVTRVJfQUdFTlQgfSksXG4gICAgcHJpbWFyeTogJ2ZpcnN0J1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3BsaXRQYW5lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwibW9kdWxlLmV4cG9ydHMgPSBbXG4gIFwiYWxpZ25Db250ZW50XCIsXG4gIFwiTW96QWxpZ25Db250ZW50XCIsXG4gIFwiV2ViS2l0QWxpZ25Db250ZW50XCIsXG4gIFwiTVNBbGlnbkNvbnRlbnRcIixcbiAgXCJPQWxpZ25Db250ZW50XCIsXG4gIFwiYWxpZ25JdGVtc1wiLFxuICBcIk1vekFsaWduSXRlbXNcIixcbiAgXCJXZWJLaXRBbGlnbkl0ZW1zXCIsXG4gIFwiTVNBbGlnbkl0ZW1zXCIsXG4gIFwiT0FsaWduSXRlbXNcIixcbiAgXCJhbGlnblNlbGZcIixcbiAgXCJNb3pBbGlnblNlbGZcIixcbiAgXCJXZWJLaXRBbGlnblNlbGZcIixcbiAgXCJNU0FsaWduU2VsZlwiLFxuICBcIk9BbGlnblNlbGZcIixcbiAgXCJhbGxcIixcbiAgXCJNb3pBbGxcIixcbiAgXCJXZWJLaXRBbGxcIixcbiAgXCJNU0FsbFwiLFxuICBcIk9BbGxcIixcbiAgXCJhbmltYXRpb25cIixcbiAgXCJNb3pBbmltYXRpb25cIixcbiAgXCJXZWJLaXRBbmltYXRpb25cIixcbiAgXCJNU0FuaW1hdGlvblwiLFxuICBcIk9BbmltYXRpb25cIixcbiAgXCJhbmltYXRpb25EZWxheVwiLFxuICBcIk1vekFuaW1hdGlvbkRlbGF5XCIsXG4gIFwiV2ViS2l0QW5pbWF0aW9uRGVsYXlcIixcbiAgXCJNU0FuaW1hdGlvbkRlbGF5XCIsXG4gIFwiT0FuaW1hdGlvbkRlbGF5XCIsXG4gIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCIsXG4gIFwiTW96QW5pbWF0aW9uRGlyZWN0aW9uXCIsXG4gIFwiV2ViS2l0QW5pbWF0aW9uRGlyZWN0aW9uXCIsXG4gIFwiTVNBbmltYXRpb25EaXJlY3Rpb25cIixcbiAgXCJPQW5pbWF0aW9uRGlyZWN0aW9uXCIsXG4gIFwiYW5pbWF0aW9uRHVyYXRpb25cIixcbiAgXCJNb3pBbmltYXRpb25EdXJhdGlvblwiLFxuICBcIldlYktpdEFuaW1hdGlvbkR1cmF0aW9uXCIsXG4gIFwiTVNBbmltYXRpb25EdXJhdGlvblwiLFxuICBcIk9BbmltYXRpb25EdXJhdGlvblwiLFxuICBcImFuaW1hdGlvbkZpbGxNb2RlXCIsXG4gIFwiTW96QW5pbWF0aW9uRmlsbE1vZGVcIixcbiAgXCJXZWJLaXRBbmltYXRpb25GaWxsTW9kZVwiLFxuICBcIk1TQW5pbWF0aW9uRmlsbE1vZGVcIixcbiAgXCJPQW5pbWF0aW9uRmlsbE1vZGVcIixcbiAgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiLFxuICBcIk1vekFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCIsXG4gIFwiV2ViS2l0QW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIixcbiAgXCJNU0FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCIsXG4gIFwiT0FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCIsXG4gIFwiYW5pbWF0aW9uTmFtZVwiLFxuICBcIk1vekFuaW1hdGlvbk5hbWVcIixcbiAgXCJXZWJLaXRBbmltYXRpb25OYW1lXCIsXG4gIFwiTVNBbmltYXRpb25OYW1lXCIsXG4gIFwiT0FuaW1hdGlvbk5hbWVcIixcbiAgXCJhbmltYXRpb25QbGF5U3RhdGVcIixcbiAgXCJNb3pBbmltYXRpb25QbGF5U3RhdGVcIixcbiAgXCJXZWJLaXRBbmltYXRpb25QbGF5U3RhdGVcIixcbiAgXCJNU0FuaW1hdGlvblBsYXlTdGF0ZVwiLFxuICBcIk9BbmltYXRpb25QbGF5U3RhdGVcIixcbiAgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiLFxuICBcIk1vekFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCIsXG4gIFwiV2ViS2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIixcbiAgXCJNU0FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCIsXG4gIFwiT0FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCIsXG4gIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCIsXG4gIFwiTW96QmFja2ZhY2VWaXNpYmlsaXR5XCIsXG4gIFwiV2ViS2l0QmFja2ZhY2VWaXNpYmlsaXR5XCIsXG4gIFwiTVNCYWNrZmFjZVZpc2liaWxpdHlcIixcbiAgXCJPQmFja2ZhY2VWaXNpYmlsaXR5XCIsXG4gIFwiYmFja2dyb3VuZFwiLFxuICBcIk1vekJhY2tncm91bmRcIixcbiAgXCJXZWJLaXRCYWNrZ3JvdW5kXCIsXG4gIFwiTVNCYWNrZ3JvdW5kXCIsXG4gIFwiT0JhY2tncm91bmRcIixcbiAgXCJiYWNrZ3JvdW5kQXR0YWNobWVudFwiLFxuICBcIk1vekJhY2tncm91bmRBdHRhY2htZW50XCIsXG4gIFwiV2ViS2l0QmFja2dyb3VuZEF0dGFjaG1lbnRcIixcbiAgXCJNU0JhY2tncm91bmRBdHRhY2htZW50XCIsXG4gIFwiT0JhY2tncm91bmRBdHRhY2htZW50XCIsXG4gIFwiYmFja2dyb3VuZEJsZW5kTW9kZVwiLFxuICBcIk1vekJhY2tncm91bmRCbGVuZE1vZGVcIixcbiAgXCJXZWJLaXRCYWNrZ3JvdW5kQmxlbmRNb2RlXCIsXG4gIFwiTVNCYWNrZ3JvdW5kQmxlbmRNb2RlXCIsXG4gIFwiT0JhY2tncm91bmRCbGVuZE1vZGVcIixcbiAgXCJiYWNrZ3JvdW5kQ2xpcFwiLFxuICBcIk1vekJhY2tncm91bmRDbGlwXCIsXG4gIFwiV2ViS2l0QmFja2dyb3VuZENsaXBcIixcbiAgXCJNU0JhY2tncm91bmRDbGlwXCIsXG4gIFwiT0JhY2tncm91bmRDbGlwXCIsXG4gIFwiYmFja2dyb3VuZENvbG9yXCIsXG4gIFwiTW96QmFja2dyb3VuZENvbG9yXCIsXG4gIFwiV2ViS2l0QmFja2dyb3VuZENvbG9yXCIsXG4gIFwiTVNCYWNrZ3JvdW5kQ29sb3JcIixcbiAgXCJPQmFja2dyb3VuZENvbG9yXCIsXG4gIFwiYmFja2dyb3VuZEltYWdlXCIsXG4gIFwiTW96QmFja2dyb3VuZEltYWdlXCIsXG4gIFwiV2ViS2l0QmFja2dyb3VuZEltYWdlXCIsXG4gIFwiTVNCYWNrZ3JvdW5kSW1hZ2VcIixcbiAgXCJPQmFja2dyb3VuZEltYWdlXCIsXG4gIFwiYmFja2dyb3VuZE9yaWdpblwiLFxuICBcIk1vekJhY2tncm91bmRPcmlnaW5cIixcbiAgXCJXZWJLaXRCYWNrZ3JvdW5kT3JpZ2luXCIsXG4gIFwiTVNCYWNrZ3JvdW5kT3JpZ2luXCIsXG4gIFwiT0JhY2tncm91bmRPcmlnaW5cIixcbiAgXCJiYWNrZ3JvdW5kUG9zaXRpb25cIixcbiAgXCJNb3pCYWNrZ3JvdW5kUG9zaXRpb25cIixcbiAgXCJXZWJLaXRCYWNrZ3JvdW5kUG9zaXRpb25cIixcbiAgXCJNU0JhY2tncm91bmRQb3NpdGlvblwiLFxuICBcIk9CYWNrZ3JvdW5kUG9zaXRpb25cIixcbiAgXCJiYWNrZ3JvdW5kUmVwZWF0XCIsXG4gIFwiTW96QmFja2dyb3VuZFJlcGVhdFwiLFxuICBcIldlYktpdEJhY2tncm91bmRSZXBlYXRcIixcbiAgXCJNU0JhY2tncm91bmRSZXBlYXRcIixcbiAgXCJPQmFja2dyb3VuZFJlcGVhdFwiLFxuICBcImJhY2tncm91bmRTaXplXCIsXG4gIFwiTW96QmFja2dyb3VuZFNpemVcIixcbiAgXCJXZWJLaXRCYWNrZ3JvdW5kU2l6ZVwiLFxuICBcIk1TQmFja2dyb3VuZFNpemVcIixcbiAgXCJPQmFja2dyb3VuZFNpemVcIixcbiAgXCJibG9ja1NpemVcIixcbiAgXCJNb3pCbG9ja1NpemVcIixcbiAgXCJXZWJLaXRCbG9ja1NpemVcIixcbiAgXCJNU0Jsb2NrU2l6ZVwiLFxuICBcIk9CbG9ja1NpemVcIixcbiAgXCJib3JkZXJcIixcbiAgXCJNb3pCb3JkZXJcIixcbiAgXCJXZWJLaXRCb3JkZXJcIixcbiAgXCJNU0JvcmRlclwiLFxuICBcIk9Cb3JkZXJcIixcbiAgXCJib3JkZXJCbG9ja0VuZFwiLFxuICBcIk1vekJvcmRlckJsb2NrRW5kXCIsXG4gIFwiV2ViS2l0Qm9yZGVyQmxvY2tFbmRcIixcbiAgXCJNU0JvcmRlckJsb2NrRW5kXCIsXG4gIFwiT0JvcmRlckJsb2NrRW5kXCIsXG4gIFwiYm9yZGVyQmxvY2tFbmRDb2xvclwiLFxuICBcIk1vekJvcmRlckJsb2NrRW5kQ29sb3JcIixcbiAgXCJXZWJLaXRCb3JkZXJCbG9ja0VuZENvbG9yXCIsXG4gIFwiTVNCb3JkZXJCbG9ja0VuZENvbG9yXCIsXG4gIFwiT0JvcmRlckJsb2NrRW5kQ29sb3JcIixcbiAgXCJib3JkZXJCbG9ja0VuZFN0eWxlXCIsXG4gIFwiTW96Qm9yZGVyQmxvY2tFbmRTdHlsZVwiLFxuICBcIldlYktpdEJvcmRlckJsb2NrRW5kU3R5bGVcIixcbiAgXCJNU0JvcmRlckJsb2NrRW5kU3R5bGVcIixcbiAgXCJPQm9yZGVyQmxvY2tFbmRTdHlsZVwiLFxuICBcImJvcmRlckJsb2NrRW5kV2lkdGhcIixcbiAgXCJNb3pCb3JkZXJCbG9ja0VuZFdpZHRoXCIsXG4gIFwiV2ViS2l0Qm9yZGVyQmxvY2tFbmRXaWR0aFwiLFxuICBcIk1TQm9yZGVyQmxvY2tFbmRXaWR0aFwiLFxuICBcIk9Cb3JkZXJCbG9ja0VuZFdpZHRoXCIsXG4gIFwiYm9yZGVyQmxvY2tTdGFydFwiLFxuICBcIk1vekJvcmRlckJsb2NrU3RhcnRcIixcbiAgXCJXZWJLaXRCb3JkZXJCbG9ja1N0YXJ0XCIsXG4gIFwiTVNCb3JkZXJCbG9ja1N0YXJ0XCIsXG4gIFwiT0JvcmRlckJsb2NrU3RhcnRcIixcbiAgXCJib3JkZXJCbG9ja1N0YXJ0Q29sb3JcIixcbiAgXCJNb3pCb3JkZXJCbG9ja1N0YXJ0Q29sb3JcIixcbiAgXCJXZWJLaXRCb3JkZXJCbG9ja1N0YXJ0Q29sb3JcIixcbiAgXCJNU0JvcmRlckJsb2NrU3RhcnRDb2xvclwiLFxuICBcIk9Cb3JkZXJCbG9ja1N0YXJ0Q29sb3JcIixcbiAgXCJib3JkZXJCbG9ja1N0YXJ0U3R5bGVcIixcbiAgXCJNb3pCb3JkZXJCbG9ja1N0YXJ0U3R5bGVcIixcbiAgXCJXZWJLaXRCb3JkZXJCbG9ja1N0YXJ0U3R5bGVcIixcbiAgXCJNU0JvcmRlckJsb2NrU3RhcnRTdHlsZVwiLFxuICBcIk9Cb3JkZXJCbG9ja1N0YXJ0U3R5bGVcIixcbiAgXCJib3JkZXJCbG9ja1N0YXJ0V2lkdGhcIixcbiAgXCJNb3pCb3JkZXJCbG9ja1N0YXJ0V2lkdGhcIixcbiAgXCJXZWJLaXRCb3JkZXJCbG9ja1N0YXJ0V2lkdGhcIixcbiAgXCJNU0JvcmRlckJsb2NrU3RhcnRXaWR0aFwiLFxuICBcIk9Cb3JkZXJCbG9ja1N0YXJ0V2lkdGhcIixcbiAgXCJib3JkZXJCb3R0b21cIixcbiAgXCJNb3pCb3JkZXJCb3R0b21cIixcbiAgXCJXZWJLaXRCb3JkZXJCb3R0b21cIixcbiAgXCJNU0JvcmRlckJvdHRvbVwiLFxuICBcIk9Cb3JkZXJCb3R0b21cIixcbiAgXCJib3JkZXJCb3R0b21Db2xvclwiLFxuICBcIk1vekJvcmRlckJvdHRvbUNvbG9yXCIsXG4gIFwiV2ViS2l0Qm9yZGVyQm90dG9tQ29sb3JcIixcbiAgXCJNU0JvcmRlckJvdHRvbUNvbG9yXCIsXG4gIFwiT0JvcmRlckJvdHRvbUNvbG9yXCIsXG4gIFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiLFxuICBcIk1vekJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIixcbiAgXCJXZWJLaXRCb3JkZXJCb3R0b21MZWZ0UmFkaXVzXCIsXG4gIFwiTVNCb3JkZXJCb3R0b21MZWZ0UmFkaXVzXCIsXG4gIFwiT0JvcmRlckJvdHRvbUxlZnRSYWRpdXNcIixcbiAgXCJib3JkZXJCb3R0b21SaWdodFJhZGl1c1wiLFxuICBcIk1vekJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCIsXG4gIFwiV2ViS2l0Qm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIixcbiAgXCJNU0JvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCIsXG4gIFwiT0JvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCIsXG4gIFwiYm9yZGVyQm90dG9tU3R5bGVcIixcbiAgXCJNb3pCb3JkZXJCb3R0b21TdHlsZVwiLFxuICBcIldlYktpdEJvcmRlckJvdHRvbVN0eWxlXCIsXG4gIFwiTVNCb3JkZXJCb3R0b21TdHlsZVwiLFxuICBcIk9Cb3JkZXJCb3R0b21TdHlsZVwiLFxuICBcImJvcmRlckJvdHRvbVdpZHRoXCIsXG4gIFwiTW96Qm9yZGVyQm90dG9tV2lkdGhcIixcbiAgXCJXZWJLaXRCb3JkZXJCb3R0b21XaWR0aFwiLFxuICBcIk1TQm9yZGVyQm90dG9tV2lkdGhcIixcbiAgXCJPQm9yZGVyQm90dG9tV2lkdGhcIixcbiAgXCJib3JkZXJDb2xsYXBzZVwiLFxuICBcIk1vekJvcmRlckNvbGxhcHNlXCIsXG4gIFwiV2ViS2l0Qm9yZGVyQ29sbGFwc2VcIixcbiAgXCJNU0JvcmRlckNvbGxhcHNlXCIsXG4gIFwiT0JvcmRlckNvbGxhcHNlXCIsXG4gIFwiYm9yZGVyQ29sb3JcIixcbiAgXCJNb3pCb3JkZXJDb2xvclwiLFxuICBcIldlYktpdEJvcmRlckNvbG9yXCIsXG4gIFwiTVNCb3JkZXJDb2xvclwiLFxuICBcIk9Cb3JkZXJDb2xvclwiLFxuICBcImJvcmRlckltYWdlXCIsXG4gIFwiTW96Qm9yZGVySW1hZ2VcIixcbiAgXCJXZWJLaXRCb3JkZXJJbWFnZVwiLFxuICBcIk1TQm9yZGVySW1hZ2VcIixcbiAgXCJPQm9yZGVySW1hZ2VcIixcbiAgXCJib3JkZXJJbWFnZU91dHNldFwiLFxuICBcIk1vekJvcmRlckltYWdlT3V0c2V0XCIsXG4gIFwiV2ViS2l0Qm9yZGVySW1hZ2VPdXRzZXRcIixcbiAgXCJNU0JvcmRlckltYWdlT3V0c2V0XCIsXG4gIFwiT0JvcmRlckltYWdlT3V0c2V0XCIsXG4gIFwiYm9yZGVySW1hZ2VSZXBlYXRcIixcbiAgXCJNb3pCb3JkZXJJbWFnZVJlcGVhdFwiLFxuICBcIldlYktpdEJvcmRlckltYWdlUmVwZWF0XCIsXG4gIFwiTVNCb3JkZXJJbWFnZVJlcGVhdFwiLFxuICBcIk9Cb3JkZXJJbWFnZVJlcGVhdFwiLFxuICBcImJvcmRlckltYWdlU2xpY2VcIixcbiAgXCJNb3pCb3JkZXJJbWFnZVNsaWNlXCIsXG4gIFwiV2ViS2l0Qm9yZGVySW1hZ2VTbGljZVwiLFxuICBcIk1TQm9yZGVySW1hZ2VTbGljZVwiLFxuICBcIk9Cb3JkZXJJbWFnZVNsaWNlXCIsXG4gIFwiYm9yZGVySW1hZ2VTb3VyY2VcIixcbiAgXCJNb3pCb3JkZXJJbWFnZVNvdXJjZVwiLFxuICBcIldlYktpdEJvcmRlckltYWdlU291cmNlXCIsXG4gIFwiTVNCb3JkZXJJbWFnZVNvdXJjZVwiLFxuICBcIk9Cb3JkZXJJbWFnZVNvdXJjZVwiLFxuICBcImJvcmRlckltYWdlV2lkdGhcIixcbiAgXCJNb3pCb3JkZXJJbWFnZVdpZHRoXCIsXG4gIFwiV2ViS2l0Qm9yZGVySW1hZ2VXaWR0aFwiLFxuICBcIk1TQm9yZGVySW1hZ2VXaWR0aFwiLFxuICBcIk9Cb3JkZXJJbWFnZVdpZHRoXCIsXG4gIFwiYm9yZGVySW5saW5lRW5kXCIsXG4gIFwiTW96Qm9yZGVySW5saW5lRW5kXCIsXG4gIFwiV2ViS2l0Qm9yZGVySW5saW5lRW5kXCIsXG4gIFwiTVNCb3JkZXJJbmxpbmVFbmRcIixcbiAgXCJPQm9yZGVySW5saW5lRW5kXCIsXG4gIFwiYm9yZGVySW5saW5lRW5kQ29sb3JcIixcbiAgXCJNb3pCb3JkZXJJbmxpbmVFbmRDb2xvclwiLFxuICBcIldlYktpdEJvcmRlcklubGluZUVuZENvbG9yXCIsXG4gIFwiTVNCb3JkZXJJbmxpbmVFbmRDb2xvclwiLFxuICBcIk9Cb3JkZXJJbmxpbmVFbmRDb2xvclwiLFxuICBcImJvcmRlcklubGluZUVuZFN0eWxlXCIsXG4gIFwiTW96Qm9yZGVySW5saW5lRW5kU3R5bGVcIixcbiAgXCJXZWJLaXRCb3JkZXJJbmxpbmVFbmRTdHlsZVwiLFxuICBcIk1TQm9yZGVySW5saW5lRW5kU3R5bGVcIixcbiAgXCJPQm9yZGVySW5saW5lRW5kU3R5bGVcIixcbiAgXCJib3JkZXJJbmxpbmVFbmRXaWR0aFwiLFxuICBcIk1vekJvcmRlcklubGluZUVuZFdpZHRoXCIsXG4gIFwiV2ViS2l0Qm9yZGVySW5saW5lRW5kV2lkdGhcIixcbiAgXCJNU0JvcmRlcklubGluZUVuZFdpZHRoXCIsXG4gIFwiT0JvcmRlcklubGluZUVuZFdpZHRoXCIsXG4gIFwiYm9yZGVySW5saW5lU3RhcnRcIixcbiAgXCJNb3pCb3JkZXJJbmxpbmVTdGFydFwiLFxuICBcIldlYktpdEJvcmRlcklubGluZVN0YXJ0XCIsXG4gIFwiTVNCb3JkZXJJbmxpbmVTdGFydFwiLFxuICBcIk9Cb3JkZXJJbmxpbmVTdGFydFwiLFxuICBcImJvcmRlcklubGluZVN0YXJ0Q29sb3JcIixcbiAgXCJNb3pCb3JkZXJJbmxpbmVTdGFydENvbG9yXCIsXG4gIFwiV2ViS2l0Qm9yZGVySW5saW5lU3RhcnRDb2xvclwiLFxuICBcIk1TQm9yZGVySW5saW5lU3RhcnRDb2xvclwiLFxuICBcIk9Cb3JkZXJJbmxpbmVTdGFydENvbG9yXCIsXG4gIFwiYm9yZGVySW5saW5lU3RhcnRTdHlsZVwiLFxuICBcIk1vekJvcmRlcklubGluZVN0YXJ0U3R5bGVcIixcbiAgXCJXZWJLaXRCb3JkZXJJbmxpbmVTdGFydFN0eWxlXCIsXG4gIFwiTVNCb3JkZXJJbmxpbmVTdGFydFN0eWxlXCIsXG4gIFwiT0JvcmRlcklubGluZVN0YXJ0U3R5bGVcIixcbiAgXCJib3JkZXJJbmxpbmVTdGFydFdpZHRoXCIsXG4gIFwiTW96Qm9yZGVySW5saW5lU3RhcnRXaWR0aFwiLFxuICBcIldlYktpdEJvcmRlcklubGluZVN0YXJ0V2lkdGhcIixcbiAgXCJNU0JvcmRlcklubGluZVN0YXJ0V2lkdGhcIixcbiAgXCJPQm9yZGVySW5saW5lU3RhcnRXaWR0aFwiLFxuICBcImJvcmRlckxlZnRcIixcbiAgXCJNb3pCb3JkZXJMZWZ0XCIsXG4gIFwiV2ViS2l0Qm9yZGVyTGVmdFwiLFxuICBcIk1TQm9yZGVyTGVmdFwiLFxuICBcIk9Cb3JkZXJMZWZ0XCIsXG4gIFwiYm9yZGVyTGVmdENvbG9yXCIsXG4gIFwiTW96Qm9yZGVyTGVmdENvbG9yXCIsXG4gIFwiV2ViS2l0Qm9yZGVyTGVmdENvbG9yXCIsXG4gIFwiTVNCb3JkZXJMZWZ0Q29sb3JcIixcbiAgXCJPQm9yZGVyTGVmdENvbG9yXCIsXG4gIFwiYm9yZGVyTGVmdFN0eWxlXCIsXG4gIFwiTW96Qm9yZGVyTGVmdFN0eWxlXCIsXG4gIFwiV2ViS2l0Qm9yZGVyTGVmdFN0eWxlXCIsXG4gIFwiTVNCb3JkZXJMZWZ0U3R5bGVcIixcbiAgXCJPQm9yZGVyTGVmdFN0eWxlXCIsXG4gIFwiYm9yZGVyTGVmdFdpZHRoXCIsXG4gIFwiTW96Qm9yZGVyTGVmdFdpZHRoXCIsXG4gIFwiV2ViS2l0Qm9yZGVyTGVmdFdpZHRoXCIsXG4gIFwiTVNCb3JkZXJMZWZ0V2lkdGhcIixcbiAgXCJPQm9yZGVyTGVmdFdpZHRoXCIsXG4gIFwiYm9yZGVyUmFkaXVzXCIsXG4gIFwiTW96Qm9yZGVyUmFkaXVzXCIsXG4gIFwiV2ViS2l0Qm9yZGVyUmFkaXVzXCIsXG4gIFwiTVNCb3JkZXJSYWRpdXNcIixcbiAgXCJPQm9yZGVyUmFkaXVzXCIsXG4gIFwiYm9yZGVyUmlnaHRcIixcbiAgXCJNb3pCb3JkZXJSaWdodFwiLFxuICBcIldlYktpdEJvcmRlclJpZ2h0XCIsXG4gIFwiTVNCb3JkZXJSaWdodFwiLFxuICBcIk9Cb3JkZXJSaWdodFwiLFxuICBcImJvcmRlclJpZ2h0Q29sb3JcIixcbiAgXCJNb3pCb3JkZXJSaWdodENvbG9yXCIsXG4gIFwiV2ViS2l0Qm9yZGVyUmlnaHRDb2xvclwiLFxuICBcIk1TQm9yZGVyUmlnaHRDb2xvclwiLFxuICBcIk9Cb3JkZXJSaWdodENvbG9yXCIsXG4gIFwiYm9yZGVyUmlnaHRTdHlsZVwiLFxuICBcIk1vekJvcmRlclJpZ2h0U3R5bGVcIixcbiAgXCJXZWJLaXRCb3JkZXJSaWdodFN0eWxlXCIsXG4gIFwiTVNCb3JkZXJSaWdodFN0eWxlXCIsXG4gIFwiT0JvcmRlclJpZ2h0U3R5bGVcIixcbiAgXCJib3JkZXJSaWdodFdpZHRoXCIsXG4gIFwiTW96Qm9yZGVyUmlnaHRXaWR0aFwiLFxuICBcIldlYktpdEJvcmRlclJpZ2h0V2lkdGhcIixcbiAgXCJNU0JvcmRlclJpZ2h0V2lkdGhcIixcbiAgXCJPQm9yZGVyUmlnaHRXaWR0aFwiLFxuICBcImJvcmRlclNwYWNpbmdcIixcbiAgXCJNb3pCb3JkZXJTcGFjaW5nXCIsXG4gIFwiV2ViS2l0Qm9yZGVyU3BhY2luZ1wiLFxuICBcIk1TQm9yZGVyU3BhY2luZ1wiLFxuICBcIk9Cb3JkZXJTcGFjaW5nXCIsXG4gIFwiYm9yZGVyU3R5bGVcIixcbiAgXCJNb3pCb3JkZXJTdHlsZVwiLFxuICBcIldlYktpdEJvcmRlclN0eWxlXCIsXG4gIFwiTVNCb3JkZXJTdHlsZVwiLFxuICBcIk9Cb3JkZXJTdHlsZVwiLFxuICBcImJvcmRlclRvcFwiLFxuICBcIk1vekJvcmRlclRvcFwiLFxuICBcIldlYktpdEJvcmRlclRvcFwiLFxuICBcIk1TQm9yZGVyVG9wXCIsXG4gIFwiT0JvcmRlclRvcFwiLFxuICBcImJvcmRlclRvcENvbG9yXCIsXG4gIFwiTW96Qm9yZGVyVG9wQ29sb3JcIixcbiAgXCJXZWJLaXRCb3JkZXJUb3BDb2xvclwiLFxuICBcIk1TQm9yZGVyVG9wQ29sb3JcIixcbiAgXCJPQm9yZGVyVG9wQ29sb3JcIixcbiAgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCIsXG4gIFwiTW96Qm9yZGVyVG9wTGVmdFJhZGl1c1wiLFxuICBcIldlYktpdEJvcmRlclRvcExlZnRSYWRpdXNcIixcbiAgXCJNU0JvcmRlclRvcExlZnRSYWRpdXNcIixcbiAgXCJPQm9yZGVyVG9wTGVmdFJhZGl1c1wiLFxuICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCIsXG4gIFwiTW96Qm9yZGVyVG9wUmlnaHRSYWRpdXNcIixcbiAgXCJXZWJLaXRCb3JkZXJUb3BSaWdodFJhZGl1c1wiLFxuICBcIk1TQm9yZGVyVG9wUmlnaHRSYWRpdXNcIixcbiAgXCJPQm9yZGVyVG9wUmlnaHRSYWRpdXNcIixcbiAgXCJib3JkZXJUb3BTdHlsZVwiLFxuICBcIk1vekJvcmRlclRvcFN0eWxlXCIsXG4gIFwiV2ViS2l0Qm9yZGVyVG9wU3R5bGVcIixcbiAgXCJNU0JvcmRlclRvcFN0eWxlXCIsXG4gIFwiT0JvcmRlclRvcFN0eWxlXCIsXG4gIFwiYm9yZGVyVG9wV2lkdGhcIixcbiAgXCJNb3pCb3JkZXJUb3BXaWR0aFwiLFxuICBcIldlYktpdEJvcmRlclRvcFdpZHRoXCIsXG4gIFwiTVNCb3JkZXJUb3BXaWR0aFwiLFxuICBcIk9Cb3JkZXJUb3BXaWR0aFwiLFxuICBcImJvcmRlcldpZHRoXCIsXG4gIFwiTW96Qm9yZGVyV2lkdGhcIixcbiAgXCJXZWJLaXRCb3JkZXJXaWR0aFwiLFxuICBcIk1TQm9yZGVyV2lkdGhcIixcbiAgXCJPQm9yZGVyV2lkdGhcIixcbiAgXCJib3R0b21cIixcbiAgXCJNb3pCb3R0b21cIixcbiAgXCJXZWJLaXRCb3R0b21cIixcbiAgXCJNU0JvdHRvbVwiLFxuICBcIk9Cb3R0b21cIixcbiAgXCJib3hEZWNvcmF0aW9uQnJlYWtcIixcbiAgXCJNb3pCb3hEZWNvcmF0aW9uQnJlYWtcIixcbiAgXCJXZWJLaXRCb3hEZWNvcmF0aW9uQnJlYWtcIixcbiAgXCJNU0JveERlY29yYXRpb25CcmVha1wiLFxuICBcIk9Cb3hEZWNvcmF0aW9uQnJlYWtcIixcbiAgXCJib3hTaGFkb3dcIixcbiAgXCJNb3pCb3hTaGFkb3dcIixcbiAgXCJXZWJLaXRCb3hTaGFkb3dcIixcbiAgXCJNU0JveFNoYWRvd1wiLFxuICBcIk9Cb3hTaGFkb3dcIixcbiAgXCJib3hTaXppbmdcIixcbiAgXCJNb3pCb3hTaXppbmdcIixcbiAgXCJXZWJLaXRCb3hTaXppbmdcIixcbiAgXCJNU0JveFNpemluZ1wiLFxuICBcIk9Cb3hTaXppbmdcIixcbiAgXCJicmVha0FmdGVyXCIsXG4gIFwiTW96QnJlYWtBZnRlclwiLFxuICBcIldlYktpdEJyZWFrQWZ0ZXJcIixcbiAgXCJNU0JyZWFrQWZ0ZXJcIixcbiAgXCJPQnJlYWtBZnRlclwiLFxuICBcImJyZWFrQmVmb3JlXCIsXG4gIFwiTW96QnJlYWtCZWZvcmVcIixcbiAgXCJXZWJLaXRCcmVha0JlZm9yZVwiLFxuICBcIk1TQnJlYWtCZWZvcmVcIixcbiAgXCJPQnJlYWtCZWZvcmVcIixcbiAgXCJicmVha0luc2lkZVwiLFxuICBcIk1vekJyZWFrSW5zaWRlXCIsXG4gIFwiV2ViS2l0QnJlYWtJbnNpZGVcIixcbiAgXCJNU0JyZWFrSW5zaWRlXCIsXG4gIFwiT0JyZWFrSW5zaWRlXCIsXG4gIFwiY2FwdGlvblNpZGVcIixcbiAgXCJNb3pDYXB0aW9uU2lkZVwiLFxuICBcIldlYktpdENhcHRpb25TaWRlXCIsXG4gIFwiTVNDYXB0aW9uU2lkZVwiLFxuICBcIk9DYXB0aW9uU2lkZVwiLFxuICBcImNoXCIsXG4gIFwiTW96Q2hcIixcbiAgXCJXZWJLaXRDaFwiLFxuICBcIk1TQ2hcIixcbiAgXCJPQ2hcIixcbiAgXCJjbGVhclwiLFxuICBcIk1vekNsZWFyXCIsXG4gIFwiV2ViS2l0Q2xlYXJcIixcbiAgXCJNU0NsZWFyXCIsXG4gIFwiT0NsZWFyXCIsXG4gIFwiY2xpcFwiLFxuICBcIk1vekNsaXBcIixcbiAgXCJXZWJLaXRDbGlwXCIsXG4gIFwiTVNDbGlwXCIsXG4gIFwiT0NsaXBcIixcbiAgXCJjbGlwUGF0aFwiLFxuICBcIk1vekNsaXBQYXRoXCIsXG4gIFwiV2ViS2l0Q2xpcFBhdGhcIixcbiAgXCJNU0NsaXBQYXRoXCIsXG4gIFwiT0NsaXBQYXRoXCIsXG4gIFwiY21cIixcbiAgXCJNb3pDbVwiLFxuICBcIldlYktpdENtXCIsXG4gIFwiTVNDbVwiLFxuICBcIk9DbVwiLFxuICBcImNvbG9yXCIsXG4gIFwiTW96Q29sb3JcIixcbiAgXCJXZWJLaXRDb2xvclwiLFxuICBcIk1TQ29sb3JcIixcbiAgXCJPQ29sb3JcIixcbiAgXCJjb2x1bW5Db3VudFwiLFxuICBcIk1vekNvbHVtbkNvdW50XCIsXG4gIFwiV2ViS2l0Q29sdW1uQ291bnRcIixcbiAgXCJNU0NvbHVtbkNvdW50XCIsXG4gIFwiT0NvbHVtbkNvdW50XCIsXG4gIFwiY29sdW1uRmlsbFwiLFxuICBcIk1vekNvbHVtbkZpbGxcIixcbiAgXCJXZWJLaXRDb2x1bW5GaWxsXCIsXG4gIFwiTVNDb2x1bW5GaWxsXCIsXG4gIFwiT0NvbHVtbkZpbGxcIixcbiAgXCJjb2x1bW5HYXBcIixcbiAgXCJNb3pDb2x1bW5HYXBcIixcbiAgXCJXZWJLaXRDb2x1bW5HYXBcIixcbiAgXCJNU0NvbHVtbkdhcFwiLFxuICBcIk9Db2x1bW5HYXBcIixcbiAgXCJjb2x1bW5SdWxlXCIsXG4gIFwiTW96Q29sdW1uUnVsZVwiLFxuICBcIldlYktpdENvbHVtblJ1bGVcIixcbiAgXCJNU0NvbHVtblJ1bGVcIixcbiAgXCJPQ29sdW1uUnVsZVwiLFxuICBcImNvbHVtblJ1bGVDb2xvclwiLFxuICBcIk1vekNvbHVtblJ1bGVDb2xvclwiLFxuICBcIldlYktpdENvbHVtblJ1bGVDb2xvclwiLFxuICBcIk1TQ29sdW1uUnVsZUNvbG9yXCIsXG4gIFwiT0NvbHVtblJ1bGVDb2xvclwiLFxuICBcImNvbHVtblJ1bGVTdHlsZVwiLFxuICBcIk1vekNvbHVtblJ1bGVTdHlsZVwiLFxuICBcIldlYktpdENvbHVtblJ1bGVTdHlsZVwiLFxuICBcIk1TQ29sdW1uUnVsZVN0eWxlXCIsXG4gIFwiT0NvbHVtblJ1bGVTdHlsZVwiLFxuICBcImNvbHVtblJ1bGVXaWR0aFwiLFxuICBcIk1vekNvbHVtblJ1bGVXaWR0aFwiLFxuICBcIldlYktpdENvbHVtblJ1bGVXaWR0aFwiLFxuICBcIk1TQ29sdW1uUnVsZVdpZHRoXCIsXG4gIFwiT0NvbHVtblJ1bGVXaWR0aFwiLFxuICBcImNvbHVtblNwYW5cIixcbiAgXCJNb3pDb2x1bW5TcGFuXCIsXG4gIFwiV2ViS2l0Q29sdW1uU3BhblwiLFxuICBcIk1TQ29sdW1uU3BhblwiLFxuICBcIk9Db2x1bW5TcGFuXCIsXG4gIFwiY29sdW1uV2lkdGhcIixcbiAgXCJNb3pDb2x1bW5XaWR0aFwiLFxuICBcIldlYktpdENvbHVtbldpZHRoXCIsXG4gIFwiTVNDb2x1bW5XaWR0aFwiLFxuICBcIk9Db2x1bW5XaWR0aFwiLFxuICBcImNvbHVtbnNcIixcbiAgXCJNb3pDb2x1bW5zXCIsXG4gIFwiV2ViS2l0Q29sdW1uc1wiLFxuICBcIk1TQ29sdW1uc1wiLFxuICBcIk9Db2x1bW5zXCIsXG4gIFwiY29udGVudFwiLFxuICBcIk1vekNvbnRlbnRcIixcbiAgXCJXZWJLaXRDb250ZW50XCIsXG4gIFwiTVNDb250ZW50XCIsXG4gIFwiT0NvbnRlbnRcIixcbiAgXCJjb3VudGVySW5jcmVtZW50XCIsXG4gIFwiTW96Q291bnRlckluY3JlbWVudFwiLFxuICBcIldlYktpdENvdW50ZXJJbmNyZW1lbnRcIixcbiAgXCJNU0NvdW50ZXJJbmNyZW1lbnRcIixcbiAgXCJPQ291bnRlckluY3JlbWVudFwiLFxuICBcImNvdW50ZXJSZXNldFwiLFxuICBcIk1vekNvdW50ZXJSZXNldFwiLFxuICBcIldlYktpdENvdW50ZXJSZXNldFwiLFxuICBcIk1TQ291bnRlclJlc2V0XCIsXG4gIFwiT0NvdW50ZXJSZXNldFwiLFxuICBcImN1cnNvclwiLFxuICBcIk1vekN1cnNvclwiLFxuICBcIldlYktpdEN1cnNvclwiLFxuICBcIk1TQ3Vyc29yXCIsXG4gIFwiT0N1cnNvclwiLFxuICBcImRlZ1wiLFxuICBcIk1vekRlZ1wiLFxuICBcIldlYktpdERlZ1wiLFxuICBcIk1TRGVnXCIsXG4gIFwiT0RlZ1wiLFxuICBcImRpcmVjdGlvblwiLFxuICBcIk1vekRpcmVjdGlvblwiLFxuICBcIldlYktpdERpcmVjdGlvblwiLFxuICBcIk1TRGlyZWN0aW9uXCIsXG4gIFwiT0RpcmVjdGlvblwiLFxuICBcImRpc3BsYXlcIixcbiAgXCJNb3pEaXNwbGF5XCIsXG4gIFwiV2ViS2l0RGlzcGxheVwiLFxuICBcIk1TRGlzcGxheVwiLFxuICBcIk9EaXNwbGF5XCIsXG4gIFwiZHBjbVwiLFxuICBcIk1vekRwY21cIixcbiAgXCJXZWJLaXREcGNtXCIsXG4gIFwiTVNEcGNtXCIsXG4gIFwiT0RwY21cIixcbiAgXCJkcGlcIixcbiAgXCJNb3pEcGlcIixcbiAgXCJXZWJLaXREcGlcIixcbiAgXCJNU0RwaVwiLFxuICBcIk9EcGlcIixcbiAgXCJkcHB4XCIsXG4gIFwiTW96RHBweFwiLFxuICBcIldlYktpdERwcHhcIixcbiAgXCJNU0RwcHhcIixcbiAgXCJPRHBweFwiLFxuICBcImVtXCIsXG4gIFwiTW96RW1cIixcbiAgXCJXZWJLaXRFbVwiLFxuICBcIk1TRW1cIixcbiAgXCJPRW1cIixcbiAgXCJlbXB0eUNlbGxzXCIsXG4gIFwiTW96RW1wdHlDZWxsc1wiLFxuICBcIldlYktpdEVtcHR5Q2VsbHNcIixcbiAgXCJNU0VtcHR5Q2VsbHNcIixcbiAgXCJPRW1wdHlDZWxsc1wiLFxuICBcImV4XCIsXG4gIFwiTW96RXhcIixcbiAgXCJXZWJLaXRFeFwiLFxuICBcIk1TRXhcIixcbiAgXCJPRXhcIixcbiAgXCJmaWx0ZXJcIixcbiAgXCJNb3pGaWx0ZXJcIixcbiAgXCJXZWJLaXRGaWx0ZXJcIixcbiAgXCJNU0ZpbHRlclwiLFxuICBcIk9GaWx0ZXJcIixcbiAgXCJmbGV4XCIsXG4gIFwiTW96RmxleFwiLFxuICBcIldlYktpdEZsZXhcIixcbiAgXCJNU0ZsZXhcIixcbiAgXCJPRmxleFwiLFxuICBcImZsZXhCYXNpc1wiLFxuICBcIk1vekZsZXhCYXNpc1wiLFxuICBcIldlYktpdEZsZXhCYXNpc1wiLFxuICBcIk1TRmxleEJhc2lzXCIsXG4gIFwiT0ZsZXhCYXNpc1wiLFxuICBcImZsZXhEaXJlY3Rpb25cIixcbiAgXCJNb3pGbGV4RGlyZWN0aW9uXCIsXG4gIFwiV2ViS2l0RmxleERpcmVjdGlvblwiLFxuICBcIk1TRmxleERpcmVjdGlvblwiLFxuICBcIk9GbGV4RGlyZWN0aW9uXCIsXG4gIFwiZmxleEZsb3dcIixcbiAgXCJNb3pGbGV4Rmxvd1wiLFxuICBcIldlYktpdEZsZXhGbG93XCIsXG4gIFwiTVNGbGV4Rmxvd1wiLFxuICBcIk9GbGV4Rmxvd1wiLFxuICBcImZsZXhHcm93XCIsXG4gIFwiTW96RmxleEdyb3dcIixcbiAgXCJXZWJLaXRGbGV4R3Jvd1wiLFxuICBcIk1TRmxleEdyb3dcIixcbiAgXCJPRmxleEdyb3dcIixcbiAgXCJmbGV4U2hyaW5rXCIsXG4gIFwiTW96RmxleFNocmlua1wiLFxuICBcIldlYktpdEZsZXhTaHJpbmtcIixcbiAgXCJNU0ZsZXhTaHJpbmtcIixcbiAgXCJPRmxleFNocmlua1wiLFxuICBcImZsZXhXcmFwXCIsXG4gIFwiTW96RmxleFdyYXBcIixcbiAgXCJXZWJLaXRGbGV4V3JhcFwiLFxuICBcIk1TRmxleFdyYXBcIixcbiAgXCJPRmxleFdyYXBcIixcbiAgXCJmbG9hdFwiLFxuICBcIk1vekZsb2F0XCIsXG4gIFwiV2ViS2l0RmxvYXRcIixcbiAgXCJNU0Zsb2F0XCIsXG4gIFwiT0Zsb2F0XCIsXG4gIFwiZm9udFwiLFxuICBcIk1vekZvbnRcIixcbiAgXCJXZWJLaXRGb250XCIsXG4gIFwiTVNGb250XCIsXG4gIFwiT0ZvbnRcIixcbiAgXCJmb250RmFtaWx5XCIsXG4gIFwiTW96Rm9udEZhbWlseVwiLFxuICBcIldlYktpdEZvbnRGYW1pbHlcIixcbiAgXCJNU0ZvbnRGYW1pbHlcIixcbiAgXCJPRm9udEZhbWlseVwiLFxuICBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIixcbiAgXCJNb3pGb250RmVhdHVyZVNldHRpbmdzXCIsXG4gIFwiV2ViS2l0Rm9udEZlYXR1cmVTZXR0aW5nc1wiLFxuICBcIk1TRm9udEZlYXR1cmVTZXR0aW5nc1wiLFxuICBcIk9Gb250RmVhdHVyZVNldHRpbmdzXCIsXG4gIFwiZm9udEtlcm5pbmdcIixcbiAgXCJNb3pGb250S2VybmluZ1wiLFxuICBcIldlYktpdEZvbnRLZXJuaW5nXCIsXG4gIFwiTVNGb250S2VybmluZ1wiLFxuICBcIk9Gb250S2VybmluZ1wiLFxuICBcImZvbnRMYW5ndWFnZU92ZXJyaWRlXCIsXG4gIFwiTW96Rm9udExhbmd1YWdlT3ZlcnJpZGVcIixcbiAgXCJXZWJLaXRGb250TGFuZ3VhZ2VPdmVycmlkZVwiLFxuICBcIk1TRm9udExhbmd1YWdlT3ZlcnJpZGVcIixcbiAgXCJPRm9udExhbmd1YWdlT3ZlcnJpZGVcIixcbiAgXCJmb250U2l6ZVwiLFxuICBcIk1vekZvbnRTaXplXCIsXG4gIFwiV2ViS2l0Rm9udFNpemVcIixcbiAgXCJNU0ZvbnRTaXplXCIsXG4gIFwiT0ZvbnRTaXplXCIsXG4gIFwiZm9udFNpemVBZGp1c3RcIixcbiAgXCJNb3pGb250U2l6ZUFkanVzdFwiLFxuICBcIldlYktpdEZvbnRTaXplQWRqdXN0XCIsXG4gIFwiTVNGb250U2l6ZUFkanVzdFwiLFxuICBcIk9Gb250U2l6ZUFkanVzdFwiLFxuICBcImZvbnRTdHJldGNoXCIsXG4gIFwiTW96Rm9udFN0cmV0Y2hcIixcbiAgXCJXZWJLaXRGb250U3RyZXRjaFwiLFxuICBcIk1TRm9udFN0cmV0Y2hcIixcbiAgXCJPRm9udFN0cmV0Y2hcIixcbiAgXCJmb250U3R5bGVcIixcbiAgXCJNb3pGb250U3R5bGVcIixcbiAgXCJXZWJLaXRGb250U3R5bGVcIixcbiAgXCJNU0ZvbnRTdHlsZVwiLFxuICBcIk9Gb250U3R5bGVcIixcbiAgXCJmb250U3ludGhlc2lzXCIsXG4gIFwiTW96Rm9udFN5bnRoZXNpc1wiLFxuICBcIldlYktpdEZvbnRTeW50aGVzaXNcIixcbiAgXCJNU0ZvbnRTeW50aGVzaXNcIixcbiAgXCJPRm9udFN5bnRoZXNpc1wiLFxuICBcImZvbnRWYXJpYW50XCIsXG4gIFwiTW96Rm9udFZhcmlhbnRcIixcbiAgXCJXZWJLaXRGb250VmFyaWFudFwiLFxuICBcIk1TRm9udFZhcmlhbnRcIixcbiAgXCJPRm9udFZhcmlhbnRcIixcbiAgXCJmb250VmFyaWFudEFsdGVybmF0ZXNcIixcbiAgXCJNb3pGb250VmFyaWFudEFsdGVybmF0ZXNcIixcbiAgXCJXZWJLaXRGb250VmFyaWFudEFsdGVybmF0ZXNcIixcbiAgXCJNU0ZvbnRWYXJpYW50QWx0ZXJuYXRlc1wiLFxuICBcIk9Gb250VmFyaWFudEFsdGVybmF0ZXNcIixcbiAgXCJmb250VmFyaWFudENhcHNcIixcbiAgXCJNb3pGb250VmFyaWFudENhcHNcIixcbiAgXCJXZWJLaXRGb250VmFyaWFudENhcHNcIixcbiAgXCJNU0ZvbnRWYXJpYW50Q2Fwc1wiLFxuICBcIk9Gb250VmFyaWFudENhcHNcIixcbiAgXCJmb250VmFyaWFudEVhc3RBc2lhblwiLFxuICBcIk1vekZvbnRWYXJpYW50RWFzdEFzaWFuXCIsXG4gIFwiV2ViS2l0Rm9udFZhcmlhbnRFYXN0QXNpYW5cIixcbiAgXCJNU0ZvbnRWYXJpYW50RWFzdEFzaWFuXCIsXG4gIFwiT0ZvbnRWYXJpYW50RWFzdEFzaWFuXCIsXG4gIFwiZm9udFZhcmlhbnRMaWdhdHVyZXNcIixcbiAgXCJNb3pGb250VmFyaWFudExpZ2F0dXJlc1wiLFxuICBcIldlYktpdEZvbnRWYXJpYW50TGlnYXR1cmVzXCIsXG4gIFwiTVNGb250VmFyaWFudExpZ2F0dXJlc1wiLFxuICBcIk9Gb250VmFyaWFudExpZ2F0dXJlc1wiLFxuICBcImZvbnRWYXJpYW50TnVtZXJpY1wiLFxuICBcIk1vekZvbnRWYXJpYW50TnVtZXJpY1wiLFxuICBcIldlYktpdEZvbnRWYXJpYW50TnVtZXJpY1wiLFxuICBcIk1TRm9udFZhcmlhbnROdW1lcmljXCIsXG4gIFwiT0ZvbnRWYXJpYW50TnVtZXJpY1wiLFxuICBcImZvbnRWYXJpYW50UG9zaXRpb25cIixcbiAgXCJNb3pGb250VmFyaWFudFBvc2l0aW9uXCIsXG4gIFwiV2ViS2l0Rm9udFZhcmlhbnRQb3NpdGlvblwiLFxuICBcIk1TRm9udFZhcmlhbnRQb3NpdGlvblwiLFxuICBcIk9Gb250VmFyaWFudFBvc2l0aW9uXCIsXG4gIFwiZm9udFdlaWdodFwiLFxuICBcIk1vekZvbnRXZWlnaHRcIixcbiAgXCJXZWJLaXRGb250V2VpZ2h0XCIsXG4gIFwiTVNGb250V2VpZ2h0XCIsXG4gIFwiT0ZvbnRXZWlnaHRcIixcbiAgXCJncmFkXCIsXG4gIFwiTW96R3JhZFwiLFxuICBcIldlYktpdEdyYWRcIixcbiAgXCJNU0dyYWRcIixcbiAgXCJPR3JhZFwiLFxuICBcImdyaWRcIixcbiAgXCJNb3pHcmlkXCIsXG4gIFwiV2ViS2l0R3JpZFwiLFxuICBcIk1TR3JpZFwiLFxuICBcIk9HcmlkXCIsXG4gIFwiZ3JpZEFyZWFcIixcbiAgXCJNb3pHcmlkQXJlYVwiLFxuICBcIldlYktpdEdyaWRBcmVhXCIsXG4gIFwiTVNHcmlkQXJlYVwiLFxuICBcIk9HcmlkQXJlYVwiLFxuICBcImdyaWRBdXRvQ29sdW1uc1wiLFxuICBcIk1vekdyaWRBdXRvQ29sdW1uc1wiLFxuICBcIldlYktpdEdyaWRBdXRvQ29sdW1uc1wiLFxuICBcIk1TR3JpZEF1dG9Db2x1bW5zXCIsXG4gIFwiT0dyaWRBdXRvQ29sdW1uc1wiLFxuICBcImdyaWRBdXRvRmxvd1wiLFxuICBcIk1vekdyaWRBdXRvRmxvd1wiLFxuICBcIldlYktpdEdyaWRBdXRvRmxvd1wiLFxuICBcIk1TR3JpZEF1dG9GbG93XCIsXG4gIFwiT0dyaWRBdXRvRmxvd1wiLFxuICBcImdyaWRBdXRvUm93c1wiLFxuICBcIk1vekdyaWRBdXRvUm93c1wiLFxuICBcIldlYktpdEdyaWRBdXRvUm93c1wiLFxuICBcIk1TR3JpZEF1dG9Sb3dzXCIsXG4gIFwiT0dyaWRBdXRvUm93c1wiLFxuICBcImdyaWRDb2x1bW5cIixcbiAgXCJNb3pHcmlkQ29sdW1uXCIsXG4gIFwiV2ViS2l0R3JpZENvbHVtblwiLFxuICBcIk1TR3JpZENvbHVtblwiLFxuICBcIk9HcmlkQ29sdW1uXCIsXG4gIFwiZ3JpZENvbHVtbkVuZFwiLFxuICBcIk1vekdyaWRDb2x1bW5FbmRcIixcbiAgXCJXZWJLaXRHcmlkQ29sdW1uRW5kXCIsXG4gIFwiTVNHcmlkQ29sdW1uRW5kXCIsXG4gIFwiT0dyaWRDb2x1bW5FbmRcIixcbiAgXCJncmlkQ29sdW1uR2FwXCIsXG4gIFwiTW96R3JpZENvbHVtbkdhcFwiLFxuICBcIldlYktpdEdyaWRDb2x1bW5HYXBcIixcbiAgXCJNU0dyaWRDb2x1bW5HYXBcIixcbiAgXCJPR3JpZENvbHVtbkdhcFwiLFxuICBcImdyaWRDb2x1bW5TdGFydFwiLFxuICBcIk1vekdyaWRDb2x1bW5TdGFydFwiLFxuICBcIldlYktpdEdyaWRDb2x1bW5TdGFydFwiLFxuICBcIk1TR3JpZENvbHVtblN0YXJ0XCIsXG4gIFwiT0dyaWRDb2x1bW5TdGFydFwiLFxuICBcImdyaWRHYXBcIixcbiAgXCJNb3pHcmlkR2FwXCIsXG4gIFwiV2ViS2l0R3JpZEdhcFwiLFxuICBcIk1TR3JpZEdhcFwiLFxuICBcIk9HcmlkR2FwXCIsXG4gIFwiZ3JpZFJvd1wiLFxuICBcIk1vekdyaWRSb3dcIixcbiAgXCJXZWJLaXRHcmlkUm93XCIsXG4gIFwiTVNHcmlkUm93XCIsXG4gIFwiT0dyaWRSb3dcIixcbiAgXCJncmlkUm93RW5kXCIsXG4gIFwiTW96R3JpZFJvd0VuZFwiLFxuICBcIldlYktpdEdyaWRSb3dFbmRcIixcbiAgXCJNU0dyaWRSb3dFbmRcIixcbiAgXCJPR3JpZFJvd0VuZFwiLFxuICBcImdyaWRSb3dHYXBcIixcbiAgXCJNb3pHcmlkUm93R2FwXCIsXG4gIFwiV2ViS2l0R3JpZFJvd0dhcFwiLFxuICBcIk1TR3JpZFJvd0dhcFwiLFxuICBcIk9HcmlkUm93R2FwXCIsXG4gIFwiZ3JpZFJvd1N0YXJ0XCIsXG4gIFwiTW96R3JpZFJvd1N0YXJ0XCIsXG4gIFwiV2ViS2l0R3JpZFJvd1N0YXJ0XCIsXG4gIFwiTVNHcmlkUm93U3RhcnRcIixcbiAgXCJPR3JpZFJvd1N0YXJ0XCIsXG4gIFwiZ3JpZFRlbXBsYXRlXCIsXG4gIFwiTW96R3JpZFRlbXBsYXRlXCIsXG4gIFwiV2ViS2l0R3JpZFRlbXBsYXRlXCIsXG4gIFwiTVNHcmlkVGVtcGxhdGVcIixcbiAgXCJPR3JpZFRlbXBsYXRlXCIsXG4gIFwiZ3JpZFRlbXBsYXRlQXJlYXNcIixcbiAgXCJNb3pHcmlkVGVtcGxhdGVBcmVhc1wiLFxuICBcIldlYktpdEdyaWRUZW1wbGF0ZUFyZWFzXCIsXG4gIFwiTVNHcmlkVGVtcGxhdGVBcmVhc1wiLFxuICBcIk9HcmlkVGVtcGxhdGVBcmVhc1wiLFxuICBcImdyaWRUZW1wbGF0ZUNvbHVtbnNcIixcbiAgXCJNb3pHcmlkVGVtcGxhdGVDb2x1bW5zXCIsXG4gIFwiV2ViS2l0R3JpZFRlbXBsYXRlQ29sdW1uc1wiLFxuICBcIk1TR3JpZFRlbXBsYXRlQ29sdW1uc1wiLFxuICBcIk9HcmlkVGVtcGxhdGVDb2x1bW5zXCIsXG4gIFwiZ3JpZFRlbXBsYXRlUm93c1wiLFxuICBcIk1vekdyaWRUZW1wbGF0ZVJvd3NcIixcbiAgXCJXZWJLaXRHcmlkVGVtcGxhdGVSb3dzXCIsXG4gIFwiTVNHcmlkVGVtcGxhdGVSb3dzXCIsXG4gIFwiT0dyaWRUZW1wbGF0ZVJvd3NcIixcbiAgXCJoZWlnaHRcIixcbiAgXCJNb3pIZWlnaHRcIixcbiAgXCJXZWJLaXRIZWlnaHRcIixcbiAgXCJNU0hlaWdodFwiLFxuICBcIk9IZWlnaHRcIixcbiAgXCJoeXBoZW5zXCIsXG4gIFwiTW96SHlwaGVuc1wiLFxuICBcIldlYktpdEh5cGhlbnNcIixcbiAgXCJNU0h5cGhlbnNcIixcbiAgXCJPSHlwaGVuc1wiLFxuICBcImh6XCIsXG4gIFwiTW96SHpcIixcbiAgXCJXZWJLaXRIelwiLFxuICBcIk1TSHpcIixcbiAgXCJPSHpcIixcbiAgXCJpbWFnZU9yaWVudGF0aW9uXCIsXG4gIFwiTW96SW1hZ2VPcmllbnRhdGlvblwiLFxuICBcIldlYktpdEltYWdlT3JpZW50YXRpb25cIixcbiAgXCJNU0ltYWdlT3JpZW50YXRpb25cIixcbiAgXCJPSW1hZ2VPcmllbnRhdGlvblwiLFxuICBcImltYWdlUmVuZGVyaW5nXCIsXG4gIFwiTW96SW1hZ2VSZW5kZXJpbmdcIixcbiAgXCJXZWJLaXRJbWFnZVJlbmRlcmluZ1wiLFxuICBcIk1TSW1hZ2VSZW5kZXJpbmdcIixcbiAgXCJPSW1hZ2VSZW5kZXJpbmdcIixcbiAgXCJpbWFnZVJlc29sdXRpb25cIixcbiAgXCJNb3pJbWFnZVJlc29sdXRpb25cIixcbiAgXCJXZWJLaXRJbWFnZVJlc29sdXRpb25cIixcbiAgXCJNU0ltYWdlUmVzb2x1dGlvblwiLFxuICBcIk9JbWFnZVJlc29sdXRpb25cIixcbiAgXCJpbWVNb2RlXCIsXG4gIFwiTW96SW1lTW9kZVwiLFxuICBcIldlYktpdEltZU1vZGVcIixcbiAgXCJNU0ltZU1vZGVcIixcbiAgXCJPSW1lTW9kZVwiLFxuICBcImluXCIsXG4gIFwiTW96SW5cIixcbiAgXCJXZWJLaXRJblwiLFxuICBcIk1TSW5cIixcbiAgXCJPSW5cIixcbiAgXCJpbmhlcml0XCIsXG4gIFwiTW96SW5oZXJpdFwiLFxuICBcIldlYktpdEluaGVyaXRcIixcbiAgXCJNU0luaGVyaXRcIixcbiAgXCJPSW5oZXJpdFwiLFxuICBcImluaXRpYWxcIixcbiAgXCJNb3pJbml0aWFsXCIsXG4gIFwiV2ViS2l0SW5pdGlhbFwiLFxuICBcIk1TSW5pdGlhbFwiLFxuICBcIk9Jbml0aWFsXCIsXG4gIFwiaW5saW5lU2l6ZVwiLFxuICBcIk1veklubGluZVNpemVcIixcbiAgXCJXZWJLaXRJbmxpbmVTaXplXCIsXG4gIFwiTVNJbmxpbmVTaXplXCIsXG4gIFwiT0lubGluZVNpemVcIixcbiAgXCJpc29sYXRpb25cIixcbiAgXCJNb3pJc29sYXRpb25cIixcbiAgXCJXZWJLaXRJc29sYXRpb25cIixcbiAgXCJNU0lzb2xhdGlvblwiLFxuICBcIk9Jc29sYXRpb25cIixcbiAgXCJqdXN0aWZ5Q29udGVudFwiLFxuICBcIk1vekp1c3RpZnlDb250ZW50XCIsXG4gIFwiV2ViS2l0SnVzdGlmeUNvbnRlbnRcIixcbiAgXCJNU0p1c3RpZnlDb250ZW50XCIsXG4gIFwiT0p1c3RpZnlDb250ZW50XCIsXG4gIFwia2h6XCIsXG4gIFwiTW96S2h6XCIsXG4gIFwiV2ViS2l0S2h6XCIsXG4gIFwiTVNLaHpcIixcbiAgXCJPS2h6XCIsXG4gIFwibGVmdFwiLFxuICBcIk1vekxlZnRcIixcbiAgXCJXZWJLaXRMZWZ0XCIsXG4gIFwiTVNMZWZ0XCIsXG4gIFwiT0xlZnRcIixcbiAgXCJsZXR0ZXJTcGFjaW5nXCIsXG4gIFwiTW96TGV0dGVyU3BhY2luZ1wiLFxuICBcIldlYktpdExldHRlclNwYWNpbmdcIixcbiAgXCJNU0xldHRlclNwYWNpbmdcIixcbiAgXCJPTGV0dGVyU3BhY2luZ1wiLFxuICBcImxpbmVCcmVha1wiLFxuICBcIk1vekxpbmVCcmVha1wiLFxuICBcIldlYktpdExpbmVCcmVha1wiLFxuICBcIk1TTGluZUJyZWFrXCIsXG4gIFwiT0xpbmVCcmVha1wiLFxuICBcImxpbmVIZWlnaHRcIixcbiAgXCJNb3pMaW5lSGVpZ2h0XCIsXG4gIFwiV2ViS2l0TGluZUhlaWdodFwiLFxuICBcIk1TTGluZUhlaWdodFwiLFxuICBcIk9MaW5lSGVpZ2h0XCIsXG4gIFwibGlzdFN0eWxlXCIsXG4gIFwiTW96TGlzdFN0eWxlXCIsXG4gIFwiV2ViS2l0TGlzdFN0eWxlXCIsXG4gIFwiTVNMaXN0U3R5bGVcIixcbiAgXCJPTGlzdFN0eWxlXCIsXG4gIFwibGlzdFN0eWxlSW1hZ2VcIixcbiAgXCJNb3pMaXN0U3R5bGVJbWFnZVwiLFxuICBcIldlYktpdExpc3RTdHlsZUltYWdlXCIsXG4gIFwiTVNMaXN0U3R5bGVJbWFnZVwiLFxuICBcIk9MaXN0U3R5bGVJbWFnZVwiLFxuICBcImxpc3RTdHlsZVBvc2l0aW9uXCIsXG4gIFwiTW96TGlzdFN0eWxlUG9zaXRpb25cIixcbiAgXCJXZWJLaXRMaXN0U3R5bGVQb3NpdGlvblwiLFxuICBcIk1TTGlzdFN0eWxlUG9zaXRpb25cIixcbiAgXCJPTGlzdFN0eWxlUG9zaXRpb25cIixcbiAgXCJsaXN0U3R5bGVUeXBlXCIsXG4gIFwiTW96TGlzdFN0eWxlVHlwZVwiLFxuICBcIldlYktpdExpc3RTdHlsZVR5cGVcIixcbiAgXCJNU0xpc3RTdHlsZVR5cGVcIixcbiAgXCJPTGlzdFN0eWxlVHlwZVwiLFxuICBcIm1hcmdpblwiLFxuICBcIk1vek1hcmdpblwiLFxuICBcIldlYktpdE1hcmdpblwiLFxuICBcIk1TTWFyZ2luXCIsXG4gIFwiT01hcmdpblwiLFxuICBcIm1hcmdpbkJsb2NrRW5kXCIsXG4gIFwiTW96TWFyZ2luQmxvY2tFbmRcIixcbiAgXCJXZWJLaXRNYXJnaW5CbG9ja0VuZFwiLFxuICBcIk1TTWFyZ2luQmxvY2tFbmRcIixcbiAgXCJPTWFyZ2luQmxvY2tFbmRcIixcbiAgXCJtYXJnaW5CbG9ja1N0YXJ0XCIsXG4gIFwiTW96TWFyZ2luQmxvY2tTdGFydFwiLFxuICBcIldlYktpdE1hcmdpbkJsb2NrU3RhcnRcIixcbiAgXCJNU01hcmdpbkJsb2NrU3RhcnRcIixcbiAgXCJPTWFyZ2luQmxvY2tTdGFydFwiLFxuICBcIm1hcmdpbkJvdHRvbVwiLFxuICBcIk1vek1hcmdpbkJvdHRvbVwiLFxuICBcIldlYktpdE1hcmdpbkJvdHRvbVwiLFxuICBcIk1TTWFyZ2luQm90dG9tXCIsXG4gIFwiT01hcmdpbkJvdHRvbVwiLFxuICBcIm1hcmdpbklubGluZUVuZFwiLFxuICBcIk1vek1hcmdpbklubGluZUVuZFwiLFxuICBcIldlYktpdE1hcmdpbklubGluZUVuZFwiLFxuICBcIk1TTWFyZ2luSW5saW5lRW5kXCIsXG4gIFwiT01hcmdpbklubGluZUVuZFwiLFxuICBcIm1hcmdpbklubGluZVN0YXJ0XCIsXG4gIFwiTW96TWFyZ2luSW5saW5lU3RhcnRcIixcbiAgXCJXZWJLaXRNYXJnaW5JbmxpbmVTdGFydFwiLFxuICBcIk1TTWFyZ2luSW5saW5lU3RhcnRcIixcbiAgXCJPTWFyZ2luSW5saW5lU3RhcnRcIixcbiAgXCJtYXJnaW5MZWZ0XCIsXG4gIFwiTW96TWFyZ2luTGVmdFwiLFxuICBcIldlYktpdE1hcmdpbkxlZnRcIixcbiAgXCJNU01hcmdpbkxlZnRcIixcbiAgXCJPTWFyZ2luTGVmdFwiLFxuICBcIm1hcmdpblJpZ2h0XCIsXG4gIFwiTW96TWFyZ2luUmlnaHRcIixcbiAgXCJXZWJLaXRNYXJnaW5SaWdodFwiLFxuICBcIk1TTWFyZ2luUmlnaHRcIixcbiAgXCJPTWFyZ2luUmlnaHRcIixcbiAgXCJtYXJnaW5Ub3BcIixcbiAgXCJNb3pNYXJnaW5Ub3BcIixcbiAgXCJXZWJLaXRNYXJnaW5Ub3BcIixcbiAgXCJNU01hcmdpblRvcFwiLFxuICBcIk9NYXJnaW5Ub3BcIixcbiAgXCJtYXNrXCIsXG4gIFwiTW96TWFza1wiLFxuICBcIldlYktpdE1hc2tcIixcbiAgXCJNU01hc2tcIixcbiAgXCJPTWFza1wiLFxuICBcIm1hc2tDbGlwXCIsXG4gIFwiTW96TWFza0NsaXBcIixcbiAgXCJXZWJLaXRNYXNrQ2xpcFwiLFxuICBcIk1TTWFza0NsaXBcIixcbiAgXCJPTWFza0NsaXBcIixcbiAgXCJtYXNrQ29tcG9zaXRlXCIsXG4gIFwiTW96TWFza0NvbXBvc2l0ZVwiLFxuICBcIldlYktpdE1hc2tDb21wb3NpdGVcIixcbiAgXCJNU01hc2tDb21wb3NpdGVcIixcbiAgXCJPTWFza0NvbXBvc2l0ZVwiLFxuICBcIm1hc2tJbWFnZVwiLFxuICBcIk1vek1hc2tJbWFnZVwiLFxuICBcIldlYktpdE1hc2tJbWFnZVwiLFxuICBcIk1TTWFza0ltYWdlXCIsXG4gIFwiT01hc2tJbWFnZVwiLFxuICBcIm1hc2tNb2RlXCIsXG4gIFwiTW96TWFza01vZGVcIixcbiAgXCJXZWJLaXRNYXNrTW9kZVwiLFxuICBcIk1TTWFza01vZGVcIixcbiAgXCJPTWFza01vZGVcIixcbiAgXCJtYXNrT3JpZ2luXCIsXG4gIFwiTW96TWFza09yaWdpblwiLFxuICBcIldlYktpdE1hc2tPcmlnaW5cIixcbiAgXCJNU01hc2tPcmlnaW5cIixcbiAgXCJPTWFza09yaWdpblwiLFxuICBcIm1hc2tQb3NpdGlvblwiLFxuICBcIk1vek1hc2tQb3NpdGlvblwiLFxuICBcIldlYktpdE1hc2tQb3NpdGlvblwiLFxuICBcIk1TTWFza1Bvc2l0aW9uXCIsXG4gIFwiT01hc2tQb3NpdGlvblwiLFxuICBcIm1hc2tSZXBlYXRcIixcbiAgXCJNb3pNYXNrUmVwZWF0XCIsXG4gIFwiV2ViS2l0TWFza1JlcGVhdFwiLFxuICBcIk1TTWFza1JlcGVhdFwiLFxuICBcIk9NYXNrUmVwZWF0XCIsXG4gIFwibWFza1NpemVcIixcbiAgXCJNb3pNYXNrU2l6ZVwiLFxuICBcIldlYktpdE1hc2tTaXplXCIsXG4gIFwiTVNNYXNrU2l6ZVwiLFxuICBcIk9NYXNrU2l6ZVwiLFxuICBcIm1hc2tUeXBlXCIsXG4gIFwiTW96TWFza1R5cGVcIixcbiAgXCJXZWJLaXRNYXNrVHlwZVwiLFxuICBcIk1TTWFza1R5cGVcIixcbiAgXCJPTWFza1R5cGVcIixcbiAgXCJtYXhCbG9ja1NpemVcIixcbiAgXCJNb3pNYXhCbG9ja1NpemVcIixcbiAgXCJXZWJLaXRNYXhCbG9ja1NpemVcIixcbiAgXCJNU01heEJsb2NrU2l6ZVwiLFxuICBcIk9NYXhCbG9ja1NpemVcIixcbiAgXCJtYXhIZWlnaHRcIixcbiAgXCJNb3pNYXhIZWlnaHRcIixcbiAgXCJXZWJLaXRNYXhIZWlnaHRcIixcbiAgXCJNU01heEhlaWdodFwiLFxuICBcIk9NYXhIZWlnaHRcIixcbiAgXCJtYXhJbmxpbmVTaXplXCIsXG4gIFwiTW96TWF4SW5saW5lU2l6ZVwiLFxuICBcIldlYktpdE1heElubGluZVNpemVcIixcbiAgXCJNU01heElubGluZVNpemVcIixcbiAgXCJPTWF4SW5saW5lU2l6ZVwiLFxuICBcIm1heFdpZHRoXCIsXG4gIFwiTW96TWF4V2lkdGhcIixcbiAgXCJXZWJLaXRNYXhXaWR0aFwiLFxuICBcIk1TTWF4V2lkdGhcIixcbiAgXCJPTWF4V2lkdGhcIixcbiAgXCJtaW5CbG9ja1NpemVcIixcbiAgXCJNb3pNaW5CbG9ja1NpemVcIixcbiAgXCJXZWJLaXRNaW5CbG9ja1NpemVcIixcbiAgXCJNU01pbkJsb2NrU2l6ZVwiLFxuICBcIk9NaW5CbG9ja1NpemVcIixcbiAgXCJtaW5IZWlnaHRcIixcbiAgXCJNb3pNaW5IZWlnaHRcIixcbiAgXCJXZWJLaXRNaW5IZWlnaHRcIixcbiAgXCJNU01pbkhlaWdodFwiLFxuICBcIk9NaW5IZWlnaHRcIixcbiAgXCJtaW5JbmxpbmVTaXplXCIsXG4gIFwiTW96TWluSW5saW5lU2l6ZVwiLFxuICBcIldlYktpdE1pbklubGluZVNpemVcIixcbiAgXCJNU01pbklubGluZVNpemVcIixcbiAgXCJPTWluSW5saW5lU2l6ZVwiLFxuICBcIm1pbldpZHRoXCIsXG4gIFwiTW96TWluV2lkdGhcIixcbiAgXCJXZWJLaXRNaW5XaWR0aFwiLFxuICBcIk1TTWluV2lkdGhcIixcbiAgXCJPTWluV2lkdGhcIixcbiAgXCJtaXhCbGVuZE1vZGVcIixcbiAgXCJNb3pNaXhCbGVuZE1vZGVcIixcbiAgXCJXZWJLaXRNaXhCbGVuZE1vZGVcIixcbiAgXCJNU01peEJsZW5kTW9kZVwiLFxuICBcIk9NaXhCbGVuZE1vZGVcIixcbiAgXCJtbVwiLFxuICBcIk1vek1tXCIsXG4gIFwiV2ViS2l0TW1cIixcbiAgXCJNU01tXCIsXG4gIFwiT01tXCIsXG4gIFwibXNcIixcbiAgXCJNb3pNc1wiLFxuICBcIldlYktpdE1zXCIsXG4gIFwiTVNNc1wiLFxuICBcIk9Nc1wiLFxuICBcIm9iamVjdEZpdFwiLFxuICBcIk1vek9iamVjdEZpdFwiLFxuICBcIldlYktpdE9iamVjdEZpdFwiLFxuICBcIk1TT2JqZWN0Rml0XCIsXG4gIFwiT09iamVjdEZpdFwiLFxuICBcIm9iamVjdFBvc2l0aW9uXCIsXG4gIFwiTW96T2JqZWN0UG9zaXRpb25cIixcbiAgXCJXZWJLaXRPYmplY3RQb3NpdGlvblwiLFxuICBcIk1TT2JqZWN0UG9zaXRpb25cIixcbiAgXCJPT2JqZWN0UG9zaXRpb25cIixcbiAgXCJvZmZzZXRCbG9ja0VuZFwiLFxuICBcIk1vek9mZnNldEJsb2NrRW5kXCIsXG4gIFwiV2ViS2l0T2Zmc2V0QmxvY2tFbmRcIixcbiAgXCJNU09mZnNldEJsb2NrRW5kXCIsXG4gIFwiT09mZnNldEJsb2NrRW5kXCIsXG4gIFwib2Zmc2V0QmxvY2tTdGFydFwiLFxuICBcIk1vek9mZnNldEJsb2NrU3RhcnRcIixcbiAgXCJXZWJLaXRPZmZzZXRCbG9ja1N0YXJ0XCIsXG4gIFwiTVNPZmZzZXRCbG9ja1N0YXJ0XCIsXG4gIFwiT09mZnNldEJsb2NrU3RhcnRcIixcbiAgXCJvZmZzZXRJbmxpbmVFbmRcIixcbiAgXCJNb3pPZmZzZXRJbmxpbmVFbmRcIixcbiAgXCJXZWJLaXRPZmZzZXRJbmxpbmVFbmRcIixcbiAgXCJNU09mZnNldElubGluZUVuZFwiLFxuICBcIk9PZmZzZXRJbmxpbmVFbmRcIixcbiAgXCJvZmZzZXRJbmxpbmVTdGFydFwiLFxuICBcIk1vek9mZnNldElubGluZVN0YXJ0XCIsXG4gIFwiV2ViS2l0T2Zmc2V0SW5saW5lU3RhcnRcIixcbiAgXCJNU09mZnNldElubGluZVN0YXJ0XCIsXG4gIFwiT09mZnNldElubGluZVN0YXJ0XCIsXG4gIFwib3BhY2l0eVwiLFxuICBcIk1vek9wYWNpdHlcIixcbiAgXCJXZWJLaXRPcGFjaXR5XCIsXG4gIFwiTVNPcGFjaXR5XCIsXG4gIFwiT09wYWNpdHlcIixcbiAgXCJvcmRlclwiLFxuICBcIk1vek9yZGVyXCIsXG4gIFwiV2ViS2l0T3JkZXJcIixcbiAgXCJNU09yZGVyXCIsXG4gIFwiT09yZGVyXCIsXG4gIFwib3JwaGFuc1wiLFxuICBcIk1vek9ycGhhbnNcIixcbiAgXCJXZWJLaXRPcnBoYW5zXCIsXG4gIFwiTVNPcnBoYW5zXCIsXG4gIFwiT09ycGhhbnNcIixcbiAgXCJvdXRsaW5lXCIsXG4gIFwiTW96T3V0bGluZVwiLFxuICBcIldlYktpdE91dGxpbmVcIixcbiAgXCJNU091dGxpbmVcIixcbiAgXCJPT3V0bGluZVwiLFxuICBcIm91dGxpbmVDb2xvclwiLFxuICBcIk1vek91dGxpbmVDb2xvclwiLFxuICBcIldlYktpdE91dGxpbmVDb2xvclwiLFxuICBcIk1TT3V0bGluZUNvbG9yXCIsXG4gIFwiT091dGxpbmVDb2xvclwiLFxuICBcIm91dGxpbmVPZmZzZXRcIixcbiAgXCJNb3pPdXRsaW5lT2Zmc2V0XCIsXG4gIFwiV2ViS2l0T3V0bGluZU9mZnNldFwiLFxuICBcIk1TT3V0bGluZU9mZnNldFwiLFxuICBcIk9PdXRsaW5lT2Zmc2V0XCIsXG4gIFwib3V0bGluZVN0eWxlXCIsXG4gIFwiTW96T3V0bGluZVN0eWxlXCIsXG4gIFwiV2ViS2l0T3V0bGluZVN0eWxlXCIsXG4gIFwiTVNPdXRsaW5lU3R5bGVcIixcbiAgXCJPT3V0bGluZVN0eWxlXCIsXG4gIFwib3V0bGluZVdpZHRoXCIsXG4gIFwiTW96T3V0bGluZVdpZHRoXCIsXG4gIFwiV2ViS2l0T3V0bGluZVdpZHRoXCIsXG4gIFwiTVNPdXRsaW5lV2lkdGhcIixcbiAgXCJPT3V0bGluZVdpZHRoXCIsXG4gIFwib3ZlcmZsb3dcIixcbiAgXCJNb3pPdmVyZmxvd1wiLFxuICBcIldlYktpdE92ZXJmbG93XCIsXG4gIFwiTVNPdmVyZmxvd1wiLFxuICBcIk9PdmVyZmxvd1wiLFxuICBcIm92ZXJmbG93V3JhcFwiLFxuICBcIk1vek92ZXJmbG93V3JhcFwiLFxuICBcIldlYktpdE92ZXJmbG93V3JhcFwiLFxuICBcIk1TT3ZlcmZsb3dXcmFwXCIsXG4gIFwiT092ZXJmbG93V3JhcFwiLFxuICBcIm92ZXJmbG93WFwiLFxuICBcIk1vek92ZXJmbG93WFwiLFxuICBcIldlYktpdE92ZXJmbG93WFwiLFxuICBcIk1TT3ZlcmZsb3dYXCIsXG4gIFwiT092ZXJmbG93WFwiLFxuICBcIm92ZXJmbG93WVwiLFxuICBcIk1vek92ZXJmbG93WVwiLFxuICBcIldlYktpdE92ZXJmbG93WVwiLFxuICBcIk1TT3ZlcmZsb3dZXCIsXG4gIFwiT092ZXJmbG93WVwiLFxuICBcInBhZGRpbmdcIixcbiAgXCJNb3pQYWRkaW5nXCIsXG4gIFwiV2ViS2l0UGFkZGluZ1wiLFxuICBcIk1TUGFkZGluZ1wiLFxuICBcIk9QYWRkaW5nXCIsXG4gIFwicGFkZGluZ0Jsb2NrRW5kXCIsXG4gIFwiTW96UGFkZGluZ0Jsb2NrRW5kXCIsXG4gIFwiV2ViS2l0UGFkZGluZ0Jsb2NrRW5kXCIsXG4gIFwiTVNQYWRkaW5nQmxvY2tFbmRcIixcbiAgXCJPUGFkZGluZ0Jsb2NrRW5kXCIsXG4gIFwicGFkZGluZ0Jsb2NrU3RhcnRcIixcbiAgXCJNb3pQYWRkaW5nQmxvY2tTdGFydFwiLFxuICBcIldlYktpdFBhZGRpbmdCbG9ja1N0YXJ0XCIsXG4gIFwiTVNQYWRkaW5nQmxvY2tTdGFydFwiLFxuICBcIk9QYWRkaW5nQmxvY2tTdGFydFwiLFxuICBcInBhZGRpbmdCb3R0b21cIixcbiAgXCJNb3pQYWRkaW5nQm90dG9tXCIsXG4gIFwiV2ViS2l0UGFkZGluZ0JvdHRvbVwiLFxuICBcIk1TUGFkZGluZ0JvdHRvbVwiLFxuICBcIk9QYWRkaW5nQm90dG9tXCIsXG4gIFwicGFkZGluZ0lubGluZUVuZFwiLFxuICBcIk1velBhZGRpbmdJbmxpbmVFbmRcIixcbiAgXCJXZWJLaXRQYWRkaW5nSW5saW5lRW5kXCIsXG4gIFwiTVNQYWRkaW5nSW5saW5lRW5kXCIsXG4gIFwiT1BhZGRpbmdJbmxpbmVFbmRcIixcbiAgXCJwYWRkaW5nSW5saW5lU3RhcnRcIixcbiAgXCJNb3pQYWRkaW5nSW5saW5lU3RhcnRcIixcbiAgXCJXZWJLaXRQYWRkaW5nSW5saW5lU3RhcnRcIixcbiAgXCJNU1BhZGRpbmdJbmxpbmVTdGFydFwiLFxuICBcIk9QYWRkaW5nSW5saW5lU3RhcnRcIixcbiAgXCJwYWRkaW5nTGVmdFwiLFxuICBcIk1velBhZGRpbmdMZWZ0XCIsXG4gIFwiV2ViS2l0UGFkZGluZ0xlZnRcIixcbiAgXCJNU1BhZGRpbmdMZWZ0XCIsXG4gIFwiT1BhZGRpbmdMZWZ0XCIsXG4gIFwicGFkZGluZ1JpZ2h0XCIsXG4gIFwiTW96UGFkZGluZ1JpZ2h0XCIsXG4gIFwiV2ViS2l0UGFkZGluZ1JpZ2h0XCIsXG4gIFwiTVNQYWRkaW5nUmlnaHRcIixcbiAgXCJPUGFkZGluZ1JpZ2h0XCIsXG4gIFwicGFkZGluZ1RvcFwiLFxuICBcIk1velBhZGRpbmdUb3BcIixcbiAgXCJXZWJLaXRQYWRkaW5nVG9wXCIsXG4gIFwiTVNQYWRkaW5nVG9wXCIsXG4gIFwiT1BhZGRpbmdUb3BcIixcbiAgXCJwYWdlQnJlYWtBZnRlclwiLFxuICBcIk1velBhZ2VCcmVha0FmdGVyXCIsXG4gIFwiV2ViS2l0UGFnZUJyZWFrQWZ0ZXJcIixcbiAgXCJNU1BhZ2VCcmVha0FmdGVyXCIsXG4gIFwiT1BhZ2VCcmVha0FmdGVyXCIsXG4gIFwicGFnZUJyZWFrQmVmb3JlXCIsXG4gIFwiTW96UGFnZUJyZWFrQmVmb3JlXCIsXG4gIFwiV2ViS2l0UGFnZUJyZWFrQmVmb3JlXCIsXG4gIFwiTVNQYWdlQnJlYWtCZWZvcmVcIixcbiAgXCJPUGFnZUJyZWFrQmVmb3JlXCIsXG4gIFwicGFnZUJyZWFrSW5zaWRlXCIsXG4gIFwiTW96UGFnZUJyZWFrSW5zaWRlXCIsXG4gIFwiV2ViS2l0UGFnZUJyZWFrSW5zaWRlXCIsXG4gIFwiTVNQYWdlQnJlYWtJbnNpZGVcIixcbiAgXCJPUGFnZUJyZWFrSW5zaWRlXCIsXG4gIFwicGNcIixcbiAgXCJNb3pQY1wiLFxuICBcIldlYktpdFBjXCIsXG4gIFwiTVNQY1wiLFxuICBcIk9QY1wiLFxuICBcInBlcnNwZWN0aXZlXCIsXG4gIFwiTW96UGVyc3BlY3RpdmVcIixcbiAgXCJXZWJLaXRQZXJzcGVjdGl2ZVwiLFxuICBcIk1TUGVyc3BlY3RpdmVcIixcbiAgXCJPUGVyc3BlY3RpdmVcIixcbiAgXCJwZXJzcGVjdGl2ZU9yaWdpblwiLFxuICBcIk1velBlcnNwZWN0aXZlT3JpZ2luXCIsXG4gIFwiV2ViS2l0UGVyc3BlY3RpdmVPcmlnaW5cIixcbiAgXCJNU1BlcnNwZWN0aXZlT3JpZ2luXCIsXG4gIFwiT1BlcnNwZWN0aXZlT3JpZ2luXCIsXG4gIFwicG9pbnRlckV2ZW50c1wiLFxuICBcIk1velBvaW50ZXJFdmVudHNcIixcbiAgXCJXZWJLaXRQb2ludGVyRXZlbnRzXCIsXG4gIFwiTVNQb2ludGVyRXZlbnRzXCIsXG4gIFwiT1BvaW50ZXJFdmVudHNcIixcbiAgXCJwb3NpdGlvblwiLFxuICBcIk1velBvc2l0aW9uXCIsXG4gIFwiV2ViS2l0UG9zaXRpb25cIixcbiAgXCJNU1Bvc2l0aW9uXCIsXG4gIFwiT1Bvc2l0aW9uXCIsXG4gIFwicHRcIixcbiAgXCJNb3pQdFwiLFxuICBcIldlYktpdFB0XCIsXG4gIFwiTVNQdFwiLFxuICBcIk9QdFwiLFxuICBcInB4XCIsXG4gIFwiTW96UHhcIixcbiAgXCJXZWJLaXRQeFwiLFxuICBcIk1TUHhcIixcbiAgXCJPUHhcIixcbiAgXCJxXCIsXG4gIFwiTW96UVwiLFxuICBcIldlYktpdFFcIixcbiAgXCJNU1FcIixcbiAgXCJPUVwiLFxuICBcInF1b3Rlc1wiLFxuICBcIk1velF1b3Rlc1wiLFxuICBcIldlYktpdFF1b3Rlc1wiLFxuICBcIk1TUXVvdGVzXCIsXG4gIFwiT1F1b3Rlc1wiLFxuICBcInJhZFwiLFxuICBcIk1velJhZFwiLFxuICBcIldlYktpdFJhZFwiLFxuICBcIk1TUmFkXCIsXG4gIFwiT1JhZFwiLFxuICBcInJlbVwiLFxuICBcIk1velJlbVwiLFxuICBcIldlYktpdFJlbVwiLFxuICBcIk1TUmVtXCIsXG4gIFwiT1JlbVwiLFxuICBcInJlc2l6ZVwiLFxuICBcIk1velJlc2l6ZVwiLFxuICBcIldlYktpdFJlc2l6ZVwiLFxuICBcIk1TUmVzaXplXCIsXG4gIFwiT1Jlc2l6ZVwiLFxuICBcInJldmVydFwiLFxuICBcIk1velJldmVydFwiLFxuICBcIldlYktpdFJldmVydFwiLFxuICBcIk1TUmV2ZXJ0XCIsXG4gIFwiT1JldmVydFwiLFxuICBcInJpZ2h0XCIsXG4gIFwiTW96UmlnaHRcIixcbiAgXCJXZWJLaXRSaWdodFwiLFxuICBcIk1TUmlnaHRcIixcbiAgXCJPUmlnaHRcIixcbiAgXCJydWJ5QWxpZ25cIixcbiAgXCJNb3pSdWJ5QWxpZ25cIixcbiAgXCJXZWJLaXRSdWJ5QWxpZ25cIixcbiAgXCJNU1J1YnlBbGlnblwiLFxuICBcIk9SdWJ5QWxpZ25cIixcbiAgXCJydWJ5TWVyZ2VcIixcbiAgXCJNb3pSdWJ5TWVyZ2VcIixcbiAgXCJXZWJLaXRSdWJ5TWVyZ2VcIixcbiAgXCJNU1J1YnlNZXJnZVwiLFxuICBcIk9SdWJ5TWVyZ2VcIixcbiAgXCJydWJ5UG9zaXRpb25cIixcbiAgXCJNb3pSdWJ5UG9zaXRpb25cIixcbiAgXCJXZWJLaXRSdWJ5UG9zaXRpb25cIixcbiAgXCJNU1J1YnlQb3NpdGlvblwiLFxuICBcIk9SdWJ5UG9zaXRpb25cIixcbiAgXCJzXCIsXG4gIFwiTW96U1wiLFxuICBcIldlYktpdFNcIixcbiAgXCJNU1NcIixcbiAgXCJPU1wiLFxuICBcInNjcm9sbEJlaGF2aW9yXCIsXG4gIFwiTW96U2Nyb2xsQmVoYXZpb3JcIixcbiAgXCJXZWJLaXRTY3JvbGxCZWhhdmlvclwiLFxuICBcIk1TU2Nyb2xsQmVoYXZpb3JcIixcbiAgXCJPU2Nyb2xsQmVoYXZpb3JcIixcbiAgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiLFxuICBcIk1velNjcm9sbFNuYXBDb29yZGluYXRlXCIsXG4gIFwiV2ViS2l0U2Nyb2xsU25hcENvb3JkaW5hdGVcIixcbiAgXCJNU1Njcm9sbFNuYXBDb29yZGluYXRlXCIsXG4gIFwiT1Njcm9sbFNuYXBDb29yZGluYXRlXCIsXG4gIFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCIsXG4gIFwiTW96U2Nyb2xsU25hcERlc3RpbmF0aW9uXCIsXG4gIFwiV2ViS2l0U2Nyb2xsU25hcERlc3RpbmF0aW9uXCIsXG4gIFwiTVNTY3JvbGxTbmFwRGVzdGluYXRpb25cIixcbiAgXCJPU2Nyb2xsU25hcERlc3RpbmF0aW9uXCIsXG4gIFwic2Nyb2xsU25hcFR5cGVcIixcbiAgXCJNb3pTY3JvbGxTbmFwVHlwZVwiLFxuICBcIldlYktpdFNjcm9sbFNuYXBUeXBlXCIsXG4gIFwiTVNTY3JvbGxTbmFwVHlwZVwiLFxuICBcIk9TY3JvbGxTbmFwVHlwZVwiLFxuICBcInNoYXBlSW1hZ2VUaHJlc2hvbGRcIixcbiAgXCJNb3pTaGFwZUltYWdlVGhyZXNob2xkXCIsXG4gIFwiV2ViS2l0U2hhcGVJbWFnZVRocmVzaG9sZFwiLFxuICBcIk1TU2hhcGVJbWFnZVRocmVzaG9sZFwiLFxuICBcIk9TaGFwZUltYWdlVGhyZXNob2xkXCIsXG4gIFwic2hhcGVNYXJnaW5cIixcbiAgXCJNb3pTaGFwZU1hcmdpblwiLFxuICBcIldlYktpdFNoYXBlTWFyZ2luXCIsXG4gIFwiTVNTaGFwZU1hcmdpblwiLFxuICBcIk9TaGFwZU1hcmdpblwiLFxuICBcInNoYXBlT3V0c2lkZVwiLFxuICBcIk1velNoYXBlT3V0c2lkZVwiLFxuICBcIldlYktpdFNoYXBlT3V0c2lkZVwiLFxuICBcIk1TU2hhcGVPdXRzaWRlXCIsXG4gIFwiT1NoYXBlT3V0c2lkZVwiLFxuICBcInRhYlNpemVcIixcbiAgXCJNb3pUYWJTaXplXCIsXG4gIFwiV2ViS2l0VGFiU2l6ZVwiLFxuICBcIk1TVGFiU2l6ZVwiLFxuICBcIk9UYWJTaXplXCIsXG4gIFwidGFibGVMYXlvdXRcIixcbiAgXCJNb3pUYWJsZUxheW91dFwiLFxuICBcIldlYktpdFRhYmxlTGF5b3V0XCIsXG4gIFwiTVNUYWJsZUxheW91dFwiLFxuICBcIk9UYWJsZUxheW91dFwiLFxuICBcInRleHRBbGlnblwiLFxuICBcIk1velRleHRBbGlnblwiLFxuICBcIldlYktpdFRleHRBbGlnblwiLFxuICBcIk1TVGV4dEFsaWduXCIsXG4gIFwiT1RleHRBbGlnblwiLFxuICBcInRleHRBbGlnbkxhc3RcIixcbiAgXCJNb3pUZXh0QWxpZ25MYXN0XCIsXG4gIFwiV2ViS2l0VGV4dEFsaWduTGFzdFwiLFxuICBcIk1TVGV4dEFsaWduTGFzdFwiLFxuICBcIk9UZXh0QWxpZ25MYXN0XCIsXG4gIFwidGV4dENvbWJpbmVVcHJpZ2h0XCIsXG4gIFwiTW96VGV4dENvbWJpbmVVcHJpZ2h0XCIsXG4gIFwiV2ViS2l0VGV4dENvbWJpbmVVcHJpZ2h0XCIsXG4gIFwiTVNUZXh0Q29tYmluZVVwcmlnaHRcIixcbiAgXCJPVGV4dENvbWJpbmVVcHJpZ2h0XCIsXG4gIFwidGV4dERlY29yYXRpb25cIixcbiAgXCJNb3pUZXh0RGVjb3JhdGlvblwiLFxuICBcIldlYktpdFRleHREZWNvcmF0aW9uXCIsXG4gIFwiTVNUZXh0RGVjb3JhdGlvblwiLFxuICBcIk9UZXh0RGVjb3JhdGlvblwiLFxuICBcInRleHREZWNvcmF0aW9uQ29sb3JcIixcbiAgXCJNb3pUZXh0RGVjb3JhdGlvbkNvbG9yXCIsXG4gIFwiV2ViS2l0VGV4dERlY29yYXRpb25Db2xvclwiLFxuICBcIk1TVGV4dERlY29yYXRpb25Db2xvclwiLFxuICBcIk9UZXh0RGVjb3JhdGlvbkNvbG9yXCIsXG4gIFwidGV4dERlY29yYXRpb25MaW5lXCIsXG4gIFwiTW96VGV4dERlY29yYXRpb25MaW5lXCIsXG4gIFwiV2ViS2l0VGV4dERlY29yYXRpb25MaW5lXCIsXG4gIFwiTVNUZXh0RGVjb3JhdGlvbkxpbmVcIixcbiAgXCJPVGV4dERlY29yYXRpb25MaW5lXCIsXG4gIFwidGV4dERlY29yYXRpb25TdHlsZVwiLFxuICBcIk1velRleHREZWNvcmF0aW9uU3R5bGVcIixcbiAgXCJXZWJLaXRUZXh0RGVjb3JhdGlvblN0eWxlXCIsXG4gIFwiTVNUZXh0RGVjb3JhdGlvblN0eWxlXCIsXG4gIFwiT1RleHREZWNvcmF0aW9uU3R5bGVcIixcbiAgXCJ0ZXh0RW1waGFzaXNcIixcbiAgXCJNb3pUZXh0RW1waGFzaXNcIixcbiAgXCJXZWJLaXRUZXh0RW1waGFzaXNcIixcbiAgXCJNU1RleHRFbXBoYXNpc1wiLFxuICBcIk9UZXh0RW1waGFzaXNcIixcbiAgXCJ0ZXh0RW1waGFzaXNDb2xvclwiLFxuICBcIk1velRleHRFbXBoYXNpc0NvbG9yXCIsXG4gIFwiV2ViS2l0VGV4dEVtcGhhc2lzQ29sb3JcIixcbiAgXCJNU1RleHRFbXBoYXNpc0NvbG9yXCIsXG4gIFwiT1RleHRFbXBoYXNpc0NvbG9yXCIsXG4gIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIixcbiAgXCJNb3pUZXh0RW1waGFzaXNQb3NpdGlvblwiLFxuICBcIldlYktpdFRleHRFbXBoYXNpc1Bvc2l0aW9uXCIsXG4gIFwiTVNUZXh0RW1waGFzaXNQb3NpdGlvblwiLFxuICBcIk9UZXh0RW1waGFzaXNQb3NpdGlvblwiLFxuICBcInRleHRFbXBoYXNpc1N0eWxlXCIsXG4gIFwiTW96VGV4dEVtcGhhc2lzU3R5bGVcIixcbiAgXCJXZWJLaXRUZXh0RW1waGFzaXNTdHlsZVwiLFxuICBcIk1TVGV4dEVtcGhhc2lzU3R5bGVcIixcbiAgXCJPVGV4dEVtcGhhc2lzU3R5bGVcIixcbiAgXCJ0ZXh0SW5kZW50XCIsXG4gIFwiTW96VGV4dEluZGVudFwiLFxuICBcIldlYktpdFRleHRJbmRlbnRcIixcbiAgXCJNU1RleHRJbmRlbnRcIixcbiAgXCJPVGV4dEluZGVudFwiLFxuICBcInRleHRPcmllbnRhdGlvblwiLFxuICBcIk1velRleHRPcmllbnRhdGlvblwiLFxuICBcIldlYktpdFRleHRPcmllbnRhdGlvblwiLFxuICBcIk1TVGV4dE9yaWVudGF0aW9uXCIsXG4gIFwiT1RleHRPcmllbnRhdGlvblwiLFxuICBcInRleHRPdmVyZmxvd1wiLFxuICBcIk1velRleHRPdmVyZmxvd1wiLFxuICBcIldlYktpdFRleHRPdmVyZmxvd1wiLFxuICBcIk1TVGV4dE92ZXJmbG93XCIsXG4gIFwiT1RleHRPdmVyZmxvd1wiLFxuICBcInRleHRSZW5kZXJpbmdcIixcbiAgXCJNb3pUZXh0UmVuZGVyaW5nXCIsXG4gIFwiV2ViS2l0VGV4dFJlbmRlcmluZ1wiLFxuICBcIk1TVGV4dFJlbmRlcmluZ1wiLFxuICBcIk9UZXh0UmVuZGVyaW5nXCIsXG4gIFwidGV4dFNoYWRvd1wiLFxuICBcIk1velRleHRTaGFkb3dcIixcbiAgXCJXZWJLaXRUZXh0U2hhZG93XCIsXG4gIFwiTVNUZXh0U2hhZG93XCIsXG4gIFwiT1RleHRTaGFkb3dcIixcbiAgXCJ0ZXh0VHJhbnNmb3JtXCIsXG4gIFwiTW96VGV4dFRyYW5zZm9ybVwiLFxuICBcIldlYktpdFRleHRUcmFuc2Zvcm1cIixcbiAgXCJNU1RleHRUcmFuc2Zvcm1cIixcbiAgXCJPVGV4dFRyYW5zZm9ybVwiLFxuICBcInRleHRVbmRlcmxpbmVQb3NpdGlvblwiLFxuICBcIk1velRleHRVbmRlcmxpbmVQb3NpdGlvblwiLFxuICBcIldlYktpdFRleHRVbmRlcmxpbmVQb3NpdGlvblwiLFxuICBcIk1TVGV4dFVuZGVybGluZVBvc2l0aW9uXCIsXG4gIFwiT1RleHRVbmRlcmxpbmVQb3NpdGlvblwiLFxuICBcInRvcFwiLFxuICBcIk1velRvcFwiLFxuICBcIldlYktpdFRvcFwiLFxuICBcIk1TVG9wXCIsXG4gIFwiT1RvcFwiLFxuICBcInRvdWNoQWN0aW9uXCIsXG4gIFwiTW96VG91Y2hBY3Rpb25cIixcbiAgXCJXZWJLaXRUb3VjaEFjdGlvblwiLFxuICBcIk1TVG91Y2hBY3Rpb25cIixcbiAgXCJPVG91Y2hBY3Rpb25cIixcbiAgXCJ0cmFuc2Zvcm1cIixcbiAgXCJNb3pUcmFuc2Zvcm1cIixcbiAgXCJXZWJLaXRUcmFuc2Zvcm1cIixcbiAgXCJNU1RyYW5zZm9ybVwiLFxuICBcIk9UcmFuc2Zvcm1cIixcbiAgXCJ0cmFuc2Zvcm1Cb3hcIixcbiAgXCJNb3pUcmFuc2Zvcm1Cb3hcIixcbiAgXCJXZWJLaXRUcmFuc2Zvcm1Cb3hcIixcbiAgXCJNU1RyYW5zZm9ybUJveFwiLFxuICBcIk9UcmFuc2Zvcm1Cb3hcIixcbiAgXCJ0cmFuc2Zvcm1PcmlnaW5cIixcbiAgXCJNb3pUcmFuc2Zvcm1PcmlnaW5cIixcbiAgXCJXZWJLaXRUcmFuc2Zvcm1PcmlnaW5cIixcbiAgXCJNU1RyYW5zZm9ybU9yaWdpblwiLFxuICBcIk9UcmFuc2Zvcm1PcmlnaW5cIixcbiAgXCJ0cmFuc2Zvcm1TdHlsZVwiLFxuICBcIk1velRyYW5zZm9ybVN0eWxlXCIsXG4gIFwiV2ViS2l0VHJhbnNmb3JtU3R5bGVcIixcbiAgXCJNU1RyYW5zZm9ybVN0eWxlXCIsXG4gIFwiT1RyYW5zZm9ybVN0eWxlXCIsXG4gIFwidHJhbnNpdGlvblwiLFxuICBcIk1velRyYW5zaXRpb25cIixcbiAgXCJXZWJLaXRUcmFuc2l0aW9uXCIsXG4gIFwiTVNUcmFuc2l0aW9uXCIsXG4gIFwiT1RyYW5zaXRpb25cIixcbiAgXCJ0cmFuc2l0aW9uRGVsYXlcIixcbiAgXCJNb3pUcmFuc2l0aW9uRGVsYXlcIixcbiAgXCJXZWJLaXRUcmFuc2l0aW9uRGVsYXlcIixcbiAgXCJNU1RyYW5zaXRpb25EZWxheVwiLFxuICBcIk9UcmFuc2l0aW9uRGVsYXlcIixcbiAgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIixcbiAgXCJNb3pUcmFuc2l0aW9uRHVyYXRpb25cIixcbiAgXCJXZWJLaXRUcmFuc2l0aW9uRHVyYXRpb25cIixcbiAgXCJNU1RyYW5zaXRpb25EdXJhdGlvblwiLFxuICBcIk9UcmFuc2l0aW9uRHVyYXRpb25cIixcbiAgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIixcbiAgXCJNb3pUcmFuc2l0aW9uUHJvcGVydHlcIixcbiAgXCJXZWJLaXRUcmFuc2l0aW9uUHJvcGVydHlcIixcbiAgXCJNU1RyYW5zaXRpb25Qcm9wZXJ0eVwiLFxuICBcIk9UcmFuc2l0aW9uUHJvcGVydHlcIixcbiAgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIixcbiAgXCJNb3pUcmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIixcbiAgXCJXZWJLaXRUcmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIixcbiAgXCJNU1RyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiLFxuICBcIk9UcmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIixcbiAgXCJ0dXJuXCIsXG4gIFwiTW96VHVyblwiLFxuICBcIldlYktpdFR1cm5cIixcbiAgXCJNU1R1cm5cIixcbiAgXCJPVHVyblwiLFxuICBcInVuaWNvZGVCaWRpXCIsXG4gIFwiTW96VW5pY29kZUJpZGlcIixcbiAgXCJXZWJLaXRVbmljb2RlQmlkaVwiLFxuICBcIk1TVW5pY29kZUJpZGlcIixcbiAgXCJPVW5pY29kZUJpZGlcIixcbiAgXCJ1bnNldFwiLFxuICBcIk1velVuc2V0XCIsXG4gIFwiV2ViS2l0VW5zZXRcIixcbiAgXCJNU1Vuc2V0XCIsXG4gIFwiT1Vuc2V0XCIsXG4gIFwidmVydGljYWxBbGlnblwiLFxuICBcIk1velZlcnRpY2FsQWxpZ25cIixcbiAgXCJXZWJLaXRWZXJ0aWNhbEFsaWduXCIsXG4gIFwiTVNWZXJ0aWNhbEFsaWduXCIsXG4gIFwiT1ZlcnRpY2FsQWxpZ25cIixcbiAgXCJ2aFwiLFxuICBcIk1velZoXCIsXG4gIFwiV2ViS2l0VmhcIixcbiAgXCJNU1ZoXCIsXG4gIFwiT1ZoXCIsXG4gIFwidmlzaWJpbGl0eVwiLFxuICBcIk1velZpc2liaWxpdHlcIixcbiAgXCJXZWJLaXRWaXNpYmlsaXR5XCIsXG4gIFwiTVNWaXNpYmlsaXR5XCIsXG4gIFwiT1Zpc2liaWxpdHlcIixcbiAgXCJ2bWF4XCIsXG4gIFwiTW96Vm1heFwiLFxuICBcIldlYktpdFZtYXhcIixcbiAgXCJNU1ZtYXhcIixcbiAgXCJPVm1heFwiLFxuICBcInZtaW5cIixcbiAgXCJNb3pWbWluXCIsXG4gIFwiV2ViS2l0Vm1pblwiLFxuICBcIk1TVm1pblwiLFxuICBcIk9WbWluXCIsXG4gIFwidndcIixcbiAgXCJNb3pWd1wiLFxuICBcIldlYktpdFZ3XCIsXG4gIFwiTVNWd1wiLFxuICBcIk9Wd1wiLFxuICBcIndoaXRlU3BhY2VcIixcbiAgXCJNb3pXaGl0ZVNwYWNlXCIsXG4gIFwiV2ViS2l0V2hpdGVTcGFjZVwiLFxuICBcIk1TV2hpdGVTcGFjZVwiLFxuICBcIk9XaGl0ZVNwYWNlXCIsXG4gIFwid2lkb3dzXCIsXG4gIFwiTW96V2lkb3dzXCIsXG4gIFwiV2ViS2l0V2lkb3dzXCIsXG4gIFwiTVNXaWRvd3NcIixcbiAgXCJPV2lkb3dzXCIsXG4gIFwid2lkdGhcIixcbiAgXCJNb3pXaWR0aFwiLFxuICBcIldlYktpdFdpZHRoXCIsXG4gIFwiTVNXaWR0aFwiLFxuICBcIk9XaWR0aFwiLFxuICBcIndpbGxDaGFuZ2VcIixcbiAgXCJNb3pXaWxsQ2hhbmdlXCIsXG4gIFwiV2ViS2l0V2lsbENoYW5nZVwiLFxuICBcIk1TV2lsbENoYW5nZVwiLFxuICBcIk9XaWxsQ2hhbmdlXCIsXG4gIFwid29yZEJyZWFrXCIsXG4gIFwiTW96V29yZEJyZWFrXCIsXG4gIFwiV2ViS2l0V29yZEJyZWFrXCIsXG4gIFwiTVNXb3JkQnJlYWtcIixcbiAgXCJPV29yZEJyZWFrXCIsXG4gIFwid29yZFNwYWNpbmdcIixcbiAgXCJNb3pXb3JkU3BhY2luZ1wiLFxuICBcIldlYktpdFdvcmRTcGFjaW5nXCIsXG4gIFwiTVNXb3JkU3BhY2luZ1wiLFxuICBcIk9Xb3JkU3BhY2luZ1wiLFxuICBcIndvcmRXcmFwXCIsXG4gIFwiTW96V29yZFdyYXBcIixcbiAgXCJXZWJLaXRXb3JkV3JhcFwiLFxuICBcIk1TV29yZFdyYXBcIixcbiAgXCJPV29yZFdyYXBcIixcbiAgXCJ3cml0aW5nTW9kZVwiLFxuICBcIk1veldyaXRpbmdNb2RlXCIsXG4gIFwiV2ViS2l0V3JpdGluZ01vZGVcIixcbiAgXCJNU1dyaXRpbmdNb2RlXCIsXG4gIFwiT1dyaXRpbmdNb2RlXCIsXG4gIFwiekluZGV4XCIsXG4gIFwiTW96WkluZGV4XCIsXG4gIFwiV2ViS2l0WkluZGV4XCIsXG4gIFwiTVNaSW5kZXhcIixcbiAgXCJPWkluZGV4XCIsXG4gIFwiZm9udFNpemVcIixcbiAgXCJNb3pGb250U2l6ZVwiLFxuICBcIldlYktpdEZvbnRTaXplXCIsXG4gIFwiTVNGb250U2l6ZVwiLFxuICBcIk9Gb250U2l6ZVwiXG5dXG4iLCJ2YXIgcHJvcGVydGllcyA9IHJlcXVpcmUoJy4vY3NzLXByb3BlcnRpZXMuanMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBzdHlsZXMgPSBwcm9wc1twcm9wTmFtZV07XG4gIGlmICghc3R5bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGZhaWx1cmVzID0gW107XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbihzdHlsZUtleSl7XG4gICAgaWYgKHByb3BlcnRpZXMuaW5kZXhPZihzdHlsZUtleSkgPT09IC0xKSB7XG4gICAgICBmYWlsdXJlcy5wdXNoKHN0eWxlS2V5KTtcbiAgICB9XG4gIH0pO1xuICBpZiAoZmFpbHVyZXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQcm9wICcgKyBwcm9wTmFtZSArICcgcGFzc2VkIHRvICcgKyBjb21wb25lbnROYW1lICsgJy4gSGFzIGludmFsaWQga2V5cyAnICsgZmFpbHVyZXMuam9pbignLCAnKSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmlzUmVxdWlyZWQgPSBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKCFwcm9wc1twcm9wTmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3AgJyArIHByb3BOYW1lICsgJyBwYXNzZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnIGlzIHJlcXVpcmVkJyk7XG4gIH1cbiAgcmV0dXJuIG1vZHVsZS5leHBvcnRzKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5zdXBwb3J0aW5nQXJyYXlzID0gUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKG1vZHVsZS5leHBvcnRzKSxcbiAgbW9kdWxlLmV4cG9ydHNcbl0pO1xuXG4iXX0=