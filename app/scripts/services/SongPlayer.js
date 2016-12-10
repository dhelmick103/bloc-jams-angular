(function() {
     function SongPlayer() {
          var SongPlayer = {};

          /**
          *@desc holds current song number
          *@type {number}
          */

          var currentSong = null;

          /**
          *@desc Buzz object audio file
          *@type {Object}
          */
          var currentBuzzObject = null;

          /**
          * @function setSong
          * @desc Stops currently playing song and loads new audio file as currentBuzzObject
          * @param {Object} song
          */

          var setSong = function(song) {
             if (currentBuzzObject) {
                 currentBuzzObject.stop();
                 currentSong.playing = null;
             }

             currentBuzzObject = new buzz.sound(song.audioUrl, {
                  formats: ['mp3'],
                  preload: true
             });

// Set newly selected song as the currentSong
             currentSong = song;
          };

          /**
          *@function playSong
          *@desc sets song.playing to true and plays current song
          *@param {Object} song
          */

          var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
          };

          /**
          *@function SongPlayer.play
          *@desc plays the current or selected song
          @params {Object} song
          */

          SongPlayer.play = function(song) {
              if (currentSong !== song) {
                setSong(song);
                playSong(song);
              } else if (currentSong === song) {
                  if (currentBuzzObject.isPaused()) {
                      currentBuzzObject.play();
                  }
              }
          };

          /**
          @function SongPlayer.pause
          @desc pauses the song that is currently playing while setting the play boolean to false
          @param {Object} song
          */

          SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
          };

          return SongPlayer;
     }

     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
