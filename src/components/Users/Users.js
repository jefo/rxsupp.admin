import React from 'react';
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
import ImageUploader from 'react-images-upload';

import './Users.css';

export default class Users extends React.Component {

    render() {
        return (
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column width='3'>
                        <List selection verticalAlign='middle'>
                            <List.Item>
                                <Image avatar src='/assets/images/avatar/small/helen.jpg' />
                                <List.Content>
                                    <List.Header>Helen</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='/assets/images/avatar/small/christian.jpg' />
                                <List.Content>
                                    <List.Header>Christian</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='/assets/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                    <List.Header>Daniel</List.Header>
                                </List.Content>
                            </List.Item>
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
