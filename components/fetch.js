import { useEffect, useState } from "react";

const PageRenderer = ({ pageId }) => {
    try {
        const response = fetch(
            `https://yourwordpress.com/wp-json/custom/v1/elementor-page/${pageId}`
        );
        const data = response.json();
        console.log("data ",data)


    } catch (error) {
        console.error("Error fetching page data:", error);
    } finally {
        setLoading(false);
    }
};


export default PageRenderer;