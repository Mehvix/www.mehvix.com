// If you read through these, reloading will never be as much fun again!
// Inspired by tom7.org

var attr_lst = [
    'This sentence changes each time you reload.',
    '<b>My Favorite Key Switch</b> is Pinks.',
    '<b>My Favorite Mouse</b> is the Logitech Pro Wireless.',
    '<b>My Favorite Pokémon</b> is Electabuzz.',
    '<b>My Favorite CAD Program</b> is <s>minecraft</s> Solidworks.',
    '<b>My Favorite Wii Game</b> is Lego Star Wars: The Complete Saga.',
    '<b>My Favorite Text Editor</b> is vim.',
    '<b>My Favorite Shell</b> is zsh.',
    '<b>My Favorite Mono Font</b> is <a href="//fonts.adobe.com/fonts/pt-mono">PT Mono</a>.',
    '<b>My Favorite Color Theme</b> is <a href="//github.com/one-dark">OneDark</a>.',
    '<b>My Favorite Movie</b> is Pulp Fiction.',
    '<b>My Favorite TV Show</b> is The Sopranos.',
    '<b>My Favorite Survivor Season</b> is Cagayan (28).',
    '<b>My Favorite Gatorade Color</b> is Orange.',
    '<b>My Favorite Quake Level</b> is ts_ca1.',
    '<b>My Favorite TF2 Level</b> is cp_gullywash_final1.',
    '<b>My Favorite Age of Empires 2 Map</b> is Black Forest.',
    '<b>My Favorite Age of Empires 2 Civilization</b> is the Mayans.',
    '<b>My Favorite Age of Empires 2 track</b> is <a href="//www.youtube.com/watch?v=kd6zvRtwRzI/">Pork Parts</a>.',
    '<b>My Favorite C++ Compiler</b> is GCC.',
    '<b>My Favorite Drink</b> is Arnold Palmer.',
    '<b>My Eye color</b> is Green-Hazel.',
    '<b>My Corrective lenses</b> is -4.75 -1.00 (bad!).',
    '<b>My Height</b> is 6 ft.',
    '<b>My Shoe size</b> is 11.5 US.',
    '<b>My Hand Dominance</b> is Left.',
    '<b>My Teeth Parity</b> is Odd.',
    'I have an irrational fear of eels.',
    'My dad wanted to name me "Jimi" after Hendrix.',
    '<b>My Keyboard Layout</b> is <a href="//colemakmods.github.io/mod-dh/">Colemak Mod-DH</a>.',
]
function randto(n) {
    return Math.floor(Math.random() * (n - 1))
}

attr_element = document.getElementById('attribute')
attr_selected = attr_lst[randto(attr_lst.length)]
