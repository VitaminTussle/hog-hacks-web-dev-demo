import React from 'react';

interface Props extends React.PropsWithChildren {
	show: boolean
};

const HiText = (props: Props) => {
	const { show } = props;
	return (show
		? <p className='text-green-500'>hi!</p>
		: <></>
	);
};

export default HiText;