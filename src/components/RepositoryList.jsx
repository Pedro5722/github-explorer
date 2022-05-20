import { RepositoryItem } from "./RepositoryItem";

const RepositoryName = 'Unform2';
const repository = {
    name: 'Unform',
    description: 'Forms in React',
    link: 'https://github.com/pedro5722'
}

export function RepositoryList(){
    return(
        <section id="repository-list">
            <h1>Lista de repositórios</h1>
            
            <ul>
                <RepositoryItem repository = {repository}/>
                <RepositoryItem />
                <RepositoryItem/>
                <RepositoryItem/>

            </ul>
        </section>
    )
}