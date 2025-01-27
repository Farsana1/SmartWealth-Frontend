import React, { useState } from "react";

const Application = () => {

  // const [formData, setFormData] = useState({
  //   mainMember: { name: "", age: "", income: "" },
  //   familyMembers: [],
  // });

  // const handleMainMemberChange = (field, value) => {
  //   setFormData({
  //     ...formData,
  //     mainMember: {
  //       ...formData.mainMember,
  //       [field]: value,
  //     },
  //   });
  // };

  // const addFamilyMember = () => {
  //   setFormData({
  //     ...formData,
  //     familyMembers: [
  //       ...formData.familyMembers,
  //       { name: "", age: "", occupation: "", relationship: "" },
  //     ],
  //   });
  // };

  // const handleMemberDetailsChange = (index, field, value) => {
  //   const updatedDetails = [...formData.familyMembers];
  //   updatedDetails[index] = {
  //     ...updatedDetails[index],
  //     [field]: value,
  //   };
  //   setFormData({ ...formData, familyMembers: updatedDetails });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data Submitted:", formData);
  // };

  return (
 <>
   {/*
    <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit} className="border shadow m-3 d-flex justify-content-center align-items-center flex-column">
          <h2 className="p-3">Family Information Form</h2>
    
          
          <div className="main-member-section p-3 d-flex justify-content-center align-items-center flex-column">
            <label>
              Name:
              <input className="form-control"
                type="text"
                value={formData.mainMember.name}
                onChange={(e) => handleMainMemberChange("name", e.target.value)}
              />
            </label>
            <label>
              Age:
              <input className="form-control"
                type="number"
                value={formData.mainMember.age}
                onChange={(e) => handleMainMemberChange("age", e.target.value)}
              />
            </label>
            <label>
              Income:
              <input className="form-control"
                type="number"
                value={formData.mainMember.income}
                onChange={(e) => handleMainMemberChange("income", e.target.value)}
              />
            </label>
          </div>
    
    
    
          //  Additional Family Members 
          <div className="family-members-section">
            
            {formData.familyMembers.map((member) => (
              <div className="member-section">
                
                <h5>Family Member</h5>
                <label>
                  Name:
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) =>
                      handleMemberDetailsChange( "name", e.target.value)
                    }
                  />
                </label>
                <label>
                  Age:
                  <input
                    type="number"
                    value={member.age}
                    onChange={(e) =>
                      handleMemberDetailsChange(index, "age", e.target.value)
                    }
                  />
                </label>
                <label>
                  Occupation:
                  <input
                    type="text"
                    value={member.occupation}
                    onChange={(e) =>
                      handleMemberDetailsChange(index, "occupation", e.target.value)
                    }
                  />
                </label>
                <label>
                  Relationship:
                  <input
                    type="text"
                    value={member.relationship}
                    onChange={(e) =>
                      handleMemberDetailsChange(index, "relationship", e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
    
            // {/* Add Member Button
            <button type="button" onClick={addFamilyMember}>
              Add Member
            </button>
          </div>
    
    
          // {/* Submit Button 
         <div className="d-flex justify-content-center align-items-center"> 
          <button type="submit" className="btn btn-success rounded p-2">Submit</button>
          </div>
        </form>
   </div> */}
 </>
  );
};

export default Application;
