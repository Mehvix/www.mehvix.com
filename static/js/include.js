document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('footerDateYear').innerText =
        new Date().getFullYear()

    // void async function (where, html) {
    //     //get the imported document in templates:
    //     var templates = document.createElement( 'template' )
    //     templates.innerHTML = await ( await fetch( 'templates.html' ) ).text()
    //
    //     var footer = templates.content.querySelector('#footer')
    //
    //     document.getElementById("footer").insertAdjacentHTML('afterbegin', footer.innerHTML)
    //     document.getElementById("copy").insertAdjacentHTML("afterbegin", " " + new Date().getFullYear() + " - Max Vogel")
    // } ()
    // todo work on this^
})

// todo inject copy code + expand image buttons

// var protected_links = 'mehvix.com'
// var a_to_va = 0
// var a_to_vb = 0
// var a_to_vc = ''
// function auto_anonymize() {
//     auto_anonyminize()
// }
// function auto_anonyminize() {
//     var a_to_vd = window.location.hostname
//     if (protected_links != '' && !protected_links.match(a_to_vd)) {
//         protected_links += ', ' + a_to_vd
//     } else if (protected_links == '') {
//         protected_links = a_to_vd
//     }
//     var a_to_ve = ''
//     var a_to_vf = new Array()
//     var a_to_vg = 0
//     a_to_ve = document.getElementsByTagName('a')
//     a_to_va = a_to_ve.length
//     a_to_vf = a_to_fa()
//     a_to_vg = a_to_vf.length
//     var a_to_vh = false
//     var j = 0
//     var a_to_vi = ''
//     for (var i = 0; i < a_to_va; i++) {
//         a_to_vh = false
//         j = 0
//         while (a_to_vh == false && j < a_to_vg) {
//             a_to_vi = a_to_ve[i].href
//             if (
//                 a_to_vi.match(a_to_vf[j]) ||
//                 !a_to_vi ||
//                 !a_to_vi.match('http://')
//             ) {
//                 a_to_vh = true
//             }
//             j++
//         }

//         if (a_to_vh == false) {
//             a_to_ve[i].href = 'http://anonym.to?' + a_to_vi

//             a_to_vb++
//             a_to_vc += i + ':::' + a_to_ve[i].href + '\n'
//         }
//     }
//     var a_to_vj = document.getElementById('anonyminized')
//     var a_to_vk = document.getElementById('found_links')
//     if (a_to_vj) {
//         a_to_vj.innerHTML += a_to_vb
//     }
//     if (a_to_vk) {
//         a_to_vk.innerHTML += a_to_va
//     }
// }
// function a_to_fa() {
//     var a_to_vf = new Array()
//     protected_links = protected_links.replace(' ', '')
//     a_to_vf = protected_links.split(',')
//     return a_to_vf
// }

// window.addEventListener(
//     'load',
//     function () {
//         // wait until js loads
//         auto_anonyminize()
//     },
//     false
// )
