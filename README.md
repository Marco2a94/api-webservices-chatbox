# api-webservices-chatbox
Developped by Marco A. and Thomas M.

## Overview
We are required to develop the frontend for a real-time chatroom application. The backend is already
deployed and accessible via a public IP using Ngrok. Our task is to build a React-based web interface that
allows users to:
- Enter a username before joining the chat.
- Send messages to the chatroom.
- Receive and display messages in real-time from other users.
- All users connected to the chatroom will see each other's messages as they are sent.

## Requirements
### 1. User Interface (UI)
- A simple UI with a text input field for entering the username.
- A chat window that displays messages in real-time.
- A message input field where users can type and send messages.

### 2. WebSocket Integration
- Connect to the backend WebSocket server.
- Send messages to the server.
- Listen for incoming messages from the server and update the chat UI accordingly.

### 3. Functionalities
- Users should be able to enter their username before joining the chat.
- The username input should be required before users can send messages.
- Messages should appear in the chat window as they are received.
- The chat input should support sending messages on pressing "Enter".