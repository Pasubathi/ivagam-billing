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
import Moment from 'moment';
import { useMaterialUIController } from "context";

import { userID } from "../../auth";

const api = process.env.REACT_APP_API_URI;

function PurchaseOrder() {

  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [ isAddEnable, setAddEnable ] = useState(false);
  const [isLoginFaild, setLoginFaild] = useState(false);
  const [isDeleteFaild, setDeleteFaild] = useState(false);
  const [user_id, setUserID] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [order_no, setOrder_no] = useState('');
  const [vendor_name, setName] = useState('');
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

  const [subtotal, setSubTotal] = useState('');
  const [cgst, setCGST] = useState('');
  const [sgst, setSGST] = useState('');
  const [total_amount, setTotalAmount] = useState('');
  const [purchase_note, setPurchaseNote] = useState('');
  const [productList, setProductList] = useState('');
  const navigate = useNavigate();
  const [inputList, setInputList] = useState([{ product_name: "",
                                              description : "",
                                              hsn: "",
                                              rate: "",
                                              quantity: "",
                                              tax_rate: "",
                                              discount: "",
                                              amount: ""}]);                                            
  
  const handleUpdate = async () =>{
    const obj = {
      "user_id": user_id,
      "pre_purchase_id": purchaseId,
      "purchase_order_no": order_no,
      "vendor_gstin": gst_no,
      "vendor_name": vendor_name,
      "delivery_date": delivery_date,
      "delivery_address": delivery_address,
      "place_of_supply": place,
      "shipment_preference": shipment_prefrence,
      "purchase_date": purchase_order_date,
      "vendor_mob_no": mobile_number,
      "vendor_address": vendor_address,
      "delivery_to": delivery_to,
      "tax_type" : tax_type,
      "subtotal": subtotal,
      "cgst": cgst,
      "sgst": sgst,
      "total_amount": total_amount,
      "purchase_note":purchase_note,
      "status": 1,
	   	"products": inputList
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
       setVendor_gst('');
       setDeliveryDate('');
       setDeliveryAddress('');
       setShipment_prefrence('');
       setPurchaseOrderDate('');
       setMobileNumber('');
       setVendorAddress('');
       setPlace('');
       setDeliveryTo('');
       setTaxtype('');
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
    setPlace('');
    setTaxtype('');
    setVendor_gst('');
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
        "vendor_name": vendor_name,
        "delivery_date": delivery_date,
        "delivery_address": delivery_address,
        "place_of_supply": place,
        "shipment_preference": shipment_prefrence,
        "purchase_date": purchase_order_date,
        "vendor_mob_no": mobile_number,
        "vendor_address": vendor_address,
        "delivery_to": delivery_to,
        "tax_type" : tax_type,
        "subtotal": subtotal,
        "cgst": cgst,
        "sgst": sgst,
        "total_amount": total_amount,
        "purchase_note":purchase_note,
        "status": 1,
		    "products": inputList
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
         setPlace('');
         setShipment_prefrence('');
         setPurchaseOrderDate('');
         setVendorAddress('');
         setDeliveryTo('');
         setTaxtype('');
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

  const productCalculation = (index) =>{
	  const list = [...inputList];
	  const data = list[index];
	  const proData = productList.find(x => x.id === data.products);
    const quantity    = 'quantity';
    const amount = "amount";
	  const tax    = "tax_rate";
	  const rate   = "rate";
	  const discount = "discount";
    const qty = data[quantity] && data[quantity] > 0?data[quantity]:0;
    const vat      = data[tax] && data[tax] > 0?data[tax]/100:0;
    const price    = data[rate] && data[rate] > 0?data[rate]:0;
    const discount_price    = data[discount] && data[discount] > 0?data[discount]:0;
    const grandTotal = price*qty;
    const actPrice = grandTotal > discount_price?grandTotal - discount_price:0;
    const total    = actPrice;
    const tax_rate = vat*total;
    setSubTotal(total);
    setCGST(tax_rate);
    setSGST(tax_rate);
    setTotalAmount(total+tax_rate);
    list[index][amount] = total;
  }

  const handleProductDetail = (e, index) =>{
	  const { name, value } = e.target;
	  const product_name = "product_name";
	  const description = "description";
	  const hsn = "hsn";
	  const rate = "rate";
	  const tax_rate = "tax_rate";
	  const data = productList.find(x => x.id === value);
	  const list = [...inputList];
      list[index][product_name] = data.id;
	  list[index][description] = data.sales_description__c;
	  list[index][hsn]  = data.hsn_code__c;
	  list[index][rate] = data.sales_rate__c;
	  list[index][tax_rate]  = data.tax__c;
      setInputList(list);
      productCalculation(index);
  }

  const handleQtyUpdate = (e, index) =>{
	  const { name, value } = e.target;
	  const list = [...inputList];
    list[index][name] = value;
	  setInputList(list);
    productCalculation(index);
  }

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    productCalculation(index);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { product_name: "", description: "", hsn: "", rate: "", quantity: "", tax_rate: "", discount: "", amount: "" }]);
  };

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

  const deleteUser = async (id) =>{
    setPurchaseId(id);
    alert("Are you sure you want to delete this Order?");
    const obj = {
      "purchase_id": id
    }
    const getData = await axios.post(`${api}remove_prepurchase_order`, obj).then((response) => {
      console.log()
      return response.data;
    });
    if (getData.status === 'success') {
      const getRows = getData.data;
      window.location.reload(false);
      navigate('/PurchaseOrder', {replace: true});
    } else {
      const msg = getData.message;
    }
  }
 
   const editUser = async (id) =>{
      setPurchaseId(id);
      const obj = {
        "pre_purchase_id": id
      }
      const getData = await axios.post(`${api}get_prepurchase_by_id`, obj).then((response) => {
        console.log()
        return response.data;  
      });
       if (getData.status === 'success') {
          const getRows = getData.data;
          setAddEnable(true);
          setOrder_no(getRows && getRows.purchase_order_no__c?getRows.purchase_order_no__c:'');
          setVendor_gst(getRows && getRows.vendor_gstin__c?getRows.vendor_gstin__c:'');
          setName(getRows && getRows.vendor_name__c?getRows.vendor_name__c:'');
          setDeliveryDate(getRows && getRows.delivery_date__c?getRows.delivery_date__c:'');
          setDeliveryAddress(getRows && getRows.delivery_address__c?getRows.delivery_address__c:'');
          setPlace(getRows && getRows.place_of_supply__c?getRows.place_of_supply__c:'');
          setTaxtype(getRows && getRows.tax_type__c?getRows.tax_type__c:'');
          setShipment_prefrence(getRows && getRows.shipment_preference__c?getRows.shipment_preference__c:'');
          setPurchaseOrderDate(getRows && getRows.date__c?getRows.date__c:'');
          setMobileNumber(getRows && getRows.vendor_mob_no__c?getRows.vendor_mob_no__c:'');
          setVendorAddress(getRows && getRows.vendor_address__c?getRows.vendor_address__c:'');
          setDeliveryTo(getRows && getRows.delivery_to__c?getRows.delivery_to__c:'');

          setSubTotal(getRows && getRows.subtotal__c?getRows.subtotal__c:'');
          setCGST(getRows && getRows.cgst__c?getRows.cgst__c:'');
          setSGST(getRows && getRows.sgst__c?getRows.sgst__c:'');
          setTotalAmount(getRows && getRows.total_amount__c?getRows.total_amount__c:'');
          setPurchaseNote(getRows && getRows.purchase_note__c?getRows.purchase_note__c:'');
       }
       
        else {
         const msg = getData.message;
       }  
  }

  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const generateRow = async (getData) =>{
    const row = [];
    if(getData && getData.length > 0)
    {
      getData.forEach((element, index) => {
        row.push({
          s_no: index+1,
          purchase_date: Moment(element.date__c).format('DD/MM/yyyy'),
          vendor_name: element.vendor_name__c,
          amount: element.total_amount__c,
          purchase_no:element.purchase_order_no__c,
          status: element.status__c,
          action: (
            <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color="error" onClick={()=>deleteUser(element.id)} component="a" >
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
            <MDButton variant="text" color={darkMode ? "white" : "dark"}  onClick={()=>editUser(element.id)} component="a">
              <Icon>edit</Icon>&nbsp;edit
            </MDButton>
          </MDBox>             
          ),
        })
      })
      setCustomers(row);
    }
  }

  const getProduct = async (user) =>{
    const obj = {
      "user_id": user
    }
  try {
    const getData = await axios.post(`${api}products`, obj).then((response) => {
      console.log();
      return response.data;
    });
      if (getData.status === 'success') {
    const row = [];
        const getRows = getData.data;
        setProductList(getRows);
      } else {
        const msg = getData.message;
      }
      
  } catch (error) {
    console.error(`Error ${error}`);
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
  };

  useEffect(async ()=>{
    const user = await userID();
    if(user)
    {
      setUserID(user);
      getCustomers(user);
      getProduct(user);
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
                  <MDInput type="text" label="Vendor Name" onChange={(e)=>setName(e.target.value)} value={vendor_name} fullWidth required />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="date" onChange={(e)=>setDeliveryDate(e.target.value)} value={delivery_date} label="Expected Delivery Date" fullWidth />
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
                  <MDInput type="date" onChange={(e)=>setPurchaseOrderDate(e.target.value)} label="Purchase Order Date" value={purchase_order_date} fullWidth />
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
                       {inputList.map((x, i) => (
                          <tr>
                              <th className="tablelinetd" style={{fontSize:"17px"}} scope="row">
                              <MDInput
                                size="large"
                                select
                                id="demo-simple-select"
                                className="tableinputbox"
                                style={{ width:"120px"}}
                                InputProps={{
                                  classes: { root: "select-input-styles" },
                                }}
                                 name="product_name"
                                value={x.product_name}
                                onChange={e => handleProductDetail(e, i)}
                                fullWidth
                                >
                                {productList.map((y) => (
                                  <MenuItem value={y.id} key={y.id}>{y.name__c}</MenuItem>
                                ))}
                              </MDInput> 
                              </th>
                              <td className="tablelinetd" style={{paddingLeft:"25px"}} data-title="Released">
                              <MDInput type="text" name="description" value={x.description} onChange={e => handleInputChange(e, i)} className="tableinputbox" style={{width:"140px"}}/>
                              </td>
                              <td className="tablelinetd" style={{paddingLeft:"25px"}} data-title="Studio">
                              <MDInput type="text" name="hsn" value={x.hsn} onChange={e => handleInputChange(e, i)} className="tableinputbox" style={{width:"60px"}}/>
                              </td>
                              <td className="tablelinetd" style={{paddingLeft:"25px"}} data-title="Worldwide Gross" data-type="currency">
                              <MDInput type="text" name="rate" value={x.rate} onChange={e => handleInputChange(e, i)} className="tableinputbox"/>
                              </td>
                              <td data-title="Domestic Gross" style={{paddingLeft:"25px"}} className="tablelinetd" data-type="currency">
                              <MDInput type="text" name="quantity" value={x.quantity} onChange={e => handleQtyUpdate(e, i)} className="tableinputbox"/>
                              </td>
                              <td data-title="International Gross" style={{paddingLeft:"25px"}} className="tablelinetd" data-type="currency">
                              <MDInput type="text" name="tax_rate" value={x.tax_rate} onChange={e => handleInputChange(e, i)} className="tableinputbox"/>
                              </td>
                              <td data-title="Budget" style={{paddingLeft:"25px"}} className="tablelinetd" data-type="currency">
                              <MDInput type="text" name="discount" value={x.discount} onChange={e => handleInputChange(e, i)} className="tableinputbox"/>
                              </td>
                              <td data-title="Budget" style={{paddingLeft:"25px"}} className="tablelinetd" data-type="currency">
                              <MDInput type="text" name="amount" value={x.amount} onChange={e => handleInputChange(e, i)} className="tableinputbox"/>
                              </td>
                                <td>
                                {inputList.length !== 1 && (
                                <MDTypography style={{cursor:'pointer' , paddingLeft:'10px'}} onClick={() => handleRemoveClick(i)} component="a" color="text">
                                <Icon>delete</Icon>
                              </MDTypography>)}
                              </td>
                          </tr>
                          ))}      
                    </tbody>
                    <hr style={{width:"675%",marginTop:"18px",marginRight:"0",marginLeft:"15px" }}/>
                </table>
                <MDBox pt={2} px={2} sx={{ ml: 5 }} display="flex" justifyContent="space-between" alignItems="center">
                  <MDButton onClick={handleAddClick} mt={10} variant="gradient" color="dark">
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;More Product
                  </MDButton>
                </MDBox>
                <div className="totalboxtr">
                      <tr>
                        <td>SUBTOTAL:</td>
                        <td style={{paddingLeft:"40px", paddingTop:"10px"}}><MDInput type="text" value={subtotal} onChange={(e)=>setSubTotal(e.target.value)}/></td>
                      </tr>
                      <tr>
                        <td>CGST :</td>
                        <td style={{paddingLeft:"40px", paddingTop:"10px"}}><MDInput type="text" value={cgst} onChange={(e)=>setCGST(e.target.value)} /></td>
                      </tr>
                      <tr>
                        <td>SGST :</td>
                        <td style={{paddingLeft:"40px", paddingTop:"10px"}}><MDInput type="text" value={sgst} onChange={(e)=>setSGST(e.target.value)} /></td>
                      </tr>
                      <hr style={{width:"100%" , marginTop:"15px"}}/>
                      <tr>
                        <td>Total :</td>
                        <td style={{paddingLeft:"80px", paddingTop:"10px"}}><MDInput type="text" value={total_amount} onChange={(e)=>setTotalAmount(e.target.value)} /></td>
                    </tr>
                </div>
                    <textarea type="text" style={{border:"1px solid lightgray" , Color:"lightgray"}} value={purchase_note} onChange={(e)=>setPurchaseNote(e.target.value)} className="entertextinput" placeholder=" Enter Text" fullWidth />
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
                        {vendor_name && purchaseId ?(
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

export default PurchaseOrder;
