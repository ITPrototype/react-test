import "./paging.css"

function Paging({currentPage,totalPages,setCurrentPage}){
    let label = currentPage === totalPages ? "Previous" : "Next";
    const changePage = () =>{
        let newPage;

        if(currentPage === totalPages){
            newPage = currentPage - 1;
        }else{
            newPage = currentPage + 1;
        }
        setCurrentPage(newPage);
    };
    return(
        <div>
            <h4>Current page: {currentPage}</h4>
            <h4>Total pages: {totalPages}</h4>
            <button onClick={changePage}>{label}</button>
        </div>
    )
}
export default Paging;