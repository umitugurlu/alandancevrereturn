let cevre = 0
let kenar = 0
function CevreHesapla (kenar: number) {
    cevre = kenar * 4
    return cevre
}
function alandanKenarBul (alan: number) {
    kenar = Math.sqrt(alan)
    return kenar
}
basic.forever(function () {
    basic.showNumber(CevreHesapla(alandanKenarBul(36)))
})
