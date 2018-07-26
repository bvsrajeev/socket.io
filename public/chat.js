//Make connection
var socket = io.connect('http://localhost:4000');

//Query Dom
message = document.getElementById('message');
handle = document.getElementById('handle');
btn = document.getElementById('send');
output = document.getElementById('output');
feedback = document.getElementById('feedback');

//Emit events
btn.addEventListener('click',function(){
  socket.emit('chat',{
    handle:handle.value,
    message:message.value
  });
});

message.addEventListener('typing',function(){
  socket.emit('typing',handle.value);
});


socket.on('chat',function(data){
  feedback.innerHTML = '';
  output.innerHTML += '<p><strong>'+data.handle+':</strong>'+data.message+'</p>';
});


socket.on('typing',function(data){
  feedback.innerHTML += '<p>'+data+'is typing....'+'</p>'
});
