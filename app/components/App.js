/**
 * Created by ths on 25.6.2017..
 */
var React = require('react');
var Stats = require('./Statistics');
var api = require('../utils/api');


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selStats: 'All',
            repos: null
        }

        this.updateSelStats = this.updateSelStats.bind(this);
    }

    componentDidMount(){
        api.fetchPlayers().then(repos => console.log(repos))
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