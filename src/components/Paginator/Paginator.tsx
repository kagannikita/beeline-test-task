import classNames from 'classnames'
import React from "react";
import styles from './paginator.module.scss'
interface IPaginator {
    currentPage: number
    pages: number
    handlePagination: (page: number) => void
}
const Paginator: React.FC<IPaginator> = ({ currentPage, pages, handlePagination }) => {
    return (
        <div className={styles.pagination}>
            <div className={styles.paginationWrapper}>
                {currentPage !== 1 && (
                    <button onClick={() => handlePagination(currentPage - 1)} type="button"
                            className={classNames([styles.pageItem, styles.sides].join(' '))}>
                        &lt;
                    </button>
                )}
                <button
                    onClick={() => handlePagination(1)}
                    type="button"
                    className={classNames(styles.pageItem, {
                        [styles.active]: currentPage === 1,
                    })}
                >
                    {1}
                </button>
                {currentPage > 3 && <div className={styles.separator}>...</div>}
                {currentPage === pages && pages > 3 && (
                    <button onClick={() => handlePagination(currentPage - 2)} type="button" className={styles.pageItem}>
                        {currentPage - 2}
                    </button>
                )}
                {currentPage > 2 && (
                    <button onClick={() => handlePagination(currentPage - 1)} type="button" className={styles.pageItem}>
                        {currentPage - 1}
                    </button>
                )}
                {currentPage !== 1 && currentPage !== pages && (
                    <button onClick={() => handlePagination(currentPage)} type="button"
                            className={[styles.pageItem, styles.active].join(' ')}>
                        {currentPage}
                    </button>
                )}
                {currentPage < pages - 1 && (
                    <button onClick={() => handlePagination(currentPage + 1)} type="button" className={styles.pageItem}>
                        {currentPage + 1}
                    </button>
                )}
                {currentPage === 1 && pages > 3 && (
                    <button onClick={() => handlePagination(currentPage + 2)} type="button" className={styles.pageItem}>
                        {currentPage + 2}
                    </button>
                )}
                {currentPage < pages - 2 && <div className={styles.separator}>...</div>}
                <button
                    onClick={() => handlePagination(pages)}
                    type="button"
                    className={classNames(styles.pageItem, {
                        [styles.active]: currentPage === pages,
                    })}
                >
                    {pages}
                </button>
                {currentPage !== pages && (
                    <button onClick={() => handlePagination(currentPage + 1)} type="button"
                            className={[styles.pageItem, styles.sides].join(' ')}>
                        &gt;
                    </button>
                )}
            </div>
        </div>
    )
}
export default Paginator
