const socket = io("wss://socket-app-dg538.ondigitalocean.app", {
  path: "/server",
});
//const socket = io("ws://127.0.0.1:8080/");

socket.on("message", (text) => {
  const el = document.createElement("li");
  el.innerHTML = text;
  document.querySelector("ul").appendChild(el);
});

document.querySelector("button").onclick = () => {
  const text = document.querySelector("input").value;
  socket.emit("message", text);
};
