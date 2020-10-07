const slugify = require('slugify');
const md5 = require('md5');
const { v4 } = require('uuid');
const {DateTime} = require('luxon');

const fragments = [
    'curtis',
    'curt',
    'dan',
    'daniel',
    'jenn',
    'jennifer',
    'nick',
    'nicholas',
    'jason',
    'jayson',
    'jesse',
    'ron',
    'ronald',
    'graham',
    'seanna',
    'neil',
    'gunter',
    'gunther',
    'kyle',
    'ashley',
    'bashley',
    'bryan',
    'brian',
    'calle',
    'chris',
    'christopher',
    'alex',
    'pontus',
    'rich',
    'thomas',
    'tomas',
    'isaac',
    'euan',
    'herman',
    'craig',
    'todd',
    'tod',
    'ars',
    'richard',
    'alexis',
    'cody',
    'john',
    'fred',
    'sarah',
    'sara',
    'django',
    //adventures times
    'jake',
    'marcelline',
    'finn',
    //grumps
    'barry',
    'ross',
    'arin',
    'danny',
    'suzy',
    // worst baby names
    'lexi',
    'bort',
    'gorb',
    'barf',
    'barfinkel',
    'boomquisha',
    'shorbert',
    'clarm',
    'janarthanon',
    'crabitha',
    'tressica',
    'surfbort',
    'jennennifer',
    'benjammin',
    'robot',
    'tomtom',
    'carome',
    'pubert',
    'olga',
    'alicia',
    'eugene',
    'fluffy',
    'boris',
    'ian',
    'tula',
    'melfrid',
    'mike',
    'felicity',
    'erwin',
    'bartholemew',
    'melvin',
    'mackenzie',
    'esmeralda',
    'gil',
    'sasha',
    'barney',
    'shaniqua',
    'sherlock',
    'boy',
    'baby',
    'uthgherd',
    'missing texture',
    'elizabreth',
    'elizabeth',
    'meldor',
    'olivia',
    'maverick',
    'beberly',
    'danger',
    'merika',
    'yunique',
    'shakira',
    'beyonce',
    'vejonica',
    'derfla',
    'phelony',
    'moxie',
    'garden',
    'jammy',
    'mazen',
    'hunk',
    'prince',
    'cameron',
    'blanket',
    'jermajesty',
    'moon unit',
    'kimmy',
    'billy bob',
    'gertrude',
    'pillow',
    'pill',
    'jessifer',
    'brick',
    'hope',
    'jack',
    'keith',
    'helga',
    'tiny',
    'willy',
    'lawrence',
    'jessica',
    'king',
    'yoshi',
    'ichiro',
    'angus',
    'natasha',
    'alice',
    'lilly',
    'astrid',
    'saga',
    'freja',
    'wilma',
    'stella',
    'molly',
    'leah',
    'ines',
    'sigrid',
    'celine',
    'lykke',
    'joline',
    'amanda',
    'marco',
    'lorenzo',
    'antonio',
    'vito',
    'norberto',
    'diego',
    'luca',
    'giovanni',
    'stefano',
    'mario',
    'luigi',
    'laura',
    'rosa',
    'gianna',
    'pietro',
    'zhang wei',
    'liu wei',
    'li qiang',
    'chuck',
    'trent',
    'trenton',
    'chad',
    'chadwick',
    'ermagerd',
    'harry',
    'steve',
    'yolanda',
    'tara',
    'rusty',
    'ivana',
    'owin',
    'owen',
    'testy',
    'carl',
    'albert',
    'cornelius',
    'timothy',
    'kiko',
    'wilhelm',
    'pierre',
    'tiffany',
    'ben',
    'heather',
    'travis',
    'courteney',
    'tracy',
    'yang',
    'vivian',
    'ryan',
    'shirley',
    'phil',
    'andy',
    'spalding',
    'joao',
    'gabriel',
    'lucas',
    'matheus',
    'victor',
    'luiz',
    'noah',
    'benjamin',
    'sophia',
    'emma',
    'liam',
    'garol',
    'jimothy',
    'tedward',
    'jacob',
    'logan',
    'chloe',
    'samuel',
    'jayden',
    'hannah',
    'avery',
    'zoe',
    'madison',
    'carter',
    'felix',
    'leo',
    'charles',
    'korg',
    'thor',
    'brincely',
    'quim',
    'aria',
    'grace',
    'hunter',
    'dylan',
    'audrey',
    'austin',
    'jaxon',
    'nora',
    'ivy',
    'romy',
    'levi',
    'juliet',
    'parker',
    'victor',
    'piper',
    'sara',
    'cole',
    'ryder',
    'simon',
    'lauren',
    'fyodor',
    'mark',
    'quigley',
    'ender',
    //simpsons
    'homer',
    'marge',
    'lisa',
    'bart',
    'ralph',
    'seymour',
    'chalmers',
    'nancy',
    'moe',
    'edna',
    'nelson',
    'milhouse',
    'ned',
    'waylon',
    'martin',
    'willie',
    //ranks
    'captain',
    'marshal',
    'lieutenant',
    'mister',
    'mr',
    'doctor',
    'missus',
    'ms',
    'mrs',
    'lady',
    'dr',
    'lord',
    'ensign',
    'admiral',
    'officer',
    'wing commander',
    'vice admiral',
    'emperor',
    'super emperor',
    'rear admiral',
    'commodore',
    'colonel',
    'major general',
    'general',
    'corporal',
    'sargeant',
    'major',
    'private',
    'queen',
    'earl',
    'duke',
    'professor',
    // strippery names
    'chardonnay',
    'crystal',
    'brandy',
    'lola',
    'angel',
    'anastasia',
    'cherry',
    'destiny',
    'raven',
    'scarlett',
    'scarlet',
    'layla',
    'tawny',
    'trinity',
    'lexus',
    //futuramas
    'zaph',
    'fry',
    'leela',
    'kif',
    'scruffy',
    'morbo',
    'nibbler',
    'farnsworth',
    // bojacks
    'bojack',
    'carolyn',
    //avatars
    'aang',
    'katara',
    'toph',
    'zuko',
    'sokka',
    'iroh',
    'appa',
    'azula',
    //ricks
    'morty',
    'rick',
    //uncles
    'buck',
    'sam',
    'tom',
    'fatih',
    //dunes
    'chani',
    'paul',
    'atriedes',
    'kwisatz',
    'haderach',
    'harkonnen',
    // sandersons
    'adolin',
    'kholin',
    'sorin',
    // songs of ice and fire
    'littlefinger',
    'daenarys',
    'khal',
    'sansa',
    'cersei',
    'gregor',
    'tyrion',
    'arya',
    'hodor',
    'petyr',
    'brienne',
    'robb',
    'daario',
    'bran',
    // stars war
    'luke',
    'leia',
    'chewie',
    'han',
    'solo',
    'ben',
    'darth',
    // homestucks
    'sassacre',
    'jegus',
    'egbert',
    'karkat',
    'gamzee',
    'vriska',
    'terezi',
    'equius',
    'rose',
    'sollux',
    'caliborn',
    'jade',
    'kanaya',
    'feferi',
    'aradia',
    'rufioh',
    'eridan',
    'roxy',
    'spades',
    'diamonds',
    'hearts',
    'clubs',
    'boxcars',
    'meenah',
    'scratch',
    'english',
    // treks
    'jean luc',
    'james',
    'scotty',
    'pavel',
    'spock',
    'spop',
    'worf',
    'picard',
    'crusher',
    'data',
    'geordi',
    'beverly',
    'wesley',
    // sitcoms
    'tobias',
    'funke',
    'gob',
    'bluth',
    'annyong',
    'ann',
    'tony',
    'oscar',
    'maeby',
    'swanson',
    'leslie',
    'meagle',
    'pam',
    'jim',
    'angela',
    'toby',
    'jan',
    'michael',
    'scott',
    'kevin',
    'dwight',
    'creed',
    'meredith',
    'nellie',
    'darryl',
    'roy',
    'karen',
    'stanley',
    //unpopular names
    'weston',
    'declan',
    'xander',
    'theodore',
    'rowan',
    'austin',
    'evan',
    'emerson',
    'quinn',
    'daria',
    'jocelyn',
    'willow',
    'allison',
    'delilah',
    'chastity',
    // pratchett
    'vimes',
    'prime',
    // greeks
    'hades',
    'artemis',
    'zeus',
    'poseidon',
    'hermes',
    'hercules',
    // months
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
    // transformers
    'optimus',
    'megatron',
    'mega',
    'tron',
    'starscream',
    // games
    'nobuo',
    'zelda',
    'terra',
    'locke',
    'lara',
    'croft',
    'samus',
    'kratos',
    'nathan',
    'snake',
    'cloud',
    'tifa',
    'aeris',
    'barrett',
    'gordon',
    'ezio',
    'ryu',
    'chun li',
    'isabelle',
    'sephiroth',
    'leon',
    'niko',
    'morrigan',
    'aloy',
    'batman',
    'joker',
    'baron',
    'callie',
    'marie',
    'catherine',
    'clementine',
    'dutch',
    'edith',
    'sonya',
    'agent',
    'mario',
    'luigi',
    'peach',
    'vocaloid',
    'sans',
    'papyrus',
    'toriel',
    'grillby',
    'skeleton',
    'blook',
    'lemming',
    'glados',
    'cave',
    'johnson',
    //muppets
    'kermit',
    'animal',
    'gonzo',
    'walter',
    'fozzie',
    'beaker',
    'honeydew',
    'benson',
    'rowlf',
    'piggy',
    //countries and places
    'britain',
    'london',
    'france',
    'paris',
    'nice',
    'germany',
    'munich',
    'italy',
    'rome',
    'spain',
    'pamplona',
    'greece',
    'armenia',
    'holland',
    'amsterdam',
    'switzerland',
    'poland',
    'belgium',
    'waffle',
    'canada',
    'alberta',
    'nunavut',
    'squamish',
    'richmond',
    'langley',
    'burnaby',
    'westminster',
    'victoria',
    'vancouver',
    'poco',
    'coquitlam',
    'kensington',
    'surrey',
    'hope',
    'kelowna',
    'osoyoos',
    'delta',
    'merritt',
    'penticton',
    'alberni',
    'duncan',
    'dawson',
    'creek',
    'grand',
    'forks',
    'revel',
    'stoke',
    'trail',
    'tofino',
    'saanich',
    'nanaimo',
    'toronto',
    'montreal',
    'whistler',
    'quebec',
    'newfie',
    'saskatchewan',
    'australia',
    'mexico',
    'belize',
    'sweden',
    'norway',
    'florida',
    'vermont',
    'maine',
    'wisconsin',
    'montana',
    'jersey',
    'hampshire',
    'florida',
    'georgia',
    'kentucky',
    'colorado',
    'carolina',
    'york',
    'dakota',
    'conneticut',
    'california',
    'vermont',
    'wyoming',
    'puerto',
    'rico',
    'suave',
    'portugal',
    'brazil',
    'paolo',
    'curitiba',
    'japan',
    'hokkaido',
    'tokyo',
    'korea',
    'uganda',
    'antigua',
    'barbuda',
    'angola',
    'austria',
    'belize',
    'bolivia',
    'bulgaria',
    'cuba',
    'czech',
    'djibouti',
    'estonia',
    'fiji',
    'guyana',
    'hungary',
    'jamaica',
    'jordan',
    'kenya',
    'laos',
    'latvia',
    'yemen',
    'tuvalu',
    'turkey',
    'tonga',
    'togo',
    'tonka',
    'texas',
    'singapore',
    'sierra',
    'leone',
    'sepia',
    'senegal',
    'marino',
    'samoa',
    'lucia',
    'vincent',
    'vince',
    //softwares
    'rands',
    'joel',
    //divinity
    'fane',
    'lohse',
    'sebille',
    // ---- END OF NAMES
    'names',
    'arelli',
    'omoto',
    'slick',
    'slack',
    'ware',
    'puzzle',
    'bobble',
    'kart',
    'kirby',
    'katamari',
    'shovel',
    'knight',
    // planets
    'mercury',
    'venus',
    'earth',
    'mars',
    'moon',
    'prism',
    'power',
    'jupiter',
    'uranus',
    'neptune',
    'pluto',
    // marketing buzzwords
    'brand',
    'synergy',
    'analytics',
    'clickbait',
    'disrupt',
    'viral',
    'freemium',
    'growth',
    'hacking',
    'hyper',
    'local',
    'innovate',
    'innovator',
    'ideate',
    'jacking',
    'key',
    'performance',
    'initiative',
    'agile',
    'modern',
    'swift',
    'integration',
    'inter',
    'low hanging fruit',
    'millenial',
    'demographic',
    'demo',
    'graphic',
    'optimized',
    'omni',
    'channel',
    'placement',
    'engagement',
    'snackable',
    'content',
    'transparent',
    'leader',
    'entrepreneur',
    'wearable',
    //monsters
    'goblin',
    'orc',
    'mirage',
    'bear',
    'demon',
    'gorgon',
    'yeti',
    'beast',
    'golem',
    // nonsense
    'squidge',
    'futter',
    'fram',
    'mc',
    'og',
    'gog',
    'wonk',
    'clorb',
    'churb',
    'squimp',
    'imple',
    'clarp',
    'flam',
    'shorp',
    'squiff',
    'splarf',
    'erang',
    'copter',
    'boom',
    'topia',
    'mazing',
    'tastic',
    'squim',
    'angle',
    'able',
    'ting',
    'booty',
    'pow',
    'mint',
    'chunk',
    'chunky',
    'whong',
    'focky',
    'dongl',
    'cronch',
    //ideophone
    'crunch',
    'boing',
    'swish',
    'thud',
    'twinkle',
    'doki',
    'bang',
    //onomatopoeia
    'moo',
    'quack',
    'woof',
    'meow',
    'oink',
    'chirp',
    'roar',
    'cluck',
    'baa',
    'splat',
    //adjectives
    'bad',
    'good',
    'great',
    'small',
    'ugly',
    'fat',
    'childish',
    'fussy',
    'soft',
    'chubby',
    'huge',
    'odd',
    'sad',
    'round',
    'vast',
    'dirty',
    'ripe',
    'broad',
    'damp',
    'wet',
    'smelly',
    'funky',
    'fast',
    'speedy',
    'cavernous',
    'soupy',
    'happy',
    'stuffy',
    'shifty',
    'tangy',
    'thrifty',
    'eggy',
    'soggy',
    // rude boys
    'crap',
    'poop',
    'dump',
    'toilet',
    'poopfart',
    'shart',
    'stink',
    'stinky',
    'stanky',
    'butt',
    'fart',
    'fartfart',
    'farty',
    'dang',
    'darn',
    'snot',
    'cough',
    'bastard',
    //  foods
    'food',
    'candy',
    'wheat',
    'bulgur',
    'quinoa',
    'cupcake',
    'muffin',
    'cookie',
    'loaf',
    'lard',
    'flank',
    'dough',
    'sugar',
    'flour',
    'baking',
    'soda',
    'licious',
    'squeeze',
    'lunchable',
    'warhead',
    'quaker',
    'oat',
    'jetpuffed',
    'dunkaroo',
    'orbit',
    'laffy',
    'taffy',
    'gusher',
    'meal',
    'oatmeal',
    'swirler',
    'dorito',
    'bubble',
    'shark',
    'bites',
    'marsh',
    'mallow',
    'powder',
    'cucumber',
    'pickle',
    'kale',
    'onion',
    'potato',
    'shallot',
    'ginger',
    'garlic',
    'sesame',
    'rice',
    'burger',
    'ham',
    'beef',
    'chicken',
    'pork',
    'lamb',
    'bison',
    'coffee',
    'tea',
    'cola',
    'chocolate',
    'vanilla',
    'strawberry',
    'straw',
    'raspberry',
    'rasp',
    'berry',
    'velvet',
    'nyan',
    // tech
    'stack',
    'overflow',
    'hack',
    'cyber',
    'truck',
    'techno',
    'video',
    'audio',
    'micro',
    'armor',
    'astro',
    'mono',
    'meta',
    'morph',
    'nano',
    'chloro',
    'nega',
    'open',
    'navi',
    'co',
    'null',
    'plasma',
    'ram',
    'eva',
    'retro',
    'super',
    'sub',
    'hexa',
    'synchro',
    'synth',
    'thermo',
    'solid',
    'static',
    'section',
    'tank',
    'radio',
    'pack',
    'mass',
    'jig',
    'zig',
    'latch',
    'implant',
    'heavy',
    'fluid',
    'gel',
    'drill',
    'disk',
    'cube',
    'cone',
    'pyramid',
    'buoy',
    'baffle',
    'bank',
    'stream',
    'time',
    'tractor',
    'vial',
    'vertex',
    'point',
    'wave',
    'weave',
    'wand',
    'e-cybo',
    'pooch',
    'crypto',
    // misc
    'stain',
    'spot',
    'creep',
    'trap',
    'tarp',
    'shop',
    'load',
    'fudge',
    'chimp',
    'blister',
    'bill',
    'bone',
    'bugle',
    'card',
    'cannon',
    'celery',
    'chance',
    'chord',
    'child',
    'cloak',
    'copy',
    'cow',
    'frog',
    'deer',
    'ape',
    'dirt',
    'dog',
    'dragon',
    'drake',
    'drop',
    'drug',
    'duck',
    'edge',
    'elbow',
    'error',
    'fibre',
    'finger',
    'flax',
    'flood',
    'foam',
    'fog',
    //songs
    'music',
    'classic',
    'rule',
    'world',
    'duran',
    'graffiti',
    'safe',
    'sound',
    'astronaut',
    'panic',
    'disco',
    'psycho',
    'killer',
    'solar',
    'stone',
    'stocking',
    'garterbelt',
    'burning',
    'spider',
    'empty',
    'threat',
    'star',
    'scream',
    'knuckles',
    'fruit',
    'gallon',
    'game',
    'goose',
    'geese',
    'ghost',
    'gold',
    'grease',
    'gym',
    'helmet',
    'hemp',
    'ice',
    'icon',
    'island',
    'jacket',
    'karate',
    'kick',
    'kidney',
    'latex',
    'lunch',
    'lettuce',
    'mallet',
    'march',
    'organ',
    'panther',
    'panties',
    'undies',
    'knickers',
    'boxers',
    'underoo',
    'emoji',
    'motion',
    'smarmy',
    'pear',
    'pig',
    'pizza',
    'bagel',
    'pop',
    'pound',
    'propane',
    'accessories',
    'rhythm',
    'rock',
    'roll',
    'saxophone',
    'ophone',
    'seagull',
    'spaghetti',
    'spaghett',
    'ravioli',
    'fusilli',
    'chef',
    'boyardee',
    'tuna',
    'umbrella',
    'wig',
    'zipper',
    'britches',
    'mystery',
    'bench',
    'secret',
    'mouse',
    'house',
    'thunder',
    'hunter',
    'fisher',
    'hook',
    'bean',
    'harvest',
    'mixer',
    'hand',
    'finger',
    'nose',
    'eye',
    'belly',
    'jean',
    'plan',
    'disk',
    'horse',
    'horsehorse',
    'horsehorsehorse',
    'staple',
    'face',
    'arm',
    'ball',
    'cheek',
    'monkey',
    'shin',
    'button',
    'byte',
    'canyon',
    'dance',
    'crayon',
    'sausage',
    'meat',
    'bacon',
    'wad',
    'napkin',
    'device',
    'cape',
    'chair',
    'person',
    'kitten',
    'puppy',
    'book',
    'clamp',
    'cloud',
    'code',
    'coast',
    'coin',
    'space',
    'key',
    'bucket',
    'heart',
    'stapler',
    'mug',
    'bottle',
    'cable',
    'note',
    'lamp',
    'shelf',
    'dong',
    'board',
    'job',
    'knife',
    'thing',
    'phone',
    'sweat',
    'pant',
    'boot',
    'sock',
    'socks',
    'hat',
    'ring',
    'wang',
    'wrap',
    'holder',
    'pen',
    'bag',
    'sword',
    'shield',
    'spear',
    'staff',
    'shaft',
    'slab',
    'grub',
    'song',
    'axe',
    'lamp',
    'club',
    'cage',
    'hole',
    'ass',
    'chum',
    'chump',
    'jerk',
    'foot',
    'spud',
    'cord',
    'light',
    'tree',
    'place',
    'bag',
    'grime',
    'sludge',
    'cloth',
    // verbs
    'jump',
    'aggrieve',
    'abscond',
    'twirl',
    'spin',
    'smell',
    'slap',
    'smack',
    'poke',
    'prod',
    'drop',
    'punch',
    'grab',
    'throw',
    'thrust',
    'slide',
    'dunk',
    'braise',
    'scatter',
    'slide',
    'dice',
    'hurl',
    'buy',
    'huck',
    'toast',
    'align',
    'sell',
    'move',
    'shoop',
    'trade',
    'steal',
    'flip',
    'blast',
    'clean',
    'hide',
    'pinch',
    'grasp',
    'palm',
    'examine',
    'taste',
    'ingest',
    'swallow',
    'snort',
    'juggle',
    'lift',
    'eat',
    'quaff',
    'chug',
    'spine',
    'crack',
    'fear',
    'assemble',
    'chug',
    // random words
    'quiet',
    'bond',
    'prestige',
    'crude',
    'consolidate',
    'hive',
    'shiver',
    'manage',
    'wonder',
    'shape',
    'industry',
    'business',
    'blade',
    'diplomat',
    'behavior',
    'check',
    'runner',
    'model',
    'deport',
    'tune',
    'bank',
    'golf',
    'finance',
    'flush',
    'sacred',
    'traffic',
    'summit',
    'sulphur',
    'cottage',
    'cope',
    'rise',
    'sphere',
    'gem',
    'free',
    'late',
    'arch',
    'pull',
    'chord',
    'blank',
    'fax',
    'like',
    'weed',
    'gloom',
    'grudge',
    'ridge',
    'leash',
    'route',
    'stop',
    'deluxe',
    'supreme',
    'width',
    'height',
    'pure',
    'brouhaha',
    'brou',
    'haha',
    'malarkey',
    'ma',
    'larkey',
    'non',
    'sense',
    'wabbit',
    'codswallop',
    'mugwump',
    'mug',
    'wump',
    'cods',
    'wallop',
    'nin',
    'compoop',
    'donny',
    'brook',
    'petti',
    'shenanigan',
    'she',
    'nanigan',
    'snolly',
    'goster',
    'ulence',
    'gubbin',
    'doozy',
    'fard',
    'bumber',
    'shoot',
    'fuddy',
    'duddy',
    'gobbledy',
    'troglo',
    'vomit',
    'widder',
    'shins',
    'bloviate',
    'gym',
    'squat',
    'rack',
    'weight',
    'heavy',
    'mat',
    'matt',
    'tamarind',
    'efficient',
    'desert',
    'rain',
    'miss',
    'you',
    'everything',
    'girl',
    'boy',
    'cantankerous',
    'callipygian',
    'dudgeon',
    'firkin',
    'folderol',
    'mayonnaise',
    'mayo',
    'butter',
    'catsup',
    'relish',
    'mustard',
    'ketchup',
    'vinegar',
    'socks',
    'shorts',
    'flummox',
    'hoosegow',
    'ornery',
    'orrery',
    'ordinary',
    'regular',
    'boring',
    'mediocre',
    'forgettable',
    'fancy',
    'namby',
    'pamby',
    'goober',
    'yahoo',
    'horror',
    'comedy',
    'tragedy',
    'bibble',
    'yule',
    'hole',
    'hum',
    'zinger',
    'hammer',
    'loquent',
    'mania',
    'frenzy',
    'madness',
    'snicker',
    'snack',
    'slash',
    'swoosh',
    'galumph',
    'frisson',
    'fudge',
    'quaff',
    'freude',
    'family',
    'feud',
    'jeopardy',
    'lethal',
    'bang',
    'shot',
    'down',
    'smart',
    'smort',
    'salt',
    'pepper',
    'boye',
    'wing',
    'love',
    'what',
    'who',
    'where',
    'why',
    'when',
    'goop',
    'gump',
    'glamp',
    'squink',
    'mimi',
    'chart',
    'chaff',
    'wily',
    'wobbly',
    'wibbly',
    'timey',
    'wimey',
    'surprise',
    'find',
    'watch',
    'event',
    'travel',
    'health',
    'joke',
    'glass',
    'tumbler',
    'policy',
    'letter',
    'floor',
    'group',
    'term',
    'boat',
    'street'
];

