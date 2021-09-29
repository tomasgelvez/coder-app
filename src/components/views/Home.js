import ItemListContainer from "../ItemListContainer/ItemListContainer"



function Home  () {
    return(
        <>

            <div className="views container pb-4">
                <h1 className="pb-4">Producto online</h1>
                <ItemListContainer/>
            </div>

        </>
    )
}



export default Home