console.log("Running")

function forEachValue(list, callback) {
    for (let i = 0; i < list.length; i++) {
        callback.call(list[i], i);
    }
}

const weapons = [
    { type: 'shuriken' },
    { type: 'katana' },
    { type: 'nunchucks' }];

forEachValue(weapons, function (index) {
    if (weapons[index] === this)
        console.log('this and ' + weapons[index].type + ' are equal');
});