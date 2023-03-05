import { message, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../apicalls";
import { UpdateProfilePicture } from "../apicalls/users";
import { HideLoading, ShowLoading } from "../redux/loadersSlice";

function Profile({ showProfileModal, setShowProfileModal }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("M");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [interestOne, setInterestOne] = useState("");
  const [interestTwo, setInterestTwo] = useState("");
  const [interestThree, setInterestThree] = useState("");
  const [interestFour, setInterestFour] = useState("");

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

  const submitHandler = async () => {
    try {
      const userData = {
        gender: gender,
        location: location,
        interest: {
          interestOne,
          interestTwo,
          interestThree,
          interestFour,
        },
      };
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
  };

  return (
    <Modal
      title="Profile"
      open={showProfileModal}
      closable={true}
      onCancel={()=>setShowProfileModal(false)} 
      footer={null}
      width={600}
    >
      <form onSubmit={submitHandler} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="name"
          name="name"
          value={user.name}
          disabled
        />
        <div>
          <label for="gender">Choose a Gender:</label>

          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => {
              console.log("gender", e.target.value);
              setGender(e.target.value);
            }}
          >
            <option value="M" selected>
              Male
            </option>
            <option value="F">Female</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          disabled
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone number"
          name="phoneno"
          value={user.phoneno}
          disabled
        />
        <div>Interests:</div>
        <div>
          <span>Interest 1: </span>
          <select
            name="interestOne"
            value={interestOne}
            onChange={(e) => setInterestOne(e.target.value)}
            required
          >
            <option value="painting" name="painting">
              Painting
            </option>
            <option value="music" name="music">
              Music
            </option>
            <option value="dancing" name="dancing">
              Dancing
            </option>
            <option value="travel" name="travel">
              Travel
            </option>
          </select>
        </div>

        <div>
          <span>Interest 2: </span>
          <select
            name="interestTwo"
            value={interestTwo}
            onChange={(e) => setInterestTwo(e.target.value)}
            required
          >
            <option value="painting" name="painting">
              Painting
            </option>
            <option value="music" name="music">
              Music
            </option>
            <option value="dancing" name="dancing">
              Dancing
            </option>
            <option value="travel" name="travel">
              Travel
            </option>
          </select>
        </div>

        <div>
          <span>Interest 3: </span>
          <select
            name="interestThree"
            value={interestThree}
            onChange={(e) => setInterestThree(e.target.value)}
            required
          >
            <option value="painting" name="painting">
              Painting
            </option>
            <option value="music" name="music">
              Music
            </option>
            <option value="dancing" name="dancing">
              Dancing
            </option>
            <option value="travel" name="travel">
              Travel
            </option>
          </select>
        </div>

        <div>
          <span>Interest 4: </span>
          <select
            name="interestFour"
            value={interestFour}
            onChange={(e) => setInterestFour(e.target.value)}
            required
          >
            <option value="painting" name="painting">
              Painting
            </option>
            <option value="music" name="music">
              Music
            </option>
            <option value="dancing" name="dancing">
              Dancing
            </option>
            <option value="travel" name="travel">
              Travel
            </option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
}

export default Profile;
