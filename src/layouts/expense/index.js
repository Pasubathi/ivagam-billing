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
import "./expense.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";
import MDInput from "components/MDInput";
import { MenuItem } from "@mui/material";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import projectsTableData from "layouts/tables/data/projectsTableData";
import { userID } from "../../auth";

const api = process.env.REACT_APP_API_URI;

function Expense() {
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [ isAddEnable, setAddEnable ] = useState(false);
  const [isLoginFaild, setLoginFaild] = useState(false);
  const [user_id, setUserID] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [entity, setEntity] = useState('');
  const [vendor_name,setName]=useState('');
  const [status,setStatus]=useState('');
  const [vendor_invoice,setVendorinvoice] = useState('');
  const [expense_nature,setExpensenature] = useState('');
  const [hsn,setHsn]=useState('');
  const [amount,setExpenseamount]=useState('');
  const [invoice_date,setInvoicedate]=useState('');
  const [vendor_gst, setVendorgst] = useState('');
  const [total,setTotal] = useState('');
  const [amount_paid,setAmountpaid] = useState('');
  const [expense_id, setExpense_Id] = useState('');
  const [expense, setExpense ] = useState([]);
  const [cess,setCess]=useState('');
  const [igst,setIgst]=useState('');
  const [tax_rate,setTaxrate]=useState('');
  const handleUpdate = async () =>{
    const obj = {
      "expense_id": expense_id,
      "vendor_invoice":vendor_invoice,
      "expense_nature": expense_nature,
      "hsn": hsn,
      "expense_amount": amount,
      "invoice_date": invoice_date,
      "vendor_gst": vendor_gst,
      "vendor_name": vendor_name,
      "tax_rate":tax_rate,
      "cess":cess,
      "igst":igst,
      "total": total,
      "amount_paid":amount_paid
    }
    const getData = await axios.post(`${api}update_expense`, obj).then((response) => {
      console.log();
      return response.data;
    });
    console.log();
     if (getData.status === 'success') {
        setExpense_Id('');
       setAddEnable(false);
       setLoginFaild(false);
       setVendorinvoice('');
       setName('');
       setHsn('');
       setTotal('');
       setInvoicedate('');
       setVendorgst('');
       setExpenseamount('');
       setAmountpaid('');
       setExpensenature(''); 
       setCess('');
       setIgst(''); 
       setErrorMsg('');
       setEntity('');
     } else {
       const msg = getData.message;
       setLoginFaild(true);
       setErrorMsg(msg);
     }
    }
  const cancelForm = () =>{
    setAddEnable(false);
    setLoginFaild(false);
    setVendorinvoice('');
    setName('');
    setHsn('');
    setTotal('');
    setVendorgst('');
    setInvoicedate('');
    setExpenseamount('');
    setAmountpaid('');
    setExpensenature('');
    setCess('');
    setIgst(''); 
    setErrorMsg('');
    setEntity('');
  }
  const handleSubmit = async () =>{

      const obj = {
        "user_id": user_id,
        "vendor_invoice":vendor_invoice,
        "expense_nature": expense_nature,
        "hsn": hsn,
        "expense_amount": amount,
        "invoice_date": invoice_date,
        "vendor_gst": vendor_gst,
        "vendor_name": vendor_name,
        "tax_rate":tax_rate,
        "cess":cess,
        "igst":igst,
        "total": total,
        "amount_paid":amount_paid
      }
      const getData = await axios.post(`${api}add_expense`, obj).then((response) => {
        console.log();
        return response.data;
      });
      console.log();
       if (getData.status === 'success') {
         setAddEnable(false);
         setLoginFaild(false);
         setVendorinvoice('');
        
         setHsn('');
         setVendorgst('');
         setInvoicedate('');
         setExpenseamount('');
         setTotal('');
         setAmountpaid('');
         setExpense('');
         setExpensenature('');
         setName('');
         setCess('');
         setIgst(''); 
         setStatus('');
       } else {
         const msg = getData.message;
         setLoginFaild(true);
         setErrorMsg(msg);
       }
  }
  const [ column, setColumn ] = useState(
    [
      { Header: "Date", accessor: "date", width: "10%", align: "left" },
      { Header: "Expense", accessor: "expense", align: "left" },
      { Header: "Vendor name", accessor: "vendor_name", align: "center" },
      { Header: "Amount", accessor: "amount", align: "center" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ]
  )
  const alertContent = () => (
    <MDTypography variant="body2" color="white">
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        {errorMsg}
      </MDTypography>
    </MDTypography>
  );

  const editUser = async (id) =>{
    setExpense_Id(id);
      const obj = {
        "expense_id": id
      }
      const getData = await axios.post(`${api}get_expense_by_id`, obj).then((response) => {
        console.log()
        return response.data;
      });
       if (getData.status === 'success') {
          const getRows = getData.data;
          setAddEnable(true);
          setVendorinvoice(getRows && getRows.vendor_invoice_no__c?getRows.vendor_invoice_no__c:'');
          setExpensenature(getRows && getRows.nature_of_expense__c?getRows.nature_of_expense__c:'');
          setHsn(getRows && getRows.hsn__c?getRows.hsn__c:'');
          setExpenseamount(getRows && getRows.amount__c?getRows.amount__c:'');
          setInvoicedate(getRows && getRows.date_of_expense__c?getRows.date_of_expense__c:'');
          setVendorgst(getRows &&getRows.vendor_gst__c?getRows.vendor_gst__c:'');
          setName(getRows && getRows.vendor_name__c?getRows.vendor_name__c:'');
          setTaxrate(getRows && getRows.tax_rate__c?getRows.tax_rate__c:'');
          setCess(getRows && getRows.cess__c?getRows.cess__c:'');
          setIgst(getRows && getRows.igst__c?getRows.igst__c:'');
          setTotal(getRows && getRows.total__c?getRows.total__c:'');
          setAmountpaid(getRows && getRows.amount_paid__c?getRows.amount_paid__c:'');

       } else {
         const msg = getData.message;
       }
  }


  const generateRow = async (getData) =>{
    const row = [];
    if(getData && getData.length > 0)
    {
      getData.forEach((element) => {
        row.push({
          date: element.created_date__c,
          expense: element.nature_of_expense__c,
          vendor_name: element.vendor_name__c,
          amount:element.amount__c,
          status:element.status__c,
          action: (
            <MDTypography style={{cursor:'pointer'}} onClick={()=>editUser(element.id)} component="a" color="text">
            <Icon >more_vert</Icon>
          </MDTypography>
          ),
        })
      })
      setExpense(row);
    }
  }
  
  const getCustomers = async (user) =>{
      const obj = {
        "user_id": user
      }
    try {
      const getData = await axios.post(`${api}expenses`, obj).then((response) => {
        console.log()
         return response.data;
       });
        if (getData.status === 'success') {
           const getRows = getData.data;
           generateRow(getRows);
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
      getCustomers(user);
    }else{
      window.location = "/sign-in"
    }
  },[isAddEnable])
  return (
    <DashboardLayout>
      <DashboardNavbar/>
      {!isAddEnable?(
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
            <MDBox pt={2} px={2} sx={{ ml: 5 }} display="flex" justifyContent="space-between" alignItems="center">
              <MDButton onClick={()=>setAddEnable(true)} mt={10} variant="gradient" color="dark">
                <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                &nbsp;add Expense
              </MDButton>
            </MDBox>
          <Grid item xs={12}>
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
                Expense List   
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: column, rows: expense }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      ):(
        <Grid item xs={8} pt={6} pb={3}>
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
              {expense_id?"Edit Expense":"Create Expense"}
            </MDTypography>
          </MDBox>
          <MDBox pt={3}>
              <MDBox component="form" role="form">
                {isLoginFaild && (
                <MDBox mb={2}>
                    <MDAlert color="error" dismissible>
                      {alertContent("error")}
                    </MDAlert>
                </MDBox>
                )}
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" label="Vendor invoice" onChange={(e)=>setVendorinvoice(e.target.value)} value={vendor_invoice} fullWidth />
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Nature of Expense" onChange={(e)=>setExpensenature(e.target.value)} value={expense_nature} fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setHsn(e.target.value)} value={hsn} label="HSN/SAC" fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setExpenseamount(e.target.value)} value={amount} label="Expense Amount" fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="date" onChange={(e)=>setInvoicedate(e.target.value)} value={invoice_date} label="" fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setVendorgst(e.target.value)} value={vendor_gst} label="Vendor GSTIN" fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setName(e.target.value)} value={vendor_name} label="Vendor Name" fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setTotal(e.target.value)} value={total} label="Total" fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setAmountpaid(e.target.value)} value={amount_paid} label="Amount Paid" fullWidth />
                </MDBox>
                 
                <MDBox mt={4} mb={1}  mx={4}>
                <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDButton onClick={cancelForm} color="white" fullWidth>
                          Cancel
                        </MDButton>
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        {vendor_name && expense_id ?(
                        <MDButton onClick={handleUpdate} variant="gradient" color="info" fullWidth>
                          Update
                        </MDButton>
                        ):vendor_name && (
                          <MDButton onClick={handleSubmit} variant="gradient" color="info" fullWidth>
                            Create
                          </MDButton>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
              </MDBox>
            </MDBox>
        </Card>
      </Grid>
      )}
      <Footer />
    </DashboardLayout>
  );
}

export default Expense;
