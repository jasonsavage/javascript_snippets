function flatten(arr) {
    var flat = [];
    arr.forEach(function (item, i) {
        if(item instanceof Array) {
            flat = flat.concat(flatten(item));
        }
        else
        {
            flat.push(item);
        }

    });
    return flat;
}
