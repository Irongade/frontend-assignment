import React, {useState, useEffect} from 'react';

// components
import Header from './Header';
import HorizontalLine from './HorizontalLine';
import MovieList from './MovieList';
import Modal from './Modal';

// service
import MovieService from '../service/movieService'

// context
import { GlobalProvider } from '../context/globalContext';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState('');
	const [searchedMovies, setSearchedMovies] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function getMovies() {
			try {
				const response = await MovieService.getRecentMovies();
				if(response.status === 200) {
					setMovies(response.data.results)
					setIsLoading(false)
				}
			} catch(err) {
				if(err.response.status === 401){
					alert('Please attach an access token to this request, by adding the .env parameter in the txt file.')
				}
			}
		}
		getMovies()
	}, [])

	useEffect(() => {
		async function searchMovies() {
			if(!search) {
				setSearchedMovies([]);
				return;
			}
			setIsLoading(true)
			try {
				const response = await MovieService.searchMovies(search);
				setSearchedMovies(response.data.results);
				setIsLoading(false)
			}catch(err) {
				console.log(err)
			}
		}
		searchMovies()
		
	}, [search])

	const filteredMovies = searchedMovies.length < 1 ? movies : searchedMovies;

	return (
		<GlobalProvider>
			<Header setSearch={setSearch} />
			<HorizontalLine />
			<MovieList movies={filteredMovies} isLoading={isLoading} />
			<Modal />
		</GlobalProvider>
	)
}

export default App;
