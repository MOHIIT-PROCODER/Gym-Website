
import React, { useState, useEffect } from "react";
import axios from "axios";

function UserDashboard(){

 const storedUser = JSON.parse(localStorage.getItem("user"));
 const [user, setUser] = useState(storedUser);
 const [payments, setPayments] = useState([]);

 useEffect(() => {
   if (storedUser?.email) {
     axios.get(`${import.meta.env.VITE_SERVER_URL || 'http://localhost:5000'}/api/auth/me/${storedUser.email}`)
       .then(res => {
         if(res.data.user) {
           setUser(res.data.user);
           localStorage.setItem("user", JSON.stringify(res.data.user));
         }
       })
       .catch(err => console.log(err));

     axios.get(`${import.meta.env.VITE_SERVER_URL || 'http://localhost:5000'}/api/payment/user/${storedUser.email}`)
       .then(res => {
         setPayments(res.data);
       })
       .catch(err => console.log(err));
   }
 }, []);

 const today = new Date();
 const expiry = user?.expiryDate ? new Date(user.expiryDate) : null;

 const daysRemaining =
  expiry ? Math.ceil((expiry - today)/(1000*60*60*24)) : null;

 // Temporary Trainer Data (later fetch from API)
 const trainer = {
  name: "Rahul Sharma",
  specialization: "Weight Training",
  phone: "9876543210"
 };

 const [showEdit, setShowEdit] = useState(false);
 const [editForm, setEditForm] = useState({
   name: user?.name || "",
   phone: user?.phone || "",
   bloodGroup: user?.bloodGroup || "",
   height: user?.height || "",
   weight: user?.weight || "",
   age: user?.age || "",
   password: ""
 });

 const handleEditChange = (e) => {
   setEditForm({ ...editForm, [e.target.name]: e.target.value });
 };

 const submitEdit = async () => {
   try {
     const res = await axios.put(`${import.meta.env.VITE_SERVER_URL || 'http://localhost:5000'}/api/auth/update-profile`, {
       email: user.email,
       ...editForm
     });
     
     localStorage.setItem("user", JSON.stringify(res.data.user));
     alert("Profile Updated Successfully!");
     setShowEdit(false);
     // refresh to show new data
     window.location.reload();
   } catch (error) {
     console.error(error);
     alert(error.response?.data?.message || "Error updating profile");
   }
 };

  return(

  <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-white p-6 md:p-10 transition-colors duration-300">

  {/* HEADER */}
  <div className="flex items-center gap-6 mb-10">

   <img
    src={
     user?.profileImage ||
     "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    }
    alt="profile"
    className="w-20 h-20 rounded-full border-2 border-lime-500 object-cover"
   />

   <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
    Welcome, <span className="text-lime-600 dark:text-[#00E676]">{user?.name}</span>
   </h1>

  </div>


  {/* MAIN GRID */}
  <div className="grid md:grid-cols-2 gap-8">

   {/* PERSONAL INFO */}
   <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg transition-colors duration-300">

    <div className="flex justify-between items-center mb-6">
     <h2 className="text-xl font-semibold text-lime-600 dark:text-[#00E676]">
      Personal Information
     </h2>
     <button onClick={() => setShowEdit(true)} className="text-sm bg-slate-200 dark:bg-gray-700 hover:bg-slate-300 dark:hover:bg-gray-600 px-3 py-1 rounded text-slate-800 dark:text-white transition cursor-pointer">
       Edit
     </button>
    </div>

    <div className="space-y-3 text-slate-600 dark:text-gray-300">

     <p><span className="text-slate-900 dark:text-white font-semibold">Name:</span> {user?.name}</p>

     <p><span className="text-slate-900 dark:text-white font-semibold">Email:</span> {user?.email}</p>

     <p><span className="text-slate-900 dark:text-white font-semibold">Phone:</span> {user?.phone}</p>

     <p><span className="text-slate-900 dark:text-white font-semibold">Address:</span> {user?.address || "Not Added"}</p>

     <p><span className="text-slate-900 dark:text-white font-semibold">Blood Group:</span> {user?.bloodGroup || "Not Added"}</p>

     <p><span className="text-slate-900 dark:text-white font-semibold">Age:</span> {user?.age || "Not Added"}</p>

     <p><span className="text-slate-900 dark:text-white font-semibold">Height:</span> {user?.height ? `${user.height} cm` : "Not Added"}</p>

     <p><span className="text-slate-900 dark:text-white font-semibold">Weight:</span> {user?.weight ? `${user.weight} kg` : "Not Added"}</p>

    </div>

   </div>


   {/* MEMBERSHIP INFO */}
   <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg transition-colors duration-300">

    <h2 className="text-xl font-semibold mb-6 text-lime-600 dark:text-[#00E676]">
     Membership Details
    </h2>

    <div className="space-y-3 text-slate-600 dark:text-gray-300">

     <p>
      <span className="text-slate-900 dark:text-white font-semibold">Plan Name:</span>
      {" "}{user?.planName || "No Plan"}
     </p>

     <p>
      <span className="text-slate-900 dark:text-white font-semibold">Plan Type:</span>
      {" "}{user?.planType || "N/A"}
     </p>

     <p>
      <span className="text-slate-900 dark:text-white font-semibold">Start Date:</span>
      {" "}
      {user?.startDate
       ? new Date(user.startDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
       : "N/A"}
     </p>

     <p>
      <span className="text-slate-900 dark:text-white font-semibold">Expiry Date:</span>
      {" "}
      {user?.expiryDate
       ? new Date(user.expiryDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
       : "N/A"}
     </p>

     <p>
      <span className="text-slate-900 dark:text-white font-semibold">Days Remaining:</span>
      {" "}
      {daysRemaining !== null
       ? daysRemaining > 0
        ? daysRemaining
        : "Expired"
       : "N/A"}
     </p>

     <p>
      <span className="text-slate-900 dark:text-white font-semibold">Membership Status:</span>
      {" "}
      <span
       className={
        user?.membershipStatus === "Active"
         ? "text-green-600 dark:text-green-500 font-medium"
         : "text-lime-600 dark:text-[#00E676] font-medium"
       }
      >
       {user?.membershipStatus}
      </span>
     </p>

     <p>
      <span className="text-slate-900 dark:text-white font-semibold">Payment Status:</span>
      {" "}
      <span
       className={
        user?.paymentStatus === "Success"
         ? "text-green-600 dark:text-green-500 font-medium"
         : "text-yellow-600 dark:text-yellow-400 font-medium"
       }
      >
       {user?.paymentStatus}
      </span>
     </p>

    </div>

   </div>

  </div>


  {/* TRAINER SECTION */}
  <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg mt-10 transition-colors duration-300">

   <h2 className="text-xl font-semibold mb-6 text-lime-600 dark:text-[#00E676]">
    Trainer Information
   </h2>

   <p className="text-slate-600 dark:text-gray-300">
    <span className="text-slate-900 dark:text-white font-semibold">Name:</span> {trainer.name}
   </p>

   <p className="text-slate-600 dark:text-gray-300">
    <span className="text-slate-900 dark:text-white font-semibold">Specialization:</span> {trainer.specialization}
   </p>

   <p className="text-slate-600 dark:text-gray-300">
    <span className="text-slate-900 dark:text-white font-semibold">Contact:</span> {trainer.phone}
   </p>

  </div>


  {/* PAYMENT HISTORY PLACEHOLDER */}
  <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg mt-10 transition-colors duration-300">

   <h2 className="text-xl font-semibold mb-6 text-lime-600 dark:text-[#00E676]">
    Payment History
   </h2>

   {payments.length > 0 ? (
     <div className="overflow-x-auto">
       <table className="w-full text-left">
         <thead className="text-slate-500 dark:text-gray-400 border-b border-slate-200 dark:border-slate-700">
           <tr>
             <th className="p-3">Plan</th>
             <th className="p-3">Amount</th>
             <th className="p-3">Method</th>
             <th className="p-3">Date</th>
             <th className="p-3">Status</th>
           </tr>
         </thead>
         <tbody>
           {payments.map(p => (
             <tr key={p._id} className="border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-gray-300">
               <td className="p-3 font-medium text-slate-900 dark:text-white">{p.planName}</td>
               <td className="p-3 text-lime-600 dark:text-[#00E676] font-medium">₹{p.amount}</td>
               <td className="p-3 capitalize">{p.method}</td>
               <td className="p-3 text-slate-500 dark:text-gray-400">{new Date(p.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</td>
               <td className="p-3 text-green-600 dark:text-green-500 font-medium">{p.status}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   ) : (
     <p className="text-slate-600 dark:text-gray-400">
      Payment records will appear here.
     </p>
   )}

  </div>

  {/* EDIT MODAL */}
  {showEdit && (
    <div className="fixed inset-0 bg-black/60 dark:bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl w-full max-w-md border border-slate-200 dark:border-slate-800 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Edit Profile</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-slate-600 dark:text-gray-400 text-sm mb-1">Name</label>
            <input type="text" name="name" value={editForm.name} onChange={handleEditChange} className="w-full p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-slate-600 dark:text-gray-400 text-sm mb-1">Phone</label>
            <input type="text" name="phone" value={editForm.phone} onChange={handleEditChange} className="w-full p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-slate-600 dark:text-gray-400 text-sm mb-1">Blood Group</label>
            <select name="bloodGroup" value={editForm.bloodGroup} onChange={handleEditChange} className="w-full p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white">
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-slate-600 dark:text-gray-400 text-sm mb-1">Age</label>
              <input type="number" name="age" value={editForm.age} onChange={handleEditChange} className="w-full p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-gray-400 text-sm mb-1">Height (cm)</label>
              <input type="number" name="height" value={editForm.height} onChange={handleEditChange} className="w-full p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-gray-400 text-sm mb-1">Weight (kg)</label>
              <input type="number" name="weight" value={editForm.weight} onChange={handleEditChange} className="w-full p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white" />
            </div>
          </div>
          <div>
            <label className="block text-slate-600 dark:text-gray-400 text-sm mb-1">New Password (Optional)</label>
            <input type="password" name="password" value={editForm.password} onChange={handleEditChange} placeholder="Leave blank to keep current" className="w-full p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white" />
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button onClick={submitEdit} className="flex-1 bg-lime-500 hover:bg-lime-600 text-black font-bold py-2 rounded transition cursor-pointer">Save</button>
          <button onClick={() => setShowEdit(false)} className="flex-1 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-slate-800 dark:text-white py-2 rounded transition cursor-pointer">Cancel</button>
        </div>
      </div>
    </div>
  )}


 </div>

 );

}

export default UserDashboard;

