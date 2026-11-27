
import { useEffect, useState } from "react";
import { useAuth } from "../AuthCont";

const API = window.location.hostname == "localhost"?'http://localhost:5000': 'https://anterrastriya-kisian-union-8cdn.onrender.com'

const initialForm = {
  name: "",
  tier: "NationalMember",
  region: "",
  designation: "",
  avatar: "",
  email: "",
  phone: "",
  joinedDate: new Date().getFullYear().toString(),
  responsibilities: [],
};

const tiers = [
  "BoardMember",
  "InternationalHead",
  "InternationalMember",
  "NationalMember",
  "StateMember",
  "DistrictMember",
  "CityMember",
];

const LeadersManagement = () => {
  const [members, setMembers] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [responsibilityInput, setResponsibilityInput] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const {token} = useAuth()
  // GET ALL MEMBERS
 const fetchMembers = async () => {
  try {
    setLoading(true);

    const response = await fetch(`${API}/api/leaders`);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch leaders");
    }

    setMembers(data);

  } catch (error) {
    setMessage(error.message);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    if(token)
    {
      fetchMembers();
    }
    
  }, [token]);

  // HANDLE INPUTS
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ADD RESPONSIBILITY
  const addResponsibility = () => {
    if (!responsibilityInput.trim()) return;

    setForm((prev) => ({
      ...prev,
      responsibilities: [
        ...prev.responsibilities,
        responsibilityInput.trim(),
      ],
    }));

    setResponsibilityInput("");
  };

  const removeResponsibility = (index) => {
    setForm((prev) => ({
      ...prev,
      responsibilities: prev.responsibilities.filter(
        (_, i) => i !== index
      ),
    }));
  };

  // ADD / UPDATE MEMBER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const url = editingId
        ? `${API}/api/leaders/${editingId}`
        : `${API}/api/leaders`;

      const response = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Operation failed");
      }

      setMessage(data.message);

      setForm(initialForm);
      setEditingId(null);
      setShowForm(false);
      setResponsibilityInput("");

      await fetchMembers();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  // EDIT MEMBER
  const handleEdit = (member) => {
    setForm({
      name: member.name || "",
      tier: member.tier || "NationalMember",
      region: member.region || "",
      designation: member.designation || "",
      avatar: member.avatar || "",
      email: member.email || "",
      phone: member.phone || "",
      joinedDate: member.joinedDate || "",
      responsibilities: member.responsibilities || [],
    });

    setEditingId(member._id);
    setShowForm(true);
    setMessage("");
  };

  // DELETE MEMBER
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) {
      return;
    }

    try {
      const response = await fetch(`${API}/api/leaders/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers:{
          Authorization: token,
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Delete failed");
      }

      setMessage(data.message);
      await fetchMembers();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const filteredMembers = members.filter((member) =>
    [
      member.name,
      member.designation,
      member.region,
      member.tier,
    ].some((value) =>
      value?.toLowerCase().includes(search.toLowerCase())
    )
  );

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(initialForm);
    setResponsibilityInput("");
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-black">
            Members Management
          </h1>

          <p className="text-sm opacity-60 mt-1">
            Manage your organization's leadership directory.
          </p>
        </div>

        <button
          onClick={() => {
            closeForm();
            setShowForm(true);
          }}
          className="btn bg-green-800 text-white hover:bg-green-900"
        >
          + Add New Member
        </button>
      </div>

      {/* MESSAGE */}
      {message && (
        <div className="alert">
          <span>{message}</span>
          <button onClick={() => setMessage("")}>✕</button>
        </div>
      )}

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-base-200 rounded-2xl p-5">
          <p className="text-sm opacity-60">Total Members</p>
          <h2 className="text-3xl font-black mt-2">
            {members.length}
          </h2>
        </div>

        <div className="bg-base-200 rounded-2xl p-5">
          <p className="text-sm opacity-60">National Members</p>
          <h2 className="text-3xl font-black mt-2">
            {members.filter((m) => m.tier === "NationalMember").length}
          </h2>
        </div>

        <div className="bg-base-200 rounded-2xl p-5">
          <p className="text-sm opacity-60">Board Members</p>
          <h2 className="text-3xl font-black mt-2">
            {members.filter((m) => m.tier === "BoardMember").length}
          </h2>
        </div>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by name, designation or tier..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered w-full"
      />

      {/* ADD / EDIT FORM */}
      {showForm && (
        <div className="bg-base-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-5">
            {editingId ? "Edit Member" : "Add New Member"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid md:grid-cols-2 gap-4">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Member Name"
                className="input input-bordered w-full"
                required
              />

              <select
                name="tier"
                value={form.tier}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                {tiers.map((tier) => (
                  <option key={tier} value={tier}>
                    {tier}
                  </option>
                ))}
              </select>

              <input
                name="designation"
                value={form.designation}
                onChange={handleChange}
                placeholder="Designation"
                className="input input-bordered w-full"
                required
              />

              <input
                name="region"
                value={form.region}
                onChange={handleChange}
                placeholder="Region / Location"
                className="input input-bordered w-full"
                required
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="input input-bordered w-full"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="input input-bordered w-full"
              />

              <input
                name="joinedDate"
                value={form.joinedDate}
                onChange={handleChange}
                placeholder="Joined Year"
                className="input input-bordered w-full"
              />

              <input
                name="avatar"
                value={form.avatar}
                onChange={handleChange}
                placeholder="Image URL / Path"
                className="input input-bordered w-full"
              />

            </div>

            {/* IMAGE PREVIEW */}
            {form.avatar && (
              <img
                src={form.avatar}
                alt="Preview"
                className="w-20 h-20 rounded-xl object-cover"
              />
            )}

            {/* RESPONSIBILITIES */}
            <div>
              <label className="font-bold text-sm">
                Responsibilities
              </label>

              <div className="flex gap-2 mt-2">
                <input
                  value={responsibilityInput}
                  onChange={(e) =>
                    setResponsibilityInput(e.target.value)
                  }
                  placeholder="Enter responsibility"
                  className="input input-bordered flex-1"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addResponsibility();
                    }
                  }}
                />

                <button
                  type="button"
                  onClick={addResponsibility}
                  className="btn btn-neutral"
                >
                  Add
                </button>
              </div>

              <ul className="mt-3 space-y-2">
                {form.responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-base-100 p-3 rounded-lg"
                  >
                    <span>{item}</span>

                    <button
                      type="button"
                      onClick={() => removeResponsibility(index)}
                      className="text-red-500 font-bold"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="btn bg-green-800 text-white"
              >
                {loading
                  ? "Saving..."
                  : editingId
                  ? "Update Member"
                  : "Save Member"}
              </button>

              <button
                type="button"
                onClick={closeForm}
                className="btn btn-ghost"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      )}

      {/* MEMBERS TABLE */}
      <div className="overflow-x-auto bg-base-200 rounded-2xl">

        {loading && members.length === 0 ? (
          <p className="p-8 text-center">Loading members...</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Tier</th>
                <th>Designation</th>
                <th>Region</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <img
                        src={member.avatar || "https://placehold.co/80"}
                        alt={member.name}
                        className="w-11 h-11 rounded-full object-cover"
                      />

                      <span className="font-bold">
                        {member.name}
                      </span>
                    </div>
                  </td>

                  <td>{member.tier}</td>
                  <td>{member.designation}</td>
                  <td>{member.region}</td>
                  <td>{member.phone}</td>

                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(member)}
                        className="btn btn-xs btn-info"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(member._id)}
                        className="btn btn-xs btn-error text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredMembers.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-8">
                    No members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

      </div>
    </div>
  );
};

export default LeadersManagement;
