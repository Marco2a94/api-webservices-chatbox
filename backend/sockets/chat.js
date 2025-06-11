module.exports = function(socket, io) {
    console.log("🟢 Un client s'est connecté :", socket.id);
    
    socket.on("chat message", (data) => {
        console.log("Message reçu :", data);
    
        io.emit("chat message", data);
    });

    socket.on("disconnect", () => {
        console.log("🔴 Client déconnecté :", socket.id);
    });
};
