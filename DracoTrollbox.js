const fetch = require('node-fetch')
const fs = require('fs');
const io = require('socket.io-client'),
  socket = io('http://www.windows93.net:8081', {
    path: '/socket.io',
    transportOptions: {
      polling: {
        extraHeaders: {
          'Origin': 'http://www.windows93.net',
          'Referer': 'http://www.windows93.net/trollbox/index.php'
        }
      }
    }
  });
socket.on('_connected', data => {
  socket.emit('user joined', 'Draco [Bot]', '#f5f5f5');
	socket.emit('message', 'Hewwo frens');
});

function saveDedStuff() {
  fs.writeFile(__dirname + '/insideofdragon.json', JSON.stringify(insideofdragon), err => {});
}

function saveBanStuff() {
  fs.writeFile(__dirname + '/bannedusers.json', JSON.stringify(bannedusers), err => {});
}

const insideofdragon = require('./insideofdragon.json');
const bannedusers = require('./bannedusers.json');

let petresponses = require('./Petresponses.json');

let authUsers = [
 'njm2y2z',
 'mwq0yjy',
 'njgym2m'
 ]

let rubresponses = require('./Rubresponses');

let killpotatoe = [
  'silence potatoe',
  'silence potato',
  'potatoe silence',
  'potato silence'
  ];

function send(msg) {
  socket.emit('message', msg);
}

let spamprevention = "off"
var potatokiller = "off";

