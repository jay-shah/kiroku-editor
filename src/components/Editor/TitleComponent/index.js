import TitleComponent from './TitleComponent'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapStatToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({});
};

export default connect(mapStatToProps, mapDispatchToProps)(TitleComponent)