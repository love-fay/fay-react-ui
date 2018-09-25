import React from 'react';
import Grid from 'material-ui/Grid';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';
import Demo5 from './demo5';
import Demo6 from './demo6';
import Demo7 from './demo7';
import Demo8 from './demo8';

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
                        <Demo5 />
                        <br/><br/>
                        <Demo7 />
                    </Grid>
                    <Grid key='2' item>
                        <Demo2 />
                        <br/><br/>
                        <Demo4 />
                        <br/><br/>
                        <Demo6 />
                        <br/><br/>
                        <Demo8 />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
