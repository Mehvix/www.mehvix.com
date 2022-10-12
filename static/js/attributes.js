///////////////////////////////////////////////////////////////////////////
// If you read through these, reloading will never be as much fun again! //
///////////////////////////////////////////////////////////////////////////

var attr_lst = [
    `This sentence changes each time you reload.`,
    `This feature was inspired by <a href="//tom7.org">tom7.org</a>.`,
    // me
    `I use <a href="//colemakmods.github.io/mod-dh/">Colemak Mod-DH</a> as my keyboard layout and am still slow.`,
    `My eye color is <span style='color: #207708'>Green</span>-<span style='color: #8E7618'>Hazel</span>.`,
    `My mother's maiden name is ████████████.`,
    `My corrective lenses is -4.75 -1.00 (very poor!).`,
    `My height is 6' 2".`,
    `My shoe size is 12 US.`,
    `My hand dominance is left: this is a fairly substantial advantage in fencing (however, it tapers off the better your opponents become).`,
    `I <s>know</s> used to know <code>-- --- .-. ... . / -.-. --- -.. ..</code>`,
    `My teeth parity is odd (I was born without a tooth).`,
    `I have a Cheliphobia.`,
    `I have <a href="//en.wikipedia.org/wiki/Synesthesia">projective synesthesia</a> in response to music.`,
    `I have <a href="//en.wikipedia.org/wiki/Photic_sneeze_reflex">ACHOO syndrome</a>, inherited from my mom.`,
    `Max is short for Maxabillion.`,
    `I have a black aunt who is younger than me.`,
    `I was dropped on my head as a baby.`,
    `My birthday contains two palindromes.`,
    `I've never been able to instantly know left from right or AM from PM.`,
    `One of these prior facts about me was a lie (and no, it's not this one).`,
    // favorites
    `My favorite keyboard size is 68%.`,
    `My favorite key switch are <span style="color: #e600de">pinks</span>.`,
    `My favorite Pokémon is Electabuzz.`,
    `My favorite CAD program is reluctantly Solidworks.`,
    `My favorite Wii game is Lego Star Wars: The Complete Saga.`,
    `My favorite shell is zsh.`,
    `My favorite text editor is neovim.`,
    `My favorite mono font is the one you're reading, <a href="//fonts.adobe.com/fonts/pt-mono">PT Mono</a>.`,
    `My favorite color scheme is <a href="//toolbox.mehvix.com/onedark/">OneDark</a>.`,
    `My favorite movie is <span class="pulp-fiction">Pulp Fiction</span>.`,
    `My favorite Adam Sandler movie is Punch Drunk Love.`,
    `My favorite movie soundtrack is from The Social Network.`,
    `My favorite director is Tarantino.`,
    `My favorite, all-time TV show is Sopranos.`,
    `My favorite, on-air TV show is The Rehearsal.`,
    `My favorite Survivor season is Cagayan (28).`,
    `My favorite Gatorade is <span style="color: orange">orange</span>.`,
    `My favorite otterpop is <span style="color: limegreen">green</span>.`,
    `My favorite Quake level is <code>ts_ca1</code>.`,
    `My favorite Quake weapon is the rail gun.`,
    `My favorite TF2 map is <a href="https://comp.tf/wiki/Gullywash">cp_gullywash_final1</a>.`,
    `My favorite TF2 6s role is <a href="https://www.youtube.com/watch?v=p7JBdkY0b4o">roamer</a>.`,
    `My favorite TF2 highlight is from <a href="https://www.youtube.com/watch?v=ZNEU3MsqhNk">max!</a>`,
    `<a href="https://www.youtube.com/watch?v=WJiK8n3ZYew">I kill kephrii so hard he rage quits</a>.`,
    `My inches per 360 is 22.8" (.45 source sensitivity @ 1600 dpi).`,
    `My favorite <span class="aoe2">Age of Empires II</span> map is World Map Diplomacy.`,
    `My favorite <span class="aoe2">Age of Empires II</span> 1v1 RM civilization are the Mayans.`,
    `My favorite <span class="aoe2">Age of Empires II</span> team civilization are the Spanish.`,
    `My favorite <span class="aoe2">Age of Empires II</span> unique units are the Cataphracts.`,
    `My favorite <span class="aoe2">Age of Empires II</span> track is <a href="https://www.youtube.com/watch?v=kd6zvRtwRzI/">Pork Parts</a>.`,
    `My favorite <span class="aoe2">Age of Empires II</span> campaign series is <i>The Conquerors.</i>`,
    `My favorite Hearthstone deck was tempo rogue.`,
    `My favorite hold 'em hand is A10 Hearts.`,
    `My least favorite hold 'em hand is pocket 10s.`,
    `My favorite drink is Arnold Palmer.`,
    `My favorite beer is Trumer Pils.`,
    `My favorite energy drink is Fruit Punch Rockstar (if for no other reason than it takes me back to middleschool snowboard club).`,
    `My favorite swimming-stroke is butterfly 🦋`,
    `My favorite physics textbook is Morin's <i>Introductory Mechanics.</i>`,
    `My favorite band is ween.`,
    `My favorite Australian rock band is King Gizzard & the Lizard Wizard 🇦🇺`,
    `My favorite Canadian rock band is PUP 🇨🇦`,
    `My favorite pop band is Pink Floyd.`,
    `My favorite music poster is from Pink Floyd's 1977 Animals tour at the <a href='https://images.wolfgangsvault.com/m/xlarge/OCA770509-PO/pink-floyd-poster-may-9-1977.webp'>Oakland Coliseum Arena Concert</a>.`,
    `My favorite genre is brown.`,
    `My favorite music video is <a href="https://www.youtube.com/watch?v=uURB-vo9rZ4">Revolution 909</a>.`,
    `My favorite punk song is <a href="https://youtu.be/iVuB1ZASrGw">DVP</a>`,
    `My favorite Pink Floyd song is Alan's Psychedelic Breakfast.`,
    `My favorite underrated album is White Pepper.`,
    `My dad wanted to name me Jimi after Hendrix.`,
    `My favorite girl scout cookies are the ones with the coconuts.`,
    `My favorite greek letter is ɣ.`,
    `My favorite book is <a href="https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach">GEB</a>.`,
    `My favorite documentary is Adam Curtis' <a href="https://www.imdb.com/title/tt13973190/">Can't Get You Out of My Head</a>.`,
    `My favorite comic is Norm.`,
    `My favorite living comic is Tom Meyers.`,
    `My favorite comic strip Calvin and Hobbes.`,
    `My favorite constant is <a href="https://en.wikipedia.org/wiki/Euler's_constant">Euler's.</a>`,
    `The em dash—particularly when used to interject into sentences—is my favorite punctuation mark.`,
    `My favorite series of integers is <a href="https://oeis.org/A000108">OEIS A000108</a>.`,
    `My favorite xkcd is #927.`,
    `If you didn't notice the favicon, my favorite monkey is the Orangutan.`,
    `Mr. Beamon is my favorite Bob.`,
    // .
    `I don't believe in astrology; I'm a Leo and we're all so smart and would never believe in something so silly.`,
    `There's nothing worse than people who don't understand hyperbole.`,
    `<code>YYYY-MM-DD</code> is the ideal date format.`,
    `You are the sum of your open tabs.`,
    `It's all balls and bins.`,
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
    `Free men don’t ask.`,
    `His name was Richard Russel.`,
    `Everything is vanity.`,
    `"I" am the source of my desires.`,
    `People from Ireland: they tell you they're from Ireland.`,
    `Everything solid melts into air.`,
    `All work and no play makes Jack a dull boy.`,
    `My favorite painter is Carroll Dunham.`,
    `If while washing dishes, we think only of the cup of tea that awaits us, thus hurrying to get the dishes out of the way as if they were a nuisance, then we are not “washing the dishes to wash the dishes.” What’s more, we are not alive during the time we are washing the dishes. In fact we are completely incapable of realizing the miracle of life while standing at the sink. If we can’t wash the dishes, the chances are we won’t be able to drink our tea either. While drinking the cup of tea, we will only be thinking of other things, barely aware of the cup in our hands. Thus we are sucked away into the future—and we are incapable of actually living one minute of life.`,
    `Pride is a sin.`,
    `You forget a thousand things every day, make sure this is one of 'em.`,
    `A monad is just a monoid in the category of endofunctors.`,
    `Every planet in our solar system is named after a God, except Earth which is named after the stuff on the ground.`,
    // > videos
    `Cool ranch came before ranch.`,
    `Who's Jon Corzine? I know who Rihanna is..`,
    `211 8.1%. whatchu know bout that?`,
    // > songs
    `Buy real estate in imaginary places.`,
    `Dismiss this line--`,
    `I'm on a journey to the center of three.`,
];
attr_lst.push(`There are ${attr_lst.length + 1} fun facts, and now you've seen them all!`);

// todo make random order

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
