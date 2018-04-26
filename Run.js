const Discord = require('discord.js');
const bot = new Discord.Client();

var ouate;
var ouat = ["Emma swan","Alice","Hook","Henry Mills","Tilly","Robin Hood","Peter Pan","Zelena","Belle","Nick Branson","Guardians","Cover of the Eight","Rumplestiltskin","Lucy","Jack","Mr Gold","Drizella","Margot","Neal Cassidy","Dr Facilier","Cinderella","Jefferson","Cora","Evil Queen","August Booth","Regina Mills","Eloise Gardener","Anastasia","Rapunzel Tremaine","Baelfire","Gideon","Black Fairy","Darkness","Mr.Samdi","Sheriff Graham","Ingrid","Snow White","Ruby","Lily Page","Ivy Belfrey","Weaver","Kelly West","Gretel","Mulan","Jacinda Vidrio","Tamara","Dr. Whale","Prince Charming","Merlin","Maleficent","Prince Neal","Mary Margaret Blanchard","Chad","Victoria Belfrey","Hades","Ariel","David Nolan","Cruella De Vil","Kathryn Nolan","Red Riding Hood","Will Scarlet","Doctor Sage","Tiana","Elsa","Greg Mendell","Aladdin","Aurora","Cecelia","Prince Philip","Mr. Hyde","Roni","Anna","Blue Fairy","Blind Witch","Isaac Heller","Ivo","Pinocchio","Rogers","Madame Leota","Violet Morgan","Merida","Malcolm","Nimue","Milah","Ursula","King Arthur","Wendy Darling","Sir Henry","Dorothy Gale","Robin of Locksley","Hercules","Jonathan","Daniel Cotter","Jafar","Marian","Naveen","King Leopold","Tinker Bell","Drew","Mother Superior","Prince James","Marcus Tremaine","Hida Braebum","Huntsman","Valet","Roland","Sabine","Hansel","Archie Hooper","Dragon","Author","Prince Eric","Lancelot","Ashley Boyd","Liam Jones","Tiger Lily","Sidney Glass","Jasmine","Zoso","Sheriff of Nottingham","Granny","Guinevere","Desk Sergeant","Victor Frankenstein","Kurt Flynn","Juminy Cricket","Abigail","Grace","Apprentice","Nicholas Zimmer","Megara","Zeus","Liam","Gerda","Saviors","Walsh","Dr. Jekyll","King George","Magic Mirror","Paige","Felix","Count of Monte Cristo","Gaston","Lost Boys","Helga","Alexandra","Geppetto","Anita Lucas","Ginda","Troll","Pan's Shadow","Sean Herman","Fairies","Robert","Eudora","Marco","Chemabog","Peter","Nova","Captain Nemo","Clorinda","Prince Thomas","Rapunzel","Grumpy","Deities","Black Beard","Leroy","William Smee","Anton","Poseidon","Lily's Father","Kristoff","Bo Peep","Ava Zimmer","Astrid","Dwarves","Beowulf","Hordor","Gerhardt","Werewolves","Captain Ahab","Brennan Jones","Lady Tremaine","Prince","Billy","Ruth","Amara","Dragons","Pongo","Albert Spencer","Quinn","Robert","Frederick","Johanna","Colette","Witch","Stephen","Seer","King David","Nurse Ratched","John Darling","Queen Snow","Stanum","Mermaids","King Stefan","Donna","King Midas","Jim","Mary","Maurice","Wraith","King Xavier","Rocinante","Lumiere","Madeline","Jacob","Hans","Vortigan","King Fergus","Oracle","Charlotte","Stealthy","Home Office","Fairy Godmother","Michael Tillman","Michael Darling","Lord Macintosh","Red Bird","Sir Morgan","Woodcutter","Dopey","Chief","Wolf","Mr. Clark","Tisbe","Siren","Morraine","Black Kinghts","Queen Elinor","Captain Silver","Mordred","Doc","Moe French","Perp","Myma","Walter","Sisters of Saint Meissa","Madame Faustina","Percival","Sneezy","Devin","William","Dr. Lydgate","Sultan","Ogres","Arlo","Furies","Violet Roberts","Roderick","Keith","Giants","Caterpillar","Medusa","Flying Monkeys","March Hare","Sir Kay","Shadows","Resistance","Martin","Fendrake the Healer","Wilby","Bashful","Little John","Sven","Cleo Fox","Knave of Hearts","Gus","Duke","Adalyn","Woodcutter","Orderly","Remy","Alphonse Frankenstein","Abraham","Cerberus","Gabriel","Mickael Griffiths","Sleepy","Dopey","Mitchell Herman","Claude","Friar Truck","Ryan","Kevin","Grand Pabbie","Claire Fairchild","Agrabahn Vipers","Bashful","Happy","Merry Men","Rock Trolls","Knights of the Round Table","Grif","Giant Squids","Krakens","Bandersnatchers","Unicorns","Louie","Bridge Trolls","Mayor Tomkins","Behemoth","Beatrice","Munchkins","Snowmen","Oz Guards","Igor","Knubbin","Bishop","Dead Eye","Lady Rapunzel","Florence","Will-o-the-wisps","Copper","Great Spider","Amos Slade","Hershel Worthington"];

