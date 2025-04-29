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

    //% block="שנה צבע ל %color"
    export function setColor(color: RGBColor): void {
        pins.analogWritePin(AnalogPin.P8, color == RGBColor.Red ? 1023 : 0)
        pins.analogWritePin(AnalogPin.P12, color == RGBColor.Green ? 1023 : 0)
        pins.analogWritePin(AnalogPin.P16, color == RGBColor.Blue ? 1023 : 0)
    }
}
