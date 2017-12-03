import React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import {
    Form,
    Grid,
    Button,
    Segment,
    Header,
    Sidebar,
    Menu,
    Icon,
    Divider,
    List,
    Image,
    Label
} from 'semantic-ui-react';
import axios from 'axios';

import './Users.css';
import { USERS_FETCH, USER_REMOVE, USER_UPDATE } from '../../redux/users';
import UserEditor from './UserEditor';

class Users extends React.Component {

    componentWillMount() {
        this.props.fetchUsers();
    }

    render() {
        const renderUsers = () => {
            let usersKeys = Object.keys(this.props.users);
            if (usersKeys.length === 0) {
                return (
                    <List.Item>
                        <List.Content>
                            Список пуст
                        </List.Content>
                    </List.Item>
                )
            } else {
                return usersKeys.map(key => {
                    let user = this.props.users[key];
                    let routeHref = '/admin/users/' + user.login;
                    return (
                        <List.Item key={key} as={Link} to={routeHref}>
                            <Image avatar src={user.avatar} />
                            <List.Content>
                                <List.Header>
                                    {user.login}
                                </List.Header>
                            </List.Content>
                        </List.Item>
                    )
                });
            }
        };
        const { match, users } = this.props;
        return (
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column width='4'>
                        <Button>Добавить</Button>
                        <List selection verticalAlign='middle'>
                            {renderUsers()}
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <Route exact path='/admin/users/:login' render={
                            props => (<UserEditor users={this.props.users} removeUser={this.props.removeUser} updateUser={this.props.updateUser} {...props} />)
                        } />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = createSelector(
    state => state.users,
    state => state.routing,
    (users, routing) => ({
        routing,
        users: users.toJS()
    })
);

const mapDispatchToProps = dispatch => ({
    fetchUsers() {
        dispatch({ type: USERS_FETCH });
    },
    removeUser(user) {
        dispatch({ type: USER_REMOVE, payload: user });
    },
    updateUser(user) {
        dispatch({ type: USER_UPDATE, payload: user });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
