import './index.css';

type InputBasicProps = {
  label?: string;
  required: boolean;
  type: string;
  value: string | boolean;
  onChange: (value: string | boolean) => void;
};

const defaultProps = {
  required: false,
  type: 'text',
};

export const PrimaryInput = (props: InputBasicProps) => {
  const { label, required, type, value, onChange } = props;

  const inputElements: { [key: string]: any } = {
    textarea: (
      <textarea
        rows={4}
        value={value.toString()}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
    checkbox: (
      <input
        type={type}
        checked={value.toString() === 'true' ? true : false}
        onChange={(e) => onChange(e.target.checked)}
      />
    ),
    other: (
      <input
        type={type}
        value={value.toString()}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
  };

  return (
    <div className={`input-primary ${type === 'checkbox' ? 'w-content' : ''}`}>
      {label && <span>{label + (required ? '*' : '') + ' :'}</span>}
      {inputElements[type] ?? inputElements['other']}
    </div>
  );
};

export const NormalInput = (props: InputBasicProps) => {
  const { label, required, type, value, onChange } = props;
  const inputElements: { [key: string]: any } = {
    textarea: (
      <textarea
        rows={4}
        value={value.toString()}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
    checkbox: (
      <input
        type={type}
        checked={value.toString() === 'true' ? true : false}
        onChange={(e) => onChange(e.target.checked)}
      />
    ),
    other: (
      <input
        type={type}
        value={value.toString()}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
  };

  return (
    <div className={`input-normal ${type === 'checkbox' ? 'w-content' : ''}`}>
      {label && <span>{label + (required ? '*' : '') + ' :'}</span>}
      {inputElements[type] ?? inputElements['other']}
    </div>
  );
};

export const SearchInput = () => {
  return (
    <div className="input-search">
      <img src="./images/svg/search-icon.svg" alt="Search Icon SVG" />
      <input type="search" placeholder="Rechercher dans Blocksto" />
    </div>
  );
};

PrimaryInput.defaultProps = defaultProps;
NormalInput.defaultProps = defaultProps;
