class Character {
    constructor(data) {
        this._background = data.background
        this._picture = data.picture
        this._race = data.race
    }

    get background() {
        return this._background
    }

    get picture() {
        return this._picture
    }

    get race() {
        return this._race
    }
}