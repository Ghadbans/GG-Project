import React, { useEffect, useState, Suspense } from 'react'
import {
  HashRouter as Router, Routes, Route
} from 'react-router-dom'
import '../js/css/Side.css'
import Loginadmin from './Loginadmin'
import Loginemployee from './Loginemployee'
import Home from './Home'
import AdminHome from './AdminView1/AdminHome'
import RequireAuth from './RequireAuth'
import Loader from './component/Loader'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";
import useLayoutConfig from './hooks/useLayoutConfig';

// --- CORE ADMIN VIEWS ---
const CustomerViewAdmin = React.lazy(() => import('./AdminView1/CustomerViewAdmin'))
const ItemViewAdmin = React.lazy(() => import('./AdminView1/ItemViewAdmin'))
const InvoiceViewAdmin = React.lazy(() => import('./AdminView1/InvoiceViewAdmin'))
const ItemOutViewAdmin = React.lazy(() => import('./AdminView1/ItemOutViewAdmin'))
const ItemReturnAdminView = React.lazy(() => import('./AdminView1/ItemReturnAdminView'))
const PurchaseOrderViewAdmin = React.lazy(() => import('./AdminView1/PurchaseOrderViewAdmin'))
const MaintenanceViewAdmin = React.lazy(() => import('./AdminView1/MaintenanceViewAdmin'))
const FleetViewAdmin = React.lazy(() => import('./AdminView1/FleetViewAdmin'))
const ProjectViewAdmin = React.lazy(() => import('./AdminView1/ProjectViewAdmin'))
const EmployeeViewAdminAll = React.lazy(() => import('./AdminView1/PageView/EmployeeView/EmployeeViewAdminAll'))
const PurchasesViewAdmin = React.lazy(() => import('./AdminView1/PurchasesViewAdmin'))
const TewmViewAdmin = React.lazy(() => import('./AdminView1/TewmViewAdmin'))
const PayRollViewAdmin = React.lazy(() => import('./AdminView1/PayRollViewAdmin'))
const ExpensesViewAdmin = React.lazy(() => import('./AdminView1/ExpensesViewAdmin'))
const RateViewAdmin = React.lazy(() => import('./AdminView1/RateViewAdmin'))
const SettingsViewAdmin = React.lazy(() => import('./AdminView1/SettingsViewAdmin'))
const ReportsViewAdmin = React.lazy(() => import('./AdminView1/ReportsViewAdmin'))
const PaymentView = React.lazy(() => import('./AdminView1/PaymentView'))
const PointOfSale = React.lazy(() => import('./AdminView1/PointOfSale'))
const RecuringInvoiceViewAdmin = React.lazy(() => import('./AdminView1/RecuringInvoiceViewAdmin'))
const RetainerInvoiceView = React.lazy(() => import('./AdminView1/RetainerInvoiceView'))
const EstimateViewAdmin = React.lazy(() => import('./AdminView1/EstimateViewAdmin'))
const SupplierAdminView = React.lazy(() => import('./AdminView1/SupplierAdminView'))
const DailyExpenses = React.lazy(() => import('./AdminView1/DailyExpenses'))
const ItemPurchaseViewAdmin = React.lazy(() => import('./AdminView1/ItemPurchaseViewAdmin'))
const ReportPos = React.lazy(() => import('./AdminView1/ReportPos'))
const SellShopInvoiceView = React.lazy(() => import('./AdminView1/SellShopInvoiceView'))

// --- PAGE VIEWS & FORMS ---

// Customer
const CustomerForm = React.lazy(() => import('./AdminView1/PageView/CustomerVIew/CustomerForm'))
const CustomerFormUpdate = React.lazy(() => import('./AdminView1/PageView/CustomerVIew/CustomerFormUpdate'))
const CustomerInformationView = React.lazy(() => import('./AdminView1/PageView/CustomerVIew/CustomerInformationView'))

