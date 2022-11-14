import './index.css';

type ButtonProps = {
  title: string;
  onClick: () => void;
};

type IconButtonProps = {
  src: string;
  selected: boolean;
} & ButtonProps;

export const PrimaryIconButton = (props: IconButtonProps) => {
  const { title, src, selected, onClick } = props;

  return (
    <div className="icon-button" onClick={onClick}>
      <img
        className={selected ? 'selected' : ''}
        src={src}
        alt={`Icon Button Image-${title}`}
      />
      <span>{title}</span>
    </div>
  );
};

export const MiniIconButton = (props: IconButtonProps) => {
  const { title, src, selected, onClick } = props;

  return (
    <div className="icon-button" onClick={onClick}>
      <img
        className={`mini ${selected ? 'selected' : ''}`}
        src={src}
        alt={`Icon Button Image-${title}`}
      />
      <span className="mini">{title}</span>
    </div>
  );
};
