input.onButtonPressed(Button.A, function () {
    input2 = "" + input2 + "1"
})
input.onButtonPressed(Button.AB, function () {
    if (code == input2) {
        music.playMelody("E B C5 A B G A F ", 120)
        input2 = "1"
    }
})
input.onButtonPressed(Button.B, function () {
    input2 = "" + input2 + "2"
})
let input2 = ""
let code = ""
code = "11211"
input2 = "1"