// Item
const ItemForm = React.lazy(() => import('./AdminView1/PageView/ItemView/ItemForm'))
const ItemFormUpdate = React.lazy(() => import('./AdminView1/PageView/ItemView/ItemFormUpdate'))
const ItemInformationVIew = React.lazy(() => import('./AdminView1/PageView/ItemView/ItemInformationVIew'))
const ItemFormClone = React.lazy(() => import('./AdminView1/PageView/ItemView/ItemFormClone'))
const ItemCommentForm = React.lazy(() => import('./AdminView1/PageView/ItemView/ItemCommentForm'))
const ItemFormView2 = React.lazy(() => import('./AdminView1/PageView/ItemView/ItemFormView2'))
const ItemNameInfo = React.lazy(() => import('./AdminView1/PageView/ItemView/ItemNameInfo'))
const ItemUpdateView2 = React.lazy(() => import('./AdminView1/PageView/ItemView/ItemUpdateView2'))
const ItemViewLayout = React.lazy(() => import('./AdminView1/PageView/ItemView/ItemViewLayout'))

// Invoice
const InvoiceForm = React.lazy(() => import('./AdminView1/PageView/InvoiceView/InvoiceForm'))
const InvoiceFormUpdate = React.lazy(() => import('./AdminView1/PageView/InvoiceView/InvoiceFormUpdate'))
const InvoiceViewAdminAll = React.lazy(() => import('./AdminView1/PageView/InvoiceView/InvoiceViewAdminAll'))
const InvoiceFormClone = React.lazy(() => import('./AdminView1/PageView/InvoiceView/InvoiceFormClone'))
const InvoiceAllViewTable = React.lazy(() => import('./AdminView1/PageView/InvoiceView/InvoiceAllViewTable'))
const MakePurchase = React.lazy(() => import('./AdminView1/PageView/InvoiceView/MakePurchase'))

// Expenses
const DailyExpenseAdminView = React.lazy(() => import('./AdminView1/PageView/DailyExpenses/DailyExpenseAdminView'))
const DailyExpenseForm = React.lazy(() => import('./AdminView1/PageView/DailyExpenses/DailyExpenseForm'))
const DailyExpenseUpdate = React.lazy(() => import('./AdminView1/PageView/DailyExpenses/DailyExpenseUpdate'))
const CategoryViewDailyExpenses = React.lazy(() => import('./AdminView1/PageView/DailyExpenses/CategoryViewDailyExpenses'))
const ExpensesViewAdminAll = React.lazy(() => import('./AdminView1/PageView/ExpensesView/ExpensesViewAdminAll'))

// Estimate
const EstimateInvoiceForm = React.lazy(() => import('./AdminView1/PageView/EstimateView/EstimateInvoiceForm'))
const EstimateInvoiceFormUpdate = React.lazy(() => import('./AdminView1/PageView/EstimateView/EstimateInvoiceFormUpdate'))
const EstimateViewAdminAll = React.lazy(() => import('./AdminView1/PageView/EstimateView/EstimateViewAdminAll'))
const EstimateInformation = React.lazy(() => import('./AdminView1/PageView/EstimateView/EstimateInformation'))
const EstimateFormClone = React.lazy(() => import('./AdminView1/PageView/EstimateView/EstimateFormClone'))
const EstimateViewConvertToInvoice = React.lazy(() => import('./AdminView1/PageView/EstimateView/EstimateViewConvertToInvoice'))
const EstimateConvertToMaintenance = React.lazy(() => import('./AdminView1/PageView/EstimateView/EstimateConvertToMaintenance'))
const MakePurchaseConvertToProject = React.lazy(() => import('./AdminView1/PageView/EstimateView/MakePurchaseConvertToProject'))

// Recurring
const RecuringInvoiceForm = React.lazy(() => import('./AdminView1/PageView/RecuringView/RecuringInvoiceForm'))
const RecuringViewAdminAll = React.lazy(() => import('./AdminView1/PageView/RecuringView/RecuringViewAdminAll'))
const RecurringInvoiceFormUpdate = React.lazy(() => import('./AdminView1/PageView/RecuringView/RecurringInvoiceFormUpdate'))

// Retainer
const RetainerInvoiceForm = React.lazy(() => import('./AdminView1/PageView/RetainerView/RetainerInvoiceForm'))
const RetainerViewAdminAll = React.lazy(() => import('./AdminView1/PageView/RetainerView/RetainerViewAdminAll'))
const RetainerInvoiceFormUpdate = React.lazy(() => import('./AdminView1/PageView/RetainerView/RetainerInvoiceFormUpdate'))

// Payment
const PaymentInformation = React.lazy(() => import('./AdminView1/PageView/Payment/PaymentInformation'))
const PaymentInformationForm = React.lazy(() => import('./AdminView1/PageView/Payment/PaymentInformationForm'))
const PaymentInformationView = React.lazy(() => import('./AdminView1/PageView/Payment/PaymentInformationView'))
const PaymentInformationUpdate = React.lazy(() => import('./AdminView1/PageView/Payment/PaymentInformationUpdate'))

