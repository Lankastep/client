import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount/device.limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }
    return (
        <div className="container">
        <Pagination className={'mt-3 mb-5'}>
            {pages.map(page=>
                <Pagination.Item
                    key={page}
                    active={device.page === page}
                    onClick={()=> device.setPage(page)}
                >
                    {page}
                </Pagination.Item>)
            }
        </Pagination>
        </div>
    );
});

export default Pages;