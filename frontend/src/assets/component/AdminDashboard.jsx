import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const getPlanPrice = (planName, planType) => {
  if (!planName || !planType) return "N/A";
  if (planName === "Basic" && planType === "Monthly") return "Rs. 999";
  if (planName === "Basic" && planType === "Yearly") return "Rs. 9,999";
  if (planName === "Pro" && planType === "Monthly") return "Rs. 1,499";
  if (planName === "Pro" && planType === "Yearly") return "Rs. 14,999";
  if (planName === "Elite" && planType === "Monthly") return "Rs. 1,999";
  if (planName === "Elite" && planType === "Yearly") return "Rs. 19,999";
  return "N/A";
};

function AdminDashboard() {

const navigate = useNavigate();

const [users,setUsers] = useState([]);
const [selectedUser, setSelectedUser] = useState(null);

const [stats,setStats] = useState({
  totalMembers:0,
  activeMembers:0,
  expiredMembers:0,
  totalRevenue:0,
  monthlyRevenue: {}
});

const [filterDates, setFilterDates] = useState({
  startDate: "",
  endDate: ""
});

const [showMonthly, setShowMonthly] = useState(false);

const [showForm,setShowForm] = useState(false);

const [member,setMember] = useState({
name:"",
phone:"",
email:"",
bloodGroup:"",
address:"",
age:"",
height:"",
weight:"",
planName:"Basic",
planType:"Monthly"
});


// LOAD USERS
const loadUsers = async () => {
 try {
  const res = await axios.get("http://localhost:5000/api/admin/users");
  setUsers(res.data);
 } catch(err){
  console.log(err);
 }
};

// LOAD STATS
const loadStats = async (dates) => {
 try {
  const params = {};
  if (dates?.startDate) params.startDate = dates.startDate;
  if (dates?.endDate) params.endDate = dates.endDate;
  const res = await axios.get("http://localhost:5000/api/admin/stats", { params });
  setStats(res.data);
 } catch(err){
  console.log(err);
 }
};

// 🔐 ADMIN SECURITY CHECK
useEffect(() => {

 const user = JSON.parse(localStorage.getItem("user"));

 if (!user || user.role !== "admin") {
   window.location.href = "/login";
 }

 loadUsers();
 loadStats();

}, [navigate]);


// MEMBERSHIP STATUS
const getStatus = (expiryDate)=>{

 const today = new Date();
 const expiry = new Date(expiryDate);

 const diff = Math.ceil((expiry - today)/(1000*60*60*24));

 if(diff <=0) return "Expired";
 if(diff <=3) return "Expiring Soon";

 return "Active";

};


// INPUT CHANGE
const handleChange = (e)=>{

 setMember({
 ...member,
 [e.target.name]:e.target.value
 });

};


// ADD MEMBER
const addMember = async () => {

 try {

   if (!member.name || !member.phone || !member.email || !member.bloodGroup) {
     alert("Please fill all fields");
     return;
   }

   let amount = 0;

   if(member.planName === "Basic" && member.planType === "Monthly") amount = 999;
   if(member.planName === "Basic" && member.planType === "Yearly") amount = 9999;

   if(member.planName === "Pro" && member.planType === "Monthly") amount = 1499;
   if(member.planName === "Pro" && member.planType === "Yearly") amount = 14999;

   if(member.planName === "Elite" && member.planType === "Monthly") amount = 1999;
   if(member.planName === "Elite" && member.planType === "Yearly") amount = 19999;

   await axios.post(
     "http://localhost:5000/api/admin/add-member",
     {
       name: member.name,
       phone: member.phone,
       email: member.email,
       bloodGroup: member.bloodGroup,
       address: member.address,
       age: member.age,
       height: member.height,
       weight: member.weight,
       planName: member.planName,
       planType: member.planType,
       amount: amount
     }
   );

   alert("Member Added Successfully");

   setShowForm(false);

    setMember({
     name:"",
     phone:"",
     email:"",
     bloodGroup:"",
     address:"",
     age:"",
     height:"",
     weight:"",
     planName:"Basic",
     planType:"Monthly"
   });

   loadUsers();
   loadStats();

 } catch(err){

   console.log(err.response?.data || err.message);

   alert("Error adding member");

 }

};


return(

<div className="p-10 text-slate-800 dark:text-white bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">

<h1 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
Admin Dashboard
</h1>

{/* Date Filter Bar */}
<form
  onSubmit={(e) => {
    e.preventDefault();
    loadStats(filterDates);
  }}
  className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-8 flex flex-wrap gap-4 items-end transition-colors duration-300"
>
  <div>
    <label className="block text-xs text-slate-550 dark:text-gray-400 font-semibold mb-1 uppercase tracking-wider">Start Date</label>
    <input
      type="date"
      value={filterDates.startDate}
      onChange={(e) => setFilterDates({ ...filterDates, startDate: e.target.value })}
      className="p-2 border border-slate-350 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded text-sm focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 cursor-pointer"
    />
  </div>
  <div>
    <label className="block text-xs text-slate-550 dark:text-gray-400 font-semibold mb-1 uppercase tracking-wider">End Date</label>
    <input
      type="date"
      value={filterDates.endDate}
      onChange={(e) => setFilterDates({ ...filterDates, endDate: e.target.value })}
      className="p-2 border border-slate-350 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded text-sm focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 cursor-pointer"
    />
  </div>
  <button
    type="submit"
    className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-5 py-2 rounded text-sm transition cursor-pointer shadow-[0_0_10px_rgba(140,232,30,0.2)]"
  >
    Filter Revenue
  </button>
  <button
    type="button"
    onClick={() => {
      setFilterDates({ startDate: "", endDate: "" });
      loadStats({ startDate: "", endDate: "" });
    }}
    className="bg-slate-250 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-5 py-2 rounded text-sm transition cursor-pointer"
  >
    Reset
  </button>
</form>


{/* STATS */}

<div className="grid md:grid-cols-4 gap-6 mb-10">

<div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
<h3 className="text-slate-600 dark:text-gray-400 font-medium mb-1">Total Members</h3>
<p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.totalMembers}</p>
</div>

<div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
<h3 className="text-slate-600 dark:text-gray-400 font-medium mb-1">Active Members</h3>
<p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.activeMembers}</p>
</div>