const names = fragments.slice(0, fragments.indexOf('names'));
const things = fragments.slice(fragments.indexOf('names'));

const tlds = [
    '.xyz',
    '.blue',
    '.org',
    '.com',
    '.net',
    '.link',
    '.click',
    '.wedding',
    '.sexy',
    '.red',
    '.black',
    '.pics'
];

const alphanum = '0123456789abcdefghijklmnopqrstuvwxyz'.split("");

const choice = (array) => {
    /*
        choose a random element from a list
     */
    let uniqueArray = Array.from(new Set(array));
    if(uniqueArray.length === 0){
        return null;
    }
    let randomIndex = Math.floor(Math.random() * uniqueArray.length);
    return uniqueArray[randomIndex];
};

const titleCase = (string_what_to_titlecasify) => {
    /*
        convert a string "like this" into a string "Like This"
    */
    var i, j, str, lowers, uppers;
    str = string_what_to_titlecasify.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    // Certain minor words should be left lowercase unless
    // they are the first or last words in the string
    lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
        'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
    for (i = 0, j = lowers.length; i < j; i++)
        str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
            function(txt) {
                return txt.toLowerCase();
            });

    // Certain words such as initialisms or acronyms should be left uppercase
    uppers = ['Id', 'Tv'];
    for (i = 0, j = uppers.length; i < j; i++)
        str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
            uppers[i].toUpperCase());

    return str;
};

