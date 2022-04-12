import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Pagination from "react-js-pagination";
import App from "@/Layouts/App";

export default function Dashboard(props) {
    const [activePage, setActivePage] = useState(1);
    return <div className="text-3xl">Dashboard</div>;
}

Dashboard.layout = (page) => <App children={page} title={"Dashboard"} />;
