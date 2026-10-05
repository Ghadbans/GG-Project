import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import axios from 'axios';
import { ENDPOINT_URL } from '../apiConfig';
import { normalizeImageDataUrl } from '../utils/formatUtils';

// In-memory module cache to avoid redundant network requests across table rows
const itemImageCache = new Map();

const ItemThumbnail = ({ itemId, initialData, initialType }) => {
  const [src, setSrc] = useState(() => {
    const initialUrl = normalizeImageDataUrl(initialData, initialType);
    if (initialUrl) {
      if (itemId) itemImageCache.set(String(itemId), initialUrl);
      return initialUrl;
    }
    if (itemId && itemImageCache.has(String(itemId))) {
      return itemImageCache.get(String(itemId));
    }
    return null;
  });

  useEffect(() => {
    let isMounted = true;
    const initialUrl = normalizeImageDataUrl(initialData, initialType);
    if (initialUrl) {
      if (itemId) itemImageCache.set(String(itemId), initialUrl);
      setSrc(initialUrl);
      return;
    }

    if (!itemId || itemId === "undefined" || itemId === "null") {
      setSrc(null);
      return;
    }

    const key = String(itemId);
    if (itemImageCache.has(key)) {
      setSrc(itemImageCache.get(key));
      return;
    }

    const fetchImage = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/get-item/${itemId}`);
        if (!isMounted) return;
        const item = res.data?.data;
        const url = normalizeImageDataUrl(item?.data, item?.contentType);
        itemImageCache.set(key, url);
        setSrc(url);
      } catch (err) {
        if (isMounted) {
          itemImageCache.set(key, null);
          setSrc(null);
        }
      }
    };
    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [itemId, initialData, initialType]);

  return (
    <Avatar
      variant="rounded"
      src={src || undefined}
      imgProps={{ onError: () => setSrc(null) }}
      sx={{ width: 80, height: 80, backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}
    >
      {!src && <ShoppingCartOutlinedIcon sx={{ fontSize: 40, color: '#999' }} />}
    </Avatar>
  );
};

export default ItemThumbnail;
