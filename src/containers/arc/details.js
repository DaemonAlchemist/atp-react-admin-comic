
import {connect} from "react-redux";
import ArcDetails from "../../components/arc/details";
import {Arc} from "../../reducer/arc";
import {Page} from "../../reducer/page";

export default connect(
    (state, props) => ({
        arc: props.id ? Arc().select.one(() => state, props.id) : undefined
    }),
    (dispatch, props) => ({
        updateArc: (data, dispatch) => {dispatch(Arc().action.update(props.id, data));},
        updateThumbnail: thumbnailFileId => {dispatch(Arc().action.update(props.id, {thumbnailFileId}));},
        updateBanner: bannerFileId => {dispatch(Arc().action.update(props.id, {bannerFileId}));},
        onNewPage: data => {
            dispatch(Page().action.create({
                arcId: props.id,
                name: data.results.fileName,
                imageId: data.results.id
            }));
        }
    })
)(ArcDetails);
