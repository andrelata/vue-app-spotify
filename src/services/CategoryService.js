//TODO: define category model
import HttpClient from "./HttpClient";

export default {
     getCategories() {
        return HttpClient.get('categories');
    }
}
/*
class category {
    constructor(item) {
        this.id = item.id;
        this.name = item.name;
        this.href = item.href;
        this.icon.url = item.icons[0].url;
        this.icon.height = item.icons[0].height;
        this.icon.width = item.icons[0].width;
    }
}*/