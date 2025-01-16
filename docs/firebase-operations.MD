The first of all, you have to import all necessary functions

    import firebaseConfig from '*path*/firebase-config.ts';
    import {
        collection,
        getFirestore,
        getDocs,
        addDoc,
        doc,
        updateDoc,
        deleteDoc
    } from 'firebase/firestore';

Then you have to define database, you can use `useEffect(() => {...}, [])` for it

    useEffect(() => {
        const database = getFirestore(cong);
    }, [])

Now you can work with `Read / Create / Update / Delete` operations. You can find
examples below:

    // ----- Read Docs -----
    getDocs(collection(database, *your_collectionName*)).then((querySnapshot) => {
        const formattedData = querySnapshot.docs.map(
            (doc) => ({ ...doc.data(), id: doc.id })
        );

        console.log(formattedData);
    });


    // ----- Create Doc -----
    const objectToAdd = { name: 'Test', age: 25 };
    addDoc(collectionRef, objectToAdd)

    // ----- Update Doc -----
    const docRef = doc(database, *your_collectionName*, *item_id*);
    updateDoc(docRef, {
        name: 'Test',
        age: 20
    });

    // ----- Delete Doc -----
    const getTestDocRef = doc(database, *your_collectionName*, *item_id*);
    deleteDoc(getTestDocRef);

Note: All those operations are async