// Item Out / Return
const ItemOutViewForm = React.lazy(() => import('./AdminView1/PageView/ItemOutView/ItemOutViewForm'))
const ItemOutViewUpdate = React.lazy(() => import('./AdminView1/PageView/ItemOutView/ItemOutViewUpdate'))
const ItemReturnViewForm = React.lazy(() => import('./AdminView1/PageView/ItemReturn/ItemReturnViewForm'))
const ItemReturnUpdateForm = React.lazy(() => import('./AdminView1/PageView/ItemReturn/ItemReturnUpdateForm'))
const ItemPurchaseUpdateForm = React.lazy(() => import('./AdminView1/PageView/ItemPurchase/ItemPurchaseUpdateForm'))
const ItemPurchaseViewForm = React.lazy(() => import('./AdminView1/PageView/ItemPurchase/ItemPurchaseViewForm'))

// Purchase Order
const ConvertPoToIP = React.lazy(() => import('./AdminView1/PageView/PurchaseOrder/ConvertPoToIP'))
const PurchaseForm = React.lazy(() => import('./AdminView1/PageView/PurchaseOrder/PurchaseForm'))
const PurchaseUpdateOrder = React.lazy(() => import('./AdminView1/PageView/PurchaseOrder/PurchaseUpdateOrder'))
const PurchaseOrderInfoView = React.lazy(() => import('./AdminView1/PageView/PurchaseOrder/PurchaseOrderInfoView'))

// Maintenance
const MaintenanceUpdateView = React.lazy(() => import('./AdminView1/PageView/MaintenanceView/MaintenanceUpdateView'))
const MaintenanceViewInformation = React.lazy(() => import('./AdminView1/PageView/MaintenanceView/MaintenanceViewInformation'))
const MaintenanceFormView = React.lazy(() => import('./AdminView1/PageView/MaintenanceView/MaintenanceFormView'))
const MaintenanceConvertToInvoice = React.lazy(() => import('./AdminView1/PageView/MaintenanceView/MaintenanceConvertToInvoice'))
const MaintenanceFormClone = React.lazy(() => import('./AdminView1/PageView/MaintenanceView/MaintenanceFormClone'))

// Fleet Management
const FleetFormUpdate = React.lazy(() => import('./AdminView1/FleetFormUpdate'))
const FleetFormView = React.lazy(() => import('./AdminView1/FleetFormView'))

// Project
const ProjectViewInformation = React.lazy(() => import('./AdminView1/PageView/ProjectView/ProjectViewInformation'))
const ProjectUpdateView = React.lazy(() => import('./AdminView1/PageView/ProjectView/ProjectUpdateView'))
const ProjectFormView = React.lazy(() => import('./AdminView1/PageView/ProjectView/ProjectFormView'))
const ProjectFormView2 = React.lazy(() => import('./AdminView1/PageView/ProjectView/ProjectFormView2'))
const ProjectNameInfo = React.lazy(() => import('./AdminView1/PageView/ProjectView/ProjectNameInfo'))
const ProjectViewLayout = React.lazy(() => import('./AdminView1/PageView/ProjectView/ProjectViewLayout'))
const ProjectPhase = React.lazy(() => import('./AdminView1/PageView/ProjectView/ProjectPhase'))

// Employee
const EmployeeAttendanceForm = React.lazy(() => import('./AdminView1/PageView/EmployeeView/EmployeeAttendanceForm'))
const EmployeeAttendanceFormOut = React.lazy(() => import('./AdminView1/PageView/EmployeeView/EmployeeAttendanceFormOut'))
const EmployeeFormView = React.lazy(() => import('./AdminView1/PageView/EmployeeView/EmployeeFormView'))
const EmployeePlaningForm = React.lazy(() => import('./AdminView1/PageView/EmployeeView/EmployeePlaningForm'))
const EmployeeUpdateView = React.lazy(() => import('./AdminView1/PageView/EmployeeView/EmployeeUpdateView'))
const EmployeeAttendanceSheet = React.lazy(() => import('./AdminView1/PageView/EmployeeView/EmployeeAttendanceSheet'))
const EmployeePlaningFormUpdate = React.lazy(() => import('./AdminView1/PageView/EmployeeView/EmployeePlaningFormUpdate'))
const EmployeeTodayAttendance = React.lazy(() => import('./AdminView1/PageView/EmployeeView/EmployeeTodayAttendance'))
const EmployeePlaningView = React.lazy(() => import('./AdminView1/PageView/EmployeeView/EmployeePlaningView'))
const EmployeeAllViewTable = React.lazy(() => import('./AdminView1/PageView/EmployeeView/EmployeeAllViewTable'))

