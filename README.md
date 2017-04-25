Introduction to AngularJS

In the Introduction to AngularJS project, I refractored my Bloc Jams music player using AngularJS.  

Checkpoint 2 – Configuration
In this checkpoint, I cloned the frontend starter template used for select Bloc projects, including the Introduction to AngularJS project.  I also created a new github repository to house content for this project.  Once created, I migrated several files from the Bloc Jams project to the Bloc Jams Angular project, including the index page and multiple style sheets.  I also added the Angular Script File in the index.html page and linked the root module to the html tag.  In the assignment for checkpoint 2, I migrated the <nav> tag and its contents from the Bloc Jams index.html page and installed the ng-inspector for AngularJS.
[Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/f6a0a8fbdc861e26ea0dc8d512a4ba7918b67e83)
[Assignment Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/fa6ce7fd1ca69713705c25574b642f8e2b1c56e4)

Checkpoint 3 – Routing and States
In checkpoint 3, I added the ui-view to the global file (index.html).  I also created a landing.html, collection.html, and album.html pages.  I then added the UI-Router sourced into the index.html file and injected the UI-Router module into the application.  I then configured the Module using an Angular provider, configured paths with the $locataProvider, and configured states with the $stateProvider.  In the assignment, I implemented a third state named collection for the collection view and set the url and templateURL.  
[Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/96226f9f18cd030b1831b57f9d2a75e956f4b690)
[Assignment Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/af1e049286ff16164619fc0402c80c94c48d53ff)

Checkpoint 4 – Templates
In checkpoint 4, I created a player bar using the player bar markup from the bloc jams/album.html file.
[Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/058da323cc9f7587be0e0d6d57880cb552e78889)

Checkpoint 5 – Controllers
In checkpoint 5, I defined a controller (LandingCtrl.js) and added a controller property to the state configuration.  A link to the LandingCtrl.js file was added to the index.html page.  I then added a heroTitle property to the LandingCtrl.js page.  I then added a link to the fixtures.js file to the index.html page (because the jQuery code would have broke), added a CollectionCtrl.js, and resitered the CollectionCtrl to the collection state in app.js.  The data from the albumPicaso object was then bound to the Collection template.  The Collection Template was then updated to display multiple albums using the ngRepeat functionality.  In the assignment for checkpoint 5, I created a controller for the album view, linked it to the index.html file, and used the ngRepeat functionality on the album-view-song-item table row to add a song row for each song of the album.  Static song information was replace with markup.  
[Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/cdd1dad20aee4773a00e7877c8d6d230fded1c9d)
[Assignment Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/b13e76eec86ec6669d96ff76494896d20db20711)

Checkpoint 6 – Services Part 1
In checkpoint 6, I created a services directory and a Fixtures.js file within that folder to register a Fixtures service using the Factory recipe.  I then coped the two album objects from scripts/fixtures.js file into the scripts/services/Fixtures.js file.  After that, I injected the custom service into the AlbumCtrl.js file.  In the assignment for checkpoint 6, I injected the Fixtures service into the CollectionCtrl.js file.  
[Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/9c82bf371959979c4da03278bbecab73d8860776)
[Assignment Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/4e1f5a284fcb09d639792d13cb30069565d92a34)

Checkpoint 7: Services Part 2
In checkpoint 6, I created a SongPlayer file, registered SongPlayer.js using the Factory recipe, and linked it to the index.html file.  Because the SonPlayer service will play music, it was necessary to add the Buzz library source to the index.html file.  Since we are playing music from the Album view, I injected the SongPlayer Service into the AlbumCtrl.js file.  After that, I added a play method to the SongPlayer service so that a song can be played.  I then updated the SongPlayer.js file to incorporate logic to see if the song currently being played is or is not equal to the song the user clicks on.  I then wrote a pause method in the same file to pause a song.  In the assignment for checkpoint 7, I wrote a playSong function which plays the current Buzz object and sets the playing property of the song object to true.  Furthermore, the I replaced all instances when these two lines of code are used together with the playSong function.  
[Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/ef19da7c2aedf800cc1e39fb0f75a91de184e96f)
[Assignment Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/99fdbe4f1e88ea7ac1311fa0498ff6cab83a1d41)

Checkpoint 8: Services Part 3
In checkpoint 8, I began by created a new file called PlayerBarCtrl and injected both the Fixtures and SongPlayer services into the controller.  Then I added the source file to the index.html file and registered the PlayerBarCtrl for the player bar template.  After that, I updated the player bar template to clearly declare the play and pause buttons of the player bar.   In the SongPlayer.js file, I changed the private attribute currentSong into a public attribute named SongPlayer.currentSong so that it can be used within the player bar.  I then updated all instances of CurrentSong to songPlayer.currentSong in the player bar template.  After that, I updated the play and pause methods in the SongPlayer.js file to account for the fact that the player bar bar can’t pass song as an argument.  Next, I injected the Fixtures service into the SongPlayer service and used the getAlbum method to store the album information.   I then wrote a function to get the index of a song using the getSongIndex function.   To close out the checkpoint, I wrote a method in the SongPlayer.js file to go to the previous song and added functionality to the player bar template to trigger the previous method.  In the assignment for checkpoint 9, I implemented a SongPlayer.next method, a private stopSong function, and updated the player bar template to incorporate dynamic album and current song information (i.e. song name, artist name, and song time).  
[Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/895195c9007c87106b0c05b90df66feb6168d590)
[Assignment Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/0b3fe4240774e49dd693358126f817be342714a3)

Checkpoint 9: Directives 1
In checkpoint 9, I created a directives directory to distinguish primary application templates from directive templates.  From there, I created seek_bar.html file within the directives folder and pasted the seek bar elements from the player_bar.html file into the newly-created seek_bar.html file.  I then replaced both instances of the seek bar element in the player_bar.html file with the custom seekBar directive.  I then added a scope and link options to the seekBar.js file and linked the file to the index.html page.  The jQuery library was also added to the index.html file.  I then added logic to the seekBar Directive to view song progress.  Next, I updated the seekBar with two functions: one to call when a user clicks on the seek bar and the other for when a user drags the seek bar thumb.  In the assignment for checkpoint 9, I wrote a scope.thumbStyle method that updates the position of the seek bar thumb, using the ngStyle directive in the view to apply this style to the element.
[Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/a6e3067f42f042ea84b662c0f3e8f0b234cf587e)
[Assignment Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/9e694bdc1387f02985a97474ff7b56c8b6c5a507)

Checkpoint 10: Directives: Part 2
In checkpoint 10, I worked on making the seekbars interactive by changing the song position and volume.
[Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/e63c731636719ebd2ddab33beccf79942b37f481)
[Assignment Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/8bf7d7fe5435149cf67a71a33c942aa86418e088)

Checkpoint 11: Filters
In checkpoint 11, I wrapped up the project by adding a timecode filter to the newly-created timecode.js file.
[Source Code](https://github.com/dhelmick103/bloc-jams-angular/commit/aa9b62df20e48c74caf1abbac9838c347fcfc813)
  
