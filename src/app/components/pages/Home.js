import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
 
const Home = () => (
    <MuiThemeProvider>
        <RaisedButton label="Default" />
    </MuiThemeProvider>
);
 
export default Home;