import 'bootstrap/dist/css/bootstrap.css';
import '/src/app/globals.css';
import Link from 'next/link';

export function TopClient({name, price, id}) {
    return (
        <li className="top-item list-group-item p-3 border-0 rounded-2 text-dark d-flex align-items-center justify-content-between">
            <Link variant="primary" className="title-top link-dark link-underline-opacity-0 pe-3" href={"./gpu/" + id}>{name}</Link>
            <span className="badge text-success bg-success-subtle p-2">{price}</span>
        </li>
);
}