var familyt;
var family = ["Acornshade","Acornstar","Adderberry","Addercloud","Addertooth","Aldersight","Amberdusk","Amberfang","Antstalk","Antstream","Applefur","Ashenstar","Ashstar","Aspendust","Badgerstar","Batclaw","Bearsong","Beaverear","Beaverleaf","Beavermist","Birchflower","Birchwater","Birdthorn","Blackflame","Blackstar","Blizzardfang","Blizzardfeather","Bluedusk","Boulderfang","Brambleleaf","Briarfang","Briarfur","Briarstar","Brightfern","Brokenfrost","Brokenshade","Brownclaw","Brownfur","Brownspirit","Brownstripe","Buzzardleaf","Buzzardstreak","Buzzardstripe","Cedarfang","Cedarshade","Cherrydream","Cherryfoot","Cindershade","Cindertooth","Clevershadow","Cloudfire","Cloudstar","Cloverbelly","Clovercoat","Cloverleg","Copperdust","Coppershade","Crowcoat","Daisycreek","Daisyripple","Darkstar","Dawnpelt","Deerfleck","Doesky","Dreamclaw","Dreamshade","Dreamstar","Driftstar","Ducksnout","Duskclaw","Dusktalon","Eagleclaw","Eagleshine","Eaglestar","Ebonyriver","Eelfrost","Eelwing","Elmjaw","Elmshade","Emberswirl","Fernshine","Ferntail","Ferretpelt","Firebird","Flamebelly","Flintclaw","Flintstar","Flowertail","Flowerwing","Flyheart","Foxblossom","Foxscar","Foxstar","Frostberry","Froststar","Furzeclaw","Gingerstep","Goldencloud","Grassflame","Graycreek","Grayflank","Grayfoot","Grimhawk","Hailface","Hailshade","Halfwing","Hazelglow","Hazelsnow","Hazelstone","Honeyslip","Icebird","Iceclaw","Icefeather","Icespring","Icetooth","Ivytail","Jaggedflank","Kestrelclaw","Lakebush","Lakeleaf","Leafcloud","Leafdream","Leapstar","Leopardcoat","Leopardscar","Leopardthroat","Lightclaw","Lioneye","Lionfur","Lochfang","Maplefrost","Maplepelt","Maplesky","Maplestar","Maplethroat","Mistydream","Mistyhawk","Mistystep","Molescar","Moosecoat","Moosestar","Mothfang","Mothstar","Mouseshade","Newtshadow","Newtstar","Newtswirl","Ottercoat","Otterstar","Palewing","Pineberry","Pinestorm","Rabbitpatch","Rainstar","Rainwhisker","Rapidcoat","Ratclaw","Ravenear","Ravensong","Ravenstar","Redfrost","Redstep","Ripplehawk","Robinfang","Robinstride","Rosedust","Rosestar","Rosetail","Rushstar","Sagecloud","Sagejaw","Sagestar","Sandytooth","Shadefire","Shadejaw","Shadowcoat","Sheepmist","Shellfire","Shortfeather","Silverclaw","Silvercoat","Silvershade","Skynose","Smokescar","Smokesong","Snakeclaw","Snowrunner","Snowstar","Sparrowcloud","Sparrowstar","Speckleflame","Spiderclaw","Spiderfang","Splashstar","Spottedcoat","Spottedheart","Spottedwing","Springsight","Sprucestar","Sprucewing","Stageye","Stormflame","Stormlight","Stumpyshadow","Swanberry","Swanbreeze","Swanflower","Swanwatcher","Swanwing","Swiftfur","Tallfang","Tatteredstar","Thistletalon","Tigercreek","Tigerlily","Tigerspark","Tigertalon","Tigerthorn","Tinyclaw","Tinyheart","Troutstone","Twistedclaw","Vineclaw","Vinejaw","Vinesong","Waspheart","Weaseldream","Weaselfang","Weaselfur","Whitebrook","Whitetail","Witheredsight","Wolfstar","Wolfstorm"];

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
                        message.channel.send('``5) type r!random ouat = Say a random name from once upon a time``');
		    	message.channel.send('``6) type r!random family tree = Say a random name from Romeo family tree``');
            break;
	case "r!random family tree" : familyt = Math.floor(Math.random() * (family.length - 0) + 0);  
		        message.channel.send(family[familyt]);
		break;

	case "r!random ouat" : ouate = Math.floor(Math.random() * (ouat.length - 0) + 0);  
		        message.channel.send(ouat[ouate]);
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
  
