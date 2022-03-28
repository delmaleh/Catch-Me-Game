import * as Tools from '../../services/tools.js'

export class User{
    constructor(_fName, _email) {
        this.fName = _fName;
        this.email = Tools.fixEmail(_email)
        this.id = parseInt(Math.random() * 9999);
    }
}