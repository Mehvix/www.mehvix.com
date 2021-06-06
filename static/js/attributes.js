// If you read through these, reloading will never be as much fun again!
// Inspired by tom7.org

var attr_lst = [
    'My <b>Favorite Key Switch</b> is Pinks.',
    'My <b>Favorite Pokémon</b> is Electabuzz.',
    'My <b>Favorite Wii Game</b> was Lego Star Wars.',
    'My <b>Favorite Mono Font</b> is <a href="https://fonts.adobe.com/fonts/pt-mono">PT Mono</a>.',
    'My <b>Favorite Color Theme</b> is <a href="https://github.com/one-dark">OneDark</a>.',
    'My <b>Favorite TV Show</b> is The Sopranos.',
    'My <b>Favorite Survivor Season</b> is Cagayan (28).',
    'My <b>Favorite Gatorade Color</b> is Orange.',
    'My <b>Favorite AoE Civ</b> is Mayans.',
    'My <b>Favorite Quake Level</b> is ts_ca1.',
    'My <b>Favorite TF2 Level</b> is cp_gullywash_final1.',
    'My <b>Favorite AoE2 Map</b> is Black Forst.',
    'My <b>Favorite AoE2 track</b> is <a href="https://www.youtube.com/watch?v=kd6zvRtwRzI/">Pork Parts</a>.',
    'My <b>Favorite C++ Compiler</b> is GCC.',
    'My <b>Favorite Drink</b> is Arnold Palmer.',
    'My <b>Eye color</b> is Green-Hazel.',
    'My <b>Corrective lenses</b> is -4.75 -0.75.',
    'My <b>Height</b> is 6 ft.',
    'My <b>Shoe size</b> is 11.5 US.',
    'My <b>Hand Dominance</b> is Left.',
    'My <b>Teeth Parity</b> is Odd.',
    'My <b>Keyboard Layout</b> is <a href="https://colemakmods.github.io/mod-dh/">Colemak Mod-DH</a>.',
]
function randto(n) {
    return Math.round(Math.random() * n) % n
}

attr_element = document.getElementById('attribute')
attr_selected = attr_lst[randto(attr_lst.length)]
