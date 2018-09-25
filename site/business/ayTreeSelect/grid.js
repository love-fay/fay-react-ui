import React from 'react';
import Grid from 'material-ui/Grid';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';

export default () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Demo1 />
                <br/><br/>
                <Demo2 />
                <br/><br/>
                <Demo3 />
            </Grid>
        </Grid>
    );
}
