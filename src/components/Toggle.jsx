import "./Toggle.css";

export const Toggle = ({handleChange, isChecked}) => {
    return(
        <div className="toggle-container">
            <input 
                type="checkBox"
                id="check"
                className="toggle"
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="check"><span>Dark Mode</span></label>
        </div>
    )
};