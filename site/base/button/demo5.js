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
import {demo5Path} from './demoPath';
const demoPath = demo5Path;
import CodeBlock from '../../codeBlock';

const demoCode = `
\`\`\`js
import React from 'react';
import { Button, Space } from 'rjd';

class Demo4 extends React.Component {
    state = {
        loading: false,
        iconLoading: false,
    };

    enterLoading = () => {
        this.setState({ loading: true });
    };

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };

    render() {
        return (
            <span>
        <Button type="primary" loading>
          Loading
        </Button>
        <Space/>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br /><br />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </Button>
        <Space/>
        <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
          Click me!
        </Button>
        <br /><br />
        <Button shape="circle" loading />
        <Space/>
        <Button type="primary" shape="circle" loading />
      </span>
        );
    }
}

export default Demo4;
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
                            添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
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