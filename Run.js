const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.TOKEN);

bot.on('message', function (message){
    switch(message.content.toLowerCase()){
        case "pong" : pong(message);
            break;

        case "/destroy" : bot.destroy();
            break;

        case "it's not creepy" : message.channel.send('you should look on your back');
            break;

        case "projet" : message.channel.send("Car c'est notre PROJET!", {file: "https://cdn.discordapp.com/attachments/309794088931295242/345245472140689418/ezgif-3-efedfcc42f.gif"});
            break;
	
        case "who is belle?" : message.channel.send("She is my wife, don't touch her!", {file: "https://cdn.discordapp.com/attachments/241268309956231168/438419448538464258/a20c4b5751ba86a41bff2faa72c75242--movie-once-upon-a-time.png"});
            break;		
	
        case "i will trap her in a tower" : message.channel.send('NOOOOOOOO!');
            break;

        case "r!help" : message.channel.send('``1) who is "someone" = respond : how is "someone" so I can kill them. :smiling_imp:``');
                        message.channel.send('``2) r!evil = respond : rate the evil of smth/someone``');
                        message.channel.send('``3) who is belle? = respond with "its my wife and a pic of belle``'); 
                        message.channel.send('``4) i will trap her in a tower respond with : "NOOOOOOOO!"``');
                        
            break;
	
	case "i will trap her in a tower" : message.channel.send('NOOOOOOOO!');
            break;  
		    
        }
        
        
                        
	if (message.content.toLowerCase().startsWith('who is ')){
            
            var reason = message.content.substring(7, message.content.length);
            message.channel.send('how is ' + reason + ' so I can kill them. :smiling_imp:');
            
	}
        if (message.content.toLowerCase().startsWith('r!evil')){
            
            var reason = message.content.substring(6, message.content.length);
            message.channel.send(  reason + ' is ' +  Math.floor(random(100,0)) + '% evil'); 
            
	}
		
});

function pong(message){
    message.channel.send('ping');
}
function random(max,min) {
    return Math.random() * ( max - min );
}
function ping(message){
    message.channel.send('pong');
}
var numero;
  var noms = ["Calvin", "Laetitia", "Julien", "Leopold", "Steven"]
  numero = Math.floor(Math.random() * (noms.length - 0) + 0);        
