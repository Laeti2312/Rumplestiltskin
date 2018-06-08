const Discord = require('discord.js');
const bot = new Discord.Client();
const GoogleImages = require('google-images');
const client = new GoogleImages('003811769180029091279:wzvaj2fip4m', 'AIzaSyDbdq3k8N2GqXpB2FvACeMZcxb0SzODojg');

var ouate;
var ouat = ["Emma swan","Alice","Hook","Henry Mills","Tilly","Robin Hood","Peter Pan","Zelena","Belle","Nick Branson","Guardians","Cover of the Eight","Rumplestiltskin","Lucy","Jack","Mr Gold","Drizella","Margot","Neal Cassidy","Dr Facilier","Cinderella","Jefferson","Cora","Evil Queen","August Booth","Regina Mills","Eloise Gardener","Anastasia","Rapunzel Tremaine","Baelfire","Gideon","Black Fairy","Darkness","Mr.Samdi","Sheriff Graham","Ingrid","Snow White","Ruby","Lily Page","Ivy Belfrey","Weaver","Kelly West","Gretel","Mulan","Jacinda Vidrio","Tamara","Dr. Whale","Prince Charming","Merlin","Maleficent","Prince Neal","Mary Margaret Blanchard","Chad","Victoria Belfrey","Hades","Ariel","David Nolan","Cruella De Vil","Kathryn Nolan","Red Riding Hood","Will Scarlet","Doctor Sage","Tiana","Elsa","Greg Mendell","Aladdin","Aurora","Cecelia","Prince Philip","Mr. Hyde","Roni","Anna","Blue Fairy","Blind Witch","Isaac Heller","Ivo","Pinocchio","Rogers","Madame Leota","Violet Morgan","Merida","Malcolm","Nimue","Milah","Ursula","King Arthur","Wendy Darling","Sir Henry","Dorothy Gale","Robin of Locksley","Hercules","Jonathan","Daniel Cotter","Jafar","Marian","Naveen","King Leopold","Tinker Bell","Drew","Mother Superior","Prince James","Marcus Tremaine","Hida Braebum","Huntsman","Valet","Roland","Sabine","Hansel","Archie Hooper","Dragon","Author","Prince Eric","Lancelot","Ashley Boyd","Liam Jones","Tiger Lily","Sidney Glass","Jasmine","Zoso","Sheriff of Nottingham","Granny","Guinevere","Desk Sergeant","Victor Frankenstein","Kurt Flynn","Juminy Cricket","Abigail","Grace","Apprentice","Nicholas Zimmer","Megara","Zeus","Liam","Gerda","Saviors","Walsh","Dr. Jekyll","King George","Magic Mirror","Paige","Felix","Count of Monte Cristo","Gaston","Lost Boys","Helga","Alexandra","Geppetto","Anita Lucas","Ginda","Troll","Pan's Shadow","Sean Herman","Fairies","Robert","Eudora","Marco","Chemabog","Peter","Nova","Captain Nemo","Clorinda","Prince Thomas","Rapunzel","Grumpy","Deities","Black Beard","Leroy","William Smee","Anton","Poseidon","Lily's Father","Kristoff","Bo Peep","Ava Zimmer","Astrid","Dwarves","Beowulf","Hordor","Gerhardt","Werewolves","Captain Ahab","Brennan Jones","Lady Tremaine","Prince","Billy","Ruth","Amara","Dragons","Pongo","Albert Spencer","Quinn","Robert","Frederick","Johanna","Colette","Witch","Stephen","Seer","King David","Nurse Ratched","John Darling","Queen Snow","Stanum","Mermaids","King Stefan","Donna","King Midas","Jim","Mary","Maurice","Wraith","King Xavier","Rocinante","Lumiere","Madeline","Jacob","Hans","Vortigan","King Fergus","Oracle","Charlotte","Stealthy","Home Office","Fairy Godmother","Michael Tillman","Michael Darling","Lord Macintosh","Red Bird","Sir Morgan","Woodcutter","Dopey","Chief","Wolf","Mr. Clark","Tisbe","Siren","Morraine","Black Kinghts","Queen Elinor","Captain Silver","Mordred","Doc","Moe French","Perp","Myma","Walter","Sisters of Saint Meissa","Madame Faustina","Percival","Sneezy","Devin","William","Dr. Lydgate","Sultan","Ogres","Arlo","Furies","Violet Roberts","Roderick","Keith","Giants","Caterpillar","Medusa","Flying Monkeys","March Hare","Sir Kay","Shadows","Resistance","Martin","Fendrake the Healer","Wilby","Bashful","Little John","Sven","Cleo Fox","Knave of Hearts","Gus","Duke","Adalyn","Woodcutter","Orderly","Remy","Alphonse Frankenstein","Abraham","Cerberus","Gabriel","Mickael Griffiths","Sleepy","Dopey","Mitchell Herman","Claude","Friar Truck","Ryan","Kevin","Grand Pabbie","Claire Fairchild","Agrabahn Vipers","Bashful","Happy","Merry Men","Rock Trolls","Knights of the Round Table","Grif","Giant Squids","Krakens","Bandersnatchers","Unicorns","Louie","Bridge Trolls","Mayor Tomkins","Behemoth","Beatrice","Munchkins","Snowmen","Oz Guards","Igor","Knubbin","Bishop","Dead Eye","Lady Rapunzel","Florence","Will-o-the-wisps","Copper","Great Spider","Amos Slade","Hershel Worthington"];

