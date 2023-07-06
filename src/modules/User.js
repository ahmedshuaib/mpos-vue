export default class User {
    /**
     *
     * @param {number} id
     * @param {string} email
     * @param {string} first_name
     * @param {string} last_name
     */
    constructor({id, email, first_name,last_name}) {

        this.id = id
        this.email = email
        this.first_name = first_name
        this.last_name = last_name
    }
}
