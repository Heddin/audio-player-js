'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AudioPlayer = function () {
    function AudioPlayer() {
        _classCallCheck(this, AudioPlayer);

        var audio = document.createElement('audio');
        audio.id = 'audio-player';
        this.audio = audio;
        this.audio.loop = false;
        this.isPlaying = false;
    }

    _createClass(AudioPlayer, [{
        key: 'setSource',
        value: function setSource(source) {
            this.audio.src = source;
        }
    }, {
        key: 'toggleLoop',
        value: function toggleLoop() {
            if (this.audio.loop) {
                this.audio.loop = false;
            } else {
                this.audio.loop = true;
            }
        }
    }, {
        key: 'play',
        value: function play() {
            var source = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];


            if (source) {
                this.setSource(source);
                this.audio.play();
                this.isPlaying = true;
            } else {
                if (this.audio.src) {
                    if (!this.isPlaying) {
                        this.audio.play();
                        this.isPlaying = true;
                    } else {
                        console.log('is playing');
                    }
                } else {
                    console.log('no source. Use setSource() method.');
                }
            }
        }
    }, {
        key: 'pause',
        value: function pause() {
            if (this.isPlaying) {
                this.audio.pause();
                this.isPlaying = false;
            }
        }
    }]);

    return AudioPlayer;
}();

(function () {
    window.audioPlayer = new AudioPlayer();
})();