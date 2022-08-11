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
import "./profile.css";
import {useNavigate} from 'react-router-dom';

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
import ImageUploading from "react-images-uploading";
// Data
import projectsTableData from "layouts/tables/data/projectsTableData";

import { useMaterialUIController } from "context";


import { userID } from "../../auth";

const api = process.env.REACT_APP_API_URI;

function profile1() {
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [ isAddEnable, setAddEnable ] = useState(false);
  const [isLoginFaild, setLoginFaild] = useState(false);
  const [isDeleteFaild, setDeleteFaild] = useState(false);
  const [user_id, setUserID] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [gst, setGst] = useState('');

  const [company_name, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [entity, setEntity] = useState('');
  const [nature_business, setNature_business] = useState('');
  const [cin_no, setCin] = useState('');
  const [pan_no, setPAN] = useState('');
  const [website, setWebsite] = useState('');
  const [profileId, setProfileId] = useState(''); 
  const [license_no, setLicenseNO] = useState('');
  const [license_title, setLicenseTitle] = useState('');
  const [gst_composite, setFollowsMe] = useState(true);
  const navigate = useNavigate();
  const [images, setImages] = useState('');
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
  }
  const handleUpdate = async (event) =>{
   event.preventDefault();
    const formData = new FormData();
    formData.append('profile_id', profileId);
    formData.append('user_id', user_id);
    formData.append('image', images[0].file);
    formData.append('gst_no', gst);
    formData.append('company_name', company_name);
    formData.append('email', email);
    formData.append('pincode', pincode);
    formData.append('gst_composite', gst_composite);
    formData.append('address', address);
    formData.append('mobile', mobile);
    formData.append('entity_type', entity);
    formData.append('nature_business', nature_business);
    formData.append('cin_no', cin_no);
    formData.append('pan_no', pan_no);
    formData.append('website', website);
    formData.append('licence_title', license_title);
    formData.append('licence_number', license_no);
    const getData = await axios.post(`${api}update_profile`, formData).then((response) => {
      console.log();
      return response.data;
    });
    console.log();
     if (getData.status === 'success') {
       setProfileId('');
       setAddEnable(false);
       setLoginFaild(false);
       setGst('');
       setCompanyName('');
       setEmail('');
       setPincode('');
       setFollowsMe('');
       setCin('');
       setNature_business('');
       setPAN('');
       setWebsite('');
       setMobile('');
       setLicenseNO('');
       setLicenseTitle('');
       setAddress('');
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
    setProfileId('');
    setGst('');
    setImages('');
    setCompanyName('');
    setEmail('');
    setPincode('');
    setFollowsMe('');
    setCin('');
    setNature_business('');
    setPAN('');
    setWebsite('');
    setMobile('');
    setLicenseNO('');
    setLicenseTitle('');
    setAddress('');
    setErrorMsg('');
    setEntity('');
  }
  const handleSubmit = async (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('image', images[0].file);
    formData.append('gst_no', gst);
    formData.append('company_name', company_name);
    formData.append('email', email);
    formData.append('pincode', pincode);
    formData.append('gst_composite', gst_composite);
    formData.append('address', address);
    formData.append('mobile', mobile);
    formData.append('entity_type', entity);
    formData.append('nature_business', nature_business);
    formData.append('cin_no', cin_no);
    formData.append('pan_no', pan_no);
    formData.append('website', website);
    formData.append('licence_title', license_title);
    formData.append('licence_number', license_no);

      const getData = await axios.post(`${api}add_profile`, formData).then((response) => {
        console.log();
        return response.data;
      });
      console.log();

       if (getData.status === 'success') {
         setAddEnable(false);
         setLoginFaild(false);
         setGst('');
         setCompanyName('');
         setMobile('');
         setEmail('');
         setFollowsMe('');
         setPincode('');
         setCin('');
         setNature_business('');
         setPAN('');
         setWebsite('');
         setLicenseNO('');
         setLicenseTitle('');
         setAddress('');
         setErrorMsg('');
         setEntity('');
       } else {
         const msg = getData.message;
         setLoginFaild(true);
         setErrorMsg(msg);
       }
  }
  const [ column, setColumn ] = useState(
    [
      { Header: "s.no", accessor: "s_no", width: "10%", align: "left" },
      { Header: "profile", accessor: "profile", align: "left" },
      { Header: "gstin", accessor: "gstin", align: "left" },
      { Header: "company name", accessor: "company_name", align: "center" },
      { Header: "address", accessor: "address", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ]
  )

  const [ profile, setProfile ] = useState([]);
  
  const alertContent = () => (
    <MDTypography variant="body2" color="white">
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        {errorMsg}
      </MDTypography>
    </MDTypography>
  );

  const deleteUser = async (id) =>{
    setProfileId(id);
    alert("Are you sure you want to delete this item?");
    const obj = {
      "profile_id": id
    }
    const getData = await axios.post(`${api}remove_profile`, obj).then((response) => {
      console.log()
      return response.data;
    });
    if (getData.status === 'success') {
      const getRows = getData.data;
      window.location.reload(false);
      navigate('/profile1', {replace: true});
    } else {
      const msg = getData.message;
    }
  }
  
  const editUser = async (id) =>{
      setProfileId(id);
      const obj = {
        "profile_id": id
      }
      const getData = await axios.post(`${api}get_profile_by_id`, obj).then((response) => {
        console.log()
        return response.data;
      });
       if (getData.status === 'success') {
          const getRows = getData.data;
          setAddEnable(true);
          setImages(getRows && getRows.image_url__c?getRows.image_url__c:'');
          setGst(getRows && getRows.gstin_c?getRows.gstin_c:'');
          setCompanyName(getRows && getRows.compant_name__c?getRows.compant_name__c:'');
          setPincode(getRows && getRows.pincode__c?getRows.pincode__c:'');
          setFollowsMe(getRows && getRows.gst_composite__c?getRows.gst_composite__c:'');
          setLicenseNO(getRows && getRows.license_number__c?getRows.license_number__c:'');
          setLicenseTitle(getRows && getRows.license_title__c?getRows.license_title__c:'');
          setAddress(getRows && getRows.address__c?getRows.address__c:'');
          setEmail(getRows && getRows.email__c?getRows.email__c:'');
          setMobile(getRows && getRows.phone__c?getRows.phone__c:'');
          setEntity(getRows && getRows.entity_type__c?getRows.entity_type__c:'');
          setNature_business(getRows && getRows.business_nature__c?getRows.business_nature__c:'');
          setCin(getRows && getRows.cin__c?getRows.cin__c:'');
          setPAN(getRows && getRows.pan__c?getRows.pan__c:'');
          setWebsite(getRows && getRows.website__c?getRows.website__c:'');
       } else {
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
          profile: element.image_url__c,
          gstin: element.gstin_c,
          company_name: element.compant_name__c,
          address: element.address__c,
          action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
             <MDBox mr={1}>
              <MDButton variant="text" color="error" onClick={()=>deleteUser(element.id)} component="a" >
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
            <MDButton variant="text" color={darkMode ? "white" : "dark"} onClick={()=>editUser(element.id)} component="a">
              <Icon>edit</Icon>&nbsp;edit
            </MDButton>
          </MDBox>  
          ),
        })
      })
      setProfile(row);
    }
  }
  
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
      getProfile(user);
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
                &nbsp;add Profile
              </MDButton>
            </MDBox>
            {isLoginFaild && (
                <MDBox mb={2}>
                    <MDAlert color="error" dismissible>
                      {alertContent("error")}
                    </MDAlert>
                </MDBox>
                )}
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
                Profile List
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: column, rows: profile }}
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
              {profileId?"Edit Profile":"Create Profile"}
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
            
                <MDBox mb={2} mx={4}>
                    <div className="App">
                      <ImageUploading
                        single
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                        acceptType={["jpg","png"]}
                      >
                        {({
                          imageList,
                          onImageUpload,
                          onImageUpdate,
                          onImageRemove,
                          isDragging,
                          dragProps
                        }) => (
                          // write your building UI
                          <div className="upload__image-wrapper">
                            <MDButton type="button"
                              style={isDragging ? { color: "red" } : null}
                              onClick={onImageUpload}
                              {...dragProps}
                              color="dark"
                            >
                              Add your profile
                            </MDButton>
                            &nbsp;
                    
                            {imageList.map((image, index) => (
                              <div className="image-item">
                                <img src={image.data_url} alt="" height="100" name="image" value={images} onChange={(e)=>setImages(e.target.value)} width="100"/>
                                <div className="image-item__btn-wrapper">
                                  <MDButton type="button" color="success" onClick={() => onImageUpdate(index)}>Update</MDButton>
                                  <MDButton type="button" color="error" onClick={() => onImageRemove(index)}>Remove</MDButton>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </ImageUploading>
                    </div>
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setGst(e.target.value)} label="GST Number" value={gst} fullWidth />
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Company Name" onChange={(e)=>setCompanyName(e.target.value)} value={company_name} fullWidth required />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setAddress(e.target.value)} value={address} label="Company Address" fullWidth />
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Pincode" onChange={(e)=>setPincode(e.target.value)} value={pincode} fullWidth />
                </MDBox>
                <MDBox mb={1}>
                  <lable style={{ marginLeft:"50px", fontSize:"14px" , color:"gray"}}>GST Composite Scheme</lable>
                  <MDBox mt={0.5}  style={{ marginLeft:"50px"}} >
                  <Switch checked={gst_composite} onChange={() => setFollowsMe(!gst_composite)} />
                  </MDBox>
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Mobile" onChange={(e)=>setMobile(e.target.value)} value={mobile} fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput type="text" onChange={(e)=>setEmail(e.target.value)} label="Email Address" value={email} fullWidth />
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput
                    size="large"
                    select
                    id="demo-simple-select"
                    label="Type of Business"
                    InputProps={{
                      classes: { root: "select-input-styles" },
                    }}
                    value={nature_business}
                    onChange={(e)=>setNature_business(e.target.value)}
                    fullWidth
                  >
                    <MenuItem value="Nature of Business">Nature of Business</MenuItem>
                    <MenuItem value="Manufacture">Manufacture</MenuItem>
                    <MenuItem value="Wholeseller">Wholeseller</MenuItem>
                    <MenuItem value="Trader / Retailer">Trader / Retailer</MenuItem>
                    <MenuItem value="Pharma / Chemist">Pharma / Chemist</MenuItem>
                    <MenuItem value="Travelling Agency">Travelling Agency</MenuItem>
                    <MenuItem value="Service Provider">Service Provider</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </MDInput>
                </MDBox>
                <MDBox mb={2} mx={4}>
                  <MDInput
                    size="large"
                    select
                    id="demo-simple-select"
                    label="Type of Entity"
                    InputProps={{
                      classes: { root: "select-input-styles" },
                    }}
                    value={entity}
                    onChange={(e)=>setEntity(e.target.value)}
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
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="CIN" onChange={(e)=>setCin(e.target.value)} value={cin_no} fullWidth />
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="PAN" onChange={(e)=>setPAN(e.target.value)} value={pan_no} fullWidth />
                </MDBox>
                <MDBox mb={2}  mx={4}>
                  <MDInput type="text" label="Website" onChange={(e)=>setWebsite(e.target.value)} value={website} fullWidth />
                </MDBox>
                <MDBox mx={4}>
                  <Grid item xs={12} pb={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="License Title" value={license_title} onChange={(e)=>setLicenseTitle(e.target.value)} fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6} xl={6}>
                        <MDInput type="text" label="License Number" value={license_no} onChange={(e)=>setLicenseNO(e.target.value)} fullWidth />
                      </Grid>
                    </Grid>
                  </Grid>
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
                        {company_name && profileId ?(
                        <MDButton onClick={handleUpdate} variant="gradient" color="info" fullWidth>
                          Update
                        </MDButton>
                        ):company_name && (
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

export default profile1;
