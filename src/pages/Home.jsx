import {useEffect, useState} from "react";
import {getAllCategories} from "../api";
import {Preloader} from "../components/Preloader";
import {CategoryList} from "../components/CategoryList";

function Home() {
    const [catalog, setCatalog] = useState([]);
    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
        });
    }, []);
    console.log('setCatalog', setCatalog);
    return (
        <div>
            {!catalog.length ? <Preloader/> : <CategoryList catalog={catalog}/>}
        </div>
    )
}
export {Home};