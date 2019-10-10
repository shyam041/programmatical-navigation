import React,{Component} from 'react';
import TeamLogo from './TeamLogo';
import {Link} from 'react-router-dom';
import {getTeamNames} from '../api';

export default class Home extends Component{
    state = {
        teamNames:[]
    };

    componentDidMount(){
        getTeamNames().then((teams)=>{
            this.setState((prevState,props)=>{
                console.log('previous state',prevState.teamNames);
                return{teamNames:teams}
            },()=>{
                console.log('new state',this.state.teamNames);
            });
        });
    }
    render(){
        const {teamNames} = this.state;
        return(
            <div className='container'>
                <h1 className='large-header'>Hash History Basketball League</h1>
                <h3 className='header text-center'>Select Team</h3>
                <div className='home-grid'>
                    {teamNames.map((id)=>(
                        <Link key={id} to={`/${id}`}>
                            <TeamLogo id={id} width='125px'/>
                        </Link>
                    ))}
                </div>
            </div> 
        );
    }
}