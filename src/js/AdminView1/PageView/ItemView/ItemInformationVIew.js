import React, { useEffect, useState } from 'react'
import '../Chartview.css'
import { MenuItem, Grid, IconButton, Paper, TextField, FormControl, InputLabel, Select, Typography, styled, FormLabel, RadioGroup, FormControlLabel, Radio, Input, OutlinedInput, InputAdornment, Modal, Backdrop, Fade, Box, Autocomplete, Button, Menu, Divider, Tab, Card, CardContent, Table, TableBody, TableHead, TableCell, TableRow, TableContainer } from '@mui/material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import { ENDPOINT_URL } from '../../../apiConfig';
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../features/auth/authSlice';
import Loader from '../../../component/Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import dayjs from 'dayjs';
import Close from '@mui/icons-material/Close';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { FileCopy } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveCircleOutline from '@mui/icons-material/RemoveCircleOutline';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const palette = ['blue', 'red', 'orange'];
const EditTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'gray',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
const ViewTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#202a5a',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
const DeleteTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'red',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
const BlackTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#202a5a',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 15,
}));
function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

function ItemInformationVIew() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const [grantAccess, setGrantAccess] = useState([]);
  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/grantAccess`);
        res.data?.data?.filter((row) => row.userID === user.data.id)
          .map((row) => setGrantAccess(row.modules))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchNumber()
  }, [user])
  const ItemInfoU = grantAccess.filter((row) => row.moduleName === "Item" && row.access.editM === true);


  const [itemPurchase, setItemPurchase] = useState([]);
  const [itemOut, setItemOut] = useState([]);
  const [posOut, setPosOut] = useState([]);
  const [itemReturn, setItemReturn] = useState([]);
  const [projectsList, setProjectsList] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [month, setMonth] = useState('');
  const [selectOptions, setSelectOptions] = useState('');
  const [startDate, setStartDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [fromDate, setFromDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [endDate, setEndDate] = useState(() => {
    const date = new Date()
    return date
  });
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const headers = [];
    const currentDate = new Date(fromDate);
    while (currentDate <= endDate) {
      headers.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setFilteredData(headers)
  }, [fromDate, endDate])
  const handleChangeSelected = (e) => {
    setSelectOptions(e.target.value)
  }
  const [loadingData2, setLoadingData2] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        // Run all 4 fetches in parallel with server-side itemId filter — massively faster
        const [resItemOut, resItemPurchase, resPosOut, resIReturn, resProj] = await Promise.all([
          axios.get(`${ENDPOINT_URL}/itemOut?itemId=${id}`),
          axios.get(`${ENDPOINT_URL}/itemPurchase?itemId=${id}`),
          axios.get(`${ENDPOINT_URL}/pos?itemId=${id}`),
          axios.get(`${ENDPOINT_URL}/itemReturn?itemId=${id}`),
          axios.get(`${ENDPOINT_URL}/projects?summary=true`),
        ]);

        // itemOut — server already filtered by itemId, just ensure qty > 0
        const formatDate1 = resItemOut.data.data.map((row) => ({
          ...row,
          itemsQtyArray: row.itemsQtyArray.filter((Item) => parseFloat(Item.newItemOut) > 0)
        })).filter(row => row.itemsQtyArray.length > 0);
        setItemOut(formatDate1.sort((a, b) => b.outNumber - a.outNumber));

        // itemPurchase — server already filtered by itemId
        const formatDate = resItemPurchase.data.data.map(row => ({
          ...row,
          items: row.items.filter((Item) => Item.itemName._id === id)
        })).filter(row => row.items.length > 0);
        setItemPurchase(formatDate.sort((a, b) => b.itemPurchaseNumber - a.itemPurchaseNumber));

        // POS out — server already filtered by itemId
        const formatDate3 = resPosOut.data.data.map((row) => ({
          ...row,
          items: row.items.filter((Item) => Item.itemName._id === id && parseFloat(Item.itemQty) >= 0)
        })).filter(row => row.items.length > 0);
        setPosOut(formatDate3.reverse());

        // itemReturn — server already filtered by itemId, ensure qty > 0
        const formatDate2 = resIReturn.data.data.map((row) => ({
          ...row,
          itemsQtyArray: row.itemsQtyArray.filter((Item) => parseFloat(Item.newItemOut) > 0)
        })).filter(row => row.itemsQtyArray.length > 0);
        setItemReturn(formatDate2);

        setProjectsList(resProj.data.data);
        setLoadingData2(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData2(true);
      }
    };
    handleFetch();
  }, [id])
  const [stock, setStock] = useState(0)
  const [totalPurchase, settotalPurchase] = useState(0)
  const [totalGeneralOut, settotalGeneralOut2] = useState(0)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (loadingData2) {
      const totalPosOut = posOut?.reduce((acc, row) => { return acc + row.items.reduce((sum, Item) => sum + parseFloat(Item.itemQty), 0) }, 0)
      const totalOut = itemOut?.reduce((acc, row) => { return acc + row.itemsQtyArray.reduce((sum, Item) => sum + parseFloat(Item.newItemOut), 0) }, 0)
      const totalReturn = itemReturn?.reduce((acc, row) => { return acc + row.itemsQtyArray.reduce((sum, Item) => sum + parseFloat(Item.newItemOut), 0) }, 0)
      const totalGeneralOut2 = (Number(totalPosOut) + Number(totalOut)) - totalReturn
      const totalPurchase2 = itemPurchase?.reduce((acc, row) => { return acc + row.items.reduce((sum, Item) => sum + parseFloat(Item.itemQty), 0) }, 0)
      settotalPurchase(totalPurchase2)
      settotalGeneralOut2(totalGeneralOut2)
      const stock1 = parseFloat(totalPurchase2 - totalGeneralOut2).toFixed(2);
      setStock(Math.round((stock1) * 100) / 100)
      setCompleted(true)
    }
  }, [itemPurchase, posOut, itemOut, itemReturn, loadingData2])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [show, setShow] = useState(1);
  const handleShow = (e) => {
    setShow(e);
    setAnchorEl(null);
  }




  const fetchStock = async () => {
    try {
      await axios.put(`${ENDPOINT_URL}/update-item/${id}`, {
        itemQuantity: stock
      });
      // Update local item state immediately so display refreshes without page reload
      SetItems(prev => prev.map(row =>
        row._id === id ? { ...row, itemQuantity: stock } : row
      ));
    } catch (error) {
      console.log(error);
    }
  }

  const [item, SetItems] = useState([]);
  useEffect(() => {
    const fetchItem = async () => {
      try {
        // Fetch only this single item instead of downloading entire item collection
        const res = await axios.get(`${ENDPOINT_URL}/get-item/${id}`);
        SetItems([res.data.data]);
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    };
    fetchItem();
  }, [id])

  const [reason, setReason] = useState("");
  const [Comments1, setComments] = useState([]);
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/comment`)
        const resp = res.data?.data?.filter((row) => row.CommentInfo.idInfo === id)
        setComments(resp.reverse())
        const resNotification = await axios.get(`${ENDPOINT_URL}/notification`)
        setNotification(resNotification.data?.data?.filter((row) => row.idInfo === id))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchComment()
  }, [id])

  const CommentInfo =
  {
    idInfo: id,
    person: user.data.userName,
    reason
  }

  {/** Loading Start */ }

  const [loading, setLoading] = useState(false);
  const [loadingOpenModal, setLoadingOpenModal] = useState(false);
  const [ErrorOpenModal, setErrorOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingOpenModalPicture, setLoadingOpenModalPicture] = useState(false);
  const [loadingOpenModalDelete, setLoadingOpenModalDelete] = useState(false);
  const handleOpen = () => {

    setLoadingOpenModal(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500)

  }
  const handleOpenPicture = () => {
    setLoadingOpenModalPicture(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleOpenDelete = () => {
    setLoadingOpenModalDelete(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleClosePicture = () => {
    setLoadingOpenModalPicture(false);
    window.location.reload();
  }
  const handleCloseDelete = () => {
    setLoadingOpenModalDelete(false);
    window.location.reload();
  }
  const handleError = (msg) => {
    setErrorMessage(typeof msg === 'string' ? msg : "Unknown Error");
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }
  const handleClose = () => {
    setLoadingOpenModal(false);
  }
  const handleCloseError = () => {
    setErrorOpenModal(false);
  }
  {/** Loading End */ }
  const [ItemName, setItemName] = useState(null);
  const [imagesURL, setImagesURL] = useState(null);
  const [loadingData1, setLoadingData1] = useState(true);
  useEffect(() => {
    const fetchEId = async () => {
      try {
        if (id) {
          const res = await axios.get(`${ENDPOINT_URL}/get-item/${id}`)
          setItemName(res.data.data.itemName)
          if (res.data.data && res.data.data.data != null) {
            const buffer = new Uint8Array(res.data.data.data.data)
            const bold = new Blob([buffer], { type: `${res.data.data.contentType}` })
            const reader = new FileReader();
            reader.readAsDataURL(bold)
            reader.onloadend = () => {
              setImagesURL(reader.result)
            };
          } else {
            setImagesURL(null)
          }
        }
        setLoadingData1(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData1(false)
      }
    }
    fetchEId()
  }, [id])
  const [images, setImages] = useState(null);
  const [images1, setImages1] = useState(null);
  const [imagesURL1, setImagesURL1] = useState('');

  const [uploadedImage, setUploadedImage] = useState('')
  const [uploadedImageURL, setUploadedImageURL] = useState('')
  function handleBase64(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUploadedImage(reader.result)
    }
    reader.onerror = error => {
      console.log("error", error)
    }
    setUploadedImageURL(e.target.files[0]);
  }
  const handleShowInput = () => {
    setUploadedImage('')
  }
  const handleImageSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('image', uploadedImageURL);
    formData.append('employeeName', id);
    try {
      await axios.put(`${ENDPOINT_URL}/upload-image-item/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      handleOpenPicture();
    } catch (error) {
      handleError(error.response ? JSON.stringify(error.response.data) : error.message);
    }
  }
  const handleDeleteImage = async () => {
    try {
      console.log("Deleting image for item:", id);
      const res = await axios.put(`${ENDPOINT_URL}/update-item/${id}`, {
        data: null,
        contentType: null
      })
      console.log("Delete response:", res.data);
      setImagesURL(null)
      handleOpenDelete()
    } catch (error) {
      console.error("Delete error:", error);
      handleError(error.response ? JSON.stringify(error.response.data) : error.message)
    }
  }
  const dateComment = dayjs(Date.now());
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const data = {
      CommentInfo,
      dateComment
    };
    try {
      const res = await axios.post(`${ENDPOINT_URL}/create-comment/`, data)
      if (res) {
        setReason("");
        handleOpen();
        const newData = res.data.data
        setComments([newData, ...Comments1])
      }
    } catch (error) {
      if (error) {
        handleError(error.response ? JSON.stringify(error.response.data) : error.message);
      }
    }
  }
  const [value3, setValue3] = React.useState('1');
  useEffect(() => {
    const result = localStorage.getItem('TabItemView')
    if (result) {
      setValue3(result)
    }
  }, [])
  const handleChange3 = (event, newValue) => {
    const changeValue = newValue
    setValue3(changeValue);
    localStorage.setItem('TabItemView', changeValue)
  };


  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [search2, setSearch2] = useState('');
  const [debouncedSearch2, setDebouncedSearch2] = useState('');
  const [search3, setSearch3] = useState('');
  const [debouncedSearch3, setDebouncedSearch3] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch2(search2), 300);
    return () => clearTimeout(handler);
  }, [search2]);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch3(search3), 300);
    return () => clearTimeout(handler);
  }, [search3]);

  useEffect(() => {
    const result = null; // localStorage.getItem('QuickFilterItemPurchaseItem-Summary')
    if (result) {
      setSearch(result)
    }
  }, [])

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
//     localStorage.setItem('QuickFilterItemPurchaseItem-Summary', value)
  }
  const newArray = (debouncedSearch !== '' ? itemPurchase.filter((row) =>
    row.itemPurchaseNumber.toString().includes(debouncedSearch) ||
    (row.description?.toString() || "").toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    (row.projectName && row.projectName.name.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
    (row.manufacturer?.toString() || "").toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    (row.manufacturerNumber?.toString() || "").toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    row.items.some((Item) => Item.itemName !== undefined && (Item.itemName.itemName?.toString() || "").toLowerCase().includes(debouncedSearch.toLowerCase())) ||
    row.items.some((Item) => Item.itemDescription !== undefined && (Item.itemDescription?.toString() || "").toLowerCase().includes(debouncedSearch.toLowerCase())) ||
    row.items.some((Item) => Item.newDescription !== undefined && (Item.newDescription?.toString() || "").toLowerCase().includes(debouncedSearch.toLowerCase())) ||
    dayjs(row.itemPurchaseDate).format('DD/MM/YYYY').includes(debouncedSearch)
  ) : itemPurchase).sort((a,b) => new Date(b.itemPurchaseDate || b.date) - new Date(a.itemPurchaseDate || a.date))

  const totalPurChaseTotal = newArray.length > 0 ? newArray.reduce((acc, row) => { return acc + row.items.reduce((sum, item) => sum + parseFloat(item.itemQty), 0) }, 0) : 0
  const totalBuyPurChaseTotal = newArray.length > 0 ? newArray.filter((row) => row.items.find((Item) => parseFloat(Item.itemRate) !== 0)).reduce((acc, row) => { return acc + row.items.reduce((sum, item) => sum + parseFloat(item.itemQty), 0) }, 0) : 0
  const totalAmountPurchase = newArray.map((row) => ({ ...row, items: row.items.map((Item) => ({ ...Item, totalCostInfo: Item.itemRate * Item.itemQty })) }))

  const totalPurChaseTotalAmount = totalAmountPurchase.length > 0 ? totalAmountPurchase.reduce((acc, row) => { return acc + row.items.reduce((sum, item) => sum + parseFloat(item.totalCostInfo), 0) }, 0) : 0

  const averageCost = Math.round((totalPurChaseTotalAmount / totalBuyPurChaseTotal) * 100) / 100;

  const handleSearch2 = (e) => {
    const value = e.target.value
    setSearch2(value)
  }
  const newItemOut = [];

  posOut.forEach(row => {
    newItemOut.push({
      _id: row._id,
      outNumber: 'S-' + String(row.factureNumber).padStart(6, '0'),
      itemOutDate: row.invoiceDate,
      reason: "Shop",
      reference: {
        _id: '',
        referenceName: row.customerName.customerName
      },
      itemsQtyArray: row.items.map((row1) => ({ ...row1, newItemOut: row1.itemQty }))
    })
  })

  itemOut.forEach(row => {
    newItemOut.push({
      _id: row._id,
      outNumber: 'O-' + row.outNumber,
      itemOutDate: row.itemOutDate,
      reason: row.reason,
      reference: row.reference,
      itemsQtyArray: row.itemsQtyArray
    })
  })
  const [filterItemOut, setFilterItemOut] = useState([]);
  useEffect(() => {
    if (selectOptions === 'Month') {
      setFilterItemOut(newItemOut?.filter((row) => dayjs(row.itemOutDate).format('MMMM') === month))
    } else if (selectOptions === 'Year') {
      setFilterItemOut(newItemOut?.filter((row) => dayjs(row.itemOutDate).format('YYYY') === dayjs(startDate).format('YYYY')))
    }
    else if (selectOptions === 'Custom') {
      setFilterItemOut(newItemOut?.filter((row) => filteredData.find((Item) => dayjs(Item).format('DD/MM/YYYY') === dayjs(row.itemOutDate).format('DD/MM/YYYY'))))
    }
    else if (selectOptions === 'All') {
      setFilterItemOut(newItemOut)
    }
  }, [selectOptions, month, startDate, filteredData])

  const parseDate = (dStr) => {
    if (!dStr) return 0;
    const parts = String(dStr).split('/');
    if (parts.length === 3) return new Date(parts[2], parts[1] - 1, parts[0]).getTime();
    return new Date(dStr).getTime();
  };

  const newArray2 = (debouncedSearch2 !== '' ? newItemOut.filter((row) =>
    (row.reason?.toString() || "").toLowerCase().includes(debouncedSearch2.toLowerCase()) ||
    (row.outNumber?.toString() || "").toLowerCase().includes(debouncedSearch2.toLowerCase()) ||
    (row.reference && row.reference.referenceName && row.reference.referenceName.toLowerCase().includes(debouncedSearch2.toLowerCase())) ||
    row.itemsQtyArray.some((Item) => Item.itemName !== undefined && (Item.itemName.itemName?.toString() || "").toLowerCase().includes(debouncedSearch2.toLowerCase())) ||
    row.itemsQtyArray.some((Item) => Item.itemDescription !== undefined && (Item.itemDescription?.toString() || "").toLowerCase().includes(debouncedSearch2.toLowerCase())) ||
    row.itemsQtyArray.some((Item) => Item.newDescription !== undefined && (Item.newDescription?.toString() || "").toLowerCase().includes(debouncedSearch2.toLowerCase())) ||
    dayjs(row.itemOutDate).format('DD/MM/YYYY').includes(debouncedSearch2)
  ) : newItemOut).sort((a,b) => parseDate(b.itemOutDate || b.date) - parseDate(a.itemOutDate || a.date))

  const totalOutTotal = newArray2.length > 0 ? newArray2.reduce((acc, row) => { return acc + row.itemsQtyArray.reduce((sum, item) => sum + (item.newItemOut !== undefined ? parseFloat(item.newItemOut) : 0), 0) }, 0) : 0

  const handleSearch3 = (e) => {
    const value = e.target.value
    setSearch3(value)
  }
  const newArray3 = (debouncedSearch3 !== '' ? itemReturn.filter((row) =>
    (row.reason?.toString() || "").toLowerCase().includes(debouncedSearch3.toLowerCase()) ||
    (row.outNumber?.toString() || "").toLowerCase().includes(debouncedSearch3.toLowerCase()) ||
    (row.reference && row.reference.referenceName && row.reference.referenceName.toLowerCase().includes(debouncedSearch3.toLowerCase())) ||
    row.itemsQtyArray.some((Item) => Item.itemName.itemName.toLowerCase().includes(debouncedSearch3.toLowerCase())) ||
    row.itemsQtyArray.some((Item) => Item.itemDescription.toLowerCase().includes(debouncedSearch3.toLowerCase())) ||
    dayjs(row.itemOutDate).format('DD/MM/YYYY').includes(debouncedSearch3)
  ) : itemReturn).sort((a,b) => parseDate(b.itemReturnDate || b.date) - parseDate(a.itemReturnDate || a.date))
  const totalReturnTotal = newArray3.length > 0 ? newArray3.reduce((acc, row) => { return acc + row.itemsQtyArray.reduce((sum, item) => sum + parseFloat(item.newItemOut), 0) }, 0) : 0
  const [openView, setOpenView] = useState(false);
  const [idView, setIdView] = useState(null);
  const [itemPurchaseView, setItemPurchaseView] = useState(null)
  const handleOpenView = (id) => {
    setOpenView(true);
    setIdView(id)
  }
  const handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setItemPurchaseView(null);
  };
  useEffect(() => {
    const fetchData2 = async () => {
      if (idView !== null) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-itemPurchase/${idView}`)
          setItemPurchaseView(res.data.data)
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchData2()
  }, [idView])
  const [openView2, setOpenView2] = useState(false);
  const [idView2, setIdView2] = useState(null);
  const [itemPurchaseView2, setItemPurchaseView2] = useState(null)
  const handleOpenView2 = (id) => {
    setOpenView2(true);
    setIdView2(id)
  }
  const handleCloseView2 = () => {
    setOpenView2(false);
    setIdView2(null);
    setItemPurchaseView2(null);
  };
  useEffect(() => {
    const fetchData2 = async () => {

      if (idView2 !== null) {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/get-itemOut/${idView2}`)
          setItemPurchaseView2(res.data.data)
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchData2()
  }, [idView2])
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={show === 1 ? 12 : 9}>
          <div className='itemInfoContainer2'>
            <div style={{ width: '100%', background: 'white' }}>
              {loadingData ? (
                <div style={{ position: 'relative', top: '120px' }}>
                  <Loader />
                </div>
              ) : (
                <div>
                  {item?.filter(row => row._id === id)?.map((row) => (
                    <div key={row._id}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ width: '100%', padding: '10px' }}>
                          <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>{row.itemName.toUpperCase()}</Typography>
                          <Typography>{row.typeItem}</Typography>
                        </div>
                        <Button
                          aria-controls={open ? 'demo-customized-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          variant="contained"
                          disableElevation
                          onClick={handleClick}
                          endIcon={<KeyboardArrowDown />}
                          sx={{
                            bgcolor: 'gray', '&:hover': {
                              color: 'gray',
                              bgcolor: 'white',
                              border: '1px solid gray',
                            }
                          }}
                        >
                          Options
                        </Button>
                        <Menu
                          id="demo-customized-menu"
                          MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleCloseMenu}
                          TransitionComponent={Fade}
                        >
                          <MenuItem disabled={ItemInfoU.length === 0}>
                            <NavLink to={`/ItemFormUpdate/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                              <EditIcon />
                              <Typography>Edit</Typography>
                            </NavLink>
                          </MenuItem>
                          <Divider />
                          <MenuItem>
                            <NavLink to={`/ItemFormClone/${row._id}`} className='LinkName' style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'gray' }}>
                              <FileCopy />
                              <Typography>Clone</Typography>
                            </NavLink>
                          </MenuItem>
                          <Divider />
                          <MenuItem onClick={() => { handleShow(2); handleCloseMenu(); }}> <span style={{ color: 'gray' }}>Comments</span> </MenuItem>
                          <MenuItem onClick={() => { handleShow(3); handleCloseMenu(); }}><span style={{ color: 'gray' }}>History</span></MenuItem>
                        </Menu>
                      </div>
                      <Box sx={{ width: '100%' }}>
                        <TabContext
                          value={value3}
                        >
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                              onChange={handleChange3}
                              aria-label="lab API tabs example"
                              sx={{
                                '& .MuiTabs-indicator': {
                                  backgroundColor: 'white',
                                  height: '0px'
                                }
                              }}
                            >
                              <Tab
                                label="Overview"
                                value="1"
                                sx={{
                                  '&.Mui-selected': {
                                    color: 'white',
                                    backgroundColor: 'gray',
                                    borderRadius: '10px'
                                  }, '&:hover': {
                                    color: 'gray',
                                    bgcolor: 'white',
                                    border: '1px solid gray',
                                    borderRadius: '10px'
                                  }
                                }}
                              />
                              <Tab
                                label="In-Summary"
                                value="2"
                                sx={{
                                  '&.Mui-selected': {
                                    color: 'white',
                                    backgroundColor: 'gray',
                                    borderRadius: '10px'
                                  }, '&:hover': {
                                    color: 'gray',
                                    bgcolor: 'white',
                                    border: '1px solid gray',
                                    borderRadius: '10px'
                                  }
                                }}
                              />
                              <Tab
                                label="Out-Summary"
                                value="3"
                                sx={{
                                  '&.Mui-selected': {
                                    color: 'white',
                                    backgroundColor: 'gray',
                                    borderRadius: '10px'
                                  }, '&:hover': {
                                    color: 'gray',
                                    bgcolor: 'white',
                                    border: '1px solid gray',
                                    borderRadius: '10px'
                                  }
                                }}
                              />
                              <Tab
                                label="Return-Summary"
                                value="4"
                                sx={{
                                  '&.Mui-selected': {
                                    color: 'white',
                                    backgroundColor: 'gray',
                                    borderRadius: '10px'
                                  }, '&:hover': {
                                    color: 'gray',
                                    bgcolor: 'white',
                                    border: '1px solid gray',
                                    borderRadius: '10px'
                                  }
                                }}
                              />
                              <Tab
                                label="Total-Summary"
                                value="5"
                                sx={{
                                  '&.Mui-selected': {
                                    color: 'white',
                                    backgroundColor: 'gray',
                                    borderRadius: '10px'
                                  }, '&:hover': {
                                    color: 'gray',
                                    bgcolor: 'white',
                                    border: '1px solid gray',
                                    borderRadius: '10px'
                                  }
                                }}
                              />
                            </TabList>
                          </Box>
                          <TabPanel value="1" sx={{ height: 'calc(100vh - 230px)', overflow: 'hidden', overflowY: 'scroll' }}>
                            <div>

                              <Card sx={{ marginBottom: '20px' }}>
                                <CardContent sx={{ width: "100%" }}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', fontSize: '20px', marginBottom: '5px' }}>
                                    <table style={{ marginBottom: '5px' }}>
                                      <tbody>
                                        <tr>
                                          <th align='left' style={{ height: '30px' }}><span >Name</span></th>
                                          <td><span style={{ color: 'gray' }}>{row.itemName.toUpperCase()}</span></td>
                                        </tr>
                                        <tr>
                                          <th align='left' style={{ height: '30px' }}><span >Store</span></th>
                                          <td><span style={{ color: 'gray' }}>{row.itemStore.toUpperCase()}</span></td>
                                        </tr>
                                        <tr>
                                          <th align='left' style={{ height: '30px' }}><span >Category</span></th>
                                          <td><span style={{ color: 'gray' }}>{row.itemCategory.toUpperCase()}</span></td>
                                        </tr>
                                        <tr>
                                          <th align='left' style={{ height: '30px' }}><span >Brand</span></th>
                                          <td style={{ color: 'gray' }}><span>{row.itemBrand.toUpperCase()}</span></td>
                                        </tr>
                                        <tr>
                                          <th align='left' style={{ height: '30px' }}><span >Item #</span></th>
                                          <td style={{ color: 'gray' }}><span>{row.itemUpc.newCode}</span>-<span>{String(row.itemUpc.itemNumber).padStart(6, '0')}</span></td>
                                        </tr>
                                        <tr>
                                          <th align='left' style={{ height: '30px' }}><span >Action</span></th>
                                          <td style={{ color: 'gray' }}>   <DeleteTooltip title="Delete-Image">
                                            <span>                  <IconButton disabled={user.data.role !== 'CEO'} onClick={handleDeleteImage}>
                                              <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                            </IconButton>
                                            </span>
                                          </DeleteTooltip></td>
                                        </tr>

                                      </tbody>
                                    </table>
                                    <div style={{ height: '250px', width: '500px' }}>
                                      <div style={{ width: '100%' }}>
                                        {
                                          loadingData1 ? <div>
                                            <Loader />
                                          </div> :
                                            <div>
                                              {
                                                imagesURL !== null ?
                                                  (
                                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                      <img src={imagesURL} alt={row.itemName} style={{ maxWidth: '100%', maxHeight: '250px', objectFit: 'contain' }} />
                                                    </div>
                                                  )
                                                  : (
                                                    <>
                                                      {uploadedImage ?
                                                        <>
                                                          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                                                            <img width={400} height={200} src={uploadedImage} />
                                                            <BlackTooltip title="Clear" placement='left' style={{ position: 'absolute' }}>
                                                              <IconButton onClick={handleShowInput} style={{ position: 'relative', float: 'right' }}>
                                                                <RemoveCircleOutline style={{ color: '#202a5a' }} />
                                                              </IconButton>
                                                            </BlackTooltip>
                                                          </div>
                                                          <br />
                                                          <button type='submit' className='btnCustomer6' onClick={handleImageSubmit}>Upload</button>
                                                        </>

                                                        : <input onChange={handleBase64} type='file' />
                                                      }
                                                    </>
                                                  )
                                              }
                                            </div>
                                        }
                                      </div>
                                    </div>
                                  </div>
                                  <div style={{ display: 'flex', gap: '15px', padding: '20px', justifyContent: 'space-between', fontSize: '20px', marginTop: '5px' }}>
                                    <table>
                                      <tbody>
                                        <tr>
                                          <th align='left' style={{ height: '30px' }}><span >Manufacturer</span></th>
                                          <td><span style={{ color: 'gray' }}>{row.itemManufacturer.toUpperCase()}</span></td>
                                        </tr>
                                      </tbody>
                                      <tbody>
                                        {
                                          row.itemDimension ? (
                                            <tr>
                                              <th align='left' style={{ height: '30px' }}><span >Dimension</span></th>
                                              <td style={{ color: 'gray' }}><span>{row.itemDimension}</span><span> MTR</span></td>
                                            </tr>
                                          ) : <tr>
                                            <th align='left' style={{ height: '30px' }}><span >Dimension</span></th>
                                            <td style={{ color: 'gray' }}><span>0</span><span>MTR</span></td>
                                          </tr>
                                        }
                                      </tbody>
                                      <tbody>
                                        <tr>
                                          <th align='left' ><span >Cost Unit Price</span></th>
                                          <td hidden={user.data.role !== 'CEO'} style={{ color: 'gray' }}><span data-prefix >$</span>{row.itemCostPrice}</td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <table >
                                      <tbody>
                                        <tr>
                                          <th align='left' style={{ height: '30px' }}><span >Unit</span></th>
                                          <td style={{ color: 'gray' }}><span>{row.unit.toUpperCase()}</span></td>
                                        </tr>
                                      </tbody>
                                      <tbody>
                                        {
                                          row.itemWeight ? (
                                            <tr>
                                              <th align='left' style={{ height: '30px' }}><span >Weight</span></th>
                                              <td style={{ color: 'gray' }}><span>{row.itemWeight}</span><span> Kg</span></td>
                                            </tr>
                                          ) : <tr>
                                            <th align='left' style={{ height: '30px' }}><span >Weight</span></th>
                                            <td style={{ color: 'gray' }}><span>{0}</span><span> Kg</span></td>
                                          </tr>
                                        }
                                      </tbody>
                                      <tbody>
                                        <tr>
                                          <th align='left'><span >Sale Unit Price</span></th>
                                          <td style={{ color: 'gray' }}><span data-prefix >$</span>{row.itemSellingPrice}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div style={{ padding: '20px', fontSize: '20px' }}>
                                    <table >
                                      <tbody>
                                        <tr>
                                          <th align='left' style={{ height: '30px' }}><span >Stock</span></th>
                                          <td align='left' style={{ color: 'gray', textAlign: 'left' }}> {row.itemQuantity} {completed === true ? <> {row.itemQuantity !== stock ? <button onClick={fetchStock} className='btnCustomer'>  sync</button> : ''}</> : ""} </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table >
                                      <tbody>
                                        <tr>
                                          <th align='left' style={{ height: '30px' }}><span >Description</span></th>
                                          <td>
                                            <pre style={{ display: 'inline-block', fontFamily: 'system-ui', width: '100%', lineHeight: '20px', color: 'gray' }}>{row.itemDescription.toUpperCase()}</pre>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </CardContent>
                              </Card>

                            </div>
                          </TabPanel>
                          <TabPanel value="2" sx={{ height: 'calc(100vh - 230px)', overflow: 'hidden', overflowY: 'scroll' }}>
                            <Card>
                              <CardContent>
                                <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                  <Card sx={{ position: 'relative', width: '200px', backgroundColor: '#202a5a', color: 'white', marginBottom: '10px', textAlign: 'center' }}>
                                    <CardContent>
                                      <Typography sx={{ textAlign: 'center', width: '100%' }}>Total Purchase: {totalPurChaseTotal !== undefined ? totalPurChaseTotal : 0}</Typography>
                                    </CardContent>
                                  </Card>
                                  <Card hidden={user.data.role !== 'CEO'}>
                                    <CardContent>
                                      <PieChart series={[{
                                        data: [
                                          {
                                            "id": 1,
                                            "label": "Quantity Buy",
                                            "value": totalBuyPurChaseTotal,
                                          },
                                          {
                                            "id": 2,
                                            "label": "Total Cost",
                                            "value": totalPurChaseTotalAmount,
                                          },
                                          {
                                            "id": 3,
                                            "label": "Average Cost",
                                            "value": averageCost,
                                          }
                                        ], innerRadius: 80
                                      }]} {...size}>
                                        <PieCenterLabel >Average Cost ${averageCost}</PieCenterLabel>
                                      </PieChart>
                                    </CardContent>
                                  </Card>
                                </section>

                                <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                                  <TextField
                                    label='search'
                                    id='search'
                                    value={search}
                                    variant="standard"
                                    onChange={handleSearch}
                                  />
                                </section>
                                <table className="secondTable" style={{ fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD', width: '100%' }}>
                                  <thead>
                                    <tr>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Manufacturer</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Reference</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>reason</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Rate</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Qty</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      newArray.map((row) => (
                                        <tr key={row._id}>
                                          <td style={{ textAlign: 'left', width: '30px' }}>{row.itemPurchaseNumber}</td>
                                          <td style={{ textAlign: 'left', width: '30px', borderLeft: '1px solid #DDD' }}>{dayjs(row.itemPurchaseDate).format('DD/MM/YYYY')}</td>
                                          <td style={{ textAlign: 'left', width: '100px', borderLeft: '1px solid #DDD' }}>{row.manufacturer}</td>
                                          <td style={{ textAlign: 'left', width: '50px', borderLeft: '1px solid #DDD' }}>{row.manufacturerNumber}</td>
                                          <td style={{ textAlign: 'left', width: '250px', borderLeft: '1px solid #DDD' }}>{row.projectName !== undefined ? row.projectName.name : row.description}</td>
                                          <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                            {row.items.filter(Item => parseFloat(Item.itemQty) >= 0).map((Item, i) => (
                                              <p key={i}>
                                                <span>${Item.itemRate}</span>
                                              </p>
                                            ))}
                                          </td>
                                          <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                            {row.items.filter(Item => Item.itemName?._id === id).map((Item, i) => (
                                              <p key={i}>
                                                <span>{Item.itemQty}</span>
                                              </p>
                                            ))}
                                          </td>
                                          <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                            <ViewTooltip title="View">
                                              <span>
                                                <IconButton onClick={() => handleOpenView(row._id)}>
                                                  <VisibilityIcon style={{ color: '#202a5a' }} />
                                                </IconButton>
                                              </span>
                                            </ViewTooltip>
                                          </td>
                                        </tr>
                                      ))
                                    }
                                  </tbody>
                                </table>
                              </CardContent>
                            </Card>
                          </TabPanel>
                          <TabPanel value="3" sx={{ height: 'calc(100vh - 230px)', overflow: 'hidden', overflowY: 'scroll' }}>
                            <Card>
                              <CardContent>
                                <Card sx={{ position: 'relative', width: '200px', backgroundColor: '#202a5a', color: 'white', marginBottom: '10px', textAlign: 'center' }}>
                                  <CardContent>
                                    <Typography sx={{ textAlign: 'center', width: '100%' }}>Total Out: {totalOutTotal !== undefined ? totalOutTotal : 0}</Typography>
                                  </CardContent>
                                </Card>
                                <section style={{ position: 'relative', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                  <TextField
                                    label='search'
                                    id='search2'
                                    value={search2}
                                    variant="standard"
                                    onChange={handleSearch2}
                                  />
                                </section>
                                <table className="secondTable" style={{ fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD', width: '100%' }}>
                                  <thead>
                                    <tr>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>reason</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Description</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Qty</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      newArray2.map((row) => (
                                        <tr key={row._id}>
                                          <td style={{ textAlign: 'left', width: '30px' }}>{row.outNumber}</td>
                                          <td style={{ textAlign: 'left', width: '30px', borderLeft: '1px solid #DDD' }}>{dayjs(row.itemOutDate).format('DD/MM/YYYY')}</td>
                                          <td style={{ textAlign: 'left', width: '100px', borderLeft: '1px solid #DDD' }}>{row.reason}</td>
                                          <td style={{ textAlign: 'left', width: '250px', borderLeft: '1px solid #DDD' }}>
                                            {row.reason === 'Project' ? (() => {
                                              const proj = projectsList.find(p => p._id === row.reference?._id);
                                              return proj ? `P-${String(proj.projectNumber).padStart(6, '0')} / ${row.reference?.referenceName || ''}` : (row.reference !== undefined ? row.reference.referenceName : '');
                                            })() : (row.reference !== undefined ? row.reference.referenceName : '')}
                                          </td>
                                          <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                            {row.itemsQtyArray.map((Item, i) => (
                                              <p key={i}>
                                                <span>{Item.newItemOut}</span>
                                              </p>
                                            ))}
                                          </td>
                                          <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                            {row.reason !== 'Shop' && (
                                              <ViewTooltip title="View">
                                                <span>
                                                  <IconButton onClick={() => handleOpenView2(row._id)}>
                                                    <VisibilityIcon style={{ color: '#202a5a' }} />
                                                  </IconButton>
                                                </span>
                                              </ViewTooltip>
                                            )}
                                          </td>
                                        </tr>
                                      ))
                                    }
                                  </tbody>
                                </table>
                              </CardContent>
                            </Card>
                          </TabPanel>
                          <TabPanel value="4" sx={{ height: 'calc(100vh - 230px)', overflow: 'hidden', overflowY: 'scroll' }}>
                            <Card>
                              <CardContent>
                                <Card sx={{ position: 'relative', width: '200px', backgroundColor: '#202a5a', color: 'white', marginBottom: '10px', textAlign: 'center' }}>
                                  <CardContent>
                                    <Typography sx={{ textAlign: 'center', width: '100%' }}>Total Return: {totalReturnTotal !== undefined ? totalReturnTotal : 0}</Typography>
                                  </CardContent>
                                </Card>
                                <section style={{ position: 'relative', float: 'right', padding: '10px' }}>
                                  <TextField
                                    label='search'
                                    id='search2'
                                    value={search3}
                                    variant="standard"
                                    onChange={handleSearch3}
                                  />
                                </section>
                                <table className="secondTable" style={{ fontSize: '80%', marginBottom: '5px', border: '1px solid #DDD', width: '100%' }}>
                                  <thead>
                                    <tr>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>#</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Date</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>reason</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}>Description</th>
                                      <th style={{ padding: '10px', border: '1px solid #DDD', backgroundColor: '#e8f7fe' }}> Qty</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      newArray3.map((row) => (
                                        <tr key={row._id}>
                                          <td style={{ textAlign: 'left', width: '60px' }}>{row.outNumber}</td>
                                          <td style={{ textAlign: 'left', width: '30px', borderLeft: '1px solid #DDD' }}>{dayjs(row.itemOutDate).format('DD/MM/YYYY')}</td>
                                          <td style={{ textAlign: 'left', width: '100px', borderLeft: '1px solid #DDD' }}>{row.reason}</td>
                                          <td style={{ textAlign: 'left', width: '200px', borderLeft: '1px solid #DDD' }}>
                                            {row.reason === 'Project' ? (() => {
                                              const proj = projectsList.find(p => p._id === row.reference?._id);
                                              return proj ? `P-${String(proj.projectNumber).padStart(6, '0')} / ${row.reference?.referenceName || ''}` : (row.reference !== undefined ? row.reference.referenceName : '');
                                            })() : (row.reference !== undefined ? row.reference.referenceName : '')}
                                          </td>
                                          <td style={{ textAlign: 'left', width: '40px', borderLeft: '1px solid #DDD' }}>
                                            {row.itemsQtyArray.map((Item, i) => (
                                              <p key={i}>
                                                <span>{Item.newItemOut}</span>
                                              </p>
                                            ))}
                                          </td>
                                        </tr>
                                      ))
                                    }
                                  </tbody>
                                </table>
                              </CardContent>
                            </Card>
                          </TabPanel>
                          <TabPanel value="5" sx={{ height: 'calc(100vh - 230px)', overflow: 'hidden', overflowY: 'scroll' }}>
                            <Card sx={{ position: 'relative', top: '90px' }}>
                              <CardContent>
                                <Typography sx={{ textAlign: 'center', color: 'gray' }}>Summary</Typography>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                  <PieChart
                                    colors={palette}
                                    series={[
                                      {
                                        arcLabel: (item) => `${item.label}(${item.value})`,
                                        arcLabelMinAngle: 35,
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                        data: [
                                          {
                                            "id": 1,
                                            "label": "I-Purchase",
                                            "value": totalPurchase,
                                          },
                                          {
                                            "id": 2,
                                            "label": "I-Out",
                                            "value": totalGeneralOut,
                                          },
                                          {
                                            "id": 3,
                                            "label": "Stock",
                                            "value": stock,
                                          }
                                        ],
                                      },
                                    ]}
                                    width={450}
                                    height={250}
                                    sx={{
                                      [`& .${pieArcLabelClasses.root}`]: {
                                        fill: 'white',
                                        fontWeight: 'bold',
                                      },
                                    }}
                                  />
                                </div>
                              </CardContent>
                            </Card>
                          </TabPanel>
                        </TabContext>
                      </Box>


                    </div>
                  ))
                  }
                </div>
              )}
            </div>
          </div>
        </Grid>
        {show === 2 ?
          <Grid item xs={3}>
            <div className='itemInfoContainer2'>
              <div style={{ padding: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <p>COMMENTS</p>
                  <ViewTooltip title="Close" placement='left'>
                    <IconButton onClick={() => handleShow(1)} style={{ position: 'relative', float: 'right' }}>
                      <Close style={{ color: '#202a5a' }} />
                    </IconButton>
                  </ViewTooltip>
                </div>
                <form onSubmit={handleSubmitEdit}>
                  <Grid container style={{ alignItems: 'center' }} spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        id="Message"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        multiline
                        rows={4}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <button type="submit" className='btnCustomer'>Post Comment</button>
                    </Grid>
                  </Grid>
                </form>
                <br />
                <div style={{ height: 'calc(100vh - 230px)', overflow: 'hidden', overflowY: 'scroll' }}>
                  {Comments1.map((row, i) => (
                    <div key={i} style={{ display: 'flex', gap: '20px', padding: '10px', borderBottom: '1px solid #DDD' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        {row.CommentInfo.person.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <Typography sx={{ fontWeight: 'bold' }}>{row.CommentInfo.person}</Typography>
                        <Typography sx={{ color: 'gray', fontSize: '12px' }}>{dayjs(row.dateComment).format('DD MMMM YYYY [at] HH:mm')}</Typography>
                        <pre style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap' }}>{row.CommentInfo.reason}</pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Grid>
          : ''
        }
        {show === 3 ?
          <Grid item xs={3}>
            <div className='itemInfoContainer2'>
              <div style={{ padding: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <p>HISTORY</p>
                  <ViewTooltip title="Close" placement='left'>
                    <IconButton onClick={() => handleShow(1)} style={{ position: 'relative', float: 'right' }}>
                      <Close style={{ color: '#202a5a' }} />
                    </IconButton>
                  </ViewTooltip>
                </div>
                <div style={{ height: '600px', overflow: 'hidden', overflowY: 'scroll' }}>
                  {notification.map((row, i) => (
                    <div key={i} style={{ display: 'flex', gap: '20px', padding: '10px', borderBottom: '1px solid #DDD' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#202a5a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        {row.person.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <Typography sx={{ fontWeight: 'bold' }}>{row.person}</Typography>
                        <Typography sx={{ color: 'gray', fontSize: '12px' }}>{dayjs(row.dateNotification).format('DD MMMM YYYY [at] HH:mm')}</Typography>
                        <Typography>{row.notification}</Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Grid>
          : ''
        }
      </Grid>
      <Modal
        open={loadingOpenModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}
        >
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
              <h2> Data Saved successfully</h2>
              <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                <button onClick={handleClose} className='btnCustomer'>
                  Close
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={ErrorOpenModal}
        onClose={handleCloseError}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}
        >
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CancelIcon style={{ color: 'red', height: '40px', width: '40px' }} /></p>
              <h2> Data Failed to Saved</h2>
              <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>
              <br />
              <button className='btnCustomer' onClick={handleCloseError}>
                Try Again
              </button>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={loadingOpenModalPicture}
        onClose={handleClosePicture}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}
        >
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
              <h2> Image Saved successfully</h2>
              <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                <button onClick={handleClosePicture} className='btnCustomer'>
                  Close
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={loadingOpenModalDelete}
        onClose={handleCloseDelete}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}
        >
          {loading ? (<Loader />
          ) : (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <p><CheckCircleIcon style={{ color: 'green', height: '40px', width: '40px' }} /></p>
              <h2> Image Deleted successfully</h2>
              <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
                <button onClick={handleCloseDelete} className='btnCustomer'>
                  Close
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={openView}
        onClose={handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 900 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseView} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          {
            itemPurchaseView !== null ?
              <div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span>{itemPurchaseView.Create.person} </span><span>IP-{itemPurchaseView.itemPurchaseNumber}</span> on <span>{itemPurchaseView.Create.dateComment}</span>
                </Typography>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                  <Grid container style={{ alignItems: 'center' }} spacing={2}>

                    <Grid item xs={12}>
                      <Box sx={{ height: 600, width: '100%' }}>
                        <Table style={{ marginBottom: '5px' }}>
                          <TableBody>
                            <TableRow>
                              <TableCell>Expense Date</TableCell>
                              <TableCell colSpan={3}>{dayjs(itemPurchaseView.itemPurchaseDate).format('DD/MM/YYYY')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Description</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.projectName !== undefined ? itemPurchaseView.projectName.name : itemPurchaseView.description}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Reference</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.manufacturer + ' / ' + itemPurchaseView.manufacturerNumber}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Note</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView.note}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <TableContainer sx={{ maxHeight: 400, marginBottom: '5px' }}>
                          <Table aria-label="collapsible table" stickyHeader>
                            <TableHead>
                              <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Item</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>Price($)</TableCell>
                                <TableCell>Amount Paid(FC)</TableCell>
                                <TableCell>Rate </TableCell>
                                <TableCell>Amount Paid($)</TableCell>
                                <TableCell>Total($)</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                itemPurchaseView.items.filter(row => parseFloat(row.itemQty) > 0 || row.newDescription !== undefined).map((row, i) => (
                                  <TableRow key={row.idRow}>
                                    {
                                      row.newDescription !== undefined ?
                                        <TableCell colSpan={9} align="center" sx={{ fontWeight: 'bold' }}>{row.newDescription}</TableCell>
                                        :
                                        <>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{i + 1}</TableCell>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemName?.itemName} </TableCell>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemDescription}</TableCell>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemQty}</TableCell>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{parseFloat(row.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>FC{row.totalAmountFC !== undefined ? parseFloat(row.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.Taux !== undefined ? parseFloat(row.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>${parseFloat(row.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.fcConvertToUsdTotal !== undefined ? parseFloat(row.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                                        </>
                                    }
                                  </TableRow>
                                ))
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell colSpan={2}>Total</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>FC{itemPurchaseView.totalFC !== undefined ? parseFloat(itemPurchaseView.totalFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>${itemPurchaseView.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                              <TableCell colSpan={2} sx={{ textAlign: 'right' }}>${itemPurchaseView.totalUSD !== undefined ? parseFloat(itemPurchaseView.totalUSD).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              : null
          }

        </Box>
      </Modal>
      <Modal
        open={openView2}
        onClose={handleCloseView2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 850 }}>
          <ViewTooltip title="Close" placement='left'>
            <IconButton onClick={handleCloseView2} style={{ position: 'relative', float: 'right' }}>
              <Close style={{ color: '#202a5a' }} />
            </IconButton>
          </ViewTooltip>
          {
            itemPurchaseView2 !== null ?
              <div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span>{itemPurchaseView2.Create.person} </span><span> Create O-0{itemPurchaseView2.outNumber}</span> on <span>{itemPurchaseView2.Create.dateComment}</span>
                </Typography>
                <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                  <Grid container style={{ alignItems: 'center', padding: '15px' }} spacing={2}>

                    <Grid item xs={12}>
                      <Box sx={{ height: 600, width: '100%' }}>
                        <Table style={{ marginBottom: '5px' }}>
                          <TableBody>
                            <TableRow>
                              <TableCell>Return Date</TableCell>
                              <TableCell colSpan={3}>{dayjs(itemPurchaseView2.itemOutDate).format('DD/MM/YYYY')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Reason</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView2.reason !== undefined ? itemPurchaseView2.reason : ''}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Reference</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView2.reference !== undefined ? itemPurchaseView2.reference.referenceName : ''}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Description</TableCell>
                              <TableCell colSpan={3}>{itemPurchaseView2.description !== undefined ? itemPurchaseView2.description : ''}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <TableContainer sx={{ maxHeight: 400, marginBottom: '5px' }}>
                          <Table aria-label="collapsible table" stickyHeader>
                            <TableHead>
                              <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Item</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Qty</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                itemPurchaseView2.itemsQtyArray.filter((row) => parseFloat(row.newItemOut) > 0 || row.newDescription !== undefined).map((row, i) => (
                                  <TableRow key={row.idRow}>
                                    {
                                      row.newDescription !== undefined ?
                                        <TableCell colSpan={4} align="center" sx={{ fontWeight: 'bold' }}>{row.newDescription}</TableCell>
                                        :
                                        <>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{i + 1}</TableCell>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemName?.itemName}</TableCell>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.itemDescription}</TableCell>
                                          <TableCell sx={id === row.itemName?._id ? { backgroundColor: '#202a5a', color: 'white' } : null}>{row.newItemOut}</TableCell>
                                        </>
                                    }

                                  </TableRow>
                                ))
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              : null
          }

        </Box>
      </Modal>
    </>
  )
}

export default ItemInformationVIew

