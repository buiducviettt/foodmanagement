import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContent';
import DefaultLayout from '../../layouts/Default Layout';
import axios from 'axios';
import Modal from 'react-modal';
const AccountInfo = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editUser, setEditUser] = useState({
    name: '',
    email: '',
    username: '',
  });
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://673c683296b8dcd5f3f9d8d8.mockapi.io/food/data/users/${editId}`,
        {
          id: editId,
          name: editUser.name,
          email: editUser.email,
          username: editUser.username,
        },
      );

      console.log('User updated successfully:', response.data);
      alert(' Đã cập nhật thành công');
      setOpenEditModal(false);
      setUser((prev) => ({
        ...prev,
        name: editUser.name,
        email: editUser.email,
        username: editUser.username,
      }));
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  const handleOpenEdit = (user) => {
    setOpenEditModal(true);
    setEditId(user.id);
    setEditUser({
      name: user.name,
      email: user.email,
      username: user.username,
    });
  };
  const handleClosePopupModel = () => {
    setOpenEditModal(false);
  };
  return (
    <div className="account_info_page">
      <DefaultLayout>
        <div className="account_info_page_wrapper">
          <div className="account_table">
            <div className="account_tab"></div>
            <div className="account_lists">
              <table>
                <thead>
                  <h1> Hello , {user ? user.name : ''}</h1>
                  <p>Here is your information</p>
                  <tr>
                    <th>
                      <p>Username : {user ? user.username : ''}</p>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <p>Email: {user ? user.email : ''}</p>
                    </th>
                  </tr>
                </thead>
              </table>
              <button
                className="btnn --pri w-100 mt-5"
                onClick={() => handleOpenEdit(user)}
              >
                Chỉnh sửa
              </button>
            </div>
          </div>
        </div>
        <Modal
          isOpen={openEditModal}
          onRequestClose={handleClosePopupModel}
          className="add_item_modal"
          style={{
            content: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              padding: '20px',
              borderRadius: '8px',
              display: 'flex',
              gap: '2rem',
              flexDirection: 'column',
              color: 'white',
              justifyContent: 'center',
              alignItems: 'center', // Đảm bảo nội dung bên trong được căn giữa
            },
          }}
        >
          <h1 className="add_item_modal_title">Edit User</h1>
          <div className="add_item_modal_input">
            <input
              type="text"
              name="name"
              value={editUser.name}
              onChange={handleEditChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={editUser.email}
              onChange={handleEditChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="username"
              value={editUser.username}
              onChange={handleEditChange}
              placeholder="Username"
            />
          </div>
          <button className="btnn --pri" onClick={handleEditSubmit}>
            Save Changes
          </button>
        </Modal>
      </DefaultLayout>
    </div>
  );
};
export default AccountInfo;
