import React, {useEffect, useState} from 'react';
import {Bar} from '@ant-design/plots';


export default function RqhChart() {

    const config = {
        data: [], isGroup: true, xField: 'value', yField: 'label',

        /** 自定义颜色 */
        // color: ['#1383ab', '#c52125'],
        seriesField: 'type', marginRatio: 0, label: {
            // 可手动配置 label 数据标签位置
            position: 'middle', // 'left', 'middle', 'right'
            // 可配置附加的布局方法
            layout: [// 柱形图数据标签位置自动调整
                {
                    type: 'interval-adjust-position',
                }, // 数据标签防遮挡
                {
                    type: 'interval-hide-overlap',
                }, // 数据标签文颜色自动调整
                {
                    type: 'adjust-color',
                },],
        },
    };

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then((result) => {
                    setIsLoaded(true);
                    setItems(result);
                }, // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    }, [])

    if (error) {
        config.data = [{
            label: 'Mon.', type: 'series1', value: 2800,
        }, {
            label: 'Mon.', type: 'series2', value: 2260,
        }, {
            label: 'Tues.', type: 'series1', value: 1800,
        }, {
            label: 'Tues.', type: 'series2', value: 1300,
        }];
        return <Bar {...config} />;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return <Bar {...config} />;
    }


}
