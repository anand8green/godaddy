import React, { FC } from 'react'
import { Link } from 'react-router-dom'


export type gitDataProps = {
    id: number
    name: string
    full_name: string
    description?: string
    forks: number
    language: string
    watchers: number
    git_url: string
}


const ListItem: FC<gitDataProps> = (repo) => {

    return (
        <div className="listItem" key={repo.id}>
            <div className="leftSide">
                <h2 role="list">{repo.name}</h2>
                <p className='repo'>Git Repository</p>
            </div>
            <Link key={repo.id} to={`/${repo.id}`} state={repo}>
                <div className="btn">View Details</div>
            </Link>
        </div>
    )
}

export default ListItem