import {Component} from "react";
import React from "react";
import PropTypes from "prop-types";
import api from "../utils/api";

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selStats: 'All',
            repos: null
        }

        this.updateSelStats = this.updateSelStats.bind(this);
    }

    componentDidMount() {
        api.fetchPlayers().then(repos => console.log(repos))
    }

    updateSelStats(stats) {
        console.log('new stats: ' + stats);
        this.setState(() => ({
            selStats: stats
        }));
    }

    render() {
        var statistics = ['All', 'Economy', 'Military', 'Research'];
        var {updateStats} = this.props;

        return (
            <ul className="statistics">
                {statistics.map(stats => {
                    return (
                        <li
                            className={stats === this.props.selStats ? 'highlight' : ''}
                            key={stats}
                            //onClick={props.updateStats.bind(null, stats)}
                            onClick={() => updateStats(stats)}
                        >
                            {stats}
                        </li>);
                })}
            </ul>
        )
    }
}

// Statistics.propTypes = {
//     selStats: PropTypes.string.isRequired,
//     updateStats: PropTypes.func.isRequired
// }

export default Statistics;