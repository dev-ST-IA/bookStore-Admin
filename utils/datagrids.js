export const booksColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    minWidth: 200,
  },
  {
    field: "authorName",
    headerName: "Author",
    width: 200,
  },
  {
    field: "categoryName",
    headerName: "Category",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    sortable: true,
    minWidth: 160,
  },
  {
    field: "cost",
    headerName: "Cost",
    type: "number",
    sortable: true,
    minWidth: 160,
  },
  {
    field: "units",
    headerName: "Units",
    type: "number",
    sortable: true,
    minWidth: 160,
  },
  {
    field: "sales",
    headerName: "Total Sales",
    type: "number",
    sortable: true,
    minWidth: 160,
  },
  {
    field: "rating",
    headerName: "Rating",
    type: "number",
    sortable: true,
    minWidth: 160,
  },
];

export const ordersColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "userId",
    headerName: "Customer Id",
    width: 90,
  },
  {
    field: "orderDate",
    headerName: "OrderDate",
    type: "date",
    width: 200,
    valueFormatter: (params) => {
      const date = new Date(params.value);
      const parsed = date.toLocaleString();
      return parsed ? parsed : Date.now().toLocaleString();
    },
  },
  {
    field: "totalPrice",
    headerName: "Total Amount",
    type: "number",
    sortable: true,
    minWidth: 160,
  },
  {
    field: "totalSales",
    headerName: "No Of Books Bought",
    type: "number",
    sortable: true,
    minWidth: 160,
  },
  {
    field: "orderStatus",
    headerName: "Order Status",
    sortable: true,
    minWidth: 160,
  },
];

export const customersColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First Name",
    minWidth: 90,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    minWidth: 90,
  },
  {
    field: "emailAddress",
    headerName: "E-mail",
    minWidth: 160,
  },
  {
    field: "userName",
    headerName: "Username",
    minWidth: 160,
  },
  {
    field: "phoneNumber",
    headerName: "Contact Number",
    sortable: true,
    minWidth: 160,
  },
  {
    field: "createdDateTime",
    headerName: "Registered Date",
    minWidth: 160,
    valueFormatter: (params) => {
      const date = new Date(params.value);
      const parsed = date.toLocaleString();
      return parsed ? parsed : Date.now().toLocaleString();
    },
  },
];

export const salesColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "date",
    headerName: "Date",
    minWidth: 200,
    type: "date",
    valueFormatter: (params) => {
      const date = new Date(params.value);
      const parsed = date.toLocaleDateString();
      return parsed ? parsed : new Date().toLocaleDateString();
    },
    align: "center",
  },
  {
    field: "totalSales",
    headerName: "Total Sales",
    minWidth: 90,
    align: "center",
  },
  {
    field: "totalIncome",
    headerName: "Income Generated(LKR)",
    minWidth: 180,
    align: "center",
  },
];
