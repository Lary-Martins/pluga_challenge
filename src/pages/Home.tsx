import MainHomePage from '../components/MainHomePage';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <main>
      <SearchBar />
      <MainHomePage />
      <Pagination />
    </main>
  );
}

export default Home;