const flipCoin = () => {
    /*
        flip a coin

        this coin is unfairly weighted, on account of it's a little heavier on its face
     */
    return Math.random() > 0.52
};

const fragment = () => {
    /*
        choose a random word fragment like "todd" or "butt"
     */
    return choice(fragments);
};

const firstname = () => {
    return choice(names);
};

const thing = () => {
    return choice(things);
};

const tld = () => {
    /*
        choose a random tld
     */
    return choice(tlds);
};

const slug = () => {
    /*
        create a random slug - like "fragment" but more likely to be safe to use in a URL or email address
     */
    return slugify(fragment())
};

const char = () => {
    return choice(alphanum);
};

const shortId = () => {
    //5 characters of randomness. Pretty good for small sets of objects, like server ids.
    return `${slug()}-${char()}${char()}${char()}`;
};

const mediumId = () => {
    //8 characters. Okay for things like request ids or mid-90's passwords.
    return `${slug()}${slug()}-${char()}${char()}${char()}${char()}`;
};

const longId = () => {
    // 10 characters. Okay for database IDs for things that you're not going to have millions of.
    //  past this you should probably just consider a uuid
    return `${slugify(username())}-${char()}${char()}${char()}-${char()}${char()}${char()}${char()}${char()}`;
};

const dumbhash = (val) => {
    let md = md5(val);

    let firstThree = parseInt(md.substring(0,3), 16) % fragments.length;

    return `${slugify(fragments[firstThree])}-${md.substring(2)}`;
};

