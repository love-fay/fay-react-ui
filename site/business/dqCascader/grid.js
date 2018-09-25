import React from 'react';
import Grid from 'material-ui/Grid';
import Demo1 from './demo1';

export default () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Demo1 />
            </Grid>
        </Grid>
    );
}
