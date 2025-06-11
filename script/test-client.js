const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
    console.log("🟢 Connected to server");

    socket.emit("chat message", {
        username: "Marco",
        message: "Salut Thomas !"
    });
});

socket.on("chat message", (data) => {
    console.log("Nouveau message reçu", data);
});