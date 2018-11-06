import React, {Component} from 'react';
import NavBar from "../../partials/NavBar";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import BoardModal from "../../partials/BoardModal.js"
import Teams from "./Teams/Teams.js";
import Boards from "./Boards/Boards.js";
import TeamModal from '../../partials/TeamModal';



class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activedTeam: null
        }
    }

    partialsBoardsRender(){
        return this.props.boards.map((b,i) =>
            <BoardModal board={b} key={i}/>
        )
    }
    partialsTeamsRender(){
        return this.props.teams.map((t,i) =>
            <TeamModal team={t} key={i}/>
        )
    }

    render(){
        const { user } = this.props;
        if(user && !user.profile) return(<Redirect to='/'/>)
        return(
            <main id="dashboard">
                <NavBar/>
                <BoardModal/>
                <TeamModal />
                {this.partialsBoardsRender()}
                {this.partialsTeamsRender()}
                <div className="container">
                    <div className="row">
                        <div className="col-3 column" id="teams">
                            <Teams 
                                activedTeam={this.state.activedTeam} 
                                teams={this.props.teams}
                                onChange={(field, value) => this.setState({activedTeam: value})}
                            />
                        </div>
                        <div className="col-9 column" id="boards">
                            <Boards boards={this.props.boards}/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    boards: state.boards,
    teams: state.teams
});
export default connect(mapStateToProps)(Dashboard);
