class Chronology {
    constructor(data) {
        this._events = data.events
        this._plot = data.plot
    }

    get datetime_event() {
        return this._events.datetime
    }

    get description_event() {
        return this._events.description
    }

    get plot() {
        return this._plot
    }
}