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
import Demo1 from '../../demo/app/base/dropdown/demo1';

const demoCode = `
\`\`\`js
import React from 'react';
import Dropdown from 'rjd/dropdown';
import Input from 'rjd/input';
import Icon from 'rjd/icon';
import Row from 'rjd/row';
import Col from 'rjd/col';
import Checkbox from 'rjd/checkbox';

export default class Demo1 extends React.Component{

    render(){
        const content = (
            <Row>
                <Col span={8}><Checkbox value='A'>A</Checkbox></Col>
                <Col span={8}><Checkbox value='B'>B</Checkbox></Col>
                <Col span={8}><Checkbox value='C'>C</Checkbox></Col>
                <Col span={8}><Checkbox value='D'>D</Checkbox></Col>
                <Col span={8}><Checkbox value='E'>E</Checkbox></Col>
            </Row>
        );

        return (
            <Dropdown overlay={content} trigger={['click']} outClickHidden>
                <Input suffix={<Icon type='down'/>} defaultValue='点击下拉'/>
            </Dropdown>
        );
    }
}
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
                        设置outClickHidden属性为true，点击菜单中的内容不会让菜单消失
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