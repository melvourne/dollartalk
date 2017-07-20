import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Tabs, Tab} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Showfinance from './Finance';
import Showinvesting from './Investing';
import Showstocks from './Stocks'
import logo from './logo.png'
import Login from './Login'

class Navigation extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                    title="Dollar Talk"
                    iconElementLeft={<img src={logo} className="App-logo" alt="logo" height="40" width="40"/>}
                    showMenuIconButton={true}
                    iconElementRight={<Login/>}
                    style={{backgroundColor:'#37474F'}}>

                   </AppBar>
                   <Tabs 
                    style={{border:'0'}}>
                        <Tab 
                        style={{backgroundColor:'#F44336'}}
                        label="Finance">
                            <div>
                            <Showfinance/>
                            </div>
                        </Tab>
                        <Tab 
                        style={{backgroundColor:'#F44336',
                        boxShadow:'0'}}
                        label="Investing">
                            <div>
                            <Showinvesting/>
                            </div>
                        </Tab>
                        <Tab 
                        style={{backgroundColor:'#F44336',
                        boxShadow:'0'}}
                        label="Stock Market">
                            <div>
                            <Showstocks/>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Navigation;