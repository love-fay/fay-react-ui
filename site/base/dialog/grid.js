import React from 'react';
import Grid from 'material-ui/Grid';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';

export default () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container spacing={Number('16')}>
                    <Grid key='1' item>
                        <Demo1 />
                        <br/><br/>
                        <Demo3 />
                        <br/><br/>
                    </Grid>
                    <Grid key='2' item>
                        <Demo2 />
                        <br/><br/>
                        <Demo4 />
                        <br/><br/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
