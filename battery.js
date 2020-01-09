    window.addEventListener('keydown', function(e){
        let audio = this.document.querySelector('audio[data-key="'+e.keyCode+'"]') ; // select corresponding audio
        let keyDown = this.document.querySelector('.key[data-key="' +e.keyCode+'"]'); // // select corresponding Key
        let allKeys = this.document.querySelectorAll('.key');  // Select All keys 

        if(audio){  
                keyDown.classList.add('playing');
            audio.currentTime = 0; //set position to start audio
            audio.play();

            let deleteTransition = function(e){     // function who delete .playing
               keyDown.classList.remove('playing'); 
            }

            for(var i=0 ; i<allKeys.length; i++){
                allKeys[i].addEventListener('transitionend', deleteTransition)
            }
            
        }else{
             this.console.log('Error Key !!')
        }
    });
