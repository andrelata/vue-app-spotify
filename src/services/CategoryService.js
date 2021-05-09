//TODO: define category model
import axios from "axios";

//TODO: move to config
let ACCESS_TOKEN = "BQB6XMZre3WVxl4wxEtc4vZiSEMdQo-rcvw5vwvHLyO2vehs3nOqT5ScZuZej-xn6_4nn8412p3VHVKj2wkPeiptaLA-bTnqEuD-SYhCTmxvscDfxd_PNwVXNMFuCtAtyfTq9tZjFSCWyJBlt_Mbf2-6";
let URL_BASE = "https://api.spotify.com/v1/browse/";

export default {
     getCategories() {
        return axios.get(URL_BASE + 'categories',{
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`
              }
        } );
    }
}