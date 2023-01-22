// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContact } from 'redux/operations';
// import { getContacts, getError, getIsLoading } from 'redux/selectors';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       {isLoading && <p>Loading contacts...</p>}
//       {error && <p>Error</p>}
//       <p>{items.length > 0 && JSON.stringify(items, null)}</p>
//     </div>
//   );
// };
