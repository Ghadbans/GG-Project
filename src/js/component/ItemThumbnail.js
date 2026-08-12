import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import axios from 'axios';
import { ENDPOINT_URL } from '../apiConfig';

const ItemThumbnail = ({ itemId, initialData, initialType }) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      // 1. Check for initialData (passed from search/shop)
      if (initialData && initialType && initialData !== "undefined" && initialType !== "undefined" && initialData !== "null") {
        if (typeof initialData === 'string' && initialData.length > 50) {
           // Check if it's already a data URL
           if (initialData.startsWith('data:')) {
              setSrc(initialData);
           } else {
              setSrc(`data:${initialType};base64,${initialData}`);
           }
           return;
        } else if (initialData.data) {
           // Handle buffer object if it's not converted to string yet
           const buffer = new Uint8Array(initialData.data);
           const blob = new Blob([buffer], { type: initialType });
           const reader = new FileReader();
           reader.onloadend = () => setSrc(reader.result);
           reader.readAsDataURL(blob);
           return;
        }
      }

      // 2. Fallback to fetch if no initial data or if it was invalid
      if (!itemId || itemId === "undefined" || itemId === "null") {
        setSrc(null);
        return;
      }

      try {
        const res = await axios.get(`${ENDPOINT_URL}/get-item/${itemId}`);
        if (res.data.data && res.data.data.data) {
          const buffer = new Uint8Array(res.data.data.data.data);
          const blob = new Blob([buffer], { type: res.data.data.contentType });
          const reader = new FileReader();
          reader.onloadend = () => setSrc(reader.result);
          reader.readAsDataURL(blob);
        } else {
          setSrc(null);
        }
      } catch (err) {
        console.error("Error fetching online image:", err);
        setSrc(null);
      }
    };
    fetchImage();
  }, [itemId, initialData, initialType]);


  return (
    <Avatar
      variant="rounded"
      src={src}
      sx={{ width: 80, height: 80, backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}
    >
      {!src && <ShoppingCartOutlinedIcon sx={{ fontSize: 40, color: '#999' }} />}
    </Avatar>
  );
};

export default ItemThumbnail;
