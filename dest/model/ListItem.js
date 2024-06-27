export default class ListItem {
    // we need to create class with id, item and checked but they should be '_id', ...
    // but currently id, item and checked refer to getters and setters
    constructor(_id = '', //give default value of an empty string
    _item = '', _checked = false) {
        this._id = _id;
        this._item = _item;
        this._checked = _checked;
    }
    //implement the interface with getters and setters
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get item() {
        return this._item;
    }
    set item(item) {
        this._item = item;
    }
    get checked() {
        return this._checked;
    }
    set checked(checked) {
        this._checked = checked;
    }
}
