import 'bootstrap/dist/css/bootstrap.css';
import '/src/app/globals.css';

export function TopClient({name, price}) {
    return (
        <li className="list-group-item border-0 rounded-0 bg-dark bg-gradient text-white d-flex align-items-center justify-content-between">
            <span className='title-top'>{name}</span>
            <span className="badge bg-success p-2">{price}</span>
        </li>
);
}