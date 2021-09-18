//TODO: define featured playlist model
import HttpClient from "./HttpClient";

export default {
    getFeaturedPlaylist() {
       return HttpClient.get('browse/featured-playlists');
   }
}