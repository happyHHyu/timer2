input.onButtonPressed(Button.A, function () {
    SET_TIME += -1
    if (SET_TIME < 1) {
        SET_TIME = 9
    }
    basic.showNumber(SET_TIME)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= SET_TIME; index++) {
        SET_TIME += -1
        basic.showNumber(input.runningTime() - SET_TIME)
    }
})
input.onButtonPressed(Button.B, function () {
    SET_TIME += 1
    if (SET_TIME > 9) {
        SET_TIME = 1
    }
    basic.showNumber(SET_TIME)
})
let SET_TIME = 0
SET_TIME = 5
basic.showNumber(SET_TIME)
basic.forever(function () {
	
})
