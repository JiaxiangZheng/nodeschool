/* 
 * Modify the recursive repeat function provided in the boilerplate, such that
 * it does not block the event loop (i.e. Timers and IO handlers can fire). This
 * necessarily requires repeat to be asynchronous. 
 *
 * A timeout is queued to fire after 1 second, which will print the results of
 * the test and exit the process. repeat should release control of the event
 * loop such that the timeout fires before 1500 milliseconds elapse. 
 *
 * Try to perform as many operations as you can before the timeout fires!
*/
function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return
    setTimeout(function () {
        operation()
        repeat(operation, --num)
    }, 500)
}

module.exports = repeat

