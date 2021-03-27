    import axios from "axios";
class API {
    axios;
    constructor() {
        this.axios = axios.create();
    }
    /**
     * @param {String} name 
     * @param {String} value 
     */
    setHeader( name, value ) {
        if( value )
            this.axios.defaults.headers.common[name] = value;
        else
            delete this.axios.defaults.headers.common[name];
    }
    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * @param {String} userData.name
     * @returns {Promise}
     */
    register( userData ) {
        return this.axios.post("/api/auth/register", userData);
    }
    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    login( userData ) {
        return this.axios.post("/api/auth/login", userData);
    }
    authenticated() {
        return this.axios.post("/api/auth/authenticated");
    }

    createRecord(recordData) {
        return this.axios.post("/api/records", recordData);
    }
    findAllRecords(){
        return this.axios.get("/api/records")
    }
    // deleteOneRecord() {
    //     return this.axios.delete("/api/records/:id");
    // }

}
export default new API();