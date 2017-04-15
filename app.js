/**
 * Created by ths_h on 15.4.2017..
 */
var React = require('react');
var ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
    render() {
        return (
            <div>Hello World!</div>
        )
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));