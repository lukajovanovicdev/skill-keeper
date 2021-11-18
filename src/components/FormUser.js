import React , {useState} from 'react';


function FormUser() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [location, setLocation] = useState("");
  
    const writingName = (event) => {
      setName(event.target.value);
    };
  
    const writingImageUrl = (event) => {
      setImage(event.target.value);
    };

    const writingDateOfBirth = (event) => {
        setDateOfBirth(event.target.value);
    };

    const writingLocation = (event) => {
        setLocation(event.target.value);
    };
  
    const savingData = (event) => {
      event.preventDefault();
      const data = { name: name, image: image , dateOfBirth: dateOfBirth , location: location};
      console.log(data);
    };
  
    return (
      <form className="form" onSubmit={savingData}>
        <input
          className="input"
          type="text"
          placeholder="name"
          onChange={writingName}
          value={name}
        />
        <input
          className="input"
          type="text"
          placeholder="image"
          onChange={writingImageUrl}
          value={image}
        />
        <input
          className="input"
          type="text"
          placeholder="dateOfBirth"
          onChange={writingDateOfBirth}
          value={dateOfBirth}
        />
        <input
          className="input"
          type="text"
          placeholder="location"
          onChange={writingLocation}
          value={location}
        />
                
        <button className="button" type="submit">
          Save
        </button>
        {/* <button className="button" type="submit">Cancel</button> */}
      </form>
    );
  }

export default FormUser
