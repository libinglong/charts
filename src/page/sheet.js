import React, {useEffect, useState} from "react";
import { SheetComponent } from '@antv/s2-react';
import '@antv/s2-react/dist/style.min.css';

export default function Sheet() {
// 1. 准备数据
    const data = [
        {
            group: "浙江",
            total: "杭州",
            complete: "笔",
            percent: "1",
            principal: "1",
        },
    ];

// 2. 配置数据
    const s2DataCfg = {
        fields: {
            columns: ["group", "total", "complete", "percent", "principal"], // 要展示的列头字段 id 列表
        },
        meta: [
            // 列头字段对应的元信息，比如展示的中文名
            {
                field: "group",
                name: "团队",
            },
            {
                field: "total",
                name: "总量",
            },
            {
                field: "complete",
                name: "已完成",
            },
            {
                field: "percent",
                name: "百分比",
            },
            {
                field: "principal",
                name: "负责人",
            },
        ],
        data,
    };

// 3. 添加配置
    const s2Options = {

    };

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

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
        return <SheetComponent
            dataCfg={s2DataCfg}
            options={s2Options}
            sheetType={"table"}
            adaptive={true}/>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return <SheetComponent
            dataCfg={s2DataCfg}
            sheetType={"table"}
            adaptive={true}
            options={s2Options}/>;
    }

}
