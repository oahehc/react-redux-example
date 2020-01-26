import { connect } from "react-redux";
import Comp from "./Comp";
import { incrementAction } from "./reduxModule";

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = { incrementAction };
export default connect(mapStateToProps, mapDispatchToProps)(Comp);
