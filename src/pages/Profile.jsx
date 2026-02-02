import { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { AuthContext } from "../provider/AuthProvider";
import PageHeader from "../components/common/PageHeader";
import EditProfileModal from "../components/profile/EditProfileModal";
import ChangePasswordModal from "../components/profile/ChangePasswordModal";
import { PrimaryButton } from "../components/common/Buttons";

export default function Profile() {
  const { user, setUser } = useContext(AuthContext);

  const [editOpen, setEditOpen] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [form, setForm] = useState(user);

  const handleSaveProfile = () => {
    setUser(form); 
    setEditOpen(false);
  };

  return (
    <>
      <PageHeader title="Profile" subtitle="Your Profile Information" />

      {/* Top Section */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <img
              src={user.avatar}
              alt="avatar"
              className="h-full w-full object-cover rounded-full"
            />
          </div>

          <button
            onClick={() => setEditOpen(true)}
            className="absolute bottom-1 right-1 bg-white border rounded-full p-1 shadow"
          >
            <Icon icon="mdi:pencil" />
          </button>
        </div>

        <PrimaryButton
          className="flex items-center gap-2 border px-4 py-2 rounded-xl cursor-pointer hover:bg-red-200 transition"
          onClick={() => setPasswordOpen(true)}
        >
          <Icon icon="mdi:lock-outline" />
          Change Password
        </PrimaryButton>
      </div>

      {/* Info Card */}
      <div className="bg-white border rounded-xl p-6 max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-lg">Profile Information</h3>

          <PrimaryButton
            className="flex items-center gap-2 cursor-pointer border px-4 py-2 rounded-xl hover:bg-blue-100 transition"
            onClick={() => setEditOpen(true)}
          >
            <Icon icon="mdi:pencil-outline" />
            Edit
          </PrimaryButton>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Full Name</label>
            <input
              disabled
              value={user.name}
              className="w-full mt-1 border rounded-lg px-4 py-2 bg-gray-50"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              disabled
              value={user.email}
              className="w-full mt-1 border rounded-lg px-4 py-2 bg-gray-50"
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <EditProfileModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        form={form}
        setForm={setForm}
        onSave={handleSaveProfile}
      />

      <ChangePasswordModal
        open={passwordOpen}
        onClose={() => setPasswordOpen(false)}
      />
    </>
  );
}
