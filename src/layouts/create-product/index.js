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
import "./product.css";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

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

function Products() {
  const [followsMe, setFollowsMe] = useState(true);
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [ isAddEnable, setAddEnable ] = useState(false);
  const [isLoginFaild, setLoginFaild] = useState(false);
  const [product_id, setProductId] = useState('');
  const [user_id, setUserID] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [image, setImage] = useState('');
  const [productname, setProductName] = useState('');
  const [productcategory, setProductCategory] = useState('');
  const [sku, setSKU] = useState('');
  const [barcode, setBarcode] = useState('');
  const [hsn_code, setHSNCode] = useState('');
  const [taxrate, setTaxRate] = useState('');
  const [unitmeasure, setUnitMeasure] = useState(''); 
  const [mrp, setMrp] = useState('');
  const [sales_rate, setSalesRate] = useState('');
  const [sales_description, setSaleDes] = useState('');
  const [purchase_rate, setPurchaseRate] = useState('');
  const [purchase_description, setPurchaseDes] = useState('');

  const handleUpdate = async (event) =>{
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('product_id', product_id);
    formdata.append('image', image);
    formdata.append('name', productname);
    formdata.append('type', followsMe);
    formdata.append('category', productcategory);
    formdata.append('sku', sku);
    formdata.append('barcode', barcode);
    formdata.append('hsn_code', hsn_code);
    formdata.append('tax', taxrate);
    formdata.append('measure_unit', unitmeasure);
    formdata.append('mrp', mrp);
    formdata.append('sku', sku);
    formdata.append('sales_rate', sales_rate);
    formdata.append('sales_description', sales_description);
    formdata.append('purchase_rate', purchase_rate);
    formdata.append('purchase_description', purchase_description);
     
      const getData = await axios.post(`${api}update_product`, formdata).then((response) => {
        console.log();
        return response.data;
      });
      console.log();
       if (getData.status === 'success') {
        window.location = "/create-product"
       } else {
         const msg = getData.message;
         setLoginFaild(true);
         setErrorMsg(msg);
       }
  }

 const handleSubmit = async (event) =>{
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('user_id', user_id);
    formdata.append('image', image);
    formdata.append('name', productname);
    formdata.append('type', followsMe);
    formdata.append('category', productcategory);
    formdata.append('sku', sku);
    formdata.append('barcode', barcode);
    formdata.append('hsn_code', hsn_code);
    formdata.append('tax', taxrate);
    formdata.append('measure_unit', unitmeasure);
    formdata.append('mrp', mrp);
    formdata.append('sku', sku);
    formdata.append('sales_rate', sales_rate);
    formdata.append('sales_description', sales_description);
    formdata.append('purchase_rate', purchase_rate);
    formdata.append('purchase_description', purchase_description);
     
      const getData = await axios.post(`${api}app_product`, formdata).then((response) => {
        console.log();
        return response.data;
      });
      console.log();
       if (getData.status === 'success') {
        window.location = "/create-product"
       } else {
         const msg = getData.message;
         setLoginFaild(true);
         setErrorMsg(msg);
       }
  }
  const [ column, setColumn ] = useState(
    [
      { Header: "s.no", accessor: "s_no", width: "10%", align: "left" },
      { Header: "product name", accessor: "productname", align: "left" },
      { Header: "type", accessor: "type", align: "center" },
      { Header: "SKU", accessor: "SKU", align: "center" },
      { Header: "unit", accessor: "unitmeasure", align: "center" },
      { Header: "HSN", accessor: "HSN", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ]
  )
  const [ products, setProducts ] = useState([]);

  const alertContent = () => (
    <MDTypography variant="body2" color="white">
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        {errorMsg}
      </MDTypography>
    </MDTypography>
  );

  const editUser = async (id) =>{
    setProductId(id);
    const obj = {
      "product_id": id
    }
    const getData = await axios.post(`${api}get_product_by_id`, obj).then((response) => {
      console.log()
      return response.data;
    });
     if (getData.status === 'success') {
        const getRows = getData.data;
        setAddEnable(true);
        setImage(getRows && getRows.image__c?getRows.image__c:'');
        setProductName(getRows && getRows.name__c?getRows.name__c:'');
        setProductCategory(getRows && getRows.category__c?getRows.category__c:'');
        setSKU(getRows && getRows.sku__c?getRows.sku__c:'');
        setBarcode(getRows && getRows.barcode__c?getRows.barcode__c:'');
        setHSNCode(getRows && getRows.hsn_code__c?getRows.hsn_code__c:'');
        setTaxRate(getRows && getRows.tax__c?getRows.tax__c:'');
        setUnitMeasure(getRows && getRows.measure_unit__c?getRows.measure_unit__c:'');
        setMrp(getRows && getRows.mrp__c?getRows.mrp__c:'');
        setSalesRate(getRows && getRows.sales_rate__c?getRows.sales_rate__c:'');
        setSaleDes(getRows && getRows.sales_description__c?getRows.sales_description__c:'');
        setPurchaseRate(getRows && getRows.purchase_rate__c?getRows.purchase_rate__c:'');
        setPurchaseDes(getRows && getRows.purchase_description__c?getRows.purchase_description__c:'');
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
          productname: element.name__c,
          type: element.type__c,
          SKU: element.sku__c,
          unitmeasure: element.mesure_unit__c,
          HSN: element.hsn_code__c,
          action: (
            <>
            <MDTypography style={{cursor:'pointer',fontSize:"15px"}} onClick={()=>editUser(element.id)} component="a" color="text">
              edit
            </MDTypography>
            <MDTypography style={{cursor:'pointer',paddingLeft:"13px",fontSize:"15px"}} component="a" color="text">
            delete
          </MDTypography>
          </>
          ),
        })
      })
      setProducts(row);
    }
  }

  const getProducts = async (user) =>{
    const obj = {
      "user_id": user
    }
  try {
    const getData = await axios.post(`${api}products`, obj).then((response) => {
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
      getProducts(user);
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
                &nbsp;Add Product
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
                Product List
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: column, rows: products }}
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
              {product_id?"Edit Product":"Create Product"}
            </MDTypography>
          </MDBox>
          <MDBox pt={3}>
            <MDBox component="form" role="form" onSubmit={handleSubmit} enctype="multipart/form-data">
            {isLoginFaild && (
                <MDBox mb={2}>
                    <MDAlert color="error" dismissible>
                      {alertContent("error")}
                    </MDAlert>
                </MDBox>
                )}
                <MDBox mt={0.5}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </MDBox>
                <div className="Neon Neon-theme-dragdropbox">
                <input
                  style={{
                    zIndex: 999,
                    opacity: 0,
                    width: 320,
                    height: 200,
                    position: "absolute",
                    right: 0,
                    left: 0,
                    marginRight: "auto",
                    marginLeft: "auto"
                  }}
                  name="fileToUpload"
                  id="fileToUpload"
                  onChange={(e)=>setImage(e.target.value)} value={image}
                  type="file"
                />
                <div className="Neon-input-dragDrop">
                  <div className="Neon-input-inner">
                    <div className="Neon-input-icon">
                      <i className="fa fa-file-image-o" />
                    </div>
                    <div className="Neon-input-text">
                      <h3>image</h3>
                      <span style={{ display: "inline-block", margin: "15px 0" }}>Upload</span>
                    </div>
                  </div>
                </div>
              </div>
               <MDBox mb={2} mx={4}>
                  <MDInput type="text" label="Product Name*" onChange={(e)=>setProductName(e.target.value)} value={productname} fullWidth />
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Product Category" onChange={(e)=>setProductCategory(e.target.value)} value={productcategory} fullWidth required />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setSKU(e.target.value)} value={sku} label="SKU" fullWidth />
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Barcode" onChange={(e)=>setBarcode(e.target.value)} value={barcode} fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setHSNCode(e.target.value)} label="HSN/SAC Code" value={hsn_code} fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setTaxRate(e.target.value)} label="Tax Rate (%)" value={taxrate} fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setMrp(e.target.value)} label="MRP" value={mrp} fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput
                    size="large"
                    select
                    id="demo-simple-select"
                    label="Unit as measure"
                    InputProps={{
                      classes: { root: "select-input-styles" },
                    }}
                    value={unitmeasure}
                    onChange={(e)=>setUnitMeasure(e.target.value)}
                    fullWidth
                  >
                    <MenuItem value="Sole Proprietor">Sole Proprietor</MenuItem>
                    <MenuItem value="Partnership Firm">Partnership Firm</MenuItem>
                    <MenuItem value="LLP">LLP</MenuItem>
                    <MenuItem value="OPC">OPC</MenuItem>
                    <MenuItem value="Private Limited Company">Private Limited Company</MenuItem>
                    <MenuItem value="Public Limited Company">Public Limited Company</MenuItem>
                    <MenuItem value="Society/Trust/NGO">Society/Trust/NGO</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </MDInput>
                </MDBox>
                <MDBox mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Rate/Unit*" value={sales_rate} onChange={(e)=>setSalesRate(e.target.value)} fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Rate/Unit*" value={purchase_rate} onChange={(e)=>setPurchaseRate(e.target.value)} fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Product Description" value={sales_description} onChange={(e)=>setSaleDes(e.target.value)} fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="Product Description" value={purchase_description} onChange={(e)=>setPurchaseDes(e.target.value)} fullWidth />
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
                 
                <MDBox mt={4} mb={1}  mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDButton color="white" onClick={()=>setAddEnable(false)} fullWidth>
                          Cancel
                        </MDButton>
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        {productname && product_id ?(
                        <MDButton onClick={handleUpdate} variant="gradient" color="info" fullWidth>
                        Update
                      </MDButton>
                        ):productname && (
                          <MDButton type="submit" variant="gradient" color="info" fullWidth>
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

export default Products;
