import React from 'react';
import Grid from 'material-ui/Grid';
import Demo1 from './demo1';
import Demo2 from './demo2';

export default () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Demo1 />
                <br/><br/>
                <Demo2 />
            </Grid>
        </Grid>
    );
}
