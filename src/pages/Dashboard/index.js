import { useEffect, useState} from 'react'
import './index.css'
import CommentItem from '../../components/CommentItem'
import { FaSortUp,FaSortDown  } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


const Dashboard = () => {

    const [comments , setComments] = useState([])
    const [pageRange, setPageRage ] = useState({page : 1, range : 10, tempRange : 10})
    const [sorting, setSorting ] = useState({field : '', sortStatus : 0})
    const [searchText , setSearchText] = useState('')
 
    const fetchCommetsData = async () => {
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/comments')
            const theData = await res.json()
            
            if(res.ok){
                setComments(theData)
            }
        }catch(e){
            console.log({err : e.message})
        }
    }

    useEffect(()=>{
        fetchCommetsData()
    },[])

    const onUpdatePageRange = e => setPageRage({page : 1,tempRange:parseInt(e.target.value), range : parseInt(e.target.value)})
 
    const onPrevPage = () => {
        if(pageRange.page > 1){
            setPageRage(pre => ({...pre , page : pre.page - 1,tempRange : pre.tempRange - pre.range}))
        }
    }

    const onForwardPage = () => setPageRage(pre => ({...pre, page : pre.page + 1, tempRange : pre.tempRange + pre.range}))

    

    const toggle = (e) => {
        
        if (sorting.field === '' || sorting.field !== e.target.value){
            setSorting({field : e.target.value, sortStatus : 0})
        }else{
            if (sorting.sortStatus === 0){
                setSorting(pre => ({...pre , sortStatus : 1}))
            }
            if (sorting.sortStatus === 1){
                setSorting(pre => ({...pre , sortStatus : 2}))
            }
            if (sorting.sortStatus === 2){
                setSorting({field:'' , sortStatus : 0})
            }
        }
    }

    const stringSort = (arr) =>{
        let newList = []
        let alphabets = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n',
            'o', 'p', 'q', 'r', 's', 't', 'u',
            'v', 'w', 'x', 'y', 'z'
            ]

        if(sorting.sortStatus === 2){
            alphabets.sort().reverse();
        }
        for (let alpha of alphabets){
            for (let each of arr){ 
                if(sorting.field === 'name'){
                    if(alpha === each.name[0].toLowerCase()){
                        newList.push(each)
                    }
                }else{
                    if(alpha === each.email[0].toLowerCase()){
                        newList.push(each)
                    }
                }
                
            }
        }
        return newList
        }

    const numbersSort = (arr) => {
        let n = arr.length;
        let swapped;

        for (let i = 0; i < n - 1; i++) {
            swapped = false;

            for (let j = 0; j < n - i - 1; j++) {
            if(sorting.sortStatus === 1){
                if (arr[j].id > arr[j + 1].id) {
                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
            }
            if(sorting.sortStatus === 2){
                if (arr[j].id < arr[j + 1].id) {
                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
            }
            
            
            }

            // If no two elements were swapped in the inner loop, break
            if (!swapped) break;
        }

        return arr;
    }


    const filter = () =>{
        //search
        
        const searchedList = comments.filter(eachComment => eachComment.name.toLowerCase().includes(searchText) || eachComment.email.toLowerCase().includes(searchText))
        //sort
        let sortedList = searchedList
       
        if (sorting.field === 'name' || 'email'){
            sortedList = stringSort(searchedList)
        }
        if (sorting.field === 'id'){
            sortedList = numbersSort(searchedList)
        }

        return sortedList
        
    }

    const finalCommentsList = filter()

    const onSearch = (e) => setSearchText(e.target.value.toLowerCase())


    const end = pageRange.tempRange
    const start = pageRange.tempRange - pageRange.range
    const tempLastPage = finalCommentsList.length / pageRange.range 
    const lastPage = finalCommentsList.length % pageRange.range === 0 ? tempLastPage : parseInt(tempLastPage)
    

    return(
        <>
            <div className='dashboard'>
                <div className='flex-container space-between'>
                    <div className='flex'>
                        <button className='flex sort-btn' onClick={toggle} value="id">
                        Post ID 
                        <span className='sorting-icons-box'>
                            <FaSortUp className={`${sorting.field === 'id' && sorting.sortStatus === 1 ? "active-icon":"unactive-icon"}`} />
                            <FaSortDown className={`${sorting.field === 'id' && sorting.sortStatus === 2 ? "active-icon":"unactive-icon"}`} />
                        </span>
                    </button>
                    <button  className='flex sort-btn'onClick={toggle} value="name">Name 
                        <span className='sorting-icons-box'>
                            <FaSortUp className={`${sorting.field === 'name' && sorting.sortStatus === 1 ? "active-icon":"unactive-icon"}`} />
                            <FaSortDown className={`${sorting.field === 'name' && sorting.sortStatus === 2 ? "active-icon":"unactive-icon"}`} />
                        </span>
                    </button>
                    <button className='flex sort-btn' onClick={toggle} value="email">Email 
                        <span className='sorting-icons-box'>
                            <FaSortUp className={`${sorting.field === 'email' && sorting.sortStatus === 1 ? "active-icon":"unactive-icon"}`} />
                            <FaSortDown className={`${sorting.field === 'email' && sorting.sortStatus === 2 ? "active-icon":"unactive-icon"}`} />
                        </span>
                    </button>
                    </div>
                    <div className='flex'>
                        <CiSearch className='search-icon' />
                        <input className='input-box' placeholder='search name, email, comment' type="search" onChange={onSearch} />
                    </div>
                    
                </div>
                <ul className='comments-container'>
                    <li className='comment-item table-header'>
                        <p className='id-col'>Post ID</p>
                        <p className='col'>Name</p>
                        <p className='col'>Email</p>
                        <p className='col'>Comment</p>
                    </li>
                    {finalCommentsList.slice(start,end).map(eachComment => <CommentItem comment={eachComment} />)}
                </ul>
                <div className='pagination space-between'>
                    <p>{start + 1}-{end} of {finalCommentsList.length} items</p>
                    <div className='flex'>

                        <button onClick={onPrevPage}>{'<'}</button>
                        <p>{pageRange.page}</p>
                        <button onClick={onForwardPage}>{'>'}</button>

                        <select className='select-element' onChange={onUpdatePageRange}>
                            <option value="10" >10 / Page</option>
                            <option value="50" >50 / Page</option>
                            <option value="100" >100 / Page</option>
                        </select>

                    </div>
                    
                </div>
            </div>
        </>

    )
}

export default Dashboard