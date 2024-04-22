class Localisation {
    constructor(data) {
        this._world = data.world
        this._coordinates = data.coordinates
        this._description = data.description
        this._places = data.places
        this._name = data.name
        this._characters = data.characters
        this._chronologies = data.chronologies
    }

    get world() {
        return this._world
    }

    get longitude_coordinate() {
        return this._coordinates.long
    }

    get latitude_coordinate() {
        return this._coordinates.lat
    }

    get general_description() {
        return this._description
    }

    get name_place() {
        return this._places.name
    }

    get picture_place() {
        return this._places.picture
    }

    get description_place() {
        return this._places.description
    }

    get localisation_name() {
        return this._localisation.name
    }
}