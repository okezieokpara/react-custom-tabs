import React, {Component} from 'react';
import PropTypes from 'prop-types';
export class DefaultTabListTemplate extends Component {
  render() {
    return (
      <div className="tabs">
        <ul className="nav nav-tabs">
          {this.props.tabListHeaderTemplate}
        </ul>

        <div className="tab-content">
          <div className={`tab-pane fade show ${this.props.activeTabClass || 'active'}`}>
            {this.props.tabListBodyTemplate}
          </div>
        </div>
      </div>);
  }
    static propTypes = {
      activeTabClass: PropTypes.string,
      tabListHeaderTemplate: PropTypes.node,
      tabListBodyTemplate: PropTypes.node
    }
}
