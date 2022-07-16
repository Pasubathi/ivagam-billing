/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./customer.css";
import {useNavigate} from 'react-router-dom';

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";
import MDInput from "components/MDInput";
import { MenuItem } from "@mui/material";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import projectsTableData from "layouts/tables/data/projectsTableData";

import { userID } from "../../auth";

const api = process.env.REACT_APP_API_URI;

  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [ isAddEnable, setAddEnable ] = useState(false);
  const [isLoginFaild, setLoginFaild] = useState(false);
  const [isDeleteFaild, setDeleteFaild] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [user_id, setUserID] = useState('');
  const [payment_type, setPayment_type] = useState('');
  const [payment_date, setDate] = useState('');
  const [name, setName] = useState('');
  const [mobile_no, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [payment_mode, setPayment_mode] = useState('');
  const navigate = useNavigate();

  function payout() {

  const cancelForm = () =>{
    
    setAddEnable(false);
    setLoginFaild(false);
    setPayment_type('');
    setDate('');
    setName('');
    setMobile('');
    setEmail('');
    setAmount('');
    setPayment_mode('');
    setNote('');
    setErrorMsg('');
    navigate('/dashboard', {replace: true});
  };

  const handleSubmit = async () =>{

      const obj = {
        "user_id": user_id,
        "payment_type":payment_type,
        "payment_date": payment_date,
        "name": name,
        "mobile_no": mobile_no,
        "email": email,
        "amount":amount,
        "payment_mode": payment_mode,
        "note":note,
      }
      const getData = await axios.post(`${api}payment_out`, obj).then((response) => {
        console.log();
        return response.data;
      });
      console.log();
       if (getData.status === 'success') {
        setAddEnable(false);
        setLoginFaild(false);
        setPayment_type('');
        setDate('');
        setName('');
        setMobile('');
        setEmail('');
        setAmount('');
        setPayment_mode('');
        setNote('');
       } else {
         const msg = getData.message;
         setLoginFaild(true);
         setErrorMsg(msg);
       }
  }
  
  const alertContent = () => (
    <MDTypography variant="body2" color="white">
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        {errorMsg}
      </MDTypography>
    </MDTypography>
  );

  const getProfile = async (user) =>{
      const obj = {
        "user_id": user
      }
    try {
      const getData = await axios.post(`${api}profiles`, obj).then((response) => {
        console.log()
         return response.data;
       });
        if (getData.status === 'success') {
           const getRows = getData.data;
        } else {
          const msg = getData.message;
        }
        
    } catch (error) {
      console.error(`Error ${error}`);
    }
  }
  useEffect(async ()=>{
    const user = await userID();
    if(user)
    {
      setUserID(user);
      getProfile(user);
    }else{
      window.location = "/sign-in"
    }
  },[isAddEnable])

    return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid item xs={12} pt={6} pb={3}>
      <Card>
        <MDBox
          mx={2}
          mt={-3}
          py={3}
          px={2}
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
        >
          <MDTypography variant="h6" color="white">
            Receipt
          </MDTypography>
        </MDBox>
        <MDBox pt={3}>
            <MDBox component="form" role="form">
              {isDeleteFaild && (
              <MDBox mb={2}>
                  <MDAlert color="success" dismissible>
                    {alertContent("success")}
                  </MDAlert>
              </MDBox>
              )}
             <span style={{marginLeft:"30px" , fontSize:"15px"}}>Payment type </span>
             <MDBox mb={2} mx={6}  style={{fontSize:"17px", fontFamily:"Arial"}}>
                <input type="radio" name="payment_type" onChange={(e)=>setPayment_type(e.target.value)} value="paid" fullWidth required
                  /> Paid  
                <input type="radio" name="payment_type" onChange={(e)=>setPayment_type(e.target.value)} value="resived" fullWidth required
                 style={{marginLeft:"30px"}}/> Resived 
              </MDBox> 
              <MDBox mb={2} mx={4}>
                <MDInput type="date"  onChange={(e)=>setDate(e.target.value)}  value={payment_date} fullWidth />
              </MDBox>
              <MDBox mb={2}  mx={4}>
                <MDInput type="text"  label="Name" onChange={(e)=>setName(e.target.value)} value={name} fullWidth required
                 />
              </MDBox>
              <MDBox mb={2}  mx={4}>
                <MDInput type="text" label="Mobile" onChange={(e)=>setMobile(e.target.value)} value={mobile_no} fullWidth />
              </MDBox>
              <MDBox mb={2} mx={4}>
                <MDInput type="text" onChange={(e)=>setEmail(e.target.value)} label="Email Address" value={email} fullWidth />
              </MDBox>
              <MDBox mb={2}  mx={4}>
                <MDInput type="text" label="Amount" onChange={(e)=>setAmount(e.target.value)} value={amount} fullWidth />
              </MDBox>
              <MDBox mb={2} mx={4}>
                <MDInput
                  size="large"
                  select
                  id="demo-simple-select"
                  label="Payment Mode"
                  InputProps={{
                    classes: { root: "select-input-styles" },
                  }}
                  value={payment_mode}
                  onChange={(e)=>setPayment_mode(e.target.value)}
                  fullWidth
                >
                   <MenuItem value="Cheque">Cheque</MenuItem>
                    <MenuItem value="Cash">Cash</MenuItem>
                    <MenuItem value="WirePayment">Wire Payment</MenuItem>
                    <MenuItem value="Instamojo">Instamojo</MenuItem>
                    <MenuItem value="NetBanking">Net Banking</MenuItem>
                    <MenuItem value="Banking">Banking</MenuItem>
                    <MenuItem value="UPI">UPI</MenuItem>
                </MDInput>
              </MDBox>
              <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Note, if any" placeholder="Optional" onChange={(e)=>setNote(e.target.value)} value={note} fullWidth />
                </MDBox>
              <MDBox mt={4} mb={1}  mx={4}>
                <Grid item xs={12} pb={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6} xl={6}>
                     <MDButton  onClick={cancelForm} color="white" fullWidth>
                        Cancel
                      </MDButton>
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                      
                      <MDButton onClick={handleSubmit} variant="gradient" color="info" fullWidth>
                        Record
                      </MDButton>
                      
                    </Grid>
                  </Grid>
                </Grid>
              </MDBox>
            </MDBox>
          </MDBox>
      </Card>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default payout;
