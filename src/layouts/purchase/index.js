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

import Moment from 'moment';


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
  const [invoice_no, setInvoiceNo] = useState('');
  const [date, setDate] = useState('');
  const [gst, setGst] = useState('');
  const [delivery_date, setDeliveryDate] = useState('');
  const [vendor_name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [delivery_address, setDeliveryAddress] = useState('');
  const [shipment, setShipment] = useState('');
  const [tax_type, setTaxType] = useState('');
  const [delivery_to, setDeliveryTo] = useState('');
  const [supplyPlace, setSupplyPlace] = useState('');
  const [purchaseId, setPurchaseId] = useState(''); 
   
  const [subtotal, setSubTotal] = useState('');
  const [cgst, setCGST] = useState('');
  const [sgst, setSGST] = useState('');
  const [total_amount, setTotalAmount] = useState('');
  const [shipping_charge, setShippingCharge] = useState('');
  const [amount_paid, setAmountPaid] = useState('');
  const [balance_due, setBalanceDue] = useState('');
  
  const [productList, setProductList] = useState('');
  const [productDetail, setProductDetail] = useState('');
  
  const [purchase_note, setPurchaseNote] = useState('');
  
  const [inputList, setInputList] = useState([{ product: "", description: "", hsn: "", rate: "", qty: "", tax: "", discount: "", amount: "" }]);
  
  const current = new Date();
  const cdate = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

  const handleUpdate = async () =>{
    const obj = {
	  "user_id": user_id,
      "purchase_id": purchaseId,
      "purchase_invoice_no": invoice_no,
      "invoice_date": date,
      "vendor_gstin": gst,
      "delivery_date": delivery_date,
      "vendor_name": vendor_name,
      "vendor_address": address,
      "vendor_mob_no": mobile,
      "delivery_address": delivery_address,
	  "shipment_preference": shipment,
	  "delivery_to": delivery_to,
	  "place_of_supply": supplyPlace,
	  "tax_type": tax_type,
	  "subtotal": subtotal,
	  "cgst": cgst,
	  "sgst": sgst,
	  "shipping_charges": shipping_charge,
	  "amount_paid": amount_paid,
	  "balance_due": balance_due,
	  "total_amount": total_amount,
	  "purchase_note": purchase_note,
	  "status": 1,
	  "products": inputList
    }
    const getData = await axios.post(`${api}update_purchase`, obj).then((response) => {
      console.log();
      return response.data;
    });
    console.log();
     if (getData.status === 'success') {
       setPurchaseId('');
       setAddEnable(false);
       setLoginFaild(false);
       setDate('');
       setGst('');
       setDeliveryDate('');
       setName('');
       setAddress('');
       setMobile('');
	   setDeliveryAddress('');
	   setShipment('');
	   setTaxType('');
	   setDeliveryTo('');
	   setSupplyPlace('');
	   setSubTotal('');
	   setCGST('');
	   setSGST('');
	   setTotalAmount('');
	   setShippingCharge('');
	   setAmountPaid('');
	   setBalanceDue('');
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
        "purchase_invoice_no": invoice_no,
	    "invoice_date": date,
	    "vendor_gstin": gst,
	    "delivery_date": delivery_date,
	    "vendor_name": vendor_name,
	    "vendor_address": address,
	    "vendor_mob_no": mobile,
	    "delivery_address": delivery_address,
	    "shipment_preference": shipment,
		"delivery_to": delivery_to,
	    "place_of_supply": supplyPlace,
	    "tax_type": tax_type,
		"subtotal": subtotal,
		"cgst": cgst,
		"sgst": sgst,
		"shipping_charges": shipping_charge,
		"amount_paid": amount_paid,
		"balance_due": balance_due,
		"total_amount": total_amount,
		"purchase_note": purchase_note,
		"status": 1,
		"products": inputList
      }
      const getData = await axios.post(`${api}add_purchase`, obj).then((response) => {
        console.log();
        return response.data;
      });
      console.log();
       if (getData.status === 'success') {
		   setAddEnable(false);
		   setLoginFaild(false);
		   setDate('');
		   setGst('');
		   setDeliveryDate('');
		   setName('');
		   setAddress('');
		   setMobile('');
		   setDeliveryAddress('');
		   setShipment('');
		   setTaxType('');
		   setDeliveryTo('');
	       setSupplyPlace('');
		   setSubTotal('');
		   setCGST('');
		   setSGST('');
		   setTotalAmount('');
		   setShippingCharge('');
		   setAmountPaid('');
		   setBalanceDue('');
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
	  const proData = productList.find(x => x.id === data.product);
    const qty    = 'qty';
    const amount = "amount";
	  const tax    = "tax";
	  const rate   = "rate";
	  const discount = "discount";
    const quantity = data[qty] && data[qty] > 0?data[qty]:0;
    const vat      = data[tax] && data[tax] > 0?data[tax]/100:0;
    const price    = data[rate] && data[rate] > 0?data[rate]:0;
    const discount_price    = data[discount] && data[discount] > 0?data[discount]:0;
    const grandTotal = price*quantity;
    const actPrice = grandTotal > discount_price?grandTotal - discount_price:0;
    const total    = actPrice;
    const tax_rate = vat*total;
    setSubTotal(total);
    setCGST(tax_rate);
    setSGST(tax_rate);
    setTotalAmount(total+tax_rate);
    setBalanceDue(total+tax_rate)
    list[index][amount] = total;
  }
  
  const handleProductDetail = (e, index) =>{
	  const { name, value } = e.target;
	  const product = "product";
	  const description = "description";
	  const hsn = "hsn";
	  const rate = "rate";
	  const tax = "tax";
	  const data = productList.find(x => x.id === value);
	  const list = [...inputList];
      list[index][product] = data.id;
	  list[index][description] = data.description__c;
	  list[index][hsn]  = data.hsn_code__c;
	  list[index][rate] = data.sales_rate__c;
	  list[index][tax]  = data.tax__c;
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
    setInputList([...inputList, { product: "", description: "", hsn: "", rate: "", qty: "", tax: "", discount: "", amount: "" }]);
  };
  
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
		  setInvoiceNo(getRows && getRows.purchase_invoice_no__c?getRows.purchase_invoice_no__c:'');
		  setDate(getRows && getRows.date__c?getRows.date__c:'');
          setGst(getRows && getRows.vendor_gstin__c?getRows.vendor_gstin__c:'');
		  setDeliveryDate(getRows && getRows.delivery_date__c?getRows.delivery_date__c:'');
          setName(getRows && getRows.vendor_name__c?getRows.vendor_name__c:'');
          setAddress(getRows && getRows.vendor_address__c?getRows.vendor_address__c:'');
          setDeliveryAddress(getRows && getRows.delivery_address__c?getRows.delivery_address__c:'');
          setMobile(getRows && getRows.vendor_mob_no__c?getRows.vendor_mob_no__c:'');
          setShipment(getRows && getRows.shipment_preference__c?getRows.shipment_preference__c:'');
		  setDeliveryTo(getRows && getRows.delivery_to__c?getRows.delivery_to__c:'');
		  setSupplyPlace(getRows && getRows.place_of_supply__c?getRows.place_of_supply__c:'');
		  setTaxType(getRows && getRows.tax_type__c?getRows.tax_type__c:'');
		  
		  setSubTotal(getRows && getRows.subtotal__c?getRows.subtotal__c:'');
		  setCGST(getRows && getRows.cgst__c?getRows.cgst__c:'');
		  setSGST(getRows && getRows.sgst__c?getRows.sgst__c:'');
		  setTotalAmount(getRows && getRows.total_amount__c?getRows.total_amount__c:'');
		  setAmountPaid(getRows && getRows.amount_paid__c?getRows.amount_paid__c:'');
		  setBalanceDue(getRows && getRows.balance_due__c?getRows.balance_due__c:'');
		  setShippingCharge(getRows && getRows.shipping_charges__c?getRows.shipping_charges__c:'');
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
          date: Moment(element.date__c).format('DD MMMM yyyy'),
          purchase_no: element.purchase_invoice_no__c,
          product: element.name__c,
          vendor_name: element.vendor_name__c,
		  amount: element.amount_paid__c,
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
      const getData = await axios.post(`${api}purchase_list`, obj).then((response) => {
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
  useEffect(async ()=>{
    const user = await userID();
    if(user)
    {
      setUserID(user);
      getPurchase(user);
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
              {purchaseId?"Edit Purchase":"Create Purchase"}
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
                        <MDInput type="text" label="Purchase Invoice No" value={invoice_no} onChange={(e)=>setInvoiceNo(e.target.value)} fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="date" label="Date" defaultValue={cdate} onChange={(e)=>setDate(e.target.value)} fullWidth />
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
				<MDBox mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Vendor GSTIN" value={gst} onChange={(e)=>setGst(e.target.value)} fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="date" label="Delivery Date" value={delivery_date} onChange={(e)=>setDeliveryDate(e.target.value)} fullWidth />
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
				<MDBox mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Vendor Name" value={vendor_name} onChange={(e)=>setName(e.target.value)} fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Vendor Address" value={address} onChange={(e)=>setAddress(e.target.value)} fullWidth />
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
				<MDBox mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Vendor Mobile Number" value={mobile} onChange={(e)=>setMobile(e.target.value)} fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Delivery Address" value={delivery_address} onChange={(e)=>setDeliveryAddress(e.target.value)} fullWidth />
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
								label="Place Of Supply"
								InputProps={{
								  classes: { root: "select-input-styles" },
								}}
								value={supplyPlace}
								onChange={(e)=>setSupplyPlace(e.target.value)}
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
                        <MDInput type="text" label="Delivery To" value={delivery_to} onChange={(e)=>setDeliveryTo(e.target.value)} fullWidth />
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
				<MDBox mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
					  <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Shipment Prefrence" value={shipment} onChange={(e)=>setShipment(e.target.value)} fullWidth />
                      </Grid>
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
                    <hr style={{width:"700%",marginTop:"15px",marginRight:"0",marginLeft:"35px"}}/>
                    <tbody>
					{inputList.map((x, i) => (
                    <tr>
                        <th className="tablelinetd" style={{fontSize:"17px",paddingLeft:"40px"}} scope="row">
                       
					   <MDInput
                          size="large"
                          select
                          id="demo-simple-select"
                          className="tableinputbox"
                          style={{ width:"120px"}}
                          InputProps={{
                            classes: { root: "select-input-styles" },
                          }}
						  name="product"
                          value={x.product}
						  onChange={e => handleProductDetail(e, i)}
                          fullWidth
                          >
						  {productList.map((y, j) => (
                          <MenuItem value={y.id} key={y.id} >{y.name__c}</MenuItem>
                           ))}
                        </MDInput>
						
						</th>
						 <td className="tablelinetd" style={{paddingLeft:"40px"}} data-title="Released">
                         <MDInput
						  name="description"
			     		  value={x.description} className="tableinputbox"
						  onChange={e => handleInputChange(e, i)}
						/></td>
                        <td className="tablelinetd" style={{paddingLeft:"40px"}} data-title="Studio">
                        <MDInput
						  name="hsn"
			    		  value={x.hsn} className="tableinputbox"
						  onChange={e => handleInputChange(e, i)}
						/></td>
                        <td className="tablelinetd" style={{paddingLeft:"40px"}} data-title="Worldwide Gross" data-type="currency">
                        <MDInput
						  name="rate"
			    		  value={x.rate} className="tableinputbox"
						  onChange={e => handleInputChange(e, i)}
						/></td>
                        <td data-title="Domestic Gross"  className="tablelinetd" data-type="currency">
                       <MDInput
						  name="qty"
			   			  value={x.qty} className="tableinputbox"
						  onChange={e => handleQtyUpdate(e, i)}
						/></td>
                        <td data-title="International Gross"  className="tablelinetd" data-type="currency">
                        <MDInput
						  name="tax"
			   			  value={x.tax} className="tableinputbox"
						  onChange={e => handleInputChange(e, i)}
						/></td>
                        <td data-title="Budget"  className="tablelinetd" data-type="currency">
                        <MDInput
						  name="discount"
			    		  value={x.discount} className="tableinputbox"
						  onChange={e => handleInputChange(e, i)}
						/></td>
                        <td data-title="Budget"  className="tablelinetd" data-type="currency">
                       <MDInput
						  name="amount"
			    		  value={x.amount} className="tableinputbox"
						  onChange={e => handleInputChange(e, i)} readOnly /></td>
						<td>
						{inputList.length !== 1 && (<button type="button"
							className="mr10"
							onClick={() => handleRemoveClick(i)}>Remove</button>)}
						</td>
                    </tr>
					))} 
                    </tbody>
                    <hr style={{width:"700%",marginTop:"18px",marginRight:"0",marginLeft:"35px"}}/>
                </table>
				<MDButton onClick={handleAddClick} variant="gradient" color="info" >
                          Add Product
                        </MDButton>
				
                <div className="div234">
                    <tr>
                        <td className="totalboxtr">
                            SUBTOTAL
                        </td>
                        <td className="totalnumbertd">
                            <input type="text" value={subtotal} onChange={(e)=>setSubTotal(e.target.value)} style={{width:"80%",outline: "none",paddingTop:"10px"}} readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td className="totalboxtr">
                            CGST
                        </td>
                        <td className="totalnumbertd">
                            <input type="text" value={cgst} onChange={(e)=>setCGST(e.target.value)} style={{width:"80%",outline: "none",paddingTop:"10px"}} readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td className="totalboxtr">
                            SGST
                        </td>
                        <td className="totalnumbertd" >
                            <input type="text" value={sgst} onChange={(e)=>setSGST(e.target.value)} style={{width:"80%",outline: "none",paddingTop:"10px"}} readOnly/>
                        </td>
                    </tr>
					<hr style={{width:"100%"}}/>
					<tr>
                        <td className="totalboxtr">
						Shipping Charges
                        </td>
                        <td  className="totalnumbertd" >
                            <input type="text" value={shipping_charge} onChange={(e)=>setShippingCharge(e.target.value)} style={{width:"80%",outline: "none",paddingTop:"10px"}}/>
                        </td>
                    </tr>
                    <hr style={{width:"100%"}}/>
                    <tr>
                        <td className="totalboxtr">
                        Total Amount
                        </td>
                        <td className="totalnumbertd" >
                            <input type="text" value={total_amount} style={{width:"80%",outline: "none",paddingTop:"10px"}} readOnly/>
                        </td>
                    </tr>
					<hr style={{width:"100%"}}/>
                    <tr>
                        <td className="totalboxtr">
                        Amount Paid
                        </td>
                        <td className="totalnumbertd" >
                            <input type="text" style={{width:"80%",outline: "none",paddingTop:"10px"}} value={amount_paid} onChange={(e)=>setAmountPaid(e.target.value)}/>
                        </td>
                    </tr>
					<hr style={{width:"100%"}}/>
                    <tr>
                        <td className="totalboxtr">
                        Balance Due
                        </td>
                        <td className="totalnumbertd" >
                            <input type="text" value={balance_due} style={{width:"80%",outline: "none",paddingTop:"10px"}}/>
                        </td>
                    </tr>
                </div>
				Purchase Note
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

export default Purchase;