var familyt;
var family = ["Acornshade","Acornstar","Adderberry","Addercloud","Addertooth","Aldersight","Amberdusk","Amberfang","Antstalk","Antstream","Applefur","Ashenstar","Ashstar","Aspendust","Badgerstar","Batclaw","Bearsong","Beaverear","Beaverleaf","Beavermist","Birchflower","Birchwater","Birdthorn","Blackflame","Blackstar","Blizzardfang","Blizzardfeather","Bluedusk","Boulderfang","Brambleleaf","Briarfang","Briarfur","Briarstar","Brightfern","Brokenfrost","Brokenshade","Brownclaw","Brownfur","Brownspirit","Brownstripe","Buzzardleaf","Buzzardstreak","Buzzardstripe","Cedarfang","Cedarshade","Cherrydream","Cherryfoot","Cindershade","Cindertooth","Clevershadow","Cloudfire","Cloudstar","Cloverbelly","Clovercoat","Cloverleg","Copperdust","Coppershade","Crowcoat","Daisycreek","Daisyripple","Darkstar","Dawnpelt","Deerfleck","Doesky","Dreamclaw","Dreamshade","Dreamstar","Driftstar","Ducksnout","Duskclaw","Dusktalon","Eagleclaw","Eagleshine","Eaglestar","Ebonyriver","Eelfrost","Eelwing","Elmjaw","Elmshade","Emberswirl","Fernshine","Ferntail","Ferretpelt","Firebird","Flamebelly","Flintclaw","Flintstar","Flowertail","Flowerwing","Flyheart","Foxblossom","Foxscar","Foxstar","Frostberry","Froststar","Furzeclaw","Gingerstep","Goldencloud","Grassflame","Graycreek","Grayflank","Grayfoot","Grimhawk","Hailface","Hailshade","Halfwing","Hazelglow","Hazelsnow","Hazelstone","Honeyslip","Icebird","Iceclaw","Icefeather","Icespring","Icetooth","Ivytail","Jaggedflank","Kestrelclaw","Lakebush","Lakeleaf","Leafcloud","Leafdream","Leapstar","Leopardcoat","Leopardscar","Leopardthroat","Lightclaw","Lioneye","Lionfur","Lochfang","Maplefrost","Maplepelt","Maplesky","Maplestar","Maplethroat","Mistydream","Mistyhawk","Mistystep","Molescar","Moosecoat","Moosestar","Mothfang","Mothstar","Mouseshade","Newtshadow","Newtstar","Newtswirl","Ottercoat","Otterstar","Palewing","Pineberry","Pinestorm","Rabbitpatch","Rainstar","Rainwhisker","Rapidcoat","Ratclaw","Ravenear","Ravensong","Ravenstar","Redfrost","Redstep","Ripplehawk","Robinfang","Robinstride","Rosedust","Rosestar","Rosetail","Rushstar","Sagecloud","Sagejaw","Sagestar","Sandytooth","Shadefire","Shadejaw","Shadowcoat","Sheepmist","Shellfire","Shortfeather","Silverclaw","Silvercoat","Silvershade","Skynose","Smokescar","Smokesong","Snakeclaw","Snowrunner","Snowstar","Sparrowcloud","Sparrowstar","Speckleflame","Spiderclaw","Spiderfang","Splashstar","Spottedcoat","Spottedheart","Spottedwing","Springsight","Sprucestar","Sprucewing","Stageye","Stormflame","Stormlight","Stumpyshadow","Swanberry","Swanbreeze","Swanflower","Swanwatcher","Swanwing","Swiftfur","Tallfang","Tatteredstar","Thistletalon","Tigercreek","Tigerlily","Tigerspark","Tigertalon","Tigerthorn","Tinyclaw","Tinyheart","Troutstone","Twistedclaw","Vineclaw","Vinejaw","Vinesong","Waspheart","Weaseldream","Weaselfang","Weaselfur","Whitebrook","Whitetail","Witheredsight","Wolfstar","Wolfstorm"];

