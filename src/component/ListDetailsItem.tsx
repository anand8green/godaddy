import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { gitDataProps } from './ListItem'
import { ReactComponent as CrossIcon } from '../cross.svg';


const ListDetailsItem: FC<gitDataProps> = ({ full_name, description, forks, language, watchers, git_url, }) => {
    return (
        <div className='details_box'>
            <div className="topbar">
                <h1 role="list">{full_name}</h1>
                <Link className="closeBtn" to={"/"}>
                    <CrossIcon className='cross' />
                </Link>
            </div>

            <p className='description'> <span>Description:</span>  {description || "Not Mentioned"}</p>

            <div className="tabBox">
                <div className="tab fork">
                    <h5 className="title">Forks</h5>
                    <h1 className="value"> {forks}</h1>
                </div>

                <div className="tab lang">
                    <h5 className="title">Language</h5>
                    <h1 className="value">  {language || "Not Mentioned"}</h1>
                </div>

                <div className="tab watchers">
                    <h5 className="title">Watchers</h5>
                    <h1 className="value">  {watchers}</h1>
                </div>
            </div>
            <p className='url'> <strong>GitURL:</strong>  {git_url}</p>

        </div>

    )
}

export default ListDetailsItem