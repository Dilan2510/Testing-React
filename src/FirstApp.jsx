import PropTypes from "prop-types";

// const getNewMessage = (e) => {
//   return e;
// };

// const newMessage = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newMessage2 = {
//   message: "Codigo 14",
//   title: "Inbdila",
// };

export const FirstApp = ({ title, subTitle }) => {
  // console.log(props);

  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <h1> {getNewMessage(4)} </h1> */}
      {/* <h1>{JSON.stringify(newMessage2)}</h1> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  subTitle: "Soy un subTitulo",
};
