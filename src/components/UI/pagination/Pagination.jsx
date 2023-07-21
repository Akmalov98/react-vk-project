import React from 'react'
import s from './Pagination.module.css'
import { getPagesArray } from '../../../utils/pages'

const Pagination = ({
    currentPage,
    setCurrentPage,
    totalPages

}) => {

    let pagesArray = getPagesArray(totalPages)
    return (
        <div>
            <div className={s.pageButtonDiv}>
                {pagesArray.map(p =>
                    <span
                        onClick={() => setCurrentPage(p)}
                        key={p}
                        className={currentPage === p ? `${s.page} ${s.page__current}` : `${s.page}`}
                    >
                        {p}
                    </span>
                )}
            </div>
        </div>
    )
}

export default Pagination