const okayId = () => {
    let id = v4();
    
    let firstThree = parseInt(id.substring(0,3), 16) % fragments.length;

    return `${id}-${slugify(fragments[firstThree])}`;
};

const sentence = () => {
    /*
        create some words all in a row.
     */
    let sentenceLength = 5 + Math.floor(Math.random() * 5);

    return titleCase(fragment()) + " " + Array.from({length: sentenceLength}, (x, i) => fragment()).join(" ") + ".";
};

const lorem = () => {
    /*
        create some words all in a row.
     */
    return Array.from({length: 5}, (x, i) => sentence()).join(" ");
};

const hexarray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const hexchar = () => {
    return choice(hexarray);
};

const hexcolor = () => {
    /*
        returns a random six-hex string
        but no "#", you have to add that on your own
     */
    return `${hexchar()}${hexchar()}${hexchar()}${hexchar()}${hexchar()}${hexchar()}`;
};


const name = () => {
    /*
        create a full-ass name, like "Pete Hornburger" or "Todd Wangsack"
     */
    return titleCase(username())
};

const username = () => {
    /*
        create a username with a space in it, like "bort fortfart" or "crispy toolbags"
     */
    return `${firstname()} ${thing()}${thing()}`;
};

const email = () => {
    /*
        create an email address
     */
    return `${mediumId()}@${slug().replace("'", "")}${tld()}`;
};

