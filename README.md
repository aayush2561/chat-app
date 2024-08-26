# Chatapp

Chatapp is minimal version of a chat application with feature like authentication,user listing,
proper user validation using jwt and real time chat using socket.io


## Screenshot
![screenshots](https://github.com/aayush2561/chat-app/blob/main/client/Preview.png)

## Features
- User Authentication:Signup with profile image using multer and proper validation and login with remember me section and jwt token.

- User listing : User can see the list of al the user for chatting with them.

- Protected Route: Routes are protected so only logged in users can access .

- Real time chat and user online and offline status :Using socket.io i have implemented proper real time communication.

  
## Technology Used

- React - frontend 
- Node and express -Backend
- Mongodb - Database

## Build Frontend

````
npm install
````
````
npm run dev
````

    
## Build backend
````
npm install
````
````
npm start
````
