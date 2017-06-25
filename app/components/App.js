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
        console.log('update ', this);
        this.setState(function () {
            return {
                selStats: stats
            }
        });
    }

    render() {
        var statistics = ['All', 'Economy', 'Military', 'Research'];

        console.log('render ', this);

        return (
            <ul className="statistics">
                <p>Selected: {this.state.selStats}</p>
                {statistics.map(function (stats) {
                    console.log('map ', this);
                    return (
                        <li
                            key={stats}
                            onClick={this.updateSelStats.bind(null, stats)}>
                            {stats}
                        </li>);
                }, this)}
            </ul>
        )
    }
}

module.exports = App;