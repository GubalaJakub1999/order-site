import AllTables from "../AllTables/AllTables";

const Home = ({tables}) => {
  return (
    <main>
      <h1 class="mt-3">All Tables</h1>
      {tables.map(table => <AllTables id={table.id} status={table.status}/>)}
    </main>
  )
}
export default Home;