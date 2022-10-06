import { Ziggy } from "@/ziggy";
const { Inertia } = require("@inertiajs/inertia");

class Routing {
    static to(urlName) {
        return (e) => {
            e.preventDefault();
            Inertia.visit(route(urlName));
        }
    }

    static url(url) {
        return route(url);
    }
}

export default Routing;
