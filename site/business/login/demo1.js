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
import Demo1 from '../../demo/app/business/login/demo1';

const demoCode = `
\`\`\`js
import React, {Component} from 'react';
import Login from 'rjd/login';
import Scroll from 'rjd/scroll';
import Message from 'rjd/message';

class Demo1 extends Component {

    successLogin = ()=>{
        Message.success('登录成功');
    };

    render() {
        return (
            <Scroll style={{position: 'fixed', top: '0', left:'0', right: '0', bottom: '0'}} width='100%'><Login successLogin={this.successLogin}/></Scroll>
        );
    }
}

export default Demo1;
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
                <div className={classes.demo}><Demo1/></div>
                <CardContent>
                    <Typography component="p">
                        最简单的用法
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