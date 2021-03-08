/**
 * 
 * @param {number} paramMiladi is the current year in the Gregorian calendar which is to be converted to Hijri calendar
 * 
 * The function returns Hijri equivalent of Gregorian calendar's year 
 */
function hicri(paramMiladi) {
    const gap = paramMiladi - 621;
    const hijri = gap + Math.floor(gap / 33);

    return hijri
}

module.exports = hicri