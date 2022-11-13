import { useState } from 'react';
import './index.css';

type DropdownBasicProps = {
  label?: string;
  values: string[];
  onSelect: (index: number) => void;
};

export const PrimaryDropdown = (props: DropdownBasicProps) => {
  const { label, values, onSelect } = props;
  const [isDown, setIsDown] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="primary-dropdown">
      <div className="dropdown-header">
        <span>{`${label} :`}</span>
        <span>{values[selected]}</span>
        <img
          src="./images/svg/drop-arrow.svg"
          alt="Drop Icon"
          onClick={() => setIsDown(!isDown)}
        />
      </div>
      {isDown && (
        <div className="dropdown-content">
          {values.map((value, index) => (
            <p
              key={`dropdown-${index}`}
              onClick={() => {
                setSelected(index);
                setIsDown(false);
                onSelect(index);
              }}
            >
              {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
