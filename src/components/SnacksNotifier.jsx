import { useState, useEffect } from "react";
import { useItems } from "../store/ItemsContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SnacksNotifier = () => {
  const { itemsData } = useItems();
  const [successSnack, setSuccessSnack] = useState({
    itemsNumber: itemsData.length,
    changeType: "",
  });

  useEffect(() => {
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

export default SnacksNotifier;
