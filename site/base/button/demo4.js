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
import {demo4Path} from './demoPath';
const demoPath = demo4Path;
import CodeBlock from '../../codeBlock';

const demoCode = `
\`\`\`js
import React from 'react';
import { Button, Space } from 'rjd';

export default () => {
    return (
        <div>
            <Button type="primary">Primary</Button>
            <Space/>
            <Button type="primary" disabled>Primary(disabled)</Button>
            <br /><br />
            <Button>Default</Button>
            <Space/>
            <Button disabled>Default(disabled)</Button>
            <br /><br />
            <Button>Ghost</Button>
            <Space/>
            <Button disabled>Ghost(disabled)</Button>
            <br /><br />
            <Button type="dashed">Dashed</Button>
            <Space/>
            <Button type="dashed" disabled>Dashed(disabled)</Button>
        </div>
    );
}
\`\`\`
`;

const styles = theme => ({
    card: {
        maxWidth: 450,
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
            <div>
                <Card className={classes.card}>
                    <div id={classes.demo} className={classes.demo}> </div>
                    <CardContent>
                        <Typography component="p">
                            添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
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
            </div>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);