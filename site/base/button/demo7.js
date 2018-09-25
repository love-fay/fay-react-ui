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
import {demo7Path} from './demoPath';
const demoPath = demo7Path;
import CodeBlock from '../../codeBlock';

const demoCode = `
\`\`\`js
import React from 'react';
import { Button, Icon, Space } from 'rjd';
const ButtonGroup = Button.Group;

export default () => {
    return (
        <div>
            <h4>Basic</h4>
            <br/>
            <ButtonGroup>
                <Button>Cancel</Button>
                <Button>OK</Button>
            </ButtonGroup>
            <Space/>
            <ButtonGroup>
                <Button disabled>L</Button>
                <Button disabled>M</Button>
                <Button disabled>R</Button>
            </ButtonGroup>
            <Space/>
            <ButtonGroup>
                <Button>L</Button>
                <Button>M</Button>
                <Button>R</Button>
            </ButtonGroup>
            <br/><br/>
            <h4>With Icon</h4>
            <br/>
            <ButtonGroup>
                <Button type="primary">
                    <Icon type="left" />Go back
                </Button>
                <Button type="primary">
                    Go forward<Icon type="right" />
                </Button>
            </ButtonGroup>
            <Space/>
            <ButtonGroup>
                <Button type="primary" icon="cloud" />
                <Button type="primary" icon="cloud-download" />
            </ButtonGroup>
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
                            可以将多个 Button 放入 Button.Group 的容器中。
                            通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。
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