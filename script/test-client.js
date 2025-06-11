const { io } = require("socket.io-client");

const socket = io("https://5f4d-209-206-8-34.ngrok-free.app");

socket.on("connect", () => {
    console.log("🟢 Connecté au serveur via ngrok");

    socket.emit("chat message", {
        username: "Marco",
        message: "Message via ngrok !"
    });
});

socket.on("chat message", (data) => {
    console.log("Nouveau message reçu", data);
});