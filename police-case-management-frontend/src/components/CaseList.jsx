import React from 'react';

const CaseList = ({ cases }) => {
  return (
    <div>
      <h2>Case List</h2>
      <ul>
        {cases.map((caseItem) => (
          <li key={caseItem.id}>
            {caseItem.caseNumber}: {caseItem.lastName} - {caseItem.comments}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseList;
