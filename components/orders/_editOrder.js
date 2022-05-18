import React from "react";
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setEditOpen } from "../../store/modelSlice";
import { useState, useEffect } from "react";
import {
  useGetOrderQuery,
  useChangeOrderStatusMutation,
} from "../../services/bookStoreApi";
import _receipt from "./_receipt";
import ToasterAlert from "../_alertToaster";
import { setOpen } from "../../store/toasterSlice";
import _statusChanger from "./_statusChanger";

export default function _editOrder({ id }) {
  const dispatch = useDispatch();
  const { data: orderData, refetch, ...orderDataArgs } = useGetOrderQuery(id);
  const [edit, { ...editArgs }] = useChangeOrderStatusMutation();
  const [alert, setAlert] = useState({ message: "", severity: "" });
  const open = useSelector((state) => state.toaster.open);
  const [marked, setMarked] = useState(false);

  const changeStatus = async (value) => {
    try {
      const res = await edit({ id: id, status: value }).unwrap();
      setAlert({ message: "Success", severity: "success" });
      dispatch(setOpen(true));
      setAlert({
        message: "Status Changed Successfully",
        severity: "success",
      });
      refetch();
      setMarked(true);
    } catch (error) {
      console.log(error);
      setMarked(false);
      setAlert({
        message: "Something Went Wrong,Failed To Mark",
        severity: "error",
      });
      dispatch(setOpen(true));
    }
  };

  useEffect(() => {
    if (!id || orderDataArgs.isError) {
      dispatch(setEditOpen(false));
      dispatch(setOpen(true));
      setAlert({ message: "Something Went Wrong", severity: "error" });
    }
  }, [id, orderDataArgs.isError]);

  return (
    <Box
      sx={{
        margin: " auto",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: 1,
      }}
    >
      <ToasterAlert
        isOpen={open}
        severity={alert.severity}
        message={alert.message}
      />
      <Typography textAlign={"left"} variant="h5" component="h5">
        Change Order Status
      </Typography>
      <Box
        sx={{
          maxHeight: 400,
          width: 1,
          margin: "1rem auto",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
            margin: "auto",
            width: 1,
            padding: 3,
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h6">
                Order Id
              </Typography>
              <Typography variant="body1" component="h6">
                {orderData?.id}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h6">
                Order Status
              </Typography>
              <Typography variant="body1" component="h6">
                {!marked ? orderData?.orderStatus : "Delivered"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h6">
                Date
              </Typography>
              <Typography variant="body1" component="h6">
                {new Date(orderData?.orderDate).toLocaleDateString()}
              </Typography>
            </Box>
          </Box>

          <Typography variant="h6" component="h6">
            Receipt
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid grey",
              padding: 1,
            }}
          >
            <_receipt
              cartProducts={orderData?.cartProducts}
              totalPrice={orderData?.totalPrice}
            />
          </Box>
          <_statusChanger
            changeStatus={changeStatus}
            id={orderData?.id}
            currentStatus={orderData?.orderStatus}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="warning"
            onClick={() => dispatch(setEditOpen(false))}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
