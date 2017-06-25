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
        var statistics = ['All', 'Economy', 'Military', 'Research'];

        return (
            <ul className="statistics">
                {statistics.map((stats) => {
                    return (
                        <li
                            className={stats === this.state.selStats ? 'highlight' : ''}
                            key={stats}
                            // onClick={() => this.updateSelStats(stats)}
                            onClick={this.updateSelStats.bind(null, stats)}
                        >
                            {stats}
                        </li>);
                })}
            </ul>
        )
    }
}

module.exports = App;