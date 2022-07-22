import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import Customers from "layouts/customer";
import Profile1 from "layouts/profile1";
import ChangePassword from "layouts/change-password";
import CreateProduct from "layouts/create-product";
import Vendor from "layouts/vendor";
import Purchase from "layouts/purchase";
import Expense from "layouts/expense";
import ResetPassword from "layouts/authentication/reset-password";
import PurhaseReturn from "layouts/purchase-return";
import Payout from "layouts/paymentout";
import PurchaseOrder from "layouts/purchase-order";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Customers",
    key: "customers",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/customers",
    component: <Customers />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
    component: <RTL />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Profile1",
    key: "profile1",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile1",
    component: <Profile1 />,
  },
  {
    type: "collapse",
    name: "Change Password",
    key: "change-password",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/change-password",
    component: <ChangePassword />,
  },
  {
    type: "collapse",
    name: "Product Services",
    key: "product-services",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/create-product",
    component: <CreateProduct />,
  },
  {
    type: "collapse",
    name: "Purchase Return Debit Note",
    key: "purchase-return/debit note",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/purchase-return",
    component: <PurhaseReturn />,
  },
 {
    type: "collapse",
    name: "Forgot Password",
    key: "reset-password",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/reset-password",
    component: <ResetPassword />,
  },
  {
    type: "collapse",
    name: "Vendor",
    key: "vendor",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/vendor",
    component: <Vendor />,
  },
  {
    type: "collapse",
    name: "Purchase",
    key: "purchase",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/purchase",
    component: <Purchase />,
  },
  {
	type: "collapse",
    name: "Paymentout",
    key: "Paymentout",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/paymentout",
    component: <Payout />,
   },
   {
    name: "expense",
    key: "expense",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/expense",
    component: <Expense />,
  },
  {
    type: "collapse",
    name: "purchase Order",
    key: "purchase",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/purchase",
    component: <PurchaseOrder />,
  },
];



export default routes;
