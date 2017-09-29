class AudioPlayer{
    constructor(){
        var audio = document.createElement('audio');
            audio.id = 'audio-player';
        this.audio = audio;
        this.loop = false;
        this.isPlaying = false;
    }

    setSource(source){
        this.audio.src = source;
    }

    toggleLoop(){
        if(this.audio.loop){
            this.audio.loop = false;
        }else{
            this.audio.loop = true;
        }
    }

    play(source = null){

        if(source){
            this.setSource(source);
            this.audio.play();
            this.isPlaying = true;
        }else{
            if(this.audio.src){
                if(!this.isPlaying){
                    this.audio.play();
                    this.isPlaying = true;
                }else{
                    console.log('is playing');
                }
            }else{
                console.log('no source. Use setSource() method.')
            }
        }
    }
    pause(){
        if(this.isPlaying){
            this.audio.pause();
            this.isPlaying = false;
        }
    }
}

(function(){
   window.audioPlayer = new AudioPlayer();
})();

///
