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
  const [errorMsg, setErrorMsg] = useState('');
  const [order_no, setOrder_no] = useState('');
  const [name, setName] = useState('');
  const [delivery_date, setDeliveryDate] = useState('');
  const [gst_no, setVendor_gst] = useState('');
  const [delivery_address, setDeliveryAddress] = useState('');
  const [purchaseId, setPurchaseId] = useState(''); 
  const [shipment_prefrence, setShipment_prefrence] = useState('');
  const [purchase_order_date, setPurchaseOrderDate] = useState('');
  const [mobile_number, setMobileNumber] = useState('');
  const [vendor_address, setVendorAddress] = useState('');
  const [delivery_to, setDeliveryTo] = useState('');
  const [place, setPlace] = useState('');
  const [tax_type, setTaxtype] = useState('');
  const [product_name, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [hsn, setHSN] = useState('');
  const [rate, setRate] = useState('');
  const [quantity, setQty] = useState('');
  const [tax_rate, setTaxRate] = useState('');
  const [discount, setDiscount] = useState('');
  const [amount, setAmount] = useState('');
  const [subtotal, setSubTotal] = useState('');
  const [cgst, setCGST] = useState('');
  const [sgst, setSGST] = useState('');
  const [total_amount, setTotalAmount] = useState('');
  const [purchase_note, setPurchaseNote] = useState('');
  
  
  const handleUpdate = async () =>{
    const obj = {
      "purchase_id": purchaseId,
      "order_no": order_no,
      "name": name,
      "delivety_date": delivery_date,
      "delivery_address": delivery_address,
      "shipment_prefrence": shipment_prefrence,
      "purchase_order_date": purchase_order_date,
      "mobile_number": mobile_number,
      "vendor_address": vendor_address,
      "delivery_to": delivery_to,
      "product_name": product_name,
      "description" : description,
      "hsn": hsn,
      "rate": rate,
      "quantity":quantity,
      "tax_rate": tax_rate,
      "discount": discount,
      "amount": amount,
      "subtotal": subtotal,
      "cgst": cgst,
      "sgst": sgst,
      "total_amount": total_amount,
      "purchase_note": purchase_note,
    }
    const getData = await axios.post(`${api}update_prepurchase`, obj).then((response) => {
      console.log();
      return response.data;
    });
    console.log();
     if (getData.status === 'success') {
       setPurchaseId('');
       setAddEnable(false);
       setLoginFaild(false);
       setOrder_no('');
       setName('');
       setDeliveryDate('');
       setDeliveryAddress('');
       setShipment_prefrence('');
       setPurchaseOrderDate('');
       setMobileNumber('');
       setVendorAddress('');
       setDeliveryTo('');
       setProductName('');
       setDescription('');
       setHSN('');
       setRate('');
       setQty('');
       setTaxRate('');
       setDiscount('');
       setAmount('');
       setSubTotal('');
       setCGST('');
       setSGST('');
       setTotalAmount('');
       setPurchaseNote('');
       setErrorMsg('');
      
     } else {
       const msg = getData.message;
       setLoginFaild(true);
       setErrorMsg(msg);
     }
  }

  const cancelForm = () =>{
    setAddEnable(false);
    setLoginFaild(false);
    setPurchaseId('');
    setOrder_no('');
    setName('');
    setDeliveryDate('');
    setDeliveryAddress('');
    setShipment_prefrence('');
    setPurchaseOrderDate('');
    setMobileNumber('');
    setVendorAddress('');
    setDeliveryTo('');
    setProductName('');
    setDescription('');
    setHSN('');
    setRate('');
    setQty('');
    setRate('');
    setDiscount('');
    setAmount('');
    setSubTotal('');
    setCGST('');
    setSGST('');
    setTotalAmount('');
    setPurchaseNote('');
    setErrorMsg('');
  }
  const handleSubmit = async () =>{

      const obj = {
        "user_id": user_id,
        "purchase_order_no": order_no,
        "vendor_gstin": gst_no,
        "vendor_name": name,
        "delivery_date": delivery_date,
        "delivery_address": delivery_address,
        "place_of_supply": place,
        "shipment_preference": shipment_prefrence,
        "purchase_date": purchase_order_date,
        "vendor_mob_no": mobile_number,
        "vendor_address": vendor_address,
        "delivery_to": delivery_to,
        "tax_type" : tax_type,
        "product_name": product_name,
        "description" : description,
        "hsn": hsn,
        "rate":rate,
        "quantity":quantity,
        "tax_rate":tax_rate,
        "discount": discount,
        "amount": amount,
        "subtotal": subtotal,
        "cgst": cgst,
        "sgst": sgst,
        "total_amount": total_amount,
        "purchase_note":purchase_note,
      }
      const getData = await axios.post(`${api}add_prepurchase`, obj).then((response) => {
        console.log();
        return response.data;
      });
      console.log();
       if (getData.status === 'success') {
         setAddEnable(false);
         setLoginFaild(false);
         setOrder_no('');
         setVendor_gst('');
         setName('');
         setDeliveryAddress('');
         setDeliveryDate('');
         setShipment_prefrence('');
         setPurchaseOrderDate('');
         setVendorAddress('');
         setDeliveryTo('');
         setPlace('');
         setDescription('');
         setHSN('');
         setRate('');
         setQty('');
         setTaxRate('');
         setDiscount('');
         setAmount('');
         setSubTotal('');
         setCGST('');
         setSGST('');
         setTotalAmount('');
         setPurchaseNote('');
         setErrorMsg('');
       } else {
         const msg = getData.message;
         setLoginFaild(true);
         setErrorMsg(msg);
       }
  }
  const [ column, setColumn ] = useState(
    [
      { Header: "s.no", accessor: "s_no", width: "10%", align: "left" },
      { Header: "Date", accessor: "purchase_date", align: "left" },
      { Header: "Vendor name", accessor: "vendor_name", align: "center" },
      { Header: "amount", accessor: "amount", align: "center" },
      { Header: "purchase no", accessor: "purchase_no", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ]
  )
  const [ customers, setCustomers ] = useState([]);

  const alertContent = () => (
    <MDTypography variant="body2" color="white">
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        {errorMsg}
      </MDTypography>
    </MDTypography>
  );

  const editUser = async (id) =>{
      setPurchaseId(id);
      const obj = {
        "purchase_id": id
      }
      const getData = await axios.post(`${api}get_purchase_by_id`, obj).then((response) => {
        console.log()
        return response.data;
      });
       if (getData.status === 'success') {
          const getRows = getData.data;
          setAddEnable(true);
          setOrder_no(getRows && getRows.gstin__c?getRows.gstin__c:'');
          setName(getRows && getRows.name__c?getRows.name__c:'');
          setDeliveryDate(getRows && getRows.address__c?getRows.address__c:'');
          setDeliveryAddress(getRows && getRows.phone__c?getRows.phone__c:'');
          setShipment_prefrence(getRows && getRows.license_number__c?getRows.license_number__c:'');
          setPurchaseOrderDate(getRows && getRows.license_title__c?getRows.license_title__c:'');
          setMobileNumber(getRows && getRows.entity_type__c?getRows.entity_type__c:'');
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
          s_no: index+1,
          purchase_date: element.date__c,
          vendor_name: element.vendor_name__c,
          amount: element.total_amount__c,
          purchase_no:element.purchase_order_no__c,
          status: element.status__c,
          action: (
            <MDTypography style={{cursor:'pointer'}} onClick={()=>editUser(element.id)} component="a" color="text">
              <Icon >more_vert</Icon>
            </MDTypography>
          ),
        })
      })
      setCustomers(row);
    }
  }
  
  const getCustomers = async (user) =>{
      const obj = {
        "user_id": user
      }
    try {
      const getData = await axios.post(`${api}prepurchase_list`, obj).then((response) => {
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
      <DashboardNavbar />
      {!isAddEnable?(
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
            <MDBox pt={2} px={2} sx={{ ml: 5 }} display="flex" justifyContent="space-between" alignItems="center">
              <MDButton onClick={()=>setAddEnable(true)} mt={10} variant="gradient" color="dark">
                <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                &nbsp;add Order
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
                Purchase Order List
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: column, rows: customers }}
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
              {purchaseId?"Edit Order":"Create Order"}
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
                  <MDInput type="text" onChange={(e)=>setOrder_no(e.target.value)} label="Purchase order No" value={order_no} fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setVendor_gst(e.target.value)} label="Vendor GSTIN" value={gst_no} fullWidth />
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Vendor Name" onChange={(e)=>setName(e.target.value)} value={name} fullWidth required />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setDeliveryDate(e.target.value)} value={delivery_date} label="Expected Delivery Date" fullWidth />
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Delivery Address" onChange={(e)=>setDeliveryAddress(e.target.value)} value={delivery_address} fullWidth />
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Place of delivery" onChange={(e)=>setPlace(e.target.value)} value={place} fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput
                    size="large"
                    select
                    id="demo-simple-select"
                    label="Tax Type"
                    InputProps={{
                      classes: { root: "select-input-styles" },
                    }}
                    value={tax_type}
                    onChange={(e)=>setTaxtype(e.target.value)}
                    fullWidth
                  >
                    <MenuItem value="Exclusive">Exclusive</MenuItem>
                    <MenuItem value="Inclusive">Inclusive</MenuItem>
                  </MDInput>
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput
                    size="large"
                    select
                    id="demo-simple-select"
                    label="Shipment Prefrence"
                    InputProps={{
                      classes: { root: "select-input-styles" },
                    }}
                    value={shipment_prefrence}
                    onChange={(e)=>setShipment_prefrence(e.target.value)}
                    fullWidth
                  >
                    <MenuItem value="Air">Air</MenuItem>
                    <MenuItem value="Road">Road</MenuItem>
                    <MenuItem value="Ship">Ship</MenuItem>
                  </MDInput>
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setPurchaseOrderDate(e.target.value)} label="Purchase Order Date" value={purchase_order_date} fullWidth />
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Vendor Mobile Number" onChange={(e)=>setMobileNumber(e.target.value)} value={mobile_number} fullWidth required />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setVendorAddress(e.target.value)} value={vendor_address} label="Vendor Address" fullWidth />
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Delivery To" onChange={(e)=>setDeliveryTo(e.target.value)} value={delivery_to} fullWidth />
                </MDBox> 
                <div className="container">
                <table className="responsive-table" style={{marginTop: "30px"}}>
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
                <hr style={{width:"675%",marginTop:"15px",marginRight:"0",marginLeft:"15px"}}/>
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
                    <hr style={{width:"675%",marginTop:"18px",marginRight:"0",marginLeft:"15px"}}/>
                </table>
                <div className="div234">
                    <tr>
                        <td className="totalboxtr">
                            SUBTOTAL
                        </td>
                        <td className="totalnumbertd" >
                        <input type="text" value={subtotal} onChange={(e)=>setSubTotal(e.target.value)} style={{width:"80%",outline: "none",paddingTop:"8px"}}/>
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
                        <td style={{paddingLeft:"182px"}} >
                        <input type="text" value={total_amount} onChange={(e)=>setTotalAmount(e.target.value)} style={{width:"80%",outline: "none",paddingTop:"10px"}}/>
                        </td>
                    </tr>
                </div>
                    <textarea type="text" value={purchase_note} onChange={(e)=>setPurchaseNote(e.target.value)} className="entertextinput" placeholder=" Enter Text" fullWidth />
                </div>                
                <MDBox mt={4} mb={1}  mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDButton onClick={cancelForm} color="white" fullWidth>
                          Cancel
                        </MDButton>
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        {name && purchaseId ?(
                        <MDButton onClick={handleUpdate} variant="gradient" color="info" fullWidth>
                          Update
                        </MDButton>
                        ):name && (
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