<div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
<h3 className="text-slate-600 dark:text-gray-400 font-medium mb-1">Expired Members</h3>
<p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.expiredMembers}</p>
</div>

<div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300 relative">
  <div className="flex justify-between items-center mb-1">
    <h3 className="text-slate-600 dark:text-gray-400 font-medium">Total Revenue</h3>
    <button 
      onClick={() => setShowMonthly(!showMonthly)} 
      className="text-xs bg-lime-500/10 hover:bg-lime-500/20 text-lime-500 px-2 py-1 rounded transition duration-200 cursor-pointer font-bold border border-lime-500/30"
      title="Toggle monthly breakdown"
    >
      {showMonthly ? "Hide" : "+"}
    </button>
  </div>
  <p className="text-2xl font-bold text-slate-900 dark:text-white">Rs. {stats.totalRevenue}</p>

  {showMonthly && stats.monthlyRevenue && Object.keys(stats.monthlyRevenue).length > 0 && (
    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 max-h-40 overflow-y-auto">
      {Object.entries(stats.monthlyRevenue).map(([month, rev]) => (
        <div key={month} className="flex justify-between text-xs font-semibold">
          <span className="text-slate-500 dark:text-gray-400 uppercase">{month}</span>
          <span className="text-slate-900 dark:text-white">Rs. {rev}</span>
        </div>
      ))}
    </div>
  )}
</div>

</div>


{/* ADD MEMBER BUTTON */}

<button
className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-4 py-2 rounded-lg mb-6 transition cursor-pointer shadow-[0_0_15px_rgba(140,232,30,0.3)]"
onClick={()=>setShowForm(!showForm)}
>
Add Member
</button>


{/* ADD MEMBER FORM */}

