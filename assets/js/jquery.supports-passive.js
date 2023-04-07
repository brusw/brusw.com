(function() {
    if (typeof EventTarget !== 'undefined') {
        var supportsPassive = false;
        try {
            // Test via a getter in the options object to see if the passive property is accessed
            var opts = Object.defineProperty({},
            'passive', {
                get: function() {
                    supportsPassive = true;
                },
            });
            window.addEventListener('testPassive', null, opts);
            window.removeEventListener('testPassive', null, opts);
        } catch(e) {}
        var func = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function(type, fn) {
            this.func = func;
            this.func(type, fn, supportsPassive ? {
                passive: false
            }: false);
        };
    }
} ());
