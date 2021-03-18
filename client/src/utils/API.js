import axios from "axios";
import randomRecordSleeve from "random-record-sleeve"

const BASEURL = "https://api.discogs.com/artists/1/releases?page=2&per_page=75";
const TOKEN ="kwqPJdAbExnSbGLJBXkmxhUoeIoOwuLxCDWRnhtg"


const API = {
  search: function() {
    return axios.get(BASEURL + TOKEN );
  }
};
export default API;
randomRecordSleeve.setCredentials('k3y', 's3cr3t');
 
// Get a random sleeve from https://www.discogs.com/lists/Discogs-Most-Popular-Albums/2056
var sleeve = randomRecordSleeve.getSleeve();
console.log(sleeve.url); // The sleeve picture
console.log(sleeve.title); // The record title
console.log(sleeve.year); // The record year
 
// Options (default values)
var sleeve = randomRecordSleeve.getSleeve({
    listId: 2056, // List ID to get a sleeve from
    size150: false // Gets the small sized (150x150) image if true
});