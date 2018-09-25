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
import Demo4 from '../../demo/app/base/modal/demo4';

const demoCode = `
\`\`\`js
import React, {Component} from 'react';
import Modal from 'rjd/modal';
import Button from 'rjd/button';
import Space from 'rjd/space';

class Demo4 extends Component{

    info = () =>{
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk(){
                console.log('OK');
            }
        })
    };

    success = () =>{
        Modal.success({
            title: 'This is a success message',
            content: 'some messages...some messages...'
        })
    };

    error = () =>{
        Modal.error({
            title: 'This is an error message',
            content: 'some messages...some messages...'
        })
    };

    warning = () =>{
        Modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...'
        })
    };

    render(){
        return (
            <div>
                <Button onClick={this.info}>Info</Button>
                <Space/>
                <Button onClick={this.success}>Success</Button>
                <Space/>
                <Button onClick={this.error}>Error</Button>
                <Space/>
                <Button onClick={this.warning} type="dashed">Warning</Button>
            </div>
        )
    }
}

export default Demo4;
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
                <div className={classes.demo}><Demo4/></div>
                <CardContent>
                    <Typography component="p">
                        各种类型的信息提示，只提供一个按钮用于关闭
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