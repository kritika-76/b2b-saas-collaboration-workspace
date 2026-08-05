interface Props {
  message: string;
}

const ProfileToast = ({
  message,
}: Props) => {

  if (!message) return null;

  return (
    <div className="profile-toast">
      {message}
    </div>
  );
};

export default ProfileToast;