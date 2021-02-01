const nameList = [
  "Adonis",
  "After",
  "AgilityJS",
  "Alembic",
  "Alpaca",
  "Ampersand",
  "Amplitude",
  "Angular2",
  "AngularJS",
  "Angular-Meteor",
  "animeJS",
  "AnyChartJS",
  "Appium",
  "Appraise",
  "AriaTemplates",
  "Artillery",
  "Assemble",
  "Async",
  "AtmaJS",
  "Atom",
  "Aura",
  "Aurelia",
  "AutobahnJS",
  "Autoprefixer",
  "Awaity.js",
  "Babel",
  "BabylonJS",
  "Backbone",
  "Backpack",
  "Bacon.JS",
  "Barba.js",
  "Base",
  "BatmanJS",
  "Billboard.js",
  "Blaze_CSS",
  "Blendid",
  "Bliss",
  "Bluebird",
  "Bobril",
  "Bookshelf.js",
  "Bootstrap",
  "Bosket",
  "Bosonic",
  "BotPress",
  "Bower",
  "Brackets",
  "Breakdance",
  "Britecharts",
  "Brocolli",
  "Browserify",
  "Brunch",
  "Buster",
  "Butternut",
  "Cabbie",
  "CanJS",
  "Caporal",
  "Cappuccino",
  "Carbon",
  "Cell",
  "Cerebral",
  "Cesium",
  "Chai",
  "Chaplin",
  "ChartJS",
  "Chartist",
  "Charts",
  "Clementine",
  "Codecept",
  "CodeClimate",
  "CoffeeScript",
  "CommonJS",
  "Cordova",
  "CreateJS",
  "Create-Component-App",
  "Critical",
  "CujoJS",
  "CycleJS",
  "Cyclow",
  "Cypress",
  "Cytoscape",
  "D3",
  "DC",
  "Deku",
  "Delorean",
  "DerbyJS",
  "DHTMLX",
  "DIO",
  "Discharge",
  "DisplayJS",
  "Docsify",
  "Dojo",
  "DoneJS",
  "Downshift",
  "Draggable",
  "Dragula",
  "Duel",
  "Duo",
  "Durandal",
  "Dutier",
  "ECharts",
  "EchoJS",
  "Egg",
  "Electrode",
  "Electron",
  "Elm",
  "EmailJS",
  "Ember",
  "Emotion",
  "Ender",
  "Enquirer",
  "Enyo",
  "Epoch",
  "ES6",
  "ESLint",
  "esnext",
  "ExpressJS",
  "ExtJS",
  "FakerJS",
  "Falcon",
  "Falcor",
  "Fastify",
  "Firebase",
  "Fkill",
  "Flight",
  "Flow",
  "Flux",
  "Fly",
  "Foam",
  "Foundation",
  "Gatsby",
  "Generact",
  "Generate",
  "GitPoint",
  "Glamorous",
  "Glimmer",
  "Globalize",
  "GnosisJS",
  "GPU.JS",
  "GraphicsJS",
  "GraphQLCSS",
  "GreenSock",
  "Grunt",
  "Gulp",
  "Gun",
  "Gwt",
  "Handlebars",
  "Handsontable",
  "Hapi",
  "Haul",
  "Highcharts",
  "Holmes",
  "HowlerJS",
  "Hybrids",
  "Hygen",
  "Hyper",
  "HyperApp",
  "Immutable",
  "Inferno",
  "InquirerJS",
  "Insomnia",
  "InterledgerJS",
  "Intern",
  "Ionic",
  "Istanbul",
  "Jasmine",
  "JerryScript",
  "Jest",
  "jQuery",
  "jQueryMobile",
  "jQueryUI",
  "js_of_ocaml",
  "JSBlocks",
  "JSDOM",
  "JSHint",
  "Jspm",
  "JSRobot",
  "JSTransformer",
  "JSweet",
  "JSX",
  "Junctions.js",
  "Jumpsuit",
  "Kap",
  "Karma",
  "Kea",
  "KendoUI",
  "KeyStone",
  "Knockout",
  "Konva",
  "KrakenJS",
  "Lass",
  "Leaflet",
  "Lerna",
  "Less",
  "Lighthouse",
  "Lodash",
  "Mailit",
  "MarionetteJS",
  "Markvis",
  "Mark.JS",
  "Materialize",
  "Matreshka",
  "Matter.JS",
  "Mavo",
  "Meteor",
  "Metro",
  "Mewt",
  "Microbundle",
  "Mithril",
  "Mitt",
  "Mobx",
  "MobX-State-Tree",
  "Mocha",
  "Modernizr",
  "MoJS",
  "Moleculer",
  "MomentJS",
  "Moon",
  "Muuri",
  "NativeScript",
  "NativeScript-Angular",
  "Nemo",
  "Nerv",
  "Nest",
  "Next.js",
  "Neutrino",
  "Nightwatch",
  "Nile.js",
  "Nivo",
  "Nodal",
  "NodeJS",
  "Nodemailer",
  "Nodemon",
  "Node-RED",
  "npm",
  "NuclearJS",
  "Nuxt",
  "OfflineJS",
  "Omniscient",
  "OpenUI5",
  "p5.js",
  "Parcel",
  "Passport",
  "Pell",
  "PEP",
  "PhantomJS",
  "Phaser",
  "Phenomic",
  "Phonegap",
  "PixiJS",
  "PKG",
  "Plotly.js",
  "Polished",
  "Polka",
  "Polymer",
  "Popmotion",
  "Popper.JS",
  "PostCSS",
  "PostHTML",
  "Preact",
  "Prettier",
  "PrimeNG",
  "Prototype",
  "Protractor",
  "Puppeteer",
  "PureScript",
  "PurgeCSS",
  "PyJS",
  "Q",
  "Quasar",
  "Qunit",
  "RactiveJS",
  "Radi",
  "Ramda",
  "Ran",
  "Rax",
  "Re-DOM",
  "React",
  "Reactide",
  "ReactOpt",
  "React-Cosmos",
  "React-Flight",
  "React-ImgPro",
  "React-Konva",
  "React-Move",
  "React-Primer",
  "React-Router",
  "React-Sight",
  "React-Sizes",
  "React-Slingshot",
  "React-Static",
  "React-VT",
  "Redbird",
  "Redux",
  "Redux-Saga",
  "Redux_Offline",
  "Rekit",
  "Relay",
  "Repatch",
  "RequireJS",
  "RevealJS",
  "Riot",
  "Rivets",
  "rltm.js",
  "RollupJS",
  "RxDB",
  "RxJS",
  "Sails",
  "SammyJS",
  "San",
  "Scotty.js",
  "Semantic-UI",
  "Semantic-UI-React",
  "Seneca",
  "SentinelJS",
  "Sentry",
  "Sequelize",
  "Server.JS",
  "Sinon",
  "Sizzle",
  "SkateJS",
  "SkelJS",
  "Slate",
  "Slick",
  "slim.js",
  "Slush",
  "SocketIO",
  "SocketStream",
  "Sockette",
  "Spine",
  "Spirit",
  "Sproutcore",
  "StandardJS",
  "Stapesjs",
  "StealJS",
  "Storybook",
  "Strapi",
  "StrMan",
  "Strudel",
  "Styletron",
  "Stylus",
  "Sugar",
  "Svelte",
  "SVGR",
  "Swip",
  "SystemJS",
  "Tabris.js",
  "Tape",
  "Taskr",
  "ThreeJS",
  "TinyMCE",
  "Titanium",
  "Toolkit",
  "TotalJS",
  "Totoro",
  "Tradeship",
  "Trails",
  "Turf",
  "TurnJS",
  "TypeScript",
  "ulid",
  "Umbrella",
  "UnderscoreJS",
  "Unfetch",
  "Unistore",
  "UnitJS",
  "Update",
  "V8",
  "Vaadin",
  "Vant",
  "Verb",
  "Volo",
  "Vows",
  "Vue",
  "Vuetify.js",
  "Vulcan",
  "VX",
  "Wakanda",
  "Wallaby.js",
  "WebGL",
  "Webix",
  "Webpack",
  "Webpack-Monitor",
  "WebRx",
  "Webtorrent",
  "Weex-UI",
  "WhitestormJS",
  "Wijmo",
  "winJS",
  "Wiretie",
  "Workbox",
  "XO",
  "X-tag",
  "Yalla",
  "Yarn",
  "Yeoman",
  "Yui",
  "ZangoDB",
  "ZeptoJS",
];

