define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pokemon = void 0;
    class Pokemon {
        constructor(name) {
            this.name = name;
            this.publicApi = 'https://pokeapi.co';
        }
    }
    exports.Pokemon = Pokemon;
});
