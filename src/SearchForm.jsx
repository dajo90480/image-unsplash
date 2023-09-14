import { useGlobalContext } from './context'


const SearchForm = () => {

    const { setSearchTerm } = useGlobalContext()


    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if (!searchValue) return
        setSearchTerm(searchValue);
    }

    return (
        <section>
            <h1 className='title'>Feather Head Gallery</h1>
            <form className='search-form' onSubmit={handleSubmit}>

                <input
                    name='search'
                    type="text"
                    className='form-input search-input'
                    placeholder='antimatter'
                />
                <button type='submit' className='btn'>
                    search
                </button>
            </form>
        </section>
    )
}

export default SearchForm