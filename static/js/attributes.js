// If you read through these, reloading will never be as much fun again!
// Inspired by tom7.org

var attr_lst = [
    'This sentence changes each time you reload.',
    'My favorite key Switch are Pinks.',
    'My favorite keyboard size is 68%.',
    'I use <a href="//colemakmods.github.io/mod-dh/">Colemak Mod-DH</a> as my keyboard layout.',
    'My favorite Pokémon is Electabuzz.',
    'My favorite CAD Program is <s>minecraft</s> Solidworks.',
    'My favorite Wii Game is Lego Star Wars: The Complete Saga.',
    'My favorite text editor is neovim.',
    'My favorite shell is zsh.',
    'My favorite mono font is <a href="//fonts.adobe.com/fonts/pt-mono">PT Mono</a>.',
    'My favorite color scheme is <a href="//github.com/one-dark">OneDark</a>.',
    'My favorite movie is Pulp Fiction.',
    'My favorite TV show is Sopranos.',
    'My favorite Survivor season is Cagayan (28).',
    'My favorite Gatorade color is Orange.',
    'My favorite Quake level is <code>ts_ca1</code>.',
    'My favorite TF2 map is <a href="https://comp.tf/wiki/Gullywash">cp_gullywash_final1</a>.',
    'My favorite AoE 2 map is Black Forest.',
    'My favorite AoE 2 civilization is the Mayans.',
    'My favorite AoE 2 track is <a href="//www.youtube.com/watch?v=kd6zvRtwRzI/">Pork Parts</a>.',
    "My favorite hold 'em hand is A10 Hearts",
    'My favorite C++ Compiler is GCC.',
    'My favorite Drink is Arnold Palmer.',
    'My eye color is Green-Hazel.',
    'My corrective lenses is -4.75 -1.00 (bad!).',
    'My height is 6\' 1"',
    'My shoe size is 11.5 US.',
    'My hand dominance is Left.',
    'My teeth parity is Odd.',
    'I have an irrational fear of eels.',
    'My dad wanted to name me Jimi after Hendrix.',
]
function randto(n) {
    return Math.floor(Math.random() * (n - 1))
}

attr_element = document.getElementById('attribute')
attr_selected = attr_lst[randto(attr_lst.length)]
