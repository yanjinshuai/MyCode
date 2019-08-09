define(function() {
    function get(selector, parent) {
        var parent = parent || document;
        return typeof selector === 'string' ? parent.querySelector(selector) : selector
    }

    function gets(selector, parent) {
        var parent = parent || document;
        return typeof selector === 'string' ? parent.querySelectorAll(selector) : selector
    }
    return {
        get: get,
        gets: gets
    }
})