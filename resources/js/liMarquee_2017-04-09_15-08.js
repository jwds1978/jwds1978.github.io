---
sitemap: false
---

{{ site.copyright.comment.java }}
(function (_0xbd01x1) {
  'use strict';
  var _0xbd01x2 = {
    init: function (_0xbd01x3) {
      var _0xbd01x4 = {
        width: 'auto',
        height: 'auto',
        direction: 'left',
        scrollDelay: 85,
        scrollAmount: 6,
        circular: false,
        dragAndDrop: true,
        hoverStop: true,
        scrollStop: true,
        startShow: false,
        xml: false,
        touchEvent: true,
        stopOutScreen: true,
        create: function () {},
        moveStart: function () {},
        moveStop: function () {},
        drag: function () {},
        dragStart: function () {},
        dragStop: function () {},
        wayEnd: function () {},
        removeContentFadeDuration: 300
      };
      if (_0xbd01x3) {
        _0xbd01x1['extend'](_0xbd01x4, _0xbd01x3)
      };
      return this['each'](function () {
        var _0xbd01x5 = _0xbd01x1(this)['addClass']('mWrap');
        var _0xbd01x6 = _0xbd01x1('*')['index'](_0xbd01x1(this));
        _0xbd01x5['data']()['mElIndex'] = _0xbd01x6;
        var _0xbd01x7 = function (_0xbd01x8, _0xbd01x9) {
          var _0xbd01xa = _0xbd01x8['position']();
          var _0xbd01xb = _0xbd01x9 || _0xbd01x1(document);
          var _0xbd01xc = (_0xbd01xb['outerWidth']() - (_0xbd01x8['position']()['left'] + _0xbd01x8['outerWidth']()));
          var _0xbd01xd = (_0xbd01xb['outerHeight']() - (_0xbd01x8['position']()['top'] + _0xbd01x8['outerHeight']()));
          var _0xbd01xe = {
            right: _0xbd01xc,
            bottom: _0xbd01xd
          };
          _0xbd01x1['extend'](_0xbd01xe, _0xbd01xa);
          return _0xbd01xe
        };
        _0xbd01x5['data']()['style'] = _0xbd01x5['attr']('style');
        _0xbd01x1['extend'](_0xbd01x4, _0xbd01x5['data']());
        _0xbd01x1['extend'](_0xbd01x5['data'](), _0xbd01x4);
        if (!_0xbd01x1('.mMove', _0xbd01x5)['length']) {
          _0xbd01x5['wrapInner']('<div class="mMove"></div>')
        };
        var _0xbd01xf = _0xbd01x1('.mMove', _0xbd01x5);
        _0xbd01x5['css']({
          position: 'relative',
          overflow: 'hidden',
          maxWidth: '100%',
          height: _0xbd01x5['data']()['height'],
          width: _0xbd01x5['data']()['width']
        });
        if (_0xbd01x5['data']()['scrollDelay'] <= 0) {
          _0xbd01x5['data']()['scrollDelay'] = 85
        };
        _0xbd01x5['data']()['outerSizeFunc'] = function (_0xbd01x8) {
          if (_0xbd01x5['data']()['direction'] === 'top' || _0xbd01x5['data']()['direction'] === 'bottom') {
            return _0xbd01x8['outerHeight']()
          } else {
            return _0xbd01x8['outerWidth']()
          }
        };
        _0xbd01xf['data']()['style'] = _0xbd01xf['attr']('style');
        if ((!_0xbd01x5['data']()['updateCont'])) {
          _0xbd01xf['css']({
            position: 'absolute',
            left: 'auto',
            right: 'auto',
            top: 'auto',
            bottom: 'auto',
            float: 'left'
          })
        };
        _0xbd01x5['data']()['mMove'] = _0xbd01xf;
        var _0xbd01x10 = function () {
          _0xbd01x5['data']()['clickEventFlag'] = true;
          if (_0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf) > 0) {
            var _0xbd01x11 = _0xbd01x1('.mItem', _0xbd01x5);
            _0xbd01x11['each'](function () {
              _0xbd01x1(this)['data']()['style'] = _0xbd01x1(this)['attr']('style');
              _0xbd01x1(this)['css']({
                display: 'inline',
                zoom: 1
              })
            });
            var _0xbd01x12 = function (_0xbd01x13, _0xbd01x11) {
              _0xbd01x11['css']({
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0
              });
              if (_0xbd01x11['length'] && !_0xbd01x5['data']()['circular']) {
                var _0xbd01x14 = {};
                var _0xbd01x15 = {};
                _0xbd01x14['padding-' + _0xbd01x13] = _0xbd01x5['data']()['outerSizeFunc'](_0xbd01x5);
                _0xbd01x15['padding-' + _0xbd01x13] = 0;
                _0xbd01x11['css'](_0xbd01x14);
                _0xbd01x11['eq'](0)['css'](_0xbd01x15)
              }
            };
            _0xbd01x5['data']()['splittingString'] = _0xbd01x12;
            var _0xbd01x16 = _0xbd01x1('<div>')['addClass']('cloneContent')['html'](_0xbd01xf['html']());
            if (_0xbd01x5['data']()['direction'] === 'left' || _0xbd01x5['data']()['direction'] === 'right') {
              _0xbd01xf['css']({
                whiteSpace: 'nowrap'
              });
              _0xbd01x5['data']()['splittingString']('left', _0xbd01x11);
              _0xbd01x5['css']({
                minHeight: _0xbd01xf['outerHeight']()
              });
              _0xbd01x16['css']({
                display: 'inline-block'
              });
              _0xbd01x5['data']()['axis'] = 'hor'
            } else {
              _0xbd01xf['css']({
                whiteSpace: 'normal'
              });
              _0xbd01x11['css']({
                display: 'block'
              });
              _0xbd01x5['data']()['splittingString']('top', _0xbd01x11);
              if (_0xbd01x5['outerHeight']() === 0) {
                alert('Set Height Parametr for Plugin liMarquee')
              };
              _0xbd01x16['css']({
                display: 'block'
              });
              _0xbd01x5['data']()['axis'] = 'vert'
            };
            var _0xbd01x17 = false || document['documentMode'];
            if (_0xbd01x17) {
              _0xbd01x5['add'](_0xbd01x5['find']('*'))['attr']('unselectable', 'on')
            };
            var _0xbd01x18 = 'mousemove.' + _0xbd01x5['data']()['mElIndex'];
            var _0xbd01x19 = 'mousedown.' + _0xbd01x5['data']()['mElIndex'];
            var _0xbd01x1a = 'mouseup.' + _0xbd01x5['data']()['mElIndex'];
            var _0xbd01x1b = 'click.' + _0xbd01x5['data']()['mElIndex'];
            _0xbd01x5['data']({
              touchScreen: false,
              teleport: false,
              dragging: false,
              pause: false
            });
            if ('ontouchstart' in window) {
              _0xbd01x18 = 'touchmove.' + _0xbd01x5['data']()['mElIndex'];
              _0xbd01x19 = 'touchstart.' + _0xbd01x5['data']()['mElIndex'];
              _0xbd01x1a = 'touchend.' + _0xbd01x5['data']()['mElIndex'];
              _0xbd01x5['data']()['touchScreen'] = true;
              if (_0xbd01x1(window)['width']() < 1000) {
                _0xbd01x5['data']()['hoverStop'] = false
              }
            };
            _0xbd01x5['data']({
              moveEvent: _0xbd01x18,
              mousedownEvent: _0xbd01x19,
              mouseupEvent: _0xbd01x1a,
              clickEvent: _0xbd01x1b
            });
            var _0xbd01x1c = function (_0xbd01xf) {
              if (_0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf) !== 0) {
                if (_0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf) < _0xbd01x5['data']()['outerSizeFunc'](_0xbd01x5) && _0xbd01x5['data']()['circular']) {
                  _0xbd01x16['clone']()['appendTo'](_0xbd01xf);
                  _0xbd01x5['data']()['cloneContent'](_0xbd01xf)
                }
              } else {
                console['log']('The string is empty or contains invalid style')
              }
            };
            _0xbd01x5['data']()['cloneContent'] = _0xbd01x1c;
            _0xbd01x5['data']()['cloneContent'](_0xbd01xf);
            var _0xbd01x1d = function (_0xbd01x1e, _0xbd01x1f) {
              if (!_0xbd01x5['data']()['pause']) {
                if (_0xbd01x1e === undefined) {
                  _0xbd01x1e = _0xbd01x5['data']()['startPos']
                };
                if (_0xbd01x1f === undefined) {
                  _0xbd01x1f = _0xbd01x5['data']()['endPos']
                };
                if (_0xbd01x1f !== 0 && _0xbd01x1f !== -0) {
                  var _0xbd01x20 = (_0xbd01x1f - _0xbd01x1e);
                  if (_0xbd01x20 < 0) {
                    _0xbd01x20 = _0xbd01x20 * -1
                  };
                  var _0xbd01x21 = (_0xbd01x20 * _0xbd01x5['data']()['scrollDelay']) / _0xbd01x5['data']()['scrollAmount'];
                  var _0xbd01x22 = {};
                  var _0xbd01x23 = {};
                  _0xbd01x22[_0xbd01x5['data']()['direction']] = _0xbd01x1e;
                  _0xbd01x23[_0xbd01x5['data']()['direction']] = _0xbd01x1f;
                  _0xbd01xf['css'](_0xbd01x22);
                  _0xbd01x5['addClass']('mIni');
                  _0xbd01x5['data']()['stopped'] = false;
                  if (_0xbd01x5['data']()['moveStart'] !== undefined) {
                    _0xbd01x5['data']()['moveStart']()
                  };
                  _0xbd01xf['stop'](true)['animate'](_0xbd01x23, _0xbd01x21, 'linear', function () {
                    if (_0xbd01x5['data']()['moveStop'] !== undefined) {
                      _0xbd01x5['data']()['moveStop']()
                    };
                    if (_0xbd01x5['data']()['wayEnd'] !== undefined) {
                      _0xbd01x5['data']()['wayEnd']()
                    };
                    _0xbd01x5['data']()['teleport'] = true;
                    _0xbd01x1d()
                  })
                }
              }
            };
            _0xbd01x5['data']()['anim'] = _0xbd01x1d;
            var _0xbd01x24 = function () {
              var _0xbd01x25 = _0xbd01xf['clone']()['addClass']('clone')['css']({
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: 0
              });
              if (_0xbd01x5['data']()['direction'] === 'top' || _0xbd01x5['data']()['direction'] === 'bottom') {
                _0xbd01x25['css']({
                  left: 0
                })
              } else {
                _0xbd01x25['css']({
                  top: 0
                })
              };
              var _0xbd01x26 = {};
              var _0xbd01x27 = {};
              _0xbd01x26[_0xbd01x5['data']()['direction']] = '-100%';
              _0xbd01x27[_0xbd01x5['data']()['direction']] = '100%';
              var _0xbd01x28 = _0xbd01x25['clone']()['addClass']('cloneBefore')['css'](_0xbd01x26)['appendTo'](_0xbd01xf);
              var _0xbd01x29 = _0xbd01x25['clone']()['addClass']('cloneAfter')['css'](_0xbd01x27)['appendTo'](_0xbd01xf);
              if (_0xbd01x5['data']()['circular']) {
                _0xbd01x28['add'](_0xbd01x29)['css']({
                  opacity: 1
                })
              }
            };
            if (_0xbd01x5['data']()['circular']) {
              _0xbd01x24()
            };
            if (_0xbd01x5['data']()['create'] !== undefined) {
              _0xbd01x5['data']()['create']()
            };
            var _0xbd01x2a = function () {
              return _0xbd01x7(_0xbd01xf, _0xbd01x5)[_0xbd01x5['data']()['direction']]
            };
            _0xbd01x5['data']()['nowPos'] = _0xbd01x2a;
            var _0xbd01x2b = function (_0xbd01x2c) {
              var _0xbd01x2d = _0xbd01x2c;
              if (_0xbd01x5['data']()['touchScreen']) {
                if (_0xbd01x2c['originalEvent']['targetTouches']['length'] === 1) {
                  _0xbd01x2d = _0xbd01x2c['originalEvent']['targetTouches'][0]
                }
              };
              var _0xbd01x2e = {
                left: _0xbd01x2d['pageX'],
                top: _0xbd01x2d['pageY'],
                right: (_0xbd01x1(window)['width']() - _0xbd01x2d['pageX']),
                bottom: (_0xbd01x1(window)['height']() - _0xbd01x2d['pageY'])
              };
              _0xbd01x1['extend'](_0xbd01x2d, _0xbd01x2e);
              return _0xbd01x2d
            };
            if (_0xbd01x5['data']()['hoverStop']) {
              _0xbd01x5['on']('mouseenter.' + _0xbd01x5['data']()['mElIndex'], function () {
                _0xbd01x5['off']('mouseleave.' + _0xbd01x5['data']()['mElIndex']);
                if (_0xbd01x5['data']()['dragAndDrop']) {
                  _0xbd01x1('html')['addClass']('grab')
                };
                if (!_0xbd01x5['data']()['stopped']) {
                  _0xbd01xf['stop'](true);
                  _0xbd01x5['data']()['stopped'] = true;
                  if (_0xbd01x5['data']()['moveStop'] !== undefined) {
                    _0xbd01x5['data']()['moveStop']()
                  }
                };
                _0xbd01x5['on']('mouseleave.' + _0xbd01x5['data']()['mElIndex'], function () {
                  _0xbd01x1(document)['off'](_0xbd01x18);
                  _0xbd01x1('html')['removeClass']('grab');
                  _0xbd01x1('html')['removeClass']('grabbing');
                  _0xbd01x1d(_0xbd01x5['data']()['nowPos']())
                })
              })
            };
            if (!_0xbd01x5['data']()['touchScreen'] && _0xbd01x5['data']()['dragAndDrop'] || _0xbd01x5['data']()['touchScreen'] && _0xbd01x5['data']()['touchEvent']) {
              _0xbd01x5['on'](_0xbd01x19, function (_0xbd01x2c) {
                _0xbd01x1(document)['off'](_0xbd01x18);
                _0xbd01x1(document)['off'](_0xbd01x1a);
                _0xbd01x5['off']('mouseleave.' + _0xbd01x5['data']()['mElIndex']);
                _0xbd01x1('html')['addClass']('grabbing');
                if (!_0xbd01x5['data']()['stopped']) {
                  _0xbd01xf['stop'](true);
                  _0xbd01x5['data']()['stopped'] = true;
                  if (_0xbd01x5['data']()['moveStop'] !== undefined) {
                    _0xbd01x5['data']()['moveStop']()
                  }
                };
                var _0xbd01x2f = _0xbd01x2b(_0xbd01x2c)[_0xbd01x5['data']()['direction']];
                var _0xbd01x30 = _0xbd01x2b(_0xbd01x2c)['top'];
                var _0xbd01x31 = _0xbd01x2b(_0xbd01x2c)['left'];
                var _0xbd01x32 = 0;
                var _0xbd01x33 = 0;
                var _0xbd01x34 = 1;
                _0xbd01x1(document)['on'](_0xbd01x18, function (_0xbd01x2c) {
                  _0xbd01x5['data']()['clickEventFlag'] = false;
                  _0xbd01x5['off']('mouseleave.' + _0xbd01x5['data']()['mElIndex']);
                  _0xbd01x1('html')['addClass']('grabbing');
                  if (!_0xbd01x5['data']()['dragging']) {
                    if (_0xbd01x5['data']()['dragStart'] !== undefined) {
                      _0xbd01x5['data']()['dragStart']()
                    };
                    _0xbd01x5['data']()['dragging'] = true
                  };
                  var _0xbd01x35 = _0xbd01x5['data']()['nowPos']();
                  if (!_0xbd01x5['data']()['stopped']) {
                    _0xbd01xf['stop'](true);
                    _0xbd01x5['data']()['stopped'] = true
                  };
                  var _0xbd01x36 = _0xbd01x2b(_0xbd01x2c)[_0xbd01x5['data']()['direction']];
                  var _0xbd01x37 = function () {
                    if (_0xbd01x36 > _0xbd01x2f) {
                      _0xbd01x34 = 1
                    };
                    if (_0xbd01x36 < _0xbd01x2f) {
                      _0xbd01x34 = -1
                    };
                    var _0xbd01x38 = (_0xbd01x2f - _0xbd01x36);
                    _0xbd01x2f = _0xbd01x36;
                    var _0xbd01x26 = {};
                    _0xbd01x26[_0xbd01x5['data']()['direction']] = '-=' + _0xbd01x38;
                    if (_0xbd01x5['data']()['circular']) {
                      if (_0xbd01x35 <= _0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf) && !_0xbd01x5['data']()['teleport']) {
                        _0xbd01x5['data']()['teleport'] = true
                      };
                      if (_0xbd01x35 <= (_0xbd01x5['data']()['outerSizeFunc'](_0xbd01x5) - _0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf)) && _0xbd01x34 < 0 && _0xbd01x5['data']()['teleport']) {
                        if (_0xbd01x5['data']()['wayEnd'] !== undefined) {
                          _0xbd01x5['data']()['wayEnd']()
                        };
                        _0xbd01x26[_0xbd01x5['data']()['direction']] = '+=' + _0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf)
                      };
                      if (_0xbd01x35 >= 0 && _0xbd01x34 > 0 && _0xbd01x5['data']()['teleport']) {
                        if (_0xbd01x5['data']()['wayEnd'] !== undefined) {
                          _0xbd01x5['data']()['wayEnd']()
                        };
                        _0xbd01x26[_0xbd01x5['data']()['direction']] = '-=' + _0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf)
                      }
                    } else {
                      if (_0xbd01x35 <= -_0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf) && _0xbd01x34 < 0) {
                        if (_0xbd01x5['data']()['wayEnd'] !== undefined) {
                          _0xbd01x5['data']()['wayEnd']()
                        };
                        _0xbd01x26[_0xbd01x5['data']()['direction']] = '+=' + (_0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf) + _0xbd01x5['data']()['outerSizeFunc'](_0xbd01x5))
                      };
                      if (_0xbd01x35 >= _0xbd01x5['data']()['outerSizeFunc'](_0xbd01x5) && _0xbd01x34 > 0) {
                        if (_0xbd01x5['data']()['wayEnd'] !== undefined) {
                          _0xbd01x5['data']()['wayEnd']()
                        };
                        _0xbd01x26[_0xbd01x5['data']()['direction']] = '-=' + (_0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf) + _0xbd01x5['data']()['outerSizeFunc'](_0xbd01x5))
                      }
                    };
                    if (_0xbd01x5['data']()['drag'] !== undefined) {
                      _0xbd01x5['data']()['drag']()
                    };
                    _0xbd01xf['css'](_0xbd01x26);
                    if (_0xbd01x5['data']()['touchEvent']) {
                      return false
                    }
                  };
                  if (_0xbd01x5['data']()['axis'] == 'hor') {
                    var _0xbd01x39 = _0xbd01x2b(_0xbd01x2c)['top'];
                    var _0xbd01x3a = _0xbd01x2b(_0xbd01x2c)['left'];
                    var _0xbd01x3b = Math['abs'](_0xbd01x39 - _0xbd01x30);
                    var _0xbd01x3c = Math['abs'](_0xbd01x3a - _0xbd01x31);
                    _0xbd01x32 += _0xbd01x3b;
                    _0xbd01x33 += _0xbd01x3c;
                    if (_0xbd01x32 > _0xbd01x33) {
                      _0xbd01x1(document)['trigger'](_0xbd01x1a)
                    } else {
                      _0xbd01x37()
                    }
                  } else {
                    _0xbd01x37()
                  }
                });
                _0xbd01x1(document)['on'](_0xbd01x1a, function (_0xbd01x2c) {
                  if (_0xbd01x5['data']()['dragging']) {
                    if (_0xbd01x5['data']()['dragStop'] !== undefined) {
                      _0xbd01x5['data']()['dragStop']()
                    };
                    _0xbd01x5['data']()['dragging'] = false
                  };
                  if (_0xbd01x1(_0xbd01x2c['target'])['is'](_0xbd01x5) || _0xbd01x1(_0xbd01x2c['target'])['closest'](_0xbd01x5)['length']) {
                    _0xbd01x1(document)['off'](_0xbd01x18);
                    _0xbd01x1('html')['removeClass']('grabbing');
                    if (_0xbd01x5['data']()['hoverStop']) {
                      _0xbd01x5['trigger']('mouseenter.' + _0xbd01x5['data']()['mElIndex'])
                    } else {
                      _0xbd01x1d(_0xbd01x5['data']()['nowPos']())
                    }
                  } else {
                    _0xbd01x1(document)['off'](_0xbd01x18);
                    _0xbd01x1d(_0xbd01x5['data']()['nowPos']());
                    _0xbd01x1('html')['removeClass']('grab');
                    _0xbd01x1('html')['removeClass']('grabbing')
                  };
                  _0xbd01x1(document)['off'](_0xbd01x1a);
                  setTimeout(function () {
                    _0xbd01x5['data']()['clickEventFlag'] = true
                  }, 300)
                });
                if (!_0xbd01x5['data']()['touchScreen']) {
                  return false
                }
              })
            };
            var _0xbd01x3d = function (_0xbd01x5) {
              var _0xbd01xf = _0xbd01x5['data']()['mMove'];
              var _0xbd01x3e = _0xbd01x5['data']()['outerSizeFunc'](_0xbd01x5);
              var _0xbd01x3f = -_0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf);
              _0xbd01x5['data']()['startPos'] = _0xbd01x3e;
              _0xbd01x5['data']()['endPos'] = _0xbd01x3f;
              if (_0xbd01x5['data']()['circular']) {
                _0xbd01x3f = -(_0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf) + (_0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf) - _0xbd01x5['data']()['outerSizeFunc'](_0xbd01x5)));
                _0xbd01x5['data']()['endPos'] = _0xbd01x3f;
                var _0xbd01x40 = _0xbd01x5['data']()['startShow'] ? _0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf) : (_0xbd01x5['data']()['outerSizeFunc'](_0xbd01x5) + _0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf));
                _0xbd01x1d(_0xbd01x40)
              } else {
                var _0xbd01x41 = _0xbd01x5['data']()['startShow'] ? 0 : _0xbd01x3e;
                _0xbd01x1d(_0xbd01x41)
              }
            };
            _0xbd01x5['data']()['getPosition'] = _0xbd01x3d;
            var _0xbd01x42 = function (_0xbd01x5) {
              var _0xbd01xf = _0xbd01x5['data']()['mMove'];
              var _0xbd01x3e = _0xbd01x5['data']()['outerSizeFunc'](_0xbd01x5);
              var _0xbd01x3f = -_0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf);
              _0xbd01x5['data']()['startPos'] = _0xbd01x3e;
              _0xbd01x5['data']()['endPos'] = _0xbd01x3f;
              if (_0xbd01x5['data']()['circular']) {
                _0xbd01x3f = -(_0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf) + (_0xbd01x5['data']()['outerSizeFunc'](_0xbd01xf) - _0xbd01x5['data']()['outerSizeFunc'](_0xbd01x5)));
                _0xbd01x5['data']()['endPos'] = _0xbd01x3f
              }
            };
            _0xbd01x5['data']()['setPosition'] = _0xbd01x42;
            if (!_0xbd01x5['data']()['updateCont']) {
              _0xbd01x5['data']()['getPosition'](_0xbd01x5)
            };
            var _0xbd01x43 = function () {
              if (document['hidden']) {
                if (!_0xbd01x5['data']()['stopped']) {
                  _0xbd01xf['stop'](true);
                  _0xbd01x5['data']()['stopped'] = true;
                  if (_0xbd01x5['data']()['moveStop'] !== undefined) {
                    _0xbd01x5['data']()['moveStop']()
                  }
                }
              } else {
                _0xbd01x1d(_0xbd01x5['data']()['nowPos']())
              }
            };
            _0xbd01x1(document)['on']('visibilitychange', function () {
              _0xbd01x43()
            });
            var _0xbd01x44 = function () {};
            _0xbd01x1(window)['on']('resize.' + _0xbd01x5['data']()['mElIndex'], function () {
              clearTimeout(_0xbd01x44);
              _0xbd01x44 = setTimeout(function () {
                _0xbd01x5['liMarquee']('resetPosition')
              }, 300)
            });
            var _0xbd01x45 = function () {};
            var _0xbd01x46 = function () {
              if (_0xbd01x5['data']()['stopOutScreen']) {
                if ((_0xbd01x5['offset']()['top'] + _0xbd01x5['outerHeight']()) < _0xbd01x1(window)['scrollTop']() || _0xbd01x5['offset']()['top'] > (_0xbd01x1(window)['scrollTop']() + _0xbd01x1(window)['height']())) {
                  if (!_0xbd01x5['data']()['stopped']) {
                    _0xbd01xf['stop'](true);
                    _0xbd01x5['data']()['stopped'] = true;
                    if (_0xbd01x5['data']()['moveStop'] !== undefined) {
                      _0xbd01x5['data']()['moveStop']()
                    }
                  }
                } else {
                  _0xbd01x1d(_0xbd01x5['data']()['nowPos']())
                }
              } else {
                _0xbd01x1d(_0xbd01x5['data']()['nowPos']())
              }
            };
            _0xbd01x1(window)['on']('scroll.' + _0xbd01x5['data']()['mElIndex'], function () {
              if (_0xbd01x5['data']()['scrollStop'] && !_0xbd01x5['data']()['stopped']) {
                _0xbd01xf['stop'](true);
                _0xbd01x5['data']()['stopped'] = true;
                if (_0xbd01x5['data']()['moveStop'] !== undefined) {
                  _0xbd01x5['data']()['moveStop']()
                }
              };
              clearTimeout(_0xbd01x45);
              _0xbd01x45 = setTimeout(function () {
                _0xbd01x46()
              }, 100)
            });
            _0xbd01x5['find']('a')['on']('click', function () {
              if (!_0xbd01x5['data']()['clickEventFlag']) {
                return false
              }
            });
            _0xbd01x46()
          } else {
            _0xbd01xf['text']('marquee "' + _0xbd01x5['attr']('class') + '" elements is hidden or missing');
            _0xbd01x10();
            _0xbd01x5['liMarquee']('stop');
            _0xbd01x5['liMarquee']('removeContent')
          }
        };
        if (_0xbd01x5['data']()['xml']) {
          _0xbd01x1['ajax']({
            url: _0xbd01x5['data']()['xml'],
            dataType: 'xml',
            success: function (_0xbd01x47) {
              var _0xbd01x48 = _0xbd01x1(_0xbd01x47)['find']('item');
              var _0xbd01x49 = _0xbd01x48['length'];
              for (var _0xbd01x4a = 0; _0xbd01x4a < _0xbd01x49; _0xbd01x4a++) {
                var _0xbd01x4b = _0xbd01x48['eq'](_0xbd01x4a);
                var _0xbd01x4c = _0xbd01x4b['find']('title')['text']();
                var _0xbd01x4d = _0xbd01x4b['find']('link')['text']();
                if (_0xbd01x4b['find']('link')['length']) {
                  _0xbd01x1('<div class="mItem"><a href="' + _0xbd01x4d + '">' + _0xbd01x4c + '</a></div>')['appendTo'](_0xbd01xf)
                } else {
                  _0xbd01x1('<div class="mItem">')['text'](_0xbd01x4c)['appendTo'](_0xbd01xf)
                }
              };
              _0xbd01x10()
            }
          })
        } else {
          _0xbd01x10()
        }
      })
    },
    getContent: function () {
      var _0xbd01xf = _0xbd01x1(this)['data']()['mMove'];
      var _0xbd01x4e;
      if (!_0xbd01xf['is'](':empty')) {
        var _0xbd01x4f = _0xbd01xf['html']();
        var _0xbd01x50 = _0xbd01x1('<div>')['html'](_0xbd01x4f);
        _0xbd01x50['find']('.clone')['remove']();
        _0xbd01x50['find']('.cloneContent')['remove']();
        _0xbd01x4e = _0xbd01x1['trim'](_0xbd01x50['html']())
      } else {
        _0xbd01x4e = false
      };
      return _0xbd01x4e
    },
    addContent: function (_0xbd01x51) {
      return this['each'](function () {
        var _0xbd01x5 = _0xbd01x1(this);
        var _0xbd01xf = _0xbd01x5['data']()['mMove'];
        var _0xbd01x52 = function () {
          if (!_0xbd01x5['data']()['removing']) {
            var _0xbd01x53 = '<div class="mItem">' + _0xbd01x51 + '</div>';
            var _0xbd01x54 = _0xbd01x5['liMarquee']('getContent');
            var _0xbd01x55 = _0xbd01x54;
            if (!_0xbd01xf['find']('.mItem')['length'] && _0xbd01x54) {
              _0xbd01x54 = '<div class="mItem">' + _0xbd01x54 + '</div>'
            };
            if (_0xbd01x51) {
              if (_0xbd01x5['data']()['direction'] === 'left' || _0xbd01x5['data']()['direction'] === 'top') {
                _0xbd01x55 = _0xbd01x54 ? _0xbd01x54 + _0xbd01x53 : _0xbd01x53
              };
              if (_0xbd01x5['data']()['direction'] === 'right' || _0xbd01x5['data']()['direction'] === 'bottom') {
                _0xbd01x55 = _0xbd01x54 ? _0xbd01x53 + _0xbd01x54 : _0xbd01x53
              }
            };
            _0xbd01x5['liMarquee']('removeContent');
            var _0xbd01x56 = function () {
              if (!_0xbd01x5['data']()['removing']) {
                _0xbd01xf['html'](_0xbd01x55);
                if (_0xbd01x54) {
                  _0xbd01x5['data']()['updateCont'] = true
                };
                _0xbd01x5['liMarquee'](_0xbd01x5['data']());
                if (_0xbd01x5['data']()['updateCont']) {
                  _0xbd01x5['data']()['setPosition'](_0xbd01x5);
                  _0xbd01x5['data']()['anim'](_0xbd01x5['data']()['nowPos']())
                }
              } else {
                setTimeout(function () {
                  _0xbd01x56()
                }, _0xbd01x5['data']()['removeContentFadeDuration'])
              }
            };
            _0xbd01x56()
          } else {
            setTimeout(function () {
              _0xbd01x52()
            }, _0xbd01x5['data']()['removeContentFadeDuration'])
          }
        };
        _0xbd01x52()
      })
    },
    removeContent: function () {
      return this['each'](function () {
        _0xbd01x1(this)['data']()['removing'] = true;
        var _0xbd01x5 = _0xbd01x1(this);
        var _0xbd01xf = _0xbd01x5['data']()['mMove'];
        _0xbd01xf['children']()['animate']({
          opacity: 0
        }, _0xbd01x5['data']()['removeContentFadeDuration']);
        setTimeout(function () {
          _0xbd01x5['data']()['updateCont'] = true;
          if (!_0xbd01x5['data']()['stopped']) {
            _0xbd01xf['stop'](true);
            _0xbd01x5['data']()['stopped'] = true
          };
          _0xbd01x5['off']('mouseenter.' + _0xbd01x5['data']()['mElIndex']);
          _0xbd01x5['off']('mouseleave.' + _0xbd01x5['data']()['mElIndex']);
          _0xbd01x5['off'](_0xbd01x1(this)['data']()['mousedownEvent']);
          _0xbd01x1(window)['off']('resize.' + _0xbd01x5['data']()['mElIndex']);
          _0xbd01x1(window)['off']('scroll.' + _0xbd01x5['data']()['mElIndex']);
          _0xbd01x1(document)['off'](_0xbd01x5['data']()['moveEvent']);
          _0xbd01x1(document)['off'](_0xbd01x5['data']()['mouseupEvent']);
          if (!_0xbd01x5['data']()['stopped']) {
            _0xbd01xf['stop'](true);
            _0xbd01x5['data']()['stopped'] = true
          };
          _0xbd01xf['empty']();
          _0xbd01x5['data']()['removing'] = false
        }, _0xbd01x5['data']()['removeContentFadeDuration'])
      })
    },
    changeOptions: function (_0xbd01x3) {
      return this['each'](function () {
        var _0xbd01x5 = _0xbd01x1(this);
        _0xbd01x1['extend'](_0xbd01x5['data'](), _0xbd01x3);
        _0xbd01x5['liMarquee']('destroy');
        _0xbd01x5['data']()['updateCont'] = false;
        _0xbd01x5['liMarquee'](_0xbd01x5['data']())
      })
    },
    destroy: function () {
      var _0xbd01x5 = _0xbd01x1(this);
      var _0xbd01xf = _0xbd01x5['data']()['mMove'];
      _0xbd01x5['removeAttr']('style')['attr']('style', _0xbd01x5['data']()['style']);
      if (!_0xbd01x5['data']()['stopped']) {
        _0xbd01xf['stop'](true);
        _0xbd01x5['data']()['stopped'] = true
      };
      _0xbd01xf['removeAttr']('style')['attr']('style', _0xbd01xf['data']()['style'])['removeData']();
      _0xbd01x1('.mItem', _0xbd01x5)['each'](function () {
        _0xbd01x1(this)['removeAttr']('style')['attr']('style', _0xbd01x1(this)['data']()['style'])['removeData']()
      });
      _0xbd01x5['off']('mouseenter.' + _0xbd01x5['data']()['mElIndex']);
      _0xbd01x5['off']('mouseleave.' + _0xbd01x5['data']()['mElIndex']);
      _0xbd01x5['off'](_0xbd01x5['data']()['mousedownEvent']);
      _0xbd01x1(window)['off']('resize.' + _0xbd01x5['data']()['mElIndex']);
      _0xbd01x1(window)['off']('scroll.' + _0xbd01x5['data']()['mElIndex']);
      if (_0xbd01x5['data']()['moveEvent']) {
        _0xbd01x1(document)['off'](_0xbd01x5['data']()['moveEvent'])
      };
      if (_0xbd01x5['data']()['mouseupEvent']) {
        _0xbd01x1(document)['off'](_0xbd01x5['data']()['mouseupEvent'])
      };
      _0xbd01x1('.clone', _0xbd01x5)['remove']();
      _0xbd01x1('.cloneContent', _0xbd01x5)['remove']();
      var _0xbd01x57 = _0xbd01xf['html']();
      _0xbd01xf['remove']();
      _0xbd01x5['html'](_0xbd01x57)['removeClass']('mIni')['css']({
        opacity: 1
      })
    },
    stop: function () {
      return this['each'](function () {
        var _0xbd01x5 = _0xbd01x1(this);
        if (_0xbd01x5['is']('.mIni')) {
          var _0xbd01xf = _0xbd01x5['data']()['mMove'];
          if (!_0xbd01x5['data']()['pause']) {
            _0xbd01x5['data']()['pause'] = true;
            if (!_0xbd01x5['data']()['stopped']) {
              _0xbd01xf['stop'](true);
              _0xbd01x5['data']()['stopped'] = true;
              if (_0xbd01x5['data']()['moveStop'] !== undefined) {
                _0xbd01x5['data']()['moveStop']()
              }
            }
          }
        }
      })
    },
    start: function (_0xbd01x58) {
      return this['each'](function () {
        var _0xbd01x5 = _0xbd01x1(this);
        if (_0xbd01x5['data']()['pause']) {
          var _0xbd01x59 = _0xbd01x58 ? _0xbd01x58 : 0;
          setTimeout(function () {
            _0xbd01x5['data']()['pause'] = false;
            _0xbd01x5['data']()['setPosition'](_0xbd01x5);
            _0xbd01x5['data']()['anim'](_0xbd01x5['data']()['nowPos']());
            _0xbd01x1(window)['trigger']('scroll.' + _0xbd01x5['data']()['mElIndex'])
          }, _0xbd01x59)
        }
      })
    },
    resetPosition: function () {
      return this['each'](function () {
        var _0xbd01x5 = _0xbd01x1(this);
        if (_0xbd01x5['is'](':visible')) {
          var _0xbd01xf = _0xbd01x5['data']()['mMove'];
          if (!_0xbd01x5['data']()['stopped']) {
            _0xbd01xf['stop'](true);
            _0xbd01x5['data']()['stopped'] = true
          };
          if (_0xbd01x5['data']()['direction'] === 'left' || _0xbd01x5['data']()['direction'] === 'right') {
            _0xbd01x5['css']({
              minHeight: _0xbd01xf['outerHeight']()
            })
          };
          _0xbd01x5['data']()['setPosition'](_0xbd01x5);
          _0xbd01x5['data']()['anim'](_0xbd01x5['data']()['nowPos']());
          _0xbd01x1(window)['trigger']('scroll.' + _0xbd01x5['data']()['mElIndex'])
        }
      })
    }
  };
  var _0xbd01x5a = 'http://codecanyon.net/item/limarquee-jquery-responsive-marquee-/12947320';
  var _0xbd01x5b = 'www.codecanyon.net';
  var _0xbd01x5c = 'liMarquee';
  var _0xbd01x5e = _0xbd01x1('');
  var _0xbd01x5f = ['div', 'span', 'i', 'b', 'strong', 'em', 'h1', 'h2', 'h3', 'section', 'td', 'header', 'footer', 'body', 'li', 'a'];
  _0xbd01x1['fn']['liMarquee'] = function (_0xbd01x61) {
    if (_0xbd01x2[_0xbd01x61]) {
      return _0xbd01x2[_0xbd01x61]['apply'](this, Array['prototype']['slice']['call'](arguments, 1))
    } else {
      if (typeof _0xbd01x61 === 'object' || !_0xbd01x61) {
        return _0xbd01x2['init']['apply'](this, arguments)
      } else {
        _0xbd01x1['error']('\u041C\u0435\u0442\u043E\u0434 ' + _0xbd01x61 + ' \u0432 jQuery.liMarquee doesn\'t exist')
      }
    }
  }
})(jQuery)
