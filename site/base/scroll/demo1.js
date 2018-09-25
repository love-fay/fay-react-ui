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
import Demo1 from '../../demo/app/base/scroll/demo1';

const demoCode = `
\`\`\`js
import React,{Component} from 'react';
import Scroll from 'rjd/scroll';
import Button from 'rjd/button';

class Demo1 extends Component{

    state = {
        html: []
    };

    handleClick = () => {
        let html = this.state.html;
        html.push(<p key={html.length}>fay's scroll</p>);
        this.setState({
            html: html
        })
    };

    render(){
        return (
            <Scroll style={{height: '500px', width:'300px'}}>
                <div style={{width: '500px'}}>
                    <p>fay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scroll</p>
                    <Button onClick={this.handleClick}>add text</Button>
                    <div>{this.state.html}</div>
                </div>
            </Scroll>
        )
    }
}

export default Demo1;
\`\`\`
`;

const styles = theme => ({
    card: {
        maxWidth: 450
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
                        简单的自制滚动条，只要定义宽度和高度，溢出的内容将以滚动条滚动的形式出现
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