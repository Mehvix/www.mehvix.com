const input = document.getElementById('autolink')
const out = document.getElementById('autout')

input.addEventListener('input', updateValue)
function updateValue(e) {
    var val = e.target.value
    if (val == '') {
        out.textContent = ' '
    } else if (RegExp('src').test(val)) {
        out.textContent =
            'https://calendar.google.com/calendar/ical/' +
            decodeURIComponent(RegExp('/?src=(.*?)(&|$)').exec(val)[1]) +
            '/public/basic.ics'
    } else if (RegExp('cid').test(val)) {
        out.textContent =
            'https://calendar.google.com/calendar/ical/' +
            decodeURIComponent(RegExp('/?cid=(.*?)(&|$)').exec(val)[1]) +
            '/public/basic.ics'
    } else if (RegExp('/ical/').test(val)) {
        out.textContent =
            'https://calendar.google.com/calendar/ical/' +
            decodeURIComponent(RegExp('/ical/(.*?)(/|$)').exec(val)[1]) +
            '/public/basic.ics'
    } else {
        out.textContent = 'Invalid URL'
    }
}