var lionkingg;
var lionking = ["Scar","Simba","Mufasa","Nala","Shenzi","Sarabi","Rafiki","Timon","Zazu","Ed","Shenzi clan","Banzai","Great Kings of the past","Pumbaa","Sarafina","Pride Landers","Simba Pride","Mole","Kovu","Kiara","Zira","Vitani","Nuka","Outsiders","Kion","Fuli","Askari","Bunga","Ono","Beshte","Uncle Max","Ma","Timon colony","Iron Joe","Army of Scar","Sumu","Janja","Ushari","Makucha","Kiburi","Reirei","Shupavu","Nduli","Dogo","Mzingo","The Zimwi","Makucha leap","Nne","Cheezi","Chungu","Njano","Goigoi","Dogo brothers","Tamka","Mapigano","Mpishi","Mwoga","Mzingo's parliament","Tano","Nyeusi","Uroho","Mwevi","Mwizi","Kopa","Mohatu","Lion Guard","Kopa","Jasiri","Makini","Furaha","Dhahabu","Mzaha","Mtoto","Hadari","Badili","Kifaru","Herman","Ona",];

var Mazerunner;
var Mazeruner = ["Adam","Alby","Ben","Chuck","Clint","Frankie","Frypan","Gally","George","Hank","Jeff","Minho","Newt","Nick","Stan","Stephen","Teresa","Thomas","Tim","Winston","Zart","Aris Jones","Rachel","Sonya","Harriet","Beth","A.D. Janson","Ava Paige","Brenda","Dr. Christensen","Dr. Wright","Jorge","Lisa","Alec","Baxter","Darnell","Deedee","Lana","Mark","Misty","Toad","Trina","Chancellor Kevin Anderson","Chancellor Ava Paige","The Glade","Bulb Monster","Beetle Blade","Grievers","The Trials","Assistant Director Janson","Scientist Trent","Soldier David","Pilot Tony","Nurse Lisa","Jorge","Brenda","Teresa Agnes","Thomas","Aris Jones","Rachel","WCKD"];

var Digimons;
var Digimon = ["Agumon","Zamielmon","Gomamon","Terriermon","Gabumon","Patamon","Veemon","Ex-Veemon","Garurumon","Tai","T.K.","Izzy","Ken","Davis","DemiVeemon","Axemon","Wormmon","Kari Kamiya","Gatomon","Renamon","Guilmon","Henry Wong","Lopmon","Wisemon","Wizardmon","Christopher Aonuma","Jeremy Tsurgi","Mikey Kudo","Angie Hinomoto","Takato","Quartzmon","Impmon","Mimi","Sora","Biyomon","Palmon","Angemon","Angewomon","Rika","Yolei","Cody","Dorbickmon","ZekeGreymon","Matt","Shoutmon","Nene Amano","Lord Bagra","Myotismon","Olegmon","Gravimon","Omnimon","Splashmon","Whamon","PiedmonMachinedramon","Spadamon","Tactimon","Puppetmon","DemiDevimon","Cyberdramon","Harpymon","Etemon","AxeKnightmon","Cutemon","Chibitortomon","Greymon","Laylamon","Kyubimon",];

var Baltos;
var Balto = ["Balto","Jenna","Aleu","Aniu","Kodi","Steele","Niju","Saba","Dingo","Rosy","Boris","Star","Dixie","Sylvie","Nava","Dusty","Stella","The Red-faced pup","Kaltag","The Grizzly Bear","Balto's Father","Ralph","Kirby","Muk","Luk","Nikki","The Red-blaze pup","Nuk","Yak","Sumac","Grandma Rosy","Vike","Mel","Dipsy","Duke","Steele's Musher","Other Bull Moose","Bull Moose","Totem animals",];



bot.login(process.env.TOKEN);

