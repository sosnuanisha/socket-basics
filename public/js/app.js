	  
		   var socket =io();
		   
		   function getQueryVariable(variable) {
                    var query = window.location.search.substring(1);
                    var vars = query.split('&');
                    for (var i = 0; i < vars.length; i++) {
                       var pair = vars[i].split('=');
                       if (decodeURIComponent(pair[0]) == variable) {
                       return decodeURIComponent(pair[1].replace(/\+/g, ' '));
                        }
                      }
    
    return undefined;
}
		   	   
		   var name=getQueryVariable('name') || 'Annonymous';
		   var room=getQueryVariable('room');
               
               
               jQuery('.room-title').text(room);
		   
		   console.log(name +' wants to join the '+ room);
		   
		   socket.on('connect',function(){
			   
			   console.log('Connected to socket.io socket !');
                     socket.emit('joinRoom',{
                           name:name,
                           room:room
                     });
		   });
		   
		   
		   socket.on('message', function(message){
			   
			   var momentTimestamp = moment.utc(message.timestamp);
			   var $message=jQuery('.messages');
			   
			   console.log('New Message !');
			   console.log(message.text);
			   
			  $message.append('<p><strong>'+ message.name+' ' + momentTimestamp.local().format('h:mm a') + '</strong></p>');
			  $message.append('<p>'+ message.text+' ' + '</p>');
			 // jQuery('.messages').append('<p><strong>'+momentTimestamp.local().format('h:mm a')+'</strong>'+message.text + '</p>');
			   
		   });
		   
		   //Handle submitting new message
		   
		   var $form=jQuery('#message-form');
		   
		   $form.on('submit',function(event){
			   event.preventDefault();
			   
			   var $message=$form.find('input[name=message]')  ;
			   
			   socket.emit('message',{
				   name : name,
				   text: $message.val()
			   });
			   
			 $message.val('');
		   });
		   