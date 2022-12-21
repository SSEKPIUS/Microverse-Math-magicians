import React from 'react';

const result = ({ Result }) => <div className="item1 top">{(Result.next ?? Result.total) ?? '0'}</div>;
export default result;
