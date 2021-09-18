//TODO: define new releases model
import HttpClient from "./HttpClient";

export default {
    getNewReleases() {
       return HttpClient.get('browse/new-releases');
   }
}