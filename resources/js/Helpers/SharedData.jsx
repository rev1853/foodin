import { usePage } from "@inertiajs/inertia-react";

function SharedData(Component) {
    return function WrappedComponent(props) {
        const sharedData = usePage();
        return <Component {...props} sharedData={sharedData} />;
    }
}

export default SharedData;