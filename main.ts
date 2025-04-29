/**
 * שליטה על נורת RGB דרך פינים 8, 12, ו-16
 */
//% weight=100 color=#0fbc11 icon="☀️"
namespace RGBLed {

    export enum RGBColor {
        //% block="אדום"
        Red,
        //% block="ירוק"
        Green,
        //% block="כחול"
        Blue
    }

    /**
     * שנה את צבע נורת ה-RGB
     * @param color הצבע שנבחר
     */
    //% block="שנה צבע ל %color"
    export function setColor(color: RGBColor): void {
        if (color == RGBColor.Red) {
            pins.analogWritePin(AnalogPin.P8, 1023)
            pins.analogWritePin(AnalogPin.P12, 0)
            pins.analogWritePin(AnalogPin.P16, 0)
        } else if (color == RGBColor.Green) {
            pins.analogWritePin(AnalogPin.P8, 0)
            pins.analogWritePin(AnalogPin.P12, 1023)
            pins.analogWritePin(AnalogPin.P16, 0)
        } else if (color == RGBColor.Blue) {
            pins.analogWritePin(AnalogPin.P8, 0)
            pins.analogWritePin(AnalogPin.P12, 0)
            pins.analogWritePin(AnalogPin.P16, 1023)
        }
    }
}
