#pragma strict

static var charge : int = 0;
var collectSound : AudioClip;
// HUD 
var hudCharge : Texture2D[]; 
var chargeHudGUI : GUITexture;  //The inventory GUI obj

function Start () {
	charge = 0;
	chargeHudGUI.enabled = false;
}

function CellPickup(){ 
	charge++;
	chargeHudGUI.texture = hudCharge[charge]; // Change the HUD
	HUDon();
	AudioSource.PlayClipAtPoint(collectSound, transform.position); 
}

function HUDon(){ 
	if(!chargeHudGUI.enabled){
		chargeHudGUI.enabled = true;
	}
}
