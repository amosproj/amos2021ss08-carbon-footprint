import React from "react";


export default (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path opacity={props.opacity || ''} d="M3 10v11h6v-7h6v7h6v-11L12,3z"
            fill={props.fill || "#9FA2B4"}
        />
    </svg>
);

