;(function () {

    var randomColorStyle = function(colors, spec) {
        if (!(colors instanceof Array))
            throw 'colors must be an Array';

        if (spec === null || typeof spec !== 'object')
            throw 'spec is not an Object';

        if (colors.length === 0) // Default to completely random
            c = '#'+Math.floor(Math.random()*16777215).toString(16);
        else
            c = colors[Math.floor(colors.length * Math.random())];

        for (var selector in spec) {
            if (spec.hasOwnProperty(selector)) {
                elements = document.querySelectorAll(selector);
                properties = spec[selector];
                for (var i = 0; i < elements.length; i++) {
                    e = elements[i];
                    for (var j = 0; j < properties.length; j++) {
                        e.style[properties[j]] = c;
                    }
                }
            }
        }
    };

    if (this.randomColorStyle) throw 'already defined';
    this.randomColorStyle = randomColorStyle;

}).call(this);