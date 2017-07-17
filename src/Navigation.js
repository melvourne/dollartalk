import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Tabs, Tab} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Showfinance from './Finance';
import Showinvesting from './Investing';
import Showstocks from './Stocks'

class Navigation extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                    title="Dollar Talk"
                    showMenuIconButton={false}
                    style={{backgroundColor:'#263238',
                            border: '0',
                            boxShadow:'0'}}>
                   </AppBar>
                   <Tabs 
                    style={{border:'0'}}>
                        <Tab 
                        style={{backgroundColor:'#263238',
                        boxShadow:'0'}}
                        label="Finance">
                            <div>
                            <Showfinance/>
                            </div>
                        </Tab>
                        <Tab 
                        style={{backgroundColor:'#263238',
                        boxShadow:'0'}}
                        label="Investing">
                            <div>
                            <Showinvesting/>
                            </div>
                        </Tab>
                        <Tab 
                        style={{backgroundColor:'#263238',
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