import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllStatuses } from '../../../redux/statusesRedux';
import { getTablesById, updateTable } from '../../../redux/tableRedux';
import SelectStatus from '../../features/SelectStatus/SelectStatus';
import SetBill from '../../features/SetBill/SetBill';
import SetPeopleAndMaxPeople from '../../features/SetPeopleAndMaxPeople/SetPeopleAndMaxPeople';


const Table = ({id}) => {
  const navigate = useNavigate();
  const statuses = useSelector(getAllStatuses);
  const table  = useSelector(state => getTablesById(state, id));
  const [bill, setBill] = useState(table.bill);
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [status, setStatus]  = useState(table.status);
  const dispatch = useDispatch();

  const handleUpdate = e => {
    e.preventDefault();
    navigate('/');
    dispatch(updateTable({
      id,
      status,
      bill: parseInt(bill),
      peopleAmount: parseInt(peopleAmount),
      maxPeopleAmount: parseInt(maxPeopleAmount),
    }));
  }
  const clearValues = newStatus => {
    if (newStatus === 'Busy') {
      setBill(parseInt(0));
      document.querySelector("#Bill").classList.remove('invisible');
    } else if (newStatus !== 'Busy') {
      setPeopleAmount(parseInt(0));
      document.querySelector("#Bill").classList.add('invisible');
    }
  };
  const handleStatus = e => {
    setStatus(e.target.value);
    clearValues(e.target.value);
  };
  const minValue = 0;
  const maxValue = 10;
  const handleNumbersPeople = e => {
    const peopleAmount = Math.max(minValue, Math.min(maxValue, Number(e.target.value)));
    setPeopleAmount(peopleAmount);
  }
  const handleNumbersMaxPeople = e => {
    const maxPeopleAmount = Math.max(minValue, Math.min(maxValue, Number(e.target.value)));
    setMaxPeopleAmount(maxPeopleAmount);
    if (maxPeopleAmount > peopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    }
  }
  return (
    <div>
      <h1 class="mt-4">Table {id}</h1>
      <SelectStatus statuses={statuses} status={status} handleStatus={handleStatus}></SelectStatus>
      <SetPeopleAndMaxPeople peopleAmount={peopleAmount} handleNumbersPeople={handleNumbersPeople} maxPeopleAmount={maxPeopleAmount} handleNumbersMaxPeople={handleNumbersMaxPeople} ></SetPeopleAndMaxPeople>
      <SetBill bill={bill} setBill={setBill}></SetBill>
      <Button onClick={handleUpdate}>Update</Button>
    </div>
  );
};

export default Table;