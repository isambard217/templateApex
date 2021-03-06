import React, {Component} from 'react';
import {
    Button,
    Header,
    Image,
    Modal,
    Grid,
    Dropdown,
    TextArea,
    Form
} from 'semantic-ui-react';
import report from '../../images/check_green.png';
import '../../CSS/fonts.css';
import './modal.css';

const HeaderTitle = () => (
    <div className='header_title'>
        <Image src={report} className="img_header"/>
        <Header as='h2' className="header_title_check">
            Add comment</Header>
    </div>
);

const ButtonReport = () => (
    <div className="btn_center">
        <Button className='green btn_middle'>Get Report</Button>
    </div>
)

const forgot = [
    {key: 'check', value: 'check', text: 'Forgot to check in'},
    {key: 'check2', value: 'check2', text: 'Forgot to check in2'}
];

const SelectionCheck = () => (
    <Dropdown placeholder='Select Friend' selection options={forgot}/>
)

const TextAreaE = () => (
    <Form>
        <TextArea placeholder='Leave your comment here.'/>
    </Form>
)

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row>
            <Grid.Column>
                <div className="block_center">
                    <label>Suggest status</label>
                    <SelectionCheck/>
                    <label>Leave comment</label>
                    <TextAreaE/>
                    <span className="subtitle_comment">This comment will be review by the HR maneger</span>
                </div>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row >
            <Grid.Column>
                <ButtonReport/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalProfileTimeCard = () => (
    <Modal trigger={<Button> Show Modal </Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalProfileTimeCard;