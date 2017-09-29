# audio-player-js
small audioplayer for playing music in background of your site
#### Usage:
include into page before your script:
   ```html
<script src="audio-player.js"></script>
   ```
script is creating ```AudioPlayer``` object, and place it into ```window.audioPlayer``` property.
#### Properties
*``.audio``* - HTML Audio element with ```{ id:"audio-player",loop:"false" }```

*``.isPlaying``* - Bolean, shows player state.
#### Methods
*``.setSource(<source>)``* - set path to sound-file. <source> - String, relative path to file;

*``.toggleLoop()``* - toggles audio element property "loop", default -> false;

*``.play(null || <source>)``* - starts playback. If you need to change sounf-file, you may pass it here, like in ``.setSource()`` method.
\<source\> - String, relative path to file;

*``.pause()``* - pauses playback;
