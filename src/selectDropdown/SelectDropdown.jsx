import { Arrow } from "./components";
import { useSelectDropdown } from "./hooks";
import "./css/selectDropdown.style.css";

const SelectDropdown = ({
  selected = null,
  data = [],
  placeholder = "--Choose--",
  onChange = () => {},
}) => {
  const { dropdownRef, isVisible, options, toggleDropdown } = useSelectDropdown(
    { data, selected }
  );

  const onSelectValue = (event) => {
    onChange(event);
    toggleDropdown();
  };

  return (
    <div className="dropdown-element" ref={dropdownRef}>
      <div className="dropdown-element-inner">
        <div
          className={`dropdown-element__selected ${
            isVisible ? "visible" : "hidden"
          }`}
          onClick={toggleDropdown}
        >
          <span>{selected ? selected?.label : placeholder}</span>
          <Arrow />
        </div>
        {isVisible && (
          <div className="dropdown-element__list">
            {options?.length === 0 ? (
              <div className="dropdown-element__item">No options</div>
            ) : (
              options?.map((list) => {
                return (
                  <div
                    key={`${list.label}-${list.value}`}
                    onClick={() => onSelectValue(list)}
                    className={`dropdown-element__item ${
                      selected && selected?.value === list.value
                        ? "selected"
                        : ""
                    }`}
                  >
                    {list.label}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectDropdown;
