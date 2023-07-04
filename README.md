# TicTacToe

The following website is a functional multiplayer Tic Tac Toe game made in React. To create a lobby simply press the "Create a Room" button. Once loaded, you can invite your friends by sending them the generated URL. From here the game can be started from either player by clicking on the board (whoever plays first move plays as X's). After a game is finished, it can be restarted and played between the same players again.

** Note ** To test the app you may need to wait due to the backend server only booting up when there activity. Also, it can be tested between multiple tabs on the same device. 

## Client 
The client side of this application is built in React, it hosts all the logic for the game and establishes a socket connect with the server. Through socket.io rooms can be created 
so both players can communicate with a private room connection. Using this, all plays made in the game will be shown for both players including once a game winning/drawing play is made.

## Server
The node js server utilises socket.io to perform the basic calls needed to enable the frontend experience of the game. The server will receive all moves made in a game and transmit them back to the client side of the application. The server is currently hosted on glitch.com and will only bootup when activity from the client is established.  
