/**
 * Created by ths on 25.6.2017..
 */
var React = require('react');
var Stats = require('./Statistics');


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selStats: 'All'
        }

        this.updateSelStats = this.updateSelStats.bind(this);
    }

    updateSelStats(stats) {
        console.log('new stats: ' + stats);
        this.setState(() => ({
            selStats: stats
        }));
    }

    render() {
        return (
            <div className="container">
                <Stats
                    selStats={this.state.selStats}
                    updateStats={this.updateSelStats}
                />
            </div>
        )
    }
}

module.exports = App;