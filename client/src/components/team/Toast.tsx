interface Props {
  message: string;
}

const Toast = ({ message }: Props) => {
  if (!message) return null;

  return (
    <div className="toast success">
      {message}
    </div>
  );
};

export default Toast;