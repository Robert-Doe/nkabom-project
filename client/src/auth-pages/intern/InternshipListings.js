import InternNav from "../../pages/reusables/InternNav";
import ReactPaginate from "react-paginate";
import {useEffect, useState} from "react";
import {postings} from './postings'

function InternshipListings() {
    let [pageNumber,setPageNumber]=useState(1);
    let [pageCount,setPageCount]=useState(10)
    /*let [items,setItems] = useState(Array.from(Array(100+1).keys()).slice(1))*/
    let [currentItems,setCurrentItems]=useState([])

    let lastItemCount= pageNumber*pageCount;
    let indexOfFirstPost= lastItemCount - pageCount;
    /*let currentItems= postings.slice(indexOfFirstPost,lastItemCount)*/

    useEffect(()=>{
        lastItemCount= pageNumber*pageCount;
        indexOfFirstPost= lastItemCount - pageCount;
        setCurrentItems(postings.slice(indexOfFirstPost,lastItemCount))
    },[])

    const pageChange= (pageEvent)=>{
        setPageNumber(pageEvent.selected)
        lastItemCount= pageNumber*pageCount;
        indexOfFirstPost= lastItemCount - pageCount;
        setCurrentItems(postings.slice(indexOfFirstPost,lastItemCount))
        console.log(currentItems)
    }

    return (<section>
        <InternNav/>
        <main className={'container my-5'}>
            {currentItems.map((posting) => {
                return (<article className={'job-posting'} key={posting.id}>
                    <div className="post">
                        <h6 className={'font-weight-bold posting-title'}><a href={`/internships/${posting.id}`}>{posting.title}</a></h6>
                        <p className={'posting-company'}>{posting.company}</p>
                        <p>{posting.brief} </p>
                        <br/>
                    </div>
                    <span className={'posting-readmore'}><a href={`/internships/${posting.id}`}>Read More</a></span>
                </article>)
            })}
        </main>
        <ReactPaginate pageCount={Math.ceil(postings.length/pageCount)}
                       activeClassName={'active-page'}
                       containerClassName={'pagination-buttons'}
                       nextLinkClassName={'next-btn'}
                       previousLinkClassName={'prev-btn'}
                       previousLabel={'<'}
                       nextLabel={'>'}
                       onPageChange={(pageEvent)=>pageChange(pageEvent)}
                    />
    </section>)
}

export default InternshipListings;