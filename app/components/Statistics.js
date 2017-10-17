/**
* Created by ths on 25.6.2017..
*/
var React = require('react');
var PropTypes = require('prop-types');

function Statistics(props) {
    var statistics = ['All', 'Economy', 'Military', 'Research'];

    return (
        <ul className="statistics">
            {statistics.map(stats => {
                return (
                    <li
                        className={stats === props.selStats ? 'highlight' : ''}
                        key={stats}
                        onClick={props.updateStats.bind(null, stats)}
                    >
                        {stats}
                    </li>);
            })}
        </ul>
    )
}

Statistics.propTypes = {
    selStats: PropTypes.string.isRequired,
    updateStats: PropTypes.func.isRequired
}

module.exports = Statistics;