const imageUrl = (width, identifier) => {
    /*
        return a kind of random monster that's not very random at all really
     */
    if(width == null){
        width = 200;
    }
    if(identifier == null){
        identifier = `${slug()}${slug()}${slug()}`;
    }

    return `https://api.adorable.io/avatars/${width}/${identifier}.png`

};

const ip = () => {
    /*
        returns an IPV4 address like "192.12.154.1"
     */
    let first = Math.floor(Math.random() * 256);
    let second = Math.floor(Math.random() * 256);
    let third = Math.floor(Math.random() * 256);
    let fourth = Math.floor(Math.random() * 256);
    return `${first}.${second}.${third}.${fourth}`;
};

const mac = () => {
    /*
        returns an EUI-48 mac address like "00-02-aa-86-ef-0b"
     */
    let octets = [];
    for (let i = 1; i <= 6; i++) {
        let octet = Math.floor(Math.random() * 256).toString(16);
        octet = ('00' + octet).slice(-2);
        octets.push(octet);
    }
    octets.join("-");
};

const countries = ['CA', 'BY', 'BE', 'MA', 'NO', 'OM', 'SE', 'TV', 'US', 'ZQ', 'ZM', 'GB'];

const country = () => {
    /*
        returns a 2-letter country code like 'CA', or 'BY'
     */
    return choice(countries);
};

