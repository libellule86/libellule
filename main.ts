bluetooth.onBluetoothConnected(function () {
    if (input.buttonIsPressed(Button.A)) {
        bluetooth.startLEDService()
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    }
})
