import { FilterAdopt } from "./components/filter";
import { IFilter } from "./interfaces/IFilter";



export function Adopt() {
    async function handleSubmit(filter: IFilter) {
        console.log(filter)
      }

    return(
        <section>
            <FilterAdopt handleSubmit={handleSubmit}/>
            
        </section> )
}