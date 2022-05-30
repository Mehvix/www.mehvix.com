///////////////////////////////////////////////////////////////////////////
// If you read through these, reloading will never be as much fun again! //
///////////////////////////////////////////////////////////////////////////

var attr_lst = [
    'This sentence changes each time you reload.',
    'This feature was inspired by <a href="//tom7.org">tom7.org</a>',
    // me
    'I use <a href="//colemakmods.github.io/mod-dh/">Colemak Mod-DH</a> as my keyboard layout.',
    "My eye color is <span style='color: #207708'>Green</span>-<span style='color: #8E7618'>Hazel</span>.",
    'My mothers maiden name is ████████████.',
    'My corrective lenses is -4.75 -1.00 (very poor!).',
    'My height is 6\' 2".',
    'My shoe size is 12 US.',
    "My hand dominance is left, which is a fairly substantial advantage in fencing (however, this tapers off the better your opponents are).",
    'I <s>know</s> used to know <code>-- --- .-. ... . / -.-. --- -.. ..</code>',
    'My teeth parity is odd (I was born without a tooth.)',
    'I have an irrational fear of eels.',
    'My dad wanted to name me Jimi after Hendrix.',
    'I have <a href="//en.wikipedia.org/wiki/Synesthesia">projective synesthesia</a> in response to music.',
    'I have <a href="//en.wikipedia.org/wiki/Photic_sneeze_reflex">ACHOO syndrome</a>, inherited from my mom.',
    'Max is short for Maxabillion.',
    'The em dash—particularly when used to interject into sentences—is my favorite punctuation mark.',
    "One of these facts about me are a lie (and no, it's not this one).",
    'I have a black aunt who is younger than me.',
    'I was dropped on my head as a baby.',
    'My birthday contains two palindromes.',
    // favorites
    'My favorite layout is 68%.',
    'My favorite key switch are <span style="color: #e600de">pinks</span>.',
    'My favorite Pokémon is Electabuzz.',
    'My favorite CAD program is <s>ms paint</s> Solidworks.',
    'My favorite Wii game is Lego Star Wars: The Complete Saga.',
    'My favorite text editor is neovim.',
    'My favorite shell is zsh.',
    'My favorite mono font is <a href="//fonts.adobe.com/fonts/pt-mono">PT Mono</a> (this font).',
    'My favorite color scheme is <a href="//toolbox.mehvix.com/onedark/">OneDark</a>.',
    'My favorite movie is <span class="pulp-fiction">Pulp Fiction</span>.',
    'My favorite director is Tarantino.',
    'My favorite, all-time TV show is Sopranos.',
    'My favorite, on-air TV show is Better Call Saul.',
    'My favorite Survivor season is Cagayan (28).',
    'My favorite Gatorade color is <span style="color: orange">orange</span>.',
    'My favorite Quake level is <code>ts_ca1</code>.',
    'My favorite TF2 map is <a href="https://comp.tf/wiki/Gullywash">cp_gullywash_final1</a>.',
    '<a href="https://www.youtube.com/watch?v=p7JBdkY0b4o">My favorite TF2 6s role is roamer</a>.',
    '<a href="https://www.youtube.com/watch?v=WJiK8n3ZYew">I kill kephrii so hard he rage quits</a>.',
    'My inches per 360 is 22.8" (.45 source sensitivity @ 1600 dpi).',
    'My favorite <span class="aoe2">Age of Empires II</span> map is World Map Diplomacy.',
    'My favorite <span class="aoe2">Age of Empires II</span> civilization are the Mayans.',
    'My favorite <span class="aoe2">Age of Empires II</span> track is <a href="//www.youtube.com/watch?v=kd6zvRtwRzI/">Pork Parts</a>.',
    "My favorite hold 'em hand is A10 Hearts.",
    "My least favorite hold 'em hand is 10s.",
    'My favorite C++ Compiler is GCC.',
    'My favorite drink is Arnold Palmer.',
    'My favorite beer is Trumer Pils.',
    'My favorite energy drink is Fruit Punch Rockstar (if for no other reason than it takes me back to middleschool snowboard club).',
    'My favorite swimming-stroke is butterfly 🦋',
    "My favorite physics textbook is Morin's <i>Introductory Mechanics</i>",
    'My favorite band is ween.',
    'My favorite 3D printing method is <a href="https://en.wikipedia.org/wiki/Computed_axial_lithography">CAL</a>-- Go Bears!',
    'My favorite girl scout cookies are the ones with the coconuts.',
    'My favorite greek letter is ɣ.',
    'My favorite book is <a href="https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach">GEB</a>.',
    'My favorite music video is <a href="https://www.youtube.com/watch?v=uURB-vo9rZ4">Revolution 909</a>.',
    'My favorite documentary is Adam Curtis\' <a href="https://www.imdb.com/title/tt13973190/">Can\'t Get You Out of My Head</a>.',
    // .
    "I don't believe in astrology; I'm a Leo and we're all so smart and would never believe in something so silly.",
    "There's nothing worse than people who don't understand hyperbole.",
    '<code>YYYY-MM-DD</code> is the ideal date format.',
    // syntax
    'This sentence contains threee erors.',
    'This sentence refers to all sentences that do not refer to themselves.',
    'This sentence is false.',
    'Consider the expression "The smallest positive integer not definable in under sixty letters."',
    'Time flies like an arrow; fruit flies like a banana.',
    // references
    'There is no 19th story.',
    "Google 'lavon affair.'",
    'Gods in his heaven // Alls right with the world.',
    'God created men, Samuel Colt made them equal.',
    'His name was Richard Russel.',
    'Everything is vanity.',
    '"I" am the source of my desires.',
    "People from Ireland: they tell you they're from Ireland.",
    // > videos
    'Cool ranch came before ranch.',
    "Who's Jon Corzine? I know who Rihanna is..",
    '211 8.1%; whatchu know bout that?',
    'Mr. Beamon is arguably one of thee Bobs of all time.',
    "<i>What did you learn from this? Nothing. Less than nothing. That's just the way I like it.</i>",
    // > songs
    'Buy real estate in imaginary places.',
    'Dismiss this line--',
    "I'm on a journey to the center of three",
    "I'll frequently check credit at (Moral) bank (hole in wall).",
]

function randto(n) {
    return Math.floor(Math.random() * (n - 1))
}

attr_element = document.getElementById('attribute')
attr_selected = attr_lst[randto(attr_lst.length)]

// todo make this not random, but cycle (or not repeat, somehow)
