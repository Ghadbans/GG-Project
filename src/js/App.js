import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../js/css/Side.css'
import Loginadmin from './Loginadmin'
import Loginemployee from './Loginemployee'
import Home from './Home'
import AdminHome from './AdminView1/AdminHome'
import CustomerViewAdmin from './AdminView1/CustomerViewAdmin'
import ItemViewAdmin from './AdminView1/ItemViewAdmin'
import InvoiceViewAdmin from './AdminView1/InvoiceViewAdmin'
import RecuringInvoiceViewAdmin from './AdminView1/RecuringInvoiceViewAdmin'
import RetainerInvoiceView from './AdminView1/RetainerInvoiceView'
import EstimateViewAdmin from './AdminView1/EstimateViewAdmin'
import PurchasesViewAdmin from './AdminView1/PurchasesViewAdmin'
import ProjectViewAdmin from './AdminView1/ProjectViewAdmin'
import TewmViewAdmin from './AdminView1/TewmViewAdmin'
import ReportsViewAdmin from './AdminView1/ReportsViewAdmin'
import SettingsViewAdmin from './AdminView1/SettingsViewAdmin'
import PaymentView from './AdminView1/PaymentView'
import EstimateViewAdminAll from './AdminView1/PageView/EstimateView/EstimateViewAdminAll'
import ExpensesViewAdmin from './AdminView1/ExpensesViewAdmin'
import ItemInformationVIew from './AdminView1/PageView/ItemView/ItemInformationVIew'
import InvoiceViewAdminAll from './AdminView1/PageView/InvoiceView/InvoiceViewAdminAll'
import RecuringViewAdminAll from './AdminView1/PageView/RecuringView/RecuringViewAdminAll'
import RetainerViewAdminAll from './AdminView1/PageView/RetainerView/RetainerViewAdminAll'
import PurchasesViewAdminAll from './AdminView1/PageView/PurchasesView/PurchasesViewAdminAll'
import EmployeeViewAdminAll from './AdminView1/PageView/EmployeeView/EmployeeViewAdminAll'
import CustomerInformationView from './AdminView1/PageView/CustomerVIew/CustomerInformationView'
import ExpensesViewAdminAll from './AdminView1/PageView/ExpensesView/ExpensesViewAdminAll'
import EstimateInvoiceFormUpdate from './AdminView1/PageView/EstimateView/EstimateInvoiceFormUpdate'
import EstimateInvoiceForm from './AdminView1/PageView/EstimateView/EstimateInvoiceForm'
import InvoiceForm from './AdminView1/PageView/InvoiceView/InvoiceForm'
import InvoiceFormUpdate from './AdminView1/PageView/InvoiceView/InvoiceFormUpdate'
import RecuringInvoiceForm from './AdminView1/PageView/RecuringView/RecuringInvoiceForm'
import RecurringInvoiceFormUpdate from './AdminView1/PageView/RecuringView/RecurringInvoiceFormUpdate'
import RetainerInvoiceForm from './AdminView1/PageView/RetainerView/RetainerInvoiceForm'
import RetainerInvoiceFormUpdate from './AdminView1/PageView/RetainerView/RetainerInvoiceFormUpdate'
import CustomerForm from './AdminView1/PageView/CustomerVIew/CustomerForm'
import CustomerFormUpdate from './AdminView1/PageView/CustomerVIew/CustomerFormUpdate'
import ItemForm from './AdminView1/PageView/ItemView/ItemForm'
import ItemFormUpdate from './AdminView1/PageView/ItemView/ItemFormUpdate'
import EstimateViewConvertToInvoice from './AdminView1/PageView/EstimateView/EstimateViewConvertToInvoice'
import PaymentInformationForm from './AdminView1/PageView/Payment/PaymentInformationForm'
import EmployeeFormView from './AdminView1/PageView/EmployeeView/EmployeeFormView'
import CompanyProfile from './AdminView1/PageView/SettingsView/CompanyProfile'
import UserAccount from './AdminView1/PageView/SettingsView/UserAccount'
import RolePermission from './AdminView1/PageView/SettingsView/RolePermission'
import UserAccountForm from './AdminView1/PageView/SettingsView/UserAccountForm'
import CompanyProfileForm from './AdminView1/PageView/SettingsView/CompanyProfileForm'
import PurchasesFormView from './AdminView1/PageView/PurchasesView/PurchasesFormView'
import PurchaseFormUpdate from './AdminView1/PageView/PurchasesView/PurchaseFormUpdate'
import RequireAuth from './RequireAuth'
import DailyExpenses from './AdminView1/DailyExpenses'
import DailyExpenseForm from './AdminView1/PageView/DailyExpenses/DailyExpenseForm'
import DailyExpenseUpdate from './AdminView1/PageView/DailyExpenses/DailyExpenseUpdate'
import DailyExpenseAdminView from './AdminView1/PageView/DailyExpenses/DailyExpenseAdminView'
import PaymentInformationView from './AdminView1/PageView/Payment/PaymentInformationView'
import EmployeeUpdateView from './AdminView1/PageView/EmployeeView/EmployeeUpdateView'
import MaintenanceViewAdmin from './AdminView1/MaintenanceViewAdmin'
import MaintenanceFormView from './AdminView1/PageView/MaintenanceView/MaintenanceFormView'
import MaintenanceUpdateView from './AdminView1/PageView/MaintenanceView/MaintenanceUpdateView'
import MaintenanceViewInformation from './AdminView1/PageView/MaintenanceView/MaintenanceViewInformation'
import CategoryViewDailyExpenses from './AdminView1/PageView/DailyExpenses/CategoryViewDailyExpenses'
import ProjectFormView from './AdminView1/PageView/ProjectView/ProjectFormView'
import ProjectViewInformation from './AdminView1/PageView/ProjectView/ProjectViewInformation'
import ProjectUpdateView from './AdminView1/PageView/ProjectView/ProjectUpdateView'
import ItemOutViewAdmin from './AdminView1/ItemOutViewAdmin'
import ItemOutViewForm from './AdminView1/PageView/ItemOutView/ItemOutViewForm'
import ConvertToEstimate from './AdminView1/PageView/PurchasesView/ConvertToEstimate'
import MakePurchase from './AdminView1/PageView/InvoiceView/MakePurchase'
import ConvertToInvoice from './AdminView1/PageView/PurchasesView/ConvertToInvoice'
import MaintenanceConvertToInvoice from './AdminView1/PageView/MaintenanceView/MaintenanceConvertToInvoice'
import PayRollViewAdmin from './AdminView1/PayRollViewAdmin'
import PayRollFormView from './AdminView1/PageView/PayRoll/PayRollFormView'
import PayRollViewInformation from './AdminView1/PageView/PayRoll/PayRollViewInformation'
import ItemPurchaseViewAdmin from './AdminView1/ItemPurchaseViewAdmin'
import ItemPurchaseViewForm from './AdminView1/PageView/ItemPurchase/ItemPurchaseViewForm'
import ItemPurchaseUpdateForm from './AdminView1/PageView/ItemPurchase/ItemPurchaseUpdateForm'
import ItemOutViewUpdate from './AdminView1/PageView/ItemOutView/ItemOutViewUpdate'
import MakePurchaseConvertToProject from './AdminView1/PageView/EstimateView/MakePurchaseConvertToProject'
import ItemReturnAdminView from './AdminView1/ItemReturnAdminView'
import ItemReturnUpdateForm from './AdminView1/PageView/ItemReturn/ItemReturnUpdateForm'
import ItemReturnViewForm from './AdminView1/PageView/ItemReturn/ItemReturnViewForm'
import PayRollUpdateFormView from './AdminView1/PageView/PayRoll/PayRollUpdateFormView'
import RateViewAdmin from './AdminView1/RateViewAdmin'
import GrantAccessFormView from './AdminView1/PageView/SettingsView/GrantAccessFormView'
import GrantAccessUpdateView from './AdminView1/PageView/SettingsView/GrantAccessUpdateView'
import PaymentInformationUpdate from './AdminView1/PageView/Payment/PaymentInformationUpdate'
import EstimateFormClone from './AdminView1/PageView/EstimateView/EstimateFormClone'
import InvoiceFormClone from './AdminView1/PageView/InvoiceView/InvoiceFormClone'
import ItemFormClone from './AdminView1/PageView/ItemView/ItemFormClone'
import MaintenanceFormClone from './AdminView1/PageView/MaintenanceView/MaintenanceFormClone'
import EmployeeAttendanceForm from './AdminView1/PageView/EmployeeView/EmployeeAttendanceForm'
import EmployeeAttendanceFormOut from './AdminView1/PageView/EmployeeView/EmployeeAttendanceFormOut'
import PurchaseOrderViewAdmin from './AdminView1/PurchaseOrderViewAdmin'
import PurchaseForm from './AdminView1/PageView/PurchaseOrder/PurchaseForm'
import PurchaseUpdateOrder from './AdminView1/PageView/PurchaseOrder/PurchaseUpdateOrder'
import ConvertPoToIP from './AdminView1/PageView/PurchaseOrder/ConvertPoToIP'
import PurchaseOrderInfoView from './AdminView1/PageView/PurchaseOrder/PurchaseOrderInfoView'
import EmployeePlaningForm from './AdminView1/PageView/EmployeeView/EmployeePlaningForm'
import EmployeePlaningFormUpdate from './AdminView1/PageView/EmployeeView/EmployeePlaningFormUpdate'
import PointOfSale from './AdminView1/PointOfSale'
import SellShopInvoiceView from './AdminView1/SellShopInvoiceView'
import ShopPosForm from './AdminView1/PageView/ShopPos/ShopPosForm'
import ShopPosUpdateForm from './AdminView1/PageView/ShopPos/ShopPosUpdateForm'
import { io } from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";
import dayjs from 'dayjs';
import SupplierForm from './AdminView1/PageView/Supplier/SupplierForm'
import SupplierFormUpdate from './AdminView1/PageView/Supplier/SupplierFormUpdate'
import SupplierViewInformation from './AdminView1/PageView/Supplier/SupplierViewInformation'
import SupplierAdminView from './AdminView1/SupplierAdminView'
import ReportPos from './AdminView1/ReportPos'
import InactivityTimer from './component/InactivityTimer'