function userWon() {
  return (
    document.getElementById("word").textContent === WORD &&
    guesses <= maxGuesses
  );
}

function userLost() {
  return guesses > maxGuesses;
}

function getRandomWord() {
  let randomWord = nameList[Math.floor(Math.random() * nameList.length)];
  return randomWord;
}
function hideWord(word) {
  hiddenWord = [];
  for (i in word) {
    hiddenWord.push("_ ");
  }
  return hiddenWord;
}

function isLetter(str) {
  return str.length === 1 && str.match(/^[-+_., A-Za-z0-9]+$/);
}

function wrongGuess() {
  return (
    !WORD.includes(key) && !usedLetters.includes(key) && guesses <= maxGuesses
  );
}

function correctGuess() {
  return WORD.includes(key) && isLetter(key);
}

function init() {
  guesses = 0;
  usedLetters = [];

  WORD = getRandomWord().toLowerCase();
  hiddenWord = hideWord(WORD);

  document.getElementById("word").textContent = hiddenWord.join("");
  document.getElementById("lettersUsed").textContent = "";
  document.getElementById("guesses").textContent = `Guesses: 0`
}

var losses = 0;
var wins = 0;
var guesses = 0;
var usedLetters = [];
var WORD = getRandomWord().toLowerCase();
var hiddenWord = [];
const maxGuesses = 12;
var key;

