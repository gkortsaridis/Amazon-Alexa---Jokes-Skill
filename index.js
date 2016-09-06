//We are all about the laughts.
//Everybody wants short and quick funny sayings to cheer them up.

/*
There are a few moments on our everyday life, that we all need a quick joke. funny sayings is all about the laughs.
We are here to make your day just a bit better.
*/

//Alexa, ask funny sayings to tell me a joke
//Alexa, ask funny sayings to tell me another one

'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Space Facts';

var unirest = require('unirest');

var theEvent;
var theContext;

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    theEvent = event;
    theContext = context;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var funny_sayings = [
	"My neighbors are listening to great music. Whether they like it or not.",
	"It is important to make breaks between individual exercises. I personally stick to breaks of about 3-4 years.",
	"I have no friends. Even the toilet cover attacks me from the back.",
	"Sometimes I drink water - just to surprise my liver.",
	"Hearing voices in your head is normal. Listening to them is quite common. Arguing with them – acceptable. It is only when you lose that argument that you get in real trouble.",
	"Of course I have a talent. I'm really good in bed. Sometimes I sleep more than 9 hours in one go.",
	"If I wanted to commit suicide, I would climb up to the height of your ego and jump down to your IQ level.",
	"According to my mirror I am pregnant. The father is Nutella.",
	"Sometimes it’s time to lay on the couch and do nothing at all for two years.",
	"Organized people are simply too lazy to search for stuff.",
	"My relationship is like an iPad. I don't have an iPad.",
	"I am nobody. Nobody is perfect. I am perfect.",
	"If I can still lie on the ground without having to hold myself, I'm not drunk.",
	"Do people talk about you behind your back? Simply fart.",
	"As long as cocoa beans grow on trees, chocolate is fruit to me.",
	"There are people who are a living proof that total brain failure does not always lead to physical death.",
	"Finally, the spring is here! I'm so thrilled I wet my plants.",
	"If you’re having a bad day, remember some adults wear braces.",
	"I’m aware that the voices in my head aren’t real. But their ideas are just awesome sometimes!",
	"Somebody said today that I'm lazy. I nearly answered him.",
	"I’m not lazy. I’m just naturally a very relaxed person.",
	"What can you say when it's already late and you really want to go home? Can you hear that? That's my pillow calling and it becomes really mean when I let it wait too long",
	"Laziness Rule Number 1: If an object falls under the bed, it is lost forever.",
	"My mood is currently swinging between an axe and gasoline.",
	"A housewife's battle. The household stares at me. I stare right back. Without breaking eye contact, I slide a piece of chocolate in my mouth. I won!",
	"He who wakes up early, yawns all day long.",
	"You can only be young once. But you can enjoy being infantile forever.",
	"I am in touch with my motivation. I saw it going by this morning, waving at me and winking.",
	"I weighed myself today. It is clear I am too small for my weight."
];

var handlers = {
    'LaunchRequest': function () {
         this.emit(':ask', "Are you ready to have some fun? If you want a joke, just ask for it", SKILL_NAME)
    },
    'GetJoke': function () {
        var joke = funny_sayings[Math.floor(Math.random() * funny_sayings.length)];
         this.emit(':tell', joke, SKILL_NAME)
    },

    'EndIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },

    'HelpIntent': function () {
      var speechOutput = "I am here just to tell you jokes... Can you please ask me to tell you a joke?";
      var reprompt = "What can I help you with?";
      this.emit(':ask', speechOutput, reprompt);
    },

    'Unhandled': function () {
      var speechOutput = "Goodbye";
      this.emit(':tell', speechOutput, SKILL_NAME);
    },

    'AMAZON.HelpIntent': function () {
        var speechOutput = "I am here just to tell you jokes...";
        var reprompt = "What can I help you with?";
        this.emit(':tell', speechOutput, reprompt);
    },

    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },

    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
