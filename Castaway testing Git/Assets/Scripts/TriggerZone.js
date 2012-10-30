#pragma strict
var lockedSound : AudioClip; // Play when player tries to enter locked door
var doorLight : Light; // The light above the door
function OnTriggerEnter(col : Collider) {
  if (col.gameObject.tag == "Player") {
   	if(Inventory.charge == 4){
		transform.FindChild("door").SendMessage("DoorCheck");
		if(GameObject.Find("PowerGUI")){ 
			Destroy(GameObject.Find("PowerGUI")); 
			doorLight.color = Color.green;
		}
	}
	else {
		transform.FindChild("door").audio.PlayOneShot(lockedSound); 
		col.gameObject.SendMessage("HUDon");
	}
  }
}
 