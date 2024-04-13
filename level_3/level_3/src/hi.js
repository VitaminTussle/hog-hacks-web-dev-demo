import React from 'react';

const HiText = ({ show }) => {
	if (show) {
		return <p className='text-green-500'>hi!</p>;
	} else {
		return <></>;
	}
};

export default HiText;