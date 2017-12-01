import React from 'react';
import { Link } from 'react-router-dom';
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

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

export default class Users extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = { users: {} };
    }

    componentWillMount() {
        instance.get('/users')
            .then(res => {
                this.setState({ users: res.data });
            });
    }

    render() {
        const renderUsers = () => Object.keys(this.state.users).map(key => {
            let user = this.state.users[key];
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
        return (
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column width='5'>
                        <List selection verticalAlign='middle'>
                            {renderUsers()}
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <Form>
                            <Form.Group inline>
                                <Form.Field>
                                    <input className='input-upload-avatar' id='avatar-input' type='file' />
                                    <label className='btn-upload-avatar' htmlFor='avatar-input'>
                                        <Icon color='blue' name='user' size='huge' circular />
                                    </label>
                                </Form.Field>
                                <List>
                                    <List.Item>
                                        <Form.Input placeholder='Email' />
                                    </List.Item>
                                    <List.Item>
                                        <Form.Input placeholder='Имя' />
                                    </List.Item>
                                    <List.Item>
                                        <Form.Input placeholder='Фамилия' />
                                    </List.Item>
                                </List>
                            </Form.Group>
                            <Button type='submit'>
                                <Icon name='save' />
                                Сохранить
                            </Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    onImageChange() {

    }
}
