//TODO: 3. define category model
//TODO: 4. connect with api

export default {
    getCategories() {
        return [
            {
                "href":"https://api.spotify.com/v1/browse/categories/toplists",
                "icons":
                {
                    "height":275,
                    "url":"https://datsnxq1rwndn.cloudfront.net/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
                    "width":275
                },
                "id":"toplists",
                "name":"Top Lists"
            },
            {
                "href":"https://api.spotify.com/v1/browse/categories/mood",
                "icons":
                {
                    "height":274,
                    "url":"https://datsnxq1rwndn.cloudfront.net/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
                    "width":274
                },
                "id":"mood",
                "name":"Mood"
            }
        ]
    }
}