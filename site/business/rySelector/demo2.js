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
import Demo2 from '../../demo/app/business/rySelector/demo2';

const demoCode = `
\`\`\`js
import React, {Component} from "react";
import Button from 'rjd/button'
import RySelectSingleModal from 'rjd/rySelectSingleModal';
import RySelectInput from 'rjd/rySelectInput';

export default class Demo1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selectedRys: []
        }
    }

    render() {

        const Item = ({id,username, nickname, rybs,fyfjm, orgName, bmbs, departmentName}) => {
            return (
                <div>
                    id:{id}
                    &nbsp;&nbsp;&nbsp;&nbsp;username:{username}
                    &nbsp;&nbsp;&nbsp;&nbsp;nickname:{nickname}
                    &nbsp;&nbsp;&nbsp;&nbsp;rybs:{rybs}
                    &nbsp;&nbsp;&nbsp;&nbsp;fyfjm:{fyfjm}
                    &nbsp;&nbsp;&nbsp;&nbsp;orgName;{orgName}
                    &nbsp;&nbsp;&nbsp;&nbsp;bmbs:{bmbs}
                    &nbsp;&nbsp;&nbsp;&nbsp;departmentName:{departmentName}
                </div>
            )
        }

        return (
            <div>

                <RySelectSingleModal
                    userRange={1}
                    onSelect={(selectedRys) => this.setState({selectedRys, visible: false})}
                    title="自定义标题"
                    visible={this.state.visible}
                    onCancel={(e)=>this.setState({visible: false})}
                />

                <div>
                    <div style={{display: "inline-block"}}>人员选择（单选）：</div>
                    <div style={{display: "inline-block"}}>
                        <RySelectInput multiple={false}
                                       defaultSelectedRys={this.state.selectedRys}
                                       onChange={(selectedRys) => this.setState({selectedRys})}
                        />
                    </div>
                    <div style={{display: "inline-block"}}>
                        <Button type="primary" onClick={()=>this.setState({visible: true})}>打开</Button>
                    </div>
                </div>

                {
                    this.state.selectedRys.map(item => {
                        return <Item
                            key={item.username}
                            id={item.id}
                            username={item.username}
                            nickname={item.nickname}
                            rybs={item.rybs}
                            fyfjm={item.fyfjm}
                            orgName={item.orgName}
                            bmbs={item.bmbs}
                            departmentName={item.departmentName}
                        />
                    })
                }
            </div>

        )
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
            <Card>
                <div><Demo2/></div>
                <CardContent>
                    <Typography component="p">
                        {/*按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。*/}
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