function CevreHesapla (kenar: number) {
    cevre = kenar * 4
    return cevre
}
function alandanKenarBul (alan: number) {
    kenar = Math.sqrt(alan)
    return kenar
}
let kenar = 0
let cevre = 0
basic.showNumber(CevreHesapla(alandanKenarBul(36)))