bot.on('message', async function (message){
    switch(message.content.toLowerCase()){
        case "pong" : pong(message);
            break;

        case "r!destroy" : message.channel.send("you cannot kill me...\n"+
		    	   "I live on Internet now!");
            break;
		    
	
        case "who is belle?" : message.channel.send("She is my wife, don't touch her!", {file: "https://cdn.discordapp.com/attachments/241268309956231168/438419448538464258/a20c4b5751ba86a41bff2faa72c75242--movie-once-upon-a-time.png"});
            break;		
	
        case "i will trap her in a tower" : message.channel.send('NOOOOOOOO!');
            break;
	
	    case "r!help" : message.channel.send({embed: {
			    color: 6560355,
			    author: {
			      name: bot.user.username,
			      icon_url: bot.user.avatarURL
			    },
			    title: "Rumplestiltskin Help commands",

			    description: "Type these commands to get some help on how to use Rumplestiltskin",
			    fields: [{
				name: "who is smth/someone",
				value: "respond with how is smth/someone so I can kill them. :smiling_imp:"
			      },
			      {
				name: "r!evil",
				value: "rates the evil of smth/someone"
			      },
			      {
				name: "who is belle?",
				value: "respond with its my wife and a pic of belle "
			      },
			      {
				name: "pong",
				value: "respond with ping"
			      },
			      {
				name: "i will trap her in a tower",
				value: "respond with NOOOOOOOO!"
			      },
			      {
				name: "r!say",
				value: "make the bot talk"
			      },
	
			      {
				name: "r!random ouat ",
				value: "Say a random name from once upon a time"
			      },
			
			      {
				name: "r!search smth",
				value: "google images random search smth"
			      },
			    ],
			    timestamp: new Date(),
			    footer: {
			      icon_url: bot.user.avatarURL,
			      text: "© Rumplestiltskin"
			    }
			  }
			});
	    break;
	
	case "r!random family tree" : familyt = Math.floor(Math.random() * (family.length - 0) + 0);  
		        message.channel.send(family[familyt]);
		break;

	case "r!random ouat" : ouate = Math.floor(Math.random() * (ouat.length - 0) + 0);  
		        message.channel.send(ouat[ouate]);
            break;  
	
	case "r!random lion king" : lionkingg = Math.floor(Math.random() * (lionking.length - 0) + 0);  
		        message.channel.send(lionking[lionkingg]);
            break;
	
	case "r!random maze runner" : Mazerunner = Math.floor(Math.random() * (Mazeruner.length - 0) + 0);  
		        message.channel.send(Mazeruner[Mazerunner]);
            break;
	
	case "r!random digimon" : Digimons = Math.floor(Math.random() * (Digimon.length - 0) + 0);  
		        message.channel.send(Digimon[Digimons]);
            break;

	case "r!random balto" : Baltos = Math.floor(Math.random() * (Balto.length - 0) + 0);  
		        message.channel.send(Balto[Baltos]);
            break;    	    
    
    	}
        
	
        if (message.content.startsWith("r!kick") && ( message.member.roles.find("name", "Admins") ||  message.member.roles.find("name", "blabla"))) {
		// Easy way to get member object though mentions.
		var member= message.mentions.members.first();
		if(!(member.roles.find("name", "Admins") || member.roles.find("name", "blabla"))){
			// Kick
			member.kick().then((member) => {
			    // Successmessage
			    message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
			}).catch(() => {
			     // Failmessage
			    message.channel.send("I cannot kick I'm not an admin");
			});
		} else {
			message.channel.send("Cannot kick an admin !");
		}
			
	}
	
	if (message.content.startsWith("r!ban") && message.member.roles.find("name", "Admins")) {
		// Easy way to get member object though mentions.
		var member= message.mentions.members.first();
		// Kick
		member.ban().then((member) => {
		    // Successmessage
		    message.channel.send(":wave: " + member.displayName + " has been successfully banned :ok_hand: ");
		}).catch(() => {
		     // Failmessage
		    message.channel.send("Access Denied");
		});
	}
                        
	if (message.content.toLowerCase().startsWith('how is ')){
            
            var reason = message.content.substring(7, message.content.length);
            message.channel.send('who is ' + reason + ' so I can kill them. :smiling_imp:');
            
	}
        if (message.content.toLowerCase().startsWith('r!evil')){
            
            var reason = message.content.substring(6, message.content.length);
            message.channel.send(  reason + ' is ' +  Math.floor(random(100,0)) + '% evil');
	}
	 
	if (message.content.toLowerCase().startsWith('r!search ')){
            
            var reason = message.content.substring(9, message.content.length);
	    const images = await client.search(reason);
	    message.channel.send(images[Math.floor(random(images.length,0))].url);
	}
		
	if(message.content.toLowerCase().startsWith('r!say')) {
	    var reason = message.content.substring(5, message.content.length);
	    message.delete(); 
	    message.channel.send(reason);
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
  
