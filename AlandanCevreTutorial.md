# Alandan Cevre Etkinliği Tutorial


## Alandan Kenar Hesaplama 
Alan değerinden kenar bilgisini hesaplayabilmek için alandanKenarBul fonksiyonunu hazırlayalım.
alan adında bir parametre tanımlayalım.

```blocks

function alandanKenarBul (alan: number) {
 
}

```

## Fonksiyonda Değişken Tanımlama
Kenar değeri hesaplandıktan sonra saklaması için kenar değişkenini oluşturalım
```blocks

function alandanKenarBul (alan: number) {
    kenar = 0
 
}

```

## square root Bloğunu Kullanalım
square root bloğunu kullanarak alan parametresinden gelen değerin karekökünü hesaplayalım
```blocks

function alandanKenarBul (alan: number) {
    kenar = Math.sqrt(alan)
    
}
```

## return Kod Bloğunu Kullanalım
return kod bloğunu kullanarak hesapladığımız kenar değerini fonksiyon dışına gönderelim.
```blocks
function alandanKenarBul (alan: number) {
    kenar = Math.sqrt(alan)
    return kenar
}
```

## CevreHesapla Fonksiyonu
kenar parametresinden gelen kenar değerine göre karenin çevresini hesaplayacak fonksiyonu oluşturalım.
kenar adında parametre tanımlayalım.


```blocks 
function CevreHesapla (kenar: number) {
   
}

```


## CevreHesapla Fonksiyonun Değişkenleri
CevreHesapla Fonksiyonunda hesaplanacak çevre değerini saklaması için cevre değişkenini oluşturalım.

```blocks
function CevreHesapla (kenar: number) {
    cevre = 0
  
}
```
## Çevreyi Hesaplayalım.
kenar parametresinden gelen değeri 4 ile çarpalım ve sonucu cevre değişkeninde saklayalım.
```blocks
function CevreHesapla (kenar: number) {
    cevre = kenar * 4
    
}
```
## Yine return Kod Bloğunu Kullanalım
return kod bloğunu kullanarak hesapladığımız cevre değerini fonksiyon dışına gönderelim.
```blocks
function CevreHesapla (kenar: number) {
    cevre = kenar * 4
    return cevre
}
```

## Sonuçları Gösterelim
on start bloğu içerisinde fonksiyon çağırarak sonuçları gösterelim. Show Number kod bloğu kullanacağız.

```blocks
basic.showNumber()

```

## Fonksiyonları Çağıralım
call alandanKenarBul kod bloğunu kullanarak fonksiyonunu 36 gibi bir değer girerek çağıralım
```blocks
basic.showNumber(alandanKenarBul(36))

```
## Fonksiyonları Çağıralım
Çevre sonucunu görebilmek için call CevreHesapla kod bloğu kullanarak alandanKenarBul fonksiyonundan gelen sonuç için çağıracağız.
```blocks
basic.showNumber(CevreHesapla(alandanKenarBul(36)))

```

## Kodların Tamamı
Projenin tamamlanmış hali aşağıdaki gibidir.

```blocks
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
```