{showForm &&(

<div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-8 transition-colors duration-300">

<h2 className="text-xl mb-4 text-slate-900 dark:text-white font-semibold">
Add Member
</h2>

<div className="grid md:grid-cols-2 gap-4">

<input
type="text"
name="name"
placeholder="Name"
className="p-2 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
onChange={handleChange}
/>

<input
type="text"
name="phone"
placeholder="Phone"
className="p-2 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Email"
className="p-2 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
onChange={handleChange}
/>

<input type="text" name="address" placeholder="Address" className="p-2 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500" onChange={handleChange} />
<input type="number" name="age" placeholder="Age" className="p-2 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500" onChange={handleChange} />
<input type="number" name="height" placeholder="Height (cm)" className="p-2 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500" onChange={handleChange} />
<input type="number" name="weight" placeholder="Weight (kg)" className="p-2 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500" onChange={handleChange} />


{/* BLOOD GROUP */}

<select
name="bloodGroup"
className="p-2 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
onChange={handleChange}
>
<option value="">Select Blood Group</option>
<option value="A+">A+</option>
<option value="A-">A-</option>
<option value="B+">B+</option>
<option value="B-">B-</option>
<option value="O+">O+</option>
<option value="O-">O-</option>
<option value="AB+">AB+</option>
<option value="AB-">AB-</option>
</select>

<select
name="planName"
className="p-2 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
onChange={handleChange}
>

<option value="Basic">Basic</option>
<option value="Pro">Pro</option>
<option value="Elite">Elite</option>

</select>


<select
name="planType"
className="p-2 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
onChange={handleChange}
>

<option value="Monthly">Monthly</option>
<option value="Yearly">Yearly</option>

</select>

</div>

<button
className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 mt-4 rounded-lg cursor-pointer"
onClick={addMember}
>
Submit
</button>

</div>

)}


{/* PAYMENTS TABLE */}

<div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto mt-6 transition-colors duration-300">

<h2 className="text-xl mb-4 text-slate-900 dark:text-white font-semibold">
Membership Payments
</h2>

<table className="w-full">

<thead className="bg-slate-200 dark:bg-slate-800 text-slate-850 dark:text-gray-300">

<tr className="border-b border-slate-300 dark:border-gray-600">

<th className="p-3 text-left text-sm font-semibold text-slate-700 dark:text-lime-400">
Name
</th>

<th className="p-3 text-left text-sm font-semibold text-green-700 dark:text-green-400">
Phone
</th>

<th className="p-3 text-left text-sm font-semibold text-slate-600 dark:text-lime-500">
Blood
</th>

<th className="p-3 text-left text-sm font-semibold text-slate-500 dark:text-gray-400">
Details
</th>

<th className="p-3 text-left text-sm font-semibold text-yellow-600 dark:text-yellow-400">
Plan
</th>

<th className="p-3 text-left text-sm font-semibold text-emerald-600 dark:text-emerald-400">
Price
</th>

<th className="p-3 text-left text-sm font-semibold text-purple-600 dark:text-purple-400">
Status
</th>

<th className="p-3 text-left text-sm font-semibold text-cyan-600 dark:text-cyan-400">
Start
</th>

<th className="p-3 text-left text-sm font-semibold text-pink-600 dark:text-pink-400">
Expiry
</th>

<th className="p-3 text-center text-sm font-semibold text-slate-800 dark:text-white">
Actions
</th>

</tr>

</thead>

<tbody>

