export function RepositoryItem(props){
    return(
        <li>
            <strong>{props.repositoryname?.name ?? 'unform default'}</strong>

            <p>{props.repository?.description}</p>
            <a href={props.repository?.link}>
                Acessar repositórios
            </a>
        </li>
    )
}