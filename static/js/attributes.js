// If you read through these, reloading will never be as much fun again!
// Inspired by tom7.org

var attr_lst = [
    '<b>My Favorite Key Switch</b> is Pinks.',
    '<b>My Favorite Pokémon</b> is Electabuzz.',
    '<b>My Favorite Wii Game</b> was Lego Star Wars.',
    '<b>My Favorite Mono Font</b> is <a href="https://fonts.adobe.com/fonts/pt-mono">PT Mono</a>.',
    '<b>My Favorite Color Theme</b> is <a href="https://github.com/one-dark">OneDark</a>.',
    '<b>My Favorite TV Show</b> is The Sopranos.',
    '<b>My Favorite Survivor Season</b> is Cagayan (28).',
    '<b>My Favorite Gatorade Color</b> is Orange.',
    '<b>My Favorite AoE Civ</b> is Mayans.',
    '<b>My Favorite Quake Level</b> is ts_ca1.',
    '<b>My Favorite TF2 Level</b> is cp_gullywash_final1.',
    '<b>My Favorite AoE2 Map</b> is Black Forst.',
    '<b>My Favorite AoE2 track</b> is <a href="https://www.youtube.com/watch?v=kd6zvRtwRzI/">Pork Parts</a>.',
    '<b>My Favorite C++ Compiler</b> is GCC.',
    '<b>My Favorite Drink</b> is Arnold Palmer.',
    '<b>My Eye color</b> is Green-Hazel.',
    '<b>My Corrective lenses</b> is -4.75 -0.75.',
    '<b>My Height</b> is 6 ft.',
    '<b>My Shoe size</b> is 11.5 US.',
    '<b>My Hand Dominance</b> is Left.',
    '<b>My Teeth Parity</b> is Odd.',
    'I have an irrational fear of eels.',
    '<b>My Keyboard Layout</b> is <a href="https://colemakmods.github.io/mod-dh/">Colemak Mod-DH</a>.',
]
function randto(n) {
    return Math.floor(Math.random() * (n - 1))
}

attr_element = document.getElementById('attribute')
attr_selected = attr_lst[randto(attr_lst.length)]
