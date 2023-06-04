// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, FlatList } from "react-native";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

// export default function TutorList() {
//   const [tutors, setTutors] = useState([]);

//   useEffect(() => {
//     fetchTutors();
//   }, []);

//   const fetchTutors = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "Get a tutor Info"));
//       const tutorData = querySnapshot.docs.map((doc) => doc.data());
//       setTutors(tutorData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const renderTutorItem = ({ item }) => (
//     <View style={styles.tutorItem}>
//       <Text style={styles.tutorIndex}>Name:</Text>
//       <Text style={styles.tutorDetails}>{item.Name}</Text>

//       <Text style={styles.tutorIndex}>Matric Number:</Text>
//       <Text style={styles.tutorDetails}>{item.Matricnumber}</Text>

//       <Text style={styles.tutorIndex}>Email:</Text>
//       <Text style={styles.tutorDetails}>{item.Email}</Text>

//       <Text style={styles.tutorIndex}>Study Level:</Text>
//       <Text style={styles.tutorDetails}>{item.Studylevel}</Text>

//       <Text style={styles.tutorIndex}>Subject Name:</Text>
//       <Text style={styles.tutorDetails}>{item.Subjectname}</Text>

//       <Text style={styles.tutorIndex}>Time Slot:</Text>
//       <Text style={styles.tutorDetails}>{item.Timeslot}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Student's List</Text>
//       {tutors.length > 0 ? (
//         <FlatList
//           data={tutors}
//           renderItem={renderTutorItem}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       ) : (
//         <Text>No tutors found.</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E3BC9A",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   tutorItem: {
//     backgroundColor: "#FFFFFF",
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     flexDirection: "row",
//   },
//   tutorIndex: {
//     fontWeight: "bold",
//     width: 120,
//   },
//   tutorDetails: {
//     flex: 1,
//   },
// });

////
// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, FlatList } from "react-native";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

// export default function TutorList() {
//   const [tutors, setTutors] = useState([]);

//   useEffect(() => {
//     fetchTutors();
//   }, []);

//   const fetchTutors = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "Get a tutor Info"));
//       const tutorData = querySnapshot.docs.map((doc) => doc.data());
//       setTutors(tutorData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const renderTutorItem = ({ item, index }) => (
//     <View style={styles.tutorItem}>
//       <Text style={styles.tutorIndex}>{index + 1}.</Text>
//       <Text style={styles.tutorIndex}>Name: {item.Name}</Text>
//       <Text style={styles.tutorDetails}>
//         Matric Number: {item.Matricnumber} | Email: {item.Email} | Study Level: {item.Studylevel} | Subject Name: {item.Subjectname} | Time Slot: {item.Timeslot}
//       </Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Student's List</Text>
//       {tutors.length > 0 ? (
//         <FlatList
//           data={tutors}
//           renderItem={renderTutorItem}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       ) : (
//         <Text>No tutors found.</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E3BC9A",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   tutorItem: {
//     backgroundColor: "#FFFFFF",
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   tutorIndex: {
//     fontWeight: "bold",
//     marginRight: 10,
//   },
//   tutorDetails: {
//     flex: 1,
//   },
// });
//
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function TutorsList() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetchTutors();
  }, []);

  const fetchTutors = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Be a tutor Info"));
      const tutorData = querySnapshot.docs.map((doc) => doc.data());
      setTutors(tutorData);
    } catch (error) {
      console.log(error);
    }
  };

  const renderTutorItem = ({ item, index }) => (
    <View style={styles.tutorItem}>
      <Text style={styles.tutorIndex}>{index + 1}.</Text>
      <View style={styles.tutorDetails}>
        <Text style={styles.tutorName}>Name: {item.Name}</Text>
        <Text>Id Number: {item.Idnumber}</Text>
        <Text>Matric Number: {item.Matricnumber}</Text>
        <Text>Email: {item.Email}</Text>
        <Text>Study Level: {item.Studylevel}</Text>
        <Text>Subject Name: {item.Subjectname}</Text>
        <Text>Time Slot: {item.Timeslot}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tutor's List</Text>
      {tutors.length > 0 ? (
        <FlatList
          data={tutors}
          renderItem={renderTutorItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No tutors found.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3BC9A",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tutorItem: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  tutorIndex: {
    fontWeight: "bold",
    marginRight: 10,
  },
  tutorDetails: {
    flex: 1,
  },
  tutorName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
//////
// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, FlatList } from "react-native";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

// export default function TutorList() {
//   const [tutors, setTutors] = useState([]);

//   useEffect(() => {
//     fetchTutors();
//   }, []);

//   const fetchTutors = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "Get a tutor Info"));
//       const tutorData = querySnapshot.docs.map((doc) => doc.data());
//       setTutors(tutorData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const renderTutorItem = ({ item }) => (
//     <View style={styles.tutorItem}>
//       <Text style={styles.tutorName}>Name: {item.Name}</Text>
//       <Text>Matric Number: {item.Matricnumber}</Text>
//       <Text>Email: {item.Email}</Text>
//       <Text>Study Level: {item.Studylevel}</Text>
//       <Text>Subject Name: {item.Subjectname}</Text>
//       <Text>Time Slot: {item.Timeslot}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Student's List</Text>
//       {tutors.length > 0 ? (
//         <FlatList
//           data={tutors}
//           renderItem={renderTutorItem}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       ) : (
//         <Text>No tutors found.</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E3BC9A",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   tutorItem: {
//     backgroundColor: "#FFFFFF",
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   tutorName: {
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
// });
////////
// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, FlatList } from "react-native";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

// export default function TutorList() {
//   const [tutors, setTutors] = useState([]);

//   useEffect(() => {
//     fetchTutors();
//   }, []);

//   const fetchTutors = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "Get a tutor Info"));
//       const tutorData = querySnapshot.docs.map((doc) => doc.data());
//       setTutors(tutorData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Student's List</Text>
//       {tutors.length > 0 ? (
//         <FlatList
//           data={tutors}
//           renderItem={({ item }) => (
//             <View style={styles.tutorItem}>
//               <Text>Name: {item.Name}</Text>
//               <Text>Matric Number: {item.Matricnumber}</Text>
//               <Text>Email: {item.Email}</Text>
//               <Text>Study Level: {item.Studylevel}</Text>
//               <Text>Subject Name: {item.Subjectname}</Text>
//               <Text>Time Slot: {item.Timeslot}</Text>
//             </View>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       ) : (
//         <Text>No tutors found.</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E3BC9A",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   tutorItem: {
//     marginBottom: 10,
//   },
// });