// PayRoll
const PayRollViewInformation = React.lazy(() => import('./AdminView1/PageView/PayRoll/PayRollViewInformation'))
const PayRollUpdateFormView = React.lazy(() => import('./AdminView1/PageView/PayRoll/PayRollUpdateFormView'))
const PayRollFormView = React.lazy(() => import('./AdminView1/PageView/PayRoll/PayRollFormView'))

// Purchases
const PurchaseFormUpdate = React.lazy(() => import('./AdminView1/PageView/PurchasesView/PurchaseFormUpdate'))
const PurchasesFormView = React.lazy(() => import('./AdminView1/PageView/PurchasesView/PurchasesFormView'))
const PurchasesViewAdminAll = React.lazy(() => import('./AdminView1/PageView/PurchasesView/PurchasesViewAdminAll'))
const ConvertToEstimate = React.lazy(() => import('./AdminView1/PageView/PurchasesView/ConvertToEstimate'))
const ConvertToInvoice = React.lazy(() => import('./AdminView1/PageView/PurchasesView/ConvertToInvoice'))

// Supplier
const SupplierForm = React.lazy(() => import('./AdminView1/PageView/Supplier/SupplierForm'))
const SupplierFormUpdate = React.lazy(() => import('./AdminView1/PageView/Supplier/SupplierFormUpdate'))
const SupplierViewInformation = React.lazy(() => import('./AdminView1/PageView/Supplier/SupplierViewInformation'))

// Settings
const CompanyProfile = React.lazy(() => import('./AdminView1/PageView/SettingsView/CompanyProfile'))
const CompanyProfileForm = React.lazy(() => import('./AdminView1/PageView/SettingsView/CompanyProfileForm'))
const RolePermission = React.lazy(() => import('./AdminView1/PageView/SettingsView/RolePermission'))
const UserAccount = React.lazy(() => import('./AdminView1/PageView/SettingsView/UserAccount'))
const UserAccountForm = React.lazy(() => import('./AdminView1/PageView/SettingsView/UserAccountForm'))
const GrantAccessFormView = React.lazy(() => import('./AdminView1/PageView/SettingsView/GrantAccessFormView'))
const GrantAccessUpdateView = React.lazy(() => import('./AdminView1/PageView/SettingsView/GrantAccessUpdateView'))
const BranchManagement = React.lazy(() => import('./AdminView1/PageView/SettingsView/BranchManagement'))

// POS
const ShopPosForm = React.lazy(() => import('./AdminView1/PageView/ShopPos/ShopPosForm'))
const ShopPosUpdateForm = React.lazy(() => import('./AdminView1/PageView/ShopPos/ShopPosUpdateForm'))

// Block Factory
const BlockProductionView = React.lazy(() => import('./AdminView1/PageView/BlockFactory/BlockProductionView'))
const BlockSalesView = React.lazy(() => import('./AdminView1/PageView/BlockFactory/BlockSalesView'))
const BlockTrackingView = React.lazy(() => import('./AdminView1/PageView/BlockFactory/BlockTrackingView'))
const BlockConfigView = React.lazy(() => import('./AdminView1/PageView/BlockFactory/BlockConfigView'))
const WorkerPaymentView = React.lazy(() => import('./AdminView1/PageView/BlockFactory/WorkerPaymentView'))
const BlockDamageView = React.lazy(() => import('./AdminView1/PageView/BlockFactory/BlockDamageView'))
const BlockMixerView = React.lazy(() => import('./AdminView1/PageView/BlockFactory/BlockMixerView'))
const BlockFactoryLayout = React.lazy(() => import('./BlockFactoryLayout'))