// print a hidden word for the user to guess
for (letter in WORD) {
  hiddenWord.push("_ ");
}

document.getElementById("word").textContent = hiddenWord.join(" ");

document.addEventListener("keypress", (event) => {
  key = event.key.toLowerCase();

  if (!isLetter(key)) {
    return;
  }

  if (correctGuess()) {
    console.log("Yep, that's one of the letters we want!");

    for (let i = 0; i < WORD.length; i++) {
      if (WORD.charAt(i) === key) {
        hiddenWord[i] = key;
      }
    }
    document.getElementById("word").textContent = hiddenWord.join("");
  }

  // don't count a letter that the user already guessed incorrectly towards guesses
  if (!WORD.includes(key) && usedLetters.includes(key)) {
    return;
  }

  // user enters wrong letter
  if (wrongGuess()) {
    usedLetters.push(key);
    guesses += 1;
    document.getElementById("lettersUsed").textContent = usedLetters;
    document.getElementById("guesses").textContent = `Guesses ${guesses}`;
  }

  if (userWon()) {
    console.log("You win! :D");
    wins += 1;
    document.getElementById("wins").textContent = `Wins: ${wins}`;

    document.getElementById(
      "word"
    ).textContent = `You won! The word was ${WORD}! On to the next one! :)`;

    setTimeout(() => init(), 4000);
  }

  if (userLost()) {
    console.log(`You lost! :(`);
    losses += 1;
    document.getElementById("losses").textContent = `Losses: ${losses}`;

    document.getElementById(
      "word"
    ).textContent = `You lost. The word was ${WORD}! See if you can guess the next one! :)`;
    setTimeout(() => init(), 4000);
  }
});
