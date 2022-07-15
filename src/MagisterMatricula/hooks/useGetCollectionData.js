import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../../api/firebase-config';

export const useGetCollectionData = (collectionName, setData) => {

    const collectionRef = collection(db, `${collectionName}`);

    useEffect(() => {

        const getData = async () => {
            const data = await getDocs(collectionRef);

            let auxArray = [];

            data.docs.map(doc => (
                auxArray.push(doc.data())

            ))

            setData(auxArray);
        }

        getData();
    }, [collectionName])
}
