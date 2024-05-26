import React, { createContext, useContext, useState } from 'react'

const navjson = [
    {
        title: "Home",
        img: "/img/english.jpg",
        link: "/"
    },
    {
        title: "Our Work",
        link: "/our-work"
    },
    {
        title: "Contact us",
        link: "/contact"
    },

]

const mobileMenuJson = [
    {
        title: "Home",
        img: "/img/english.jpg",
        link: "/"
    },
    {
        title: "Our Work",
        link: "/our-work"
    },
    {
        title: "Contact Us",
        link: "/contact"
    },



]
const togglerState = false;

const GlobalContext = createContext();

export function useGlobal() {
    return useContext(GlobalContext);
}



export function GlobalProvider(props) {
    const [horizontalNav, setHorizontalNav] = useState(navjson)
    const [toggler, setToggler] = useState(togglerState)
    const [mobileMenu, setMobileMenu] = useState(mobileMenuJson)

    const value = {
        horizontalNav,
        setHorizontalNav,
        toggler,
        setToggler,
        mobileMenu,
        setMobileMenu
    }

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    )
}
