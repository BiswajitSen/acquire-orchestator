class Lobby {
    #hasExpired;
    #players;
    #size;

    constructor(size) {
        this.#players = [];
        this.#hasExpired = false;
        this.#size = size;
    }

    addPlayer(player) {
        this.#players.push(player);
    }

    #hasSufficientPlayer() {
        return this.#players.length >= this.#size.lowerLimit;
    }

    isFull() {
        return this.#players.length === this.#size.upperLimit;
    }

    expire() {
        this.#hasExpired = true;
    }

    getHost() {
        return this.#players.at(0);
    }

    status(accessToken) {
        return {
            players: this.#players.map(player => ({ ...player })),
            isFull: this.isFull(),
            hasExpired: this.#hasExpired,
            hasSufficientPlayer: this.#hasSufficientPlayer(),
            host: this.getHost(),
            accessToken: accessToken
        }
    }
}

module.exports = Lobby;