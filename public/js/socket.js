var sockets = {}

socket.on('data', function (data) {
  console.log(data);
});

socket.on('error', function (reason){
  console.error('Unable to connect Socket.IO', reason);
});


socket.on('connect', function (){
  console.info('successfully established a working and authorized connection');
});


socket.on('results', function(session){
  socket.session = session
});

console.log(sockets);