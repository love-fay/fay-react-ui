/**
 * Created by feichongzheng on 16/12/7.
 */
import React from 'react';
import {render} from 'react-dom';
import Router from './app/router';
import {name} from '../../config/info';

document.title = name;
render(<Router/>, document.getElementById('app'));
