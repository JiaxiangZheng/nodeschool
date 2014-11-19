/**
 * #####################################################################
 * ##                 ~~  Higher Order Functions  ~~                  ##
 * #####################################################################
 */

function repeat(operation, num) {
    if (num <= 0) return;
    while (num--) {
        operation(num);
    }
    return;
}
module.exports = repeat;
