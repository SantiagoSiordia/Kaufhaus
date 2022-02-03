import firestore from '@react-native-firebase/firestore';

export const getCollection = async (collection: string) => {
    const querySnapshot = await firestore().collection(collection).get();

    let docs: Array<{
        id: string;
        data: any
    }> = [];
    
    querySnapshot.forEach(documentSnapshot => {
        docs = [...docs, {
            id: documentSnapshot.id,
            data: documentSnapshot.data()
        }]
    });

    return docs;
}

export const getDocument = async (collection: string, document: string) => {
    const documentSnapshot = await firestore()
        .collection(collection)
        .doc(document)
        .get();
    
    return documentSnapshot;
}