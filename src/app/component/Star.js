import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function printStatus(status){
    if (status === "on") {
        return "text-success";
    } else {
        return "text-secondary";
    }
}

export default function Star({status}) {

    const starClass = printStatus(status);

    return (
        <span className={starClass}>
            <FontAwesomeIcon icon={faStar} />
        </span>
    );
}