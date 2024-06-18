import  {useState, useEffect} from 'react';
import { fetchPrefecture } from '../api/get_Prefecture';
import { Prefecture } from '../models/Prefecture';

export const usePrefecture = () => {
    const [prefecture, setPrefecture] = useState<Prefecture[]>([]);

    useEffect(() => {
        const getPrefecture = async () => {
            const prefecture = await fetchPrefecture();
            setPrefecture(prefecture);
        };
        getPrefecture();
    }, []);


    return {prefecture};
};
