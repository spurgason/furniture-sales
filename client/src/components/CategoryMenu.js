import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../utils/queries";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { useSelector, useDispatch } from 'react-redux';

function CategoryMenu() {
    const state = useSelector((state) => {
        return state
    });

    const dispatch = useDispatch();

    const { categories } = state;
    console.log(categories);
    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
   
    const handleClick = id => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id
        });
    };

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories
            });
            categoryData.categories.forEach(category => {
                idbPromise('categories', 'put', category);
            });
        } else if (!loading) {
            idbPromise('categories', 'get').then(categories => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories
                });
            });
        }
    }, [categoryData, loading, dispatch]);

    return (
        <div>
            <h2 className="mt-3 d-flex justify-content-center">Select Category</h2>
            {categories.map((item) => (
                <button
                    className="btn btn-primary m-2"
                    key={item._id}
                    onClick={() => {
                        handleClick(item._id);
                    }}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}

export default CategoryMenu;