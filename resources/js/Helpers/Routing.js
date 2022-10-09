import { Ziggy } from "@/ziggy";
const { Inertia } = require("@inertiajs/inertia");

class Routing {
    static to(urlName, param) {
        return (e) => {
            e.preventDefault();
            Inertia.visit(route(urlName, param));
        }
    }

    static url(url, param) {
        return route(url, param);
    }
}

export default Routing;
