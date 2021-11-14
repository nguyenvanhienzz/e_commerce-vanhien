import React from 'react'
import { useHistory, useRouteMatch } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CommunityCommitment from './BlackCommunityCommitment/CommunityCommitment';
import './Blog.css';
import Community from './Community/Community';
import Family from './Family/Family';
import Wings from './Wings/Wing';
const Blog = () => {
    const { path, url } = useRouteMatch();
    const history = useHistory();
    return (
        <>
            <div className='contant-community'>
                <div className='contant-img'>
                    <img src='https://brandlogos.net/wp-content/uploads/2015/01/Nike-symbol-vector-400x400.png' onClick={() => history.push('/')} />
                </div>
                <div className='community-ul'>
                    <ul>
                        <li onClick={() => history.push(`${url}/black-community-commitment`)}>Black Community Commitment</li>
                        <li onClick={() => history.push(`${url}`)}>Community</li>
                        <li onClick={() => history.push(`${url}/wings`)}>Wings</li>
                        <li onClick={() => history.push(`${url}/family`)}>Family</li>
                    </ul>
                </div>
            </div>
            <div className='community-contant'>
                <Switch>
                    <Route path={`${path}`} exact>
                        <Community />
                    </Route>
                    <Route path={`${path}/black-community-commitment`} exact>
                        <CommunityCommitment />
                    </Route>
                    <Route path={`${path}/wings`} exact>
                        <Wings />
                    </Route>
                    <Route path={`${path}/family`} exact>
                        <Family />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default Blog
