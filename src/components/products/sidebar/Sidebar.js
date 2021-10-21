import React, {useState} from "react";
import "../../../static/css/main_content/Sidebar.css";
import SideItem from "../../resusable/SideItem";
import axios from "axios";


const Sidebar = (props) => {


    const resetHandler = () => {
        window.location.reload();
    }

    const [choiceResults, setChoiceResults] = useState([]);

    const handleChange = (e) => {
        let choice = e.target.value;
        setChoiceResults(choice);
        props.callbackFromParent(choice);
    }

    return (
        <div className="sidebar_container">
          <form>
              {/* First Check Box Area */}
            <SideItem onChange={handleChange}  title="Shirt Size" firstOne="Watch" secondOne="Medium" thirdOne="Large"> 
            </SideItem>

            <SideItem onChange={handleChange} firstOne="Winter" secondOne="Summer" thirdOne="Spring">
               <div>
                <input onChange={handleChange} type="checkbox" value="Fall" name="fall" id="fall" />
                <label for="fall">Fall</label>
               </div>  
           </SideItem>

           <SideItem onChange={handleChange} firstOne="V Neck" secondOne="Round Neck" thirdBoxStyle={{display: "none"}} title="Shirt Type"> </SideItem>
          
          <SideItem onChange={handleChange} title="Gender" firstOne="Male" secondOne="Female" thirdBoxStyle={{display: "none"}} >    </SideItem>
          
          <SideItem onChange={handleChange} title="Price Range" firstOne="< $50" secondOne="< $100" thirdOne="< $150">
              <div style={{border:'solid blue'}}>
              <input onChange={handleChange} type="checkbox" id="<$300" value="<$300" name="<$300" />
              <label for="<$300"> &#60; $300 </label>
              </div>
          </SideItem>

          <SideItem>
              <button onClick={resetHandler}> Reset </button>
          </SideItem>
          </form>
        </div>
    ); 
}

export default Sidebar;