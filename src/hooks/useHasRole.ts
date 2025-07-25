type Props = {
  roles?: string[];
};
const useHasRole = ({ roles }: Props) => {
  // const { userProfile } = useSelector(
  //   (state: RootState) => state.authentication
  // );

  // if (roles && roles.length > 0) {
  //   const hasRole =
  //     userProfile?.authorities?.some((authority) =>
  //       roles.includes(authority)
  //     ) ?? false;
  //   if (!hasRole) {
  //     return false;
  //   }
  // }

  return true; // If no roles are specified, allow access by default
};

export default useHasRole;
