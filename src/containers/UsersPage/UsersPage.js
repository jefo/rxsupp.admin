import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UsersList from '../../components/Users/UsersList';
import UserEditor from './UserEditor';
import { Actions } from '../../redux/users';

export default class UsersPage extends React.Component {

    componentWillMount() {
        this.props.usersFetch();
    }

    render() {
        return (
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column width='4'>
                        <UsersList />
                    </Grid.Column>
                    <Grid.Column>
                        <Route exact path='/admin/users/:login' render={
                            props => (<UserEditor users={this.props.users} removeUser={this.props.removeUser} updateUser={this.props.updateUser} {...props} />)
                        } />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = createSelector(
    state => state.users,
    state => state.routing,
    (users, routing) => ({
        routing,
        users: users.collection
    })
);

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
