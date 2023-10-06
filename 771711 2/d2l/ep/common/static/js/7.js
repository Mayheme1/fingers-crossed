function CallbackDeleteComment( rpcResponse ) {
	if ( rpcResponse.GetResponseType() == D2L.Rpc.ResponseType.Success ) {
		Nav.Reload();
	} else {
		UI.Error( 'rpc error');
	}
}

function DeleteComment( objectId, objectTypeId, contextObjectId, contextTypeId, objectName, controlId, commentId ) {
    var commentIds = '';
    var thisGrid;
    var sPrimaryMessage;	
	
	if ( commentId.length > 0 ) {
		commentIds = commentId;
		sPrimaryMessage = new D2L.Language.Term( 'eP_Common.AddComment.jsConfirmDeletePrimarySingle' );
    } else {
	    thisGrid = UI.GetControl('GRID_comments', controlId);
	    if (!thisGrid) {
	        thisGrid = UI.GetControl('GRID_comments');
	    }
		commentIds = thisGrid.GetSelectedKeys();
      sPrimaryMessage = new D2L.Language.Term( 'eP_Common.AddComment.jsConfirmDeletePrimarySelected' );				
	}
	
	if ( commentIds.length > 0 ) {
		var ConfirmDelete = function( response ) {
			if( response.GetType() == D2L.Dialog.ResponseType.Positive ) {	
				var rpc = new D2L.Rpc.Create( 'DeleteComments', CallbackDeleteComment, '/d2l/eP/common/controls/comments_area.control.d2l?ou=' + Global.OrgUnitId );
				rpc.Call( objectId, objectTypeId, commentIds, contextObjectId, contextTypeId, objectName );	
			}
		};
		UI.Confirm( ConfirmDelete, sPrimaryMessage, new D2L.Language.Term( 'eP_Common.AddComment.jsConfirmDeleteSecondary' ) );
	} else {
		UI.Error( new D2L.Language.Term( 'eP_Common.AddComment.lblNoCommentSelected' ) );
	}
}
