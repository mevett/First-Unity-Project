#pragma strict

var rotationSpeed : float = 100.0; // Degrees per second

function Update () {
	transform.Rotate(Vector3(0,rotationSpeed * Time.deltaTime,0)); //Note use of deltaTime
}
function OnTriggerEnter(col : Collider){ 
	if(col.gameObject.tag == "Player"){
		col.gameObject.SendMessage("CellPickup"); 
		Destroy(gameObject);
	}
}