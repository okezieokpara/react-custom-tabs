// Thanks to Diego Castillo for the article https://medium.com/trisfera/a-simple-react-tabs-component-47cac2cfbb5 https://gist.github.com/diegocasmo/5cd978e9c5695aefca0c6a8a19fa4c69
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DefaultTabListTemplate} from './defaultTabListTemplate';

class Tablist extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTabIndex: this.props.defaultActiveTabIndex};
    this.handleTabClick = this.handleTabClick.bind(this);
    this.getActiveTab = this.getActiveTab.bind(this);
  }
  handleTabClick(tabIndex) {
    this.setState({
      activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
    });
    if (this.props.onTabChange) {
      this.props.onTabChange(tabIndex, this.state.activeTabIndex);
    }

    const currentActiveTab = this.getActiveTab();
    console.log(currentActiveTab);
    if (currentActiveTab.props.onDeactivate) {
      currentActiveTab.props.onDeactivate(this.state.activeTabIndex, currentActiveTab.props.id);
    }
  }
  getActiveTab() {
    const {children} = this.props;
    const {activeTabIndex} = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex];
    }
  }
  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: this.state.activeTabIndex === index
      });
    });
  }
  renderActiveTabContent() {
    const {children} = this.props;
    const {activeTabIndex} = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  render() {
    if (this.props.template) {
      return React.createElement(this.props.template, {tabListHeaderTemplate: this.renderChildrenWithTabsApiAsProps(), tabListBodyTemplate: this.renderActiveTabContent(), activeTabClass: this.props.activeTabClass});
    }
    return (
      <DefaultTabListTemplate tabListHeaderTemplate={this.renderChildrenWithTabsApiAsProps()} tabListBodyTemplate={this.renderActiveTabContent()} activeTabClass={this.props.activeTabClass}/>);
  }
  static propTypes = {
    defaultActiveTabIndex: PropTypes.number,
    template: PropTypes.node,
    onTabChange: PropTypes.func,
    children: PropTypes.node,
    activeTabClass: PropTypes.string
  }
  static defaultProps = {
    defaultActiveTabIndex: 0
  };
}

export default Tablist;
