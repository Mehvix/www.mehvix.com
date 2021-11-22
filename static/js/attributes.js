// If you read through these, reloading will never be as much fun again!
// Inspired by tom7.org

var attr_lst = [
    'This sentence changes each time you reload.',
    'My Favorite Key Switch are Pinks.',
    'My Favorite Keyboard layout is 68%.',
    'I use <a href="//colemakmods.github.io/mod-dh/">Colemak Mod-DH</a> as my keyboard layout.',
    'My Favorite Pokémon is Electabuzz.',
    'My Favorite CAD Program is <s>minecraft</s> Solidworks.',
    'My Favorite Wii Game is Lego Star Wars: The Complete Saga.',
    'My Favorite Text Editor is neovim.',
    'My Favorite Shell is zsh.',
    'My Favorite Mono Font is <a href="//fonts.adobe.com/fonts/pt-mono">PT Mono</a>.',
    'My Favorite Color Theme is <a href="//github.com/one-dark">OneDark</a>.',
    'My Favorite Movie is Pulp Fiction.',
    'My Favorite TV Show is The Sopranos.',
    'My Favorite Survivor Season is Cagayan (28).',
    'My Favorite Gatorade Color is Orange.',
    'My Favorite Quake Level is <code>ts_ca1</code>.',
    'My Favorite TF2 Level is <a href="https://comp.tf/wiki/Gullywash">cp_gullywash_final1</a>.',
    'My Favorite AoE 2 Map is Black Forest.',
    'My Favorite AoE 2 Civilization is the Mayans.',
    'My Favorite AoE 2 track is <a href="//www.youtube.com/watch?v=kd6zvRtwRzI/">Pork Parts</a>.',
    "My Favorite hold 'em hand is A10s",
    'My Favorite C++ Compiler is GCC.',
    'My Favorite Drink is Arnold Palmer.',
    'My Eye color is Green-Hazel.',
    'My Corrective lenses is -4.75 -1.00 (bad!).',
    'My Height is 6\' 1"',
    'My Shoe size is 11.5 US.',
    'My Hand Dominance is Left.',
    'My Teeth Parity is Odd.',
    'I have an irrational fear of eels.',
    'My dad wanted to name me Jimi after Hendrix.',
]
function randto(n) {
    return Math.floor(Math.random() * (n - 1))
}

attr_element = document.getElementById('attribute')
attr_selected = attr_lst[randto(attr_lst.length)]
