function CevreHesapla (kenar: number) {
    cevre = kenar * 4
    return cevre
}
input.onButtonPressed(Button.A, function () {
    tiem = input.runningTime()
})
function alandanKenarBul (alan: number) {
    kenar = Math.sqrt(alan)
    return kenar
}
input.onButtonPressed(Button.B, function () {
    hesapla = hesapla - tiem
})
let hesapla = 0
let tiem = 0
let cevre = 0
let kenar = 0
kenar = 0
cevre = 0
tiem = 0
basic.showNumber(CevreHesapla(alandanKenarBul(36)))
