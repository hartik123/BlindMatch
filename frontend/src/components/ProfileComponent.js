import { message, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../apicalls";
import { UpdateProfilePicture } from "../apicalls/users";
import { HideLoading, ShowLoading } from "../redux/loadersSlice";

function Profile({ showProfileModal, setShowProfileModal }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [phoneno, setPhoneno] = useState('')

  const [image, setimage] = useState(user.image || "");

  function handleFileInput(e) {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimage(reader.result);
    };
  }

  const updateProfilePicture = async () => {
    try {
      dispatch(ShowLoading());
      const response = await UpdateProfilePicture({ image });
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        setShowProfileModal(false);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const submitHandler = async() =>{
    try {
        const userData = {
            gender: gender,
            location : location
        }
        dispatch(ShowLoading());
        const response = await UpdateProfilePicture(userData);
        dispatch(HideLoading());
        if (response.success) {
          message.success(response.message);
          setShowProfileModal(false);
        } else {
          message.error(response.message);
        }
      } catch (error) {
        dispatch(HideLoading());
        message.error(error.message);
      }

    
  }

  return (
    <Modal
      title="Profile"
      open={showProfileModal}
      closable={false}
      footer={null}
      width={600}
    >
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="name" name="name" value={user.name} disabled/>
        <label for="gender">Choose a Gender:</label>

        <select name="gender" id="gender">
          <option value="M" selected>Male</option>
          <option value="F">Female</option>
        </select>

        <input type="text" placeholder="Email" name="email" value={user.email} disabled/>
        <input type="text" placeholder="Location" name="location" onChange={(e)=>setLocation(e.target.value)}/>
        <input type="text" placeholder="Phone number" name="phoneno" value={user.phoneno} disabled/>
        <button type="submit" >Submit</button>
      </form>
    </Modal>
  );
}

export default Profile;
