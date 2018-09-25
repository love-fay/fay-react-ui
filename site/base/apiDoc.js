import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const getDate = (data) => data.map((i, n) =>
    <TableRow key={n}>
        <TableCell>{i[0]}</TableCell>
        <TableCell>{i[1]}</TableCell>
        <TableCell>{i[2]}</TableCell>
        <TableCell>{i[3]}</TableCell>
    </TableRow>
);

function ApiDoc(props) {
    const { classes, data } = props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>参数</TableCell>
                        <TableCell>说明</TableCell>
                        <TableCell>类型</TableCell>
                        <TableCell>默认值</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getDate(data)}
                </TableBody>
            </Table>
        </Paper>
    );
}

ApiDoc.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
};

export default withStyles(styles)(ApiDoc);