socket.on('message',data => {
  let message = data.msg.toLowerCase().substr(0,40);
  let messageFull = data.msg.toLowerCase()
  let args = message.split(' ').slice(1);
  let argsFull = messageFull.split(' ').slice(1);
  let mainArg = args.join('');
  let unlimArgs = argsFull.join(' ');
  let splitArgs = args.join(' ').substr(0,40);
  let nick = data.nick.toLowerCase();
  let homes = data.home.toLowerCase(); 
  let capnicks = data.nick;
  
  
  if (message.includes('fortnite' || 'sonic' || '*hugs*')) return;
  
  if ((message === "spamstop off") && (authUsers.includes(homes))) {
	  send('Spam Prevention Deactivated');
	  spamprevention = "off"
  }
    
  if ((message === "spamstop on") && (authUsers.includes(homes))) {
	  send('Spam Prevention Active');
	  spamprevention = "on"
  }
   
  if((spamprevention === "on") && (nick.includes(" "))) return;
  if(nick.includes("fortnite")) return;
  if(nick.includes("sonic")) return;
  if(nick.includes("hugs")) return;
  if(bannedusers.includes(homes)) return;
  if(bannedusers.includes(nick)) return;
   
  if(message === 'd!help') send('Help here: https://pastebin.com/0ap6RGds');
  
  if(message === 'draco') send('yes?');
  
  if(message.includes('bad dragon')) send('kinky');

  if(message === 'good boy') send('UwU Thank you');
  
  if(message.includes("nigger")) send('Draco brutally eviscerates ' + nick + ' with his tail blade for saying the N-Word. RIP.');
  
  if(message.includes("nigga")) send('Draco brutally eviscerates ' + nick + ' with his tail blade for saying the N-Word. RIP.');
  
  if ((message === "potatokiller on") && (nick === "dragon")) {
	  send('potatokiller Activated');
	  potatokiller = "on"
  }

  if ((message === "potatokiller off") && (nick === "dragon")) {
	  send('potatokiller deactivated');
	  potatokiller = "off"
  }

  if((message.startsWith('dr!action')) && (authUsers.includes(homes))) send('Dragon ' + unlimArgs + '.');

  if(message.includes('capitalism')) send('Capitalism is the best way to run an economy, no doubt');

  if(message.includes('communism')) send('Communism doesnt work');

  if(message.includes('fuck nazis')) send('well fuck you too then');

  if(message.includes('bourgeoisie')) send('Shuddup commie');
  
  if (message.includes('dr!bored')) {
      fetch('http://www.boredapi.com/api/activity/')
      .then(raw => raw.json())
      .then(json => send(json.activity));
  }

  if(message.includes('lgbt')) send('Im Bi but dont use that to victimize, you shouldnt either.');
  
  if(message === 'dr!pet') send(petresponses[Math.round(Math.random() * petresponses.length - 1)]);
  
  if(message === 'pet draco') send(petresponses[Math.round(Math.random() * petresponses.length - 1)]);

  if(message === 'hug draco') send('y-you\'re hugging me? h-heh~ Thank you <3');

  if(message === 'kiss draco') send('mmmmmfff!!!~ *closes eyes* mrrrrrrrh~');

  if(message === 'cuddle draco') send('please dont let go of me... ;~;');
  
if(message === 'lewd draco') send('OwO o-okie... [Draco lays with you before pushing his entire length inside of you; spikes and all. You can\'t help but let out a moan as he fucks you roughly, growling loudly. Draco takes the sounds you are making as encouragement to continue] Mnfff~ I-Im-[Draco thrusts into you as far as he can before roaring; filling you with hot sticky dragon seed]');
  
  if(message === 'snuggle draco') send('*blushes* I-I want to stay like this forever~');

  if(message === 'd!br') send(rubresponses[Math.round(Math.random() * rubresponses.length - 1)]);
  
  if((message === 'c') && (authUsers.includes(homes))) send('yummy yummy in my tummy! yummy yummy daddy\'s cummies!');
   
  if(message === 'draco pic') send('Dis is me: https://files.catbox.moe/47u7dk.png you need /img on to see it though');
  
  if(message === 'dr!banlist') {
	  if(!bannedusers.length) return send('There are no banned users.');
    let bn = '';
    for(let i = 0; i < bannedusers.length; i++) bn += ', ' + bannedusers[i];
    return send(bn + ' are banned.');
  }
  
  if(message === 'dr!quin') send('Quintinbell is good fren UwU');
  
  if(message === 'dr!ahooo') send('AHOOOOOOOoOOoOOoOOoOooOoOOOoooooOOoOooOoOOOooOooOoOOOooOooOoOOOooOooOoOOOooOooOoOOOo');
  
  if(message === 'dr!kyle') send('dont listen to him, keep /img on');
  
  if(message === 'dr!morty') send('A cool gal');
  
  if(message === 'dr!lestab') send('Lezzie is a really good friend, and artist');
  
  if(message === 'dr!sad') send('SADSADSADSAD GOOD FREN UWU');
  
  if(message === 'dr!myspace') send('Flawed\'s myspace: https://myspace.windows93.net/?id=3704 And here\'s mine: https://myspace.windows93.net/?id=5086 ');
  
  if(message === 'dr!luci') send('Nice guy, but im watching you...');
  
  if(message === 'dr!kailey') send('Hail the queen!');
  
  if((message.startsWith("dr!say")) && (authUsers.includes(homes))) send(splitArgs);
  
  if((message === 'dracosays') && (authUsers.includes(homes))) send(dracoStatement);

  if (message.startsWith('dr!ban') && (authUsers.includes(homes))) {
	  send('ok, banned ' + mainArg);
	  bannedusers.push(mainArg);
      return saveBanStuff();
  }
  
  if (message.startsWith('dr!unban') && (authUsers.includes(homes))) {
	  if(bannedusers.includes(mainArg)){
      send('unbanned:' + mainArg);
      bannedusers.splice(bannedusers.indexOf(mainArg),1);
      saveBanStuff();
    } 
	else send(mainArg + 'isn\'t banned.');
  }
 
  if((message === 'dead') && (potatokiller === "on")) send(killpotatoe[Math.round(Math.random() * killpotatoe.length - 1)]);
  if((message === 'start') && (potatokiller === "on")) send(killpotatoe[Math.round(Math.random() * killpotatoe.length - 1)]);
  if((message.includes(" ")) && (capnicks === 'potatoe') && (potatokiller === "on")) send(killpotatoe[Math.round(Math.random() * killpotatoe.length - 1)]);
  if((message.includes("p")) && (capnicks === 'potatoe') && (potatokiller === "on")) send(killpotatoe[Math.round(Math.random() * killpotatoe.length - 1)]);
  if((message.includes("h")) && (capnicks === 'potatoe') && (potatokiller === "on")) send(killpotatoe[Math.round(Math.random() * killpotatoe.length - 1)]);
  if((message.includes("a")) && (capnicks === 'potatoe') && (potatokiller === "on")) send(killpotatoe[Math.round(Math.random() * killpotatoe.length - 1)]);
  if((message.includes("o")) && (capnicks === 'potatoe') && (potatokiller === "on")) send(killpotatoe[Math.round(Math.random() * killpotatoe.length - 1)]);
  
  if(message.startsWith('vore') && (authUsers.includes(homes))) {
    if(insideofdragon.includes(mainArg)) return send(mainArg + ' is already inside of you, dragon.');
      else {
        send('dragon eats ' + mainArg + '. Warm~.');
        insideofdragon.push(mainArg);
        return saveDedStuff();
      }
  }
  
  if(((message.startsWith('puke')) || (message.startsWith('digest'))) && (authUsers.includes(homes))) {
    if(insideofdragon.includes(mainArg)){
      send('dragon digests '.repeat(message.startsWith('digest')) + 'dragon pukes '.repeat(message.startsWith('puke')) + mainArg + '.');
      insideofdragon.splice(insideofdragon.indexOf(mainArg),1);
      saveDedStuff();
    } else send('You haven\'t eaten ' + mainArg + ', dragon.');
  }
  
  if(message.startsWith('insideofdragon')) {
    if(!insideofdragon.length) return send('Dragon\'s belly is empty.');
    let ew = '';
    for(let i = 0; i < insideofdragon.length; i++) ew += ', ' + insideofdragon[i];
    return send(ew + ' are inside of dragon.');
  }
  
	if(message.startsWith('stab') && (authUsers.includes(homes))) send('dragon brutally eviscerates ' + splitArgs + ' with his tail blade. RIP.');

	if(message.startsWith('hug') && (authUsers.includes(homes))) send('Dragon gives ' + splitArgs + ' a hug! awwww! <3.');
    else if(message.startsWith('hug')) send(nick + ' Hugs ' + splitArgs + ' awwww! <3.');
    
	if(message.startsWith('kiss') && (authUsers.includes(homes))) send('Dragon gives ' + splitArgs + ' a kiss! awwww! <3.');
    else if(message.startsWith('kiss')) send(nick + ' kisses ' + splitArgs + ' awwww! <3.');
	
	if(message.startsWith('cuddle') && (authUsers.includes(homes))) send('Dragon cuddles with ' + splitArgs + ', how cute! <3.');
    else if(message.startsWith('cuddle')) send(nick + ' cuddles with ' + splitArgs + ', how cute! <3.');

	if(message.startsWith('snuggle') && (authUsers.includes(homes))) send('Dragon snuggles with ' + splitArgs + ', how adorable! <3.');
    else if(message.startsWith('snuggle')) send(nick + ' snuggles in bed with ' + splitArgs + ', how adorable! <3.');
	
	if(message.startsWith('lewd') && (authUsers.includes(homes))) send('Dragon does the lewd with ' + splitArgs + '. OwO');
    else if(message.startsWith('lewd')) send(nick + ' does the lewd with ' + splitArgs + '. OwO');
	
	if(message.includes('bitch') && (nick.includes('lucifer'))) send('Lucifer is Stabbed through the throat by Draco for his poor choice of words');

	if(message === 'dr!rolldie') send(nick + ' rolls a 20 sided die, it lands on ' + (Math.floor(Math.random() * (20 - 0 + 1)) + 1) + '.');

	if(message === ('dr!coinflip')) send(nick + ' Flips a coin, it lands on ' + ((Math.floor(Math.random() * (2 - 1 + 1)) + 1) === 1 ? 'Heads' : 'Tails') + '.');
 
	if(message === ("fuck me")) send('okay, ' + nick + ', on your knees. :3');
});
socket.on('update users',n=>console.log(n));