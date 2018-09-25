import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../codeBlock';
import Demo3 from '../../demo/app/base/modal/demo3';

const demoCode = `
\`\`\`js
import React, {Component} from 'react';
import Modal from 'rjd/modal';
import Button from 'rjd/button';
import Space from 'rjd/space';
const confirm = Modal.confirm;

class Demo3 extends Component{

    showConfirm = () =>{
        confirm({
            title: 'Do you want to delete these items?',
            content: 'Some descriptions',
            onOk(){
                console.log('OK');
            },
            onCancel(){
                console.log('Cancel');
            }
        })
    };

    showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this task?',
            content: 'Some descriptions',
            okTest: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk(){
                console.log('OK');
            },
            onCancel(){
                console.log('Cancel');
            }
        })
    };

    render(){
        return (
            <div>
                <Button onClick={this.showConfirm}>Confirm</Button>
                <Space/>
                <Button onClick={this.showDeleteConfirm} type="dashed">Delete</Button>
            </div>
        )
    }
}

export default Demo3;
\`\`\`
`;

const styles = theme => ({
    card: {
        width: 450
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    demo:{
        padding: '20px',
        textAlign: 'center'
    },
});

class RecipeReviewCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <div className={classes.demo}><Demo3/></div>
                <CardContent>
                    <Typography component="p">
                        使用confirm()可以快捷地弹出确认框
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <ReactMarkdown source={demoCode} renderers={{code: CodeBlock}}/>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);