import { TreeSelect } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row, Statistic } from 'antd';
const { Countdown } = Statistic;
const Coutdown2 = (pops) => {
    const { deadline, title, format } = pops;
    return <Countdown title={title} value={deadline} format={format} />;
};
export default Coutdown2;
