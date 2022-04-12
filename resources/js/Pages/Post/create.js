import App from "@/Layouts/App";
import React from "react";

export default function Create() {
    return (
        <div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
                delectus itaque molestiae porro nesciunt dolore voluptas quis
                molestias labore, recusandae architecto assumenda eveniet?
                Quibusdam iste eum non numquam, placeat debitis!
            </div>
        </div>
    );
}

Create.layout = (page) => <App children={page} title="Create POST" />;
