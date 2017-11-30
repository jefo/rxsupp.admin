import React from 'react';
import { Form, Grid, Button, Segment, Header, Sidebar, Menu, Icon, Divider } from 'semantic-ui-react';

import './AdminPage.css';

export default class AdminPage extends React.Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div className='l-admin'>
                <Menu fixed="left" width='thin' icon='labeled' vertical inverted>
                    <Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick}>
                        <Icon name='users' />
                        Пользователи
                    </Menu.Item>
                    <Menu.Item name='chat' active={activeItem === 'chat'} onClick={this.handleItemClick}>
                        <Icon name='chat' />
                        Чат
                    </Menu.Item>
                    <Menu.Item></Menu.Item>
                </Menu>
                <Grid centered columns='1' stretched>
                    <Grid.Row>
                        <Grid.Column>
                            <div>
                                <Header as='h3'>Admin</Header>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
