import { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useItems } from "../store/ItemsContext";

const Header = () => {
  const { itemsData } = useItems();

  const [successSnack, setSuccessSnack] = useState({
    itemsNumber: itemsData.length,
    changeType: "",
  });

  useEffect(() => {
    // "isEqual" defined true when "itemsNumber" changed to number of items
    // false when "ItemsNumber" is already the same
    if (itemsData.length > successSnack.itemsNumber)
      setSuccessSnack({ changeType: "add", itemsNumber: itemsData.length });
    else if (itemsData.length < successSnack.itemsNumber) {
      setSuccessSnack({ changeType: "cut", itemsNumber: itemsData.length });
    } else {
      setSuccessSnack({ changeType: "", itemsNumber: itemsData.length });
    }
  }, [itemsData.length]);

  return (
    <>
      <div>Rainy Restaurant, delicious food that drips to your tummy!</div>
      <Snackbar
        open={successSnack.changeType === "add"}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setSuccessSnack({ ...successSnack, changeType: "" })}
      >
        <Alert
          onClose={() => setSuccessSnack({ ...successSnack, changeType: "" })}
          severity="success"
          elevation={12}
          sx={{ width: "100%" }}
        >
          Item added to the menu!
        </Alert>
      </Snackbar>
      <Snackbar
        open={successSnack.changeType === "cut"}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setSuccessSnack({ ...successSnack, changeType: "" })}
      >
        <Alert
          onClose={() => setSuccessSnack({ ...successSnack, changeType: "" })}
          severity="warning"
          elevation={12}
          sx={{ width: "100%" }}
        >
          Item removed from the menu.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Header;
