// void async function (where, html) {
//     //get the imported document in templates:
//     var templates = document.createElement( 'template' )
//     templates.innerHTML = await ( await fetch( 'templates.html' ) ).text()
//
//     var footer = templates.content.querySelector('#footer')
//
//     document.getElementById("footer").insertAdjacentHTML('afterbegin', footer.innerHTML)
//     document.getElementById("copy").insertAdjacentHTML("afterbegin", "© " + new Date().getFullYear() + " - Max Vogel")
// } ()
// /*todo work on this^*/