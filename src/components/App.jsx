/* @flow */

var React = require('react');

var cn = require('classnames');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className={cn('welcome-banner')}>
                Welcome, {this.props.name}
            </div>
        );
    }

}

App.propTypes = {
    name: React.PropTypes.string,
};

App.defaultProps = {
    name: 'User',
};

module.exports = App;
