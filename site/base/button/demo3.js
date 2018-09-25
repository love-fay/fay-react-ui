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
import {demo3Path} from './demoPath';
const demoPath = demo3Path;
import CodeBlock from '../../codeBlock';

const demoCode = `
\`\`\`js
import React from 'react';
import { Button, Radio, Icon, Space } from 'rjd';

class Demo3 extends React.Component {
    state = {
        size: 'large',
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    };

    render() {
        const size = this.state.size;
        return (
            <div>
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br /><br />
                <Button type="primary" size={size}>Primary</Button>
                <Space/>
                <Button size={size}>Normal</Button>
                <Space/>
                <Button type="dashed" size={size}>Dashed</Button>
                <Space/>
                <Button type="danger" size={size}>Danger</Button>
                <br /><br />
                <Button type="primary" shape="circle" icon="download" size={size} />
                <Space/>
                <Button type="primary" icon="download" size={size}>Download</Button>
                <br /><br />
                <Button.Group size={size}>
                    <Button type="primary">
                        <Icon type="left" />Backward
                    </Button>
                    <Button type="primary">
                        Forward<Icon type="right" />
                    </Button>
                </Button.Group>
            </div>
        );
    }
}

export default Demo3;
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
                            按钮有大、中、小三种尺寸。
                            通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
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