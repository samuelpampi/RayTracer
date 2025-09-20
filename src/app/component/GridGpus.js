
import { CardGpu } from '../component/CardGpu';
import 'bootstrap/dist/css/bootstrap.css';

export function GridGpus({gpus}){

    return(
        <section className="col-12 col-md-6 col-lg-7 p-4 d-flex flex-wrap gap-4 justify-content-start">
            {
                gpus.map(gpu => (
                    <CardGpu key={gpu.asin} title={gpu.product_title} price={gpu.product_price} img={gpu.product_photo} id={gpu.asin} rate={gpu.product_star_rating}/>
                ))
            }
        </section>
    )
}