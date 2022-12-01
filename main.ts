let strip = neopixel.create(DigitalPin.P13, 48, NeoPixelMode.RGB)
radio.setGroup(7)
strip.showColor(neopixel.colors(NeoPixelColors.White))
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P10) > 1000) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.setBrightness(255)
        strip.show()
        basic.pause(100)
    } else if (pins.analogReadPin(AnalogPin.P4) > 1000) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.setBrightness(100)
        strip.show()
        basic.pause(100)
    } else if (pins.analogReadPin(AnalogPin.P3) > 1000) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.setBrightness(20)
        strip.show()
        basic.pause(100)
    } else {
    	
    }
})
