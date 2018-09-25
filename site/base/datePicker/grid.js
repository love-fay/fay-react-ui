import React from 'react';
import Grid from 'material-ui/Grid';
import Demo1 from './demo1';
import Demo2 from './demo2';

export default () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container spacing={Number('16')}>
                    <Grid key='1' item>
                        <Demo1 />
                        <br/><br/>
                    </Grid>
                    <Grid key='2' item>
                        <Demo2 />
                        <br/><br/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
