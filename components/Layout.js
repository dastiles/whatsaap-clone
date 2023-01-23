import Nav from "./Navbar"


function Layout({ children }) {
    return (
        <>
            <Nav />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout