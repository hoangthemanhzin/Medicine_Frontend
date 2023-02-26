import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';

const ariaLabel = { 'aria-label': 'description' };
export default function Medicine() {
    //useState set name and medicine:
    // eslint-disable-next-line no-undef
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [amount, setAmount] = useState('');
    //Bien de xoa Medicine:
    const [id_Delete, setId_Delete] = useState('');
    const [name_Delete, setName_Delete] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        const medicine = {name, price, amount};
        console.log("medicine : ", medicine);
        fetch("http://localhost:8080/medicine/add",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(medicine)
        }).then(() => {
            console.log("new medicine added");
            alert("add Medicine thanh cong");
        })
    }
    //Su kien xoa thong tin thuoc :
    const handleClick_Delete = (e) => {
      e.preventDefault();
      const medicine_delete = {id_Delete, name_Delete};
      console.log("medicine : ", medicine_delete);
      fetch("http://localhost:8080/medicine/delete",{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(medicine_delete)
      }).then(() => {
          console.log("medicine deleted");
          alert("Xoa thong tin Medicine thanh cong");
      })
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
       <form>
       <h1>Add Information: </h1>
       <Input placeholder="Name : " inputProps={ariaLabel} 
           value = {name}
           onChange = {(e) => setName(e.target.value)}
       />
       <br></br>
       <br></br>
       <Input placeholder="Price : " inputProps={ariaLabel} 
            value = {price}
            onChange = {(e) => setPrice(e.target.value)}
       />
       <br></br>
       <br></br>
       <Input placeholder="Amount : " inputProps={ariaLabel} 
            value = {amount}
            onChange = {(e) => setAmount(e.target.value)}
       />
       <br></br>
       <br></br>
       <Button variant="outlined" onClick={handleClick}>Submit</Button>
       </form>

       <form>
       <h1>Delete Medicine: </h1>
       <Input placeholder="Id : " inputProps={ariaLabel} 
           value = {id_Delete}
           onChange = {(e) => setId_Delete(e.target.value)}
       />
       <br></br>
       <br></br>
       <Input placeholder="Name : " inputProps={ariaLabel} 
           value = {name_Delete}
           onChange = {(e) => setName_Delete(e.target.value)}
       />
       <br></br>
       <br></br>
       <Button variant="outlined" onClick={handleClick_Delete}>Submit</Button>
       </form>
      
    </Box>
    //=================================
  );
}
