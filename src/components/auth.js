import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CheckToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    toast.warning("Already Logout", { autoClose: 3000 });
    return false;
  }
  return true;
}

export default CheckToken;
