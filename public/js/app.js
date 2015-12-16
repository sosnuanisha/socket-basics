	  
		   var socket =io();
		   
		   socket.on('connect',function(){
			   
			   console.log('Connected to socket.io socket !');
		   });
		   
		   
		   socket.on('message', function(message){
			   
			   console.log('New Message !');
			   console.log(message.text);
			   
		   });
		   