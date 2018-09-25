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
import {demo1Path} from './demoPath';
const demoPath = demo1Path;
import CodeBlock from '../../codeBlock';
const demoCode = `
\`\`\`js
import React, {Component} from 'react';
import { Table, Divider } from 'rjd';
import {user} from '../../../../fetch';

const columns = [{
    title: '序号',
    dataIndex: 'id',
    fixed: 'left',
    width: 160,
}, {
    title: '姓名',
    dataIndex: 'name',
    fixed: 'left',
    sorter: true,
    width: 160,
    render: name => <span style={{color: '#f5222d'}}>{name}</span>,
}, {
    title: '邮箱',
    dataIndex: 'email',
    filters: [
        { text: 'QQ邮箱', value: 'qq' },
        { text: 'RJ邮箱', value: 'rj' },
    ],
}, {
    title: '创建日期',
    dataIndex: 'createDate'
}, {
    title: '地址',
    dataIndex: 'address',
}, {
    title: '操作',
    key: 'action',
    fixed: 'right',
    width: 160,
    render: () => (
        <span>
            <a href='javascript:void(0)'>新增</a>
            <Divider type="vertical" />
            <a href='javascript:void(0)'>删除</a>
            <Divider type="vertical" />
            <a href='javascript:void(0)'>更新</a>
        </span>
    ),
}];

class UserTable extends Component{

    state = {
        data: [],
        pagination: {},
        loading: false,
    };

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            sortOrder: sorter.order,
            ...filters,
        });
    };

    fetchCb = res => {
        this.setState({
            loading: false,
            data: res.data.pageData,
        });
    };

    fetch = (params = {}) => {
        this.setState({ loading: true });
        const { sortOrder, email } = params;
        if(sortOrder === 'ascend'){
            if(email && email.length === 1){
                if(email[0] === 'qq'){
                    user.findUsersOrderByNameAscAndQQ(res => this.fetchCb(res));
                }else if(email[0] === 'rj'){
                    user.findUsersOrderByNameAscAndRJ(res => this.fetchCb(res));
                }
                return;
            }
            user.findUsersOrderByNameAsc(res => this.fetchCb(res));
        }else if(sortOrder === 'descend'){
            if(email && email.length === 1){
                if(email[0] === 'qq'){
                    user.findUsersOrderByNameDescAndQQ(res => this.fetchCb(res));
                }else if(email[0] === 'rj'){
                    user.findUsersOrderByNameDescAndRJ(res => this.fetchCb(res));
                }
                return;
            }
            user.findUsersOrderByNameDesc(res => this.fetchCb(res));
        }else{
            if(email && email.length === 1){
                if(email[0] === 'qq'){
                    user.findUsersByQQ(res => this.fetchCb(res));
                }else if(email[0] === 'rj'){
                    user.findUsersByRJ(res => this.fetchCb(res));
                }
                return;
            }
            user.findUsers(res => this.fetchCb(res));
        }
    };

    componentDidMount() {
        this.fetch();
    }

    render() {
        return (
            <Table columns={columns}
                   rowKey={record => record.id}
                   dataSource={this.state.data}
                   pagination={this.state.pagination}
                   loading={this.state.loading}
                   onChange={this.handleTableChange}
                   scroll={{ x: '130%' }}
            />
        );
    }
}

export default UserTable;
\`\`\`
`;

const styles = theme => ({
    card: {
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
            <Card className={classes.card}>
                <div id={classes.demo} className={classes.demo}> </div>
                <CardContent>
                    <Typography component="p">
                        这个例子通过简单的fetch读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。
                    </Typography>
                    <Typography component="p">
                        另外，本例也展示了筛选排序功能如何交给服务端实现，列不需要指定具体的 onFilter 和 sorter 函数，而是在把筛选和排序的参数发到服务端来处理，
                        同时该例子中的姓名一栏自定义了样式。
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