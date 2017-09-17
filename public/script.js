var socket = io.connect("http://localhost:3000");
var b = document.getElementById("button")
var txt = document.getElementById("text")
var title = document.getElementById("title")

String.prototype.toCharArray = function() {
  return this.split('');
}

Array.prototype.toString = function() {
  return this.join('');
}

b.onclick = function() {
  console.log(txt.value)
  socket.emit('button', txt.value.toCharArray())
}



socket.on('change', function(data) {
  title.textContent = data.toString()

});

socket.on('msg', function(data) {
  var msg = document.createElement("p")
  msg.textContent = data
  msg.class = "new"
  document.getElementById("div").appendChild(msg)
})
