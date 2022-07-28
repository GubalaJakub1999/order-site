import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/header/Header';
import Footer from './components/views/footer/Footer';
import { fetchTables } from './redux/tableRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllTables } from './redux/tableRedux';
import LoadingSpinner from './components/features/LoadingSpinner/LoadingSpinner';

function App() {
  const tables = useSelector(state => getAllTables(state));
  const dispatch  = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  if(tables.length === 0) {
    return  (
      <Container>
        <Header />
        <LoadingSpinner></LoadingSpinner>
        <Footer />
    </Container>
    )
  };
  return (
    <main>
    <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home tables={tables}/>} />
          {tables.map(table => {
              return <Route key={table.id} path={'/table/' + table.id} element={<Table id={table.id} status={table.status} peopleAmount={table.peopleAmount} maxPeopleAmount={table.maxPeopleAmount} bill={table.bill}/>} />;
            })}
          <Route path="/table/:id" element={<Table id={tables.id} />} />
          <Route path="*" element={<main style={{ padding: "1rem" }}><NotFound text='404 NOT FOUND'/></main>}/>
        </Routes>
        <Footer />
    </Container>
    </main>
  );
}

export default App;
