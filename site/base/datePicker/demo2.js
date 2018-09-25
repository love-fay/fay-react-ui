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
import Demo2 from '../../demo/app/base/datePicker/demo2';
import CodeBlock from '../../codeBlock';

const demoCode = `
\`\`\`js
import React, {Component} from 'react';
import DatePicker from 'rjd/date-picker';
const {RangePicker} = DatePicker;

class Demo2 extends Component{

    onChange = (value, dateString) => {
        console.log(value, dateString);
        console.log('Selected Time:', value);
        console.log('Formatted Selected Time:', dateString);
    };

    onOk = (value) => {
        console.log('onOk:', value);
    };

    render(){
        return (
            <div>
                <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder='Select Time'
                    onChange={this.onChange}
                    onOk={this.onOk}/>
                <br/>
                <RangePicker
                    showTime={{format:'HH:mm'}}
                    format="YYYY-MM-DD HH:mm"
                    placeholder={['Start Time', 'End Time']}
                    onChange={this.onChange}
                    onOk={this.onOk}/>
            </div>
        )
    }
}

export default Demo2;
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
                    <Demo2/>
                </div>
                <CardContent>
                    <Typography component="p">
                        增加选择时间功能，当showTime为一个对象时，其属性会传递给内建的TimePicker。
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