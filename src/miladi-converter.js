/**
 * 
 * @param {number} paramHijri is the current year in the Hijri calendar which is to be converted to Gregorian calendar
 * 
 * The function returns Gregorian equivalent of Hijri calendar
 */
function miladi(paramHijri) {
    const gap = Math.floor(paramHijri / 33);
    const miladi = paramHijri - gap + 622;

    return miladi
}

module.exports = miladi