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
import Demo4 from '../../demo/app/base/dialog/demo4';
import CodeBlock from '../../codeBlock';

const demoCode = `
\`\`\`js
import React, {Component} from 'react';
import Button from 'rjd/button';
import Dialog from 'rjd/dialog';

class Demo4 extends Component{

    state = {visible: false};

    showDialog = () => {
        this.setState({visible: true})
    };

    handleCancel = (e) => {
        this.setState({visible: false})
    };

    render(){
        const {visible} = this.state;
        return (
            <span>
                <Button type='primary' onClick={this.showDialog}>Open</Button>
                <Dialog
                    title='Basic Dialog'
                    visible={visible}
                    width={800}
                    maxHeight={500}
                    style={{bottom: '20px', right: '20px'}}
                    onCancel={this.handleCancel}
                    mod='scrollInline'
                >
                    <p>Some contents...</p>
                    <p style={{width:'700px'}}>Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                </Dialog>
            </span>
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
    demo: {
        padding: 20
    }
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
                <div className={classes.demo}>
                    <Demo4/>
                </div>
                <CardContent>
                    <Typography component="p">
                        不设置mod时，默认外部滚动
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