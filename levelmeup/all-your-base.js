var argv = process.argv.slice(2)

if (argv.length < 2) {
    return
}
console.log("ALL YOUR %s ARE BELONG TO %s", argv[0], argv[1])

