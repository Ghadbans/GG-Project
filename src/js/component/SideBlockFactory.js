import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ConstructionIcon from '@mui/icons-material/Construction';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import EngineeringIcon from '@mui/icons-material/Engineering';

function SideBlockFactory({ grantAccess = [], user = { data: {} } }) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const blockAccess = grantAccess.find(m => m.moduleName === 'Block-Factory')?.access || {
        readM: false, createM: false, viewM: false, editM: false, deleteM: false
    };

    const isGG = user.data.userName === 'GG';

    const canConfigure = isGG || blockAccess.editM;
    const canProduce = isGG || blockAccess.createM;
    const canRead = isGG || blockAccess.readM;

    return (
        <div>
            <ListItemButton
                disabled={!canConfigure}
                component={NavLink} to="/BlockConfigView"
                style={isActive('/BlockConfigView') ? { backgroundColor: '#30368a', color: 'white' } : { color: 'gray' }}
            >
                <ListItemIcon sx={{ color: 'inherit' }}><SettingsSuggestIcon /></ListItemIcon>
                <ListItemText primary="Configuration" />
            </ListItemButton>

            <ListItemButton
                disabled={!canProduce}
                component={NavLink} to="/BlockProductionView"
                style={isActive('/BlockProductionView') ? { backgroundColor: '#30368a', color: 'white' } : { color: 'gray' }}
            >
                <ListItemIcon sx={{ color: 'inherit' }}><ConstructionIcon /></ListItemIcon>
                <ListItemText primary="Production" />
            </ListItemButton>

            <ListItemButton
                disabled={!canProduce}
                component={NavLink} to="/BlockMixerView"
                style={isActive('/BlockMixerView') ? { backgroundColor: '#30368a', color: 'white' } : { color: 'gray' }}
            >
                <ListItemIcon sx={{ color: 'inherit' }}><EngineeringIcon /></ListItemIcon>
                <ListItemText primary="Mixer" />
            </ListItemButton>

            <ListItemButton
                disabled={!canProduce}
                component={NavLink} to="/BlockDamageView"
                style={isActive('/BlockDamageView') ? { backgroundColor: '#30368a', color: 'white' } : { color: 'gray' }}
            >
                <ListItemIcon sx={{ color: 'inherit' }}><ReportProblemIcon /></ListItemIcon>
                <ListItemText primary="Damage" />
            </ListItemButton>

            <ListItemButton
                disabled={!canRead}
                component={NavLink} to="/BlockSalesView"
                style={isActive('/BlockSalesView') ? { backgroundColor: '#30368a', color: 'white' } : { color: 'gray' }}
            >
                <ListItemIcon sx={{ color: 'inherit' }}><ReceiptLongIcon /></ListItemIcon>
                <ListItemText primary="Sales" />
            </ListItemButton>

            <ListItemButton
                disabled={!canRead}
                component={NavLink} to="/BlockTrackingView"
                style={isActive('/BlockTrackingView') ? { backgroundColor: '#30368a', color: 'white' } : { color: 'gray' }}
            >
                <ListItemIcon sx={{ color: 'inherit' }}><AssessmentIcon /></ListItemIcon>
                <ListItemText primary="Inventory" />
            </ListItemButton>

            <ListItemButton
                disabled={!canRead}
                component={NavLink} to="/WorkerPaymentView"
                style={isActive('/WorkerPaymentView') ? { backgroundColor: '#30368a', color: 'white' } : { color: 'gray' }}
            >
                <ListItemIcon sx={{ color: 'inherit' }}><PaymentsIcon /></ListItemIcon>
                <ListItemText primary="Payments" />
            </ListItemButton>
        </div>
    )
}

export default SideBlockFactory
