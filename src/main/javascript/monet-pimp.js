//     monet-pimp.js 0.8.1

//     This file needs to be included after monet.js

//     (c) 2012-2014 Chris Myers
//     Monet-pimp.js may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://cwmyers.github.com/monet.js


(function (window) {

    Object.prototype.cons = function (list) {
        return list.cons(this)
    }

    Object.prototype.some = Object.prototype.just = function () {
        return new Some(this)
    }

    Object.prototype.success = function () {
        return Validation.success(this)
    }

    Object.prototype.fail = function () {
        return Validation.fail(this)
    }

    Object.prototype.right = function() {
        return Either.Right(this)
    }

    Object.prototype.left = function() {
        return Either.Left(this)
    }

    Array.prototype.list = function () {
        return List.fromArray(this)
    }

    return this

})(window || this);