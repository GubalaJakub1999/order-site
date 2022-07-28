import { Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllTables = ({id, status}) => {
  return  (
    <div class="border-bottom">
      <Stack direction="horizontal" gap={1} >
      <h2 class="my-4">Table {id}</h2>
      <h5 class="fw-bolder my-4 ms-4">Status: </h5><h5 class="fw-normal my-4">{status}</h5>
      <Link to={'/table/' + id} className="ms-auto">
        <Button >Show more</Button>
      </Link>
    </Stack>
    </div>
  )
};

export default AllTables;