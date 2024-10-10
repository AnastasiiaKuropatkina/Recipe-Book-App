import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const navigate = useNavigate(); // Replacing useHistory with useNavigate

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );

        // Updating URL with search params using navigate
        navigate({
            pathname,
            search: `?search=${str}`,
        });
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split("=")[1].toLowerCase())
                      )
                    : data.categories
            );
        });
    }, [search]);

    return (
        <>
            <Search cb={handleSearch} />
            <div>
                {!catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
            </div>
        </>
    );
}

export { Home };
