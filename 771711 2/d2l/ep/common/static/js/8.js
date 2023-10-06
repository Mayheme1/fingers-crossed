// To delete the following function, it is not being used anymore
//function ViewDialogPopup( contextId) {
//    var dialog = new D2L.NonModalDialog('actionDialog');
//    dialog.SetSrc('/d2l/eP/view/legacy_view_item.d2l', 'SrcCallback');
//    dialog.SetSrcParam('viewMode', 'popup');
//    dialog.SetSrcParam('contextId', contextId);
//    dialog.SetSize(600, 800);
//    dialog.AddButton(D2L.Control.Button.Type.Close);
//    dialog.Open();
//}

function MakeExploringPopup( objectId, objectTypeId, sameFrame, contextId, contextTypeId ) {
	var popup = new D2L.Popup();
	popup.height = 600;
	popup.width = 800;
	
	popup.AddCloseButton();
	
	var url = '';
	var qs = '';
	if ( objectTypeId == 1 ) {
		url = '/d2l/eP/collections/modify/collection_preview.d2l';
	} else if ( objectTypeId == 2 ) {
		url = '/d2l/eP/reflections/modify/reflection_view.d2l';
	} else if ( objectTypeId == 3 ) {
		url = '/d2l/eP/artifacts/modify/artifact_preview.d2l';
	} else if ( objectTypeId == 4 ) {
		url = '/d2l/eP/presentations/presentation_preview_popup.d2l';			
		qs = 'presId=' + objectId;		
		
		popup.height = 600;
		popup.width = 980;
	} else if (objectTypeId == 6) {
		url = '/d2l/eP/view/legacy_view_item.d2l';
	}
	
	qs += '&ou=' + Global.OrgUnitId;
	
	if ( contextId ) {
		qs += '&contextId=' + contextId + '&contextTypeId=' + contextTypeId;
	}else{
		qs += '&contextId=' + objectId;
	}

	if ( sameFrame ) {
		var n = new D2L.NavInfo();
		n.navigation = url + '?' + qs;
		Nav.Go(n);		
	} else {	
		if ( objectTypeId != 4 ) {
			popup.bodySource = url;
			popup.queryString = qs + '&viewMode=popup' ;
			popup.Open();
		} else {
			window.open( url + '?' + qs, '_blank', 'width=1000, height=800, location, scrollbars, resizable, toolbar, titlebar, menubar' );
		}
	}
}

function MakeReviewObjectPopup( objectId, objectTypeId, contextId, contextTypeId ) {
	var popup = new D2L.Popup();
	
	popup.AddCloseButton();
	
	var url = '';
	var qs = '';
	
	if ( contextTypeId == 4 ) {
		popup.height = 600;
		popup.width = 980;
		
		if ( objectTypeId == 2 ) {
			url = '/d2l/eP/presentations/review/review_reflection.d2l';
			
			qs = 'refId=' + objectId + '&presId=' + contextId + '&topObj=1';
		} else if ( objectTypeId == 3 ) {
			url = '/d2l/eP/presentations/review/review_artifact.d2l';
			qs = 'artId=' + objectId + '&presId=' + contextId + '&topObj=1';
		}	
		
		qs += '&ou=' + Global.OrgUnitId;
		
		window.open( url + '?' + qs, '_blank', 'width=1000, height=800, location, scrollbars, resizable, toolbar, titlebar, menubar' );
	}
}
