import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { setCurrentUser } from "../projectReducer";
import { notify, notifyError } from "../tools/notifications";
import Accountdetails from "./accountdetails";
function Account() {
  const userId = useRef(useParams().userId);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.projectReducer.currentUser);
  const [account, setAccount] = useState(null);
  let origin = useRef(account);
  const [disabled, setDisabled] = useState(true);
  const setAccountAndOrigin = (acc) => {
    setAccount(acc);
    setDisabled(true);
    origin.current = { ...acc };
  };
  const save = async () => {
    let updatedAccount;
    try {
      if (
        !account.username ||
        !account.password ||
        !account.firstName ||
        !account.lastName ||
        !account.email
      ) {
        return;
      }
      if (account._id === currentUser._id && origin.current.role === "ADMIN" && account.role !== "ADMIN") {
      if (!window.confirm("Are you sure you want to downgrade yourself?")) return;
      }
      updatedAccount = await client.updateUser(account);
      notify("Account updated successfully");
      if (account._id === currentUser._id) {
        dispatch(setCurrentUser(updatedAccount));
      }
      setAccountAndOrigin(updatedAccount);
    } catch (error) {
      console.log(error);
      notifyError("Invalid account");
    }
  };
  const navigate = useRef(useNavigate());
  useEffect(() => {
    if (!currentUser) return;
    if (!account) {
      if (!userId.current) setAccountAndOrigin(currentUser);
      else {
        if (userId.current === currentUser._id) {
          setAccountAndOrigin(currentUser);
          navigate.current("/Project/Account");
          return;
        }
        const findUser = async () => {
          try {
            return await client.findUserById(userId.current);
          } catch (error) {
            console.log(error);
            notifyError("User not found");
            return null;
          }
        };
        findUser().then((u) => setAccountAndOrigin(u));
      }
    } else {
      setDisabled(JSON.stringify(origin.current) === JSON.stringify(account));
    }
  }, [account, currentUser]);

  if (!currentUser)
    return <div className="alert alert-info">Please log in first!</div>;
  if (!account) return <div>Loading...</div>;
  return (
    <div>
      {account._id !== currentUser._id && (
        <button
          className="btn btn-secondary"
          onClick={() => {
            navigate.current("/Project/Account");
            setAccount(currentUser);
            userId.current = null;
          }}
        >
          	👈Back to my account
        </button>
      )}
      <Accountdetails
        account={account}
        setAccount={setAccount}
        disabled={disabled}
        save={save}
        currentUser={currentUser}
        modifiable={account._id === currentUser._id ? (account.role === "ADMIN") : (account.role !== "ADMIN")}
      />
    </div>
  );
}
export default Account;
