import { initializeApp } from 'firebase/app';
import { getFirestore, updateDoc, doc, deleteDoc, collection, addDoc, getDocs } from 'firebase/firestore'; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBIL2rfXnAg34IUexksMM5y-gITLbD3LtM",
    authDomain: "parcial3-ed5d5.firebaseapp.com",
    projectId: "parcial3-ed5d5",
    storageBucket: "parcial3-ed5d5.firebasestorage.app",
    messagingSenderId: "690934854283",
    appId: "1:690934854283:web:9a1bef3eb7f401c5145a8e"
  };

  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getInfo = async () => {
	try {
		const snapshot = await getDocs(collection(db, 'campos'));
		const campos: DataShapeRecord[] = [];
		snapshot.forEach((doc) => {
			const data = doc.data() as Omit<DataShapeRecord, 'id'>;
			campos.push({ id: doc.id, ...data });
		});
		return campos;
	} catch (error) {
		console.error('Error fetching campos:', error);
		alert('Error fetching campos');
		return [];
	}
};

export const deleteInfo = async (campoId: string): Promise<void> => {
	try {
		const recordRef = doc(db, 'campos', campoId); // Referencia al documento
		await deleteDoc(recordRef); // Eliminar el documento
		console.log('Registro eliminado exitosamente');
	} catch (error) {
		console.error('Error eliminando el registro:', error);
		throw new Error('Error eliminando el registro');
	}
};

export default {  };