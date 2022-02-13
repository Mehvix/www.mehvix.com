// If you read through these, reloading will never be as much fun again!
// Inspired by tom7.org

var attr_lst = [
    'This sentence changes each time you reload!',
    'My favorite key switch are <span style="color: #e600de">pinks</span>.',
    'The best keyboard size is 68%.',
    'I use <a href="//colemakmods.github.io/mod-dh/">Colemak Mod-DH</a> as my keyboard layout.',
    'My favorite Pokémon is Electabuzz.',
    'My favorite CAD program is <s>minecraft</s> Solidworks.',
    'My favorite Wii game is Lego Star Wars: The Complete Saga.',
    'My favorite text editor is (neo)vim.',
    'My favorite shell is zsh.',
    'My favorite mono font is <a href="//fonts.adobe.com/fonts/pt-mono">PT Mono</a>.',
    'My favorite color scheme is <a href="//github.com/one-dark">OneDark</a>.',
    'My favorite movie is <span class="pulp-fiction">Pulp Fiction</span>, followed by The Grand Budapest Hotel.',
    'My favorite TV show is Sopranos.',
    'My favorite Survivor season is Cagayan (28).',
    'My favorite Gatorade color is <span style="color: orange">orange</span>.',
    'My favorite Quake level is <code>ts_ca1</code>.',
    'My favorite TF2 map is <a href="https://comp.tf/wiki/Gullywash">cp_gullywash_final1</a>.',
    'My favorite TF2 6s role is roamer.',
    'My FPS inches per 360 is 22.8" (.45 source sensitivity @ 1600 dpi).',
    'My favorite <span class="aoe2">Age of Empires II</span> map is Black Forest.',
    'My favorite <span class="aoe2">Age of Empires II</span> civilization are the Mayans.',
    'My favorite <span class="aoe2">Age of Empires II</span> track is <a href="//www.youtube.com/watch?v=kd6zvRtwRzI/">Pork Parts</a>.',
    "My favorite hold 'em hand is A10 Hearts.",
    "My least favorite hold 'em hand is 10s.",
    'My favorite C++ Compiler is GCC.',
    'My favorite drink is Arnold Palmer.',
    'My favorite energy drink is Fruit Punch Rockstar (if for no other reason than it reminds me of middleschool snowboard club).',
    'My favorite swimming-stroke is butterfly 🦋',
    "My favorite physics textbook is Morin's 'Problems and Solutions in Introductory Mechanics'",
    'My favorite band is ween.',
    'My eye color is <span style="color: #207708">Green</span>-<span style="color: #8E7618">Hazel</span>.',
    'My corrective lenses is -4.75 -1.00 (very poor!).',
    'My height is 6\' 1".',
    'My shoe size is 11.5 US.',
    'My hand dominance is left.',
    'My teeth parity is odd.',
    'I have an irrational fear of eels.',
    'My dad wanted to name me Jimi after Hendrix.',
    'I have <a href="//en.wikipedia.org/wiki/Synesthesia">projective synesthesia</a>.',
    'I have <a href="//en.wikipedia.org/wiki/Photic_sneeze_reflex">ACHOO syndrome</a>.',
    'This sentence contains exactly threee erors.',
    'This sentence refers to all sentences that do not refer to themselves.',
    'This sentence is false.',
    'Max is short for Maxabillion.',
    'The em dash—particularly when used to interject into sentences—is my favorite punctuation mark.',
    'My favorite book is <a href="https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach">GEB</a>.',
    "One of these facts about me are a lie (and no, it's not this one).",
    '<code>YYYY-MM-DD</code> is the ideal date format.',
    'I have a black aunt who is younger than me.',
    'My birthday contains two palindromes.',
    "I don't believe in astrology; I'm a Leo and we're all so smart and would never believe in something so silly.",
    'Consider the expression "The smallest positive integer not definable in under sixty letters."',
    'Time flies like an arrow; fruit flies like a banana.',
    'There is no 19th story.',
    'Google "lavon affair."',
]

function randto(n) {
    return Math.floor(Math.random() * (n - 1))
}

attr_element = document.getElementById('attribute')
attr_selected = attr_lst[randto(attr_lst.length)]

// todo make this not random, but cycle (or not repeat, somehow)
