///////////////////////////////////////////////////////////////////////////
// If you read through these, reloading will never be as much fun again! //
///////////////////////////////////////////////////////////////////////////

var attr_lst = [
    `This sentence changes each time you reload!`,
    `This feature was inspired by <a href="//tom7.org">tom7.org</a>.`,
    `If you like meta comedy, here you go!`,
    // me
    `I use <a href="//colemakmods.github.io/mod-dh/">Colemak Mod-DH</a> as my keyboard layout and am still slow.`,
    `My eye color is <span style='color: #207708'>Green</span>-<span style='color: #8E7618'>Hazel</span>.`,
    `My mother's maiden name is ████████████.`,
    `My corrective lenses is -4.75 -1.00 (very poor!).`,
    `My height is 6' 2".`,
    `My hand dominance is left. This is a fairly substantial advantage in fencing when you start out, however, it tapers off the better your opponents become.`,
    `I know Polish (but only the Happy Birthday song).`,
    `My teeth parity is odd (I was born without a tooth).`,
    `I am a Cheliphobe.`,
    `I have <a href="//en.wikipedia.org/wiki/Photic_sneeze_reflex">slow eyes</a>.`,
    `Max is short for Maxabillion.`,
    `I have a black aunt who is younger than me.`,
    `I was dropped on my head as a baby.`,
    `My birthday contains two palindromes.`,
    `One of these prior facts about me was a lie (and no, it's not this one).`,
    // favorites
    `My favorite CAD program is (reluctantly) Solidworks.`,
    `My favorite Wii game is Lego Star Wars: The Complete Saga.`,
    `My favorite shell is zsh.`,
    `My favorite text editor is neovim.`,
    `My favorite mono font should what you're reading now, <a href="//fonts.adobe.com/fonts/pt-mono">PT Mono</a>.`,
    `My favorite color scheme is <a href="//toolbox.mehvix.com/onedark/">OneDark</a>.`,
    `My favorite color is carmine (this page's background).`,
    `My favorite movie is Borat.`,
    `My favorite TV show is Sopranos.`,
    `<i>No man for any considerable period can wear one face to himself, and another to the multitude, without finally getting bewildered as to which may be the true</i>.`,
    `Spongebob is not a contraceptive.`,
    `There once was a man from Peru, who dreamed he was eating his shoe; he woke with a fright, in the middle on the night, to find that his dream had come true.`,
    `This site is made with 100% recycled pixels.`,
    `My favorite <a href='https://www.youtube.com/playlist?list=PLFE0R-nkjPgGOWS-JgvFSAQ1Izn71107a'>OST</a> is from <a href='https://store.steampowered.com/app/338170/'>ratz instagib</a>.`,
    `My favorite Quake weapon is the rail gun.`,
    `My favorite Quake level is <code>ts_ca1</code>.`,
    `My favorite TF2 map is <a href="https://comp.tf/wiki/Gullywash">cp_gullywash_final1</a>.`,
    `My favorite TF2 6s role is <a href="https://www.youtube.com/watch?v=p7JBdkY0b4o">roamer</a>.`,
    `My favorite TF2 highlight is from an old idol, <a href="https://www.youtube.com/watch?v=ZNEU3MsqhNk">max!</a>`,
    `<a href="https://www.youtube.com/watch?v=WJiK8n3ZYew">I kill kephrii so hard he rage quits</a>.`,
    `My inches per 360° is 22.8" (0.45 source sensitivity @ 1600 dpi).`,
    `My favorite <span class="aoe2">Age of Empires II</span> civilization are the Mayans.`,
    `My favorite <span class="aoe2">Age of Empires II</span> track is <a href="https://www.youtube.com/watch?v=kd6zvRtwRzI/">Pork Parts</a>.`,
    `My favorite <span class="aoe2">Age of Empires II</span> expansion pack is <i>The Conquerors.</i>`,
    `My favorite Hearthstone deck was tempo rogue.`,
    `My least favorite hold 'em hand is pocket 10s.`,
    `My favorite beer is Trumer Pils.`,
    `My favorite physics textbook is Morin's <i>Introductory Mechanics.</i>`,
    `My favorite cs textbook (and perhaps only cs textbook I have read coved-to-cover) is <a href='https://cseweb.ucsd.edu/~dasgupta/book/index.html'>DPV</a>.`,
    `When you lie<br>
Kiss your baby bye bye bye<br>
And if you're true<br>
The whole wide world will laugh with you.<br>`,
    `My favorite genre is <i class='sc' style='color:saddlebrown'>brown</i>.`,
    `My favorite music video is <a href="//mhvx.cc/forever">Let Forever Be</a>.`,
    `My second favorite music video is <a href="https://www.youtube.com/watch?v=5IsSpAOD6K8">Once in a Lifetime</a>.`,
    `My favorite fugue is <a href="https://en.wikipedia.org/wiki/Echoes_(Pink_Floyd_song)">Echoes</a>, <a href="https://youtu.be/PGwPSPIhohk">Live at Pompeii</a>.`,
    `'Creep' is actually the best radiohead song.`,
    `You learned about the Mandela effect from vsauce.`,
    `My favorite underrated album is White Pepper.`,
    `My dad wanted to name me Jimi after Hendrix.`,
    `My favorite documentary is Adam Curtis' <a href="https://www.imdb.com/title/tt13973190/">Can't Get You Out of My Head</a>.`,
    `My favorite comic is Norm.`,
    `My favorite living comic is Tom Meyers.`,
    `My favorite comic strip Calvin and Hobbes.`,
    `My favorite constant is <a href="https://en.wikipedia.org/wiki/Euler's_constant">Euler's.</a>`,
    `The em dash—particularly when used to interject sentences—is my favorite punctuation mark.`,
    `My favorite series of integers is <a href="https://oeis.org/A000108">OEIS A000108</a>.`,
    `My favorite xkcd is #927.`,
    `Mr. Beamon is my favorite Bob.`,
    `My favorite condiment is <a href="https://www.youtube.com/watch?v=GNXWZOJOe3A">mustard</a>.`,
    `My favorite scientist is Claude Shannon.`,
    `My favorite circuit is the <a href='https://en.wikipedia.org/wiki/H-bridge'>H-bridge</a>.`,
    `I pronounce 10 like tin.`,
    // .
    `There's nothing worse than people who don't understand hyperbole.`,
    `<code>YYYY-MM-DD</code> is the ideal date format.`, // certainly not YYYY-$month-DD !
    // syntax
    `This sentence contains threee erors.`,
    `This sentence refers to all sentences that do not refer to themselves.`,
    `This sentence is false.`,
    `Consider the expression "The smallest positive integer not definable in under sixty letters."`,
    // references
    `There is no 19th story.`,
    `Google 'lavon affair.'`,
    `Gods in his heaven // Alls right with the world.`,
    `God created men, Samuel Colt made them equal.`,
    `Free men do not ask.`,
    `Free men do not ask.`,
    `Free men do not ask.`,
    `WTF Happened In <a href='//mhvx.cc/1971'>1971</a>?`,
    `His name was Richard Russel.`,
    `His name was <a href='//mhvx.cc/seth'>Seth Smith</a>.`,
    `His name was <a href='//mhvx.cc/rich1'>Seth</a> <a href='//mhvx.cc/rich2'>Rich</a>.`,
    `His name was Aaron Swartz.`,
    `His name is <a href='//mhvx.cc/innes'>Charles Innes</a>.`,
    `Everything is vanity.`,
    `"I" am the source of my desires.`,
    `People from Ireland: they tell you they're from Ireland.`,
    `Everything solid melts into air.`,
    `All work and no play makes Jack a dull boy.`,
    `If while washing dishes, we think only of the cup of tea that awaits us, thus hurrying to get the dishes out of the way as if they were a nuisance, then we are not “washing the dishes to wash the dishes.” What’s more, we are not alive during the time we are washing the dishes. In fact we are completely incapable of realizing the miracle of life while standing at the sink. If we can’t wash the dishes, the chances are we won’t be able to drink our tea either. While drinking the cup of tea, we will only be thinking of other things, barely aware of the cup in our hands. Thus we are sucked away into the future—and we are incapable of actually living one minute of life.`,
    `If the words 'life, liberty, and the pursuit of happiness' don't include the right to experiment with your own consciousness, then the Declaration of Independence isn't worth the hemp it was written on.`,
    `Dihydrogen Monoxide (DHMO) is a colorless and odorless chemical compound, also referred to by some as Dihydrogen Oxide, Hydrogen Hydroxide, Hydronium Hydroxide, or simply Hydric acid. Its basis is the highly reactive hydroxyl radical, a species shown to mutate DNA, denature proteins, disrupt cell membranes, and chemically alter critical neurotransmitters. The atomic components of DHMO are found in a number of caustic, explosive and poisonous compounds such as Sulfuric Acid, Nitroglycerine and Ethyl Alcohol.`,
    `I am thinking therefore I am.`,
    `Head creates world, we control Head.`,
    `We see in order to move, and we move in order to see.`,
    `One man's <a href='//mhvx.cc/noise'>noise</a> is another man's signal.`,
    `Pride is a sin.`,
    `You forget a thousand things every day, make sure this is one of 'em.`,
    `A monad is just a monoid in the category of endofunctors.`,
    `A tensor is something that transforms as a tensor.`,
    `Every planet in our solar system is named after a God, except Earth which is named after the stuff on the ground.`,
    `All happy families are alike; each unhappy family is unhappy in its own way.`,
    `There is a Kyle Rittenhouse fan club in Argentina.`,
    `The ultimate hidden truth of the world is that it is something we make. And could just as easily make differently.`,
    `No one man can make a single pencil.`,
    `<i>"Sticks and stones can break my bones but names will never hurt me"</i> was the popular response by WWII-era kids -- especially German-American me. One taught oneself to tolerate ignorance and the negative opinions of others thus maintaining peace and most often gaining positive change by example. Works! (the mad dogtender)`,
    `How many probabilists does it take to screw in a light bulb? <spoil>Two. Plus a fair coin</spoil>.`,
    `How many probabilists does it actually take to screw in a light bulb? <spoil>One minus the number it takes to unscrew it.</spoil>.`,
    `Hair is a queue (FIFO).`,
    `Cryptography = fractals - LSD.`,
    `Stanford is clean, safe, and boring; Berkeley is the opposite.`,
    `A bike's rear-wheel's spokes are slightly ticker in diameter than the front as they experience more torque.`,
    `Germany has placed fake bus stops outside of old-folks homes to mitigate those ailed with Alzheimer's/dementia from wandering off.`,
    `NASA doesn't modify the heap, for code that operates in space, as it results in non-deterministic behavior.`,
    `Your printer likely adds tiny, hard-to-see yellow dots to fingerprint (identify) the origin of any copies you make; <a href='https://github.com/dfd-tud/deda'>related</a>.`,
    `Treat a man as he appears to be and you make him worse. But treat a man as if he already were what he potentially could be, and you make him what he should be.`,
    `The only thing an old man can tell a young man is that it goes fast, and if you're not careful it'll be too late; of course the young man can never understand this to be true.`,
    // > videos
    `<a href='https://www.youtube.com/watch?v=axiGV09C85A'>Pufferfish eats carrot (full video)</a>`,
    `Cool ranch came before ranch.`,
    `Who's Jon Corzine? I know who Rihanna is.. I know the IMDB top 10..`,
    `My top hobby is Austrian Economics.`,
    `My favorite painter is Carroll Dunham.`,
    `211 8.1%. whatchu know bout that?`,
    `THE ROOM Plays at The Balboa, The First Saturday of Every Month.`,
    `<a href='//mhvx.cc/whynot'>why not?</a> (feat big K)`,
    `<i><a href='https://youtu.be/9EcjWd-O4jI'>Pump Up The Jam</a></i> is the national anthem of Canada.`,
    // > songs
    `Buy real estate in imaginary places.`,
    `Dismiss this line--`,
    `I'm on a journey to the center of three.`,
    `Number of times since 1979 that Britain has ''refined'' its method of counting the unemployed: <spoil>24 (23 of them lowered unemployment!)</spoil>.`,
    `where the cheese go?`,
];
attr_lst.push(`This has been ${attr_lst.length + 1} fun facts, and now you've seen them all!`);

// todo: shuffle in random order

let cookies = document.cookie.split("; ").map(prop => prop.split("=")).find(prop => prop[0] === 'attr');
let index = 1;
if (!cookies) {
    index = 0;
} else if (cookies[1] >= 0) {
    index = (1 + parseInt(cookies[1])) % attr_lst.length;
}
document.cookie = `attr=${index};samesite=strict`;

function randto(n) {
    return Math.floor(Math.random() * (n - 1));
}

// attr_element = document.getElementById('attribute');
attr_selected = attr_lst[index];
