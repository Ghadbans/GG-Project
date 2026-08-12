import { v4 as originalV4 } from 'uuid';

export const v4 = () => {
    const branch = localStorage.getItem('selectedBranch') || 'HQ';
    return `${branch}_${originalV4()}`;
};

export const uuidv4 = v4;
