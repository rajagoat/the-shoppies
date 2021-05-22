import { useEffect, useRef } from "react";

const Pages = ({ maxPages, page, setPage, promiseInProgress }) => {
    // console.log(maxPages);
    let pages = [];
    // console.log(page);
    const isFirstRender = useRef(true);
    for (let i = page - 2; i <= page + 2 && i <= maxPages + 2; i++) {
        if (i === -1) {
            pages.push('a');
        } else if (i === 0) {
            pages.push('b');
        } else if (i === maxPages + 1) {
            pages.push('c');
        } else if (i === maxPages + 2) {
            pages.push('d');
        } else {
            pages.push(i);
        }
    }

    useEffect(() => {
        const pages = document.querySelectorAll('.page-number');
        // console.log(pages);
        pages.forEach(pg => {
            if (!isNaN(pg.innerText)) {
                if (Number(pg.innerText) === page) {
                    pg.setAttribute('class', 'main-page');
                } else if (Number(pg.innerText) === page - 1 || Number(pg.innerText) === page + 1) {
                    pg.setAttribute('class', 'secondary-page');
                }
                else if (Number(pg.innerText) === page - 2 || Number(pg.innerText) === page + 2) {
                    pg.setAttribute('class', 'tertiary-page');
                }
            }
        })
    });

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        } else {
            const scroll = document.querySelector('.search input');
            window.scrollTo(0, scroll.offsetTop-20);
        }
    }, [page]);

    const handleClick = (page) => {
        const mainPage = document.querySelector('.main-page');
        mainPage.setAttribute('class', 'page-number');
        const secPages = document.querySelectorAll('.secondary-page');
        secPages.forEach(secPage => {
            secPage.setAttribute('class', 'page-number');
        })
        const terPages = document.querySelectorAll('.tertiary-page');
        terPages.forEach(terPage => {
            terPage.setAttribute('class', 'page-number');
        })
        setPage(page);
        // useEffect();
    };

    return (
        <div>
            {!promiseInProgress && <div className="pages">
                {page !== 1 ? <div className="previous" onClick={() => handleClick(page - 1)}>
                    Previous
            </div> : <div className="previous-hidden">
                    Previous
                </div>}
                {pages.map(pg => (
                    <div
                        className="page-number"
                        key={pg}
                        onClick={() => handleClick(pg)}
                    >
                        {pg}
                    </div>
                ))}
                {page !== maxPages ? <div className="next" onClick={() => handleClick(page + 1)}>
                    Next
            </div> : <div className="next-hidden">
                    Next
            </div>}
            </div>}
        </div>
    );
}

export default Pages;