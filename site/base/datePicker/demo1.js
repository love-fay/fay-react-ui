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
import Demo1 from '../../demo/app/base/datePicker/demo1';
import CodeBlock from '../../codeBlock';

const demoCode = `
\`\`\`js
import React, {Component} from 'react';
import DatePicker from 'rjd/date-picker';
const {MonthPicker, RangePicker, WeekPicker} = DatePicker;

class Demo1 extends Component{

    onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    render(){
        return (
            <div>
                <DatePicker onChange={this.onChange}/>
                <br/>
                <MonthPicker onChange={this.onChange} placeholder='Select month'/>
                <br/>
                <RangePicker onChange={this.onChange}/>
                <br/>
                <WeekPicker onChange={this.onChange} placeholder='Select week'/>
                <br/>
            </div>
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
                    <Demo1/>
                </div>
                <CardContent>
                    <Typography component="p">
                        最简单的用法，在浮层中可以选择或者输入日期
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