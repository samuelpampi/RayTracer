import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Star() {
    return (
        <span className="text-success">
            <FontAwesomeIcon icon={faStar} />
        </span>
    );
}