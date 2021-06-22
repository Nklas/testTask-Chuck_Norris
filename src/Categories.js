import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import logo from './images/chuck_norris.png';
import Text from './Text';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [joke, setJoke] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await axios('https://api.chucknorris.io/jokes/categories');
            setCategories(response.data);

            const initialCategory = response.data[0];
            setSelectedCategory(initialCategory);

            const selectedCategoryResponse = await axios(`https://api.chucknorris.io/jokes/random?category=${initialCategory}`);
            setJoke(selectedCategoryResponse.data.value);
        }

        fetchData();
    },[]);

    const handleSelectCategory = async (category) => {
        setSelectedCategory(category);

        const response = await axios(`https://api.chucknorris.io/jokes/random?category=${category}`);
        setJoke(response.data.value);
    };

    const renderCategories = (categories) => {
        if (!categories.length) {
            return <div>Categories not found</div>
        }

        return (
            <ul style={{
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {categories.map((category, index) => (
                    <li key={index} style={{
                        backgroundColor: category === selectedCategory ? '#422ED4' : '#FFFFFF',
                        color: category === selectedCategory ? '#FFFFFF' : '#1C1C39',
                        margin: 9,
                        width: 170,
                        height: 57,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: "center",
                        fontFamily: 'Raleway',
                        fontWeight: 800,
                        listStyleType:"none",
                        display: "flex"
                    }}
                        onClick={() => handleSelectCategory(category)}
                    >
                        <div>{category}</div>
                    </li>
                ))}
            </ul>
        )
    };

    return (
        <React.Fragment>
            <div className="categories">
                <h1 style={{
                    color: '#1C1C39',
                    fontFamily: 'Raleway',
                    fontWeight: 800,
                    fontSize: 50
                }}>Categories</h1>
                {renderCategories(categories)}
            </div>
            <div style={{
                marginTop: 150,
                zIndex: 1,
                position: 'relative',
                paddingLeft: 160,
                paddingRight: 160
            }}>
                <Text text={joke}/>
                <img src={logo} style={{
                    position: "absolute",
                    right: 160,
                    top: -154,
                    zIndex: -1,
                    boxShadow: '0px 100px 80px rgba(80, 76, 103, 0.07), 0px 0px 10.0172px rgba(80, 76, 103, 0.035)'
                }} alt="Logo" />
            </div>
        </React.Fragment>
    );
}

export default Categories;