{users.map((u)=>{

const status = getStatus(u.expiryDate);

return(

<tr key={u._id} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition">

<td className="p-3 text-slate-900 dark:text-white font-semibold">
{u.name}
</td>

<td className="p-3 text-green-600 dark:text-green-400">
{u.phone || "N/A"}
</td>

<td className="p-3 text-slate-700 dark:text-lime-400 font-semibold">
{u.bloodGroup || "N/A"}
</td>

<td className="p-3 text-slate-500 dark:text-gray-400 text-xs">
{u.age ? `${u.age}y ` : ""}
{u.height ? `${u.height}cm ` : ""}
{u.weight ? `${u.weight}kg ` : ""}
<br/>
{u.address || "No Addr"}
</td>

<td className="p-3 text-yellow-600 dark:text-yellow-400 font-medium">
{u.planName ? `${u.planName} (${u.planType})` : "No Plan"}
</td>

<td className="p-3 text-emerald-650 dark:text-emerald-400 font-medium">
{getPlanPrice(u.planName, u.planType)}
</td>

<td className="p-3">

{u.membershipStatus === "Active" ? (
<span className="text-green-600 dark:text-green-400 font-semibold">Active</span>
) : status === "Active" ? (
<span className="text-green-600 dark:text-green-400 font-semibold">Active</span>
) : status === "Expiring Soon" ? (
<span className="text-yellow-600 dark:text-yellow-400 font-semibold">Expiring Soon</span>
) : (
<span className="text-red-500 dark:text-red-400 font-semibold">Inactive</span>
)}

</td>

<td className="p-3 text-cyan-600 dark:text-cyan-400">
{u.startDate ? new Date(u.startDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "N/A"}
</td>

<td className="p-3 text-pink-600 dark:text-pink-400">
{u.expiryDate ? new Date(u.expiryDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "N/A"}
</td>

<td className="p-3 text-center">
<button 
  onClick={() => setSelectedUser(u)} 
  className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-3 py-1 rounded text-xs transition cursor-pointer"
>
  View
</button>
</td>

</tr>

);

})}

</tbody>

</table>

</div>

{/* USER DETAILS MODAL */}
{selectedUser && (
  <div className="fixed inset-0 bg-black/60 dark:bg-black/80 flex items-center justify-center p-4 z-50">
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-8 rounded-xl max-w-2xl w-full shadow-2xl transition-colors duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-lime-400 uppercase tracking-wide">User Details</h2>
        <button onClick={() => setSelectedUser(null)} className="text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white text-2xl">&times;</button>
      </div>

      <div className="grid grid-cols-2 gap-6 text-sm text-slate-800 dark:text-white">
        <div>
          <p className="text-slate-500 dark:text-gray-400 mb-1">Name</p>
          <p className="font-semibold text-slate-900 dark:text-white text-lg">{selectedUser.name}</p>
        </div>
        <div>
          <p className="text-slate-500 dark:text-gray-400 mb-1">Email</p>
          <p className="font-medium">{selectedUser.email}</p>
        </div>
        <div>
          <p className="text-slate-500 dark:text-gray-400 mb-1">Phone</p>
          <p className="font-medium">{selectedUser.phone || "N/A"}</p>
        </div>
        <div>
          <p className="text-slate-500 dark:text-gray-400 mb-1">Blood Group</p>
          <p className="font-medium text-slate-900 dark:text-lime-400">{selectedUser.bloodGroup || "N/A"}</p>
        </div>
        <div>
          <p className="text-slate-500 dark:text-gray-400 mb-1">Age</p>
          <p className="font-medium">{selectedUser.age || "N/A"}</p>
        </div>
        <div>
          <p className="text-slate-500 dark:text-gray-400 mb-1">Height & Weight</p>
          <p className="font-medium">
            {selectedUser.height ? `${selectedUser.height} cm` : "N/A"} / {selectedUser.weight ? `${selectedUser.weight} kg` : "N/A"}
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-slate-500 dark:text-gray-400 mb-1">Address</p>
          <p className="font-medium">{selectedUser.address || "N/A"}</p>
        </div>

        <div>
          <p className="text-slate-500 dark:text-gray-400 mb-1">Membership</p>
          <p className="font-medium text-yellow-600 dark:text-yellow-400">
            {selectedUser.planName ? `${selectedUser.planName} (${selectedUser.planType})` : "No Plan"}
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button 
          onClick={() => setSelectedUser(null)} 
          className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 px-6 py-2 rounded text-slate-800 dark:text-white transition cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

</div>

);

}

export default AdminDashboard;