function App() {
  useLayoutConfig();

  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}><Routes>
          <Route path='Loginadmin' element={<Loginadmin />}></Route>
          <Route path='Loginemployee' element={<Loginemployee />}></Route>
          <Route path='/' element={<Home />}></Route>

          <Route element={<RequireAuth />}>
            <Route path='AdminHome' element={<AdminHome />}></Route>

            {/**Customer Routes */}
            <Route path='CustomerViewAdmin' element={<CustomerViewAdmin />}></Route>
            <Route path='CustomerFormUpdate/:id' element={<CustomerFormUpdate />}></Route>
            <Route path='CustomerInformationView/:id' element={<CustomerInformationView />}></Route>
            <Route path='CustomerForm' element={<CustomerForm />}></Route>

            {/**Item Routes */}
            <Route path='ItemViewAdmin' element={<ItemViewAdmin />}></Route>
            <Route path='ItemForm' element={<ItemForm />}></Route>
            <Route path='ItemFormUpdate/:id' element={<ItemFormUpdate />}></Route>
            <Route path='ItemInfo' element={<ItemViewLayout />}>
              <Route path=':id' element={<ItemInformationVIew />} />
            </Route>
            <Route path='ItemFormClone/:id' element={<ItemFormClone />}></Route>
            <Route path='ItemCommentForm/:id' element={<ItemCommentForm />}></Route>
            <Route path='ItemFormView2' element={<ItemFormView2 />}></Route>
            <Route path='ItemUpdateView2/:id' element={<ItemUpdateView2 />}></Route>

            {/**Invoice Routes */}
            <Route path='InvoiceViewAdmin' element={<InvoiceViewAdmin />}></Route>
            <Route path='InvoiceForm' element={<InvoiceForm />}></Route>
            <Route path='InvoiceFormUpdate/:id' element={<InvoiceFormUpdate />}></Route>
            <Route path='InvoiceViewAdminAll/:id' element={<InvoiceViewAdminAll />}></Route>
            <Route path='InvoiceFormClone/:id' element={<InvoiceFormClone />}></Route>
            <Route path='InvoiceAllViewTable' element={<InvoiceAllViewTable />}></Route>
            <Route path='MakePurchase/:id' element={<MakePurchase />}></Route>

            {/**Expenses Routes */}
            <Route path='DailyExpenses' element={<DailyExpenses />}></Route>
            <Route path='DailyExpenseAdminView' element={<DailyExpenseAdminView />}></Route>
            <Route path='DailyExpenseForm' element={<DailyExpenseForm />}></Route>
            <Route path='DailyExpenseUpdate/:id' element={<DailyExpenseUpdate />}></Route>
            <Route path='CategoryViewDailyExpenses' element={<CategoryViewDailyExpenses />}></Route>
            <Route path='ExpensesViewAdmin' element={<ExpensesViewAdmin />}></Route>
            <Route path='ExpensesViewAdminAll/:id' element={<ExpensesViewAdminAll />}></Route>

            {/**Estimate Routes */}
            <Route path='EstimateViewAdmin' element={<EstimateViewAdmin />}></Route>
            <Route path='EstimateInvoiceForm' element={<EstimateInvoiceForm />}></Route>
            <Route path='EstimateInvoiceFormUpdate/:id' element={<EstimateInvoiceFormUpdate />}></Route>
            <Route path='EstimateViewAdminAll/:id' element={<EstimateViewAdminAll />}></Route>
            <Route path='EstimateInformation/:id' element={<EstimateInformation />}></Route>
            <Route path='EstimateFormClone/:id' element={<EstimateFormClone />}></Route>
            <Route path='EstimateViewConvertToInvoice/:id' element={<EstimateViewConvertToInvoice />}></Route>
            <Route path='EstimateConvertToMaintenance/:id' element={<EstimateConvertToMaintenance />}></Route>
            <Route path='MakePurchaseConvertToProject/:id' element={<MakePurchaseConvertToProject />}></Route>

            {/**Recurring Routes */}
            <Route path='RecuringInvoiceViewAdmin' element={<RecuringInvoiceViewAdmin />}></Route>
            <Route path='RecuringInvoiceForm' element={<RecuringInvoiceForm />}></Route>
            <Route path='RecuringViewAdminAll/:id' element={<RecuringViewAdminAll />}></Route>
            <Route path='RecurringInvoiceFormUpdate/:id' element={<RecurringInvoiceFormUpdate />}></Route>

            {/**Retainer Routes */}
            <Route path='RetainerInvoiceView' element={<RetainerInvoiceView />}></Route>
            <Route path='RetainerInvoiceForm' element={<RetainerInvoiceForm />}></Route>
            <Route path='RetainerViewAdminAll/:id' element={<RetainerViewAdminAll />}></Route>
            <Route path='RetainerInvoiceFormUpdate/:id' element={<RetainerInvoiceFormUpdate />}></Route>

            {/**Payment Routes */}
            <Route path='PaymentView' element={<PaymentView />}></Route>
            <Route path='PaymentInformation' element={<PaymentInformation />}></Route>
            <Route path='PaymentInformationForm' element={<PaymentInformationForm />}></Route>
            <Route path='PaymentInformationView/:id' element={<PaymentInformationView />}></Route>
            <Route path='PaymentInformationUpdate/:id' element={<PaymentInformationUpdate />}></Route>

            {/**Item Out/Return */}
            <Route path='ItemOutViewAdmin' element={<ItemOutViewAdmin />}></Route>
            <Route path='ItemOutViewForm' element={<ItemOutViewForm />}></Route>
            <Route path='ItemOutViewUpdate/:id' element={<ItemOutViewUpdate />}></Route>
            <Route path='ItemReturnAdminView' element={<ItemReturnAdminView />}></Route>
            <Route path='ItemReturnViewForm/:id' element={<ItemReturnViewForm />}></Route>
            <Route path='ItemReturnUpdateForm' element={<ItemReturnUpdateForm />}></Route>
            <Route path='ItemReturnUpdateForm/:id' element={<ItemReturnUpdateForm />}></Route>

            {/**Purchase Order */}
            <Route path='PurchaseOrderViewAdmin' element={<PurchaseOrderViewAdmin />}></Route>
            <Route path='ConvertPoToIP/:id' element={<ConvertPoToIP />}></Route>
            <Route path='PurchaseForm' element={<PurchaseForm />}></Route>
            <Route path='PurchaseUpdateOrder/:id' element={<PurchaseUpdateOrder />}></Route>
            <Route path='PurchaseOrderInfoView/:id' element={<PurchaseOrderInfoView />}></Route>

            {/**Maintenance */}
            <Route path='MaintenanceViewAdmin' element={<MaintenanceViewAdmin />}></Route>
            <Route path='MaintenanceUpdateView/:id' element={<MaintenanceUpdateView />}></Route>
            <Route path='MaintenanceViewInformation/:id' element={<MaintenanceViewInformation />}></Route>
            <Route path='MaintenanceFormView' element={<MaintenanceFormView />}></Route>
            <Route path='MaintenanceConvertToInvoice/:id' element={<MaintenanceConvertToInvoice />}></Route>
            <Route path='MaintenanceFormClone/:id' element={<MaintenanceFormClone />}></Route>

            {/**Fleet Management */}
            <Route path='FleetViewAdmin' element={<FleetViewAdmin />}></Route>
            <Route path='FleetFormUpdate/:id' element={<FleetFormUpdate />}></Route>
            <Route path='FleetFormView' element={<FleetFormView />}></Route>

            {/**Project */}
            <Route path='ProjectViewAdmin' element={<ProjectViewAdmin />}></Route>
            <Route path='ProjectInfo' element={<ProjectViewLayout />}>
              <Route path=':id' element={<ProjectViewInformation />} />
            </Route>
            <Route path='ProjectUpdateView/:id' element={<ProjectUpdateView />}></Route>
            <Route path='ProjectFormView' element={<ProjectFormView />}></Route>
            <Route path='ProjectFormView2' element={<ProjectFormView2 />}></Route>
            <Route path='ProjectPhase/:id' element={<ProjectPhase />}></Route>

            {/**Employee */}
            <Route path='EmployeeViewAdminAll/:id' element={<EmployeeViewAdminAll />}></Route>
            <Route path='TewmViewAdmin' element={<TewmViewAdmin />}></Route>
            <Route path='EmployeeAttendanceForm' element={<EmployeeAttendanceForm />}></Route>
            <Route path='EmployeeAttendanceFormOut' element={<EmployeeAttendanceFormOut />}></Route>
            <Route path='EmployeeFormView' element={<EmployeeFormView />}></Route>
            <Route path='EmployeePlaningForm' element={<EmployeePlaningForm />}></Route>
            <Route path='EmployeeUpdateView/:id' element={<EmployeeUpdateView />}></Route>
            <Route path='EmployeeAttendanceSheet/:id' element={<EmployeeAttendanceSheet />}></Route>
            <Route path='EmployeePlaningFormUpdate/:id' element={<EmployeePlaningFormUpdate />}></Route>
            <Route path='EmployeeTodayAttendance' element={<EmployeeTodayAttendance />}></Route>
            <Route path='EmployeePlaningView' element={<EmployeePlaningView />}></Route>
            <Route path='EmployeeAllViewTable' element={<EmployeeAllViewTable />}></Route>

            {/**PayRoll */}
            <Route path='PayRollViewAdmin' element={<PayRollViewAdmin />}></Route>
            <Route path='PayRollViewInformation/:id' element={<PayRollViewInformation />}></Route>
            <Route path='PayRollUpdateFormView/:id' element={<PayRollUpdateFormView />}></Route>
            <Route path='PayRollFormView' element={<PayRollFormView />}></Route>

            {/**Purchases */}
            <Route path='PurchasesViewAdmin' element={<PurchasesViewAdmin />}></Route>
            <Route path='PurchaseFormUpdate/:id' element={<PurchaseFormUpdate />}></Route>
            <Route path='PurchasesFormView' element={<PurchasesFormView />}></Route>
            <Route path='PurchasesViewAdminAll/:id' element={<PurchasesViewAdminAll />}></Route>
            <Route path='ConvertToEstimate/:id' element={<ConvertToEstimate />}></Route>
            <Route path='ConvertToInvoice/:id' element={<ConvertToInvoice />}></Route>

            {/**Supplier */}
            <Route path='SupplierAdminView' element={<SupplierAdminView />}></Route>
            <Route path='SupplierForm' element={<SupplierForm />}></Route>
            <Route path='SupplierFormUpdate/:id' element={<SupplierFormUpdate />}></Route>
            <Route path='SupplierViewInformation/:id' element={<SupplierViewInformation />}></Route>

            {/**Settings */}
            <Route path='SettingsViewAdmin' element={<SettingsViewAdmin />}></Route>
            <Route path='BranchManagement' element={<BranchManagement />}></Route>
            <Route path='RateViewAdmin' element={<RateViewAdmin />}></Route>
            <Route path='RolePermission' element={<RolePermission />}></Route>
            <Route path='UserAccount' element={<UserAccount />}></Route>
            <Route path='CompanyProfile' element={<CompanyProfile />}></Route>
            <Route path='CompanyProfileForm' element={<CompanyProfileForm />}></Route>
            <Route path='UserAccountForm' element={<UserAccountForm />}></Route>
            <Route path='GrantAccessFormView' element={<GrantAccessFormView />}></Route>
            <Route path='GrantAccessUpdateView/:id' element={<GrantAccessUpdateView />}></Route>

            {/**Reports & POS */}
            <Route path='ReportsViewAdmin' element={<ReportsViewAdmin />}></Route>
            <Route path='PointOfSale' element={<PointOfSale />}></Route>
            <Route path='ReportPos' element={<ReportPos />}></Route>
            <Route path='SellShopInvoiceView' element={<SellShopInvoiceView />}></Route>
            <Route path='ShopPosForm' element={<ShopPosForm />}></Route>
            <Route path='ShopPosUpdateForm/:id' element={<ShopPosUpdateForm />}></Route>
            <Route path='ItemPurchaseViewAdmin' element={<ItemPurchaseViewAdmin />}></Route>
            <Route path='ItemPurchaseViewForm' element={<ItemPurchaseViewForm />}></Route>
            <Route path='ItemPurchaseViewForm/:id' element={<ItemPurchaseViewForm />}></Route>
            <Route path='ItemPurchaseUpdateForm/:id' element={<ItemPurchaseUpdateForm />}></Route>

            {/** Block Factory Routes */}
            <Route element={<BlockFactoryLayout />}>
              <Route path='BlockProductionView' element={<BlockProductionView />}></Route>
              <Route path='BlockSalesView' element={<BlockSalesView />}></Route>
              <Route path='BlockTrackingView' element={<BlockTrackingView />}></Route>
              <Route path='BlockConfigView' element={<BlockConfigView />}></Route>
              <Route path='WorkerPaymentView' element={<WorkerPaymentView />}></Route>
              <Route path='BlockDamageView' element={<BlockDamageView />}></Route>
              <Route path='BlockMixerView' element={<BlockMixerView />}></Route>
            </Route>
          </Route>

        </Routes></Suspense>
      </Router>
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