const birthdayLuxon = () => {
    /*
        returns a birthday as a Luxon date
     */
    let years_ago = 13 + Math.floor(Math.random() * 40);
    let months_ago = Math.floor(Math.random() * 12);
    let days_ago = Math.floor(Math.random() * 20);
    return DateTime.local().minus({years: years_ago, months: months_ago, days: days_ago})
};

const birthdayISO = () => {
    /*
        returns a birthday as an ISO date
     */
    return birthdayLuxon().toISO();
};

const birthday = () => {
    /*
        returns a birthday as a JS Date
     */
    return birthdayLuxon().toJSDate();
};

const printSomeCrap = () => {
    console.log(name());
    console.log("---------------------");
    console.log(username());
    console.log(dumbhash(12500));
    console.log(dumbhash(username()));
    console.log(okayId());
    console.log(shortId());
    console.log(mediumId());
    console.log(longId());
    console.log(email());
    console.log(lorem());
    console.log(imageUrl());
    console.log(birthdayISO());
    console.log(country());
    console.log(ip());
};

//printSomeCrap();

module.exports = {
    choice,
    flipCoin,
    fragment,
    slug,
    shortId,
    mediumId,
    longId,
    dumbhash,
    okayId,
    sentence,
    lorem,
    tld,
    hexchar,
    hexcolor,
    username,
    titleCase,
    name,
    email,
    imageUrl,
    ip,
    mac,
    country,
    birthdayLuxon,
    birthdayISO,
    birthday,
};
