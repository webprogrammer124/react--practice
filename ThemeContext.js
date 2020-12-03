import React, { Component, createContext } from 'react'
export const ThemeContext = createContext();
export default class ThemeContextProvider extends Component {
    state = {
        isLight: false,
        light: { text: 'pink', bg: 'Black' },
        dark: { text: 'Black', bg: 'pink' },
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>

        )
    }
}