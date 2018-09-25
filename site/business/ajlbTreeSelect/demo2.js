import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import {appendIframeById} from '../../iframe';
import ReactMarkdown from 'react-markdown';
import {demo2Path} from './demoPath';
const demoPath = demo2Path;
import CodeBlock from '../../codeBlock';

const demoCode = `
\`\`\`js
import React, { Component } from 'react';
import AjlbTreeSelect from 'rjd/ajlbTreeSelect';

class Demo2 extends Component {

    state ={
        value:undefined,
    };

    onChange = (value, lable, map)=>{
        console.log(value);
        console.log(lable);
        console.log(map);
        console.log(map.get(value[1]));
        console.log(map.get(value[2]));
        this.setState({value});
    };
    render() {
        return (
            <div>
                <AjlbTreeSelect multiple value={this.state.value} onChange={this.onChange}/>
                案件类别4位代码 : {this.state.value}
            </div>
        );
    }
}

export default Demo2;
\`\`\`
`;

const styles = theme => ({
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
        // height: 450
    },
});

class RecipeReviewCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    componentDidMount(){
        const { classes } = this.props;
        appendIframeById(demoPath, classes.demo);
    }

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <div id={classes.demo} className={classes.demo}> </div>
                <CardContent>
                    <Typography component="p">
                        多选
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