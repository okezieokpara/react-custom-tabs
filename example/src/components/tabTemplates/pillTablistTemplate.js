import React from 'react';
export const PillsTablistTemplate = ({tabListHeaderTemplate, activeTabClass, tabListBodyTemplate}) => (
  <div className="tabs">
    <ul className="nav nav-pills">
      {tabListHeaderTemplate}

    </ul>
    <div className="tab-content">
      <div className={`tab-pane fade show ${activeTabClass || 'active'}`}>
        {tabListBodyTemplate}
      </div>
    </div>
  </div>
);
