function MakeAddCommentDialog( opener, contextChain, objName ) {
	var DialogAddComment = new D2L.Dialog('AddCommentsDialog', CallbackAddComment);

	DialogAddComment.SetTitle(new D2L.LP.Text.LangTerm('eP_Common.AddComment.titAddComments'));
	DialogAddComment.SetWidth('530');
	DialogAddComment.SetHeight('450');

	DialogAddComment.AddPrimaryButton(D2L.Dialog.ButtonType.Add);
	DialogAddComment.AddButton( D2L.Dialog.ButtonType.Cancel );
	DialogAddComment.SetSrc('/d2l/eP/common/add_comment_popup.d2l', 'Save');
	DialogAddComment.SetSrcParam('ou', Global.OrgUnitId);
	DialogAddComment.SetSrcParam('contextId', contextChain);
	DialogAddComment.SetSrcParam('objName', D2L.Util.Url.Encode(objName));
	
	DialogAddComment.Open(opener);			
}

function CallbackAddComment(response) {

	response.GetDialog().Close();					
	if ( response.GetType() == D2L.Dialog.ResponseType.Positive ) {
	    Nav.Reload();
	}
}
