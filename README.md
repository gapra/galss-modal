galss-modal
===========

Galss Modal :: Simple to make your Modal - Lightbox - Popup


Make sure stylesheet and javascript link tag on head
```sh
<link rel="stylesheet" type="text/css" href="assets/stylesheets/galss-modal.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="assets/javascripts/galss-modal.js"></script>
```

HTML used:
```sh
<button type="button" class="gp-btn basic-btn" modal-target-id="#yourmodalID">View Modal Small</button>
<button type="button" class="gp-btn basic-btn" modal-target-id="#yourmodalID2">View Modal Default</button>
<button type="button" class="gp-btn basic-btn" modal-target-id="#yourmodalID3">View Modal Large</button>
<button type="button" class="gp-btn basic-btn" modal-target-id="#yourmodalID4">View Modal Fullsize</button>
<!-- Modal Element -->
<div id="yourmodalID" class="galss-modal">
	<div class="modal-block">
		<div class="modal-content">
			<!-- Content here -->
			<h2 class="weight-800 mtop-0">Modal Header</h2>
			<p class="intro">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			</p>
			<p>
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
	</div>
</div>
```

You can use variant size (small, default, large, and full size). Just add class small/large/fullsize on modal-block tag.
```sh
<div id="yourmodalID" class="galss-modal">
	<div class="modal-block large"> <-- class size
		<div class="modal-content">
			....
```