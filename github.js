//1
let num = 9
for (let i = 1; i <= 10; i++) {
    console.log(num, " x ", i);
}

//2
let word = "kasur ini rusak"
let newWord = "" //ceritanya masih kosong, dan akan diisi dengan kata baru nanti

for (let i = word.length-1; i >= 0; i--) {
    newWord += word[i]
}

if(word === newWord) {
    console.log("palindrome")
} else {
    console.log("bukan palindrome")
}

console.log(newWord)

//contoh
a = 10
b = 15
c= 0

c = a


//3
let cm = 100000
console.log((cm / 100000), " Km")

//4
//let cur = 1000
//console.log("Rp. ", cur, ",00")
let cur = 1000
let format = ""
let result = ''
let counterDigit = 1
let curString = String(cur) //ubah cure ke string

for(let i = curString.length-1; i >= 0; i--) {
    if(counterDigit === 3) {
        console.log(" counterDigit 3 ", " digit -> ", curString[i], ' ke ', i)
        format += curString[i]+'.'
        counterDigit = 1
    } else {
        console.log(" digit -> ", curString[i], ' ke ', i)
        format += curString[i]
        counterDigit += 1
    }
}

console.log(format)

for(let i = format.length-1; i >= 0; i--) {
    result += format[i]
}

console.log("Rp ", result, ",00" )

//5
let kata = "Hello world"
let target = "ell"

kata = kata.replace(target, "")
console.log(kata)

//6
word = "hello world"
let result2 = ""
let space = false

for(let i = 0; i < word.length; i++) {
    if(i === 0){
        result2 += word[i].toUpperCase()
    }
    else if(word[i] === " ") {
        space = true
        result2 += " "
    }
    else {
        if(space) {
            result2 += word[i].toUpperCase()
            space = false
        } else {
            result2 += word[i]
        }
    }
}
console.log(result2)



//7
let word2 = "hello"
let newWord2 = "" //ceritanya masih kosong, dan akan diisi dengan kata baru nanti

for (let i = word2.length-1; i >= 0; i--) {
    newWord2 += word2[i]
}
console.log(newWord2)

//8
//let kata = "The QuiCk BrOwN fOX"
const kalimat = 'The QuiCk BrOwN Fox';
let kalimatBaru = '';

for (let i = 0; i < kalimat.length; i++) {
    const huruf = kalimat[i];
    if (huruf === huruf.toUpperCase()) {
        kalimatBaru += huruf.toLowerCase();
    } else {
        kalimatBaru += huruf.toUpperCase();
    }
}

console.log(kalimatBaru);


//9 cari integer yang paling gede yang mana
let int1 = 25
let int2 = 27

if(int1 > int2) {
    console.log(int1)
} else if(int1 < int2) {
    console.log(int2)
} else if(int1 === int2) {
    console.log("kedua angka sama jumlahnya")
}

//10 urutkan 3 angka dari yang paling kecil. yaitu num1 = 42, num2 = 27, num3 = 18
let angka1 = 42, angka2 = 27, angka3 = 18
angka = [angka1, angka2, angka3]

urut = angka.sort();

console.log(urut)


//11
let word3 = 1
if(word3 = String) {
    console.log(1)
} else if(word3 = Number) {
    console.log(" ")
} else {
    console.log("tipe data lain")
}


//12
const kalimat2 = 'An apple a day keeps the doctor away';
let kalimatNew = '';

for (let i = 0; i < kalimat2.length; i++) {
    if (kalimat2[i] === 'a') {
        kalimatNew += '*';
    } else {
        kalimatNew += kalimat2[i];
    }
}

console.log(kalimatNew);
