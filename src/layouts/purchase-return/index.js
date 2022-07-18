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
import "./purchase-return.css";

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

function Purchase() {
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [ isAddEnable, setAddEnable ] = useState(false);
  const [isLoginFaild, setLoginFaild] = useState(false);
  const [user_id, setUserID] = useState('');
  const [debit_id, setDebitID] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [purchase_id, setPurchaseId] = useState('');
  const [debit_note_no, setDebitNoteNo] = useState('');
  const [debit_date, setDebitDate] = useState('');
  const [purchase_invoice_no, setPurchaseNo] = useState('');
  const [purchase_date, setPurchaseDate] = useState('');
  const [vendor_gstin, setVendorGstin] = useState('');
  const [place_of_supply, setPlaceOfSupply] = useState('');
  const [vendor_name, setVendorName] = useState('');
  const [vendor_address, setVendorAddress] = useState('');
  const [vendor_mob_no, setVendorMobileNo] = useState('');
  const [sale_preference, setSalePreference] = useState('');
  const [tax_type, setTaxType] = useState('');
  const [subtotal, setSubTotal] = useState('');
  const [cgst, setCGST] = useState('');
  const [sgst, setSGST] = useState('');
  const [total_amount, setTotalAmount] = useState('');
  const [purchase_note, setPurchaseNote] = useState('');
  const [product_name, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [hsn, setHSN] = useState('');
  const [rate, setRate] = useState('');
  const [quantity, setQty] = useState('');
  const [tax_rate, setTaxRate] = useState('');
  const [discount, setDiscount] = useState('');
  const [amount, setAmount] = useState('');
 
  const handleUpdate = async () =>{
    const obj = {
      "user_id": user_id,
      "debit_id": debit_id,
      "debit_note_no": debit_note_no,
      "debit_date": debit_date,
      "purchase_invoice_no": purchase_invoice_no,
      "purchase_date": purchase_date,
      "vendor_gstin": vendor_gstin,
      "place_of_supply": place_of_supply,
      "vendor_name": vendor_name,
      "vendor_address": vendor_address,
	  "vendor_mob_no": vendor_mob_no,
	  "sale_preference": sale_preference,
	  "tax_type": tax_type,
	  "subtotal": subtotal,
      "cgst": cgst,
	  "sgst": sgst,
	  "total_amount": total_amount,
	  "purchase_note": purchase_note,
      "status": 1
    }
    const getData = await axios.post(`${api}update_debit_note`, obj).then((response) => {
      console.log();
      return response.data;
    });
    console.log();
     if (getData.status === 'success') {
       setPurchaseId('');
       setAddEnable(false);
       setLoginFaild(false);
       setErrorMsg('');
     } else {
       const msg = getData.message;
       setLoginFaild(true);
       setErrorMsg(msg);
     }
  }
  const handleSubmit = async () =>{
      const obj = {
        "user_id": user_id,
        "debit_note_no": debit_note_no,
        "debit_date": debit_date,
        "purchase_invoice_no": purchase_invoice_no,
        "purchase_date": purchase_date,
        "vendor_gstin": vendor_gstin,
        "place_of_supply": place_of_supply,
        "vendor_name": vendor_name,
        "vendor_address": vendor_address,
        "vendor_mob_no": vendor_mob_no,
        "sale_preference": sale_preference,
        "tax_type": tax_type,
        "subtotal": subtotal,
        "cgst": cgst,
        "sgst": sgst,
        "total_amount": total_amount,
        "purchase_note": purchase_note,
        "status": 1,
        "products":[ 
            {"product_name": product_name,
            "description": description,
            "hsn": hsn,
            "rate": rate,
            "quantity": quantity,
            "tax_rate": tax_rate,
            "discount": discount,
            "amount": amount} ]
 }
      const getData = await axios.post(`${api}add_debit_note`, obj).then((response) => {
        console.log();
        return response.data;
      });
      console.log();
       if (getData.status === 'success') {
		   setAddEnable(false);
		   setLoginFaild(false);
           setErrorMsg('');
       } else {
         const msg = getData.message;
         setLoginFaild(true);
         setErrorMsg(msg);
       }
  }
  const [ column, setColumn ] = useState(
    [
      { Header: "Date", accessor: "date", width: "10%", align: "left" },
	  { Header: "Purchase no.", accessor: "purchase_no", align: "center" },
      { Header: "Product", accessor: "product", align: "left" },
      { Header: "Vendor name", accessor: "vendor_name", align: "center" },
	  { Header: "Amount", accessor: "amount", align: "center" },
	  { Header: "Status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ]
  )
  const [ purchase, setPurchase ] = useState([]);

  const alertContent = () => (
    <MDTypography variant="body2" color="white">
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        {errorMsg}
      </MDTypography>
    </MDTypography>
  );

  const editUser = async (id) =>{
    setDebitID(id);
      const obj = {
        "debit_id": id
      }
      const getData = await axios.post(`${api}get_debit_by_id`, obj).then((response) => {
        console.log();
        return response.data;
      });
       if (getData.status === 'success') {
          const getRows = getData.data;
          setAddEnable(true);
		      setDebitNoteNo(getRows && getRows.debit_note_no__c?getRows.debit_note_no__c:'');
		      setDebitDate(getRows && getRows.date__c?getRows.date__c:'');
          setPurchaseNo(getRows && getRows.purchase_invoice_no__c?getRows.purchase_invoice_no__c:'');
		      setPurchaseDate(getRows && getRows.purchase_date__c?getRows.purchase_date__c:'');
          setVendorGstin(getRows && getRows.vendor_gstin__c?getRows.vendor_gstin__c:'');
          setPlaceOfSupply(getRows && getRows.place_of_supply__c?getRows.place_of_supply__c:'');
          setVendorName(getRows && getRows.vendor_name__c?getRows.vendor_name__c:'');
          setVendorAddress(getRows && getRows.vendor_address__c?getRows.vendor_address__c:'');
          setVendorMobileNo(getRows && getRows.vendor_mob_no__c?getRows.vendor_mob_no__c:'');
          setSalePreference(getRows && getRows.sale_preference__c?getRows.sale_preference__c:'');
          setTaxType(getRows && getRows.tax_type__c?getRows.tax_type__c:'');
          setSubTotal(getRows && getRows.subtotal__c?getRows.subtotal__c:'');
          setCGST(getRows && getRows.cgst__c?getRows.cgst__c:'');
          setSGST(getRows && getRows.sgst__c?getRows.sgst__c:'');
          setTotalAmount(getRows && getRows.total_amount__c?getRows.total_amount__c:'');
          setPurchaseNote(getRows && getRows.purchase_note__c?getRows.purchase_note__c:'');
          
       } else {
         const msg = getData.message;
       }
  }

  const generateRow = async (getData) =>{
    const row = [];
    if(getData && getData.length > 0)
    {
      getData.forEach((element, index) => {
        row.push({
            date: element.date__c,
            purchase_no: element.purchase_invoice_no__c,
            product: element.product_name__c,
            vendor_name: element.vendor_name__c,
            amount: element.total_amount__c,
            status: element.status__c,
            action: (
            <MDTypography style={{cursor:'pointer'}} onClick={()=>editUser(element.id)} component="a" color="text">
              <Icon >more_vert</Icon>
            </MDTypography>
          ),
        })
      })
      setPurchase(row);
    }
  }
  
  const getPurchase = async (user) =>{
      const obj = {
        "user_id": user
      }
    try {
      const getData = await axios.post(`${api}debit_note_list`, obj).then((response) => {
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
      getPurchase(user);
    }else{
      window.location = "/sign-in"
    }
  },[isAddEnable])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {!isAddEnable?(
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
            <MDBox pt={2} px={2} sx={{ ml: 5 }} display="flex" justifyContent="space-between" alignItems="center">
              <MDButton onClick={()=>setAddEnable(true)} mt={10} variant="gradient" color="dark">
                <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                &nbsp;Add Purchase
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
                Purchase List
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: column, rows: purchase }}
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
              {debit_id?"Edit Purchase":"Create Debit Note"}
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
				<MDBox mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Debit Note No." value={debit_note_no} onChange={(e)=>setDebitNoteNo(e.target.value)} fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="date" label="Date" value={debit_date} onChange={(e)=>setDebitDate(e.target.value)} fullWidth />
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
				<MDBox mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Purchase No." value={purchase_invoice_no} onChange={(e)=>setPurchaseNo(e.target.value)} fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="date" label="Purchase Date" value={purchase_date} onChange={(e)=>setPurchaseDate(e.target.value)} fullWidth />
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
				<MDBox mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Vendor GSTIN" value={vendor_gstin} onChange={(e)=>setVendorGstin(e.target.value)} fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Vendor Mobile Number" value={vendor_mob_no} onChange={(e)=>setVendorMobileNo(e.target.value)} fullWidth />
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
				<MDBox mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Vendor Name" value={vendor_name} onChange={(e)=>setVendorName(e.target.value)} fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Vendor Address" value={vendor_address} onChange={(e)=>setVendorAddress(e.target.value)} fullWidth />
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
				<MDBox mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
						 <MDInput
								size="large"
								select
								id="demo-simple-select"
								label="Select Place of Supply"
								InputProps={{
								  classes: { root: "select-input-styles" },
								}}
								value={place_of_supply}
								onChange={(e)=>setPlaceOfSupply(e.target.value)}
								fullWidth
							  >
								<MenuItem value="Andaman">ANDAMAN AND NICOBAR ISLANDS</MenuItem>
								<MenuItem value="Andhra Pradesh"> ANDHRA PRADESH</MenuItem>
								<MenuItem value="Arunachal Pradesh">ARUNACHAL PRADESH</MenuItem>
								<MenuItem value="Assam">ASSAM</MenuItem>
								<MenuItem value="Bihar">BIHAR</MenuItem>
							</MDInput> 
						</Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Sale Refrence" value={sale_preference} onChange={(e)=>setSalePreference(e.target.value)} fullWidth />
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
				<MDBox mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                       	  <MDInput
							size="large"
							select
							id="demo-simple-select"
							label="Tax Type"
							InputProps={{
							  classes: { root: "select-input-styles" },
							}}
							value={tax_type}
							onChange={(e)=>setTaxType(e.target.value)}
							fullWidth
						  >
						    <MenuItem value="Exclusive">Exclusive</MenuItem>
							<MenuItem value="Inclusive">Inclusive</MenuItem>
						</MDInput>
					  </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
                <div className="container">
                <table className="responsive-table" style={{marginTop: "40px"}}>
                    <thead>
                    <tr>
                        <th className="tablehead" scope="col">Product/Service</th>
                        <th className="tablehead" scope="col">Description</th>
                        <th className="tablehead" scope="col">HSN/SAC</th>
                        <th className="tablehead" scope="col">Rate</th>
                        <th className="tablehead" scope="col">Qty</th>
                        <th className="tablehead" scope="col">Tax</th>
                        <th className="tablehead" scope="col">Discount</th>
                        <th className="tablehead" scope="col">Amount</th>
                    </tr>
                    </thead>
                    <hr style={{width:"650%",marginTop:"15px",marginRight:"0",marginLeft:"35px"}}/>
                    <tbody>
                    <tr>
                        <th className="tablelinetd" style={{fontSize:"17px"}} scope="row">
                        <input type="text" value={product_name} onChange={(e)=>setProductName(e.target.value)} className="tableinputbox" style={{ width:"120px"}}/>
                        </th>
                        <td className="tablelinetd" data-title="Released">
                        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="tableinputbox" style={{width:"140px"}}/>
                        </td>
                        <td className="tablelinetd" data-title="Studio">
                        <input type="text" value={hsn} onChange={(e)=>setHSN(e.target.value)} className="tableinputbox" style={{width:"60px"}}/>
                        </td>
                        <td className="tablelinetd" data-title="Worldwide Gross" data-type="currency">
                        <input type="text" value={rate} onChange={(e)=>setRate(e.target.value)} className="tableinputbox"/>
                        </td>
                        <td data-title="Domestic Gross"  className="tablelinetd" data-type="currency">
                        <input type="text" value={quantity} onChange={(e)=>setQty(e.target.value)} className="tableinputbox"/>
                        </td>
                        <td data-title="International Gross"  className="tablelinetd" data-type="currency">
                        <input type="text" value={tax_rate} onChange={(e)=>setTaxRate(e.target.value)} className="tableinputbox"/>
                        </td>
                        <td data-title="Budget"  className="tablelinetd" data-type="currency">
                        <input type="text" value={discount} onChange={(e)=>setDiscount(e.target.value)} className="tableinputbox"/>
                        </td>
                        <td data-title="Budget"  className="tablelinetd" data-type="currency">
                        <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} className="tableinputbox"/>
                        </td>
                    </tr>
                    </tbody>
                    <hr style={{width:"650%",marginTop:"18px",marginRight:"0",marginLeft:"35px"}}/>
                </table>
                <div className="div234">
                    <tr>
                        <td className="totalboxtr">
                            SUBTOTAL
                        </td>
                        <td className="totalnumbertd" >
                        <input type="text" value={subtotal} onChange={(e)=>setSubTotal(e.target.value)} style={{width:"80%",outline: "none",paddingTop:"10px"}}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="totalboxtr">
                            CGST
                        </td>
                        <td className="totalnumbertd" >
                        <input type="text" value={cgst} onChange={(e)=>setCGST(e.target.value)} style={{width:"80%",outline: "none",paddingTop:"10px"}}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="totalboxtr">
                            SGST
                        </td>
                        <td className="totalnumbertd" >
                        <input type="text" value={sgst} onChange={(e)=>setSGST(e.target.value)} style={{width:"80%",outline: "none",paddingTop:"10px"}}/>
                        </td>
                    </tr>
                    <hr style={{width:"100%"}}/>
                    <tr>
                        <td className="totalboxtr">
                        Total
                        </td>
                        <td style={{paddingLeft: "180px"}} >
                        <input type="text" value={total_amount} onChange={(e)=>setTotalAmount(e.target.value)} style={{width:"80%",outline: "none",paddingTop:"8px"}}/>
                        </td>
                    </tr>
                </div>
                    <textarea type="text" value={purchase_note} onChange={(e)=>setPurchaseNote(e.target.value)} className="entertextinput" placeholder=" Enter Text" fullWidth />
                </div>
                <MDBox mt={4} mb={1}  mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDButton onClick={()=>setAddEnable(false)} color="white" fullWidth>
                          Cancel
                        </MDButton>
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        {vendor_name && debit_id ?(
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
export default Purchase;