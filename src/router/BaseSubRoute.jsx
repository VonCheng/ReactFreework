import React, {Component} from 'react';
// @BaseSubRouteConnent(()=>{()});
/*class componentName extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}*/

export const BaseSubRouteConnent = (Component, childrenName) => {return class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            children,
            ...props
        } = this.props;
        return (
            <div>
                <Component {...props} /> 
                <div className={childrenName}>{children}</div>
            </div>
        );
    }
}}