function App() {
  const { isHibernating } = useSelector(state => state.user);

  useEffect(() => {
    let socket;
    if (navigator.onLine && !isHibernating) {
      socket = io('https://gg-project-productionn.up.railway.app', { transports: ['websocket', 'polling'] })
      socket.on('newNotification', (newNotification) => {
        toast.success(`${dayjs(newNotification.dateNotification).format('DD/MM/YYYY-HH:mm') + ' ' + newNotification.person + ': ' + newNotification.reason}`)
      });
    }

    return () => {
      if (socket) {
        socket.disconnect();
      }
    }
  }, [isHibernating])
  return (
    <>
      <InactivityTimer>
        <Router>
          <Routes>
            <Route path='Loginadmin' element={<Loginadmin />}></Route>
            <Route path='Loginemployee' element={<Loginemployee />}></Route>
            {/* protected routes */}
            <Route element={<RequireAuth />}> </Route>
            <Route path='AdminHome' element={<AdminHome />}></Route>
            {/**Customer Routes Start */}
            <Route path='CustomerViewAdmin' element={<CustomerViewAdmin />}></Route>

            <Route path='CustomerFormUpdate/:id' element={<CustomerFormUpdate />}></Route>
            <Route path='CustomerInformationView/:id' element={<CustomerInformationView />}></Route>
            {/**Customer Routes End */}

            <Route path='CustomerForm' element={<CustomerForm />}></Route>

            {/**Item Routes Start */}
            <Route path='ItemViewAdmin' element={<ItemViewAdmin />}></Route>
            <Route path='ItemForm' element={<ItemForm />}></Route>
            <Route path='ItemFormUpdate/:id' element={<ItemFormUpdate />}></Route>
            <Route path='ItemInformationVIew/:id' element={<ItemInformationVIew />}></Route>
            <Route path='ItemFormClone/:id' element={<ItemFormClone />}></Route>
            {/**Item Routes End */}
            {/**Invoice Invoice Routes Start */}
            <Route path='InvoiceViewAdmin' element={<InvoiceViewAdmin />}></Route>
            <Route path='InvoiceForm' element={<InvoiceForm />}></Route>
            <Route path='InvoiceFormUpdate/:id' element={<InvoiceFormUpdate />}></Route>
            <Route path='InvoiceViewAdminAll/:id' element={<InvoiceViewAdminAll />}></Route>
            <Route path='InvoiceFormClone/:id' element={<InvoiceFormClone />}></Route>
            {/**Invoice Invoice Routes End */}
            {/**Estimate Invoice Routes Start */}
            <Route path='EstimateViewAdmin' element={<EstimateViewAdmin />}></Route>
            <Route path='EstimateInvoiceForm' element={<EstimateInvoiceForm />}></Route>
            <Route path='EstimateViewAdminAll/:id' element={<EstimateViewAdminAll />}></Route>
            <Route path='EstimateInvoiceFormUpdate/:id' element={<EstimateInvoiceFormUpdate />}></Route>
            <Route path='EstimateViewConvertToInvoice/:id' element={<EstimateViewConvertToInvoice />}></Route>
            <Route path='MakePurchaseConvertToProject/:id' element={<MakePurchaseConvertToProject />}></Route>
            <Route path='EstimateFormClone/:id' element={<EstimateFormClone />}></Route>
            {/**Estimate Invoice Routes End */}
            {/**Recurring Invoice Routes Start */}
            <Route path='RecuringInvoiceViewAdmin' element={<RecuringInvoiceViewAdmin />}></Route>
            <Route path='RecuringInvoiceForm' element={<RecuringInvoiceForm />}></Route>
            <Route path='RecuringViewAdminAll/:id' element={<RecuringViewAdminAll />}></Route>
            <Route path='RecurringInvoiceFormUpdate/:id' element={<RecurringInvoiceFormUpdate />}></Route>
            {/**Recurring Invoice Routes End */}
            {/**Retainer Invoice Routes End */}
            <Route path='RetainerInvoiceView' element={<RetainerInvoiceView />}></Route>
            <Route path='RetainerInvoiceForm' element={<RetainerInvoiceForm />}></Route>
            <Route path='RetainerViewAdminAll/:id' element={<RetainerViewAdminAll />}></Route>
            <Route path='RetainerInvoiceFormUpdate/:id' element={<RetainerInvoiceFormUpdate />}></Route>
            {/**Retainer Invoice Routes End */}
            {/**Payment Routes Start */}
            <Route path='PaymentView' element={<PaymentView />}></Route>
            <Route path='PaymentInformationView/:id' element={<PaymentInformationView />}></Route>
            <Route path='PaymentInformationForm' element={<PaymentInformationForm />}></Route>
            <Route path='PaymentInformationUpdate/:id' element={<PaymentInformationUpdate />}></Route>
            {/**Payment Routes End */}
            <Route path='ExpensesViewAdmin' element={<ExpensesViewAdmin />}></Route>
            <Route path='ExpensesViewAdminAll/:id' element={<ExpensesViewAdminAll />}></Route>
            {/**Daily Expenses Routes Start */}
            <Route path='DailyExpenses' element={<DailyExpenses />}></Route>
            <Route path='DailyExpenseForm' element={<DailyExpenseForm />}></Route>
            <Route path='CategoryViewDailyExpenses' element={<CategoryViewDailyExpenses />}></Route>
            <Route path='DailyExpenseUpdate/:id' element={<DailyExpenseUpdate />}></Route>
            <Route path='DailyExpenseAdminView' element={<DailyExpenseAdminView />}></Route>
            {/**Daily Expenses Routes End */}
            {/**Purchase Routes Start */}
            <Route path='PurchasesViewAdmin' element={<PurchasesViewAdmin />}></Route>
            <Route path='PurchasesFormView' element={<PurchasesFormView />}></Route>
            <Route path='PurchasesViewAdminAll/:id' element={<PurchasesViewAdminAll />}></Route>
            <Route path='PurchaseFormUpdate/:id' element={<PurchaseFormUpdate />}></Route>
            <Route path='ConvertToEstimate/:id' element={<ConvertToEstimate />}></Route>
            <Route path='ConvertToInvoice/:id' element={<ConvertToInvoice />}></Route>
            <Route path='MakePurchase/:id' element={<MakePurchase />}></Route>
            {/**Purchase Routes End */}
            <Route path='ProjectViewAdmin' element={<ProjectViewAdmin />}></Route>
            <Route path='ProjectFormView' element={<ProjectFormView />}></Route>
            <Route path='ProjectViewInformation/:id' element={<ProjectViewInformation />}></Route>
            <Route path='ProjectUpdateView/:id' element={<ProjectUpdateView />}></Route>
            {/** Employee Routes Start */}
            <Route path='TewmViewAdmin' element={<TewmViewAdmin />}></Route>
            <Route path='EmployeeFormView' element={<EmployeeFormView />}></Route>
            <Route path='EmployeePlaningForm' element={<EmployeePlaningForm />}></Route>
            <Route path='EmployeeAttendanceForm' element={<EmployeeAttendanceForm />}></Route>
            <Route path='EmployeeAttendanceFormOut' element={<EmployeeAttendanceFormOut />}></Route>
            <Route path='EmployeeViewAdminAll/:id' element={<EmployeeViewAdminAll />}></Route>
            <Route path='EmployeeUpdateView/:id' element={<EmployeeUpdateView />}></Route>
            <Route path='EmployeePlaningFormUpdate/:id' element={<EmployeePlaningFormUpdate />}></Route>
            {/** Employee Routes End */}
            <Route path='ReportsViewAdmin' element={<ReportsViewAdmin />}></Route>
            {/** Maintenance start */}
            <Route path='MaintenanceViewAdmin' element={<MaintenanceViewAdmin />}></Route>
            <Route path='MaintenanceFormView' element={<MaintenanceFormView />}></Route>
            <Route path='MaintenanceUpdateView/:id' element={<MaintenanceUpdateView />}></Route>
            <Route path='MaintenanceViewInformation/:id' element={<MaintenanceViewInformation />}></Route>
            <Route path='MaintenanceConvertToInvoice/:id' element={<MaintenanceConvertToInvoice />}></Route>
            <Route path='MaintenanceFormClone/:id' element={<MaintenanceFormClone />}></Route>
            {/** Maintenance end */}
            {/** Item-Out Start */}
            <Route path='ItemOutViewAdmin' element={<ItemOutViewAdmin />}></Route>
            <Route path='ItemOutViewForm' element={<ItemOutViewForm />}></Route>
            <Route path='ItemOutViewUpdate/:id' element={<ItemOutViewUpdate />}></Route>
            {/** Item-Out end */}
            {/** Item-Purchase Start */}
            <Route path='ItemPurchaseViewAdmin' element={<ItemPurchaseViewAdmin />}></Route>
            <Route path='ItemPurchaseViewForm' element={<ItemPurchaseViewForm />}></Route>
            <Route path='ItemPurchaseUpdateForm/:id' element={<ItemPurchaseUpdateForm />}></Route>
            {/** Item-Purchase end */}
            {/** Item-Out Start */}
            <Route path='PayRollViewAdmin' element={<PayRollViewAdmin />}></Route>
            <Route path='PayRollFormView' element={<PayRollFormView />}></Route>
            <Route path='PayRollViewInformation/:id' element={<PayRollViewInformation />}></Route>
            <Route path='PayRollUpdateFormView/:id' element={<PayRollUpdateFormView />}></Route>
            {/** Item-Out end */}
            {/** Item-Return start */}
            <Route path='ItemReturnAdminView' element={<ItemReturnAdminView />}></Route>
            <Route path='ItemReturnUpdateForm' element={<ItemReturnUpdateForm />}></Route>
            <Route path='ItemReturnViewForm/:id' element={<ItemReturnViewForm />}></Route>
            {/** Item-Return end */}
            {/** Item-Supplier start */}
            <Route path='SupplierAdminView' element={<SupplierAdminView />}></Route>
            <Route path='SupplierForm' element={<SupplierForm />}></Route>
            <Route path='SupplierFormUpdate/:id' element={<SupplierFormUpdate />}></Route>
            <Route path='SupplierViewInformation/:id' element={<SupplierViewInformation />}></Route>
            {/** Item-Supplier end */}
            {/** Purchase Order start */}
            <Route path='PurchaseOrderViewAdmin' element={<PurchaseOrderViewAdmin />}></Route>
            <Route path='PurchaseForm' element={<PurchaseForm />}></Route>
            <Route path='PurchaseUpdateOrder/:id' element={<PurchaseUpdateOrder />}></Route>
            <Route path='ConvertPoToIP/:id' element={<ConvertPoToIP />}></Route>
            <Route path='PurchaseOrderInfoView/:id' element={<PurchaseOrderInfoView />}></Route>
            {/** Purchase Order end */}
            {/* Settings Start Routes */}
            <Route path='RateViewAdmin' element={<RateViewAdmin />}></Route>
            <Route path='SettingsViewAdmin' element={<SettingsViewAdmin />}></Route>
            <Route path='UserAccount' element={<UserAccount />}></Route>
            <Route path='CompanyProfile' element={<CompanyProfile />}></Route>
            <Route path='RolePermission' element={<RolePermission />}></Route>
            <Route path='GrantAccessFormView' element={<GrantAccessFormView />}></Route>
            <Route path='GrantAccessUpdateView/:id' element={<GrantAccessUpdateView />}></Route>
            <Route path='UserAccountForm' element={<UserAccountForm />}></Route>
            <Route path='CompanyProfileForm' element={<CompanyProfileForm />}></Route>
            {/* Settings End Routes */}
            <Route path='ReportPos' element={<ReportPos />}></Route>
            <Route path='PointOfSale' element={<PointOfSale />}></Route>
            <Route path='SellShopInvoiceView' element={<SellShopInvoiceView />}></Route>
            <Route path='ShopPosForm' element={<ShopPosForm />}></Route>
            <Route path='ShopPosUpdateForm/:id' element={<ShopPosUpdateForm />}></Route>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </Router>
      </InactivityTimer>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
