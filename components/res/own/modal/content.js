import React from 'react';
import Scroll from '../customScroll';

export default class Content extends React.Component {

    constructor(props) {
        super(props);
        this.modalContentRef = React.createRef();
        this.state = {
            scrollWidth: 0
        }
    }

    componentDidMount(){
        const {offsetWidth, offsetHeight} = this.modalContentRef.current;
        this.setState({
            scrollWidth: offsetWidth+17
        })
    }

    render() {
        const {maxHeight, minHeight, maxWidth, minWidth, height, children} = this.props;
        return (
            <div ref={this.modalContentRef} style={{width: '100%', height: '100%'}}>
                <Scroll maxHeight={maxHeight}
                        minHeight={minHeight}
                        maxWidth={maxWidth}
                        minWidth={minWidth}
                        width='100%'
                        height={height}>
                    {children}
                </Scroll>
            </div>
        )
    }
}