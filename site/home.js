import React, {Component} from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { blue, orange, purple, pink, yellow, green} from 'material-ui/colors';
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom';

const styles = theme => ({
    content: {

    },
    name: {
        fontSize: '150px',
        marginTop: '100px'
    },
    center: {
        textAlign: 'center',
    },
    nameR: {
        color: purple[500]
    },
    nameJ: {
        color: orange[500]
    },
    nameD: {
        color: purple[500]
    },
    nameE: {
        color: blue[500]
    },
    nameS: {
        color: pink[500]
    },
    nameI: {
        color: green[500]
    },
    nameG: {
        color: purple[500]
    },
    nameN: {
        color: yellow[500]
    },
    baseButton: {
        marginLeft: 'calc(50% - 135px)',
        background: 'linear-gradient(45deg, #9c27b0a6 30%, #9c27b0 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(156, 39, 176, .27)',
    },
    businessButton: {
        marginLeft: '30px',
        background: 'linear-gradient(45deg, #2196f3 30%, #2196f373 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(33, 150, 243, .35)',
    }
});

class Home extends Component {

    toBase = () => {
        const {history} = this.props;
        history.push('/base');
    };

    toBusiness = () => {
        const {history} = this.props;
        history.push('/business');
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.content}>
                <p className={classnames(classes.center, classes.name)}>
                    <span className={classes.nameR}>R</span>
                    <span className={classes.nameJ}>J</span>
                    <span>&nbsp;</span>
                    <span className={classes.nameD}>D</span>
                    <span className={classes.nameE}>E</span>
                    <span className={classes.nameS}>S</span>
                    <span className={classes.nameI}>I</span>
                    <span className={classes.nameG}>G</span>
                    <span className={classes.nameN}>N</span>
                </p>
                <Button variant="raised" size="large" color="primary" className={classes.baseButton} onClick={this.toBase}>
                    基础组件
                </Button>
                <Button variant="raised" size="large" color="primary" className={classes.businessButton} onClick={this.toBusiness}>
                    业务组件
                </Button>
                <h2 className={classes.center}>It will be a NB's design</h2>
                <h6 className={classes.center}>Though too mediocre now</h6>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Home));